pragma solidity ^0.4.19;

import './oraclizeAPI_05.sol';
import './Database.sol';

// TODO: Deploy usingOraclize as a seperate contract so we can update OracleHub independantly
// TODO: Move gas returns to TokenBurn + Fund by referencing queryID in those functions.
contract OracleHub is usingOraclize{

  Database public database;

  address OAR;

  function OracleHub(address _database)
  public {
    database = Database(_database);
    OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475); // only for localhost
  }

  // TODO: get price of call
  // Asks oraclize what the current price of Ether is
  function ethUSDQuery()
  external
  payable
  requiresEther
  returns (bool) {
    bytes32 queryID = oraclize_query('URL', 'json(https://api.coinmarketcap.com/v1/ticker/ethereum/).0.price_usd');
    database.setBool(queryID, true);
    LogEthUSDQuery(msg.sender, queryID, now);
    return true;
  }

  // TODO: set requirement for how much ether is needed in this call
  function mybUSDQuery()
  external
  payable
  requiresEther
  returns(bool){
    bytes32 queryID = oraclize_query('nested', '[WolframAlpha]  10 to the power of 3 multiplied by ${[URL] json(https://api.coinmarketcap.com/v1/ticker/mybit-token/).0.price_usd}');
    LogmybUSDQuery(msg.sender, queryID, now);
    return true;
  }

  function __callback(bytes32 myid, string result)
  public
  isOraclize {
    if (database.boolStorage(myid)) {
      ethUSDCallback(myid, result);
    }
    else {
      mybUSDCallback(myid, result);
    }
  }

  function ethUSDCallback(bytes32 myid, string result)
  internal {
    uint priceTimeline = database.uintStorage(keccak256("priceUpdateTimeline"));
    database.setUint(keccak256("ethUSDPrice"), parseInt(result));
    database.setUint(keccak256("ethUSDPriceExpiration"), (priceTimeline + now));
    database.deleteBool(myid);
    LogFundingCallbackReceived(myid, parseInt(result), now);
  }

  function mybUSDCallback(bytes32 myid, string result)
  internal {
    uint priceTimeline = database.uintStorage(keccak256("priceUpdateTimeline"));
    database.setUint(keccak256("mybUSDPrice"), parseInt(result));
    database.setUint(keccak256("mybUSDPriceExpiration"), (priceTimeline + now));
    LogBurnCallbackReceived(myid, parseInt(result), now);
  }

  modifier isOraclize() {
   require(msg.sender == oraclize_cbAddress());
   _;
  }

  modifier requiresEther() {
    require(msg.value > 0);
    _;
  }

  event LogmybUSDQuery(address indexed _from, bytes32 indexed _queryID, uint indexed _timestamp);
  event LogEthUSDQuery(address indexed _funder, bytes32 indexed _queryID, uint indexed _timestamp);
  event LogBurnCallbackReceived(bytes32 indexed _queryID, uint indexed _tokenPrice, uint indexed _timestamp);
  event LogFundingCallbackReceived(bytes32 indexed _queryID, uint indexed _result, uint indexed _timestamp);
}
