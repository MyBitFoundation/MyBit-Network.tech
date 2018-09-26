  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/ERC20.sol";
  import "../interfaces/DBInterface.sol";
  import "../interfaces/EtherDividendInterface.sol";


  // @title An asset crowdsale contract.
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice handles the funding and refunding of a newly created asset crowdsale.
  // @dev this contract only accepts Ether
  contract CrowdsaleETH {
    using SafeMath for uint256;

    DBInterface public database;

    // @notice Constructor: Initiates the database
    // @param: The address for the database contract
    constructor(address _database)
    public {
        database = DBInterface(_database);
    }


    // @notice Users can send Ether here to fund asset if the deadline has not already passed.
    function buyAssetOrder(bytes32 _assetID)
    external
    payable
    requiresEther
    beforeDeadline(_assetID)
    notFinalized(_assetID)
    returns (bool) {
      EtherDividendInterface assetToken = EtherDividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint brokerPercent = database.uintStorage(keccak256(abi.encodePacked("brokerFee", _assetID)));
      uint investorPercent = uint(100).sub(brokerPercent);
      uint investorAmount = msg.value.mul(investorPercent).div(100);
      uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
      uint tokensRemaining = amountToRaise.mul(investorPercent).div(100).sub(assetToken.totalSupply()); //Amount to raise minus the broker's percent
      if (investorAmount >= tokensRemaining) {
        require(finalizeCrowdsale(_assetID));
        require(assetToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens
        uint brokerTokens = amountToRaise.mul(brokerPercent).div(100);
        address broker = database.addressStorage(keccak256(abi.encodePacked("broker", _assetID)));
        require(assetToken.mint(broker, brokerTokens));
        require(assetToken.finishMinting());
        //database.setBool(keccak256(abi.encodePacked("assetTradeable", _assetID)), true);  //         // Validate token on the DAX.
        require(payout(_assetID, assetToken.totalSupply()));          // 1 token = 1 wei
        msg.sender.transfer(msg.value.sub(tokensRemaining.mul(100).div(investorPercent)));     // Return leftover WEI
      }
      else {
        require(assetToken.mint(msg.sender, investorAmount));
      }
      emit LogAssetPurchased(_assetID, msg.sender, msg.value);
      return true;
    }


    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
    // TODO: call this on receiveApproval() so we can do it in a single transaction?
    function refund(bytes32 _assetID)
    external
    whenNotPaused
    afterDeadline(_assetID)
    notFinalized(_assetID)
    returns (bool) {
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) != 0);
      database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
      EtherDividendInterface assetToken = EtherDividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      // @dev We don't want to mark a refund 'finalized' because then the broker
      //      would never be able to pull out their escrowed funds
      //require(finalizeCrowdsale(_assetID));
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
        // @dev Cannot delete funding deadline because it's necessary for the logic
        //      of broker escrow refunds and investor refunds
        //      If it's 0, its impossible to tell whether its a finalized sale
        //      or an asset that was never created
        //      Also, we use it for creating a crowdsale. Don't want to overwrite active assets
        //database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
        database.deleteUint(keccak256(abi.encodePacked("amountToRaise", _assetID)));
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

    // @notice function won't run if owners have paused this contract
    modifier whenNotPaused {
      require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))));
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
