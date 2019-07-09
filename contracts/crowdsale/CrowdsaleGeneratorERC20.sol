 pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../database/Events.sol";
import "../interfaces/KyberInterface.sol";
import "../interfaces/MinterInterface.sol";

interface CrowdsaleGeneratorERC20_ERC20 {
  function balanceOf(address _who) external view returns (uint256);
  function approve(address _spender, uint256 _value) external returns (bool);
  function transfer(address _to, uint256 _value) external returns (bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}

// @title A crowdsale generator contract
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @notice AssetManagers can initiate a crowdsale that accepts ERC20 tokens as payment here
contract CrowdsaleGeneratorERC20 {
  using SafeMath for uint256;

  DBInterface private database;
  Events private events;
  KyberInterface private kyber;
  MinterInterface private minter;
  //CrowdsaleGeneratorERC20_ERC20Burner private burner;

  //uint constant scalingFactor = 10**32;

  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database, address _events, address _kyber)
  public{
      database = DBInterface(_database);
      events = Events(_events);
      kyber = KyberInterface(_kyber);
      minter = MinterInterface(database.addressStorage(keccak256(abi.encodePacked("contract", "Minter"))));
  }

  // @notice AssetManagers can initiate a crowdfund for a new asset here
  // @dev the crowdsaleERC20 contract is granted rights to mint asset-tokens as it receives funding
  // @param (string) _assetURI = The location where information about the asset can be found
  // @param (bytes32) _modelID = The modelID of the asset that will be used in the crowdsale
  // @param (uint) _fundingLength = The number of seconds this crowdsale is to go on for until it fails
  // @param (uint) _amountToRaise = The amount of tokens required to raise for the crowdsale to be a success
  // @param (uint) _assetManagerPerc = The percentage of the total revenue which is to go to the AssetManager if asset is a success
  // @param (address) _fundingToken = The ERC20 token to be used to fund the crowdsale (Operator must accept this token as payment)
  function createAssetOrderERC20(string _assetURI, string _ipfs, bytes32 _modelID, uint _fundingLength, uint _amountToRaise, uint _assetManagerPerc, uint _escrow, address _fundingToken, address _paymentToken)
  payable
  external
  {
    if(_paymentToken == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
      require(msg.value == _escrow);
    } else {
      require(msg.value == 0);
    }
    //require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))), "User not approved");
    require(_amountToRaise >= 100, "Crowdsale goal is too small");
    require((_assetManagerPerc + database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))) < 100, "Manager percent need to be less than 100");
    require(database.addressStorage(keccak256(abi.encodePacked("model.operator", _modelID))) != address(0), "Model not set");
    require(!database.boolStorage(keccak256(abi.encodePacked("asset.uri", _assetURI))), "Asset URI is not unique"); //Check that asset URI is unique
    address assetAddress = minter.cloneToken(_assetURI, _fundingToken);
    require(setCrowdsaleValues(assetAddress, _fundingLength, _amountToRaise));
    require(setAssetValues(assetAddress, _assetURI, _ipfs, _modelID, msg.sender, _assetManagerPerc, _amountToRaise, _fundingToken));
    uint minEscrow = calculateEscrowERC20(_amountToRaise, msg.sender, _modelID, _fundingToken);
    require(lockEscrowERC20(msg.sender, assetAddress, _paymentToken, _fundingToken, _escrow, minEscrow));
    events.asset('Asset funding started', _assetURI, assetAddress, msg.sender);
    events.asset('New asset ipfs', _ipfs, assetAddress, msg.sender);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('CrowdsaleGeneratorERC20 destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Internal/ Private Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function setCrowdsaleValues(address _assetAddress, uint _fundingLength, uint _amountToRaise)
  private
  returns (bool){
    database.setUint(keccak256(abi.encodePacked("crowdsale.start", _assetAddress)), now);
    database.setUint(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)), now.add(_fundingLength));
    database.setUint(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)), _amountToRaise);
    database.setUint(keccak256(abi.encodePacked("crowdsale.remaining", _assetAddress)), _amountToRaise.mul(uint(100).add(database.uintStorage(keccak256(abi.encodePacked("platform.fee"))))).div(100));
    return true;
  }

  function setAssetValues(address _assetAddress, string _assetURI, string _ipfs, bytes32 _modelID, address _assetManager, uint _assetManagerPerc, uint _amountToRaise, address _fundingToken)
  private
  returns (bool){
    uint totalTokens = _amountToRaise.mul(100).div(uint(100).sub(_assetManagerPerc).sub(database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))));
    //database.setUint(keccak256(abi.encodePacked("asset.managerTokens", assetAddress)), _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor));
    database.setUint(keccak256(abi.encodePacked("asset.managerTokens", _assetAddress)), totalTokens.getFractionalAmount(_assetManagerPerc));
    database.setUint(keccak256(abi.encodePacked("asset.platformTokens", _assetAddress)), totalTokens.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))));
    database.setAddress(keccak256(abi.encodePacked("asset.manager", _assetAddress)), _assetManager);
    database.setBytes32(keccak256(abi.encodePacked("asset.modelID", _assetAddress)), _modelID);
    database.setString(keccak256(abi.encodePacked("asset.ipfs", _assetAddress)), _ipfs);
    //database.setAddress(keccak256(abi.encodePacked("asset.operator", _assetAddress)), database.addressStorage(keccak256(abi.encodePacked("asset.operator", _modelID))));
    /*
    if(database.boolStorage(keccak256(abi.encodePacked("asset.acceptsToken", _modelID, _fundingToken)))){
      database.setAddress(keccak256(abi.encodePacked("asset.receiver", _assetAddress)), database.addressStorage(keccak256(abi.encodePacked("model.operator", _modelID))));
    } else {
      database.setAddress(keccak256(abi.encodePacked("asset.receiver", _assetAddress)), _assetManager);
    }
    */
    database.setBool(keccak256(abi.encodePacked("asset.uri", _assetURI)), true); //Set to ensure a unique asset URI
    return true;
  }

  function calculateEscrowERC20(uint _amount, address _manager, bytes32 _modelID, address _fundingToken)
  private
  view
  returns (uint){
    uint percent = database.uintStorage(keccak256(abi.encodePacked("collateral.base"))).add(database.uintStorage(keccak256(abi.encodePacked("collateral.level", database.uintStorage(keccak256(abi.encodePacked("manager.assets", _manager)))))));
    if(!database.boolStorage(keccak256(abi.encodePacked("model.payoutToken", _modelID, _fundingToken)))){
      percent = percent.mul(3);
    }
    if(!database.boolStorage(keccak256(abi.encodePacked("model.acceptsToken", _modelID, _fundingToken)))){
      percent = percent.add(100);
    }
    return _amount.getFractionalAmount(percent);
  }

  function lockEscrowERC20(address _assetManager, address _assetAddress, address _paymentTokenAddress, address _fundingTokenAddress, uint _amount, uint _min)
  private
  returns (bool) {
    uint amount;
    bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
    address platformTokenAddress = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
    if(_paymentTokenAddress == _fundingTokenAddress){
      require(_amount >= _min, "Insufficient collateral for asset manager risk");
    } else {
      //Get conversion rate, and make sure converted amount is >= _amount
      (uint rate,) = kyber.getExpectedRate(_paymentTokenAddress, _fundingTokenAddress, _amount);
      require(_amount.mul(rate).div(10**18) >= _min);
    }
    if(_paymentTokenAddress != platformTokenAddress){
      //Convert the payment token into the platform token
      if(_paymentTokenAddress == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
        amount = kyber.trade.value(_amount)(_paymentTokenAddress, _amount, platformTokenAddress, address(this), 2**255, 0, 0); //Currently no minimum rate is set, so watch out for slippage!
      } else {
        CrowdsaleGeneratorERC20_ERC20 paymentToken = CrowdsaleGeneratorERC20_ERC20(_paymentTokenAddress);
        require(paymentToken.transferFrom(_assetManager, address(this), _amount));
        require(paymentToken.approve(address(kyber), _amount));
        amount = kyber.trade(_paymentTokenAddress, _amount, platformTokenAddress, address(this), 2**255, 0, 0); //Currently no minimum rate is set, so watch out for slippage!
      }
      require(CrowdsaleGeneratorERC20_ERC20(platformTokenAddress).transfer(database.addressStorage(keccak256(abi.encodePacked("contract", "EscrowReserve"))), amount));
    } else {
      amount = _amount;
      require(CrowdsaleGeneratorERC20_ERC20(platformTokenAddress).transferFrom(_assetManager, database.addressStorage(keccak256(abi.encodePacked("contract", "EscrowReserve"))), amount));
    }
    database.setUint(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID)), amount);
    events.escrow('Escrow locked', _assetAddress, assetManagerEscrowID, _assetManager, amount);
    return true;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

  modifier checkRequirements {
    _;
  }
}
