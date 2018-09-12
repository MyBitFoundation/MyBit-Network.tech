  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../interfaces/DivToken.sol";         


  contract BrokerEscrow { 
    using SafeMath for uint256; 

    Database public database; 

    constructor(address _database)
    public { 
      database = Database(_database); 
    } 

    // @dev assetID can be computed beforehand with sha3(msg.sender, _amountToRaise, _operatorID, _assetURI))
    function lockEscrow(bytes32 _assetID, uint _amount, address _tokenAddress)
    external { 
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == address(0)); 
      require(DivToken(_tokenAddress).transferFrom(msg.sender, address(this), _amount)); 
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)), _amount); 
      database.setAddress(keccak256(abi.encodePacked("assetEscrower", _assetID)), msg.sender); 
    }

    function increaseEscrow(bytes32 _assetID, uint _amount, address _tokenAddress)
    external { 
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == msg.sender); 
      require(DivToken(_tokenAddress).transferFrom(msg.sender, address(this), _amount)); 
      uint escrowAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))); 
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)), escrowAmount.add(_amount)); 
    }


    // @notice asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc... 
    function unlockEscrow(bytes32 _assetID)
    external 
    returns (bool) {  
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == msg.sender); 
      DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID)))); 
      if (database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) == uint(0)) { 
        assetToken.transfer(msg.sender, database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID)))); 
      }
      else{ 
        uint scalingFactor = assetToken.scalingFactor().div(100);    // scale down 10^2 
        uint percentageROI = assetToken.valueOfToken().div(scalingFactor);   // %ROI * 10^2
        uint quarters = percentageROI.div(uint(25));    // Should round down
        uint amountUnlocked = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _assetID)));
        uint unlockAmount = quarters.mul(database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID)))).sub(amountUnlocked); 
        database.setUint(keccak256(abi.encodePacked("escrowRedeemed", _assetID)), amountUnlocked.add(unlockAmount)); 
        require(assetToken.transfer(msg.sender, unlockAmount)); 
      }

    }

    // @notice investors can vote to call this function and burn the brokers escrow for negligence
    function burnEscrow(bytes32 _assetID)
    external 
    onlyOwner { 

    }


    // @notice Sender must be a registered owner
    modifier onlyOwner {
      require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
      _;
    }

}
