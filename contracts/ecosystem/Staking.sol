  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../interfaces/ERC20.sol";         


  contract Staking { 

    Database public database; 

    constructor(address _database)
    public { 
      database = Database(_database); 
    }








}
