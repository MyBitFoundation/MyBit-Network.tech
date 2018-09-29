pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../ecosystem/ERC20Burner.sol";
import "../tokens/erc20/DividendToken.sol";

// @title An asset crowdsale contract.
// @author Kyle Dewhurst, MyBit Foundation
// @notice handles the funding and refunding of asset crowdsales
contract CrowdsaleGeneratorETH {
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
  // @dev can lookup the amount of escrow in the database with sha3("brokerEscrow", assetID)
  function createAssetOrderETH(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, uint _brokerFee)
  external {
    require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked("createAssetOrderETH(string, bytes32, uint, uint, uint)")))));
    require (_brokerFee < 100);
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    require(operatorAddress != address(0));
    require (database.boolStorage(keccak256(abi.encodePacked("acceptsEther", _operatorID))));
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
    address ethCrowdsaleAddress = database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH")));
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
    address assetAddress = address(new DividendToken(_assetURI, ethCrowdsaleAddress));   // Gives this contract all new asset tokens
    database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
    database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(assetAddress));
    database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
    database.setUint(keccak256(abi.encodePacked("brokerFee", assetID)), _brokerFee);     // Percentage of income that goes to broker
    database.setAddress(keccak256(abi.encodePacked("operator", assetID)), operatorAddress);
    emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, address(assetAddress));
  }

  event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _broker, string _assetURI, address indexed _tokenAddress);

}
