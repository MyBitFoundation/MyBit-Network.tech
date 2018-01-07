pragma solidity ^0.4.18;
import './MyBitHub.sol';
import './Asset.sol'; 
import './SafeMath.sol'; 



// TODO: verify that correct assetcontract address has been given 
// Note: Users can only have 1 sell order and 1 buy order for each individual asset, as the orders are stored as as sha3 hash of assetAddress + sender address 
// Note: Users who do not withdrawl asset earnings will also trade away the right to those earnings. 
contract MarketPlace { 
  using SafeMath for *; 

  Approval public approval; 
  MyBitHub public myBitHub; 

  mapping (bytes32 => Buy) public buyOrders;
  mapping (bytes32 => Sell) public sellOrders; 

  mapping (address => uint256) public weiDeposited; 
  mapping (address => uint256) public weiOwed; 
  bool public reentrancyLock = false; 

  struct Buy { 
    address initiator;
    address assetContract; 
    uint256 amount;
    uint256 price;
  }

  struct Sell {
    address initiator;
    address assetContract; 
    uint256 amount;
    uint256 price; 
  }

  function MarketPlace(address _approval)
  public {
    approval = Approval(_approval); 
  }

  function setMyBitHub(address _myBitHub)
  external
  returns (bool) {
    require(msg.sender == approval.owner()); 
    myBitHub = MyBitHub(_myBitHub);
    return true; 
  }

  // Gives Ether sent to initatior of this sellOrder and transfers shares of asset to purchaser
  function BuyAsset(bytes32 _sellOrderID)
  public 
  payable 
  nonReentrant
  onlyApproved
  returns (bool){ 
    Sell thisOrder = sellOrders[_sellOrderID];
    require(msg.value > (thisOrder.amount.mul(thisOrder.price))); 
    Asset thisAsset = Asset(thisOrder.assetContract); 
    require(thisAsset.shares(thisOrder.initiator) >= thisOrder.amount);
    require(thisAsset.tradeShares(thisOrder.initiator, msg.sender, thisOrder.amount)); 
    weiOwed[thisOrder.initiator] = weiOwed[thisOrder.initiator].add(msg.value);
    delete sellOrders[_sellOrderID]; 
    return true;
  }

  function SellAsset(bytes32 _buyOrderID) 
  public 
  nonReentrant 
  onlyApproved
  returns (bool){ 
    Buy thisOrder = buyOrders[_buyOrderID]; 
    Asset thisAsset = Asset(thisOrder.assetContract); 
    require(thisAsset.shares(msg.sender) >= thisOrder.amount); 
    require(thisAsset.tradeShares(msg.sender, thisOrder.initiator, thisOrder.amount)); 
    weiDeposited[thisOrder.initiator] = weiDeposited[thisOrder.initiator].sub(thisOrder.amount.mul(thisOrder.price)); 
    weiOwed[msg.sender] = weiOwed[msg.sender].add(thisOrder.amount.mul(thisOrder.price)); 
    delete buyOrders[_buyOrderID]; 
    return true; 
  }

  function createBuyOrder(uint256 _amount, uint256 _price, address _assetContract)
  external
  nonReentrant
  onlyApproved
  aboveZero(_amount, _price)
  validAsset(_assetContract)
  returns (bool) {
    Buy thisOrder = buyOrders[keccak256(_assetContract, msg.sender)];   // This will get overwritten if user tries to create more than one buy order 
    thisOrder.initiator = msg.sender;
    thisOrder.assetContract = _assetContract;
    thisOrder.amount = _amount; 
    thisOrder.price = _price; 
    return true;
  }

  function createSellOrder(uint256 _amount, uint256 _price, address _assetContract)
  external
  nonReentrant
  onlyApproved
  aboveZero(_amount, _price)
  validAsset(_assetContract)
  returns (bool) { 
    Sell thisOrder = sellOrders[keccak256(_assetContract, msg.sender)]; // This will get overwritten if user tries to create more than one buy order 
    thisOrder.initiator = msg.sender; 
    thisOrder.assetContract = _assetContract; 
    thisOrder.amount = _amount; 
    thisOrder.price = _price; 
    return true; 
  }

  function Withdrawl() 
  public
  nonReentrant 
  onlyApproved
  returns (bool){
    uint256 owed = weiOwed[msg.sender]; 
    weiOwed[msg.sender] = 0;
    msg.sender.transfer(owed);
    return true; 
  }


  function() { 
    revert(); 
  }

  modifier validAsset(address _assetAddress) { 
    Asset thisAsset = Asset(_assetAddress); 
    require(myBitHub.assets(thisAsset.storageHash()) == _assetAddress);     // Check if this asset is registered with MyBitHub     _; 
    _; 
  }
  

  modifier aboveZero(uint256 _amount, uint256 _price) { 
    require(_amount.mul(_price) > 0); 
    _; 
  }
  

  // Must have access level of 2 to use
  modifier onlyApproved() { 
    require(approval.userAccess(msg.sender) >= 4); 
    _; 
  }

  modifier nonReentrant() {
    require(!reentrancyLock);
    reentrancyLock = true;
    _;
    reentrancyLock = false;
  }

  // function getBuyOrder(address _assetAddress)
  // external
  // view { 

  // }

}
