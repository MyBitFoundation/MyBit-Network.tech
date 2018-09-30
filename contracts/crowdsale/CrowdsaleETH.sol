pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/DBInterface.sol";
import "../interfaces/EtherDividendInterface.sol";
import "../ecosystem/ERC20Burner.sol";

// @title An asset crowdsale contract.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @notice handles the funding and refunding of a newly created asset crowdsale.
// @dev this contract only accepts Ether
contract CrowdsaleETH {
    using SafeMath for uint256;

    DBInterface public database;
    ERC20Burner private burner;

    // @notice Constructor: Initiates the database
    // @param: The address for the database contract
    constructor(address _database)
    public {
        database = DBInterface(_database);
        burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
    }


    // @notice Users can send Ether here to fund asset if the deadline has not already passed.
    function buyAssetOrder(bytes32 _assetID)
    external
    payable
    requiresEther
    validAsset(_assetID)
    beforeDeadline(_assetID)
    notFinalized(_assetID)
    burnRequired
    returns (bool) {
      EtherDividendInterface assetToken = EtherDividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint investorSupply = database.uintStorage(keccak256(abi.encodePacked("investorSupply", _assetID)));
      uint tokensRemaining = investorSupply.sub(assetToken.totalSupply()); //Amount of tokens for investors minus the broker's portion
      if (msg.value >= tokensRemaining) {
        uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
        require(finalizeCrowdsale(_assetID));
        require(assetToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens
        // Give broker his portion of tokens 
        require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))), amountToRaise.sub(investorSupply)));
        require(assetToken.finishMinting());
        //database.setBool(keccak256(abi.encodePacked("assetTradeable", _assetID)), true);  //         // Validate token on the DAX.
        require(payout(_assetID, assetToken.totalSupply()));          // 1 token = 1 wei
        msg.sender.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI
      }
      else {
        require(assetToken.mint(msg.sender, msg.value));
      }
      emit LogAssetPurchased(_assetID, msg.sender, msg.value);
      return true;
    }


    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
    // TODO: call this on receiveApproval() so we can do it in a single transaction?
    function refund(bytes32 _assetID)
    external
    whenNotPaused
    validAsset(_assetID)
    afterDeadline(_assetID)
    notFinalized(_assetID)
    returns (bool) {
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) != 0);
      database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
      database.deleteUint(keccak256(abi.encodePacked("investorSupply", _assetID)));
      EtherDividendInterface assetToken = EtherDividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint refundValue = assetToken.totalSupply(); //token=wei
      assetToken.issueDividends.value(refundValue)();
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
      emit LogDestruction(address(this).balance, msg.sender);
      selfdestruct(msg.sender);
    }

    // @notice fallback function: reject ether
    function ()
    public
    payable {
      revert();
    }

    //------------------------------------------------------------------------------------------------------------------
    //                                            Internal Functions
    //------------------------------------------------------------------------------------------------------------------

    // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator/broker can withdraw
    // @dev The contract manager needs to know  the address PlatformDistribution contract
    function payout(bytes32 _assetID, uint _amount)
    internal
    returns (bool) {
      address operator = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
      address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
      require(operator != address(0) && platformWallet != address(0));
      uint operatorPortion = _amount.mul(99).div(100);
      uint platformPortion = _amount.sub(operatorPortion);
      platformWallet.transfer(platformPortion);
      operator.transfer(operatorPortion);
      emit LogAssetPayout(_assetID, operator, _amount);
      return true;
    }

    // @notice internal function for freeing up storage after crowdsale finishes
    // @param the ID of this asset.
    function finalizeCrowdsale(bytes32 _assetID)
    internal
    whenNotPaused
    returns (bool) {
        database.setBool(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)), true);
        database.deleteUint(keccak256(abi.encodePacked("amountToRaise", _assetID)));
        database.deleteUint(keccak256(abi.encodePacked("investorSupply", _assetID))); 
        return true;
    }


    //------------------------------------------------------------------------------------------------------------------
    //                                            Modifiers
    //------------------------------------------------------------------------------------------------------------------


    // @notice Requires that Ether is sent with the transaction
    modifier requiresEther() {
      require(msg.value > 0);
      _;
    }

    // @notice Sender must be a registered owner
    modifier onlyOwner {
      require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
      _;
    }

    // @notice reverts if user hasn't approved burner to burn platform token
    modifier burnRequired { 
      require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
      _; 
    }
    
    // @notice function won't run if owners have paused this contract
    modifier whenNotPaused {
      require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))));
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

    event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
    event LogRefund(bytes32 indexed _assetID, address indexed _funder, uint _amount);
    event LogAssetPayout(bytes32 indexed _assetID, address indexed _distributionContract, uint _amount);
    event LogDestruction(uint _amountSent, address indexed _caller);
  }
