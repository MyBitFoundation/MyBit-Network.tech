contract HashFunctions { 


  function HashFunctions()
  public
  {

  }

  function getOrderID(address _user, address _contract)
  external
  view
  returns(bytes32) {
    return keccak256(_contract, _user); 
  }
  

  function getStakingID(address _staker, uint256 _blockNumber, uint256 _amount)
  external
  view
  returns (bytes32) { 
    return keccak256(_staker, _blockNumber, _amount); 
  }



function ()
public {
  revert();
}





}
