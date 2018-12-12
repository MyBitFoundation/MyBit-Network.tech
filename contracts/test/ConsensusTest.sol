pragma solidity ^0.4.24;

import '../database/API.sol';

interface Token { function totalSupply() external view returns (uint); }
interface Consensus { function hasConsensus(address token, bytes4 methodID, bytes32 parameterHash) external view returns (bool); }

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
    address governanceContract = api.assetGovernance(token);
    require(Consensus(governanceContract).hasConsensus(token, msg.sig, parameterHash));
    return true;
  }


  function consensusTestParameterHash(address user, address _token, uint _tokens)
  public
  pure
  returns (bytes32){
    return keccak256(abi.encodePacked(user, _token, _tokens));
  }

}
