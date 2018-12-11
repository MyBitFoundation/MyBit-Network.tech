pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/ERC20DividendInterface.sol";
// import "../access/ERC20Burner.sol";

interface Events {  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)  external; }
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function deleteUint(bytes32 _key) external;
  function setBool(bytes32 _key, bool _value) external;
  function boolStorage(bytes32 _key) external view returns (bool);
}

// @title An asset crowdsale contract which accepts funding from ERC20 tokens.
// @notice Begins a crowdfunding period for a digital asset, minting asset dividend tokens to investors when particular ERC20 token is received
// @author Kyle Dewhurst, MyBit Foundation
// @notice creates a dividend token to represent the newly created asset.
contract CrowdsaleERC20{
  using SafeMath for uint256;

  DB public database;
  Events public events;
  // ERC20Burner public burner;

  // @notice Constructor: initializes database instance
  // @param: The address for the platform database
  constructor(address _database, address _events)
  public{
      database = DB(_database);
      events = Events(_events);
      // burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }


  // @notice Investors can send ERC20 tokens here to fund an asset, receiving an equivalent number of asset-tokens.
  // @dev investor must approve this contract to transfer tokens
  // @param (address) _assetAddress = The address of the asset tokens, investor wishes to purchase
  // @param (uint) _amount = The amount to spend purchasing this asset
  function buyAssetOrderERC20(address _assetAddress, address _investor, uint _amount)
  external
  validAsset(_assetAddress)
  betweenDeadlines(_assetAddress)
  notFinalized(_assetAddress)
  // burnRequired
  returns (bool) {
    require(msg.sender == _investor || database.boolStorage(keccak256(abi.encodePacked("approval", _investor, msg.sender, address(this), msg.sig))));
    ERC20DividendInterface assetToken = ERC20DividendInterface(_assetAddress);
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetAddress))));
    uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetAddress)));
    uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());
    if (_amount >= tokensRemaining) {
      require(fundingToken.transferFrom(_investor, address(this), tokensRemaining));    // transfer investors tokens into contract
      require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerFunds"))), database.uintStorage(keccak256(abi.encodePacked("assetManagerFee", _assetAddress))) ));
      require(finalizeCrowdsale(_assetAddress));
      require(assetToken.mint(_investor, tokensRemaining));   // Send remaining asset tokens to investor
      require(assetToken.finishMinting());
      require(payoutERC20(_assetAddress, amountToRaise));          // 1 token = 1 wei
    }
    else {
      require(fundingToken.transferFrom(_investor, address(this), _amount));
      require(assetToken.mint(_investor, _amount));
    }
    events.transaction('Asset purchased', _investor, _assetAddress, _amount, '');
    return true;
  }


  // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
  // @param (address) _assetAddress =  The address of the asset which didn't reach it's crowdfunding goals
  function refund(address _assetAddress)
  external
  whenNotPaused
  validAsset(_assetAddress)
  afterDeadline(_assetAddress)
  notFinalized(_assetAddress)
  returns (bool) {
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetAddress))) != 0);
    database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetAddress)));
    ERC20DividendInterface assetToken = ERC20DividendInterface(_assetAddress);
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetAddress))));
    uint refundValue = assetToken.totalSupply(); //token=wei
    fundingToken.approve(_assetAddress, refundValue);
    assetToken.issueDividends(refundValue);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Internal Functions
  //------------------------------------------------------------------------------------------------------------------

  // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator/assetManager can withdraw
  // @dev The contract manager needs to know  the address PlatformDistribution contract
  function payoutERC20(address _assetAddress, uint _amount)
  private
  whenNotPaused
  returns (bool) {
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetAddress))));
    address operator = database.addressStorage(keccak256(abi.encodePacked("operator", _assetAddress)));
    address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
    require(operator != address(0) && platformWallet != address(0));
    uint operatorPortion = _amount.mul(99).div(100);
    uint platformPortion = _amount.sub(operatorPortion);
    fundingToken.transfer(platformWallet, platformPortion);
    fundingToken.transfer(operator, operatorPortion);
    events.transaction('Asset payout', _assetAddress, operator, _amount, '');
    //emit LogAssetPayout(_assetAddress, operator, _amount);
    return true;
  }

  // @notice platform owners can recover tokens here
  function recoverTokens(address _erc20Token)
  onlyOwner
  external {
    ERC20 thisToken = ERC20(_erc20Token);
    uint contractBalance = thisToken.balanceOf(address(this));
    thisToken.transfer(msg.sender, contractBalance);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('CrowdsaleERC20 destroyed', address(this), msg.sender, address(this).balance, '');
    //emit LogDestruction(address(this).balance, msg.sender);
    selfdestruct(msg.sender);
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Internal functions
  //------------------------------------------------------------------------------------------------------------------

  // @notice internal function for freeing up storage after crowdsale finishes
  // @param the ID of this asset.
  function finalizeCrowdsale(address _assetAddress)
  internal
  whenNotPaused
  returns (bool) {
      database.setBool(keccak256(abi.encodePacked("crowdsaleFinalized", _assetAddress)), true);
      database.deleteUint(keccak256(abi.encodePacked("amountToRaise", _assetAddress)));
      database.deleteUint(keccak256(abi.encodePacked("assetManagerFee", _assetAddress)));
      database.deleteUint(keccak256(abi.encodePacked("startTime", _assetAddress)));
      return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

  // @notice function won't run if owners have paused this contract
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))));
    _;
  }

  // // @notice reverts if investor hasn't approved burner to burn platform token
  // modifier burnRequired {
  //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
  //   _;
  // }

  // @notice reverts if the asset does not have a token address set in the database
  modifier validAsset(address _assetAddress) {
    require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetAddress))) != address(0), "Invalid asset");
    _;
  }

  // @notice reverts if the funding deadline has already past
  modifier betweenDeadlines(address _assetAddress) {
    require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetAddress))));
    require(now >= database.uintStorage(keccak256(abi.encodePacked("startTime", _assetAddress))));
    _;
  }

  // @notice reverts if the funding deadline has already past
  modifier afterDeadline(address _assetAddress) {
    require(now > database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetAddress))));
    _;
  }

  // @notice returns true if crowdsale is not finshed
  modifier notFinalized(address _assetAddress) {
    require( !database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetAddress))) );
    _;
  }
}
