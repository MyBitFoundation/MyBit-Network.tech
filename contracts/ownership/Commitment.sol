pragma solidity ^0.4.24;


import "../math/SafeMath.sol";
import "../database/Events.sol";

interface ERC20 {
  function transfer(address _to, uint256 _value) external returns (bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function boolStorage(bytes32 _key) external view returns (bool);
  function deleteUint(bytes32 _key) external;
  function setBool(bytes32 _key, bool _bool) external;
  function setUint(bytes32 _key, uint _value) external;
  function setBytes32(bytes32 _key, bytes32 _value) external;
  function setAddress(bytes32 _key, address _value) external;
}

contract Commitment {
  using SafeMath for uint256;

  DB public database;
  Events public events;


  constructor(address _database, address _events)
  public {
    database = DB(_database);
    events = Events(_events);
  }


  /**
  * Commit MYB to voting
  * @notice Commits specified amount of your MYB to voting.
  * @dev Fails if you already have an active commitment. Emits Commit on success.
  * @param _value - MYB amount to commit.
  */
  function commit(uint256 _value, address _token)
  external {
    require(_value > 0, "Non zero value required");
    require(commitmentAge(msg.sender, _token) == 0, "commitment already made");
    require(database.uintStorage(keccak256(abi.encodePacked("commitment.releasetime", _token, msg.sender))) == 0);
    require(database.boolStorage(keccak256(abi.encodePacked("token.governed", _token))));
    require(ERC20(_token).transferFrom(msg.sender, address(this), _value), "transferFrom failed");
    database.setUint(keccak256(abi.encodePacked("commitment.value",  _token, msg.sender)), _value);
    database.setUint(keccak256(abi.encodePacked("commitment.start", _token, msg.sender)), now);
    emit Commit(msg.sender, _value);
  }

  // @notice token holder can signal their commitment to be withdrawn after proposal time has elapsed
  // @param _tokenHolder : the address of the tokenholder to cancelCommitment
  function cancelCommitment(address _token)
  external
  returns (bool){
    require(commitmentAge(msg.sender, _token) > 0, "token holder hasnt committed tokens");
    bytes32 releaseTimeID = keccak256(abi.encodePacked("commitment.releasetime", _token, msg.sender));
    require(now < database.uintStorage(releaseTimeID));
    database.deleteUint(keccak256(abi.encodePacked("commitment.start", _token, msg.sender)));   // remove reference to start date which is the authortiy check
    database.setUint(releaseTimeID, now.add(database.uintStorage(keccak256(abi.encodePacked("token.voteduration")))));
    return true;
  }


  // @notice Withdraws all of your committed MYB to the original address.
  // @dev Fails if your commitment is locked.
  function withdrawTokens(address _tokenHolder, address _token)
  external
  returns (bool){
    require(commitmentAge(_tokenHolder, _token) > 0, "token holder hasnt committed tokens");
    bytes32 releaseTimeID = keccak256(abi.encodePacked("commitment.releasetime", _token, _tokenHolder));
    uint releaseTime = database.uintStorage(releaseTimeID);
    require(now > releaseTime && releaseTime > 0);
    database.deleteUint(releaseTimeID);
    bytes32 commitmentValueID = keccak256(abi.encodePacked("commitment.value", _tokenHolder));
    uint256 value = database.uintStorage(commitmentValueID);
    database.deleteUint(commitmentValueID);
    require(ERC20(_token).transfer(_tokenHolder, value));
    emit Withdraw(_tokenHolder, value);
    return true;
  }

  /**
   * @dev Assumes active commitment.
   * @param _account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function commitmentAge(address _account, address _token)
  internal
  view
  returns (uint256) {
    return now.sub(database.uintStorage(keccak256(abi.encodePacked("commitment.start", _token, _account))));
  }



  /** MYB committed to voting */
  event Commit(
    address indexed account,                    // Committing account
    uint256 value                               // MYB amount committed
  );


  /** Commitment withdrawn */
  event Withdraw(
    address indexed account,                    // Withdrawing account
    uint256 value                               // MYB amount withdrawn
  );

}
