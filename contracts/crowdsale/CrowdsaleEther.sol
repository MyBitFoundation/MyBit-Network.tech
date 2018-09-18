  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../tokens/ERC20/DividendToken.sol";         // Change to Mintable or Burnable if needed


  // @title An asset crowdsale contract.
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice creates a dividend token to represent the newly created asset.
  contract CrowdsaleEther{
    using SafeMath for uint256;

    DBInterface public database;

    // @notice Constructor: Initiates the database
    // @param: The address for the database contract
    constructor(address _database)
    public {
        database = DBInterface(_database);
    }

    // @notice brokers can initiate a crowdfund for a new asset here
    // @dev this crowdsale contract is granted the whole supply to distribute to investors
    // @dev can lookup the amount of escrow in the database with sha3("brokerEscrow", assetID)
    function startFundingPeriod(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise, uint _brokerFee)
    external {
      address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
      require(operatorAddress != address(0));
      bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _operatorID, _assetURI));
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
      DividendToken newAsset = new DividendToken(_assetURI);   // Gives this contract all new asset tokens
      database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
      database.setUint(keccak256(abi.encodePacked("amountToRaise", assetID)), _amountToRaise);
      database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(newAsset));
      database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
      database.setUint(keccak256(abi.encodePacked("brokerFee", assetID)), _brokerFee);     // Percentage of income that goes to broker
      database.setAddress(keccak256(abi.encodePacked("operator", assetID)), operatorAddress);   
      emit LogAssetFundingStarted(assetID, msg.sender, _assetURI, address(newAsset));
    }

    // @notice Users can send Ether here to fund asset if the deadline has not already passed.
    function buyAsset(bytes32 _assetID)
    external
    payable
    requiresEther
    beforeDeadline(_assetID)
    notFinished(_assetID)
    returns (bool) {
      DividendToken thisToken = DividendToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint tokensRemaining = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID))).sub(thisToken.totalSupply());
      if (msg.value >= tokensRemaining) {
        database.setBool(keccak256(abi.encodePacked("crowdsaleFinished", _assetID)), true);
        require(thisToken.mint(msg.sender, tokensRemaining));   // Send remaining asset tokens
        uint brokerFee = thisToken.totalSupply().mul(database.uintStorage(keccak256(abi.encodePacked("brokerFee", _assetID)))).div(100); 
        require(thisToken.mint(database.addressStorage(keccak256(abi.encodePacked("broker", _assetID)))), brokerFee); 
        require(thisToken.finishMinting());
        require(payout(_assetID, thisToken.totalSupply()));          // 1 token = 1 wei
        msg.sender.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI
      }
      else {
        require(thisToken.mint(msg.sender, msg.value));
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
    notFinished(_assetID)
    returns (bool) {
      //DividendToken assetToken = DividendToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      //uint investorBalance = assetToken.balanceOf(msg.sender);
      //require(investorBalance > 0);
      //require(assetToken.transferFrom(msg.sender, address(0), investorBalance));
      //msg.sender.transfer(investorBalance);
      //emit LogRefund(_assetID, msg.sender, investorBalance);

      DividendToken assetToken = DividendToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      //uint tokensRemaining = assetToken.balanceOf(address(this));
      uint refundValue = assetToken.totalSupply(); //token=wei
      database.setBool(keccak256(abi.encodePacked("crowdsaleFinished", _assetID)), true);
      assetToken.issueDividends.value(refundValue)();
      return true;
    }

    // @notice platform owners can destroy contract here
    function destroy()
    onlyOwner
    public {
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
    whenNotPaused
    returns (bool) {
      address operator = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
      address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
      assert (operator != address(0) && platformWallet != address(0));
      uint operatorPortion = _amount.mul(99).div(100);          // Give operator 99%
      uint platformPortion = _amount.sub(operatorPortion);      // Give platform 1%
      operator.transfer(operatorPortion);
      platformWallet.transfer(platformPortion);
      emit LogAssetPayout(_assetID, operator, _amount);
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
    modifier notFinished(bytes32 _assetID) {
      require( !database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinished", _assetID))) );
      _;
    }


    //------------------------------------------------------------------------------------------------------------------
    //                                            Events
    //------------------------------------------------------------------------------------------------------------------

    event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _broker, string _tokenURI, address indexed _tokenAddress);
    event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
    event LogRefund(bytes32 indexed _assetID, address indexed _funder, uint _amount);
    event LogAssetPayout(bytes32 indexed _assetID, address indexed _distributionContract, uint _amount);
    event LogDestruction(uint _amountSent, address indexed _caller);
  }
