pragma solidity ^0.4.24;


// @title A shared storage contract for platform contracts to store and retrieve data
// @notice This contract holds all long-term data for smart-contract systems
// @dev The bytes32 hashes are derived from keccak256(variableName, uniqueID) => value
// @dec Can enable upgradeable contracts by setting a contract manager
contract Database{

    // Storage Variables
    mapping(bytes32 => uint) public uintStorage;
    mapping(bytes32 => string) public stringStorage;
    mapping(bytes32 => address) public addressStorage;
    mapping(bytes32 => bytes) public bytesStorage;
    mapping(bytes32 => bytes32) public bytes32Storage;
    mapping(bytes32 => bool) public boolStorage;
    mapping(bytes32 => int) public intStorage;



    // @notice Constructor: Sets the owners of the platform
    // @dev Owners must set the contract manager to add more contracts
    constructor(address[] _owners, bool _upgradeable) public {
      for(uint i=0; i<_owners.length; i++){
        boolStorage[keccak256(abi.encodePacked("owner", _owners[i]))] = true;
        emit LogInitialized(_owners[i], _upgradeable);
      }
      if (_upgradeable){
        boolStorage[keccak256("upgradeable")] = true;
      }
    }


    // @notice ContractManager will be the only contract that can add/remove contracts on the platform.
    // @param (address) _contractManager is the contract which can upgrade/remove contracts to platform
    function enableContractManagement(address _contractManager)
    external {
        require(_contractManager != address(0));
        require(boolStorage[keccak256(abi.encodePacked("owner", msg.sender))]);
        require(addressStorage[keccak256(abi.encodePacked("contract", "ContractManager"))] == address(0));
        addressStorage[keccak256(abi.encodePacked("contract", "ContractManager"))] = _contractManager;
        boolStorage[keccak256(abi.encodePacked("contract", _contractManager))] = true;
    }

    // @notice Storage functions
    function setAddress(bytes32 _key, address _value)
    onlyApprovedContract
    external {
        addressStorage[_key] = _value;
    }

    function setUint(bytes32 _key, uint _value)
    onlyApprovedContract
    external {
        uintStorage[_key] = _value;
    }

    function setString(bytes32 _key, string _value)
    onlyApprovedContract
    external {
        stringStorage[_key] = _value;
    }

    function setBytes(bytes32 _key, bytes _value)
    onlyApprovedContract
    external {
        bytesStorage[_key] = _value;
    }

    function setBytes32(bytes32 _key, bytes32 _value)
    onlyApprovedContract
    external {
        bytes32Storage[_key] = _value;
    }

    function setBool(bytes32 _key, bool _value)
    onlyApprovedContract
    external {
        boolStorage[_key] = _value;
    }

    function setInt(bytes32 _key, int _value)
    onlyApprovedContract
    external {
        intStorage[_key] = _value;
    }


    // Deletion functions: Can alternatively use setter functions and set to null value (ie. uint = 0)
    function deleteAddress(bytes32 _key)
    onlyApprovedContract
    external {
        delete addressStorage[_key];
    }

    function deleteUint(bytes32 _key)
    onlyApprovedContract
    external {
        delete uintStorage[_key];
    }

    function deleteString(bytes32 _key)
    onlyApprovedContract
    external {
        delete stringStorage[_key];
    }

    function deleteBytes(bytes32 _key)
    onlyApprovedContract
    external {
        delete bytesStorage[_key];
    }

    function deleteBytes32(bytes32 _key)
    onlyApprovedContract
    external {
        delete bytes32Storage[_key];
    }

    function deleteBool(bytes32 _key)
    onlyApprovedContract
    external {
        delete boolStorage[_key];
    }

    function deleteInt(bytes32 _key)
    onlyApprovedContract
    external {
        delete intStorage[_key];
    }


    // --------------------------------------------------------------------------------------
    //                                     Modifiers
    // --------------------------------------------------------------------------------------

    // Caller must be registered as a contract through ContractManager.sol
    modifier onlyApprovedContract() {
        require(boolStorage[keccak256(abi.encodePacked("contract", msg.sender))]);
        _;
    }

    // --------------------------------------------------------------------------------------
    //                                     Events
    // --------------------------------------------------------------------------------------
    event LogInitialized(address _owner, bool _upgradeable);
}
