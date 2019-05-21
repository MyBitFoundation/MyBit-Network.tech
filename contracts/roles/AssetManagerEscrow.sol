pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../database/Events.sol";
  import "../interfaces/EscrowReserveInterface.sol";

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
    function balanceOf(address _user) external view returns (uint);
  }

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice AssetManager can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract AssetManagerEscrow {

    using SafeMath for uint256;

    DBInterface public database;
    Events public events;
    EscrowReserveInterface private reserve;

    //uint public consensus = 66;

    // @notice constructor: initializes database
    // @param: the address for the database contract used by this platform
    constructor(address _database, address _events)
    public {
      database = DBInterface(_database);
      events = Events(_events);
      reserve = EscrowReserveInterface(database.addressStorage(keccak256(abi.encodePacked("contract", "EscrowReserve"))));
    }

    // @dev anybody can make the assetManager escrow if he leaves this contract with approval to transfer
    function lockEscrow(address _assetAddress, address _assetManager, uint _amount)
    public
    hasApproval(_assetManager, msg.sig)
    returns (bool) {
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
      //require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))) < now, 'Before crowdsale deadline');
      address platformToken = database.addressStorage(keccak256(abi.encodePacked("platform.token")));
      uint totalEscrow = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID)));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = totalEscrow.sub(escrowRedeemed);
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress)))){
        require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))) < now);
        //Crowdsale failed, return escrow
        emit NotFinalized();
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        require(removeAssetManager(_assetAddress));
        require(removeEscrowData(assetManagerEscrowID));
        require(reserve.issueERC20(_assetManager, unlockAmount, platformToken));
        return true;
      } else {
        //Crowdsale finalized. Only pay back based on ROI
        AssetManagerEscrow_DivToken token = AssetManagerEscrow_DivToken(_assetAddress);
        uint roiPercent = token.assetIncome().mul(100).div(token.totalSupply());   // Scaled up by 10^2  (approaches 100 as asset income increases)
        uint roiCheckpoints = roiPercent.div(25);       // How many quarterly increments have been reached?
        emit ROICheckpoint(roiCheckpoints);
        require(roiCheckpoints > 0);
        if(roiCheckpoints <= 4){
          // Can't unlock escrow past 100% ROI
          //  multiply the number of quarterly increments by a quarter of the escrow and subtract the escrow already redeemed.
          uint quarterEscrow = totalEscrow.div(4);
          unlockAmount = roiCheckpoints.mul(quarterEscrow).sub(escrowRedeemed);
        }
        require(unlockAmount > 0);
        database.setUint(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(unlockAmount));
        require(reserve.issueERC20(_assetManager, unlockAmount, platformToken));
        return true;
      }
    }


    // @notice investors can vote to call this function for the new assetManager to then call
    // @dev new assetManager must approve this contract to transfer in and lock _ amount of platform tokens
    function changeAssetManager(address _assetAddress, address _newAssetManager, uint256 _amount, bool _withhold)
    external
    returns (bool) {
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("asset.dao.admin", _assetAddress))), "Only the asset DAO adminstration contract may change the asset manager");
      address currentAssetManager = database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)));
      require(currentAssetManager != _newAssetManager, "New asset manager is the same");
      //Remove current asset manager
      require(removeAssetManager(_assetAddress), 'Asset manager not removed');
      database.setAddress(keccak256(abi.encodePacked("asset.manager", _assetAddress)), _newAssetManager);
      if(!_withhold){
        processEscrow(_assetAddress, currentAssetManager);
      }
      require(lockEscrowInternal(_newAssetManager, _assetAddress, _amount), 'Failed to lock escrow');
      return true;
    }

    function returnEscrow(address _assetAddress, address _oldAssetManager, address _currentAssetManager)
    external
    {
      require(msg.sender == _currentAssetManager || database.boolStorage(keccak256(abi.encodePacked("approval", _currentAssetManager, msg.sender, address(this), msg.sig))), 'User not approved');
      require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))) == _currentAssetManager);
      processEscrow(_assetAddress, _oldAssetManager);
    }

    function voteToBurn(address _assetAddress)
    external
    returns (bool) {
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("asset.dao.admin", _assetAddress))), "Only the asset DAO adminstration contract may change the asset manager");
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)))));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).sub(escrowRedeemed);
      require(reserve.burnERC20(unlockAmount, database.addressStorage(keccak256(abi.encodePacked("platform.token"))))); // burn manager tokens
      database.setUint(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)), database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))));  // mark burned _assetAddresss as redeemed
      return true;
    }

    /*
    //Burn platform tokens to unilaterally burn asset manager's escrow
    function mutualBurn(address _assetAddress, uint _amountToBurn)
    external
    returns (bool) {
      require(AssetManagerEscrow_DivToken(_assetAddress).balanceOf(msg.sender) > 0, 'Must be an asset holder');
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress)))));
      uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)));
      uint unlockAmount = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))).sub(escrowRedeemed);
      require(unlockAmount >= _amountToBurn, "asset manager has no escrow left");
      uint256 selfBurnAmount = _amountToBurn.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("platform.burnRate"))));
      AssetManagerEscrow_ERC20 platformToken = AssetManagerEscrow_ERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
      require(platformToken.balanceOf(msg.sender) >= selfBurnAmount);
      require(platformToken.burnFrom(msg.sender, selfBurnAmount));  // burn investor tokens
      require(reserve.burnERC20(_amountToBurn, address(platformToken))); // burn manager tokens
      database.setUint(keccak256(abi.encodePacked("asset.escrowRedeemed", assetManagerEscrowID)), escrowRedeemed.add(_amountToBurn));  // mark burned _assetAddresss as redeemed
      events.escrow('Escrow mutually burned', _assetAddress, assetManagerEscrowID, msg.sender, _amountToBurn);
      return true;
    }
    */

    // @notice platform owners can destroy contract here
    function destroy()
    onlyOwner
    external {
      events.transaction('AssetManagerEscrow destroyed', address(this), msg.sender, address(this).balance, address(0));
      selfdestruct(msg.sender);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                            Internal/ Private Functions
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function processEscrow(address _assetAddress, address _oldAssetManager)
    private
    {
      bytes32 oldAssetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _oldAssetManager));
      uint oldEscrowRemaining = database.uintStorage(keccak256(abi.encodePacked("asset.escrow", oldAssetManagerEscrowID))).sub(database.uintStorage(keccak256(abi.encodePacked("asset.escrowRedeemed", oldAssetManagerEscrowID))));
      require(removeEscrowData(oldAssetManagerEscrowID), 'Remove escrow data failed');
      if(oldEscrowRemaining > 0){
        require(reserve.issueERC20(_oldAssetManager, oldEscrowRemaining, database.addressStorage(keccak256(abi.encodePacked("platform.token")))), 'Funds not returned');
      }
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
      require(_assetManager == database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))));
      bytes32 assetManagerEscrowID = keccak256(abi.encodePacked(_assetAddress, _assetManager));
      require(database.uintStorage(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID))) == 0, 'Asset escrow already set');
      AssetManagerEscrow_ERC20 platformToken = AssetManagerEscrow_ERC20(database.addressStorage(keccak256(abi.encodePacked("platform.token"))));
      require(platformToken.transferFrom(_assetManager, address(reserve), _amount));
      database.setUint(keccak256(abi.encodePacked("asset.escrow", assetManagerEscrowID)), _amount);
      events.escrow('Escrow locked', _assetAddress, assetManagerEscrowID, _assetManager, _amount);
      return true;
    }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // @notice This modifier checks is msg.sender has approval to call the function
    modifier hasApproval(address _approver, bytes4 _sig){
      require(msg.sender == _approver || database.boolStorage(keccak256(abi.encodePacked("approval", _approver, msg.sender, address(this), _sig))), "User not approved");
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
