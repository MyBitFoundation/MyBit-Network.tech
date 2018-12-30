pragma solidity 0.4.24;
import './SafeMath.sol';
import './Database.sol';

//------------------------------------------------------------------------------------------------------------------
// Asset contract manages all payments, withdrawls and trading of ownershipUnits for live assets
// All information about assets are stored in Database.sol.
//------------------------------------------------------------------------------------------------------------------
contract Asset {
using SafeMath for uint;

  Database public database;


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
  atStage(_assetID, uint(4))
  returns (bool)  {
    uint assetIncome = database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
    uint managerShare = msg.value.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("managerPercentage", _assetID))));
    require(setManagerIncome(_assetID, managerShare));
    database.setUint(keccak256(abi.encodePacked("assetIncome", _assetID)), assetIncome.add(msg.value.sub(managerShare)));
    emit LogIncomeReceived(msg.sender, msg.value, _assetID, _note);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  // Revenue produced by the asset will be sent here
  // Invariants: Requires Eth is sent with transaction | Asset must be "live" (stage 4)
  // @Param: The ID of the asset earning income
  // @Param: The amount of WEI owed to the staker or manager
  //------------------------------------------------------------------------------------------------------------------
  function setManagerIncome(bytes32 _assetID, uint _managerAmount)
  internal
  returns (bool) {
      address manager = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
      uint managerOwed = database.uintStorage(keccak256(abi.encodePacked("managerIncome", manager)));
      database.setUint(keccak256(abi.encodePacked("managerIncome", manager)), managerOwed.add(_managerAmount));
      emit LogManagerIncomeEarned(_assetID, manager, _managerAmount);
      return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Revenue produced by the asset will be sent here
  // @dev: Requires Eth is sent with transaction | Asset must be "live" (stage 4)
  // @param: bytes32: The ID of the asset
  //------------------------------------------------------------------------------------------------------------------
  function withdrawManagerIncome(bytes32 _assetID)
  external
  atStage(_assetID, uint(4))
  returns (bool) {
    uint owed = database.uintStorage(keccak256(abi.encodePacked("managerIncome", msg.sender)));
    require(owed > 0);
    database.setUint(keccak256(abi.encodePacked("managerIncome", msg.sender)), 0);
    msg.sender.transfer(owed);
    emit LogManagerIncomeWithdraw(_assetID, msg.sender, owed);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset funders can receive their share of the income here
  // Invariants: Asset must be live. Sender must have ownershipUnits in the asset. There must be income earned.
  // @Param: The assetID this funder is trying to withdraw from
  // @Param: Boolean, whether or not the user wants the withdraw to go to an external address
  //------------------------------------------------------------------------------------------------------------------
  function withdraw(bytes32 _assetID)
  external
  returns (bool){
    uint ownershipUnits = database.uintStorage(keccak256(abi.encodePacked("ownershipUnits", _assetID, msg.sender)));
    require (ownershipUnits > uint(0));
    uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
    uint totalPaidToFunders = database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunders", _assetID)));
    uint totalPaidToFunder = database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunder", _assetID, msg.sender)));
    uint assetIncome = database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
    uint payment = (assetIncome.mul(ownershipUnits).div(amountRaised)).sub(totalPaidToFunder);
    assert (payment != uint(0));
    database.setUint(keccak256(abi.encodePacked("totalPaidToFunder", _assetID, msg.sender)), totalPaidToFunder.add(payment));
    database.setUint(keccak256(abi.encodePacked("totalPaidToFunders", _assetID)), totalPaidToFunders.add(payment));
    msg.sender.transfer(payment);
    emit LogIncomeWithdrawl(msg.sender, payment);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset funders can receive their share of the income here
  // Invariants: Asset must be live. Sender must have ownershipUnits in the asset. There must be income earned.
  // @Param: The assetID this funder is trying to withdraw from
  // @Param: Boolean, whether or not the user wants the withdraw to go to an external address
  //------------------------------------------------------------------------------------------------------------------
  function batchWithdraw(bytes32[] _assetIDs)
  external
  whenNotPaused
  returns (bool){
    require(_assetIDs.length < 5);
    uint payment;
    for (uint i = 0; i < _assetIDs.length; i++){
      bytes32 assetID = _assetIDs[i];
      uint ownershipUnits = database.uintStorage(keccak256(abi.encodePacked("ownershipUnits", assetID, msg.sender)));
      require (ownershipUnits > uint(0));
      uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", assetID)));
      uint totalPaidToFunders = database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunders", assetID)));
      uint totalPaidToFunder = database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunder", assetID, msg.sender)));
      uint assetIncome = database.uintStorage(keccak256(abi.encodePacked("assetIncome", assetID)));
      uint thisPayment = (assetIncome.mul(ownershipUnits).div(amountRaised)).sub(totalPaidToFunder);
      assert (thisPayment != uint(0));
      assert (totalPaidToFunders <= assetIncome);    // Don't let amount paid to funders exceed amount received
      database.setUint(keccak256(abi.encodePacked("totalPaidToFunder", assetID, msg.sender)), totalPaidToFunder.add(thisPayment));
      database.setUint(keccak256(abi.encodePacked("totalPaidToFunders", assetID)), totalPaidToFunders.add(thisPayment));
      payment = payment.add(thisPayment);
    }
    msg.sender.transfer(payment);
    emit LogIncomeWithdrawl(msg.sender, payment);
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
    uint ownershipUnits = database.uintStorage(keccak256(abi.encodePacked("ownershipUnits", _assetID, _user)));
    if (ownershipUnits == uint(0)) { return uint(0); }
    uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
    uint totalPaidToFunder = database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunder", _assetID, _user)));
    uint assetIncome = database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
    return assetIncome.mul(ownershipUnits).div(amountRaised).sub(totalPaidToFunder);
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
    bytes32 functionHash = keccak256(abi.encodePacked(address(this), _functionInitiator, "destroy", keccak256(abi.encodePacked(_holdingAddress))));
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    emit LogDestruction(_holdingAddress, address(this).balance, msg.sender);
    selfdestruct(_holdingAddress);
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Checks that the asset is at the proper funding stage
  //------------------------------------------------------------------------------------------------------------------
  modifier atStage(bytes32 _assetID, uint _stage) {
    require(database.uintStorage(keccak256(abi.encodePacked("fundingStage", _assetID))) == _stage);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Checks that the user has reached a high enough access level
  //------------------------------------------------------------------------------------------------------------------
  modifier onlyApproved(uint8 _accessLevel) {
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender))) >= _accessLevel);
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", msg.sender))) > now);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Makes sure function won't run when contract has been paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("pause", this))));
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

  event LogownershipUnitsTraded(bytes32 _assetID, address _from, address _to, uint _amount);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
  event LogIncomeReceived(address _sender, uint indexed _amount, bytes32 indexed _assetID, bytes32 _note);
  event LogIncomeWithdrawl(address indexed _funder, uint _amount);
  event LogManagerIncomeWithdraw(bytes32 indexed _assetID, address indexed _manager, uint owed);
  event LogManagerIncomeEarned(bytes32 indexed _assetID, address indexed _manager, uint _managerAmount);
}
