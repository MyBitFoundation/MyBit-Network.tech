pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/DBInterface.sol";
import "../interfaces/ERC20DividendInterface.sol";
import "../access/ERC20Burner.sol";
import "../database/Events.sol";

// @title An asset crowdsale contract which accepts funding from ERC20 tokens.
// @notice Begins a crowdfunding period for a digital asset, minting asset dividend tokens to investors when particular ERC20 token is received
// @author Kyle Dewhurst, MyBit Foundation
// @notice creates a dividend token to represent the newly created asset.
contract CrowdsaleERC20{
  using SafeMath for uint256;

  DBInterface public database;
  Events public events;
  ERC20Burner public burner;

  // @notice Constructor: initializes database instance
  // @param: The address for the platform database
  constructor(address _database, address _events)
  public{
      database = DBInterface(_database);
      events = Events(_events);
      burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }


  // @notice Investors can send ERC20 tokens here to fund an asset, receiving an equivalent number of asset-tokens.
  // @dev investor must approve this contract to transfer tokens
  // @param (bytes32) _assetID = The ID of the asset tokens, investor wishes to purchase
  // @param (uint) _amount = The amount to spend purchasing this asset
  function buyAssetOrderERC20(bytes32 _assetID, uint _amount)
  external
  validAsset(_assetID)
  beforeDeadline(_assetID)
  notFinalized(_assetID)
  burnRequired
  returns (bool) {
    ERC20DividendInterface assetToken = ERC20DividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));
    uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
    uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());
    if (_amount >= tokensRemaining) {
      require(fundingToken.transferFrom(msg.sender, address(this), tokensRemaining));    // transfer investors tokens into contract
      require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID))), database.uintStorage(keccak256(abi.encodePacked("assetManagerFee", _assetID))) ));
      require(finalizeCrowdsale(_assetID));
      require(assetToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens to investor
      require(assetToken.finishMinting());
      require(payoutERC20(_assetID, amountToRaise));          // 1 token = 1 wei
    }
    else {
      require(fundingToken.transferFrom(msg.sender, address(this), _amount));
      require(assetToken.mint(msg.sender, _amount));
    }
    events.transaction('Asset purchased', msg.sender, address(this), _amount, _assetID);
    //emit LogAssetPurchased(_assetID, msg.sender, _amount); //Should amount listed be how much they spent or how much they received?
    return true;
  }


  // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
  // @param (bytes32) _assetID =  The ID of the asset which didn't reach it's crowdfunding goals
  function refund(bytes32 _assetID)
  external
  whenNotPaused
  validAsset(_assetID)
  afterDeadline(_assetID)
  notFinalized(_assetID)
  returns (bool) {
    require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) != 0);
    database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
    ERC20DividendInterface assetToken = ERC20DividendInterface(tokenAddress);
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));
    uint refundValue = assetToken.totalSupply(); //token=wei
    fundingToken.approve(tokenAddress, refundValue);
    assetToken.issueDividends(refundValue);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Internal Functions
  //------------------------------------------------------------------------------------------------------------------

  // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator/assetManager can withdraw
  // @dev The contract manager needs to know  the address PlatformDistribution contract
  function payoutERC20(bytes32 _assetID, uint _amount)
  private
  whenNotPaused
  returns (bool) {
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));
    address operator = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
    address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
    require(operator != address(0) && platformWallet != address(0));
    uint operatorPortion = _amount.mul(99).div(100);
    uint platformPortion = _amount.sub(operatorPortion);
    fundingToken.transfer(platformWallet, platformPortion);
    fundingToken.transfer(operator, operatorPortion);
    events.transaction('Asset payout', address(this), operator, _amount, _assetID);
    //emit LogAssetPayout(_assetID, operator, _amount);
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
  function finalizeCrowdsale(bytes32 _assetID)
  internal
  whenNotPaused
  returns (bool) {
      database.setBool(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)), true);
      database.deleteUint(keccak256(abi.encodePacked("amountToRaise", _assetID)));
      database.deleteUint(keccak256(abi.encodePacked("assetManagerFee", _assetID)));
      return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice function won't run if owners have paused this contract
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))));
    _;
  }

  // @notice reverts if investor hasn't approved burner to burn platform token
  modifier burnRequired {
    require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
    _;
  }

      // @notice reverts if the asset does not have a token address set in the database
  modifier validAsset(bytes32 _assetID) {
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))) != address(0));
    _;
  }

  // @notice reverts if the funding deadline has already past
  modifier beforeDeadline(bytes32 _assetID) {
    require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
    _;
  }

  // @notice reverts if the funding deadline has already past
  modifier afterDeadline(bytes32 _assetID) {
    require(now > database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
    _;
  }

  // @notice returns true if crowdsale is not finshed
  modifier notFinalized(bytes32 _assetID) {
    require( !database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID))) );
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Events
  //------------------------------------------------------------------------------------------------------------------
  /*
  event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
  event LogAssetPayout(bytes32 indexed _assetID, address indexed _operator, uint _amount);
  event LogDestruction(uint _amountSent, address indexed _caller);
  */
}
