pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../database/Events.sol";
// import "../access/ERC20Burner.sol";
import "../tokens/erc20/DividendToken.sol";

interface CrowdsaleGeneratorETH_ERC20 {
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}

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
  function createAssetOrderETH(string _assetURI, address _assetManager, bytes32 _operatorID, uint _fundingLength, uint _startTime, uint _amountToRaise, uint _assetManagerPerc, uint _escrow, address _burnToken)
  external
  // burnRequired
  returns (bool) {
    require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))), _burnToken);
    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))), "User not approved");
    require(_amountToRaise > 0, "Crowdsale goal is zero");
    require(_assetManagerPerc < 100, "Manager percent need to be less than 100");
    require(database.boolStorage(keccak256(abi.encodePacked("operator.acceptsEther", _operatorID))), "Operator does not accept Ether");
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0), "Operator does not exist");
    require(!database.boolStorage(keccak256(abi.encodePacked("asset.uri", _assetURI))), "Asset URI is not unique"); //Check that asset URI is unique
    uint startTime;
    if(_startTime < now){
      startTime = now;
    } else {
      startTime = _startTime;
    }
    address assetAddress = address(new DividendToken(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH")))));   // Gives this contract all new asset tokens
    database.setUint(keccak256(abi.encodePacked("crowdsale.start", assetAddress)), startTime);
    database.setUint(keccak256(abi.encodePacked("crowdsale.deadline", assetAddress)), startTime.add(_fundingLength));
    database.setUint(keccak256(abi.encodePacked("asset.managerFee", assetAddress)), _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor));
    database.setUint(keccak256(abi.encodePacked("crowdsale.goal", assetAddress)), _amountToRaise);
    database.setAddress(keccak256(abi.encodePacked("asset.manager", assetAddress)), _assetManager);
    database.setAddress(keccak256(abi.encodePacked("asset.operator", assetAddress)), database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))));
    database.setBool(keccak256(abi.encodePacked("asset.uri", _assetURI)), true); //Set to ensure a unique asset URI
    //If escrow, lock
    if(_escrow > 0){ require(lockEscrowInternal(_assetManager, assetAddress, _escrow));}
    events.asset('Asset funding started', _assetURI, assetAddress, _assetManager);
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
  //                                            Internal/ Private Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function lockEscrowInternal(address _assetManager, address _assetAddress, uint _amount)
  private
  returns (bool) {
    require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))) == address(0));
    bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
    address platformToken = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
    require(CrowdsaleGeneratorETH_ERC20(platformToken).transferFrom(_assetManager, database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerEscrow"))), _amount));
    database.setUint(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID)), _amount);
    database.setAddress(keccak256(abi.encodePacked("asset.manager", _assetAddress)), _assetManager);
    events.escrow('Escrow locked', _assetAddress, assetManagerEscrowID, _assetManager, _amount);
    return true;
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
