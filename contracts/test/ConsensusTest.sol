pragma solidity ^0.4.24;

import '../database/API.sol';

interface Token { function totalSupply() external view returns (uint); }

contract ConsensusTest {

  API public api;

  constructor(address _api)
  public {
    api = API(_api);
  }

  function checkConsensus(address user, address token, uint tokens)
  public
  view
  returns (bool){
    bytes32 parameterHash = keccak256(abi.encodePacked(user, token, tokens));
    bytes32 proposalID = keccak256(abi.encodePacked(token, address(this), msg.sig, parameterHash));
    require(passedQuorum(proposalID));
    require(passedThreshold(proposalID));
    return true;
  }

  function passedQuorum(bytes32 proposalID)
  public
  view
  returns (bool) {
    uint approval = api.proposalApproval(proposalID);
    uint quorum = (approval * 100) / api.proposalVoteCount(proposalID);   // what percentage approved ??
    return quorum > api.assetQuorum(api.proposalToken(proposalID));
  }

  function passedThreshold(bytes32 proposalID)
  public
  view
  returns (bool) {
    address token = api.proposalToken(proposalID);
    uint totalSupply = Token(token).totalSupply();
    return (api.proposalVoteCount(proposalID) * 100) / totalSupply >= api.assetThreshold(token);
  }

  function consensusTestParameterHash(address user, address _token, uint _tokens)
  public
  pure
  returns (bytes32){
    return keccak256(abi.encodePacked(user, _token, _tokens));
  }

}
