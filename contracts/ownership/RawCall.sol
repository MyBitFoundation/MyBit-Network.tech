pragma solidity 0.4.24;

import "../interfaces/VotingInterface.sol";

interface ProposalAction {
  function withdraw() external returns (bool);
  function withdraw(address _user) external returns (bool);
}

contract RawCall{
  address private contractAddress;
  bytes private functionParams;

  function execute(address _contract, bytes4 _methodID, bytes _params, bytes32 _proposalID, address _votingInterface)
  external
  payable
  returns (bool){
    VotingInterface votingProcess = VotingInterface(_votingInterface);
    require(votingProcess.result(_proposalID));

    return(_contract.call.gas(200000).value(msg.value)(_methodID, _params));
  }
}
