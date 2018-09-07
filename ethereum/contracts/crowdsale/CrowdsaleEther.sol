  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/Crowdsale.sol";
  import "../database/Database.sol";
  import "../tokens/ERC20/DividendToken.sol";         // Change to Mintable or Burnable if needed


  // @title An asset crowdsale contract.
  // @notice creates a dividend token to represent the newly created asset.
  contract CrowdsaleEther is Crowdsale{
    using SafeMath for uint256;

    Database public database;

    // @notice Constructor: Initiates the database
    // @param: The address for the database contract
    constructor(address _database)
    public {
        database = Database(_database);
    }

    // @notice brokers can initiate a crowdfund for a new asset here
    // @dev this crowdsale contract is granted the whole supply to distribute to investors
    function startFundingPeriod(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise)
    external
    returns (bool) {
      bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, _assetURI));
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0);
      DividendToken newAsset = new DividendToken(_assetURI, _amountToRaise);   // Gives this contract all new asset tokens
      database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
      database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(newAsset));
      database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender);
      emit LogAssetFundingStarted(assetID, msg.sender, _assetURI);
      return true;
    }

    // @notice Users can send Ether here to fund asset if the deadline has not already passed.
    function buyAsset(bytes32 _assetID)
    external
    payable
    requiresEther
    beforeDeadline(_assetID)
    returns (bool) {
      DividendToken thisToken = DividendToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint tokensRemaining = thisToken.balanceOf(address(this));
      if (msg.value >= tokensRemaining) {
        require(thisToken.transfer(msg.sender, tokensRemaining));   // Send remaining asset tokens
        require(payout(_assetID, thisToken.totalSupply()));          // 1 token = 1 wei
        msg.sender.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI
        database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));   // This should disable ability to get refund
      }
      else {
        require(thisToken.transfer(msg.sender, msg.value));
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
    returns (bool) {
      DividendToken thisToken = DividendToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      uint userBalance = thisToken.balanceOf(msg.sender);
      require(userBalance > 0);
      require(thisToken.burnFrom(msg.sender, userBalance));   // TODO: burn tokens?
      msg.sender.transfer(userBalance);
      emit LogRefund(_assetID, msg.sender, userBalance);
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
      address distributionContract = database.addressStorage(keccak256(abi.encodePacked("contract", "PlatformDistribution")));
      assert (distributionContract != address(0));
      distributionContract.transfer(_amount);
      emit LogAssetPayout(_assetID, distributionContract, _amount);
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



    //------------------------------------------------------------------------------------------------------------------
    //                                            Events
    //------------------------------------------------------------------------------------------------------------------

    event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _broker, string _tokenURI);
    event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
    event LogRefund(bytes32 indexed _assetID, address indexed _funder, uint _amount);
    event LogAssetPayout(bytes32 indexed _assetID, address indexed _distributionContract, uint _amount);
    event LogDestruction(uint _amountSent, address indexed _caller);
  }
