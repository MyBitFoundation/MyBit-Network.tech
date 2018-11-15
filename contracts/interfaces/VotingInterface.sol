pragma solidity ^0.4.24;

interface VotingInterface {
  function result(bytes32 _proposalID) external view returns (bool passed);

  function proposalExtant(bytes32 _proposalID) external view returns (bool extant);
}
