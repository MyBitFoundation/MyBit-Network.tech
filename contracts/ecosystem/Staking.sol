  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../interfaces/ERC20.sol";
  import "../tokens/ERC20/distribution/FixedDistribution.sol";
  import "./BrokerEscrow.sol";


  // @title A contract for investors to loan ERC20 tokens to brokers who require escrow
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice Broker can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract Staking {

    Database public database;

    mapping (bytes32 => bytes32) public agreement;



    constructor(address _database)
    public {
      database = Database(_database);
    }

    function requestStaking(bytes32 _assetID, uint _amount, uint _sharePercentage)
    external
    returns (bool) {
      bytes32 agreementHash = keccak256(abi.encodePacked(msg.sender, _assetID, _amount, _sharePercentage));
      database.setBytes32(_assetID, agreementHash);
      return true;
    }

    function purchaseStake(bytes32 _assetID, address _requester, uint _amount, uint _sharePercentage)
    external
    returns (bool) {
      bytes32 agreementHash = keccak256(abi.encodePacked(_requester, _assetID, _amount, _sharePercentage));
      require (database.bytes32Storage(_assetID) == agreementHash);
      bytes32 finalAgreement = keccak256(abi.encodePacked(msg.sender, agreementHash));
      database.setBytes32(_assetID, finalAgreement);
      return true;
    }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Don't accept null value for bytes32 parameter
  //------------------------------------------------------------------------------------------------------------------
  modifier noEmptyBytes(bytes32 _data) {
    require(_data != bytes32(0));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Events
  //------------------------------------------------------------------------------------------------------------------

  //event LogEscrowRequested()
}
