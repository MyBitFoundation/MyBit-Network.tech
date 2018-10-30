pragma solidity 0.4.24;

import "../tokens/erc20/BurnableToken.sol";
import "../math/SafeMath.sol";

/**
 * @title Proposal voting
 * @notice
 * Anyone can create a proposal. An MYB holder can lock their tokens to become
 * a voter. Voters may approve or decline proposals. Vote weight increases as
 * tokens are locked for longer periods. A proposal closes after 15 days. It
 * passes if a 20% quorum of total MYB supply voted and 51% of weighted votes
 * approved.
 */
contract TimedVote {
  // -------
  // Library

  using SafeMath for uint256;

  // ----
  // Type

  // Commitment of MYB tokens to voting
  struct Commitment {
    uint256 value;                              // MYB amount
    uint256 time;                               // Commit instant
  }

  // -----
  // State

  BurnableToken token;                          // MYB token contract
  mapping(address => Commitment) commitments;   // Active commitments

  // -----------
  // Constructor

  /**
   * @param _tokenAddress MYB token contract address.
   */
  constructor(address _tokenAddress)
  public {
    token = BurnableToken(_tokenAddress);
  }
}
