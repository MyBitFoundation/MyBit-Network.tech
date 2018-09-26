pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../tokens/erc20/DividendToken.sol";
import "../tokens/distribution/FixedDistribution.sol"; 

// @title An asset generator contract for onboarding existing real-world assets
// @author Kyle Dewhurst, MyBit Foundation
contract AssetGenerator {
  using SafeMath for uint256;

  DBInterface private database;


  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database)
  public{
      database = DBInterface(_database);
  }


  // @notice users can on-board non-tradeable assets here
  // @dev creates an ERC20 dividend token (tradeable) or distribution token (not-tradeable)
  function createAsset(address _broker, uint _brokerFee, string _tokenURI, address[] _tokenHolders, uint[] _amount)
  external 
  returns (bool) { 
    require(_brokerFee < 100); 
    require (_tokenHolders.length == _amount.length && _tokenHolders.length <= 200); 
    bytes32 assetID = keccak256(abi.encodePacked(_broker, _tokenURI));
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))) == address(0)); 
    FixedDistribution assetInstance = new FixedDistribution(_tokenURI, _tokenHolders, _amount); 
    database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
    database.setUint(keccak256(abi.encodePacked("brokerFee", assetID)), _brokerFee);     // Percentage of income that goes to broker
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(assetInstance));
    emit LogAssetCreated(assetID, address(assetInstance), _broker, _tokenURI); 
    return true; 
  }

  // @notice users can on-board tradeable assets here 
  // @dev creates an ERC20 dividend token (tradeable) or
  function createTradeableAsset(address _broker, uint _brokerFee, string _tokenURI, address[] _tokenHolders, uint[] _amount)
  external 
  returns (bool) { 
    require(_brokerFee < 100); 
    require (_tokenHolders.length == _amount.length && _tokenHolders.length <= 200); 
    address assetGeneratorAddress = database.addressStorage(keccak256(abi.encodePacked("contract", "AssetGenerator"))); 
    bytes32 assetID = keccak256(abi.encodePacked(_broker, _tokenURI));
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))) == address(0)); 
    DividendToken assetInstance = new DividendToken(_tokenURI, assetGeneratorAddress);   // Gives this contract all new asset tokens
    for (uint8 i = 0; i < _tokenHolders.length; i++) { 
        assetInstance.mint(_tokenHolders[i], _amount[i]); 
    }
    assetInstance.finishMinting(); 
    database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
    database.setUint(keccak256(abi.encodePacked("brokerFee", assetID)), _brokerFee);     // Percentage of income that goes to broker
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(assetInstance));
    emit LogTradeableAssetCreated(assetID, address(assetInstance), _broker, _tokenURI); 
    return true;
  }


  event LogAssetCreated(bytes32 indexed _assetID, address indexed _tokenAddress, address indexed _broker, string _tokenURI); 
  event LogTradeableAssetCreated(bytes32 indexed _assetID, address indexed _tokenAddress, address indexed _broker, string _tokenURI); 

  // TODO: add functionality for asset with no broker 
  // function createSelfGovernedAsset() 

}
