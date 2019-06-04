pragma solidity ^0.4.24;


import "../math/SafeMath.sol";
import "../interfaces/ERC20DividendInterface.sol";

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

  function getContract(string _name)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked('contract', _name)));
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
    return database.uintStorage(keccak256(abi.encodePacked("asset.voteDuration", _token)));
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

  function assetStakeRequirement(address _token)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("asset.stakeRequirement", _token)));
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

  function getProposalID(address _assetToken, address _executingContract, bytes4 _methodID, bytes32 _parameterHash)
  public
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_assetToken, _executingContract, _methodID, _parameterHash));
  }

  function proposalInitiator(bytes32 _proposalID)
  public
  view
  returns (address) {
    return database.addressStorage(hashSB("proposal.initiator", _proposalID));
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
    address assetToken = proposalToken(proposalID);
    uint256 totalSupply = TokenView(assetToken).totalSupply();
    uint256 voteCount = proposalVoteCount(proposalID);
    uint256 approval = proposalApproval(proposalID);
    if(totalSupply == 0 || voteCount == 0){
      return false;
    } else {
      uint256 quorum = voteCount.mul(100).div(totalSupply);
      uint256 theshold = approval.mul(100).div(voteCount);
      bool quorumReached = quorum >= assetQuorum(assetToken);
      bool thresholdReached = theshold >= assetThreshold(assetToken);
      return quorumReached && thresholdReached;
    }
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Function ID's
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // @notice returns the amount of tokens unlocked and free to spend for _ser
  function getNumTokensAvailable(bytes32 _proposalID, address _investor)
  public
  view
  returns (uint) {
    address assetToken = proposalToken(_proposalID);
    uint amountLocked = commitmentValue(assetToken, _investor);
    uint balance = TokenView(assetToken).balanceOf(_investor);
    return balance.sub(amountLocked);
  }


  function getAssetManagerParameterHash(address _assetToken, address _oldAssetManager, address _newAssetManager, uint _amount, bool _withhold)
  public
  pure
  returns (bytes32){
    return keccak256(abi.encodePacked(_assetToken, _oldAssetManager, _newAssetManager, _amount, _withhold));
  }


  function getMethodID(string _functionString)
  public
  pure
  returns (bytes4) {
    return bytes4(keccak256(abi.encodePacked(_functionString)));
  }

  function getOrderID(address _assetAddress, address _investor, uint _amount, uint _price, bool _buyOrder)
  external
  pure
  returns(bytes32) {
    return keccak256(abi.encodePacked(_assetAddress, _investor, _amount, _price, _buyOrder));
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Crowdsale and Assets
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function getAssetFundingToken(address _assetAddress)
  public
  view
  returns(address) {
    address fundingTokenAddress = ERC20DividendInterface(_assetAddress).getERC20();
    return fundingTokenAddress;
  }

  // IF we decide not to store assetIncome
  // function getAssetIncome(address _assetAddress)
  // public
  // view
  // returns (uint) {
  //   TokenView asset = TokenView(_assetAddress);
  //   uint valuePerToken =  asset.valuePerToken();
  //   return (valuePerToken * (asset.totalSupply())) / asset.scalingFactor();
  // }

  function getAssetROI(address _assetAddress)
  public
  view
  returns (uint) {
    TokenView assetToken = TokenView(_assetAddress);
    return (assetToken.assetIncome() * 100) /  assetToken.totalSupply();
  }

  function getCrowdsaleGoal(address _assetAddress)
  public
  view
  returns(uint) {
    uint fundingGoal = database.uintStorage(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)));
    return fundingGoal;
  }

  function getCrowdsaleDeadline(address _assetAddress)
  public
  view
  returns(uint) {
    return database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)));
  }

  function crowdsaleFinalized(address _assetAddress)
  public
  view
  returns(bool) {
    return database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress)));
  }

  function crowdsalePaid(address _assetAddress)
  public
  view
  returns(bool) {
    return database.boolStorage(keccak256(abi.encodePacked("crowdsale.paid", _assetAddress)));
  }

  function crowdsaleFailed(address _assetAddress)
  public
  view
  returns(bool) {
    return (now > getCrowdsaleDeadline(_assetAddress) && !crowdsaleFinalized(_assetAddress));
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Asset Manager and Operator
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function getAssetManager(address _assetAddress)
  public
  view
  returns(address) {
    address managerAddress = database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)));
    return managerAddress;
  }

  function getAssetManagerFee(address _assetAddress)
  public
  view
  returns(uint) {
    uint managerFee = database.uintStorage(keccak256(abi.encodePacked("asset.managerTokens", _assetAddress)));
    return managerFee;
  }

  function getAssetPlatformFee(address _assetAddress)
  public
  view
  returns(uint) {
    uint platformFee = database.uintStorage(keccak256(abi.encodePacked("asset.platformTokens", _assetAddress)));
    return platformFee;
  }

  function getAssetManagerEscrowID(address _assetAddress, address _manager)
  public
  pure
  returns(bytes32) {
    bytes32 managerEscrowID = keccak256(abi.encodePacked(_assetAddress, _manager));
    return managerEscrowID;
  }

  function getAssetManagerEscrow(bytes32 _managerEscrowID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("asset.escrow", _managerEscrowID)));
  }

  function getAssetManagerEscrowRemaining(bytes32 _managerEscrowID)
  public
  view
  returns(uint) {
    uint redeemed = getAssetManagerEscrowRedeemed(_managerEscrowID);
    uint brokerEscrow = getAssetManagerEscrow(_managerEscrowID).sub(redeemed);
    return brokerEscrow;
  }

  function getAssetManagerEscrowRedeemed(bytes32 _managerEscrowID)
  public
  view
  returns(uint) {
    uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", _managerEscrowID)));
    return escrowRedeemed;
  }

  function getAssetOperator(address _assetAddress)
  public
  view
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("asset.operator", _assetAddress)));
    return operatorAddress;
  }

  function generateOperatorID(string _operatorURI)
  public
  pure
  returns(bytes32) {
    bytes32 operatorID = keccak256(abi.encodePacked("operator.uri", _operatorURI));
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

  function getManagerAssetCount(address _manager)
  public
  view
  returns(uint) {
    return database.uintStorage(keccak256(abi.encodePacked("manager.assets", _manager)));
  }

  function getCollateralLevel(address _manager)
  public
  view
  returns(uint) {
    return database.uintStorage(keccak256(abi.encodePacked("collateral.base"))).add(database.uintStorage(keccak256(abi.encodePacked("collateral.level", getManagerAssetCount(_manager)))));
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                        Stakeholders
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function generateOrderID(address _assetAddress, address _sender, uint _amount, uint _price, bool _buyOrder)
  public
  pure
  returns(bytes32) {
    bytes32 orderID = keccak256(abi.encodePacked(_assetAddress, _sender, _amount, _price, _buyOrder));
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
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
    return tokenAddress;
  }

  function getPlatformTokenFactory()
  public
  view
  returns(address) {
    address factoryAddress = database.addressStorage(keccak256(abi.encodePacked("platform.tokenFactory")));
    return factoryAddress;
  }

  function getPlatformFee()
  public
  view
  returns(uint) {
    uint fee = database.uintStorage(keccak256(abi.encodePacked("platform.fee")));
    return fee;
  }

  function getPlatformPercentage()
  public
  view
  returns(uint) {
    uint percentage = database.uintStorage(keccak256(abi.encodePacked("platform.percentage")));
    return percentage;
  }

  function getPlatformAssetsWallet()
  public
  view
  returns(address) {
    address walletAddress = database.addressStorage(keccak256(abi.encodePacked("platform.wallet.assets")));
    return walletAddress;
  }

  function getPlatformFundsWallet()
  public
  view
  returns(address) {
    address walletAddress = database.addressStorage(keccak256(abi.encodePacked("platform.wallet.funds")));
    return walletAddress;
  }

  function getContractAddress(string _contractName)
  public
  view
  returns(address) {
    address contractAddress = database.addressStorage(keccak256(abi.encodePacked("contract", _contractName)));
    return contractAddress;
  }

  /*
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
  */

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
