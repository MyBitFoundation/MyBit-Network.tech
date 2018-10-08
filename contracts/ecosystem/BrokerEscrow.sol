  pragma solidity ^0.4.24;

  import "../math/SafeMath.sol";
  import "../interfaces/DBInterface.sol";
  import "../interfaces/DivToken.sol";
  import "../interfaces/BurnableERC20.sol";
  import "./ERC20Burner.sol";

  // @title A contract to hold escrow as collateral against assets
  // @author Kyle Dewhurst, MyBit Foundation
  // @notice Broker can lock his escrow in this contract and retrieve it if asset funding fails or successfully returns ROI
  contract BrokerEscrow {
    using SafeMath for uint256;

    DBInterface public database;

    // @notice constructor: initializes database
    // @param: the address for the database contract used by this platform
    constructor(address _database)
    public {
      database = DBInterface(_database);
    }

    // @dev assetID can be computed beforehand with sha3(msg.sender, _amountToRaise, _operatorID, _assetURI))
    function lockEscrow(bytes32 _assetID, uint _amount)
    external
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == address(0));
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
      require(BurnableERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount));
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)), _amount);
      database.setAddress(keccak256(abi.encodePacked("assetEscrower", _assetID)), msg.sender);
      return true;
    }

    // @notice broker can increase how many tokens he locks for escrow
    function increaseEscrow(bytes32 _assetID, uint _amount)
    external
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == msg.sender);
      address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
      require(BurnableERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount));
      uint escrowAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID)));
      database.setUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)), escrowAmount.add(_amount));
      return true;
    }

    // TODO: make a cancel escrow function


    // @notice broker can unlock his escrow here once funding fails or asset returns sufficient ROI 
    // @dev asset must have fundingDeadline = 0 or have ROI > 25%
    // @dev returns escrow according to ROI. 25% ROI returns 25% of escrow, 50% ROI returns 50% of escrow etc...
    function unlockEscrow(bytes32 _assetID)
    external
    returns (bool) {
      require(database.addressStorage(keccak256(abi.encodePacked("assetEscrower", _assetID))) == msg.sender);
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))) < now);
      BurnableERC20 burnToken = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      uint unlockAmount;
      if(!database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)))){
        //If we're past deadline but crowdsale did NOT finalize, release all escrow
        unlockAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID)));
        database.deleteAddress(keccak256(abi.encodePacked("assetEscrower", _assetID)));
        database.deleteUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)));
      }
      else {
        //Past the deadline with a successful funding. Only pay back based on ROI
        DivToken assetToken = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
        uint assetIncome = assetToken.assetIncome();
        uint brokerCut = assetIncome.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("brokerFee", _assetID))));
        uint totalReturns = assetIncome.sub(brokerCut);
        uint quarter = assetToken.totalSupply().div(4);    // TODO: subtract broker fee as well?
        uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _assetID)));
        unlockAmount = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))).div(4);
        require(totalReturns.sub(escrowRedeemed) >= quarter);
        database.setUint(keccak256(abi.encodePacked("escrowRedeemed", _assetID)), escrowRedeemed.add(unlockAmount));
      }
      require(burnToken.transfer(msg.sender, unlockAmount));
      return true;
    }

    // @notice investors can vote to call this function and burn the brokers escrow for negligence
    function burnEscrow(bytes32 _assetID)
    external
    onlyAssetGovernance
    returns (bool) {
      uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _assetID))).sub(database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _assetID))));
      BurnableERC20 token = BurnableERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
      require(token.burn(amountToBurn));
      database.deleteUint(keccak256(abi.encodePacked("brokerEscrow", _assetID)));
      database.deleteAddress(keccak256(abi.encodePacked("assetEscrower", _assetID)));
      return true;
    }

    modifier onlyAssetGovernance {
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "AssetGovernance"))));
      _;
    }



    event LogEscrowBurned(bytes32 indexed _assetID, address _broker, uint _amountBurnt);
    event LogEscrowLocked(bytes32 indexed _assetID, address indexed _operator, uint _amount);

}
