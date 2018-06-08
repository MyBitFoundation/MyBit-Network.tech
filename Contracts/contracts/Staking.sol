pragma solidity 0.4.23;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

contract Staking {
using SafeMath for uint;
  Database public database;
  MyBitToken public myBitToken;
  uint public stakingExpiry = 604800;     // One-week


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
  function approveEscrowLending(address _requester, uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _assetType, bytes32 _installerID, uint256 _blockAtCreation)
  external
  accessApproved(2)
  returns (bool) {
    bytes32 escrowID = keccak256(_requester, _amount, _incomeShare, _managerPercentage, _amountToBeRaised, _assetType, _installerID, _blockAtCreation);
    require(database.uintStorage(keccak256("lendingExpiration", escrowID)) > now);  // Expiry date will be 0 if this is not a valid escrow request
    require(myBitToken.transferFrom(msg.sender, this, _amount));
    uint depositedAmount = database.uintStorage(keccak256("depositedMYB", msg.sender));
    database.deleteUint(keccak256("lendingExpiration", escrowID));    // Make sure nobody else can stake this request
    database.setAddress(keccak256("assetStaker", escrowID), msg.sender);
    database.setUint(keccak256("stakerIncomeShare", escrowID), _incomeShare);
    database.setUint(keccak256("stakingExpiration", escrowID), now.add(stakingExpiry));  // TODO: delete when asset is created
    database.setUint(keccak256("depositedMYB", msg.sender), depositedAmount.add(_amount));
    emit LogEscrowStaked(msg.sender, _amount, escrowID);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can request a staker to put down escrow requirements for him in return for a share of the income
  // NOTE: escrowID will later be == assetID if the manager goes through with initiating funding
  // @Param: Amount of MYB to be staked for Escrow by another user
  // @Param: The percentage owed to the staker, taken from asset income
  //------------------------------------------------------------------------------------------------------------------
  function requestEscrowLending(uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _assetType, bytes32 _installerID)
  external
  accessApproved(1)
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  returns (bool) {
    require(_managerPercentage < uint(100) && _managerPercentage > uint(0));
    require(_amountToBeRaised >= uint(100));           // Minimum asset price
    bytes32 escrowID = keccak256(msg.sender, _amount, _incomeShare, _managerPercentage, _amountToBeRaised, _assetType, _installerID, block.number);
    require(database.uintStorage(keccak256("fundingStage", escrowID)) == uint(0));    // Check that asset doesn't already exist
    require(database.uintStorage(keccak256("lendingExpiration", escrowID)) < now);         // Check that escrow request isn't already out there
    uint timeOfExpiry = stakingExpiry.add(now);
    database.setUint(keccak256("lendingExpiration", escrowID), timeOfExpiry);
    LogEscrowRequestedP1(_amount, _incomeShare, _managerPercentage);
    LogEscrowRequestedP2(_amountToBeRaised, _assetType, _installerID);
    LogEscrowRequester(msg.sender, timeOfExpiry, block.number);   // Use the block.number for later staking acceptance
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Must have access level greater than or equal to 1
  //------------------------------------------------------------------------------------------------------------------
  modifier accessApproved(uint _accessLevel) {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= uint(_accessLevel));
    require(database.uintStorage(keccak256("userAccessExpiry", msg.sender)) > now);
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
  event LogEscrowRequester(address _assetManager, uint _timeOfExpiry, uint _blockAtCreation);
  event LogEscrowStaked(address _staker, uint _amountMYB, bytes32 _escrowID);
}
