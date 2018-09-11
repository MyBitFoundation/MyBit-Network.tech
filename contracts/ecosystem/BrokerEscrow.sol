  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../interfaces/ERC20.sol";         


  contract BrokerEscrow { 

    Database public database; 

    constructor(address _database)
    public { 
      database = Database(_database); 
    } 


    function depositEscrow(uint _amount, address _tokenAddress)
    external { 

    }


    function lockEscrow(uint _amount, bytes32 _assetID)
    external { 

    }


    function unlockEscrow(bytes32 _assetID)
    external { 

    }



}
