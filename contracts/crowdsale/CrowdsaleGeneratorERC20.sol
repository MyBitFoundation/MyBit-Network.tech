 pragma solidity 0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../access/ERC20Burner.sol";
import "../tokens/erc20/DividendTokenERC20.sol";

// @title A crowdsale generator contract
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @notice AssetManagers can initiate a crowdsale that accepts ERC20 tokens as payment here
contract CrowdsaleGeneratorERC20 {
  using SafeMath for uint256;

  DBInterface private database;
  ERC20Burner private burner;

  uint constant scalingFactor = 1e32;

  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database)
  public{
      database = DBInterface(_database);
      burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }

  // @notice AssetManagers can initiate a crowdfund for a new asset here
  // @dev the crowdsaleERC20 contract is granted rights to mint asset-tokens as it receives funding
  // @param (string) _assetURI = The location where information about the asset can be found
  // @param (bytes32) _operatorID = The ID of the operator who is to create and install this asset
  // @param (uint) _fundingLength = The number of seconds this crowdsale is to go on for until it fails
  // @param (uint) _amountToRaise = The amount of tokens required to raise for the crowdsale to be a success
  // @param (uint) _assetManagerPerc = The percentage of the total revenue which is to go to the AssetManager if asset is a success
  // @param (address) _fundingToken = The ERC20 token to be used to fund the crowdsale (Operator must accept this token as payment)
  function createAssetOrderERC20(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, uint _assetManagerPerc, address _fundingToken)
  external
  isTrue(_assetManagerPerc < 100)
  isTrue(database.boolStorage(keccak256(abi.encodePacked("acceptsToken", _operatorID, _fundingToken))))
  burnRequired {
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0));
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
    address assetAddress = address(new DividendTokenERC20(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), _fundingToken));
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
    uint assetManagerFee = _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor);
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
    database.setUint(keccak256(abi.encodePacked("assetManagerFee", assetID)), assetManagerFee);
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), assetAddress);
    database.setBytes32(keccak256(abi.encodePacked("assetTokenID", assetAddress)), assetID);
    database.setAddress(keccak256(abi.encodePacked("assetManager", assetID)), msg.sender);
    database.setAddress(keccak256(abi.encodePacked("operator", assetID)), database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))));
    database.setAddress(keccak256(abi.encodePacked("fundingToken", assetID)), _fundingToken);
    emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, assetAddress);
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice reverts if _conditional isn't true
  modifier isTrue(bool _conditional){
    require(_conditional);
    _;
  }

  // @notice reverts if AssetManager hasn't approved burner to burn platform token
  modifier burnRequired {
    //emit LogSig(msg.sig);
    require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _assetManager, string _assetURI, address indexed _tokenAddress);
  event LogSig(bytes4 _sig);
}
