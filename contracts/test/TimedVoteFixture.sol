pragma solidity 0.4.24;

import "../ownership/TimedVote.sol";

contract TimedVoteFixture is TimedVote {
  /** Relay all arguments */
  constructor(address _tokenAddress)
  public
  TimedVote(_tokenAddress) {}
}
