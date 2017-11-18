pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Owned.sol'; 
import './Pausable.sol';
import './LockedTokens.sol';
import './MyBitToken.sol';

// TODO: what happens when someone suicides Ether into a funding period?
// TODO: WHen calculating percentages, sometimes Solidity rounds down which may leave some Ether in the contract

contract Asset {
using SafeMath for *;

	// Created by myBit, holds/distributes Ether for Project
  // ------------Project Information--------------
	address public projectCreator;
	address public assetHub;
	bytes32 public storageHash;   // Where the title and description + images are stored. (IPFS, Swarm, BigChainDB)
	uint256 public deadline;
	uint256 public creationDate;
	uint256 public maximumNumberOfOwners;
	uint256 public id;


// -----------Beneficiary Addresses----------------------
	address public myBitFoundation;      // mybit foundation address
	LockedTokens public lockedTokens;   // address to receive 2% of funding payout
	address public assetInstaller;
  address public insuranceContract;   // contract to hold insurance

//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;
  uint256 public lockedTokensPercentage = 2;
  uint256 public insurancePercentage = 5;
  uint256 public installerPercentage = 92;


// -----------Funder Information--------------
	mapping (address => uint256) contributionLedger;
  address[] public contributors;    // AssetFunders
  uint256 public amountToBeRaised;
  uint256 public amountRaised;     // Amount raised from funding 


  // -------Investment Returns--------------
  uint256 public roiBalance;     // Return on investment. Amount received from Asset in the wild, not yet paid to investors
  uint256 public totalROIReceived;   // Amount owed to funders
  mapping (address => uint256) public owedToFunder;  // Amount owed to particular funder 
  uint256 public paymentReward; 

 // --------Stages & Timing------------
	Stages stages;
	bool private rentrancy_lock = false;


  enum Stages {
    FundingAsset,
    FundingSuccess,
    ReceivingROI
  }

	modifier nonReentrant() {
		require(!rentrancy_lock);
		rentrancy_lock = true;
		_;
		rentrancy_lock = false;
	}

	modifier hubOnly {
		require(msg.sender != assetHub);
		_;
	}

	modifier onlyCreator {
		require(msg.sender != projectCreator);
		_;
	}

 	modifier atStage(Stages _stage) {
		require(stages == _stage);
    _;
  }

  modifier fundingLimit() {
    require(amountRaised <= amountToBeRaised);
    _;
    if (amountRaised >= amountToBeRaised) {
    	stages = Stages.FundingSuccess;
			}
  }

  modifier withinFundingTime() {
    require(now <= deadline);
    _;
  }

  modifier fundingPeriodOver() {
    require(now >= deadline);
    _;
  }

  modifier requiresEther() { 
    require(msg.value > 0);
    _;
  }


	// TODO: Test storage on Swarm/BigchainDB/IPFS
	function Asset(address _creator, bytes32 _storageHash, address _assetInstaller, uint256 _amountToBeRaised, uint256 _minimumFundingTime, uint256 _ownerLimit, uint256 _id) 
  public {
		assetHub = msg.sender;
		projectCreator = _creator;
		assetInstaller = _assetInstaller;
		amountToBeRaised = _amountToBeRaised;
		amountRaised = 0;
		creationDate = block.timestamp;
		deadline = _minimumFundingTime.add(now);
		storageHash = _storageHash;
		maximumNumberOfOwners = _ownerLimit;
		id = _id;
		assetCreated(projectCreator, amountToBeRaised, amountRaised, deadline, now);
	}

	// Users can invest in the asset here
	// Requires that the funding goal hasn't been reached and that the funding period isn't over. Will move stage to FundingSuccess once goal is reached
	function fund()
  payable 
  requiresEther 
  atStage(Stages.FundingAsset) 
  fundingLimit 
  external 
  returns (bool) {
		if (contributionLedger[msg.sender] == 0) {
			contributors.push(msg.sender);
		}
		amountRaised = amountRaised.add(msg.value);
    contributionLedger[msg.sender] = contributionLedger[msg.sender].add(msg.value);
		return true;
	}

	//  TODO: Send installer remaining Ether or predefined percentage? Worried about rounding errors leaving excess Ether
  // TODO: reduce gas 
	function payout() 
  atStage(Stages.FundingSuccess) 
  nonReentrant 
  payable
  external  
  returns (bool) {
    uint256 myBitAmount = amountRaised.getFractionalAmount(myBitFoundationPercentage);
    uint256 lockedTokenAmount = amountRaised.getFractionalAmount(lockedTokensPercentage);
    uint256 installerAmount = amountRaised.getFractionalAmount(installerPercentage);
    uint256 insuranceAmount = amountRaised.getFractionalAmount(insurancePercentage);
    insuranceContract.transfer(insuranceAmount);
	  myBitFoundation.transfer(myBitAmount);
    lockedTokens.receiveTransactionFee.value(lockedTokenAmount);
    assetInstaller.transfer(installerAmount);   // send the remainder of Ether left in the contract
    stages = Stages.ReceivingROI; 
		return true;
	}


	function receiveROI() 
  payable 
  requiresEther 
  atStage(Stages.ReceivingROI)
  external 
  returns (bool)  {
    roiBalance = roiBalance.add(msg.value);
    totalROIReceived = totalROIReceived.add(msg.value); 
    receivedROI(msg.sender, msg.value, block.timestamp); 
    return true; 

	}

	//  contributors can retrieve their funds here if campaign is over + failure.
  // TODO: reduce gas by not storing owed value
	function refund() 
  nonReentrant 
  atStage(Stages.FundingAsset) 
  fundingPeriodOver 
  external
  returns (bool) 
  {
		uint256 owed = contributionLedger[msg.sender];
    contributionLedger[msg.sender] = 0;
    amountRaised = amountRaised.sub(owed);
		msg.sender.transfer(owed);
		return true;
	}

  function updateLedger()
  atStage(Stages.ReceivingROI)
  external
  returns (bool) {
    require(contributionLedger[msg.sender] > 0); 
    paymentReward = roiBalance.div(50);    // give msg.sender 1/50 of the payment cycle (TODO: recalibrate these numbers)
    assert (paymentReward > 0); 
    roiBalance = roiBalance.sub(paymentReward); 
    for (uint256 i=0; i < contributors.length; i++) { 
      address thisFunder = contributors[i];
      uint256 roi = roiBalance.calculateOwed(contributionLedger[thisFunder], roiBalance);    // using library to save gas
      owedToFunder[thisFunder] = owedToFunder[thisFunder].add(roi);     // allow withdrawl of funders return on investment
    }
    return true; 
  }

  function withdrawlReturns() 
  nonReentrant 
  atStage(Stages.ReceivingROI)
  external 
  returns (bool) { 
    uint256 owed = owedToFunder[msg.sender];
    owedToFunder[msg.sender] = 0;
    roiBalance = roiBalance.sub(owed);
    msg.sender.transfer(owed);
    return true; 
  } 

	function projectInfo() external constant returns (uint256, uint256, uint256, address) {
		return (amountRaised, amountToBeRaised, deadline, projectCreator);
	}

	function () public {
		revert();
	}

  event assetCreated(address _creator, uint256 _amountToBeRaised, uint256 _amountRaised, uint256 _deadline, uint256 _now);
  event receivedROI(address indexed _sender, uint256 indexed _amount, uint256 indexed _timestamp); 
  event investmentRedeemed(address indexed _investor, uint256 indexed _amount, uint256 indexed _timestamp); 
}
