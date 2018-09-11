  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../interfaces/ERC20.sol";         


  contract BrokerEscrow { 

    Database public database; 

    constructor(address _database)
    public { 
      database = Database(_database); 
    } 

    // @notice broker can deposit tokens into escrow here. 
    function depositEscrow(uint _amount, address _tokenAddress)
    external { 

    }

    // @dev assetID can be computed beforehand with sha3(msg.sender, _amountToRaise, _operatorID, _assetURI))
    function lockEscrow(uint _amount, bytes32 _assetID)
    external { 

    }


    // @notice asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc... 
    function unlockEscrow(bytes32 _assetID)
    external { 

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
