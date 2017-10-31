pragma solidity ^0.4.15;

contract Asset {
using SafeMath for *; 

	// Created by myBit, holds/distributes Ether for Project
	address public projectCreator;
	address public assetHub;
	bytes32 public storageHash;
	uint256 public amountToBeRaised;
	uint256 public amountRaised;  
	uint256 public deadline;
	uint256 public creationDate;
	uint256 public maximumNumberOfOwners; 
	uint256 public id; 


// -----------Payout Information----------------------
	address public myBitFoundation; 
	address public lockedTokenHolders;   // address to receive 2% of funding payout
	address public assetInstaller; 

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
		SuccessfulFunding,
		FailedFunding,
		ReceivingROI
	}

 	modifier atStage(Stages _stage) {
        require(stage == _stage);
        _;
    }

    modifier timedTransitions() {
        if (stage == Stages.FundingPi && now >= nextPaymentTimestamp)
            nextStage();
        _;
    }
    modifier transitionNext() {
        _;
        nextStage();
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

	function fund() 
	payable 
	atStage(Stages.FundingAsset)
	underGoal
	returns (bool) {
		if (amountRaised >= amountToBeRaised) { return 2; }
		if (projectPaid) { return 1; }
		if (contributionLedger[msg.sender] == 0) {
			contributors.push(msg.sender);
		}
		contributionLedger[msg.sender] = contributionLedger[msg.sender].add(msg.value); 
		amountRaised += msg.value;
		return true; 
	}

	// TODO: calculate amount owed (Foundation, LockedHolders, Insurance, Manufacturer)
	function payout() returns (uint256) { 

	}
	//  contributor can retrieve their funds here if campaign is over + failure. 
	function refund() returns (uint256) { 
		if (block.timestamp < deadline) { return 0; }      
		if (amountRaised >= amountToBeRaised) { return 1; }
		uint256 owed = contributionLedger[msg.sender];
		contributionLedger[msg.sender] = 0;
		amountRaised -= owed; 
		if (!msg.sender.send(owed)) {
			amountRaised += owed; 
			contributionLedger[msg.sender] = owed;
			return 2;
		 } 
		return 3; 
	}

	function getContributionAmount(address _contributor) external returns (uint256) { 
		return contributionLedger[_contributor]; 
	}

	function projectInfo() external constant returns (string, string, uint256, uint256, uint256, address) {
		return (title ,description, amountRaised, amountToBeRaised, deadline, projectCreator);
	}

	function nextStage() internal {
      if (stage == Stages.FundingPi) { 
          stage = Stages.UpdatingLedger;
        }
        else { 
          stage = Stages.FundingPi; 
        }
    }

	function () { 
		revert(); 
	}

}