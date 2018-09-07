pragma solidity 0.4.24;
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
    return database.addressStorage(keccak256(abi.encodePacked("MyBitFoundation")));
  }

  function InstallerEscrow()
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked("InstallerEscrow")));
  }

  function myBitFoundationPercentage()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("myBitFoundationPercentage")));
  }

  function installerPercentage()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("installerPercentage")));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                               Contract State
  //-----------------------------------------------------------------------------------------------------------------------
  function isPaused(address _contractAddress)
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256(abi.encodePacked("pause", _contractAddress)));
  }

  function contractAddress(string _name)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked("contract", _name)));
  }

  function contractExists(address _contractAddress)
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256(abi.encodePacked("contract", _contractAddress)));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                Permissions Information
  //-----------------------------------------------------------------------------------------------------------------------
  function userAccess(address _user)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("userAccess", _user)));
  }

  function isOwner(address _user)
  public
  view
  returns (bool) {
    return database.boolStorage(keccak256(abi.encodePacked("owner", _user)));
  }

  function getFunctionAuthorizationHash(address _contractAddress, address _signer, string _functionName, bytes32 _agreedParameter)
  public
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_contractAddress, _signer, _functionName, _agreedParameter));
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


  // USD cost of different levels of access on the platform (1 = create/fund assets, 2 = staking/TBA, 3 = marketplace)
  function accessTokenFee(uint _accessLevelDesired)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("accessTokenFee", _accessLevelDesired)));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                  Asset Revenue Information
  //-----------------------------------------------------------------------------------------------------------------------

  // Total amount of income earned by the asset
  function assetIncome(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
  }

  // Deprecated after Intimate Alpha (0.1): Moving to 'assetIncome' for Open-Alpha (0.2)
  function totalReceived(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("assetIncome", _assetID)));
  }

  // Amount of income paid to funders
  function totalPaidToFunders(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunders", _assetID)));
  }

  // Amount of income already paid to the funder
  function totalPaidToFunder(bytes32 _assetID, address _funder)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("totalPaidToFunder", _assetID, _funder)));
  }

  /* // Deprecated after Intimate Alpha (0.1): totalReceived == assetIncome for Open-Alpha (0.2)
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    if (ownershipUnits(_assetID, _user) == 0) { return 0; }
    return ((totalReceived(_assetID) * ownershipUnits(_assetID, _user)) / amountRaised(_assetID)) - totalPaidToFunder(_assetID, _user);
  } */

  // Returns the amount of WEI owed to asset owner  AmountOwed = (userIncome - userIncomeAlreadyPaid)
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    if (ownershipUnits(_assetID, _user) == 0) { return 0; }
    return ((assetIncome(_assetID) * ownershipUnits(_assetID, _user)) / amountRaised(_assetID)) - totalPaidToFunder(_assetID, _user);
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                             Funding Information
  //-----------------------------------------------------------------------------------------------------------------------
  function ownershipUnits(bytes32 _assetID, address _user)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("ownershipUnits", _assetID, _user)));
  }

  function amountRaised(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
  }

  function fundingStage(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("fundingStage", _assetID)));
  }

  function amountToBeRaised(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("amountToBeRaised", _assetID)));
  }

  function fundingDeadline(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                AssetManager and Escrow
  //-----------------------------------------------------------------------------------------------------------------------

  // Indicates which address is in charge of operating this asset. 1 manager per asset
  function assetManager(bytes32 _assetID)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
  }

  // Percentage of income sent to asset manager
  function managerPercentage(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("managerPercentage", _assetID)));
  }

    // Percentage of income sent to asset manager
  function managerIncome(address _manager)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("managerIncome", _manager)));
  }

  // Amount of MYB locked for this asset
  function escrowedForAsset(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("escrowedForAsset", _assetID)));
  }

  // Total amount of MYB locked by user for all platform assets
  function escrowedMYB(address _manager)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("escrowedMYB", _manager)));
  }

  // Total amount of MYB deposited in the token escrow contract
  // NOTE: This MYB is not locked and can be withdrawn at any time
  function depositedMYB(address _manager)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("depositedMYB", _manager)));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                          Staking Information
  //-----------------------------------------------------------------------------------------------------------------------


  // Returns address of staker covering the escrow for this asset
  function assetStaker(bytes32 _assetID)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked("assetStaker", _assetID)));
  }

  // Amount of MYB locked for this asset   (Deprecated: variable now stored as "escrowedForAsset" for release 0.2)
  function lockedForAsset(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("escrowedForAsset", _assetID)));
  }

  // Time when the request for
  function escrowExpiration(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("escrowExpiration", _assetID)));
  }

  // Time when the request for
  function stakingExpiration(bytes32 _assetID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("stakingExpiration", _assetID)));
  }

  function stakerIncomeShare(bytes32 _assetID)
  public 
  view 
  returns (uint) { 
    return database.uintStorage(keccak256(abi.encodePacked("stakerIncomeShare", _assetID))); 
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                 OracleHub
  //-----------------------------------------------------------------------------------------------------------------------

  function ethUSDPrice()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("ethUSDPrice")));
  }

  function mybUSDPrice()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("mybUSDPrice")));
  }

  // The unix-timestamp when ETH and MYB prices need to be updated
  function priceExpiration()
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("priceExpiration")));
  }

  // Returns time in seconds until price needs to be updated
  function priceTimeToExpiration()
  public
  view
  returns (uint) {
    uint expiration = database.uintStorage(keccak256(abi.encodePacked("priceExpiration")));
    if (now > expiration) return 0;
    return (expiration - now);
  }

  // The number of seconds each ETH & MYB price update is valid for (initialVariables.sol)
  function priceUpdateTimeline()
  public 
  view 
  returns (uint) { 
    return database.uintStorage(keccak256(abi.encodePacked("priceUpdateTimeline"))); 
  }

function ()
public {
  revert();
}





}
