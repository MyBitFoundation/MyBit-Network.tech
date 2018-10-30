pragma solidity 0.4.24;

import "../ownership/TimedVote.sol";

contract TimedVoteFixture is TimedVote {
  /** Relay all arguments */
  constructor(address _tokenAddress)
  public
  TimedVote(_tokenAddress) {}

  /**
   * Set account commitment
   * @param _account - Account to set commitment of.
   * @param _amount - MYB commitment amount.
   */
  function _setCommitment(address _account, uint256 _amount)
  external {
    commitments[msg.sender].value = _amount;
    commitments[msg.sender].time = now;
  }
}
