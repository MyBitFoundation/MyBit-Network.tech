pragma solidity 0.4.24;

import "./DividendToken.sol";
import "../../math/SafeMath.sol"; 

// import "../../ecosystem/BrokerAssets.sol";

// TODO: If this is causing out-of-gas errors we can move the lockTokens(), unlockTokens(), and blockAtLock into AssetGovernance and 
// ...import a tiny interface with one function: function blockAtLock() external view returns (uint);  (must keep modifier though)
contract GovernedToken is DividendToken { 
  using SafeMath for uint; 

  address public assetGovernance; 

  mapping (address => uint) public blockAtLock;    // Force to lock all tokens 

  // mapping (address => uint) public votePower;    // ( log(amountLocked * blockAtLock) + log(amountLocked * blockAtLock) ) / 2
  // uint public totalVotePower;        // 


  // @notice constructor: initialized
  constructor(string _tokenURI, address _owner, address _assetGovernance)
  public
  DividendToken(_tokenURI, _owner){
    assetGovernance = _assetGovernance; 
  }

  //Restrict transfers on locked tokens
  function transfer(address _to, uint _amount)
  restrictLockedTokens
  public
  returns (bool success) {
      super.transfer(_to, _amount);
      return true;
  }

  function transferFrom(address _from, address _to, uint _amount)
  public
  restrictLockedTokens
  returns (bool success) {
      super.transferFrom(_from, _to, _amount);
      return true;
  }

  function lockTokens()
  external 
  returns (bool) {
    blockAtLock[msg.sender] = block.number; 
    return true; 
  }

  function unlockTokens()
  external 
  onlyGovernanceContract
  returns (bool) {
    delete blockAtLock[msg.sender];
  }

  // @notice don't let user transfer tokens if locked
  modifier restrictLockedTokens {
    require(blockAtLock[msg.sender] == 0); 
    _;
  }

    // @notice don't let user transfer tokens if locked
  modifier onlyGovernanceContract {
    require(msg.sender == assetGovernance); 
    _;
  }

}


// I'm almost certain this is going to put everything over the block gas limit...we will have to seperate this logic and simplify the voting
// Lets try 2 different methods: 
// 1.) We can just look to see if the user has tokens locked and don't let him transfer if so
//     * the user can lock and unlock from the governance contract. (unlocking will take away his vote)
//     * let the vote run forever and let people leave whenever...can be triggered once quorum is reached 
//     * this way there is only 1 vote option. "should we change broker?"" This is by default always running. 
//     * if that vote passes quorum at any point, 2 follow up votes will run simultaneously 
//            1.) Should we burn brokers tokens? 
//                * Could be all or none. If quorum reached -> burn tokens 
//                * Or else it could be that if 30% vote yes, 30% of his tokens get burnt
//            2.) Who will be the next broker? 
//                * Probably want a time limit on this...no quorum. Leading address = new broker ?

// 2.) We can use TokenGovernance.sol in the ownership folder to lock tokens (needs modification as it's built for platform token MYB)
//     * Benefit is we reduce gas costs for deploying larger DividendTokens + adding extra conditional in transfer functions
//     * Downside is that the TokenGovernance contract will accumulate dividends while they are locked 
//     

// contract GovernedToken is DividendToken{
//   BrokerAssets brokerAssets;
//   BrokerEscrow brokerEscrow;
//   bytes32 assetID;

//   mapping(address => uint) public amountLocked;
//   mapping(address => uint) public timeFree;
//   uint public totalLocked;

//   uint public lockTime = 15724800; //6 months - time that tokens are locked, time is reset each vote
//   uint public voteTime = 1209600; //2 weeks - time votes last for
//   uint public voteBreak = 2419200; //4 weeks - enforce time between voting sessions, no spamming

//   struct Vote{
//     uint public aye,
//     uint public nay,
//     uint public voteEnd,
//     uint public referenceAddress
//   }

//   mapping(bytes4 => Vote) public votes;

//   // @notice constructor: initialized
//   constructor(string _tokenURI, address _owner, bytes32 _assetID, address _brokerAssets, address _brokerEscrow)
//   public
//   DividendToken(_tokenURI, _owner){
//     assetID = _assetID;
//     brokerAssets = BrokerAssets(_brokerAssets);
//     brokerEscrow = BrokerEscrow(_brokerEscrow)
//   }

