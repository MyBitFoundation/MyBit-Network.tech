pragma solidity ^0.4.18;

// This contract handles owner authorization, freezing and access to critical functions
contract Owned {

  mapping (uint8 => address) public owner;    // 3 owners  (uint= 0 or 1 or 2).   Owner[0] will be main owner

  mapping (bytes32 => bool) public authorizedFunction;    // This specifies whether an owner has approved a particular function to be called. When True, 1 owner has signed off on the function. 

  mapping (address => bool) public paused;    // Address = contract address to pause, 


  function Owned() 
  public {
  }


  // This function requires 2 of 3 owners to sign off on. Will change the address at owner index 0, 1, or 2
  // @Param: The address of the new owner address 
  // @Param: The index of the new owner 
  // @Param: The address of the first signer, who has approved the calling of this function
  function changeOwner(address _newOwner, uint8 _ownerID, address _functionInitiator) 
  anyOwner
  noZeroAddress(_newOwner)
  external {
    require(_ownerID < 3);
    require(msg.sender != _functionInitiator);
    bytes32 functionHash = keccak256(this, _functionInitiator, "changeOwner", _newOwner); 
    require(authorizedFunction[functionHash]);   // Check that authorization came from different owner 
      authorizedFunction[functionHash] = false;   // Reset the authorization
      owner[_ownerID] = _newOwner;
      LogOwnerChanged(owner[_ownerID], _newOwner, block.timestamp);
  }

  // This function authorizes other owners to call critical functions such as selfdestruct or changeOwner().
  // @Param: The address that will be used in the function requiring multisig capabilities
  // Note: address is used in case an attacker gains control of one wallet, other 2 owners will have to agree on the address of the selfdestruct() or changeOwner()
  function setFunctionAuthorized(address _contractAddress, string _functionName, address _functionParameter) 
  external
  anyOwner
  noZeroAddress(_functionParameter)
  returns (bool) { 
    require(bytes(_functionName).length != 0); 
    bytes32 functionHash = keccak256(_contractAddress, msg.sender, _functionName, _functionParameter); 
    authorizedFunction[functionHash] = true; 
    LogFunctionAuthorized(msg.sender, _functionName, _functionParameter); 
  }

  // This will pause all critical activity for the supplied address 
  // @Param: The address of the contract which is to be paused
  function pause(address _contract) 
  onlyOwner  
  public {
    paused[_contract] = true;
    Pause(_contract, block.timestamp);
  }

  // This will unpause all critical activity for the supplied address
  // @Param: The address of the contract which is to be unpaused
  function unpause(address _contract) 
  onlyOwner  
  public {
    paused[_contract] = false;
    Unpause(_contract, block.timestamp);
  }

  modifier onlyOwner {
    require(msg.sender == owner[0]);
    _;
  }

  modifier anyOwner { 
    require(msg.sender == owner[0] || msg.sender == owner[1] || msg.sender == owner[2]);
    _;
  }

  modifier noZeroAddress(address _param) { 
    require (_param != address(0)); 
    _;
  }

  event Pause(address _contract, uint256 _timestamp);
  event Unpause(address _contract, uint256 _timestamp);
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner, uint256 indexed _timestamp);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, address indexed _addressOfInterest);
}
