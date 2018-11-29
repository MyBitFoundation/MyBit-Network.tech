pragma solidity 0.4.24;

import '../interfaces/DBInterface.sol';

contract Events {
  DBInterface public database;

  constructor(address _database) public{
    database = DBInterface(_database);
  }

  function message(string _message)
  external
  onlyApprovedContract {
      emit LogEvent(_message, keccak256(abi.encodePacked(_message)), tx.origin);
  }

  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)
  external
  onlyApprovedContract {
      emit LogTransaction(_message, keccak256(abi.encodePacked(_message)), _from, _to, _amount, _id, tx.origin);
  }

  function registration(string _message, address _account)
  external
  onlyApprovedContract {
      emit LogAddress(_message, keccak256(abi.encodePacked(_message)), _account, tx.origin);
  }

  function contractChange(string _message, address _account, string _name)
  external
  onlyApprovedContract {
      emit LogContractChange(_message, keccak256(abi.encodePacked(_message)), _account, _name, tx.origin);
  }

  function asset(string _message, string _uri, bytes32 _assetID, address _token, address _manager)
  external
  onlyApprovedContract {
      emit LogAsset(_message, keccak256(abi.encodePacked(_message)), _uri, _assetID, _token, _manager, tx.origin);
  }

  function escrow(string _message, bytes32 _assetID, bytes32 _escrowID, address _manager, uint _amount)
  external
  onlyApprovedContract {
      emit LogEscrow(_message, keccak256(abi.encodePacked(_message)), _assetID, _escrowID, _manager, _amount, tx.origin);
  }

  function order(string _message, bytes32 _orderID, uint _amount, uint _price)
  external
  onlyApprovedContract {
      emit LogOrder(_message, keccak256(abi.encodePacked(_message)), _orderID, _amount, _price, tx.origin);
  }

  function exchange(string _message, bytes32 _orderID, bytes32 _assetID, address _account)
  external
  onlyApprovedContract {
      emit LogExchange(_message, keccak256(abi.encodePacked(_message)), _orderID, _assetID, _account, tx.origin);
  }

  function operator(string _message, bytes32 _operatorID, string _operatorURI, address _account)
  external
  onlyApprovedContract {
      emit LogOperator(_message, keccak256(abi.encodePacked(_message)), _operatorID, _operatorURI, _account, tx.origin);
  }

  function consensus(string _message, bytes32 _executionID, bytes32 _votesID, uint _votes, uint _tokens, uint _quorum)
  external
  onlyApprovedContract {
    emit LogConsensus(_message, keccak256(abi.encodePacked(_message)), _executionID, _votesID, _votes, _tokens, _quorum, tx.origin);
  }

  //Generalized events
  event LogEvent(string message, bytes32 indexed messageID, address indexed origin);
  event LogTransaction(string message, bytes32 indexed messageID, address from, address to, uint amount, bytes32 id, address indexed origin); //amount and id will be empty on some events
  event LogAddress(string message, bytes32 indexed messageID, address indexed account, address indexed origin);
  event LogContractChange(string message, bytes32 indexed messageID, address indexed account, string name, address indexed origin);
  event LogAsset(string message, bytes32 indexed messageID, string uri, bytes32 assetID, address token, address indexed manager, address indexed origin);
  event LogEscrow(string message, bytes32 indexed messageID, bytes32 assetID, bytes32  escrowID, address indexed manager, uint amount, address indexed origin);
  event LogOrder(string message, bytes32 indexed messageID, bytes32 indexed orderID, uint amount, uint price, address indexed origin);
  event LogExchange(string message, bytes32 indexed messageID, bytes32 orderID, bytes32 indexed assetID, address account, address indexed origin);
  event LogOperator(string message, bytes32 indexed messageID, bytes32 operatorID, string operatorURI, address indexed account, address indexed origin);
  event LogConsensus(string message, bytes32 indexed messageID, bytes32 executionID, bytes32 votesID, uint votes, uint tokens, uint quorum, address indexed origin);