//   // @notice Person who initiates vote simultaneously vote Aye using the _amount of tokens stipulated
//   function initiateBrokerChange(uint _amount, address _newBrokerAddress)
//   notVoting(msg.sig)
//   confirmLock(_amount)
//   external
//   returns(bytes4){
//     bytes4 voteID = msg.sig;
//     votes[voteID].voteEnd = now + voteTime;
//     votes[voteID].aye = _amount;
//     votes[voteID].nay = 0;
//     votes[voteID].referenceAddress = _newBrokerAddress;
//     return voteID;
//   }

//   // @notice Person who initiates vote simultaneously vote Aye using the _amount of tokens stipulated
//   function initiateEscrowBurn(uint _amount)
//   notVoting(msg.sig)
//   confirmLock(_amount)
//   external
//   returns(bytes4){
//     bytes4 voteID = msg.sig;
//     votes[voteID].voteEnd = now + voteTime;
//     votes[voteID].aye = _amount;
//     votes[voteID].nay = 0;
//     return voteID;
//   }

//   function triggerBrokerChange(bytes4 _voteID)
//   confirmSuccess(_voteID)
//   external
//   returns (bool){
//     require(_voteID == ''); //Prevent someone passing a different type of vote that has passed
//     brokerAssets.changeBroker(assetID, votes[voteID].referenceAddress);
//     return true;
//   }

//   function triggerEscrowBurn(bytes4 _voteID)
//   confirmSuccess(_voteID)
//   external
//   returns (bool){
//     require(_voteID == ''); //Prevent someone passing a different type of vote that has passed
//     brokerEscrow.burnEscrow(assetID);
//     return true;
//   }

//   function voteAye(bytes4 _voteID, uint _amount)
//   voting(_voteID)
//   confirmLock(_amount)
//   external
//   returns(bool){
//     votes[voteID].aye += _amount;
//   }

//   function voteNay(bytes4 _voteID, uint _amount)
//   voting(_voteID)
//   confirmLock(_amount)
//   external
//   returns(bool){
//     votes[voteID].nay += _amount;
//   }

//   function lockTokens(uint _amount)
//   private{
//     require(_amount <= balances[msg.sender]);
//     totalLocked -= amountLocked[msg.sender];
//     amountLocked[msg.sender] = _amount;
//     totalLocked += _amount;
//     updateLockTime();
//   }

//   function unlockTokens()
//   private {
//     require(timeFree[msg.sender] < now, 'Tokens are still locked');
//     totalLocked -= amountLocked[msg.sender];
//     amountLocked[msg.sender] = 0;
//   }

//   function updateLockTime()
//   private{
//     timeFree[msg.sender] = now + lockTime;
//   }

//   //Restrict transfers on locked tokens
//   function transfer(address _to, uint _amount)
//   restrictLockedTokens
//   public
//   returns (bool success) {
//       super.transfer(_to, _amount);
//       return true;
//   }

//   function transferFrom(address _from, address _to, uint _amount)
//   public
//   restrictLockedTokens
//   returns (bool success) {
//       super.transferFrom(_from, _to, _amount);
//       return true;
//   }

//   modifier restrictLockedTokens(amount){
//     // @notice If the user has enough tokens not locked, the tranfer continues as normal.
//     //         Otherwise, we attempt to unlock the tokens
//     if((balances[msg.sender] - amountLocked[msg.sender]) < amount){
//       unlockTokens();
//     }
//     _;
//   }

//   modifier notVoting(voteID){
//     require(votes[voteID].voteEnd.add(voteBreak) < now);
//     _;
//   }

//   modifier voting(voteID){
//     require(votes[voteID].voteEnd > now);
//     _;
//   }

//   modifier confirmLock(amount){
//     if(amountLocked[msg.sender] >= _amount){
//       updateLockTime();
//     } else {
//       lockTokens(_amount);
//     }
//     _;
//   }

//   modifier confirmSuccess(voteID){
//     require(votes[voteID].voteEnd < now);
//     uint totalVotes = votes[voteID].aye.add(votes[voteID].nay);
//     require(totalLocked.sub(totalVotes) < totalVotes);
//     require(votes[voteID].aye > votes[voteID].nay);
//     _;
//   }
// }
