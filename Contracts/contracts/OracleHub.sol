pragma solidity ^0.4.19;

import './oraclizeAPI_05.sol';
import './Database.sol';

contract OracleHub is usingOraclize{ 

  Database public database; 


  function OracleHub(address _database)
  public {
    database = Database(_database); 
    // OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475); only for localhost
  }

  // TODO: get price of call
  // Asks oraclize what the current price of Ether is 
  function getEtherPrice()
  external 
  payable
  returns (bool){ 
    bytes32 queryID = oraclize_query('URL', 'json(https://api.coinmarketcap.com/v1/ticker/ethereum/).0.price_usd}');
    database.setAddress(queryID, msg.sender);
    database.setUint(keccak256("assetFundingPriceTimestamp", msg.sender), block.timestamp);
    LogFundingOraclizeQuerySent(msg.sender, block.timestamp, queryID);
  }

  function __callback(bytes32 myid, string result)
  public
  isOraclize {
    address sender = database.addressStorage(myid);
    uint timestamp = database.uintStorage(keccak256("assetFundingPriceTimestamp", sender));
    database.setUint(keccak256("assetFundingPrice", sender, timestamp), parseInt(result)); 
    database.deleteAddress(myid); 
  }

  modifier isOraclize() {
   require(msg.sender == oraclize_cbAddress());
   _;
  }

  event LogFundingOraclizeQuerySent(address indexed _funder, uint value, bytes32 indexed _queryID);


}
