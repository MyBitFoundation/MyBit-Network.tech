pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../database/Events.sol";
// import "../access/ERC20Burner.sol";
import "../tokens/erc20/DividendToken.sol";

// @title A crowdsale generator contract
// @author Kyle Dewhurst, MyBit Foundation
// @notice AssetManagers can initiate a crowdsale that accepts Ether as payment here
contract CrowdsaleGeneratorETH {
  using SafeMath for uint256;

  DBInterface public database;
  Events public events;
  // ERC20Burner public burner;

  uint constant scalingFactor = 1e32;   // Used to avoid rounding errors

  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database, address _events)
  public{
      database = DBInterface(_database);
      events = Events(_events);
      // burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }

  // @notice AssetManagers can initiate a crowdfund for a new asset here
  // @dev the crowdsaleETH contract is granted rights to mint asset-tokens as it receives funding
  // @param (string) _assetURI = The location where information about the asset can be found
  // @param (bytes32) _operatorID = The ID of the operator who is to create and install this asset
  // @param (uint) _fundingLength = The number of seconds this crowdsale is to go on for until it fails
  // @param (uint) _amountToRaise = The amount of WEI required to raise for the crowdsale to be a success
  // @param (uint) _assetManagerPerc = The percentage of the total revenue which is to go to the AssetManager if asset is a success
  function createAssetOrderETH(string _assetURI, address _assetManager, bytes32 _operatorID, uint _fundingLength, uint _startTime, uint _amountToRaise, uint _assetManagerPerc)
  external
  // burnRequired
  returns (bool) {
    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
    require(_amountToRaise > 0);
    require(_assetManagerPerc < 100);
    require(database.boolStorage(keccak256(abi.encodePacked("acceptsEther", _operatorID))));
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0));
    uint startTime;
    if(_startTime < now){
      startTime = now;
    } else {
      startTime = _startTime;
    }
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
    address assetAddress = address(new DividendToken(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH")))));   // Gives this contract all new asset tokens
    database.setUint(keccak256(abi.encodePacked("startTime", assetID)), startTime);
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), startTime.add(_fundingLength));
    uint assetManagerFee = _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor);
    database.setUint(keccak256(abi.encodePacked("assetManagerFee", assetID)), assetManagerFee);
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), assetAddress);
    database.setBytes32(keccak256(abi.encodePacked("assetTokenID", assetAddress)), assetID);
    database.setAddress(keccak256(abi.encodePacked("assetManager", assetID)), msg.sender);
    database.setAddress(keccak256(abi.encodePacked("operator", assetID)), database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))));
    //emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, address(assetAddress));
    events.asset('Asset funding started', _assetURI, assetID, assetAddress, msg.sender);
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('CrowdsaleGeneratorETH destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // // @notice reverts if asset manager is unable to burn pp
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
