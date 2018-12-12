pragma solidity ^0.4.24;


import "../math/SafeMath.sol";

interface TokenView {
  function totalSupply() external view returns (uint);
  function balanceOf(address _investor) external view returns (uint);
  function valuePerToken() external view returns (uint);
  function scalingFactor() external view returns (uint);
  function assetIncome() external view returns (uint);
}

interface DBView {
  function uintStorage(bytes32 _key) external view returns (uint);
  function stringStorage(bytes32 _key) external  view returns (string);
  function addressStorage(bytes32 _key) external  view returns (address);
  function bytesStorage(bytes32 _key) external view returns (bytes);
  function bytes32Storage(bytes32 _key) external view returns (bytes32);
  function boolStorage(bytes32 _key) external view returns (bool);
  function intStorage(bytes32 _key) external view returns (bool);
}

// @title A contract that gets variables from the _database
// @notice The API contract can only view the database. It has no write privileges
contract API {
  using SafeMath for uint256;

  DBView private database;
  uint constant scalingFactor = 10e32;

  constructor(address _database)
  public {
    database = DBView(_database);
  }

  function getAddr(bytes32 _key)
  public
  view
  returns (address) {
    return database.addressStorage(_key);
  }

  function getUint(bytes32 _key)
  public
  view
  returns (uint) {
    return database.uintStorage(_key);
  }

  function hashSB(string _a, bytes32 _b)
  public
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_a, _b));
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Asset Info
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function assetGovernance(address _token)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked("asset.governance", _token)));
  }

  function assetVoteDuration(address _token)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("asset.voteduration", _token)));
  }

  function assetQuorum(address _token)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("asset.quorum", _token)));
  }

  function assetThreshold(address _token)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("asset.threshold", _token)));
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Commitments
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function commitmentValue(address _token, address _tokenHolder)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("commitment.value", _token, _tokenHolder)));
  }

  function commitmentStart(address _token, address _tokenHolder)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("commitment.start", _token, _tokenHolder)));
  }

  function commitmentReleaseTime(address _token, address _tokenHolder)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("commitment.releasetime", _token, _tokenHolder)));
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Proposals
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function getProposalID(address _executingContract, address _assetToken, bytes4 _methodID, bytes32 _parameterHash)
  public
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_executingContract, _assetToken, _methodID, _parameterHash));
  }

  function proposalToken(bytes32 _proposalID)
  public
  view
  returns (address) {
    return database.addressStorage(hashSB("proposal.token", _proposalID));
  }

  function proposalStart(bytes32 _proposalID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("proposal.start", _proposalID)));
  }

  function proposalVoteCount(bytes32 _proposalID)
  public
  view
  returns (uint) {
    return database.uintStorage(hashSB("proposal.votecount", _proposalID));
  }

  // @notice returns how many tokens user has committed towards proposal
  function proposalVoted(bytes32 _proposalID, address _tokenHolder)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("proposal.voted", _proposalID, _tokenHolder)));
  }

  // @notice returns number of voteweight is put towards the dissent of a proposal
  function proposalDissent(bytes32 _proposalID)
  public
  view
  returns (uint) {
    return database.uintStorage(hashSB("proposal.dissent", _proposalID));
  }

  function proposalApproval(bytes32 _proposalID)
  public
  view
  returns (uint) {
    return database.uintStorage(hashSB("proposal.approval", _proposalID));
  }

  function proposalQuorum(bytes32 _proposalID)
  public
  view
  returns (uint) {
    uint approval = proposalApproval(_proposalID);
    uint quorum = (approval * 100) / proposalVoteCount(_proposalID);   // what percentage approved ??
    return quorum;
  }

  function proposalThreshold(bytes32 _proposalID)
  public
  view
  returns (uint) {
    uint totalSupply = TokenView(proposalToken(_proposalID)).totalSupply();
    return (proposalVoteCount(_proposalID) * 100) / totalSupply;
  }

  // @notice for quorum/threshold based time restricted voting
  function hasConsensus(bytes32 proposalID)
  public
  view
  returns (bool) {
    address assetToken = database.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID)));
    uint approval = database.uintStorage(keccak256(abi.encodePacked("proposal.approval", proposalID)));
    uint quorum = (approval * 100) / database.uintStorage(keccak256(abi.encodePacked("proposal.votecount", proposalID)));   // what percentage approved ??
    bool quorumReached = quorum > database.uintStorage(keccak256(abi.encodePacked("asset.quorum", assetToken)));
    uint totalSupply = TokenView(assetToken).totalSupply();
    uint voteCount = database.uintStorage(keccak256(abi.encodePacked("proposal.votecount", proposalID)));
    bool thresholdReached = ( (voteCount * 100) / totalSupply ) >= database.uintStorage(keccak256(abi.encodePacked("asset.threshold", assetToken)));
    return quorumReached && thresholdReached;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Function ID's
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // @notice returns the amount of tokens unlocked and free to spend for _ser
  function getNumTokensAvailable(bytes32 _proposalID, address _investor)
  public
  view
  returns (uint) {
    address assetToken = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("commitment.value", assetToken, _investor)));
    uint balance = TokenView(assetToken).balanceOf(_investor);
    return balance.sub(amountLocked);
  }


  function getAssetManagerParameterHash(bytes32 _assetID, address _oldAssetManager, address _newAssetManager, uint _amount, bool _withhold)
  public
  pure
  returns (bytes32){
    return keccak256(abi.encodePacked(_assetID, _oldAssetManager, _newAssetManager, _amount, _withhold));
  }


  function getMethodID(string _functionString)
  public
  pure
  returns (bytes4) {
    return bytes4(keccak256(abi.encodePacked(_functionString)));
  }

  function getAssetID(address _assetManager, string _assetURI, uint _amountToRaise, bytes32 _operatorID)
  public
  pure
  returns(bytes32) {
    return keccak256(abi.encodePacked(_assetManager, _amountToRaise, _operatorID, _assetURI));
  }

  function getOrderID(bytes _assetID, address _investor, uint _amount, uint _price, bool _buyOrder)
  external
  pure
  returns(bytes32) {
    return keccak256(abi.encodePacked(_assetID, _investor, _amount, _price, _buyOrder));
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Crowdsale and Assets
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function generateAssetID(address _assetManager, uint _amountToRaise, bytes32 _operatorID, string _assetURI)
  public
  pure
  returns(bytes32) {
    bytes32 assetID = keccak256(abi.encodePacked(_assetManager, _amountToRaise, _operatorID, _assetURI));
    return assetID;
  }

  function getAssetID(address _tokenAddress)
  public
  view
  returns(bytes32) {
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked("assetTokenID", _tokenAddress)));
    return assetID;
  }

  function getPlatformAssetID()
  external
  pure
  returns(bytes32){
    return keccak256(abi.encodePacked("platformAssetID"));
  }

  function getAssetAddress(bytes32 _assetID)
  public
  view
  returns(address) {
    address assetAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
    return assetAddress;
  }

  function getAssetFundingToken(bytes32 _assetID)
  public
  view
  returns(address) {
    address fundingTokenAddress = database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID)));
    return fundingTokenAddress;
  }

  // IF we decide not to store assetIncome
  // function getAssetIncome(bytes32 _assetID)
  // public
  // view
  // returns (uint) {
  //   TokenView asset = TokenView(getAssetAddress(_assetID));
  //   uint valuePerToken =  asset.valuePerToken();
  //   return (valuePerToken * (asset.totalSupply())) / asset.scalingFactor();
  // }

  function getAssetROI(bytes32 _assetID)
  public
  view
  returns (uint) {
    TokenView assetToken = TokenView(getAssetAddress(_assetID));
    return (assetToken.assetIncome() * 100) /  assetToken.totalSupply();
  }

  function getAssetFundingGoal(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint fundingGoal = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
    return fundingGoal;
  }

  function getAssetFundingDeadline(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint fundingDeadline = database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    return fundingDeadline;
  }

  function crowdsaleFinalized(bytes32 _assetID)
  public
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)));
    return status;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Asset Manager and Operator
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function getAssetManager(bytes32 _assetID)
  public
  view
  returns(address) {
    address managerAddress = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
    return managerAddress;
  }

  function getAssetManagerFee(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint managerFee = database.uintStorage(keccak256(abi.encodePacked("assetManagerFee", _assetID)));
    return managerFee;
  }

  function getAssetManagerEscrowID(bytes32 _assetID, address _manager)
  public
  pure
  returns(bytes32) {
    bytes32 managerEscrowID = keccak256(abi.encodePacked(_assetID, _manager));
    return managerEscrowID;
  }

  function getAssetManagerEscrow(bytes32 _managerEscrowID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", _managerEscrowID)));
  }

  function getAssetManagerEscrowRemaining(bytes32 _managerEscrowID)
  public
  view
  returns(uint) {
    uint redeemed = getAssetManagerEscrowRedeemed(_managerEscrowID);
    uint brokerEscrow = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", _managerEscrowID))).sub(redeemed);
    return brokerEscrow;
  }

  function getAssetManagerEscrowRedeemed(bytes32 _managerEscrowID)
  public
  view
  returns(uint) {
    uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _managerEscrowID)));
    return escrowRedeemed;
  }

  function getAssetOperator(bytes32 _assetID)
  public
  view
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
    return operatorAddress;
  }

  function generateOperatorID(string _operatorURI)
  public
  pure
  returns(bytes32) {
    bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI));
    return operatorID;
  }

  function getOperatorID(address _operatorAddress)
  public
  view
  returns(bytes32) {
    bytes32 operatorID = database.bytes32Storage(keccak256(abi.encodePacked("operator", _operatorAddress)));
    return operatorID;
  }

  function getOperatorAddress(bytes32 _operatorID)
  public
  view
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    return operatorAddress;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Stakeholders
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function generateOrderID(bytes32 _assetID, address _sender, uint _amount, uint _price, bool _buyOrder)
  public
  pure
  returns(bytes32) {
    bytes32 orderID = keccak256(abi.encodePacked(_assetID, _sender, _amount, _price, _buyOrder));
    return orderID;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Platform and Contract State
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Platform functions
  function getPlatformToken()
  public
  view
  returns(address) {
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", keccak256(abi.encodePacked("platformAssetID")))));
    return tokenAddress;
  }

  function getPlatformWallet()
  public
  view
  returns(address) {
    address walletAddress = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
    return walletAddress;
  }

  function getContractAddress(string _contractName)
  public
  view
  returns(address) {
    address contractAddress = database.addressStorage(keccak256(abi.encodePacked("contract", _contractName)));
    return contractAddress;
  }

  function getCurrentState()
  public
  view
  returns(bytes32) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    return currentState;
  }

  function getUserPermission(address _investor)
  public
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked(getCurrentState(), _investor)));
    return status;
  }

  function getFunctionCost(bytes4 _sig, address _contract)
  public
  view
  returns(uint) {
    uint cost = database.uintStorage(keccak256(abi.encodePacked(_sig, _contract)));
    return cost;
  }

  function contractPaused(address _contract)
  public
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked("paused", _contract)));
    return status;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Ownership
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function contractOwner(address _account)
  public
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked("owner", _account)));
    return status;
  }

}
