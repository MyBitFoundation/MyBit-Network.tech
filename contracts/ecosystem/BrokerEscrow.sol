  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../interfaces/DivToken.sol";
  import "../interfaces/BurnableERC20.sol";
  import "./ERC20Burner.sol";

  interface Governance { function isConsensusReached(address _thisContract, bytes4 _methodID, bytes32 _parameterHash) external view returns (bool); }

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice Broker can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract BrokerEscrow {
    using SafeMath for uint256;

    DBInterface public database;

    // @notice constructor: initializes database
    // @param: the address for the database contract used by this platform
    constructor(address _database)
    public {
      database = DBInterface(_database);
    }

    // @dev assetID can be computed beforehand with sha3(msg.sender, _amountToRaise, _operatorID, _assetURI))
    // @dev anybody can make the broker escrow if he leaves this contract with approval to transfer
    function lockEscrow(bytes32 _assetID, uint _amount)
    public
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))) == address(0));
      bytes32 brokerEscrowID = keccak256(abi.encodePacked(_assetID, msg.sender));
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
      require(BurnableERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount));
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", brokerEscrowID)), _amount);
      database.setAddress(keccak256(abi.encodePacked("broker", _assetID)), msg.sender);
      emit LogEscrowLocked(_assetID, brokerEscrowID, msg.sender, _amount);
      return true;
    }

    // Can use unlock escrow
    // function cancelEscrow(bytes32 _assetID)
    // external
    // returns (bool) {
    //   require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))));
    //   require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) == 0);
    //   bytes32 brokerEscrowID = keccak256(abi.encodePacked(_assetID, msg.sender));
    //   address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
    //   uint amountEscrowed = database.uintStorage(keccak256(abi.encodePacked("brokerEscrowed", brokerEscrowID)));
    //   require(removeBroker(_assetID, brokerEscrowID));
    //   BurnableERC20(tokenAddress).transfer(msg.sender, amountEscrowed);
    //   return true;
    // }


    // @notice broker can unlock his escrow here once funding fails or asset returns sufficient ROI
    // @dev asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc...
    function unlockEscrow(bytes32 _assetID)
    public
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))) == msg.sender);
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) < now);
      BurnableERC20 burnToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      bytes32 brokerEscrowID = keccak256(abi.encodePacked(_assetID, msg.sender));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", brokerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", brokerEscrowID))).sub(escrowRedeemed);
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)))){
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        require(removeBroker(_assetID, brokerEscrowID));
      }
      else {
        //Past the deadline with a successful funding. Only pay back based on ROI
        DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
        uint assetIncome = assetToken.assetIncome();
        uint quarter = assetToken.totalSupply().div(4);    // TODO: subtract broker fee as well?
        unlockAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", brokerEscrowID))).div(4);
        require(assetIncome.sub(escrowRedeemed) >= quarter);
        database.setUint(keccak256(abi.encodePacked("escrowRedeemed", brokerEscrowID)), escrowRedeemed.add(unlockAmount));
      }
      require(burnToken.transfer(msg.sender, unlockAmount));
      return true;
    }


    // @notice investors can vote to call this function for the new broker to then call
    // @dev new broker must approve this contract to transfer in and lock _ amount of platform tokens
    function becomeBroker(bytes32 _assetID, address _oldBroker, uint _amount, bool _burn)
    external
    hasConsensus(_assetID, msg.sig, keccak256(abi.encodePacked(_assetID, _oldBroker, _amount, _burn)))
    returns (bool) {
      bytes32 brokerEscrowID = keccak256(abi.encodePacked(_assetID, _oldBroker));
      uint oldEscrowRemaining = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", brokerEscrowID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", brokerEscrowID))));
      BurnableERC20 token = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      require(removeBroker(_assetID, brokerEscrowID));
      if (_burn) { require(token.burn(oldEscrowRemaining)); }
      else { require(token.transfer(_oldBroker, oldEscrowRemaining));  }
      require(lockEscrow(_assetID, _amount));
      return true;
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                            Internal Functions
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function removeBroker(bytes32 _assetID, bytes32 _brokerEscrowID)
    internal
    returns (bool) {
        database.deleteAddress(keccak256(abi.encodePacked("broker", _assetID)));
        database.deleteUint(keccak256(abi.encodePacked("brokerEscrow", _brokerEscrowID)));
        database.deleteUint(keccak256(abi.encodePacked("escrowRedeemed", _brokerEscrowID)));
        return true;
    }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // @notice add this modifer to functions that you want multi-sig requirements for
    // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
    modifier hasConsensus(bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash) {
      bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", keccak256(abi.encodePacked(address(this), _assetID, _methodID, _parameterHash))));
      uint256 numTokens = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)))).totalSupply();
      require(database.uintStorage(numVotesID).mul(100).div(numTokens) >= 33);
      _;
    }


    event LogEscrowBurned(bytes32 indexed _assetID, address indexed _broker, uint _amountBurnt);
    event LogEscrowLocked(bytes32 indexed _assetID, bytes32 indexed _brokerEscrowID, address indexed _broker, uint _amount);

}
