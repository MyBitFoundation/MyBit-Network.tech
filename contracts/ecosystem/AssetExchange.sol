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

  mapping (address => mapping (bytes32 => bool)) public orders;  // Hash of (assetAddress, sellerAddress, amountToBuy, price, boolean(BuyOrder = true))

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
  function buyAsset(address _assetAddress, address _buyer, address _seller, uint _amount, uint _price)
  external
  payable
  whenNotPaused
  isAllowed(_assetAddress, _seller, _amount)
  // burnRequired
  returns (bool){
    require(msg.sender == _buyer || database.boolStorage(keccak256(abi.encodePacked("approval", _buyer, msg.sender, address(this), msg.sig))), "Buyer has not given approval");
    bytes32 thisOrder = keccak256(abi.encodePacked(_assetAddress, _seller, _amount, _price, false));
    require(orders[_seller][thisOrder]);
    require(msg.value == _amount.mul(_price).div(decimals));
    DivToken assetToken = DivToken(_assetAddress);
    require(assetToken.transferFrom(_seller, _buyer, _amount));
    weiOwed[_seller] = weiOwed[_seller].add(msg.value);
    delete orders[_seller][thisOrder];
    events.exchange('Sell order completed', thisOrder, _assetAddress, _buyer);
    //emit LogSellOrderCompleted(thisOrder, _assetAddress, _buyer);
    return true;
  }

  // Settles an open SellOrder, giving the deposited ether to sender and sender tokens to initiator of BuyOrder
  // @Param: ID of the asset, which senders ownershipUnits belong to
  // @Param: Address of the user who created BuyOrder
  // @Param: Number of ownershipUnits being sold
  // @Param: The WEI cost per unit
  function sellAsset(address _assetAddress, address _seller, address _buyer, uint _amount, uint _price)
  public
  whenNotPaused
  isAllowed(_assetAddress, msg.sender, _amount)
  returns (bool){
    require(msg.sender == _seller || database.boolStorage(keccak256(abi.encodePacked("approval", _seller, msg.sender, address(this), msg.sig))), "Seller has not given approval");
    bytes32 thisOrder = keccak256(abi.encodePacked(_assetAddress, _buyer, _amount, _price, true));       // Get order ID
    require(orders[_buyer][thisOrder]);    // Check order exists
    uint value = _amount.mul(_price).div(decimals);
    DivToken assetToken = DivToken(_assetAddress);
    require(assetToken.transferFrom(_seller, _buyer, _amount));
    weiDeposited[_buyer] = weiDeposited[_buyer].sub(value);
    weiOwed[_seller] = weiOwed[_seller].add(value);
    delete orders[_buyer][thisOrder];
    events.exchange('Buy order completed', thisOrder, _assetAddress, _seller);
    //emit LogBuyOrderCompleted(thisOrder, _assetAddress, _seller);
    return true;
  }

  // Create a BuyOrder and leave WEI as a deposit for user that picks up order
  // @Param: ID of the asset, which the sender wants to purchase ownershipUnits of
  // @Param: Number of ownershipUnits being bought
  // @Param: The WEI cost per unit
  function createBuyOrder(address _assetAddress, address _buyer, uint _amount, uint _price)
  external
  payable
  requiresEther
  aboveZero(_amount, _price)
  validAsset(_assetAddress)
  // burnRequired
  returns (bool) {
    require(msg.sender == _buyer || database.boolStorage(keccak256(abi.encodePacked("approval", _buyer, msg.sender, address(this), msg.sig))), "Buyer has not given approval");
    require(msg.value == _amount.mul(_price).div(decimals));
    bytes32 orderID = keccak256(abi.encodePacked(_assetAddress, _buyer, _amount, _price, true));
    require(!orders[_buyer][orderID]);
    orders[_buyer][orderID] = true;
    weiDeposited[_buyer] = weiDeposited[_buyer].add(msg.value);
    events.exchange('Buy order created', orderID, _assetAddress, _buyer);
    events.order('Buy order', orderID, _amount, _price);
    //emit LogBuyOrderCreated(orderID, _assetAddress, _buyer);
    //emit LogBuyOrderDetails(orderID, _amount, _price);
    return true;
  }

  // Create a BuyOrder and leave WEI as a deposit for user that picks up order
  // @Param: ID of the asset, which sender is trying to sell
  // @Param: Number of ownershipUnits being sold
  // @Param: The WEI cost per unit
  function createSellOrder(address _assetAddress, address _seller, uint _amount, uint _price)
  external
  aboveZero(_amount, _price)
  validAsset(_assetAddress)
  isAllowed(_assetAddress, _seller, _amount)
  returns (bool) {
    require(msg.sender == _seller || database.boolStorage(keccak256(abi.encodePacked("approval", _seller, msg.sender, address(this), msg.sig))), "Seller has not given approval");
    bytes32 orderID = keccak256(abi.encodePacked(_assetAddress, _seller, _amount, _price, false));
    require(!orders[_seller][orderID]);
    orders[_seller][orderID] = true;
    events.exchange('Sell order created', orderID, _assetAddress, _seller);
    events.order('Sell order', orderID, _amount, _price);
    //emit LogSellOrderCreated(orderID, _assetAddress, _seller);
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
  function deleteOrder(address _assetAddress, address _orderMaker, uint _amount, uint _price, bool _buyOrder)
  external
  returns (bool) {
    require(msg.sender == _orderMaker || database.boolStorage(keccak256(abi.encodePacked("approval", _orderMaker, msg.sender, address(this), msg.sig))));
    bytes32 orderID = keccak256(abi.encodePacked(_assetAddress, _orderMaker, _amount, _price, _buyOrder));
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
    events.transaction('Destroy contract', address(this), _holdingAddress, address(this).balance, address(0));
    //emit LogDestruction(_holdingAddress, address(this).balance, msg.sender);
    selfdestruct(_holdingAddress);
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                      Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // This verifies that the asset is registered on the MyBit Platform and has successfully completed funding
  //------------------------------------------------------------------------------------------------------------------
  modifier validAsset(address _assetAddress) {
    require (_assetAddress != address(0), "Address does not exist");
    require (database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress))), "Crowdsale not finalized");
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Check if user has enough ownershipUnits to create SellOrder
  //------------------------------------------------------------------------------------------------------------------
  modifier isAllowed(address _assetAddress, address _sender, uint _tokens) {
    require(DivToken(_assetAddress).allowance(_sender, address(this)) >= _tokens, "User has not given enough allowance");
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verifies that _amount or _price aren't null
  //------------------------------------------------------------------------------------------------------------------
  modifier aboveZero(uint _amount, uint _price) {
    require(_amount.mul(_price) > 0, "_amount or _price is zero");
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
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))), "Contract paused");
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Throw if Ether hasn't been sent
  //------------------------------------------------------------------------------------------------------------------
  modifier requiresEther() {
    require(msg.value > 0, "Ether has not been sent");
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

}
