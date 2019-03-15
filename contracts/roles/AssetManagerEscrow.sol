pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../database/Events.sol";

  interface AssetManagerEscrow_ERC20 {
    function transfer(address _to, uint256 _value) external returns (bool);
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
    function burn(uint _amount) external returns (bool);
    function burnFrom(address _user, uint _amount) external returns (bool);
    function balanceOf(address _user) external view returns (uint);
  }

  interface AssetManagerEscrow_DivToken {
    function totalSupply() external view returns (uint);
    function assetIncome() external view returns (uint);
  }

  interface Consensus { function hasConsensus(address _assetAddress, bytes4 methodID, bytes32 parameterHash) external view returns (bool); }

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
    function lockEscrow(address _assetAddress, address _assetManager, uint _amount)
    public
    returns (bool) {
      require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))), 'User not approved');
      require(lockEscrowInternal(_assetManager, _assetAddress, _amount));
      return true;
    }



    // @notice assetManager can unlock his escrow here once funding fails or asset returns sufficient ROI
    // @dev asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc...
    function unlockEscrow(address _assetAddress, address _assetManager)
    public
    returns (bool) {
      require(msg.sender == _assetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _assetManager, msg.sender, address(this), msg.sig))), 'User not approved');
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
      require(database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))) != 0, 'Asset escrow is zero');
      require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))) < now, 'Before crowdsale deadline');
      AssetManagerEscrow_ERC20 burnToken = AssetManagerEscrow_ERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).sub(escrowRedeemed);
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress)))){
        emit NotFinalized();
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        require(removeAssetManager(_assetAddress));
        require(removeEscrowData(assetManagerEscrowID));
      }
      else {
        //Past the deadline with a successful funding. Only pay back based on ROI
        AssetManagerEscrow_DivToken token = AssetManagerEscrow_DivToken(_assetAddress);
        uint roi = token.assetIncome().mul(100).div(token.totalSupply());   // Scaled up by 10^2  (approaches 100 as asset income increases)
        uint roiCheckpoints = roi.div(25);       // How many quarterly increments have been reached?
        emit ROICheckpoint(roiCheckpoints);
        require(roiCheckpoints <= 4 && roiCheckpoints > 0);    // Can't unlock escrow past 100% ROI
        //  multiply the number of quarterly increments by a quarter of the escrow and subtract the escrow already redeemed.
        uint quarterEscrow = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).div(4);
        unlockAmount = roiCheckpoints.mul(quarterEscrow).sub(escrowRedeemed);
        require(unlockAmount > 0);
        database.setUint(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(unlockAmount));
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
      require(msg.sender == _newAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _newAssetManager, msg.sender, address(this), msg.sig))), 'User not approved');
      address currentAssetManager = database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)));
      require(passed(_assetAddress, msg.sig, keccak256(abi.encodePacked(_assetAddress, currentAssetManager, _newAssetManager, _amount, _withhold))));
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
      require(msg.sender == _currentAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _currentAssetManager, msg.sender, address(this), msg.sig))), 'User not approved');
      require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))) == _currentAssetManager);
      processEscrow(_assetAddress, _oldAssetManager);
    }

    function burnEscrow(address _assetAddress, uint _amountToBurn)
    public
    returns (bool) {
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)))));
      bytes32 commitmentID = keccak256(abi.encodePacked("commitment.value", _assetAddress, msg.sender));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).sub(escrowRedeemed);
      require(unlockAmount >= _amountToBurn, "asset manager has no escrow left");
      uint256 selfBurnAmount = _amountToBurn.mul(database.uintStorage(keccak256(abi.encodePacked("platform.burnRate"))));
      require(AssetManagerEscrow_ERC20(_assetAddress).balanceOf(msg.sender) >= selfBurnAmount);
      require(AssetManagerEscrow_ERC20(_assetAddress).burnFrom(msg.sender, selfBurnAmount));  // burn investor tokens
      require(AssetManagerEscrow_ERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token")))).burn(_amountToBurn));  // burn manager tokens
      database.setUint(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(_amountToBurn));  // mark burned _assetAddresss as redeemed
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
    function passed(address _assetAddress, bytes4 methodID, bytes32 parameterHash)
    public
    view
    returns (bool){
      address governanceContract = database.addressStorage(keccak256(abi.encodePacked("asset.governance")));
      return Consensus(governanceContract).hasConsensus(_assetAddress, methodID, parameterHash);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                            Internal/ Private Functions
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function processEscrow(address _assetAddress, address _oldAssetManager)
    private
    {
      bytes32 oldAssetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _oldAssetManager));
      uint oldEscrowRemaining = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", oldAssetManagerEscrowID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", oldAssetManagerEscrowID))));
      require(removeEscrowData(oldAssetManagerEscrowID));
      require(AssetManagerEscrow_ERC20(_assetAddress).transfer(_oldAssetManager, oldEscrowRemaining));
    }

    function removeAssetManager(address _assetAddress)
    private
    returns (bool) {
        database.deleteAddress(keccak256(abi.encodePacked("asset.manager", _assetAddress)));
        return true;
    }

    function removeEscrowData(bytes32 _assetManagerEscrowID)
    private
    returns (bool) {
        database.deleteUint(keccak256(abi.encodePacked("asset.escrow", _assetManagerEscrowID)));
        database.deleteUint(keccak256(abi.encodePacked("asset.escrowRedeemed", _assetManagerEscrowID)));
        return true;
    }

    function lockEscrowInternal(address _assetManager, address _assetAddress, uint _amount)
    private
    returns (bool) {
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
      require(database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))) == 0, 'Asset escrow already set');
      address platformToken = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
      require(AssetManagerEscrow_ERC20(platformToken).transferFrom(_assetManager, address(this), _amount));
      database.setUint(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID)), _amount);
      events.escrow('Escrow locked', _assetAddress, assetManagerEscrowID, _assetManager, _amount);
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

    event NotFinalized();
    event ROICheckpoint(uint checkpoint);
    /*
    event LogConsensus(bytes32 votesID, uint votes, uint _assetAddresss, bytes32 executionID, uint quorum);
    event LogEscrowBurned(bytes32 indexed _assetAddress, address indexed _assetManager, uint _amountBurnt);
    event LogEscrowLocked(bytes32 indexed _assetAddress, bytes32 indexed _assetManagerEscrowID, address indexed _assetManager, uint _amount);
    */
}
