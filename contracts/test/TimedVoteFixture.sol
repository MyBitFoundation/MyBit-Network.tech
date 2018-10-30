pragma solidity 0.4.24;

import "../ownership/TimedVote.sol";

contract TimedVoteFixture is TimedVote {
  /** Relay all arguments */
  constructor(address _tokenAddress)
  public
  TimedVote(_tokenAddress) {}

  /** Check address null */
  function _addressNull(address _address)
  external
  pure
  returns (bool null_) {
    return addressNull(_address);
  }

  /** Require sender committed */
  function _onlyCommitted()
  external
  view
  onlyCommitted(msg.sender) {}

  /** Require sender uncommitted */
  function _onlyUncommitted()
  external
  view
  onlyUncommitted(msg.sender) {}

  /** Require address valid */
  function _onlyValidAddress(address _address)
  external
  pure
  onlyValidAddress(_address) {}

  /**
   * Set account commitment
   * @param _account - Account to set commitment of.
   * @param _amount - MYB commitment amount.
   */
  function _setCommitment(address _account, uint256 _amount)
  external {
    commitments[_account].value = _amount;
    commitments[_account].time = now;
  }
}
