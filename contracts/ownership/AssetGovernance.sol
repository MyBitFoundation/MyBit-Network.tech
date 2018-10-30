pragma solidity 0.4.24;

import "../math/SafeMath.sol";
interface Burner { function burnEscrow(bytes32 _assetID) external returns (bool); }
interface Escrow { function unlockEscrow(bytes32 _assetID) external returns (bool); }
interface DB {
  function addressStorage(bytes32 _key) external  view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function setUint(bytes32 _key, uint _value) external;
}
interface TokenView {
  function totalSupply() external view returns (uint);
  function balanceOf(address _tokenHolder) external view returns (uint);
}

// @title A contract to manage the governance of assets on the platform
// @author Kyle Dewhurst, MyBit Foundation
// @notice All token holders of an asset can vote here
contract AssetGovernance {
  using SafeMath for uint256;

  DB public database;

  uint public consensus = 66;   // TODO: sub the assetmanager portion of tokens, since they can't be voted with
  uint constant scalingFactor = 10e32;

  constructor(address _database)
  public {
    database = DB(_database);
  }


  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...
  // @dev ie sha3(_assetID) or sha3(_assetID, someAddress)
  function voteForExecution(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash, uint _amountToLock)
  external
  validAsset(_assetID)
  returns (bool) {
    bytes32 executionID = keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", executionID));
    bytes32 investorVotesID = keccak256(abi.encodePacked("investorVotes", executionID, msg.sender));
    uint256 numVotes = database.uintStorage(numVotesID);
    uint256 investorVotes = database.uintStorage(investorVotesID);
    require(lockTokens(_assetID, msg.sender, _amountToLock), "unable to lock tokens");
    database.setUint(numVotesID, numVotes.add(_amountToLock));
    database.setUint(investorVotesID, investorVotes.add(_amountToLock));
    return true;
  }


  // @notice unlock tokens, removing them from the vote
  // @dev _executionID should be looked up in event logs. it is equal to sha3(_assetID, _methodID, _parameterHash)
  function unlockToken(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash, uint _amountToUnlock)
  external
  validAsset(_assetID)
  returns (bool) {
    bytes32 executionID = keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
    bytes32 voteTotalID = keccak256(abi.encodePacked("voteTotal", executionID));
    bytes32 investorVotesID = keccak256(abi.encodePacked("investorVotes", executionID, msg.sender));
    uint investorVotes = database.uintStorage(investorVotesID);
    uint totalVotes = database.uintStorage(voteTotalID);
    require(investorVotes <= _amountToUnlock);   // 1 vote = 1 token
    database.setUint(voteTotalID, totalVotes.sub(_amountToUnlock));
    database.setUint(investorVotesID, investorVotes.sub(_amountToUnlock));
    return true;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Public Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice  Checks that 2/3 or more of token holders agreed on function call
  function isConsensusReached(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash)
  public
  view
  returns (bool) {
    TokenView assetToken = TokenView(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    bytes32 executionID = keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", executionID));
    uint256 numTokens = assetToken.totalSupply();
    return database.uintStorage(numVotesID).mul(scalingFactor).mul(100).div(numTokens).div(scalingFactor) >= consensus;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Internal Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice lock asset tokens to be able to vote
  // @dev keeps track of how many assetTokens this investor has locked (for GovernedToken checks)
  function lockTokens(bytes32 _assetID, address _investor, uint _amount)
  internal
  returns (bool) {
    TokenView assetToken = TokenView(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    uint numTokensLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", _assetID, _investor)));
    require(_amount <= assetToken.balanceOf(_investor).sub(numTokensLocked));
    database.setUint(keccak256(abi.encodePacked("tokensLocked", _assetID, _investor)), numTokensLocked.add(_amount));
    return true;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // @notice reverts if the asset does not have a token address set in the database
  modifier validAsset(bytes32 _assetID) {
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))) != address(0));
    _;
  }

}
