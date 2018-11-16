pragma solidity 0.4.24;

import "../interfaces/VotingInterface.sol";

contract RawCall{
  address private contractAddress;
  bytes private functionParams;

  function execute(address _contract, bytes4 _methodID, bytes _params, bytes32 _proposalID, address _votingInterface)
  external
  payable
  returns (bool){
    emit Signature(_methodID);
    emit Parameters(_params);
    VotingInterface votingProcess = VotingInterface(_votingInterface);
    require(votingProcess.result(_proposalID));

    return(_contract.call.gas(200000).value(msg.value)(_methodID, _params));
    /*
    contractAddress = _contract;
    functionParams = _params;

    assembly {
      // move pointer to free memory spot
      let ptr := mload(0x40)

      // put function sig at memory spot
      mstore(ptr,_methodID)

      // append argument after function sig
      mstore(add(ptr,0x04), functionParams_slot)

      let result := call(
        15000, // gas limit
        sload(contractAddress_slot),  // to addr. append var to _slot to access storage variable
        0, // not transfer any ether
        ptr, // Inputs are stored at location ptr
        0x84, // Inputs are 36 bytes long
        ptr,  //Store output over input
        0x20) //Outputs are 32 bytes long

      if eq(result, 0) {
          revert(0, 0)
      }

      answer := mload(ptr) // Assign output to answer var
      mstore(0x40,add(ptr,0x84)) // Set storage pointer to new space
    }
    */
  }

  event Signature(bytes4 sig);
  event Parameters(bytes params);
}
