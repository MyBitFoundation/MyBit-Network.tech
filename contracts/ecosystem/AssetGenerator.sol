pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import '../database/Events.sol';
// import "../access/ERC20Burner.sol";
import "../tokens/erc20/DividendToken.sol";
import "../tokens/distribution/FixedDistribution.sol";

// @title An asset generator contract for onboarding existing real-world assets
// @notice This contract creates ERC20 dividend tokens and give sthem to the _tokenHolders provided
// @author Kyle Dewhurst, MyBit Foundation
contract AssetGenerator {
  using SafeMath for uint256;

  DBInterface private database;
  Events private events;


  // @notice This contract
  // @param: The address for the database contract used by this platform
  constructor(address _database, address _events)
  public{
      database = DBInterface(_database);
      events = Events(_events);
  }


  // @notice users can on-board non-tradeable assets here
  // @dev creates an ERC20 dividend token (tradeable) or distribution token (not-tradeable)
  function createAsset(string _tokenURI, address _assetManager, address[] _tokenHolders, uint[] _amount)
  external
  // burnRequired
  returns (bool) {
    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
    require (_tokenHolders.length == _amount.length && _tokenHolders.length <= 100);
    FixedDistribution assetInstance = new FixedDistribution(_tokenURI, _tokenHolders, _amount);
    database.setAddress(keccak256(abi.encodePacked("asset.manager", address(assetInstance))), _assetManager);
    events.asset('Asset created', _tokenURI, address(assetInstance), _assetManager);
    return true;
  }

  // @notice users can on-board tradeable assets here
  // @dev creates an ERC20 dividend token (tradeable) or
  function createTradeableAsset(string _tokenURI, address _assetManager, address[] _tokenHolders, uint[] _amount)
  external
  // burnRequired
  returns (bool) {
    require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
    require (_tokenHolders.length == _amount.length && _tokenHolders.length <= uint8(100));
    DividendToken assetInstance = new DividendToken(_tokenURI, address(this), address(0));   // Gives this contract all new asset tokens
    for (uint8 i = 0; i < _tokenHolders.length; i++) {
      assetInstance.mint(_tokenHolders[i], _amount[i]);
    }
    assetInstance.finishMinting();
    database.setAddress(keccak256(abi.encodePacked("asset.manager", address(assetInstance))), _assetManager);
    events.asset('Asset created', _tokenURI, address(assetInstance), _assetManager);
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('AssetGenerator destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }

  // @notice reverts if user hasn't approved burner to burn platform token
  // modifier burnRequired {
  //   ERC20Burner burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
  //   _;
  // }

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }


  //event LogAssetCreated(bytes32 indexed _assetAddress, address indexed _tokenAddress, address indexed _assetManager, string _tokenURI);
  //event LogTradeableAssetCreated(bytes32 indexed _assetAddress, address indexed _tokenAddress, address indexed _assetManager, string _tokenURI);


}
