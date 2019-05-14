 pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../tokens/erc20/DividendToken.sol";
import "../database/Events.sol";
import "../interfaces/KyberInterface.sol";

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
  //CrowdsaleGeneratorERC20_ERC20Burner private burner;

  //uint constant scalingFactor = 10**32;

  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database, address _events, address _kyber)
  public{
      database = DBInterface(_database);
      events = Events(_events);
      kyber = KyberInterface(_kyber);
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
  function createAssetOrderERC20(string _assetURI, address _assetManager, bytes32 _operatorID, uint _fundingLength, uint _startTime, uint _amountToRaise, uint _assetManagerPerc, uint _escrow, address _fundingToken, address _paymentToken)
  payable
  external
  {
    if(_paymentToken == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
      require(msg.value == _escrow);
    } else {
      require(msg.value == 0);
    }
    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))), "User not approved");
    require(_amountToRaise >= 100, "Crowdsale goal is too small");
    require((_assetManagerPerc + database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))) < 100, "Manager percent need to be less than 100");
    require(database.boolStorage(keccak256(abi.encodePacked("operator.acceptsToken", _operatorID, _fundingToken))), "Operator does not accept this token");
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0), "Operator does not exist");
    require(!database.boolStorage(keccak256(abi.encodePacked("asset.uri", _assetURI))), "Asset URI is not unique"); //Check that asset URI is unique
    uint startTime;
    if(_startTime < now){
      startTime = now;
    } else {
      startTime = _startTime;
    }
    address assetAddress = address(new DividendToken(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "Minter"))), _fundingToken));
    require(setCrowdsaleValues(assetAddress, startTime, _fundingLength, _amountToRaise));
    require(setAssetValues(assetAddress, _assetURI, _operatorID, _assetManager, _assetManagerPerc, _amountToRaise));
    //If escrow, lock
    if(_escrow > 0){ require(lockEscrowInternal(_assetManager, assetAddress, _paymentToken, _escrow));}
    events.asset('Asset funding started', _assetURI, assetAddress, _assetManager);
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

  function setCrowdsaleValues(address _assetAddress, uint _startTime, uint _fundingLength, uint _amountToRaise)
  private
  returns (bool){
    database.setUint(keccak256(abi.encodePacked("crowdsale.start", _assetAddress)), _startTime);
    database.setUint(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)), _startTime.add(_fundingLength));
    database.setUint(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)), _amountToRaise);
    database.setUint(keccak256(abi.encodePacked("crowdsale.remaining", _assetAddress)), _amountToRaise.mul(uint(100).add(database.uintStorage(keccak256(abi.encodePacked("platform.fee"))))).div(100));
    return true;
  }

  function setAssetValues(address _assetAddress, string _assetURI, bytes32 _operatorID, address _assetManager, uint _assetManagerPerc, uint _amountToRaise)
  private
  returns (bool){
    uint totalTokens = _amountToRaise.mul(100).div(uint(100).sub(_assetManagerPerc).sub(database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))));
    //database.setUint(keccak256(abi.encodePacked("asset.managerTokens", assetAddress)), _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_assetManagerPerc)).sub(scalingFactor)).div(scalingFactor));
    database.setUint(keccak256(abi.encodePacked("asset.managerTokens", _assetAddress)), totalTokens.getFractionalAmount(_assetManagerPerc));
    database.setUint(keccak256(abi.encodePacked("asset.platformTokens", _assetAddress)), totalTokens.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("platform.percentage")))));
    database.setAddress(keccak256(abi.encodePacked("asset.manager", _assetAddress)), _assetManager);
    database.setAddress(keccak256(abi.encodePacked("asset.operator", _assetAddress)), database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))));
    database.setBool(keccak256(abi.encodePacked("asset.uri", _assetURI)), true); //Set to ensure a unique asset URI
    return true;
  }

  function lockEscrowInternal(address _assetManager, address _assetAddress, address _paymentTokenAddress, uint _amount)
  private
  returns (bool) {
    uint amount;
    bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
    address platformTokenAddress = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
    if(_paymentTokenAddress != platformTokenAddress){
      //Setup platform token and get current balance for comparison
      CrowdsaleGeneratorERC20_ERC20 platformToken = CrowdsaleGeneratorERC20_ERC20(platformTokenAddress);
      uint balanceBefore = platformToken.balanceOf(this);
      //Convert the payment token into the platform token
      if(_paymentTokenAddress == address(0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE)){
        kyber.trade.value(_amount)(_paymentTokenAddress, _amount, platformTokenAddress, address(this), 2**255, 0, 0); //Currently no minimum rate is set, so watch out for slippage!
      } else {
        CrowdsaleGeneratorERC20_ERC20 paymentToken = CrowdsaleGeneratorERC20_ERC20(_paymentTokenAddress);
        require(paymentToken.transferFrom(_assetManager, address(this), _amount));
        require(paymentToken.approve(address(kyber), _amount));
        kyber.trade(_paymentTokenAddress, _amount, platformTokenAddress, address(this), 2**255, 0, 0); //Currently no minimum rate is set, so watch out for slippage!
      }
      amount = platformToken.balanceOf(this).sub(balanceBefore);
      require(platformToken.transfer(database.addressStorage(keccak256(abi.encodePacked("contract", "EscrowReserve"))), amount));
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
