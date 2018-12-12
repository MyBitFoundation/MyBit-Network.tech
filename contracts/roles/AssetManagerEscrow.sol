pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../database/Events.sol";

  interface ERC20 {
    function transfer(address _to, uint256 _value) external returns (bool);
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
    function totalSupply() external view returns (uint);
    function burn(uint _amount) external returns (bool);
    function burnFrom(address _user, uint _amount) external returns (bool);
    function assetIncome() external view returns (uint);
    function balanceOf(address _user) external view returns (uint);
  }

  interface Consensus { function hasConsensus(address assetToken, bytes4 methodID, bytes32 parameterHash) external view returns (bool); }

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice AssetManager can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract AssetManagerEscrow {
    using SafeMath for uint256;

    DBInterface public database;
    Events public events;

    //uint public consensus = 66;

    // @notice constructor: initializes database
    // @param: the address for the database contract used by this platform
    constructor(address _database, address _events)
    public {
      database = DBInterface(_database);
      events = Events(_events);
    }

    // @dev assetID can be computed beforehand with sha3(_assetManager, _amountToRaise, _operatorID, _assetURI))
    // @dev anybody can make the assetManager escrow if he leaves this contract with approval to transfer
    function lockEscrow(address assetToken, address _assetManager, uint _amount)
    public
    returns (bool) {
      require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
      require(lockEscrowInternal(_assetManager, assetToken, _amount));
      return true;
    }



    // @notice assetManager can unlock his escrow here once funding fails or asset returns sufficient ROI
    // @dev asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc...
    function unlockEscrow(address assetToken, address _assetManager)
    public
    returns (bool) {
      require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))));
      require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", assetToken))) == _assetManager);
      require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", assetToken))) < now);
      ERC20 burnToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(assetToken, _assetManager));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrow.redeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).sub(escrowRedeemed);
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", assetToken)))){
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        require(removeAssetManager(assetToken));
        require(removeEscrowData(assetManagerEscrowID));
      }
      else {
        //Past the deadline with a successful funding. Only pay back based on ROI
        ERC20 token = ERC20(assetToken);
        uint roi = token.assetIncome().mul(100).div(token.totalSupply());   // Scaled up by 10^2  (approaches 100 as asset income increases)
        uint roiCheckpoints = roi.div(25);       // How many quarterly increments have been reached?
        uint quarterEscrow = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).div(4);
        require(roiCheckpoints <= 4 && roiCheckpoints > 0);    // Can't unlock escrow past 100% ROI
        //  multiply the number of quarterly increments by a quarter of the escrow and subtract the escrow already redeemed.
        unlockAmount = roiCheckpoints.mul(quarterEscrow).sub(escrowRedeemed);
        require(unlockAmount > 0);
        database.setUint(keccak256(abi.encodePacked("asset.escrowredeemed", assetManagerEscrowID)), escrowRedeemed.add(unlockAmount));
      }
      require(burnToken.transfer(_assetManager, unlockAmount));
      return true;
    }


    // @notice investors can vote to call this function for the new assetManager to then call
    // @dev new assetManager must approve this contract to transfer in and lock _ amount of platform tokens
    function becomeAssetManager(address assetToken, address _newAssetManager, uint256 _amount, bool _withhold)
    external
    returns (bool) {
      //Check for approval
      require(msg.sender == _newAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _newAssetManager, msg.sender, address(this), msg.sig))));
      address currentAssetManager = database.addressStorage(keccak256(abi.encodePacked("asset.manager", assetToken)));
      require(passed(assetToken, msg.sig, keccak256(abi.encodePacked(assetToken, currentAssetManager, _newAssetManager, _amount, _withhold))));
      require(currentAssetManager != _newAssetManager);
      //Remove current asset manager
      require(removeAssetManager(assetToken));
      if(!_withhold){
        processEscrow(assetToken, currentAssetManager);
      }
      require(lockEscrowInternal(_newAssetManager, assetToken, _amount));
      return true;
    }

    function returnEscrow(address assetToken, address _oldAssetManager, address _currentAssetManager)
    external
    {
      require(msg.sender == _currentAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _currentAssetManager, msg.sender, address(this), msg.sig))));
      require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", assetToken))) == _currentAssetManager);
      processEscrow(assetToken, _oldAssetManager);
    }

    function burnEscrow(address assetToken, uint amountToBurn)
    public
    returns (bool) {
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(assetToken, database.addressStorage(keccak256(abi.encodePacked("asset.manager", assetToken)))));
      bytes32 commitmentID = keccak256(abi.encodePacked("commitment.value", assetToken, msg.sender));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).sub(escrowRedeemed);
      require(unlockAmount >= amountToBurn, "asset manager has no escrow left");
      uint256 selfBurnAmount = amountToBurn.mul(database.uintStorage(keccak256(abi.encodePacked("platform.burnrate"))));
      require(ERC20(assetToken).balanceOf(msg.sender) >= selfBurnAmount);
      require(ERC20(assetToken).burnFrom(msg.sender, selfBurnAmount));  // burn investor tokens
      require(ERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token")))).burn(amountToBurn));  // burn manager tokens
      database.setUint(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(amountToBurn));  // mark burned assetTokens as redeemed
      database.setUint(commitmentID, database.uintStorage(commitmentID).sub(selfBurnAmount));   // reduce commitment amount
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
    function passed(address assetToken, bytes4 methodID, bytes32 parameterHash)
    public
    view
    returns (bool){
      address governanceContract = database.addressStorage(keccak256(abi.encodePacked("asset.governance")));
      return Consensus(governanceContract).hasConsensus(assetToken, methodID, parameterHash);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                            Internal/ Private Functions
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function processEscrow(address assetToken, address _oldAssetManager)
    private
    {
      bytes32 oldAssetManagerEscrowID = keccak256(abi.encodePacked(assetToken, _oldAssetManager));
      uint oldEscrowRemaining = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", oldAssetManagerEscrowID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", oldAssetManagerEscrowID))));
      require(removeEscrowData(oldAssetManagerEscrowID));
      require(ERC20(assetToken).transfer(_oldAssetManager, oldEscrowRemaining));
    }

    function removeAssetManager(address assetToken)
    private
    returns (bool) {
        database.deleteAddress(keccak256(abi.encodePacked("asset.manager", assetToken)));
        return true;
    }

    function removeEscrowData(bytes32 _assetManagerEscrowID)
    private
    returns (bool) {
        database.deleteUint(keccak256(abi.encodePacked("asset.escrow", _assetManagerEscrowID)));
        database.deleteUint(keccak256(abi.encodePacked("asset.escrowredeemed", _assetManagerEscrowID)));
        return true;
    }


    function lockEscrowInternal(address _assetManager, address assetToken, uint _amount)
    private
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", assetToken))) == address(0));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(assetToken, _assetManager));
      address platformToken = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
      require(ERC20(platformToken).transferFrom(_assetManager, address(this), _amount));
      database.setUint(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID)), _amount);
      database.setAddress(keccak256(abi.encodePacked("asset.manager", assetToken)), _assetManager);
      // events.escrow('Escrow locked', assetToken, assetManagerEscrowID, _assetManager, _amount);
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
    event LogConsensus(bytes32 votesID, uint votes, uint assetTokens, bytes32 executionID, uint quorum);
    event LogEscrowBurned(bytes32 indexed assetToken, address indexed _assetManager, uint _amountBurnt);
    event LogEscrowLocked(bytes32 indexed assetToken, bytes32 indexed _assetManagerEscrowID, address indexed _assetManager, uint _amount);
    */
}
