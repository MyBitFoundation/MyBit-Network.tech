pragma solidity ^0.4.18;

// TODO: Write changeContractManager() function
contract Database { 

 
// ---------------Storage Variables----------------

    mapping(bytes32 => uint) public uintStorage;
    mapping(bytes32 => string) public stringStorage;
    mapping(bytes32 => address) public addressStorage;
    mapping(bytes32 => bytes) public bytesStorage;
    mapping(bytes32 => bytes32) public bytes32Storage; 
    mapping(bytes32 => bool) public boolStorage;
    mapping(bytes32 => int256) public intStorage;


  // This is the first contract to get deployed. Will store all data + references to other contracts
  function Database(address _ownerOne, address _ownerTwo, address _ownerThree) 
  public { 
    boolStorage[keccak256("owner", _ownerOne)] = true;
    boolStorage[keccak256("owner", _ownerTwo)] = true;
    boolStorage[keccak256("owner", _ownerThree)] = true;
  }

  function setContractManager(address _contractManager)
  external { 
    require(_contractManager != address(0));
    require(boolStorage[keccak256("owner", msg.sender)]);
    addressStorage[keccak256("contract", "ContractManager")] = _contractManager;
    boolStorage[keccak256("contract", _contractManager)] = true; 
  }

    // --------------------Set Functions------------------------

    function setAddress(bytes32 _key, address _value) 
    onlyMyBitContract 
    external {
        addressStorage[_key] = _value;
    }

    function setUint(bytes32 _key, uint _value) 
    onlyMyBitContract 
    external {
        uintStorage[_key] = _value;
    }

    function setString(bytes32 _key, string _value) 
    onlyMyBitContract 
    external {
        stringStorage[_key] = _value;
    }

    function setBytes(bytes32 _key, bytes _value) 
    onlyMyBitContract 
    external {
        bytesStorage[_key] = _value;
    }

    function setBytes32(bytes32 _key, bytes32 _value) 
    onlyMyBitContract 
    external {
        bytes32Storage[_key] = _value;
    }    

    function setBool(bytes32 _key, bool _value) 
    onlyMyBitContract 
    external {
        boolStorage[_key] = _value;
    }
    
    function setInt(bytes32 _key, int _value) 
    onlyMyBitContract 
    external {
        intStorage[_key] = _value;
    }


     // -------------- Deletion Functions ------------------
    
    function deleteAddress(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete addressStorage[_key];
    }

    function deleteUint(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete uintStorage[_key];
    }

    function deleteString(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete stringStorage[_key];
    }

    function deleteBytes(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete bytesStorage[_key];
    }

    function deleteBytes32(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete bytes32Storage[_key];
    }    

    function deleteBool(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete boolStorage[_key];
    }
    
    function deleteInt(bytes32 _key) 
    onlyMyBitContract 
    external {
        delete intStorage[_key];
    }


    // Caller must be registered as a contract within the MyBit Dapp
    modifier onlyMyBitContract() {
        require(boolStorage[keccak256("contract", msg.sender)]);
        _;

    }

}
