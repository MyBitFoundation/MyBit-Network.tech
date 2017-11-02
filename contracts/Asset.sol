pragma solidity ^0.4.15;

import 'LockedTokens.sol'; 
// TODO: what happens when someone suicides Ether into a funding period? 
// TODO: WHen calculating percentages, sometimes Solidity rounds down which may leave some Ether in the contract
contract Asset {
using SafeMath for *; 

	// Created by myBit, holds/distributes Ether for Project
	address public projectCreator;
	address public assetHub;
	bytes32 public storageHash;   // Where the title and description + images are stored. (IPFS, Swarm, BigChainDB)
	uint256 public amountToBeRaised;
	uint256 public amountRaised;  
	uint256 public deadline;
	uint256 public creationDate;
	uint256 public maximumNumberOfOwners; 
	uint256 public id; 


// -----------Payout Information----------------------
	address public myBitFoundation;      // mybit foundation address 
	LockedTokens public lockedTokens;   // address to receive 2% of funding payout
	address public assetInstaller; 


  uint256 public myBitFoundationPercentage = 1; 
  uint256 public lockedTokensPercentage = 2; 
  uint256 public insurancePercentage = 5;
  uint256 public manufacturerPercentage = 92; 
  uint256 public insuranceBalance; 

	mapping (address => uint256) contributionLedger;
	address[] public contributors;
	bool public projectPaid; 

	Stages stages;

	bool private rentrancy_lock = false;

	event assetCreated(address _creator, string _title, string _description, uint256 _amountToBeRaised, uint256 _amountRaised, uint256 _deadline); 


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
	function Asset(address _creator, address _assetInstaller, uint256 _amountToBeRaised, uint256 _minimumFundingTime, bytes32 _storageHash, uint256 _ownerLimit, uint256 _id) {
		require(_amountToBeRaised >= 0);
		assetHub = msg.sender; 
		assetInstaller = _assetInstaller; 
		projectCreator = _creator;
		amountToBeRaised = _amountToBeRaised;
		amountRaised = 0; 
		creationDate = block.timestamp; 
		deadline = _minimumFundingTime.add(now);
		storageHash = _storageHash; 
		maximumNumberOfOwners = _ownerLimit; 
		id = _id;
		projectPaid = false;
		assetCreated(projectCreator, title, description, amountToBeRaised, amountRaised, deadline, now); 
	}

	// Users can invest in the asset here
	// Requires that the funding goal hasn't been reached and that the funding period isn't over. Will move stage to FundingSuccess once goal is reached
	function fund() 
	payable 
	atStage(Stages.FundingAsset)
	fundingLimit
	returns (bool) {
		if (contributionLedger[msg.sender] == 0) {
			contributors.push(msg.sender);
		}
		amountRaised = amountRaised.add(msg.value);
    contributionLedger[msg.sender] = contributionLedger[msg.sender].add(msg.value); 
		return true; 
	}

	//  TODO: Send manufacturer remaining Ether or predefined percentage? Worried about rounding errors leaving excess Ether
	function payout() 
  atStage(Stages.FundingSuccess)
  nonReentrant
  returns (bool) {
    uint256 myBitAmount = amountRaised.getFractionalAmount(myBitFoundationPercentage);
    uint256 lockedTokenAmount = amountRaised.getFractionalAmount(lockedTokensPercentage); 
    uint256 manufacturerAmount = amountRaised.getFractionalAmount(manufacturerAmount); 
    insuranceBalance = amountRaised.getFractionalAmount(insurancePercentage); 
    require(myBitFoundation.transfer(myBitAmount)); 
    require(lockedTokens.receiveTransactionFee(lockedTokenAmount)); 
    require(manufacturerAddress.transfer(this.balance));  // TODO: Have middle contract that we can send information to explaining the job or have them look it up? 
    return true;
	}


	function receiveROI() 
  atStage(Stages.ReceivingROI)
  returns (bool) { 
    
	}
	//  contributors can retrieve their funds here if campaign is over + failure. 
  // TODO: use require(!msg.sender.transfer(owed))??
	function refund() 
	atStage(Stages.FundingAsset)
  fundingPeriodOver 
  returns (bool) { 
		if (amountRaised >= amountToBeRaised) { return 1; }
		uint256 owed = contributionLedger[msg.sender];
		contributionLedger[msg.sender] = 0;
		amountRaised -= owed; 
		if (!msg.sender.transfer(owed)) {
			amountRaised += owed; 
			contributionLedger[msg.sender] = owed;
			return false;
		 } 
		return true; 
	}


	function projectInfo() external constant returns (string, string, uint256, uint256, uint256, address) {
		return (title ,description, amountRaised, amountToBeRaised, deadline, projectCreator);
	}

	function () { 
		revert(); 
	}

}
