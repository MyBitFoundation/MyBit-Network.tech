pragma solidity 0.4.24;
import "./API.sol";
import "./MyBitToken.sol";
import "./SafeMath.sol";
contract AssetCollateral{
  using SafeMath for uint;
  API api;
  MyBitToken myb;
  address public owner;
  mapping(bytes32 => uint) public totalEscrow;
  mapping(bytes32 => uint) public escrowWithdrawn;
  mapping(bytes32 => bool) public escrowBool;
  mapping(bytes32 => address) public assetManager;
  constructor(address _api, address _myb) public{
    owner = msg.sender;
    api = API(_api);
    myb = MyBitToken(_myb);
  }
  function lockEscrow(bytes32 _assetID, address _assetManager, uint _escrow)
  external
  returns (bool){
    require(msg.sender == owner);
    require(!escrowBool[keccak256(abi.encodePacked(_assetID, _assetManager))]);
    escrowBool[keccak256(abi.encodePacked(_assetID, _assetManager))] = true;
    assetManager[_assetID] = _assetManager;
    totalEscrow[_assetID] = _escrow;
  }
  function withdrawEscrow(bytes32 _assetID)
  external
  returns (bool) {
    require(assetManager[_assetID] == msg.sender);
    uint unlockAmount = unlockedEscrow(_assetID);
    require(unlockAmount > 0);
    escrowWithdrawn[_assetID] = escrowWithdrawn[_assetID].add(unlockAmount);
    require(myb.transfer(msg.sender, unlockAmount));
    return true;
  }
  function unlockedEscrow(bytes32 _assetID)
  view
  public
  returns (uint){
    uint roi = api.assetIncome(_assetID).mul(100).div(api.amountRaised(_assetID));
    uint roiCheckpoints = roi.div(25);
    if(roiCheckpoints > 4) return totalEscrow[_assetID].sub(escrowWithdrawn[_assetID]);
    if(roiCheckpoints <= 4 && roiCheckpoints > 0){
      uint quarterEscrow = totalEscrow[_assetID].div(4);
      uint unlockAmount = roiCheckpoints.mul(quarterEscrow).sub(escrowWithdrawn[_assetID]);
      return unlockAmount;
    }
    else{
      return 0;
    }
  }
  function remainingEscrow(bytes32 _assetID)
  view
  public
  returns (uint){
    return totalEscrow[_assetID].sub(escrowWithdrawn[_assetID]);
  }
  function redeemedEscrow(bytes32 _assetID)
  view
  public
  returns (uint) {
    return escrowWithdrawn[_assetID];
  }
  function roiEscrow(bytes32 _assetID)
  view
  public
  returns (uint) {
    uint roi = api.assetIncome(_assetID).mul(100).div(api.amountRaised(_assetID));
    return totalEscrow[_assetID].getFractionalAmount(roi);
  }
  function changeOwner(address _newOwner)
  external {
      require(msg.sender == owner); 
      owner = _newOwner;
  }
}
