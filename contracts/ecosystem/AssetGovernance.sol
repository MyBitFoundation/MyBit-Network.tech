pragma solidity 0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../interfaces/GovToken.sol";
interface Burner { function burnEscrow(bytes32 _assetID) external returns (bool); }



// @title A contract to manage the governance of assets on the platform
// @author Kyle Dewhurst, MyBit Foundation
// @notice All token holders of an asset can vote here
contract AssetGovernance {
  using SafeMath for uint256;

  DBInterface public database; 


  constructor(address _database)
  public { 
    database = DBInterface(_database); 
  }

  // @notice initiates voting
  // TODO: Who gets to call this function?  
  function initiateGovernance(bytes32 _assetID)
  validAsset(_assetID)
  external 
  returns (bool) { 
    // @dev need to store an _assetID => tokenAddress reference to restrict transfers while voting 
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    database.setBytes32(keccak256(abi.encodePacked("assetTokenID", address(assetToken))), _assetID); 
    return true; 
  }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...ie sha3(_assetID)
  function voteForExecution(bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash, uint _amount)
  external 
  validAsset(_assetID)
  returns (bool) {
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    bytes32 executionID = keccak256(abi.encodePacked(_assetID, _methodID, _parameterHash)); 
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", executionID)); 
    bytes32 userVotesID = keccak256(abi.encodePacked("userVotes", executionID, msg.sender)); 
    uint256 numVotes = database.uintStorage(numVotesID);
    uint256 userVotes = database.uintStorage(userVotesID); 
    require(lockTokens(_assetID, msg.sender, _amount)); 
    database.setUint(numVotesID, numVotes.add(_amount)); 
    database.setUint(userVotesID, userVotes.add(_amount)); 
    return true; 
  }


  // @dev _executionID should be looked up in event logs. it is equal to sha3(_assetID, _methodID, _parameterHash)
  function unlockToken(bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash, uint _amount)
  external 
  validAsset(_assetID)
  returns (bool) { 
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    bytes32 executionID = keccak256(abi.encodePacked(_assetID, _methodID, _parameterHash)); 
    bytes32 lockedTokensID = keccak256(abi.encodePacked("tokensLocked", _assetID)); 
    bytes32 userVotesID = keccak256(abi.encodePacked("userVotes", executionID)); 
    uint amountLocked = database.uintStorage(lockedTokensID); 
    uint userVotes = database.uintStorage(userVotesID);
    uint totalVotes = database.uintStorage(keccak256(abi.encodePacked("voteTotal", executionID)));
    require(userVotes <= _amount);   // 1 vote = 1 token
    database.setUint(keccak256(abi.encodePacked("voteTotal", executionID)), totalVotes.sub(_amount)); 
    database.setUint(lockedTokensID, amountLocked.sub(_amount)); 
    database.setUint(userVotesID, userVotes.sub(_amount)); 
    return true; 
  }

  function lockTokens(bytes32 _assetID, address _user, uint _amount)
  internal
  returns (bool) { 
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", _assetID))); 
    require(_amount <= assetToken.balanceOf(_user).sub(amountLocked)); 
    database.setUint(keccak256(abi.encodePacked("tokensLocked", address(assetToken))), amountLocked.add(_amount)); 
    return true;
  }
  
  function chooseNewBroker(bytes32 _assetID, address _newBroker)
  external 
  validAsset(_assetID)
  hasConsensus(msg.sig, keccak256(abi.encodePacked(_assetID, _newBroker)))
  returns (bool) { 
    return true;
  }


  // @notice investors can vote to call this function and burn the brokers escrow for negligence
  function burnBrokerEscrow(bytes32 _assetID)
  external
  validAsset(_assetID)
  hasConsensus(msg.sig, keccak256(abi.encodePacked(_assetID)))
  returns (bool) {
    Burner burner = Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner")))); 
    require(burner.burnEscrow(_assetID)); 
    return true;
  }

  // @notice  Checks that 2/3 or more of token holders agreed on function call
  function isConsensusReached(address _assetID, bytes4 _methodID, bytes32 _parameterHash)
  public 
  view 
  returns (bool) { 
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    bytes32 executionID = keccak256(abi.encodePacked(_assetID, _methodID, _parameterHash)); 
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", executionID));
    uint256 numTokens = assetToken.totalSupply(); 
    return database.uintStorage(numVotesID).mul(100).div(numTokens) >= 33; 
  }


  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier hasConsensus(bytes4 _methodID, bytes32 _parameterHash) { 
    require(isConsensusReached(address(this), _methodID, _parameterHash));   // owners must have agreed on function + parameters
    _;
  }

  // @notice reverts if the asset does not have a token address set in the database
  modifier validAsset(bytes32 _assetID) {
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))) != address(0));
    _;
  }


  // TODO: Possibly create functionality to mint more tokens to cover repair costs
  //       -------> would need to restructure minting authority
  // function mintTokens(bytes32 _assetID)
  // external 
  // returns (bool) { 
  //   return true; 
  // }

}
