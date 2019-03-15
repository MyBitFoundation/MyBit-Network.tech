pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/EtherDividendInterface.sol";
// import "../access/ERC20Burner.sol";

interface Events {  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)  external; }
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function deleteUint(bytes32 _key) external;
  function setBool(bytes32 _key, bool _value) external;
  function boolStorage(bytes32 _key) external view returns (bool);
}

// @title An asset crowdsale contract, which accepts Ether for funding.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @notice Starts a new crowdsale and returns asset dividend tokens for Wei received.
// @dev The AssetManager
contract CrowdsaleETH {
    using SafeMath for uint256;

    DB public database;
    Events public events;
    // ERC20Burner public burner;

    // @notice Constructor: Initiates the database
    // @param: The address for the database contract
    constructor(address _database, address _events)
    public {
        database = DB(_database);
        events = Events(_events);
        // burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
    }


    // @notice Investors can send Ether here to fund asset, receiving an equivalent number of asset-tokens.
    // @param (bytes32) _assetAddress = The address of the asset which completed the crowdsale
    function buyAssetOrderETH(address _assetAddress, address _investor)
    external
    payable
    requiresEther
    validAsset(_assetAddress)
    betweenDeadlines(_assetAddress)
    notFinalized(_assetAddress)
    returns (bool) {
      require(msg.sender == _investor || database.boolStorage(keccak256(abi.encodePacked("approval", _investor, msg.sender, address(this), msg.sig))));
      EtherDividendInterface assetToken = EtherDividendInterface(_assetAddress);
      uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)));
      uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());
      if (msg.value < tokensRemaining) {
        //Mint tokens equal to the msg.value
        require(assetToken.mint(_investor, msg.value), "Investor minting failed");
        events.transaction('Asset purchased', _investor, _assetAddress, msg.value, '');
      } else {
        //Funding complete, finalize crowdsale
        database.setBool(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress)), true);
        //Since investor paid equal to or over the funding remaining, just mint for tokensRemaining
        require(assetToken.mint(_investor, tokensRemaining), "Investor minting failed");
        //Return leftover WEI after cost of tokens calculated and subtracted from msg.value to msg.sender *NOT _investor
        msg.sender.transfer(msg.value.sub(tokensRemaining));
        events.transaction('Asset purchased', _investor, _assetAddress, tokensRemaining, '');
      }

      return true;
    }

    // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator & assetManager can withdraw
    // @dev The contract manager needs to know  the address PlatformDistribution contract
    // @param (bytes32) _assetAddress = The address of the asset which completed the crowdsale
    function payoutETH(address _assetAddress)
    external
    finalized(_assetAddress)
    notPaid(_assetAddress)
    returns (bool) {
      //Set paid to true
      database.setBool(keccak256(abi.encodePacked("crowdsale.paid", _assetAddress)), true);
      //Setup token
      EtherDividendInterface assetToken = EtherDividendInterface(_assetAddress);
      //Mint tokens for the asset manager + finish minting
      require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerFunds"))), database.uintStorage(keccak256(abi.encodePacked("asset.managerFee", _assetAddress)))), "Manager minting failed");
      //require(assetToken.finishMinting(), "Minting not finished"); //Commented out because web3 promises are failing
      //Get the addresses for the operator and platform
      address operator = database.addressStorage(keccak256(abi.encodePacked("asset.operator", _assetAddress)));
      address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platform.wallet")));
      require(operator != address(0) && platformWallet != address(0), "Operator or platform wallet not set");
      //Calculate amounts for platform and operator
      uint amount = database.uintStorage(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)));
      uint operatorPortion = amount.mul(99).div(100);
      uint platformPortion = amount.sub(operatorPortion);
      //Transfer funds to operator and platform
      platformWallet.transfer(platformPortion);
      operator.transfer(operatorPortion);
      //Delete crowdsale start time
      database.deleteUint(keccak256(abi.encodePacked("crowdsale.start", _assetAddress)));
      //Emit event
      events.transaction('Asset payout', _assetAddress, operator, amount, '');
      return true;
    }

    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline and not reached its goal
    // @param (bytes32) _assetAddress = The address of the asset which completed the crowdsale
    function refund(address _assetAddress)
    external
    whenNotPaused
    validAsset(_assetAddress)
    afterDeadline(_assetAddress)
    notFinalized(_assetAddress)
    returns (bool) {
      require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))) != 0);
      database.deleteUint(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)));
      EtherDividendInterface assetToken = EtherDividendInterface(_assetAddress);
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
      events.transaction('CrowdsaleETH destroyed', address(this), msg.sender, address(this).balance, '');
      selfdestruct(msg.sender);
    }

    // @notice fallback function: reject ether
    function ()
    public
    payable {
      revert();
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
      require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
      _;
    }

    // @notice function won't run if owners have paused this contract
    modifier whenNotPaused {
      require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))), "Contract paused");
      _;
    }

    // @notice reverts if the asset does not have a token address set in the database
    modifier validAsset(address _assetAddress) {
      require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))) != address(0), "Invalid asset");
      _;
    }

    // @notice reverts if the funding deadline has already past
    modifier betweenDeadlines(address _assetAddress) {
      require(now <= database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))), "Past deadline");
      require(now >= database.uintStorage(keccak256(abi.encodePacked("crowdsale.start", _assetAddress))), "Before start time");
      _;
    }

    // @notice reverts if the funding deadline has already past
    modifier afterDeadline(address _assetAddress) {
      require(now > database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))), "Before deadline");
      _;
    }

    // @notice returns true if crowdsale is finshed
    modifier finalized(address _assetAddress) {
      require( database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress))), "Crowdsale not finalized");
      _;
    }

    // @notice returns true if crowdsale is not finshed
    modifier notFinalized(address _assetAddress) {
      require( !database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress))), "Crowdsale finalized");
      _;
    }

    // @notice returns true if crowdsale has not paid out
    modifier notPaid(address _assetAddress) {
      require( !database.boolStorage(keccak256(abi.encodePacked("crowdsale.paid", _assetAddress))), "Crowdsale had paid out");
      _;
    }

  }
