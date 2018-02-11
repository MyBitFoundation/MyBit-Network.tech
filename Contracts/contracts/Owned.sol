pragma solidity ^0.4.18;
import './Database.sol';

// This contract handles owner authorization, freezing and access to critical functions
contract Owned {

  Database public database;

  // Constructor: Initiate database
  function Owned(address _database) 
  noZeroAddress(_database)
  public {
    database = Database(_database);
  }


  // This function requires 2 of 3 owners to sign off on. Will replace one owner for another. 
  // @Param: The address of the new owner address 
  // @Param: The index of the new owner 
  // @Param: The address of the first signer, who has approved the calling of this function
  function changeOwner(address _newOwner, address _oldOwner, address _functionSigner) 
  anyOwner
  noZeroAddress(_newOwner)
  noZeroAddress(_functionSigner)
  external {
    require(msg.sender != _functionSigner);         // Check that this is different owner than the one who authorized
    bytes32 functionHash = keccak256(this, _functionSigner, "changeOwner", keccak256(_newOwner)); 
    require(database.boolStorage(functionHash));   // Check that fuction has been authorized to be called with these parameters
    database.setBool(functionHash, false);         // Reset changeOwner() authorization
    database.deleteBool(keccak256("owner", _oldOwner));      // Remove old owners privileges
    database.setBool(keccak256("owner", _newOwner), true);
    LogOwnerChanged(_oldOwner, _newOwner, block.timestamp);
  }

  // This function authorizes other owners to call critical functions such as selfdestruct or changeOwner() or add/remove contracts in ContractManager.
  // @Param: The address that will be used in the function requiring multisig capabilities. The critical functions often involve having a critical address change. If address is not critical any agreed address will work
  // Note: benefociary is used in case an attacker gains control of one owner wallet, they would need to also agree on the critical parameter, which if not of type bytes32, is keccak256(criticalParameter)
  function setFunctionAuthorized(address _contractAddress, string _functionName, bytes32 _beneficiary) 
  external
  anyOwner
  MyBitContractOnly(_contractAddress)
  returns (bool) { 
    require(bytes(_functionName).length != 0); 
    database.setBool(keccak256(_contractAddress, msg.sender, _functionName, _beneficiary), true);    // Sign the function name + parameter
    LogFunctionAuthorized(msg.sender, _functionName, _beneficiary); 
  }

  // This will pause all critical activity for the supplied address 
  // @Param: The address of the contract which is to be paused
  function pause(address _contract) 
  anyOwner  
  noZeroAddress(_contract)
  MyBitContractOnly(_contract)
  public {
    database.setBool(keccak256("pause", _contract), true);
    Pause(_contract, block.timestamp);
  }

  // This will unpause all critical activity for the supplied address
  // @Param: The address of the contract which is to be unpaused
  function unpause(address _contract) 
  anyOwner  
  public {
    database.setBool(keccak256("pause", _contract), false);
    Unpause(_contract, block.timestamp);
  }

  modifier anyOwner { 
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  modifier MyBitContractOnly(address _contract) { 
    require(database.boolStorage(keccak256("contract", _contract)));    // Make sure this is a MyBitContract
    _;
  }

  modifier noZeroAddress(address _param) { 
    require (_param != address(0)); 
    _;
  }

  event Pause(address _contract, uint256 _timestamp);
  event Unpause(address _contract, uint256 _timestamp);
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner, uint256 indexed _timestamp);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, bytes32 indexed _beneficiary);
}
