pragma solidity ^0.4.24;
import '../database/Database.sol';
import '../database/Events.sol';
import '../math/SafeMath.sol';
import '../interfaces/DivToken.sol';
// import "../access/ERC20Burner.sol";


// @title Simple decentralized exchange contract
// @notice A sample contract to implement rudimentary asset-token trading
// @dev Note: Users can only have 1 sell order and 1 buy order for each individual asset
// @dev The orders are stored as as sha3 hash of critical parameters to save storage costs
contract AssetExchange {
  using SafeMath for uint;

  Database public database;
  Events public events;
  // ERC20Burner private burner;

  mapping (address => mapping (bytes32 => bool)) public orders;  // Hash of (assetID, sellerAddress, amountToBuy, price, boolean(BuyOrder = true))

  mapping (address => uint) public weiDeposited;
  mapping (address => uint) public weiOwed;
  uint private decimals = uint256(1e18);


  // @notice constructor: initializes database
  // @param: the address for the database contract used by this platform
  constructor(address _database, address _events)
  public {
    database = Database(_database);
    events = Events(_events);
    // burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }

  // Gives Ether sent to initatior of this sellOrder and transfers ownership units of asset to purchaser
  // Note: Check if creator of sell order has enough ownership units left
  // @Param: ID of the asset, which these ownershipUnits belong to
  // @Param: Address of the user who created SellOrder
  // @Param: Number of ownershipUnits being traded
  // @Param: The WEI cost per unit
  function buyAsset(bytes32 _assetID, address _buyer, address _seller, uint _amount, uint _price)
  external
  payable
  whenNotPaused
  isAllowed(_assetID, _seller, _amount)
  // burnRequired
  returns (bool){
    require(msg.sender == _buyer || database.boolStorage(keccak256(abi.encodePacked("approval", _buyer, msg.sender, address(this), msg.sig))));
    bytes32 thisOrder = keccak256(abi.encodePacked(_assetID, _seller, _amount, _price, false));
    require(orders[_seller][thisOrder]);
    require(msg.value == _amount.mul(_price).div(decimals));
    DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    require(assetToken.transferFrom(_seller, _buyer, _amount));
    weiOwed[_seller] = weiOwed[_seller].add(msg.value);
    delete orders[_seller][thisOrder];
    events.exchange('Sell order completed', thisOrder, _assetID, _buyer);
    //emit LogSellOrderCompleted(thisOrder, _assetID, _buyer);
    return true;
  }

  // Settles an open SellOrder, giving the deposited ether to sender and sender tokens to initiator of BuyOrder
  // @Param: ID of the asset, which senders ownershipUnits belong to
  // @Param: Address of the user who created BuyOrder
  // @Param: Number of ownershipUnits being sold
  // @Param: The WEI cost per unit
  function sellAsset(bytes32 _assetID, address _seller, address _buyer, uint _amount, uint _price)
  public
  whenNotPaused
  isAllowed(_assetID, msg.sender, _amount)
  returns (bool){
    require(msg.sender == _seller || database.boolStorage(keccak256(abi.encodePacked("approval", _seller, msg.sender, address(this), msg.sig))));
    bytes32 thisOrder = keccak256(abi.encodePacked(_assetID, _buyer, _amount, _price, true));       // Get order ID
    require(orders[_buyer][thisOrder]);    // Check order exists
    uint value = _amount.mul(_price).div(decimals);
    DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    require(assetToken.transferFrom(_seller, _buyer, _amount));
    weiDeposited[_buyer] = weiDeposited[_buyer].sub(value);
    weiOwed[_seller] = weiOwed[_seller].add(value);
    delete orders[_buyer][thisOrder];
    events.exchange('Buy order completed', thisOrder, _assetID, _seller);
    //emit LogBuyOrderCompleted(thisOrder, _assetID, _seller);
    return true;
  }

  // Create a BuyOrder and leave WEI as a deposit for user that picks up order
  // @Param: ID of the asset, which the sender wants to purchase ownershipUnits of
  // @Param: Number of ownershipUnits being bought
  // @Param: The WEI cost per unit
  function createBuyOrder(bytes32 _assetID, address _buyer, uint _amount, uint _price)
  external
  payable
  requiresEther
  aboveZero(_amount, _price)
  validAsset(_assetID)
  // burnRequired
  returns (bool) {
    require(msg.sender == _buyer || database.boolStorage(keccak256(abi.encodePacked("approval", _buyer, msg.sender, address(this), msg.sig))));
    require(msg.value == _amount.mul(_price).div(decimals));
    bytes32 orderID = keccak256(abi.encodePacked(_assetID, _buyer, _amount, _price, true));
    require(!orders[_buyer][orderID]);
    orders[_buyer][orderID] = true;
    weiDeposited[_buyer] = weiDeposited[_buyer].add(msg.value);
    events.exchange('Buy order created', orderID, _assetID, _buyer);
    events.order('Buy order', orderID, _amount, _price);
    //emit LogBuyOrderCreated(orderID, _assetID, _buyer);
    //emit LogBuyOrderDetails(orderID, _amount, _price);
    return true;
  }

  // Create a BuyOrder and leave WEI as a deposit for user that picks up order
  // @Param: ID of the asset, which sender is trying to sell
  // @Param: Number of ownershipUnits being sold
  // @Param: The WEI cost per unit
  function createSellOrder(bytes32 _assetID, address _seller, uint _amount, uint _price)
  external
  aboveZero(_amount, _price)
  validAsset(_assetID)
  isAllowed(_assetID, _seller, _amount)
  returns (bool) {
    bytes32 orderID = keccak256(abi.encodePacked(_assetID, _seller, _amount, _price, false));
    require(!orders[_seller][orderID]);
    orders[_seller][orderID] = true;
    events.exchange('Sell order created', orderID, _assetID, _seller);
    events.order('Sell order', orderID, _amount, _price);
    //emit LogSellOrderCreated(orderID, _assetID, _seller);
    //emit LogSellOrderDetails(orderID, _amount, _price);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Create a BuyOrder and leave WEI as a deposit for user that picks up order
  // @Param: ID of the asset
  // @Param: Number of ownershipUnits being sold
  // @Param: The WEI cost per unit
  // @Param: Is this order a BuyOrder?
  //------------------------------------------------------------------------------------------------------------------
  function deleteOrder(bytes32 _assetID, address _orderMaker, uint _amount, uint _price, bool _buyOrder)
  external
  returns (bool) {
    require(msg.sender == _orderMaker || database.boolStorage(keccak256(abi.encodePacked("approval", _orderMaker, msg.sender, address(this), msg.sig))));
    bytes32 orderID = keccak256(abi.encodePacked(_assetID, _orderMaker, _amount, _price, _buyOrder));
    require(orders[_orderMaker][orderID]);
    if (_buyOrder) {
      uint returnValue = _amount.mul(_price).div(decimals);
      weiDeposited[_orderMaker] = weiDeposited[_orderMaker].sub(returnValue);
      weiOwed[_orderMaker] = weiOwed[_orderMaker].add(returnValue);
    }
    delete orders[_orderMaker][orderID];
    return true;
  }
  //------------------------------------------------------------------------------------------------------------------
  // User can withdraw the wei they are owed here
  //------------------------------------------------------------------------------------------------------------------
  function withdraw()
  external
  whenNotPaused
  returns (bool){
    uint owed = weiOwed[msg.sender];
    weiOwed[msg.sender] = 0;
    msg.sender.transfer(owed);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  // @notice Destroys contract and sends WEI to _holdingAddress
  //------------------------------------------------------------------------------------------------------------------
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    require(database.boolStorage(keccak256(abi.encodePacked(address(this), _functionInitiator, "destroy", keccak256(abi.encodePacked(_holdingAddress))))));
    events.transaction('Destroy contract', address(this), _holdingAddress, address(this).balance, '');
    //emit LogDestruction(_holdingAddress, address(this).balance, msg.sender);
    selfdestruct(_holdingAddress);
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                      Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // This verifies that the asset is registered on the MyBit Platform and has successfully completed funding
  //------------------------------------------------------------------------------------------------------------------
  modifier validAsset(bytes32 _assetID) {
    require (_assetID != bytes32(0));
    require (database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Check if user has enough ownershipUnits to create SellOrder
  //------------------------------------------------------------------------------------------------------------------
  modifier isAllowed(bytes32 _assetID, address _sender, uint _tokens) {
    require(DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)))).allowance(_sender, address(this)) >= _tokens);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verifies that _amount or _price aren't null
  //------------------------------------------------------------------------------------------------------------------
  modifier aboveZero(uint _amount, uint _price) {
    require(_amount.mul(_price) > 0);
    _;
  }

  // // @notice reverts if user hasn't approved burner to burn platform token
  // modifier burnRequired {
  //   //emit LogSig(msg.sig);
  //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
  //   _;
  // }

  //------------------------------------------------------------------------------------------------------------------
  // Verify contract isn't paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Throw if Ether hasn't been sent
  //------------------------------------------------------------------------------------------------------------------
  modifier requiresEther() {
    require(msg.value > 0);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }



  //------------------------------------------------------------------------------------------------------------------
  //                                      Events
  //------------------------------------------------------------------------------------------------------------------
  /*
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
  event LogBuyOrderCreated(bytes32 _orderID, bytes32 indexed _assetID, address indexed _creator);
  event LogBuyOrderCompleted(bytes32 _orderID, bytes32 indexed _assetAddress, address indexed _purchaser);
  event LogSellOrderCreated(bytes32 _orderID, bytes32 indexed _assetAddress, address indexed _creator);
  event LogSellOrderCompleted(bytes32 _orderID, bytes32 indexed _assetAddress, address indexed _purchaser);
  event LogBuyOrderDetails(bytes32 _orderID, uint indexed _amount, uint indexed _price);
  event LogSellOrderDetails(bytes32 orderID, uint indexed _amount, uint indexed _price);
  event LogSig(bytes4 _sig);
  */
}
