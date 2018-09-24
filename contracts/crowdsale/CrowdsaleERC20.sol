  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/ERC20.sol";
  import "../interfaces/DBInterface.sol";
  import "../interfaces/ERC20DividendInterface.sol";


  // @title An asset crowdsale contract.
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice creates a dividend token to represent the newly created asset.
  contract CrowdsaleERC20{
    using SafeMath for uint256;

    DBInterface private database;

    // @notice This contract
    // @param: The address for the platform database
    constructor(address _database)
    public{
        database = DBInterface(_database);
    }


    // @notice Users can send ERC20 here to fund asset if the deadline has not already passed.
    // @param (bytes32) _assetID = The ID of the asset tokens, user wishes to purchase
    // @param (uint) _amount = The amount to spend purchasing this asset
    function buyAssetOrder(bytes32 _assetID, uint _amount)
    external
    notFinalized(_assetID)
    returns (bool) {
      // @dev This require statement stops people from spending when the crowdsale is past its deadline
      //      and it did not succeed, cause it wouldn't get 'finalized' in that situation
      require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
      ERC20DividendInterface assetToken = ERC20DividendInterface(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));
      uint brokerPercent = database.uintStorage(keccak256(abi.encodePacked("brokerFee", _assetID)));
      uint investorPercent = uint(100).sub(brokerPercent);
      uint investorAmount = _amount.mul(investorPercent).div(100);
      uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
      uint tokensRemaining = amountToRaise.mul(investorPercent).div(100).sub(assetToken.totalSupply()); //Amount to raise minus the broker's percent
      emit LogAssetInfo(investorAmount, tokensRemaining);
      if (investorAmount >= tokensRemaining) {
        require(finalizeCrowdsale(_assetID));
        require(fundingToken.transferFrom(msg.sender, address(this), tokensRemaining.mul(100).div(investorPercent)));    // transfer investors tokens into contract
        require(assetToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens to investor
        uint brokerTokens = amountToRaise.mul(brokerPercent).div(100);
        address broker = database.addressStorage(keccak256(abi.encodePacked("broker", _assetID)));
        require(assetToken.mint(broker, brokerTokens));
        require(assetToken.finishMinting());
        //database.setBool(keccak256(abi.encodePacked("assetTradeable", _assetID)), true);  //         // Validate token on the DAX.
        require(payout(_assetID, assetToken.totalSupply()));          // 1 token = 1 wei
      }
      else {
        require(fundingToken.transferFrom(msg.sender, address(this), _amount));
        require(assetToken.mint(msg.sender, investorAmount));
      }
      emit LogAssetPurchased(_assetID, msg.sender, _amount); //Should amount listed be how much they spent or how much they received?
      return true;
    }


    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
    // @param (bytes32) _assetID =  The ID of the asset which didn't reach it's crowdfunding goals
    function refund(bytes32 _assetID)
    external
    whenNotPaused
    notFinalized(_assetID)
    returns (bool) {
      require(now > database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) != 0);
      database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
      ERC20DividendInterface assetToken = ERC20DividendInterface(tokenAddress);
      ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));
      uint refundValue = assetToken.totalSupply(); //token=wei
      // @dev We don't want to mark a refund 'finalized' because then the broker
      //      would never be able to pull out their escrowed funds
      //require(finalizeCrowdsale(_assetID));
      fundingToken.approve(tokenAddress, refundValue);
      assetToken.issueDividends(refundValue);
      return true;
    }

    //------------------------------------------------------------------------------------------------------------------
    //                                            Internal Functions
    //------------------------------------------------------------------------------------------------------------------

    // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator/broker can withdraw
    // @dev The contract manager needs to know  the address PlatformDistribution contract
    function payout(bytes32 _assetID, uint _amount)
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
      emit LogAssetPayout(_assetID, operator, _amount);
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


    //------------------------------------------------------------------------------------------------------------------
    //                                            Modifiers
    //------------------------------------------------------------------------------------------------------------------

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

    // @notice returns true if crowdsale is not finshed
    modifier notFinalized(bytes32 _assetID) {
      require( !database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID))) );
      _;
    }

    //------------------------------------------------------------------------------------------------------------------
    //                                            Events
    //------------------------------------------------------------------------------------------------------------------

    event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
    event LogAssetPayout(bytes32 indexed _assetID, address indexed _operator, uint _amount);
    event LogDestruction(uint _amountSent, address indexed _caller);
    event LogAssetInfo(uint _investorAmount, uint _tokensRemaining);
  }
