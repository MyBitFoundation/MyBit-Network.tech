pragma solidity ^0.4.18;
import './Database.sol';
import './SafeMath.sol';
import './Asset.sol';



// TODO: add pause mechanisms
// TODO: maybe hardcode Asset contract
// Note: Users can only have 1 sell order and 1 buy order for each individual asset, as the orders are stored as as sha3 hash of assetAddress + sender address
// InVariants: Users must withdraw available funds from asset before trading
contract MarketPlace {
  using SafeMath for *;

  Database public database;

  mapping (bytes32 => Buy) public buyOrders;
  mapping (bytes32 => Sell) public sellOrders;

  mapping (address => uint) public weiDeposited;
  mapping (address => uint) public weiOwed;
  bool public reentrancyLock = false;

  struct Buy {
    address initiator;
    bytes32 assetContract;
    uint amount;
    uint price;
  }

  struct Sell {
    address initiator;
    bytes32 assetContract;
    uint amount;
    uint price;
  }

  function MarketPlace(address _database)
  public {
    database = Database(_database);
  }

  // Gives Ether sent to initatior of this sellOrder and transfers shares of asset to purchaser
  // Note: Check if creator of sell order has enough shares left
  // @Param: ID of the sell order to be bought
  function buyAsset(bytes32 _sellOrderID)
  external
  payable
  nonReentrant
  onlyApproved
  sellOrderExists(_sellOrderID)
  needsToWithdraw(sellOrders[_sellOrderID].assetContract, sellOrders[_sellOrderID].initiator)
  returns (bool){
    Sell memory thisOrder = sellOrders[_sellOrderID];
    require(msg.value >= (thisOrder.amount.mul(thisOrder.price)));
    require(Asset(database.addressStorage(keccak256("contract", "Asset"))).tradeShares(thisOrder.assetContract, thisOrder.initiator, msg.sender, thisOrder.amount));
    weiOwed[thisOrder.initiator] = weiOwed[thisOrder.initiator].add(msg.value);
    delete sellOrders[_sellOrderID];
    LogSellOrderCompleted(_sellOrderID, thisOrder.assetContract, msg.sender);
    return true;
  }


  function sellAsset(bytes32 _buyOrderID)
  public
  nonReentrant
  onlyApproved
  buyOrderExists(_buyOrderID)
  needsToWithdraw(buyOrders[_buyOrderID].assetContract, msg.sender)
  returns (bool){
    Buy memory thisOrder = buyOrders[_buyOrderID];
    require(Asset(database.addressStorage(keccak256("contract", "Asset"))).tradeShares(thisOrder.assetContract, msg.sender, thisOrder.initiator, thisOrder.amount));
    weiDeposited[thisOrder.initiator] = weiDeposited[thisOrder.initiator].sub(thisOrder.amount.mul(thisOrder.price));
    weiOwed[msg.sender] = weiOwed[msg.sender].add(thisOrder.amount.mul(thisOrder.price));
    delete buyOrders[_buyOrderID];
    LogBuyOrderCompleted(_buyOrderID, thisOrder.assetContract, msg.sender);
    return true;
  }

  function createBuyOrder(uint _amount, uint _price, bytes32 _assetID)
  external
  nonReentrant
  onlyApproved
  payable
  requiresEther
  aboveZero(_amount, _price)
  validAsset(_assetID)
  returns (bool) {
    require(msg.value == _amount.mul(_price));
    bytes32 id = keccak256(_assetID, msg.sender);
    require(buyOrders[id].initiator == address(0));  // Make user delete previous buy order first in order to reclaim deposited Ether
    Buy storage thisOrder = buyOrders[id];
    thisOrder.initiator = msg.sender;
    thisOrder.assetContract = _assetID;
    thisOrder.amount = _amount;
    thisOrder.price = _price;
    weiDeposited[msg.sender] = weiDeposited[msg.sender].add(msg.value);
    LogBuyOrderCreated(id, _assetID, msg.sender);
    return true;
  }

  function createSellOrder(uint _amount, uint _price, bytes32 _assetID)
  external
  nonReentrant
  onlyApproved
  aboveZero(_amount, _price)
  validAsset(_assetID)
  hasEnoughShares(_assetID, _amount)
  returns (bool) {
    bytes32 id = keccak256(_assetID, msg.sender);
    Sell storage thisOrder = sellOrders[id]; // This will get overwritten if user tries to create more than one sell order per asset
    thisOrder.initiator = msg.sender;
    thisOrder.assetContract = _assetID;
    thisOrder.amount = _amount;
    thisOrder.price = _price;
    LogSellOrderCreated(id, _assetID, msg.sender);
    return true;
  }

  // Deletes previously made Buy order. Returns deposited Wei for Buy order.
  // @Param: Buy OrderID
  function deleteBuyOrder(bytes32 _orderID)
  external
  nonReentrant
  onlyApproved
  returns (bool) {
    Buy memory thisBuyOrder = buyOrders[_orderID];
    require(thisBuyOrder.initiator == msg.sender);
    uint returnValue = thisBuyOrder.amount.mul(thisBuyOrder.price);
    weiDeposited[msg.sender] = weiDeposited[msg.sender].sub(returnValue);
    weiOwed[msg.sender] = weiOwed[msg.sender].add(returnValue);
    delete buyOrders[_orderID];
    return true;
  }

  // Deletes previously made Sell order.
  // @Param: Sell order ID
  function deleteSellOrder(bytes32 _orderID)
  external
  nonReentrant
  onlyApproved
  returns (bool) {
      Sell memory thisSellOrder = sellOrders[_orderID];
      require(thisSellOrder.initiator == msg.sender);
      delete sellOrders[_orderID];
      return true;
  }

  // User can withdraw the wei they are owed here
  function withdraw()
  external
  nonReentrant
  onlyApproved
  returns (bool){
    uint owed = weiOwed[msg.sender];
    weiOwed[msg.sender] = 0;
    msg.sender.transfer(owed);
    return true;
  }

  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    require(database.boolStorage(keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress))));
    LogDestruction(_holdingAddress, this.balance, msg.sender);
    selfdestruct(_holdingAddress);
  }

  function getSellOrderAmountPrice(bytes32 _sellOrderID)
  external
  sellOrderExists(_sellOrderID)
  public
  returns (uint, uint){
    Sell storage thisOrder = sellOrders[_sellOrderID];
    return (thisOrder.amount, thisOrder.price);
  }

  function getBuyOrderAmountprice(bytes32 _buyOrderID)
  external
  buyOrderExists(_buyOrderID)
  public
  returns (uint, uint){
    Sell storage thisOrder = buyOrders[_buyOrderID];
    return (thisOrder.amount, thisOrder.price);
  }

  function()
  external {
    revert();
  }

  // This verifies that the asset is registered on the MyBit Platform
  modifier validAsset(bytes32 _assetID) {
    require (_assetID != bytes32(0));
    require (database.uintStorage(keccak256("fundingStage", _assetID)) == 4);
    _;
  }

  modifier hasEnoughShares(bytes32 _assetID, uint _requiredShares) {
    require(database.uintStorage(keccak256("shares", _assetID, msg.sender)) >= _requiredShares);
    _;
  }

  // TODO: maybe move this check in asset contract
  modifier needsToWithdraw(bytes32 _assetID, address _seller) {
    uint totalReceived = database.uintStorage(keccak256("totalReceived", _assetID));
    uint payment = totalReceived.mul(database.uintStorage(keccak256("shares", _assetID, _seller))).div(database.uintStorage(keccak256("amountRaised", _assetID))).sub(database.uintStorage(keccak256("totalPaidToFunder", _assetID, _seller)));
    require(payment == 0);
    _;
  }

  modifier buyOrderExists(bytes32 _orderID) {
    require (buyOrders[_orderID].initiator != address(0));
    _;
  }

  modifier sellOrderExists(bytes32 _orderID) {
    require (sellOrders[_orderID].initiator != address(0));
    _;
  }

  modifier aboveZero(uint _amount, uint _price) {
    require(_amount.mul(_price) > 0);
    _;
  }

  // Must have access level of 2 to use
  modifier onlyApproved {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) == 4);
    _;
  }

  modifier whenNotPaused {
    require(!database.boolStorage(keccak256("pause", this)));
    _;
  }

  modifier requiresEther() {
    require(msg.value > 0);
    _;
  }

  modifier nonReentrant() {
    require(!reentrancyLock);
    reentrancyLock = true;
    _;
    reentrancyLock = false;
  }

  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);

  event LogSellOrderCreated(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _creator);
  event LogBuyOrderCreated(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _creator);
  event LogBuyOrderCompleted(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _purchaser);
  event LogSellOrderCompleted(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _purchaser);


}
