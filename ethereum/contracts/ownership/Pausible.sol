pragma solidity 0.4.24;

import './MultiOwned.sol';

contract Pausible is MultiOwned{

  mapping (address => bool) public paused;

  //------------------------------------------------------------------------------------------------------------------
  // This will pause all critical activity for the supplied address
  // @Param: The address of the contract which is to be paused\
  //------------------------------------------------------------------------------------------------------------------
  function pause(address _contract)
  anyOwner
  noZeroAddress(_contract)
  public {
    paused[_contract] = true;
    emit LogPaused(_contract, msg.sender);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will unpause all critical activity for the supplied address
  // @Param: The address of the contract which is to be unpaused
  //------------------------------------------------------------------------------------------------------------------
  function unpause(address _contract)
  anyOwner
  public {
    delete paused[_contract];
    emit LogUnpaused(_contract, msg.sender);
  }

  modifier noZeroAddress(address _address){
    require(_address != address(0));
    _;
  }



  event LogPaused(address indexed _contract, address _owner);
  event LogUnpaused(address indexed _contract, address _owner);




}
