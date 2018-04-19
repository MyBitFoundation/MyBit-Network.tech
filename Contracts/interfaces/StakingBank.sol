pragma solidity ^0.4.19;

// TODO: prevent users from accidentally transferring in tokens 
// TODO: store previous stakeID as well?? 
interface StakingBank { 

  // This function settles the ledger for this user and initiates his waiting period to withdraw tokens. These tokens can still be claimed by the bug bounty if necessary
  // Note: User will not be eligable for further rewards
  function requestWithdraw(bytes32 _stakeID)
  external
  returns (bool);

  // This function sends Ether to staker based on what he is owed
  // Note: Must call SettleLedger before calling this function to get the lastest amount owed 
  // TODO: settleLedger within this transaction....check gas difference
  function withdraw(bytes32 _stakeID)
  external
  returns (bool);

  // Called by BugBounty contract when necessary
  function bugWithdraw(uint _amount, address _userAddress)
  external 
  returns (bool);

  // Asset contracts send fee here 
  function receiveTransactionFee(bytes32 _assetID) 
  payable
  external;

  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  function destroy(address _functionInitiator, address _holdingAddress) 
  public;

// -------------------------------------Internal-----------------------------------
  function settleLedger(address _staker, bytes32 _stakeID)
  public;


// ------------------------------------View only functions-------------------------------------------------

  function getBalance()
  view 
  external 
  returns (uint);


  function calculateOwed(address _staker, bytes32 _stakeID)
  public 
  view
  returns (uint); 

}
