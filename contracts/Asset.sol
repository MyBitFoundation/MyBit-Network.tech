pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitHub.sol'; 

// TODO: what happens when someone suicides Ether into a funding period?
// TODO: WHen calculating percentages, sometimes Solidity rounds down which may leave some Ether in the contract
// TODO: When period fails, MyBitHub should move Asset storage to new position, marking failure

// Created by MyBitHub, holds/distributes Ether for single asset
contract Asset {
using SafeMath for *;

  MyBitHub public myBitHub; 

  // ------------Project Information--------------
  address public projectCreator;    // Address that initiated the project 
  bytes32 public storageHash;   // Where the title and description + images are stored. (IPFS, Swarm, BigChainDB)
  uint256 public fundingDeadline;        // When the funding period is over 
  uint256 public id;             // Location in MyBitHub assets[type] mapping => list storage

  uint256 public amountToBeRaised;  // Amount required for funding to be success 

// -----------Beneficiary Addresses----------------------
  address public myBitFoundation = 0x0089cc346a75b584aae57459d8de170a3af10dff;      // ropsten testnet address
  address public assetInstaller;


// -----------Funder Information--------------
  uint256 public amountRaised;          // Total amount funded for project 
  mapping (address => uint256) public shares;     // Portion of the total funded amount held by this individual
  address[] public contributors;    // AssetFunders
  mapping (address => uint256) public paidToFunder;    // Amount investor has withdrawn

  // -------Investment Returns--------------
  uint256 public totalIncomeEarned;   // Total amount received from Asset
  uint256 public totalPaidToFunders;          // Total amount of Ether redeemed 

 // --------Stages & Timing------------
  Stages public stage;
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack


  enum Stages {
    FundingAsset,
    FundingSuccess,
    ReceivingROI
  }

  // @Param: Creator of this asset contract
  // @Param: The location of this assets information found on IPFS
  // @Param: The Ether address of the asset installer. TODO: figure out this process 
  function Asset(address _creator, bytes32 _storageHash, address _assetInstaller, uint256 _amountToBeRaised, uint256 _minimumFundingTime, uint256 _id) 
  public {
    myBitHub = MyBitHub(msg.sender);
    projectCreator = _creator;
    assetInstaller = _assetInstaller;
    amountToBeRaised = _amountToBeRaised;
    amountRaised = 0;
    fundingDeadline = _minimumFundingTime.add(now);
    storageHash = _storageHash;
    id = _id;
    assetCreated(projectCreator, _storageHash, amountToBeRaised, fundingDeadline, now);
  }

  // @Dev: Users can send Ether here to fund asset
  // Requires that the funding goal hasn't been reached and that the funding period isn't over. Will move stage to FundingSuccess once goal is reached
  function fund()
  payable 
  nonReentrant
  requiresEther 
  atStage(Stages.FundingAsset) 
  fundingLimit 
  whenNotPaused
  external 
  returns (bool) {
    if (shares[msg.sender] == 0) {
      contributors.push(msg.sender);
    }
    amountRaised = amountRaised.add(msg.value);
    shares[msg.sender] = shares[msg.sender].add(msg.value);
    return true;
  }

  // This is called once funding has succeeded. Sends Ether to installer, foundation and token holders
  // TODO: add event
  function payout() 
  atStage(Stages.FundingSuccess) 
  nonReentrant 
  whenNotPaused
  external  
  returns (bool) {
    uint256 myBitAmount = amountRaised.getFractionalAmount(myBitHub.myBitFoundationPercentage());
    uint256 lockedTokenAmount = amountRaised.getFractionalAmount(myBitHub.lockedTokensPercentage());
    uint256 installerAmount = amountRaised.getFractionalAmount(myBitHub.installerPercentage());
    // TODO: send to locked contract
    myBitFoundation.transfer(myBitAmount);
    assetInstaller.transfer(this.balance);   // Note: Asset installer will likely receive small amount more, due rounding
    stage = Stages.ReceivingROI; 
    return true;
  }

  // Revenue produced by the asset will be sent here
  function receiveIncome(string _note) 
  payable 
  requiresEther 
  atStage(Stages.ReceivingROI)
  external 
  returns (bool)  {
    totalIncomeEarned = totalIncomeEarned.add(msg.value); 
    receivedIncome(msg.sender, msg.value, _note, block.timestamp); 
    return true; 

  }

  // Contributors can retrieve their funds here if campaign is over + failure.
  // TODO: reduce gas by not storing owed value
  // TODO: add event 
  function refund() 
  nonReentrant 
  atStage(Stages.FundingAsset) 
  fundingPeriodOver 
  whenNotPaused
  external
  returns (bool) {
    uint256 owed = shares[msg.sender];
    shares[msg.sender] = 0;
    amountRaised = amountRaised.sub(owed);
    msg.sender.transfer(owed);
    return true;
  }

  // TODO: is this method able to be tradeable ....ie. transfer shares when still owed a balance 
  // TODO: the percentage of shares traded, must also transfer the same percentage of paidToFunder
  function withdrawIncome()
  nonReentrant
  atStage(Stages.ReceivingROI)
  whenNotPaused
  external 
  returns (bool){
    require(shares[msg.sender] > 0);
    uint256 totalReceived = this.balance.add(totalPaidToFunders);
    assert (totalIncomeEarned == totalReceived);    // For testing TODO
    uint256 payment = totalReceived.mul(shares[msg.sender]).div(amountRaised).sub(paidToFunder[msg.sender]);
    paidToFunder[msg.sender] = paidToFunder[msg.sender].add(payment);
    totalPaidToFunders = totalPaidToFunders.add(payment);
    msg.sender.transfer(payment);
    investmentRedeemed(msg.sender, payment, block.timestamp); 
    return true;
}

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }


  modifier onlyOwner { 
    require(myBitHub.validate(msg.sender)); 
    _; 
  }
  
  modifier whenNotPaused { 
    require(!myBitHub.checkPause()); 
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

  // TODO: seperate into funding info and roi info
  function projectInfo() 
  external 
  view 
  returns (uint256, uint256, uint256, address) {
    return (amountRaised, amountToBeRaised, fundingDeadline, projectCreator);
  }

  function () public {
    revert();
  }

  event assetCreated(address indexed _creator, bytes32 _storageHash, uint256 indexed _amountToBeRaised, uint256 _fundingDeadline, uint256 indexed _now);
  event receivedIncome(address indexed _sender, uint256 indexed _amount, string _note, uint256 indexed _timestamp); 
  event investmentRedeemed(address indexed _funder, uint256 indexed _amount, uint256 indexed _timestamp);
}
