pragma solidity 0.4.24;

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
    // @param (bytes32) _assetID = The ID of the asset which completed the crowdsale
    function buyAssetOrderETH(bytes32 _assetID, address _investor)
    external
    payable
    requiresEther
    validAsset(_assetID)
    betweenDeadlines(_assetID)
    notFinalized(_assetID)
    // burnRequired
    returns (bool) {
      EtherDividendInterface assetToken = EtherDividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
      uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());
      if (msg.value >= tokensRemaining) {
        // Give assetManager his portion of tokens
        require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerFunds"))), database.uintStorage(keccak256(abi.encodePacked("assetManagerFee", _assetID)))), "Asset manager tokens not minted");
        require(finalizeCrowdsale(_assetID));    // delete unnecessary variables
        require(assetToken.mint(_investor, tokensRemaining), "Investor tokens not minted");   // Send remaining asset tokens
        require(assetToken.finishMinting(), "Minting not finished");
        require(payoutETH(_assetID, amountToRaise), "Payout failed");          // 1 token = 1 wei
        _investor.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI after cost of tokens calculated and subtracted from msg.value
      }
      else {
        require(assetToken.mint(_investor, msg.value), "Investor tokens not minted");
      }
      events.transaction('Asset purchased', _investor, address(this), msg.value, _assetID);
      return true;
    }


    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline and not reached its goal
    // @param (bytes32) _assetID = The ID of the asset which completed the crowdsale
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
    //                                            Internal Functions
    //------------------------------------------------------------------------------------------------------------------

    // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator & assetManager can withdraw
    // @dev The contract manager needs to know  the address PlatformDistribution contract
    // @param (bytes32) _assetID = The ID of the asset which completed the crowdsale
    // @param (uint) _amount = The amount of WEI to be sent to the platform + the operator
    function payoutETH(bytes32 _assetID, uint _amount)
    internal
    returns (bool) {
      address operator = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
      address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
      require(operator != address(0) && platformWallet != address(0), "Operator or platform wallet not set");
      uint operatorPortion = _amount.mul(99).div(100);
      uint platformPortion = _amount.sub(operatorPortion);
      platformWallet.transfer(platformPortion);
      operator.transfer(operatorPortion);
      events.transaction('Asset payout', address(this), operator, _amount, _assetID);
      return true;
    }

    // @notice internal function for freeing up storage after crowdsale finishes
    // @param the ID of this asset.
    function finalizeCrowdsale(bytes32 _assetID)
    internal
    returns (bool) {
        database.setBool(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)), true);
        database.deleteUint(keccak256(abi.encodePacked("amountToRaise", _assetID)));     // This is now represented as totalSupply in the asset-token
        database.deleteUint(keccak256(abi.encodePacked("assetManagerFee", _assetID)));   // This is now represented as tokens in AssetManagerFunds.sol
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
      require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
      _;
    }

    // // @notice reverts if investor hasn't approved burner to burn platform token
    // modifier burnRequired {
    //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))), "Burn failed");
    //   _;
    // }

    // @notice function won't run if owners have paused this contract
    modifier whenNotPaused {
      require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))), "Contract paused");
      _;
    }

    // @notice reverts if the asset does not have a token address set in the database
    modifier validAsset(bytes32 _assetID) {
      require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))) != address(0), "Invalid asset ID");
      _;
    }

    // @notice reverts if the funding deadline has already past
    modifier betweenDeadlines(bytes32 _assetID) {
      require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))), "Past deadline");
      require(now >= database.uintStorage(keccak256(abi.encodePacked("startTime", _assetID))), "Before start time");
      _;
    }

    // @notice reverts if the funding deadline has already past
    modifier afterDeadline(bytes32 _assetID) {
      require(now > database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))), "Deadline not past");
      _;
    }

    // @notice returns true if crowdsale is not finshed
    modifier notFinalized(bytes32 _assetID) {
      require( !database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID))), "Crowdsale not finalized");
      _;
    }

  }
