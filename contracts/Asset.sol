pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitHub.sol'; 
import './TokenStake.sol';
import './Approval.sol'; 
import './MarketPlace.sol'; 


// Created by MyBitHub, holds/distributes Ether for single Asset 
// TODO: make storageHash malleable?? 
// NOTE: If money is suicided into this contract funders will share the Ether as income 
contract Asset {
using SafeMath for *;

  MyBitHub public myBitHub; 
  Approval public approval;
  address public marketPlace; 

  // ------------Project Information--------------
  bytes32 public storageHash;    // Where descriptive information + images are stored for this asset. Also acts as an ID in MyBitHub (IPFS, Swarm, BigChainDB)
  uint256 public fundingDeadline;        // When the funding period is over 
  uint256 public amountToBeRaised;  // Amount required for funding to be success 

// -----------Funder Information--------------
  uint256 public amountRaised;          // Total amount funded for project 
  mapping (address => uint256) public shares;     // Portion of the total funded amount held by this individual
  mapping (address => uint256) public paidToFunder;    // Amount investor has withdrawn

  // -------Investment Returns--------------
  uint256 public totalPaidToFunders;          // Total amount of Ether redeemed 

 // --------Stages & Timing------------
  Stages public stage;
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack


  enum Stages {
    FundingAsset,
    FundingSuccess,
    FundingFailed,
    AssetLive
  }

  // The constructor is called when someone initiates a new funding period for an asset
  // @Param: Creator of this asset contract
  // @Param: The location of this assets information found on IPFS. Also serves as an ID within MyBitHub contract 
  // @Param: The ID of the installer chosen for this asset 
  // @Param: The amount of Wei to be raised in order to install asset
  // @Param: The amount of time allowed for asset to try and reach it's funding goal 
  // @Param: The type of asset being funded (ie. Solar, Mining, ATM)
  function Asset(address _creator, bytes32 _storageHash, bytes32 _installerID, uint256 _amountToBeRaised, uint256 _maximumFundingTime, bytes32 _assetType, address _approval) 
  public {
    myBitHub = MyBitHub(msg.sender);
    amountToBeRaised = _amountToBeRaised;
    amountRaised = 0;
    fundingDeadline = _maximumFundingTime.add(now);
    storageHash = _storageHash;
    approval = Approval(_approval); 
    LogAssetInfo(_assetType, _installerID, _storageHash); 
    LogAssetCreated(_creator, _amountToBeRaised, now);
  }

  // Users can send Ether here to fund asset if funding goal hasn't been reached and the funding period isn't over. 
  function fund()
  external 
  payable 
  requiresEther 
  atStage(Stages.FundingAsset) 
  whenNotPaused(1)
  fundingLimit
  onlyApproved(1)
  returns (bool) {
    if (shares[msg.sender] == 0) {
      LogNewFunder(msg.sender, block.timestamp);    // Create event to reference list of funders
    }
    amountRaised = amountRaised.add(msg.value);
    shares[msg.sender] = shares[msg.sender].add(msg.value);
    LogAssetFunded(msg.sender, msg.value, block.timestamp);
    return true;
  }

  // This is called once funding has succeeded. Sends Ether to installer, foundation and Token Holders
  function payout() 
  external  
  nonReentrant 
  atStage(Stages.FundingSuccess) 
  whenNotPaused(2)
  returns (bool) {
    uint256 myBitAmount = amountRaised.mul(myBitHub.myBitFoundationPercentage()).div(100); 
    uint256 stakedTokenAmount = amountRaised.mul(myBitHub.stakedTokenPercentage()).div(100); 
    uint256 installerAmount =amountRaised.mul(myBitHub.installerPercentage()).div(100);
    address myBitFoundation = myBitHub.myBitFoundation(); 
    address assetEscrow = myBitHub.assetEscrow();
    assert (myBitAmount.add(stakedTokenAmount).add(installerAmount) == amountRaised);       // TODO: for testing 
    TokenStake tokenStake = TokenStake(myBitHub.tokenStake());      // Ask MyBitHUb for token staking address 
    marketPlace = myBitHub.marketPlace();           // initialize marketPlace
    tokenStake.receiveTransactionFee.value(stakedTokenAmount); 
    myBitFoundation.transfer(myBitAmount);
    assetEscrow.transfer(this.balance);  
    stage = Stages.AssetLive; 
    LogAssetPayoutMyBitFoundation(myBitFoundation, myBitAmount, block.timestamp);
    LogAssetPayoutLockedTokenHolders(address(tokenStake), stakedTokenAmount, block.timestamp); 
    LogAssetPayoutInstaller(assetEscrow, installerAmount, block.timestamp); 
    return true;
  }

  // Revenue produced by the asset will be sent here
  // @Param: A note that can be left by the payee
  function receiveIncome(string _note) 
  external 
  payable 
  requiresEther 
  atStage(Stages.AssetLive)
  returns (bool)  {
    LogIncomeReceived(msg.sender, msg.value, block.timestamp);
    LogAssetNote(_note, block.timestamp); 
    return true; 
  }

  // This function needs to be called to allow refunds to be made. Signals to the myBitHub contract that funding has failed
  function initiateRefund()
  external
  atStage(Stages.FundingAsset)
  fundingPeriodOver
  returns (bool) { 
    require(myBitHub.assetFailedFunding(amountRaised)); 
    stage = Stages.FundingFailed; 
    return true; 
  }

  // Contributors can retrieve their funds here if campaign is over + failure.
  function refund() 
  external
  nonReentrant 
  atStage(Stages.FundingFailed) 
  whenNotPaused(2)
  returns (bool) {
    uint256 owed = shares[msg.sender];
    shares[msg.sender] = 0;
    amountRaised = amountRaised.sub(owed);
    msg.sender.transfer(owed);
    LogRefund(msg.sender, owed, block.timestamp); 
    return true;
  }


  // Asset funders can receive their share of the income here
  // TODO: Can do these calculations in a library
  function withdraw()
  external 
  nonReentrant
  atStage(Stages.AssetLive)
  whenNotPaused(2)
  returns (bool){
    require(shares[msg.sender] > 0);
    uint256 totalReceived = this.balance.add(totalPaidToFunders);   
    uint256 payment = (totalReceived.mul(shares[msg.sender]).div(amountRaised)).sub(paidToFunder[msg.sender]);
    assert (payment != 0); 
    paidToFunder[msg.sender] = paidToFunder[msg.sender].add(payment);
    totalPaidToFunders = totalPaidToFunders.add(payment);
    msg.sender.transfer(payment);
    LogInvestmentReceived(msg.sender, payment, block.timestamp); 
    return true;
}

  
  // Trades shares of an asset to other user. Must trade relative amount paid to Funder to balance withdrawl amount. 
  // ie. must trade over the same relative amount paid out. So person buying shares will also be recognized as being paid out for those shares in the past
  // Invariants: Marketplace is set once payout has occured (funding success). Can only be called by marketplace contract. User must have enough shares to make trade. 
  // @Param address selling shares 
  // @Param address buying shares 
  // @Param number of shares being traded 
  function tradeShares(address _from, address _to, uint256 _amount) 
  external 
  returns (bool) {
    require(marketPlace != address(0));
    require(msg.sender == marketPlace); 
    require(shares[_from] >= _amount);
    uint256 relativePaidOutAmount = (paidToFunder[_from].mul(_amount)).div(shares[_from]);
    paidToFunder[_to] = paidToFunder[_to].add(relativePaidOutAmount); 
    paidToFunder[_from] = paidToFunder[_from].sub(relativePaidOutAmount); 
    shares[_from] = shares[_from].sub(_amount);
    shares[_to] = shares[_to].add(_amount);
    return true;
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  modifier onlyApproved(uint8 _accessLevel) { 
    require(approval.userAccess(msg.sender) >= _accessLevel);
    _; 
  }
  
  modifier whenNotPaused(uint8 _level) { 
    require(!approval.paused(this, _level)); 
    _; 
  }

  modifier atStage(Stages _stage) {
    require(stage == _stage);
    _;
  }

  modifier fundingLimit() {
    require(amountRaised <= amountToBeRaised);
    _;
    if (amountRaised >= amountToBeRaised) {
      require(myBitHub.assetSuccessfullyFunded(storageHash));
      stage = Stages.FundingSuccess;
      }
  }

  modifier withinFundingTime() {
    require(now <= fundingDeadline);
    _;
  }

  modifier fundingPeriodOver() {
    require(now >= fundingDeadline);
    _;
  }

  modifier requiresEther() { 
    require(msg.value > 0);
    _;
  }


  function () public {
    revert();
  }

  event LogNewFunder(address indexed _funder, uint256 indexed _timestamp); 
  event LogAssetFunded(address indexed _funder, uint256 indexed _amount, uint256 indexed _timestamp); 
  event LogRefund(address indexed _funder, uint256 indexed _amount, uint256 indexed _timestamp); 
  event LogAssetPayoutMyBitFoundation(address indexed _myBitFoundation, uint256 indexed _myBitAmount, uint256 indexed _timestamp);
  event LogAssetPayoutLockedTokenHolders(address indexed _lockedTokenContract, uint256 indexed _lockedTokenAmount, uint256 indexed _timestamp); 
  event LogAssetPayoutInstaller(address indexed _assetInstaller, uint256 indexed installerAmount, uint256 indexed _timestamp); 
  event LogAssetCreated(address indexed _creator, uint256 _amountToBeRaised, uint256 indexed _timestamp);
  event LogAssetInfo(bytes32 _assetType, bytes32 _installerID, bytes32 _storageHash); 
  event LogIncomeReceived(address indexed _sender, uint256 indexed _amount, uint256 indexed _timestamp); 
  event LogInvestmentReceived(address indexed _funder, uint256 indexed _amount, uint256 indexed _timestamp);
  event LogAssetNote(string _note, uint256 _timestamp);
}
