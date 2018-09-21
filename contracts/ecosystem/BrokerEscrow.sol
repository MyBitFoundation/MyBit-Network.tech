  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../interfaces/DivToken.sol";  
  import "../interfaces/BurnERC20.sol";       

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice Broker can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI 
  contract BrokerEscrow { 
    using SafeMath for uint256; 

    Database public database; 

    constructor(address _database)
    public { 
      database = Database(_database); 
    } 

    // @dev assetID can be computed beforehand with sha3(msg.sender, _amountToRaise, _operatorID, _assetURI))
    function lockEscrow(bytes32 _assetID, uint _amount)
    external 
    returns (bool) { 
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == address(0)); 
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
      require(DivToken(tokenAddress).transferFrom(msg.sender, address(this), _amount)); 
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)), _amount); 
      database.setAddress(keccak256(abi.encodePacked("assetEscrower", _assetID)), msg.sender); 
      return true;
    }

    // @notice broker can increase how many tokens he locks for escrow
    function increaseEscrow(bytes32 _assetID, uint _amount, address _tokenAddress)
    external 
    returns (bool) { 
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == msg.sender); 
      require(DivToken(_tokenAddress).transferFrom(msg.sender, address(this), _amount)); 
      uint escrowAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))); 
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)), escrowAmount.add(_amount)); 
      return true;
    }


    // @notice asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc... 
    function unlockEscrow(bytes32 _assetID)
    external 
    returns (bool) {  
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == msg.sender); 
      DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID)))); 
      uint unlockAmount;
      if (database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinished", _assetID)))) { 
        unlockAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))); 
        assetToken.transfer(msg.sender, unlockAmount); 
      }
      else { 
        uint scalingFactor = assetToken.scalingFactor().div(uint(100));    // scale down 10^2 
        uint percentageROI = assetToken.valueOfToken().div(scalingFactor);   // %ROI * 10^2
        uint quarters = percentageROI.div(uint(25));    // TODO: test....Should round down
        uint amountUnlocked = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _assetID)));
        unlockAmount = quarters.mul(database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID)))).div(uint(100)).sub(amountUnlocked); 
        database.setUint(keccak256(abi.encodePacked("escrowRedeemed", _assetID)), amountUnlocked.add(unlockAmount)); 
        require(assetToken.transfer(msg.sender, unlockAmount)); 
      }
      return true;
    }

    // @notice investors can vote to call this function and burn the brokers escrow for negligence
    function burnEscrow(bytes32 _assetID)
    external 
    onlyOwner { 
      uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))); 
      BurnERC20 token = BurnERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken")))); 
      require(token.burn(amountToBurn)); 
      database.deleteUint(keccak256(abi.encodePacked("brokerEscrow", _assetID))); 
      database.deleteAddress(keccak256(abi.encodePacked("assetEscrower", _assetID))); 
    }


    // @notice Sender must be a registered owner
    modifier onlyOwner {
      require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
      _;
    }

    event LogEscrowBurned(bytes32 indexed _assetID, address _broker, uint _amountBurnt); 
    event LogEscrowLocked(bytes32 indexed _assetID, address indexed _operator, uint _amount); 

}
