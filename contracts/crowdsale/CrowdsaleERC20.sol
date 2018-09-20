  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../tokens/erc20/DividendTokenERC20.sol";
  import "../interfaces/ERC20.sol";

  // @title An asset crowdsale contract.
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice creates a dividend token to represent the newly created asset.
  contract CrowdsaleERC20{
    using SafeMath for uint256;

    DBInterface private database;

    // @notice This contract
    // @param: The address for the AssetCreation contract
    constructor(address _database)
    public {
        database = DBInterface(_database);
    }


    // @notice brokers can initiate a crowdfund for a new asset here
    // @dev this crowdsale contract is granted the whole supply to distribute to investors
    // TODO: restrict _fundingToken depending on operators preferences
    function createAssetOrder(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, address _fundingToken)
    external {
      address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
      require(operatorAddress != address(0));
      bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
      DividendTokenERC20 newAsset = new DividendTokenERC20(_assetURI, _fundingToken);   // Gives this full asset token supply
      database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
      database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
      database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(newAsset));
      database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
      database.setAddress(keccak256(abi.encodePacked("operator", assetID)), operatorAddress);   // TODO: Could reconstruct this using event logs
      database.setAddress(keccak256(abi.encodePacked("fundingToken", assetID)), _fundingToken);
      emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, address(newAsset));
    }


    // @notice Users can send ERC20 here to fund asset if the deadline has not already passed.
    // @param (bytes32) _assetID = The ID of the asset tokens, user wishes to purchase
    function buyAssetOrder(bytes32 _assetID, uint _amount)
    external
    notFinished(_assetID)
    returns (bool) {
      require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
      DividendTokenERC20 assetToken = DividendTokenERC20(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));
      uint tokensRemaining = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID))).sub(assetToken.totalSupply());
      if (_amount >= tokensRemaining) {
        database.setBool(keccak256(abi.encodePacked("crowdsaleFinished", _assetID)), true);
        require(fundingToken.transferFrom(msg.sender, address(this), tokensRemaining));    // transfer investors tokens into contract
        require(assetToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens to investor
        require(assetToken.finishMinting());
        require(payout(_assetID, assetToken.totalSupply()));          // 1 token = 1 wei
        emit LogAssetPurchased(_assetID, msg.sender, tokensRemaining);
      } else {
        require(fundingToken.transferFrom(msg.sender, address(this), _amount));
        require(assetToken.mint(msg.sender, _amount));
        emit LogAssetPurchased(_assetID, msg.sender, _amount);
      }
      return true;
    }


    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
    // @param (bytes32) _assetID =  The ID of the asset which didn't reach it's crowdfunding goals
    function refund(bytes32 _assetID)
    external
    whenNotPaused
    notFinished(_assetID)
    returns (bool) {
      require(now > database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
      DividendTokenERC20 assetToken = DividendTokenERC20(tokenAddress);
      ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID))));

      uint refundValue = assetToken.totalSupply(); //token=wei
      database.setBool(keccak256(abi.encodePacked("crowdsaleFinished", _assetID)), true);
      fundingToken.approve(tokenAddress, refundValue);
      assetToken.issueDividends(refundValue);
      return true;
    }


    // @notice platform owners can recover tokens here
    /*
    function recoverTokens(address _erc20Token)
    onlyOwner
    external {
      ERC20 thisToken = ERC20(_erc20Token);
      uint contractBalance = thisToken.balanceOf(address(this));
      thisToken.transfer(msg.sender, contractBalance);
    }
    */
    /*
    // @notice platform owners can destroy contract here
    function destroy()
    onlyOwner
    external {
      emit LogDestruction(address(this).balance, msg.sender);
      selfdestruct(msg.sender);
    }
    */


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
      uint operatorPortion = _amount.mul(99).div(100);
      uint platformPortion = _amount.sub(operatorPortion);
      fundingToken.transfer(operator, operatorPortion);
      fundingToken.transfer(platformWallet, platformPortion);
      emit LogAssetPayout(_assetID, operator, _amount);
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
    modifier notFinished(bytes32 _assetID) {
      require( !database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinished", _assetID))) );
      _;
    }

    //------------------------------------------------------------------------------------------------------------------
    //                                            Events
    //------------------------------------------------------------------------------------------------------------------

    event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _broker, string _tokenURI, address indexed _tokenAddress);
    event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
    event LogAssetPayout(bytes32 indexed _assetID, address indexed _operator, uint _amount);
    event LogDestruction(uint _amountSent, address indexed _caller);
  }
