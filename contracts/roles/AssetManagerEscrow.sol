pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../interfaces/VotingInterface.sol";
  import "../database/Events.sol";
  import "../database/API.sol";
  import "../interfaces/DivToken.sol";
  import "../interfaces/BurnableERC20.sol";

  interface Governance { function isConsensusReached(address _thisContract, bytes4 _methodID, bytes32 _parameterHash) external view returns (bool); }

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice AssetManager can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract AssetManagerEscrow {
    using SafeMath for uint256;

    DBInterface public database;
    Events public events;
    API public api;
    VotingInterface public votingProcess;

    //uint public consensus = 66;

    // @notice constructor: initializes database
    // @param: the address for the database contract used by this platform
    constructor(address _database, address _events)
    public {
      database = DBInterface(_database);
      events = Events(_events);
      api = API(database.addressStorage("contract", "API"));
    }

    // @dev assetID can be computed beforehand with sha3(_assetManager, _amountToRaise, _operatorID, _assetURI))
    // @dev anybody can make the assetManager escrow if he leaves this contract with approval to transfer
    function lockEscrow(address _assetAddress, address _assetManager, uint _amount)
    public
    returns (bool) {
      require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
      require(lockEscrowInternal(_assetManager, _assetAddress, _amount));
      return true;
    }



    // @notice assetManager can unlock his escrow here once funding fails or asset returns sufficient ROI
    // @dev asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc...
    function unlockEscrow(address _assetAddress, address _assetManager)
    public
    returns (bool) {
      require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
      require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetAddress))) == _assetManager);
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetAddress))) < now);
      BurnableERC20 burnToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", keccak256(abi.encodePacked("platformAssetID"))))));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID))).sub(escrowRedeemed);
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetAddress)))){
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        require(removeAssetManager(_assetAddress));
        require(removeEscrowData(assetManagerEscrowID));
      }
      else {
        //Past the deadline with a successful funding. Only pay back based on ROI
        DivToken assetToken = DivToken(_assetAddress);
        uint roi = assetToken.assetIncome().mul(100).div(assetToken.totalSupply());   // Scaled up by 10^2  (approaches 100 as asset income increases)
        uint roiCheckpoints = roi.div(25);       // How many quarterly increments have been reached?
        uint quarterEscrow = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID))).div(4);
        require(roiCheckpoints <= 4 && roiCheckpoints > 0);    // Can't unlock escrow past 100% ROI
        //  multiply the number of quarterly increments by a quarter of the escrow and subtract the escrow already redeemed.
        unlockAmount = roiCheckpoints.mul(quarterEscrow).sub(escrowRedeemed);
        require(unlockAmount > 0);
        database.setUint(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(unlockAmount));
      }
      require(burnToken.transfer(_assetManager, unlockAmount));
      return true;
    }


    // @notice investors can vote to call this function for the new assetManager to then call
    // @dev new assetManager must approve this contract to transfer in and lock _ amount of platform tokens
    function becomeAssetManager(address _assetAddress, address _newAssetManager, uint256 _amount, bool _withhold)
    external
    returns (bool) {
      //Check for approval
      require(msg.sender == _newAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _newAssetManager, msg.sender, address(this), msg.sig))));
      address currentAssetManager = database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetAddress)));
      require(hasConsensus(_assetAddress, msg.sig, keccak256(abi.encodePacked(_assetAddress, currentAssetManager, _newAssetManager, _amount, _withhold))));
      require(currentAssetManager != _newAssetManager);
      //Remove current asset manager
      require(removeAssetManager(_assetAddress));
      if(!_withhold){
        processEscrow(_assetAddress, currentAssetManager);
      }
      require(lockEscrowInternal(_newAssetManager, _assetAddress, _amount));
      return true;
    }

    function returnEscrow(address _assetAddress, address _oldAssetManager, address _currentAssetManager)
    external
    {
      require(msg.sender == _currentAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _currentAssetManager, msg.sender, address(this), msg.sig))));
      require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetAddress))) == _currentAssetManager);
      processEscrow(_assetAddress, _oldAssetManager, false);
    }

    function burnEscrow(address _assetAddress, uint _amountToBurn)
    public
    returns (bool) {
      BurnableERC20 platformToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      BurnableERC20 assetToken = DivToken(_assetAddress);
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetAddress)))));
      bytes32 stakeID = keccak256(abi.encodePacked("proposal.stake", _proposalID, proposer));
      bytes32 commitmentID = keccak256(abi.encodePacked("commitment.value", token, msg.sender));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID))).sub(escrowRedeemed);
      require(unlockAmount >= _amountToBurn, "asset manager has no escrow left");
      uint256 selfBurnAmount = _amountToBurn.mul(database.uintStorage(keccak256(abi.encodePacked("platform.burnrate"))));
      require(assetToken.balanceOf(msg.sender) >= selfBurnAmount);
      database.setUint(keccak256(abi.encodePacked("escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(_amountToBurn));
      require(ERC20(assetToken).burnFrom(selfBurnAmount));  // burn both proposer and token holder tokens
      require(ERC20(platformToken).burn(_amountToBurn));
      database.setUint(stakeID, proposerStake.sub(_amountToBurn));   // reduce stake amount
      database.setUint(commitmentID, database.uintStorage(commitmentID).sub(_amountToBurn));   // reduce commitment amount
      return true;
    }

    // @notice platform owners can destroy contract here
    function destroy()
    onlyOwner
    external {
      events.transaction('AssetManagerEscrow destroyed', address(this), msg.sender, address(this).balance, '');
      selfdestruct(msg.sender);
    }

    // @notice returns true if vote quorum and vote threshold are reached
    function hasConsensus(bytes32)
    public
    view
    returns (bool){
      bytes32 parameterHash = keccak256(abi.encodePacked(user, token, tokens));
      bytes32 proposalID = keccak256(abi.encodePacked(token, address(this), msg.sig, parameterHash));
      address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID)));
      uint approval = api.proposalApproval(proposalID);
      uint quorum = (approval * 100) / database.uintStorage(keccak256(abi.encodePacked("proposal.votecount", proposalID)));   // what percentage approved ??
      bool quorumReached = quorum >= database.uintStorage(keccak256(abi.encodePacked("asset.quorum", token)));
      uint totalSupply = Token(token).totalSupply();
      bool thresholdReached = ( (api.proposalVoteCount(proposalID) * 100) / totalSupply ) >= api.assetThreshold(token);
      return quorumReached && thresholdReached;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                            Internal/ Private Functions
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function processEscrow(address _assetAddress, address _oldAssetManager)
    private
    {
      bytes32 oldAssetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _oldAssetManager));
      uint oldEscrowRemaining = database.uintStorage(keccak256(abi.encodePacked("assetManagerEscrow", oldAssetManagerEscrowID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", oldAssetManagerEscrowID))));
      require(removeEscrowData(oldAssetManagerEscrowID));
      require(token.transfer(_oldAssetManager, oldEscrowRemaining));
    }

    function removeAssetManager(address _assetAddress)
    private
    returns (bool) {
        database.deleteAddress(keccak256(abi.encodePacked("assetManager", _assetAddress)));
        return true;
    }

    function removeEscrowData(bytes32 _assetManagerEscrowID)
    private
    returns (bool) {
        database.deleteUint(keccak256(abi.encodePacked("assetManagerEscrow", _assetManagerEscrowID)));
        database.deleteUint(keccak256(abi.encodePacked("escrowRedeemed", _assetManagerEscrowID)));
        return true;
    }


    function lockEscrowInternal(address _assetManager, address _assetAddress, uint _amount)
    private
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("assetManager", _assetAddress))) == address(0));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", keccak256(abi.encodePacked("platformAssetID")))));
      require(BurnableERC20(tokenAddress).transferFrom(_assetManager, address(this), _amount));
      database.setUint(keccak256(abi.encodePacked("assetManagerEscrow", assetManagerEscrowID)), _amount);
      database.setAddress(keccak256(abi.encodePacked("assetManager", _assetAddress)), _assetManager);
      events.escrow('Escrow locked', _assetAddress, assetManagerEscrowID, _assetManager, _amount);
      //emit LogEscrowLocked(_assetAddress, assetManagerEscrowID, _assetManager, _amount);
      return true;
    }



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // @notice This modifier checks is msg.sender has approval to call the function
    modifier hasApproval(address _approver, bytes4 _sig){
      require(msg.sender == _approver || database.boolStorage(keccak256(abi.encodePacked("approval", _approver, msg.sender, address(this), _sig))));
      _;
    }

    // @notice reverts if caller is not the owner
    modifier onlyOwner {
      require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
      _;
    }

    /*
    event LogConsensus(bytes32 votesID, uint votes, uint tokens, bytes32 executionID, uint quorum);
    event LogEscrowBurned(bytes32 indexed _assetAddress, address indexed _assetManager, uint _amountBurnt);
    event LogEscrowLocked(bytes32 indexed _assetAddress, bytes32 indexed _assetManagerEscrowID, address indexed _assetManager, uint _amount);
    */
}
