 pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
// import "../access/ERC20Burner.sol";
import "../tokens/erc20/DividendTokenERC20.sol";
import "../database/Events.sol";

// @title A crowdsale generator contract
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @notice AssetManagers can initiate a crowdsale that accepts ERC20 tokens as payment here
contract CrowdsaleGeneratorERC20 {
  using SafeMath for uint256;

  DBInterface private database;
  Events private events;
  // ERC20Burner private burner;

  uint constant scalingFactor = 10**32;

  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database, address _events)
  public{
      database = DBInterface(_database);
      events = Events(_events);
      // burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }

  // @notice AssetManagers can initiate a crowdfund for a new asset here
  // @dev the crowdsaleERC20 contract is granted rights to mint asset-tokens as it receives funding
  // @param (string) _assetURI = The location where information about the asset can be found
  // @param (bytes32) _operatorID = The ID of the operator who is to create and install this asset
  // @param (uint) _fundingLength = The number of seconds this crowdsale is to go on for until it fails
  // @param (uint) _startTime = The timestamp at which funding for this asset begins
  // @param (uint) _amountToRaise = The amount of tokens required to raise for the crowdsale to be a success
  // @param (uint) _assetManagerPerc = The percentage of the total revenue which is to go to the AssetManager if asset is a success
  // @param (address) _fundingToken = The ERC20 token to be used to fund the crowdsale (Operator must accept this token as payment)
  function createAssetOrderERC20(string _assetURI, address _assetManager, bytes32 _operatorID, uint _fundingLength, uint _startTime, uint _amountToRaise, uint _assetManagerPerc, address _fundingToken)
  external
  // burnRequired
  {
    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
    require(_amountToRaise > 0);
    require(_assetManagerPerc < 100);
    require(database.boolStorage(keccak256(abi.encodePacked("acceptsToken", _operatorID, _fundingToken))));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0));
    require(!database.boolStorage(keccak256(abi.encodePacked("assetURI", _assetURI)))); //Check that asset URI is unique
    uint startTime;
    if(_startTime < now){
      startTime = now;
    } else {
      startTime = _startTime;
    }
    address assetAddress = address(new DividendTokenERC20(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), _fundingToken));
    database.setUint(keccak256(abi.encodePacked("startTime", assetAddress)), startTime);
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetAddress)), startTime.add(_fundingLength));
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetAddress)), _amountToRaise);
    database.setUint(keccak256(abi.encodePacked("assetManagerFee", assetAddress)), _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor));
    //database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), assetAddress);
    //database.setBytes32(keccak256(abi.encodePacked("assetTokenID", assetAddress)), assetID);
    database.setAddress(keccak256(abi.encodePacked("assetManager", assetAddress)), _assetManager);
    database.setAddress(keccak256(abi.encodePacked("operator", assetAddress)), database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))));
    database.setAddress(keccak256(abi.encodePacked("fundingToken", assetAddress)), _fundingToken);
    database.setBool(keccak256(abi.encodePacked("assetURI", _assetURI)), true); //Set to ensure a unique asset URI
    events.asset('Asset funding started', _assetURI, assetAddress, _assetManager);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('CrowdsaleGeneratorERC20 destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // // @notice reverts if AssetManager hasn't approved burner to burn platform token
  // modifier burnRequired {
  //   //emit LogSig(msg.sig);
  //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
  //   _;
  // }

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _assetManager, string _assetURI, address indexed _tokenAddress);
  //event LogSig(bytes4 _sig);
}
