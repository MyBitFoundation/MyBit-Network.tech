// Database interface
interface Database { 

  function setContractManager(address _contractManager)
  external;

    // --------------------Set Functions------------------------

    function setAddress(bytes32 _key, address _value) 
    external;

    function setUint(bytes32 _key, uint _value) 
    external;

    function setString(bytes32 _key, string _value) 
    external;

    function setBytes(bytes32 _key, bytes _value)  
    external;

    function setBytes32(bytes32 _key, bytes32 _value)  
    external;

    function setBool(bytes32 _key, bool _value)  
    external;
    
    function setInt(bytes32 _key, int _value)  
    external;


     // -------------- Deletion Functions ------------------
    
    function deleteAddress(bytes32 _key)  
    external;

    function deleteUint(bytes32 _key)  
    external;

    function deleteString(bytes32 _key)  
    external;

    function deleteBytes(bytes32 _key)  
    external;

    function deleteBytes32(bytes32 _key)  
    external;

    function deleteBool(bytes32 _key)  
    external;
    
    function deleteInt(bytes32 _key)  
    external;   

    // ----------------Variable Getters---------------------

    function uintStorage(bytes32 _key)
    public 
    returns (uint);

    function stringStorage(bytes32 _key)
    public 
    returns (string);

    function addressStorage(bytes32 _key)
    public 
    returns (address);

    function bytesStorage(bytes32 _key)
    public 
    returns (bytes); 

    function bytes32Storage(bytes32 _key)
    public 
    returns (bytes32);

    function boolStorage(bytes32 _key)
    public
    returns (bool);

    function intStorage(bytes32 _key)
    public 
    returns (bool); 
}

