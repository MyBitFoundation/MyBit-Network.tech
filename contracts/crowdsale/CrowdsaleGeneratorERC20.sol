 pragma solidity 0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../ecosystem/ERC20Burner.sol";
import "../tokens/erc20/DividendTokenERC20.sol";

// @title An asset crowdsale contract.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @notice handles the funding and refunding of asset crowdsales
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

  // @notice brokers can initiate a crowdfund for a new asset here
  // @dev this crowdsale contract is granted the whole supply to distribute to investors
  function createAssetOrderERC20(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, uint _brokerPerc, address _fundingToken)
  external
  isTrue(_brokerPerc < 100)
  isTrue(database.boolStorage(keccak256(abi.encodePacked("acceptsToken", _operatorID, _fundingToken))))
  burnRequired {
    require(database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID))) != address(0));
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
    address assetAddress = address(new DividendTokenERC20(_assetURI, database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), _fundingToken));
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
    uint brokerFee = _amountToRaise.mul(uint(100).mul(scalingFactor).div(uint(100).sub(_brokerPerc)).sub(scalingFactor)).div(scalingFactor);
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
    database.setUint(keccak256(abi.encodePacked("brokerFee", assetID)), brokerFee);
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), assetAddress);
    database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
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

  // @notice reverts if user hasn't approved burner to burn platform token
  modifier burnRequired {
    //emit LogSig(msg.sig);
    require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
    _;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Events
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _broker, string _assetURI, address indexed _tokenAddress);
  event LogSig(bytes4 _sig);
}
