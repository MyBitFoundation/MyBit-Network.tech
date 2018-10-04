pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";
import "../interfaces/DivToken.sol";
import "../ownership/TokenOwned.sol"; 
import "./BrokerEscrow.sol";     // TODO: just import burnEscrow() interface 
import "./ERC20Burner.sol";

// @title A contract to manage the governance of assets on the platform
// @author Kyle Dewhurst, MyBit Foundation
// @notice All token holders of an asset can vote here
// TODO: Take snapshot of balances, when vote begins 
contract AssetGovernance {
  using SafeMath for uint256;

  DBInterface public database; 

  constructor(address _database)
  public { 
    database = DBInterface(_database); 
  }


  function initiateGovernance(bytes32 _assetID)
  external 
  returns (bool) { 
    return true; 
  }


  function changeBroker(bytes32 _assetID)
  external 
  returns (bool) { 
    return true; 

  }

  function fireBroker(bytes32 _assetID)
  external 
  returns (bool) { 
    return true;
  }

  // TODO: Possibly create functionality to mint more tokens to cover repair costs
  //       -------> would need to restructure minting authority
  // function mintTokens(bytes32 _assetID)
  // external 
  // returns (bool) { 
  //   return true; 
  // }

}
