pragma solidity ^0.4.18;
import './Database.sol';
import './SafeMath.sol';
import './Asset.sol';


// Note: Users can only have 1 sell order and 1 buy order for each individual asset, as the orders are stored as as sha3 hash of assetAddress + sender address
// InVariants: Users must withdraw available funds from asset before trading
contract MarketPlace {
  using SafeMath for *;

  Database public database;

  mapping (address => mapping (bytes32 => bool)) public orders;  // Hash of (assetID, sellerAddress, amountToBuy, price, boolean(BuyOrder = true))

  mapping (address => uint) public weiDeposited;
  mapping (address => uint) public weiOwed;
  bool public reentrancyLock = false;


  function MarketPlace(address _database)
  public {
    database = Database(_database);
  }

  // Gives Ether sent to initatior of this sellOrder and transfers shares of asset to purchaser
  // Note: Check if creator of sell order has enough shares left
  // @Param: ID of the sell order to be bought
  // TODO: log amounts?
  function buyAsset(bytes32 _assetID, address _seller, uint _amount, uint _price)
  external
  payable
  nonReentrant
  whenNotPaused
  onlyApproved
  returns (bool){
    bytes32 thisOrder = keccak256(_assetID, _seller, _amount, _price, false);
    require(orders[_seller][thisOrder]);
    require(msg.value == (_amount.mul(_price)));
    require(Asset(database.addressStorage(keccak256("contract", "Asset"))).tradeShares(_assetID, _seller, msg.sender, _amount));
    weiOwed[_seller] = weiOwed[_seller].add(msg.value);
    delete orders[_seller][thisOrder];
    LogSellOrderCompleted(thisOrder, _assetID, msg.sender);
    return true;
  }


  function sellAsset(bytes32 _assetID, address _buyer, uint _amount, uint _price)
  public
  nonReentrant
  onlyApproved
  whenNotPaused
  returns (bool){
    bytes32 thisOrder = keccak256(_assetID, _buyer, _amount, _price, true);
    require(orders[_buyer][thisOrder]);
    require(Asset(database.addressStorage(keccak256("contract", "Asset"))).tradeShares(_assetID, msg.sender, _buyer, _amount));
    weiDeposited[_buyer] = weiDeposited[_buyer].sub(_amount.mul(_price));
    weiOwed[msg.sender] = weiOwed[msg.sender].add(_amount.mul(_price));
    delete orders[_buyer][thisOrder];
    LogBuyOrderCompleted(thisOrder, _assetID, msg.sender);
    return true;
  }

  function createBuyOrder(bytes32 _assetID, uint _amount, uint _price)
  external
  nonReentrant
  onlyApproved
  payable
  requiresEther
  aboveZero(_amount, _price)
  validAsset(_assetID)
  returns (bool) {
    require(msg.value == _amount.mul(_price));
    bytes32 orderID = keccak256(_assetID, msg.sender, _amount, _price, true);
    require(!orders[msg.sender][orderID]);
    orders[msg.sender][orderID] = true;
    weiDeposited[msg.sender] = weiDeposited[msg.sender].add(msg.value);
    LogBuyOrderCreated(orderID, _assetID, msg.sender);
    LogBuyOrderDetails(orderID, _amount, _price);
    return true;
  }

  // Creates an orde for user to sell their Asset shares
  function createSellOrder(bytes32 _assetID, uint _amount, uint _price)
  external
  nonReentrant
  onlyApproved
  aboveZero(_amount, _price)
  validAsset(_assetID)
  hasEnoughShares(_assetID, _amount)
  returns (bool) {
    // TODO; matching buy/sell orders
    bytes32 orderID = keccak256(_assetID, msg.sender, _amount, _price, false);
    orders[msg.sender][orderID] = true;
    LogSellOrderCreated(orderID, _assetID, msg.sender);
    LogSellOrderDetails(orderID, _amount, _price);
    return true;
  }

  // Deletes previously made order. Returns deposited Wei if it is a Buy order
  function deleteOrder(bytes32 _assetID, uint _amount, uint _price, bool _buyOrder)
  external
  nonReentrant
  onlyApproved
  returns (bool) {
    bytes32 orderID = keccak256(_assetID, msg.sender, _amount, _price, _buyOrder);
    require(orders[msg.sender][orderID]);
    if (_buyOrder) {
      uint returnValue = _amount.mul(_price);
      weiDeposited[msg.sender] = weiDeposited[msg.sender].sub(returnValue);
      weiOwed[msg.sender] = weiOwed[msg.sender].add(returnValue);
    }
    delete orders[msg.sender][orderID];
    return true;
  }

  // User can withdraw the wei they are owed here
  function withdraw()
  external
  nonReentrant
  onlyApproved
  whenNotPaused
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

  function()
  external {
    revert();
  }

  // This verifies that the asset is registered on the MyBit Platform and has successfully completed funding
  modifier validAsset(bytes32 _assetID) {
    require (_assetID != bytes32(0));
    require (database.uintStorage(keccak256("fundingStage", _assetID)) == 4);
    _;
  }

  // Check if user has enough shares to create SellOrder
  modifier hasEnoughShares(bytes32 _assetID, uint _requiredShares) {
    require(database.uintStorage(keccak256("shares", _assetID, msg.sender)) >= _requiredShares);
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
  event LogBuyOrderCreated(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _creator);
  event LogBuyOrderDetails(bytes32 indexed orderID, uint indexed _amount, uint indexed _price);
  event LogBuyOrderCompleted(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _purchaser);
  event LogSellOrderCompleted(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _purchaser);
  event LogSellOrderCreated(bytes32 indexed _id, bytes32 indexed _assetAddress, address indexed _creator);
  event LogSellOrderDetails(bytes32 indexed orderID, uint indexed _amount, uint indexed _price);
}
