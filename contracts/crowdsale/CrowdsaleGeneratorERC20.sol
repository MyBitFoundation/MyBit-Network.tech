 pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../ecosystem/ERC20Burner.sol";
import "../tokens/erc20/DividendTokenERC20.sol";

// @title An asset crowdsale contract.
// @author Kyle Dewhurst, MyBit Foundation
// @notice handles the funding and refunding of asset crowdsales
contract CrowdsaleGeneratorERC20 {
  using SafeMath for uint256;

  DBInterface private database;
  ERC20Burner private burner;


  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database)
  public{
      database = DBInterface(_database);
      burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }


  // @notice brokers can initiate a crowdfund for a new asset here
  // @dev this crowdsale contract is granted the whole supply to distribute to investors
  function createAssetOrderERC20(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, uint _brokerFee, address _fundingToken)
  external 
  isTrue(_brokerFee < 100 && _brokerFee > 0)
  isTrue(_brokerFee > 0 && _brokerFee < 100)
  isTrue(database.boolStorage(keccak256(abi.encodePacked("acceptsToken", _operatorID))))
  burnRequired{
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    address crowdsaleERC20Address = database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20")));
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
    address assetAddress = address(new DividendTokenERC20(_assetURI, crowdsaleERC20Address, _fundingToken));
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), assetAddress);
    database.setUint(keccak256(abi.encodePacked("brokerFee", assetID)), _brokerFee);     // Percentage of income that goes to broker
    database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
    database.setAddress(keccak256(abi.encodePacked("operator", assetID)), operatorAddress);  
    database.setAddress(keccak256(abi.encodePacked("fundingToken", assetID)), _fundingToken);
    emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, assetAddress);
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  modifier isTrue(bool _conditional){ 
    require(_conditional); 
    _; 
  }

  modifier burnRequired { 
    bytes4 methodID = bytes4(keccak256(abi.encodePacked("createAssetOrderETH(string, bytes32, uint256, uint256, uint256)")));
    address crowdsaleGeneratorETH = database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleGeneratorETH")));
    require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(methodID, crowdsaleGeneratorETH)))));
    _; 
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _broker, string _assetURI, address indexed _tokenAddress);
}