/*
  //AccessHierarchy
  event LogUserApproved(address _user, uint _approvalLevel);
  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);

  //ERC20Burner
  //LogTransaction event LogMYBBurned(address _tokenHolder, address _burningContract, uint _amount);
  event LogFeeAdded(address indexed _contractAddress, bytes4 _methodID, uint _amount);

  //Expirable
  event LogExpirationLengthChanged(uint _oldExpirationLength, uint _newExpirationLength);

  //KYC
  //LogTransaction event LogKYCApproved(address _owner, address _user);

  //CrowdsaleERC20 + CrowdsaleETH
  //LogTransaction event LogAssetPurchased(bytes32 indexed _assetID, address indexed _sender, uint _amount);
  //LogTransaction event LogAssetPayout(bytes32 indexed _assetID, address indexed _operator, uint _amount);
  //LogTransaction event LogDestruction(uint _amountSent, address indexed _caller);
  //LogTransaction event LogRefund(bytes32 indexed _assetID, address indexed _funder, uint _amount);

  //CrowdsaleGeneratorERC20 + CrowdsaleGeneratorETH
  //LogAsset event LogAssetFundingStarted(bytes32 indexed _assetID, address indexed _assetManager, string _assetURI, address indexed _tokenAddress);

  //ContractManager
  //LogContractChange event LogContractAdded(address _contractAddress, string _name, uint _blockNumber);
  //LogContractChange event LogContractRemoved(address contractToDelete, string _name, uint _blockNumber);
  //LogContractChange event LogContractUpdated(address oldAddress, string _name, uint _blockNumber);
  //LogContractChange event LogNewContractLocation(address _contractAddress, string _name, uint _blockNumber);
  event LogContractStatePreferenceChanged(address indexed _user, bool _currentStateAcceptance, bool _ignoreStateChanges);

  //Database
  //Is this needed? event LogInitialized(address _owner, bool _upgradeable);

  //AssetExchange
  //LogTransaction event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
  //LogExchange event LogBuyOrderCreated(bytes32 _orderID, bytes32 indexed _assetID, address indexed _creator);
  //LogExchange event LogBuyOrderCompleted(bytes32 _orderID, bytes32 indexed _assetAddress, address indexed _purchaser);
  //LogExchange event LogSellOrderCreated(bytes32 _orderID, bytes32 indexed _assetAddress, address indexed _creator);
  //LogExchange event LogSellOrderCompleted(bytes32 _orderID, bytes32 indexed _assetAddress, address indexed _purchaser);
  //LogOrder event LogBuyOrderDetails(bytes32 _orderID, uint indexed _amount, uint indexed _price);
  //LogOrder event LogSellOrderDetails(bytes32 orderID, uint indexed _amount, uint indexed _price);

  //AssetGenerator
  //LogAsset event LogAssetCreated(bytes32 indexed _assetID, address indexed _tokenAddress, address indexed _assetManager, string _tokenURI);
  //LogAsset event LogTradeableAssetCreated(bytes32 indexed _assetID, address indexed _tokenAddress, address indexed _assetManager, string _tokenURI);

  //PlatformFunds
  //LogAddress event LogPlatformWallet(address _platformWallet);
  //LogAddress event LogPlatformToken(address _platformToken);

  //AssetGovernance
  event LogConsensus(bytes32 votesID, uint votes, uint tokens, bytes32 executionID, uint quorum);

  //CollectiveOwned
  //LogTransaction event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, bytes32 indexed _beneficiary, bytes32 _authHash);

  //Pausible
  //LogTransaction event LogPaused(address indexed _contract, address _owner);
  //LogTransaction event LogUnpaused(address indexed _contract, address _owner);

  //SingleOwned
  //LogTransaction event OwnershipTransferred(address indexed owner, address indexed pendingOwner);

  //AssetManagerEscrow
  //LogEscrow event LogEscrowBurned(bytes32 indexed _assetID, address indexed _assetManager, uint _amountBurnt);
  //LogEscrow event LogEscrowLocked(bytes32 indexed _assetID, bytes32 indexed _assetManagerEscrowID, address indexed _assetManager, uint _amount);

  //Operators
  //LogOperator event LogOperatorRegistered(bytes32 indexed _operatorID, string _operatorURI);
  //LogOperator event LogOperatorRemoved(bytes32 indexed _operatorID, address _owner);
  //LogTransaction event LogOperatorAddressChanged(bytes32 indexed _operatorID, address _oldAddress, address _newAddress);
  //LogOperator event LogOperatorAcceptsToken(bytes32 indexed _operatorID, address _tokenAddress);

  //EqualDistribution
  //LogTransaction event LogPayment(address _sender, uint _amount);
  //LogTransaction event LogWithdraw(address _beneficiary, uint _amount);

  //MintableDistribution
  //LogTransaction event Mint(address indexed to, uint256 amount);
  //(LogEvent) event MintFinished();

  //StandardDistribution
  //LogTransaction event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
  //LogTransaction event LogIncomeCollected(uint _block, address _address, uint _amount);

  //DividendToken
  //LogTransaction event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
  //LogTransaction event LogIncomeCollected(address _address, uint _amount);

  //DividendTokenERC20
  //LogTransaction event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
  event LogCheckBalance(uint _difference);
  //LogTransaction event LogIncomeCollected(address _address, uint _amount);

  //MintableToken
  //LogTransaction event Mint(address indexed to, uint256 amount);
  //(LogEvent) event MintFinished();

*/

  // --------------------------------------------------------------------------------------
  // Caller must be registered as a contract through ContractManager.sol
  // --------------------------------------------------------------------------------------
  modifier onlyApprovedContract() {
      require(database.boolStorage(keccak256(abi.encodePacked("contract", msg.sender))));
      _;
  }

}
