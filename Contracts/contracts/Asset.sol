pragma solidity ^0.4.19;
import './SafeMath.sol';
import './Database.sol';


// Asset contract manages all payments to the live asset, all withdraws of income from shareholders and all trading of shares.
// All information about assets are stored in Database.sol. Write privilege is given to the current live Asset contract.
// TODO: Allow owner to change assetManager
contract Asset {
using SafeMath for *;

  Database public database;

 // --------Stages & Timing------------
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack



  // The constructor is called when someone initiates a new funding period for an asset
  // @Param: Creator of this asset contract
  // @Param: The location of this assets information found on IPFS. Also serves as an ID within MyBitHub contract
  // @Param: The ID of the installer chosen for this asset
  // @Param: The amount of Wei to be raised in order to install asset
  // @Param: The amount of time allowed for asset to try and reach it's funding goal
  // @Param: The type of asset being funded (ie. Solar, Mining, ATM)
  function Asset(address _database)
  public {
    database = Database(_database);
  }


  // Revenue produced by the asset will be sent here
  // Invariants: Requires Eth is sent with transaction | Asset must be in "live" stage
  // @Param: The ID of the asset to send to
  // @Param: A note that can be left by the payee
  function receiveIncome(bytes32 _assetID, string _note)
  external
  payable
  requiresEther
  atStage(_assetID, 4)
  returns (bool)  {
    uint totalReceived = database.uintStorage(keccak256("totalReceived", _assetID));
    database.setUint(keccak256("totalReceived", _assetID), totalReceived.add(msg.value));
    LogIncomeReceived(msg.sender, msg.value, _assetID);
    LogAssetNote(_note, block.timestamp);
    return true;
  }


  // Asset funders can receive their share of the income here
  // Invariants: Asset must be live. Sender must have shares in the asset. There must be income earned.
  function withdraw(bytes32 _assetID, bool _otherWithdrawal)
  external
  nonReentrant
  whenNotPaused
  mustHaveAddressSet(_otherWithdrawal)
  returns (bool){
    uint shares = database.uintStorage(keccak256("shares", _assetID, msg.sender));
    require (shares > 0);
    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    uint totalPaidToFunders = database.uintStorage(keccak256("totalPaidToFunders", _assetID));
    uint totalPaidToFunder = database.uintStorage(keccak256("totalPaidToFunder", _assetID, msg.sender));
    uint totalReceived = database.uintStorage(keccak256("totalReceived", _assetID));
    uint256 payment = (totalReceived.mul(shares).div(amountRaised)).sub(totalPaidToFunder);
    assert (payment != 0);
    assert (totalPaidToFunders <= totalReceived);    // Don't let amount paid to funders exceed amount received
    database.setUint(keccak256("totalPaidToFunder", _assetID, msg.sender), totalPaidToFunder.add(payment));
    database.setUint(keccak256("totalPaidToFunders", _assetID), totalPaidToFunders.add(payment));
    if(_otherWithdrawal){
      address withdrawalAddress = database.addressStorage(keccak256("withdrawalAddress", msg.sender));
      withdrawalAddress.transfer(payment);
      LogInvestmentPaidToWithdrawalAddress(msg.sender, withdrawalAddress, payment, block.timestamp);
    }
    else{
      msg.sender.transfer(payment);
      LogInvestmentPaid(msg.sender, payment, block.timestamp);
    }
    return true;
}


  // Trades shares of an asset to other user. Must trade relative amount paid to Funder to balance withdrawl amount.
  // Must trade over relative amount of paidToFunder, So person buying shares will also be recognized as being paid out for those shares in the past
  // Invariants: Can only be called by current marketplace contract. User must have enough shares to make trade.
  // @Param address selling shares
  // @Param address buying shares
  // @Param number of shares being traded
  function tradeShares(bytes32 _assetID, address _from, address _to, uint256 _amount)
  external
  whenNotPaused
  returns (bool) {
    require(msg.sender == database.addressStorage(keccak256("contract", "MarketPlace")));
    require(_from != database.addressStorage(keccak256("assetManager", _assetID)));  // Don't let assetManager trade his shares away
    uint sharesFrom = database.uintStorage(keccak256("shares", _assetID, _from));
    require(sharesFrom >= _amount);
    uint sharesTo = database.uintStorage(keccak256("shares", _assetID, _to));
    uint paidToFunderFrom = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _from));
    uint paidToFunderTo = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _to));
    uint256 relativePaidOutAmount = (paidToFunderFrom.mul(_amount)).div(sharesFrom);
    database.setUint(keccak256("totalPaidToFunder", _assetID, _to), paidToFunderTo.add(relativePaidOutAmount));
    database.setUint(keccak256("totalPaidToFunder", _assetID, _from), paidToFunderFrom.sub(relativePaidOutAmount));
    database.setUint(keccak256("shares", _assetID, _from), sharesFrom.sub(_amount));
    database.setUint(keccak256("shares", _assetID, _to), sharesTo.add(_amount));
    LogSharesTraded(_assetID, _from, _to, block.number);
    return true;
  }

  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    bytes32 functionHash = keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress));
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    LogDestruction(_holdingAddress, this.balance, msg.sender);
    selfdestruct(_holdingAddress);
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  modifier atStage(bytes32 _assetID, uint _stage) {
    require(database.uintStorage(keccak256("fundingStage", _assetID)) == _stage);
    _;
  }

  modifier onlyApproved(uint8 _accessLevel) {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= _accessLevel);
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

  modifier mustHaveAddressSet(bool _param) {
    if(_param){
      require(database.addressStorage(keccak256("withdrawalAddress", msg.sender)) != address(0));
    }
    _;
  }

  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  function () public {
    revert();
  }

  event LogSharesTraded(bytes32 indexed _assetID, address indexed _from, address indexed _to, uint _timestamp);
  event LogDestruction(address indexed _locationSent, uint256 indexed _amountSent, address indexed _caller);
  event LogIncomeReceived(address indexed _sender, uint256 indexed _amount, bytes32 indexed _assetID);
  event LogInvestmentPaid(address indexed _funder, uint256 indexed _amount, uint256 indexed _timestamp);
  event LogInvestmentPaidToWithdrawalAddress(address indexed _funder, address indexed _withdrawalAddress, uint256 indexed _amount, uint256 _timestamp);
  event LogAssetNote(string indexed _note, uint256 indexed _timestamp);
}
