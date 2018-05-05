pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Database.sol';


// Asset contract manages all payments, withdrawls and trading of ownershipUnits for live assets
// All information about assets are stored in Database.sol. Write privilege is given to the current live Asset contract.
contract Asset {
using SafeMath for *;

  Database public database;

  bool private rentrancy_lock = false;    // Prevents re-entrancy attack



  // Constructor
  // @Param: Address of the database contract
  function Asset(address _database)
  public {
    database = Database(_database);
  }


  // Revenue produced by the asset will be sent here
  // Invariants: Requires Eth is sent with transaction | Asset must be in "live" stage
  // @Param: The ID of the asset to send to
  // @Param: A note that can be left by the payee
  function receiveIncome(bytes32 _assetID, bytes32 _note)
  external
  payable
  requiresEther
  atStage(_assetID, 4)
  returns (bool)  {
    uint totalReceived = database.uintStorage(keccak256("totalReceived", _assetID));
    uint managerAmount = msg.value.mul(database.uintStorage(keccak256("operatorPercentage", _assetID))).div(100);
    database.addressStorage(keccak256("assetOperator", _assetID)).transfer(managerAmount);
    database.setUint(keccak256("totalReceived", _assetID), totalReceived.add(msg.value.sub(managerAmount)));
    LogIncomeReceived(msg.sender, msg.value, _assetID);
    LogAssetNote(_note, block.timestamp);
    return true;
  }


  // Asset funders can receive their share of the income here
  // Invariants: Asset must be live. Sender must have ownershipUnits in the asset. There must be income earned.
  // @Param: The assetID this funder is trying to withdraw from
  // @Param: Boolean, whether or not the user wants the withdraw to go to an external address
  function withdraw(bytes32 _assetID, bool _otherWithdrawal)
  external
  nonReentrant
  whenNotPaused
  mustHaveAddressSet(_otherWithdrawal)
  returns (bool){
    uint ownershipUnits = database.uintStorage(keccak256("ownershipUnits", _assetID, msg.sender));
    require (ownershipUnits > 0);
    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    uint totalPaidToFunders = database.uintStorage(keccak256("totalPaidToFunders", _assetID));
    uint totalPaidToFunder = database.uintStorage(keccak256("totalPaidToFunder", _assetID, msg.sender));
    uint totalReceived = database.uintStorage(keccak256("totalReceived", _assetID));
    uint payment = (totalReceived.mul(ownershipUnits).div(amountRaised)).sub(totalPaidToFunder);
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

  // Returns the amount of WEI owed to the asset owner
  // @Param: The ID of the asset
  // @Param: The address of the owner
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    uint ownershipUnits = database.uintStorage(keccak256("ownershipUnits", _assetID, _user));
    if (ownershipUnits == 0) { return 0; }
    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    uint totalPaidToFunder = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _user));
    uint totalReceived = database.uintStorage(keccak256("totalReceived", _assetID));
    return totalReceived.mul(ownershipUnits).div(amountRaised).sub(totalPaidToFunder);
  }

  // Trades ownershipUnits of an asset to other user. Must trade relative amount paid to Funder to balance withdrawl amount.
  // Must trade over relative amount of paidToFunder, So person buying ownershipUnits will also be recognized as being paid out for those ownershipUnits in the past
  // Invariants: Can only be called by current marketplace contract. User must have enough ownershipUnits to make trade.
  // @Param address selling ownershipUnits
  // @Param address buying ownershipUnits
  // @Param number of ownershipUnits being traded
  function tradeOwnershipUnits(bytes32 _assetID, address _from, address _to, uint _amount)
  external
  nonReentrant
  onlyExchange
  whenNotPaused
  returns (bool) {
    require(msg.sender == database.addressStorage(keccak256("contract", "AssetExchange")));
    require(getAmountOwed(_assetID, _from) == 0);
    uint ownershipUnitsFrom = database.uintStorage(keccak256("ownershipUnits", _assetID, _from));
    require(ownershipUnitsFrom >= _amount);
    uint ownershipUnitsTo = database.uintStorage(keccak256("ownershipUnits", _assetID, _to));
    uint paidToFunderFrom = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _from));
    uint paidToFunderTo = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _to));
    uint relativePaidOutAmount = (paidToFunderFrom.mul(_amount)).div(ownershipUnitsFrom);
    database.setUint(keccak256("totalPaidToFunder", _assetID, _to), paidToFunderTo.add(relativePaidOutAmount));
    database.setUint(keccak256("totalPaidToFunder", _assetID, _from), paidToFunderFrom.sub(relativePaidOutAmount));
    database.setUint(keccak256("ownershipUnits", _assetID, _from), ownershipUnitsFrom.sub(_amount));
    database.setUint(keccak256("ownershipUnits", _assetID, _to), ownershipUnitsTo.add(_amount));
    LogownershipUnitsTraded(_assetID, _from, _to, block.number);
    return true;
  }

  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // @Param: The address of the owner who authorized this function to be called in
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

  modifier onlyExchange() {
      require(database.addressStorage(keccak256("contract", 'AssetExchange')) == msg.sender);
      _;
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  // Checks that the asset is at the proper funding stage
  modifier atStage(bytes32 _assetID, uint _stage) {
    require(database.uintStorage(keccak256("fundingStage", _assetID)) == _stage);
    _;
  }

  // Checks that the user has reached a high enough access level
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

  event LogIncomeReceivedManagerTest(uint managerAmount, address assetOperator, uint operatorIncome, uint operatorIncomeAfter);


  event LogownershipUnitsTraded(bytes32 indexed _assetID, address indexed _from, address indexed _to, uint _timestamp);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
  event LogIncomeReceived(address indexed _sender, uint indexed _amount, bytes32 indexed _assetID);
  event LogInvestmentPaid(address indexed _funder, uint indexed _amount, uint indexed _timestamp);
  event LogInvestmentPaidToWithdrawalAddress(address indexed _funder, address indexed _withdrawalAddress, uint indexed _amount, uint _timestamp);
  event LogAssetNote(bytes32 indexed _note, uint indexed _timestamp);
}
