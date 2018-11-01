  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../database/Database.sol";
  import "../database/Events.sol";
  import "../interfaces/ERC20.sol";
  import "../tokens/distribution/MintableDistribution.sol";



  // @title A contract for investors to loan ERC20 tokens to assetManagers who require escrow
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice AssetManager can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract Staking {

  Database public database;
  Events public events;


  constructor(address _database, address _events)
  public {
    database = Database(_database);
    events = Events(_events);
  }

  // @notice AssetManager can request for a staker to lend tokens to cover escrow
  function requestStaking(string _tokenURI, bytes32 _assetID, uint _amount, uint _sharePercentage)
  external
  returns (bool) {
    bytes32 agreementHash = keccak256(abi.encodePacked(msg.sender, _assetID, _amount, _sharePercentage));
    database.setBytes32(_assetID, agreementHash);
    MintableDistribution mintableDistribution = new MintableDistribution(_tokenURI, address(this));
    database.setAddress(keccak256(abi.encodePacked("stakingMint", _assetID)), address(mintableDistribution));
    return true;
  }

  // @notice staker can purchase all of
  function purchaseStake(bytes32 _assetID, address _requester, uint _amount, uint _sharePercentage)
  external
  returns (bool) {
    bytes32 agreementHash = keccak256(abi.encodePacked(_requester, _assetID, _amount, _sharePercentage));
    require (database.bytes32Storage(_assetID) == agreementHash);
    ERC20 stakingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
    MintableDistribution distributionToken = MintableDistribution(database.addressStorage(keccak256(abi.encodePacked("stakingMint", _assetID))));
    bytes32 finalAgreement = keccak256(abi.encodePacked(msg.sender, agreementHash));
    database.setBytes32(_assetID, finalAgreement);
    require(stakingToken.transfer(_requester, _amount));
    require(distributionToken.mint(msg.sender, _amount));
    require(distributionToken.finishMinting());
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('Staking destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

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


}
