pragma solidity 0.4.24;
import '../database/Database.sol';
import '../math/SafeMath.sol';

// @notice This contract handles owner authorization, freezing and access to critical functions
contract TripleOwned {
  using SafeMath for uint256;

  Database public database;

  // @title A contract which allows for token holders to restrict/approve functions on the platform
  // @notice Two owners are required to agree on a function to be called
  // @dev initial owners get initialized when database is deployed
  // @author Kyle Dewhurst, MyBit Foundation
  constructor(address _database)
  public {
    database = Database(_database);
  }


  // This function requires 2 of 3 owners to sign off on. Will replace one owner for another.
  // @Param: The address of the new owner address
  // @Param: The index of the new owner
  // @Param: The address of the first signer, who has approved the calling of this function
  function changeOwner(address _newOwner, address _oldOwner)
  anyOwner
  noZeroAddress(_newOwner)
  isRestricted(bytes4(keccak256(abi.encodePacked("changeOwner(address, address)"))), keccak256(abi.encodePacked(_newOwner, _oldOwner)))
  external {
    database.deleteBool(keccak256(abi.encodePacked("owner", _oldOwner)));      // Remove old owners privileges
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    emit LogOwnerChanged(_oldOwner, _newOwner);
  }

  // @notice This function authorizes other owners to call critical functions
  // @dev The critical functions require the owners to agree on the methodID and parameters
  // @param (address) _contractAddress the address where the critical function is being authorized
  // @param (string) _methodID the last 4 bytes of the sha3(methodName(type, type, type))
  // @param (bytes32) _parameterHash the sha3 hash of the exact parameters the owners would like to use
  function setFunctionAuthorized(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  external
  anyOwner
  returns (bool) {
    require(bytes4(_methodID).length != uint(0));
    bytes32 functionAuthHash = keccak256(abi.encodePacked(_contractAddress, _methodID, _parameterHash)); 
    database.setAddress(functionAuthHash, msg.sender);  // Save owner who signed it
    database.setBool(functionAuthHash, true);    // Sign the function name + parameter = true
    emit LogFunctionAuthorized(msg.sender, _methodID, _parameterHash, functionAuthHash);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will pause all critical activity for the supplied address
  // @Param: The address of the contract which is to be paused\
  //------------------------------------------------------------------------------------------------------------------
  function pause(address _contract)
  anyOwner
  noZeroAddress(_contract)
  public {
    database.setBool(keccak256(abi.encodePacked("pause", _contract)), true);
    emit LogPaused(_contract);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will unpause all critical activity for the supplied address
  // @Param: The address of the contract which is to be unpaused
  //------------------------------------------------------------------------------------------------------------------
  function unpause(address _contract)
  anyOwner
  public {
    database.setBool(keccak256(abi.encodePacked("pause", _contract)), false);
    emit LogUnpaused(_contract);
  }




  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------

  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) { 
    bytes32 functionAuthHash = keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)); 
    require(database.addressStorage(functionAuthHash) != msg.sender); 
    database.deleteAddress(functionAuthHash); 
    require(database.boolStorage(functionAuthHash));  // owners must have agreed on function + parameters
    database.deleteBool(functionAuthHash);  
    _;
  }

  // @notice verifies that sender is an owners
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verifies no empty addresses are input
  //------------------------------------------------------------------------------------------------------------------
  modifier noZeroAddress(address _param) {
    require (_param != address(0));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  event LogPaused(address indexed _contract);
  event LogUnpaused(address indexed _contract);
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
  event LogFunctionAuthorized(address indexed _owner, bytes4 indexed _methodID, bytes32 indexed _beneficiary, bytes32 _authHash);
}
