pragma solidity 0.4.24;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

// TODO: Staking

contract Staking {
using SafeMath for uint;
  Database public database;
  MyBitToken public myBitToken;
  uint public stakingExpiry = uint(604800);     // One-week


  //------------------------------------------------------------------------------------------------------------------
  // Constructor. Initiate Database and MyBitToken
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database, address _tokenAddress)
  public {
    database = Database(_database);
    myBitToken = MyBitToken(_tokenAddress);
  }


  //------------------------------------------------------------------------------------------------------------------
  // Stakers can accept escrow requests here, if they have enough MYB required
  //------------------------------------------------------------------------------------------------------------------
  function approveEscrowLending(address _requester, uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _installerID, bytes32 _assetType, uint256 _blockAtCreation)
  external
  accessApproved(uint(2))
  returns (bool) {
    require(_incomeShare > 0); 
    bytes32 escrowID = keccak256(abi.encodePacked(_requester, _amount, _incomeShare, _managerPercentage, _amountToBeRaised, _installerID, _assetType, _blockAtCreation));
    require(database.uintStorage(keccak256(abi.encodePacked("escrowExpiration", escrowID))) > now);  // Expiry date will be 0 if this is not a valid escrow request
    require(database.uintStorage(keccak256(abi.encodePacked("depositedMYB", msg.sender))) >= _amount);
    bytes32 assetID = keccak256(abi.encodePacked(_requester, _amount, _managerPercentage, _amountToBeRaised, _installerID, _assetType, _blockAtCreation));
    require(lockAssetEscrow(assetID, _amount, msg.sender)); 
    database.deleteUint(keccak256(abi.encodePacked("escrowExpiration", escrowID)));    // Make sure nobody else can stake this request
    database.setAddress(keccak256(abi.encodePacked("assetStaker", assetID)), msg.sender);
    database.setUint(keccak256(abi.encodePacked("stakerIncomeShare", assetID)), _incomeShare);
    database.setUint(keccak256(abi.encodePacked("stakingExpiration", assetID)), stakingExpiry.add(now));  // TODO: delete when asset is created
    emit LogEscrowStaked(msg.sender, _amount, assetID);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can request a staker to put down escrow requirements for him in return for a share of the income
  // NOTE: escrowID will later be == assetID if the manager goes through with initiating funding
  // @Param: Amount of MYB to be staked for Escrow by another user
  // @Param: The percentage owed to the staker, taken from asset income
  //------------------------------------------------------------------------------------------------------------------
  function requestEscrowLending(uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _installerID, bytes32 _assetType)
  external
  accessApproved(uint(1))
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  returns (bool) {
    require(_managerPercentage < uint(100) && _managerPercentage > uint(0));
    require(_amountToBeRaised >= uint(100));           // Minimum asset price
    require(_incomeShare > 0 && _incomeShare < 100); 
    bytes32 escrowID = keccak256(abi.encodePacked(msg.sender, _amount, _incomeShare, _managerPercentage, _amountToBeRaised, _installerID, _assetType, block.number));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingStage", escrowID))) == uint(0));    // Check that asset doesn't already exist
    require(database.uintStorage(keccak256(abi.encodePacked("escrowExpiration", escrowID))) < now);         // Check that escrow request isn't already out there
    uint timeOfExpiry = stakingExpiry.add(now);
    database.setUint(keccak256(abi.encodePacked("escrowExpiration", escrowID)), timeOfExpiry);
    emit LogEscrowRequestedP1(_amount, _incomeShare, _managerPercentage);
    emit LogEscrowRequestedP2(_amountToBeRaised, _assetType, _installerID);
    emit LogEscrowRequester(msg.sender, escrowID, block.number);   // Use the block.number for later staking acceptance
    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // This function locks MyBit tokens to the asset for the length of it's lifecycle
  //----------------------------------------------------------------------------------------------------------------------------------------
  function lockAssetEscrow(bytes32 _assetID, uint _amountToEscrow, address _escrowDepositer)
  internal
  returns (bool) {
    if (_amountToEscrow == 0) { return true; }
    uint escrowedMYB = database.uintStorage(keccak256(abi.encodePacked("escrowedMYB", _escrowDepositer)));
    uint depositedMYB = database.uintStorage(keccak256(abi.encodePacked("depositedMYB", _escrowDepositer)));
    // assert (_amountToEscrow <= depositedMYB);    // TODO: Safemath should throw here if this isn't the case
    database.setUint(keccak256(abi.encodePacked("depositedMYB", _escrowDepositer)), depositedMYB.sub(_amountToEscrow)); 
    database.setUint(keccak256(abi.encodePacked("escrowedMYB", _escrowDepositer)), escrowedMYB.add(_amountToEscrow));
    database.setUint(keccak256(abi.encodePacked("escrowedForAsset", _assetID)), _amountToEscrow);
    return true;
  }
  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Must have access level greater than or equal to 1
  //------------------------------------------------------------------------------------------------------------------
  modifier accessApproved(uint _accessLevel) {
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender))) >= uint(_accessLevel));
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", msg.sender))) > now);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Don't accept null value for bytes32 parameter
  //------------------------------------------------------------------------------------------------------------------
  modifier noEmptyBytes(bytes32 _data) {
    require(_data != bytes32(0));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Events
  //------------------------------------------------------------------------------------------------------------------

  event LogEscrowRequestedP1(uint _amount, uint _incomeShare, uint _managerPercentage);
  event LogEscrowRequestedP2(uint _amountToBeRaised, bytes32 _assetType, bytes32 _installerID);
  event LogEscrowRequester(address indexed _assetManager, bytes32 _escrowID, uint _blockAtCreation);
  event LogEscrowStaked(address indexed _staker, uint _amountMYB, bytes32 indexed _assetID);
}
