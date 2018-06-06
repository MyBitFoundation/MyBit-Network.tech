pragma solidity 0.4.23;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';

contract Staking {

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
  function approveEscrowLending(address _requester, uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _assetType, bytes32 _installerID)
  external
  accessApproved(2)
  returns (bool) {
    bytes32 escrowID = keccak256(_requester, _amount, _incomeShare, _managerPercentage, _amountToBeRaised, _assetType, _installerID);
    require(database.uintStorage(keccak256("escrowExpiry", escrowID)) > now);  // TODO: This should prove that the escrowID exists + valid
    require(myBitToken.transferFrom(msg.sender, this, _amount));
    uint depositedAmount = database.uintStorage(keccak256("stakerAmountDeposited", msg.sender));
    database.deleteUint(keccak256("escrowExpiry", escrowRequest));    // Make sure nobody else can stake this request
    database.setAddress(keccak256("assetStaker", escrowID), msg.sender);
    database.setUint(keccak256("escrowStakeExpiry", escrowID), now.add(stakingExpiry));  // TODO: delete when asset is created
    database.setUint(keccak256("stakerAmountDeposited", msg.sender), depositedAmount.add(_amount));
    emit LogEscrowDeposited(msg.sender, _amount, now);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Asset manager can request a staker to put down escrow requirements for him in return for a share of the income
  // @Param: Amount of MYB to be staked for Escrow by another user
  // @Param: The percentage owed to the staker, taken from asset income
  //------------------------------------------------------------------------------------------------------------------
  function requestEscrowLending(uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _assetType, bytes32 _installerID)
  external
  accessApproved(1)
  returns (bool) {
    bytes32 escrowID = keccak256(msg.sender, _amount, _incomeShare, _managerPercentage, _amountToBeRaised, _assetType, _installerID);
    require(database.uintStorage(keccak256("escrowExpiry", escrowID)) == uint(0));
    database.setUint(keccak256("escrowExpiry", escrowID), now.add(stakingExpiry));
    return true;
  }













}
