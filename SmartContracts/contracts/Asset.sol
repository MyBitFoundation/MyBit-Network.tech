pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitHub.sol'; 
import './TokenStake.sol';
import './Approval.sol'; 
import './MarketPlace.sol'; 


// Created by MyBitHub, holds/distributes Ether for single Asset 
// NOTE: If money is suicided into this contract funders will share the Ether as income 
contract Asset {
using SafeMath for *;

  MyBitHub public myBitHub; 
  Approval public approval;

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
  function Asset(address _creator, bytes32 _storageHash, uint256 _amountToBeRaised, uint256 _maximumFundingTime, address _approval) 
  public {
    myBitHub = MyBitHub(msg.sender);
    amountToBeRaised = _amountToBeRaised;
    amountRaised = 0;
    fundingDeadline = _maximumFundingTime.add(now);
    storageHash = _storageHash;
    approval = Approval(_approval); 
    LogAssetCreated(_creator, _amountToBeRaised, now);
  }

  // Users can send Ether here to fund asset if funding goal hasn't been reached and the funding period isn't over. 
  // Invariants: Requires Eth be sent with transaction |  Must be in funding stage. Must be under goal | Must have KYC approved. | contract is not paused
  function fund()
  external 
  payable 
  requiresEther 
  atStage(Stages.FundingAsset) 
  whenNotPaused()
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
  // Invariants: Must be in stage FundingSuccess | MyBitFoundation + AssetEscrow  + TokenStake addresses are set | Contract is not paused
  // Note: MyBitFoundation + AssetEscrow cannot be contracts.
  function payout() 
  external  
  nonReentrant 
  atStage(Stages.FundingSuccess) 
  whenNotPaused()
  returns (bool) {
    uint256 myBitAmount = amountRaised.mul(myBitHub.myBitFoundationPercentage()).div(100); 
    uint256 stakedTokenAmount = amountRaised.mul(myBitHub.stakedTokenPercentage()).div(100); 
    uint256 installerAmount =amountRaised.mul(myBitHub.installerPercentage()).div(100);
    address myBitFoundation = approval.myBitContracts(keccak256("MyBitFoundation")); 
    address assetEscrow =  approval.myBitContracts(keccak256("AssetEscrow"));
    assert (myBitAmount.add(stakedTokenAmount).add(installerAmount) == amountRaised);       // TODO: for testing 
    TokenStake tokenStake = TokenStake(approval.myBitContracts(keccak256("TokenStake")));      // Ask MyBitHUb for token staking address 
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
  // Invariants: Requires Eth is sent with transaction | Asset must be in "live" stage
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

  // This function needs to be called to allow refunds to be made. Signals to the myBitHub contract that funding has failed + moves stage to Funding failed
  // Invariants: Must be still be in funding stage | must be passed deadline
  function initiateRefund()
  external
  atStage(Stages.FundingAsset)
  fundingPeriodOver
  returns (bool) { 
    require(myBitHub.assetFinishedFunding(storageHash, false)); 
    stage = Stages.FundingFailed; 
    return true; 
  }

  // Contributors can retrieve their funds here if campaign is finished + failure and initateRefund() has been called.
  // Invariants: sender must have shares | Must be in failed funding stage || No re-entry | Contract must not be paused
  function refund() 
  external
  nonReentrant 
  atStage(Stages.FundingFailed) 
  whenNotPaused()
  returns (bool) {
    require (shares[msg.sender] > 0);
    uint256 owed = shares[msg.sender];
    shares[msg.sender] = 0;
    amountRaised = amountRaised.sub(owed);
    msg.sender.transfer(owed);
    LogRefund(msg.sender, owed, block.timestamp); 
    return true;
  }


  // Asset funders can receive their share of the income here
  // Invariants: Asset must be live. Sender must have shares in the asset. There must be income earned.
  function withdraw()
  external 
  nonReentrant
  atStage(Stages.AssetLive)
  whenNotPaused()
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
  // Must trade over relative amount of paidToFunder, So person buying shares will also be recognized as being paid out for those shares in the past
  // Invariants: Can only be called by marketplace contract. User must have enough shares to make trade. 
  // @Param address selling shares 
  // @Param address buying shares 
  // @Param number of shares being traded 
  function tradeShares(address _from, address _to, uint256 _amount) 
  external 
  atStage(Stages.AssetLive)
  returns (bool) {
    require(msg.sender == approval.myBitContracts(keccak256("MarketPlace"))); 
    require(shares[_from] >= _amount);
    uint256 relativePaidOutAmount = (paidToFunder[_from].mul(_amount)).div(shares[_from]);
    paidToFunder[_to] = paidToFunder[_to].add(relativePaidOutAmount); 
    paidToFunder[_from] = paidToFunder[_from].sub(relativePaidOutAmount); 
    shares[_from] = shares[_from].sub(_amount);
    shares[_to] = shares[_to].add(_amount);
    return true;
  }

  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called. 
  function destroy(address _functionInitiator, address _holdingAddress) 
  anyOwner 
  public {
    require(_functionInitiator != msg.sender); 
    require(approval.authorizedFunction(keccak256(this, _functionInitiator, "destroy", _holdingAddress)));
    LogDestruction(_holdingAddress, this.balance, msg.sender); 
    selfdestruct(_holdingAddress);
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
  
  modifier whenNotPaused() { 
    require(!approval.paused(this)); 
    _; 
  }

  modifier atStage(Stages _stage) {
    require(stage == _stage);
    _;
  }

  modifier fundingLimit() {
    require(amountRaised < amountToBeRaised);
    _;
    if (amountRaised >= amountToBeRaised) {
      require(myBitHub.assetFinishedFunding(storageHash, true));
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
  
  modifier anyOwner { 
    require(msg.sender == approval.owner(0) || msg.sender == approval.owner(1) || msg.sender == approval.owner(2)); 
    _;
  }

  function () public {
    revert();
  }


  event LogDestruction(address indexed _locationSent, uint256 indexed _amountSent, address indexed _caller); 
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
