pragma solidity 0.4.23;
import './Database.sol';

//-----------------------------------------------------------------------------------------------------------------------
// Standard getters for common variables stored in Database.
// Database variables are stored as sha3 hashes of variable name + id's.
// TODO: Add function to get how much more Eth asset needs (USD needed -> ETH price)
//-----------------------------------------------------------------------------------------------------------------------
contract API {

  Database public database;

  constructor(address _database)
  public {
    database = Database(_database);
  }


  //-----------------------------------------------------------------------------------------------------------------------
  //                                                 Initial Variables
  //-----------------------------------------------------------------------------------------------------------------------

  function MyBitFoundation()
  public
  view
  returns (address) {
    return database.addressStorage(keccak256("MyBitFoundation"));
  }

  function InstallerEscrow()
  public
  view
  returns (address) {
    return database.addressStorage(keccak256("InstallerEscrow"));
  }

  function myBitFoundationPercentage()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("myBitFoundationPercentage"));
  }

  function installerPercentage()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("installerPercentage"));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                               Contract State
  //-----------------------------------------------------------------------------------------------------------------------
  function isPaused(address _contractAddress)
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256("pause", _contractAddress));
  }


  function deployFinished()
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256("deployFinished"));
  }

  function contractAddress(string _name)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256("contract", _name));
  }

  function contractExists(address _contractAddress)
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256("contract", _contractAddress));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                Permissions Information
  //-----------------------------------------------------------------------------------------------------------------------
  function userAccess(address _user)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("userAccess", _user));
  }

  function isOwner(address _user)
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256("owner", _user));
  }

  function getFunctionAuthorized(address _contractAddress, address _signer, string _functionName, bytes32 _agreedParameter)
  public
  pure
  returns (bytes32) {
    return keccak256(_contractAddress, _signer, _functionName, _agreedParameter);
  }

  function isFunctionAuthorized(bytes32 _functionAuthorizationHash)
  public
  view
  returns (bool) {
    return database.boolStorage(_functionAuthorizationHash);
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                  Platform Costs
  //-----------------------------------------------------------------------------------------------------------------------

  function accessCostMYB(uint _accessLevelDesired)
  public
  view
  returns (uint) {
    uint mybPrice = mybUSDPrice();
    uint accessPrice = accessTokenFee(_accessLevelDesired);
    return (accessPrice * 10**21) / mybPrice;           // Returns # of MYB required (last 18 integers are decimals....will be very large number)
  }

  // USD cost of different levels of access on the platform (1 = create/fund assets, 2 = staking/TBA, 3 = marketplace)
  function accessTokenFee(uint _accessLevelDesired)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("accessTokenFee", _accessLevelDesired));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                  Asset Revenue Information
  //-----------------------------------------------------------------------------------------------------------------------

  // Total amount of income earned by the asset
  function assetIncome(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("assetIncome", _assetID));
  }

  // Deprecated after Intimate Alpha (0.1): Moving to 'assetIncome' for Open-Alpha (0.2)
  function totalReceived(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("totalReceived", _assetID));
  }

  // Amount of income paid to funders
  function totalPaidToFunders(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("totalPaidToFunders", _assetID));
  }

  // Amount of income already paid to the funder
  function totalPaidToFunder(bytes32 _assetID, address _funder)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("totalPaidToFunder", _assetID, _funder));
  }

  // Depracated after Intimate Alpha (0.1): totalReceived == assetIncome for Open-Alpha (0.2)
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    if (ownershipUnits(_assetID, _user) == 0) { return 0; }
    return ((totalReceived(_assetID) * ownershipUnits(_assetID, _user)) / amountRaised(_assetID)) - totalPaidToFunder(_assetID, _user);
  }

  /* // Returns the amount of WEI owed to asset owner  AmountOwed = (userIncome - userIncomeAlreadyPaid)
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    if (ownershipUnits(_assetID, _user) == 0) { return 0; }
    return ((assetIncome(_assetID) * ownershipUnits(_assetID, _user)) / amountRaised(_assetID)) - totalPaidToFunder(_assetID, _user);
  } */

  //-----------------------------------------------------------------------------------------------------------------------
  //                                             Funding Information
  //-----------------------------------------------------------------------------------------------------------------------
  function ownershipUnits(bytes32 _assetID, address _owner)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("ownershipUnits", _assetID, _owner));
  }

  function amountRaised(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("amountRaised", _assetID));
  }

  function fundingStage(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("fundingStage", _assetID));
  }

  function amountToBeRaised(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("amountToBeRaised", _assetID));
  }

  function fundingDeadline(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("fundingDeadline", _assetID));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  // AssetManager Information
  //-----------------------------------------------------------------------------------------------------------------------

  // Indicates which address is in charge of operating this asset. 1 operator per asset
  function assetManager(bytes32 _assetID)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256("assetManager", _assetID));
  }

  // Percentage of income sent to asset operator
  function managerPercentage(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("managerPercentage", _assetID));
  }

  // Amount of MYB locked for this asset
  function lockedForAsset(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("lockedForAsset", _assetID));
  }

  // Total amount of MYB locked by user for all platform assets
  function managerAmountEscrowed(address _manager)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("managerAmountEscrowed", _manager));
  }

  // Total amount of MYB deposited in the operator escrow contract
  // NOTE: This MYB is not locked and can be withdrawn at any time
  function managerAmountDeposited(address _manager)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("managerAmountDeposited", _manager));
  }


  //-----------------------------------------------------------------------------------------------------------------------
  //                                                 OracleHub
  //-----------------------------------------------------------------------------------------------------------------------

  function ethUSDPrice()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("ethUSDPrice"));
  }

  function mybUSDPrice()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("mybUSDPrice"));
  }

  function ethUSDPriceExpiration()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("ethUSDPriceExpiration"));
  }

  function mybUSDPriceExpiration()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256("mybUSDPriceExpiration"));
  }

  function ethUSDSecondsRemaining()
  public
  view
  returns (uint) {
    uint expiration = database.uintStorage(keccak256("ethUSDPriceExpiration"));
    if (now > expiration) return 0;
    return (expiration - now);
  }

  function mybUSDSecondsRemaining()
  public
  view
  returns (uint) {
    uint expiration = database.uintStorage(keccak256("mybUSDPriceExpiration"));
    if (now > expiration) return 0;
    return (expiration - now);
  }

function ()
public {
  revert();
}





}
