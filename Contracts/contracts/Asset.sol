pragma solidity 0.4.23;
import './SafeMath.sol';
import './Database.sol';

//------------------------------------------------------------------------------------------------------------------
// Asset contract manages all payments, withdrawls and trading of ownershipUnits for live assets
// All information about assets are stored in Database.sol.
//------------------------------------------------------------------------------------------------------------------
contract Asset {
using SafeMath for *;

  Database public database;

  bool private rentrancy_lock = false;    // Prevents re-entrancy attack


  //------------------------------------------------------------------------------------------------------------------
  // Constructor
  // @Param: Address of the database contract
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database)
  public {
    database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Revenue produced by the asset will be sent here
  // Invariants: Requires Eth is sent with transaction | Asset must be "live" (stage 4)
  // @Param: The ID of the asset to send to
  // @Param: A note that can be left by the payee
  //------------------------------------------------------------------------------------------------------------------
  function receiveIncome(bytes32 _assetID, bytes32 _note)
  external
  payable
  requiresEther
  atStage(_assetID, 4)
  returns (bool)  {
    uint assetIncome = database.uintStorage(keccak256("assetIncome", _assetID));
    uint operatorIncome = msg.value.getFractionalAmount(database.uintStorage(keccak256("operatorPercentage", _assetID)));
    database.addressStorage(keccak256("assetOperator", _assetID)).transfer(operatorIncome);
    database.setUint(keccak256("assetIncome", _assetID), assetIncome.add(msg.value.sub(operatorIncome)));
    emit LogIncomeReceived(msg.sender, msg.value, _assetID);
    emit LogAssetNote(_note, block.timestamp, _assetID);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset funders can receive their share of the income here
  // Invariants: Asset must be live. Sender must have ownershipUnits in the asset. There must be income earned.
  // @Param: The assetID this funder is trying to withdraw from
  // @Param: Boolean, whether or not the user wants the withdraw to go to an external address
  //------------------------------------------------------------------------------------------------------------------
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
    uint assetIncome = database.uintStorage(keccak256("assetIncome", _assetID));
    uint payment = (assetIncome.mul(ownershipUnits).div(amountRaised)).sub(totalPaidToFunder);
    assert (payment != 0);
    assert (totalPaidToFunders <= assetIncome);    // Don't let amount paid to funders exceed amount received
    database.setUint(keccak256("totalPaidToFunder", _assetID, msg.sender), totalPaidToFunder.add(payment));
    database.setUint(keccak256("totalPaidToFunders", _assetID), totalPaidToFunders.add(payment));
    msg.sender.transfer(payment);
    emit LogInvestmentPaid(msg.sender, payment, block.timestamp);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Returns the amount of WEI owed to the asset owner
  // @Param: The ID of the asset
  // @Param: The address of the asset owner
  //------------------------------------------------------------------------------------------------------------------
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    uint ownershipUnits = database.uintStorage(keccak256("ownershipUnits", _assetID, _user));
    if (ownershipUnits == 0) { return 0; }
    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    uint totalPaidToFunder = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _user));
    uint assetIncome = database.uintStorage(keccak256("assetIncome", _assetID));
    return assetIncome.mul(ownershipUnits).div(amountRaised).sub(totalPaidToFunder);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Trades ownershipUnits of an asset to other user.Must trade over relative amount of paidToFunder,
  // So person buying ownershipUnits will also be recognized as being paid out for those ownershipUnits in the past
  // Invariants: Can only be called by current marketplace contract. User must have enough ownershipUnits to make trade.
  // @Param address selling ownershipUnits
  // @Param address buying ownershipUnits
  // @Param number of ownershipUnits being traded
  //------------------------------------------------------------------------------------------------------------------
  function tradeOwnershipUnits(bytes32 _assetID, address _from, address _to, uint _amount)
  external
  nonReentrant
  whenNotPaused
  returns (bool) {
    require(msg.sender == database.addressStorage(keccak256("contract", "AssetExchange")));
    require(getAmountOwed(_assetID, _from) == 0);
    uint ownershipUnitsFrom = database.uintStorage(keccak256("ownershipUnits", _assetID, _from));
    require(ownershipUnitsFrom >= _amount);
    uint ownershipUnitsTo = database.uintStorage(keccak256("ownershipUnits", _assetID, _to));
    uint paidToFunderFrom = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _from));
    uint paidToFunderTo = database.uintStorage(keccak256("totalPaidToFunder", _assetID, _to));
    uint paidToAndFrom = paidToFunderFrom.add(paidToFunderTo);
    uint relativePaidOutAmount = (paidToFunderFrom.mul(_amount)).div(ownershipUnitsFrom);    // TODO: Can round down, letting user withdraw 1 wei
    assert(relativePaidOutAmount > 0);
    database.setUint(keccak256("totalPaidToFunder", _assetID, _to), paidToFunderTo.add(relativePaidOutAmount));
    database.setUint(keccak256("totalPaidToFunder", _assetID, _from), paidToFunderFrom.sub(relativePaidOutAmount));
    assert (paidToAndFrom == (database.uintStorage(keccak256("totalPaidToFunder", _assetID, _to)).add(database.uintStorage(keccak256("totalPaidToFunder", _assetID, _to)))));
    database.setUint(keccak256("ownershipUnits", _assetID, _from), ownershipUnitsFrom.sub(_amount));
    database.setUint(keccak256("ownershipUnits", _assetID, _to), ownershipUnitsTo.add(_amount));
    emit LogownershipUnitsTraded(_assetID, _from, _to, _amount);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // @Param: The address of the owner who authorized this function to be called in
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  //------------------------------------------------------------------------------------------------------------------
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    bytes32 functionHash = keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress));
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    emit LogDestruction(_holdingAddress, address(this).balance, msg.sender);
    selfdestruct(_holdingAddress);
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Prevents contracts from re-entering function before the transaction finishes
  //------------------------------------------------------------------------------------------------------------------
  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Checks that the asset is at the proper funding stage
  //------------------------------------------------------------------------------------------------------------------
  modifier atStage(bytes32 _assetID, uint _stage) {
    require(database.uintStorage(keccak256("fundingStage", _assetID)) == _stage);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Checks that the user has reached a high enough access level
  //------------------------------------------------------------------------------------------------------------------
  modifier onlyApproved(uint8 _accessLevel) {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= _accessLevel);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Makes sure function won't run when contract has been paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256("pause", this)));
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
  // Verify that the user has an alternative withdraw address set in the case that they want to withdraw to that address
  //------------------------------------------------------------------------------------------------------------------
  modifier mustHaveAddressSet(bool _param) {
    if(_param){
      require(database.addressStorage(keccak256("withdrawalAddress", msg.sender)) != address(0));
    }
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verify that the sender is a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Fallback
  //------------------------------------------------------------------------------------------------------------------
  function ()
  public {
    revert();
  }

  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------
  //                                     Events
  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------

  event LogownershipUnitsTraded(bytes32 indexed _assetID, address indexed _from, address indexed _to, uint _amount);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
  event LogIncomeReceived(address indexed _sender, uint indexed _amount, bytes32 indexed _assetID);
  event LogInvestmentPaid(address indexed _funder, uint indexed _amount, uint indexed _timestamp);
  event LogAssetNote(bytes32 indexed _note, uint indexed _timestamp, bytes32 indexed _assetID);
}
