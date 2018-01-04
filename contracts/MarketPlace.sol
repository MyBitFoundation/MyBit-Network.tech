pragma solidity ^0.4.18;
import './MyBitHub.sol';
import './Asset.sol'; 
import './SafeMath.sol'; 



// TODO: check authorization
// TODO: only one order per asset for each individual? 
// TODO: verify that correct assetcontract address has been given 
contract MarketPlace { 
  using SafeMath for *; 

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

  function MarketPlace(address _myBitHub)
  public {
    myBitHub = MyBitHub(_myBitHub); 
  }

  function BuyAsset(bytes32 _sellOrderID)
  public 
  payable 
  nonReentrant
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
  returns (bool) {
    Buy thisOrder = buyOrders[keccak256(_assetContract, msg.sender)]; 
    thisOrder.initiator = msg.sender;
    thisOrder.assetContract = _assetContract; 
    return true;
  }

  function Withdrawl() 
  public
  nonReentrant 
  returns (bool){
    uint256 owed = weiOwed[msg.sender]; 
    weiOwed[msg.sender] = 0;
    msg.sender.transfer(owed);
    return true; 
  }


  function() { 
    revert(); 
  }

  modifier nonReentrant() {
    require(!reentrancyLock);
    reentrancyLock = true;
    _;
    reentrancyLock = false;
  }

}
