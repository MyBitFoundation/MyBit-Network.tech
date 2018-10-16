pragma solidity 0.4.24;


import "../math/SafeMath.sol";

interface TokenView {
  function totalSupply() external view returns (uint);
  function balanceOf(address _user) external view returns (uint);
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


contract API {
  using SafeMath for uint256;

  DBView private database;

  constructor(address _database)
  public {
    database = DBView(_database);
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Governance + Function ID's
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // @notice returns the amount of tokens unlocked and free to spend for _ser
  function getNumTokensAvailable(bytes32 _assetID, address _user)
  public
  view
  returns (uint) {
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", _assetID, _user)));
    address assetToken = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
    uint balance = TokenView(assetToken).balanceOf(_user);
    return balance.sub(amountLocked);
  }

  function getUserVotes(bytes32 _executionID, address _user)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("userVotes", _executionID, _user)));
  }

  function getTotalVotes(bytes32 _executionID)
  public
  view
  returns (uint) {
  return database.uintStorage(keccak256(abi.encodePacked("voteTotal", _executionID)));
  }

  function getCurrentConsensus(bytes32 _executionID, address _assetToken)
  public
  view
  returns (uint) {
    uint totalVotes = getTotalVotes(_executionID);
    return (totalVotes * 100) / TokenView(_assetToken).totalSupply();
  }

  function getAssetManagerParameterHash(bytes32 _assetID, address _oldAssetManager, address _newAssetManager, uint _amount, bool _burn)
  public
  pure
  returns (bytes32){
    return keccak256(abi.encodePacked(_assetID, _oldAssetManager, _newAssetManager, _amount, _burn));
  }

  function getExecutionID(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash)
  public
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
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

  function getOrderID(bytes _assetID, address _user, uint _amount, uint _price, bool _buyOrder)
  external
  pure
  returns(bytes32) {
    return keccak256(abi.encodePacked(_assetID, _user, _amount, _price, _buyOrder));
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
  //                                        AssetManager and Operator
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function getAssetManager(bytes32 _assetID)
  public
  view
  returns(address) {
    address assetManagerAddress = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetID)));
    return assetManagerAddress;
  }

  function getAssetManagerFee(bytes32 _assetID)
  public
  view
  returns(uint) {
    uint assetManagerFee = database.uintStorage(keccak256(abi.encodePacked("assetManagerFee", _assetID)));
    return assetManagerFee;
  }

  function getAssetManagerEscrowID(bytes32 _assetID, address _assetManager)
  public
  pure
  returns(bytes32) {
    bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetID, _assetManager));
    return assetManagerEscrowID;
  }

  function getAssetManagerEscrow(bytes32 _assetManagerEscrowID)
  public
  view
  returns (uint) {
    return database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", _assetManagerEscrowID)));
  }

  function getAssetManagerEscrowRemaining(bytes32 _assetManagerEscrowID)
  public
  view
  returns(uint) {
    uint redeemed = getAssetManagerEscrowRedeemed(_assetManagerEscrowID);
    uint assetManagerEscrow = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", _assetManagerEscrowID))).sub(redeemed);
    return assetManagerEscrow;
  }

  function getAssetManagerEscrowRedeemed(bytes32 _assetManagerEscrowID)
  public
  view
  returns(uint) {
    uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _assetManagerEscrowID)));
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
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
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

  function getUserPermission(address _user)
  public
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked(getCurrentState(), _user)));
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
