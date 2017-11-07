pragma solidity ^0.4.15;

import './TokenHub.sol';
import './MyBitToken.sol';

// TODO: what happens when someone suicides Ether into a funding period?
// TODO: WHen calculating percentages, sometimes Solidity rounds down which may leave some Ether in the contract


//todo do not transfer from token contract


contract Asset {
using SafeMath for *;

	// Created by myBit, holds/distributes Ether for Project
	address public projectCreator;
	address public assetHub;
	//bytes32 public storageHash;   // Where the title and description + images are stored. (IPFS, Swarm, BigChainDB)
	uint256 public amountToBeRaised;
	uint256 public amountRaised;
	uint256 public deadline;
	uint256 public creationDate;
	uint256 public maximumNumberOfOwners;
	uint256 public id;
	bytes32 public title;
	string public description;


// -----------Payout Information----------------------
	address public myBitFoundation;      // mybit foundation address
	TokenHub public tokenHub;   // address to receive 2% of funding payout
	address public assetInstaller;


  uint256 public myBitFoundationPercentage = 1;
  uint256 public lockedTokensPercentage = 2;
  uint256 public insurancePercentage = 5;
  uint256 public installerPercentage = 92;
  uint256 public insuranceBalance;

	mapping (address => uint256) contributionLedger;
	address[] public contributors;
	bool public projectPaid;

	Stages stages;

	bool private rentrancy_lock = false;

	event assetCreated(address _creator, bytes32 _title, string _description, uint256 _amountToBeRaised, uint256 _amountRaised, uint256 _deadline, uint256 _now);

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

	enum Stages {
		FundingAsset,
		FundingSuccess,
		ReceivingROI
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
			payout();
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

	// probably not necessary...
	modifier onlyPayloadSize(uint size) {
		assert(msg.data.length == size + 4);
		_;
	}


	// TODO: Test storage on Swarm/BigchainDB/IPFS
	function Asset(address _creator, address _assetInstaller, uint256 _amountToBeRaised, uint256 _minimumFundingTime, bytes32 _title, string _description, uint256 _ownerLimit, uint256 _id) public {
		require(_amountToBeRaised > 0);
		assetHub = msg.sender;
		projectCreator = _creator;
		assetInstaller = _assetInstaller;
		amountToBeRaised = _amountToBeRaised;
		amountRaised = 0;
		title = _title;
		description = _description;
		creationDate = block.timestamp;
		deadline = _minimumFundingTime.add(now);
		//storageHash = _storageHash;
		maximumNumberOfOwners = _ownerLimit;
		id = _id;
		projectPaid = false;
		tokenHub = new TokenHub();
		assetCreated(projectCreator, title, description, amountToBeRaised, amountRaised, deadline, now);
	}

	// Users can invest in the asset here
	// Requires that the funding goal hasn't been reached and that the funding period isn't over. Will move stage to FundingSuccess once goal is reached
	function fund() payable atStage(Stages.FundingAsset) fundingLimit external returns (bool) {
		require(msg.value > 0);

		if (contributionLedger[msg.sender] == 0) {
			contributors.push(msg.sender);
		}
		amountRaised = amountRaised.add(msg.value);
    contributionLedger[msg.sender] = contributionLedger[msg.sender].add(msg.value);
		return true;
	}

	//  TODO: Send installer remaining Ether or predefined percentage? Worried about rounding errors leaving excess Ether
	function payout() atStage(Stages.FundingSuccess) nonReentrant public payable returns (bool) {
    uint256 myBitAmount = amountRaised.getFractionalAmount(myBitFoundationPercentage);
    uint256 lockedTokenAmount = amountRaised.getFractionalAmount(lockedTokensPercentage);
    uint256 installerAmount = amountRaised.getFractionalAmount(installerPercentage);
    insuranceBalance = amountRaised.getFractionalAmount(insurancePercentage);
	   myBitFoundation.transfer(myBitAmount);
    tokenHub.receiveTransactionFee.value(lockedTokenAmount);
    assetInstaller.transfer(installerAmount);  // TODO: Have middle contract that we can send information to explaining the job or have them look it up?
		if(amountRaised !=0){ 		// Send remaining amount if any does remain
			assetInstaller.transfer(amountRaised);
		}
		return true;
	}


	function receiveROI() atStage(Stages.ReceivingROI) returns (bool) {

	}

	//  contributors can retrieve their funds here if campaign is over + failure.
  // TODO: use require(!msg.sender.transfer(owed))??
	function refund() atStage(Stages.FundingAsset) fundingPeriodOver external payable returns (bool) {
		if (amountRaised >= amountToBeRaised) { return false; }
		uint256 owed = contributionLedger[msg.sender];
		//require();
		msg.sender.transfer(owed);
		contributionLedger[msg.sender] = 0;
		amountRaised -= owed;
		return true;

	}


	function projectInfo() external constant returns (bytes32, string, uint256, uint256, uint256, address) {
		return (title ,description, amountRaised, amountToBeRaised, deadline, projectCreator);
	}

	function () {
		revert();
	}

}
