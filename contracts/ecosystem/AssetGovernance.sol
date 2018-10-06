pragma solidity 0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../interfaces/GovToken.sol";
import "../interfaces/BurnERC20.sol"; 


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

  // // @notice initiates voting 
  // function initiateGovernance(bytes32 _assetID)
  // external { 
  // }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...ie sha3(_assetID)
  function voteForExecution(bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash)
  external 
  returns (bool) {
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    require(assetToken.blockAtLock(msg.sender) > 0); 
    bytes32 executionID = keccak256(abi.encodePacked(_assetID, _methodID, _parameterHash)); 
    bytes32 numVotesID = keccak256(abi.encodePacked("numberOfVotes", executionID)); 
    uint256 numVotes = database.uintStorage(numVotesID);
    database.setUint(numVotesID, numVotes.add(assetToken.balanceOf(msg.sender))); 
    return true; 
  }


  function unlockToken(bytes32 _assetID)
  external 
  returns (bool) { 
    // TODO: remove users votes and call governedtoken contract to unlock tokens
  }

  
  function chooseNewBroker(bytes32 _assetID, address _newBroker)
  external 
  isRestricted(msg.sig, keccak256(abi.encodePacked(_assetID, _newBroker)))
  returns (bool) { 
    return true;
  }

  // @notice investors can vote to call this function and burn the brokers escrow for negligence
  function burnEscrow(bytes32 _assetID)
  external
  isRestricted(msg.sig, keccak256(abi.encodePacked(_assetID)))
  returns (bool) {
    uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _assetID))));
    BurnERC20 token = BurnERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
    require(token.burn(amountToBurn));
    database.deleteUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)));
    database.deleteAddress(keccak256(abi.encodePacked("assetEscrower", _assetID)));
    return true;
  }

  function isQuorumReached(address _assetID, bytes4 _methodID, bytes32 _parameterHash)
  public 
  view 
  returns (bool) { 
    GovToken assetToken = GovToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    bytes32 executionID = keccak256(abi.encodePacked(_assetID, _methodID, _parameterHash)); 
    bytes32 numVotesID = keccak256(abi.encodePacked("numberOfVotes", executionID));
    uint256 numTokens = assetToken.totalSupply(); 
    // check that number of signatures are greater than required quorum
    return database.uintStorage(numVotesID).mul(100).div(numTokens) >= 51; 
  }

  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) { 
    require(isQuorumReached(address(this), _methodID, _parameterHash));   // owners must have agreed on function + parameters
    _;
    // remove votes from function call 
    database.deleteUint(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)));  
  }



  // TODO: Possibly create functionality to mint more tokens to cover repair costs
  //       -------> would need to restructure minting authority
  // function mintTokens(bytes32 _assetID)
  // external 
  // returns (bool) { 
  //   return true; 
  // }

}
