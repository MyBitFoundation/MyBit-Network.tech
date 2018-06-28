pragma solidity 0.4.24;

import './Database.sol'; 
import './SafeMath.sol'; 
import './ERC20.sol'; 


contract DividendAsset is ERC20{

Database public database; 

    // How dividends work:
    //
    // - A "point" is a fraction of a Wei (1e-32), it's used to reduce rounding errors.
    //
    // - totalPointsPerToken represents how many points each token is entitled to
    //   from all the dividends ever received. Each time a new deposit is made, it
    //   is incremented by the points oweable per token at the time of deposit:
    //     (depositAmtInWei * POINTS_PER_WEI) / totalSupply
    //
    // - Each account has a `creditedPoints` and `lastPointsPerToken`
    //   - lastPointsPerToken:
    //       The value of totalPointsPerToken the last time `creditedPoints` was changed.
    //   - creditedPoints:
    //       How many points have been credited to the user. This is incremented by:
    //         (`totalPointsPerToken` - `lastPointsPerToken` * balance) via
    //         `.updateCreditedPoints(account)`. This occurs anytime the balance changes
    //         (transfer, mint, burn).
    //
    // - .collectOwedDividends() calls .updateCreditedPoints(account), converts points
    //   to wei and pays account, then resets creditedPoints[account] to 0.
    //
    // - "Credit" goes to Nick Johnson for the concept.
    //
    uint constant POINTS_PER_WEI = 1e32;
    uint public dividendsTotal;
    uint public dividendsCollected;
    uint public totalPointsPerToken;
    uint public totalBurned;
    mapping (address => uint) public creditedPoints;
    mapping (address => uint) public lastPointsPerToken;



    constructor(address _database)
      public {
        database = Database(_database); 
    }

    // All payment to this contract belongs to investors
    function ()
      payable
      public {
        if (msg.value == 0) return;
        // POINTS_PER_WEI is 1e32.
        // So, no multiplication overflow unless msg.value > 1e45 wei (1e27 ETH)
        totalPointsPerToken += (msg.value * POINTS_PER_WEI) / supply;
        dividendsTotal += msg.value;
        emit DividendReceived(now, msg.sender, msg.value);
    }


    /*************************************************************/
    /********** PUBLIC FUNCTIONS *********************************/
    /*************************************************************/
    
    // Normal ERC20 transfer, except before transferring
    //  it credits points for both the sender and receiver.
    function transfer(address _to, uint _value)
      public
      returns (bool success) {   
        _updateCreditedPoints(msg.sender);
        _updateCreditedPoints(_to);
        return ERC20.transfer(_to, _value);
    }

    // Normal ERC20 transferFrom, except before transferring
    //  it credits points for both the sender and receiver.
    function transferFrom(address _from, address _to, uint256 _value)
      public
      returns (bool success) {
        _updateCreditedPoints(_from);
        _updateCreditedPoints(_to);
        return ERC20.transferFrom(_from, _to, _value);
    }
    
    function approveAndCall(address _to, uint _value, bytes _data)
      public
      returns (bool success) {
        _updateCreditedPoints(msg.sender);
        _updateCreditedPoints(_to);
        return ERC20.approveAndCall(_to, _value, _data);  
    }

    // Updates creditedPoints, sends all wei to the owner
    function collectOwedDividends()
      public
      returns (uint _amount) {
        _updateCreditedPoints(msg.sender);
        _amount = creditedPoints[msg.sender] / POINTS_PER_WEI;
        creditedPoints[msg.sender] = 0;
        dividendsCollected += _amount;
        emit CollectedDividends(now, msg.sender, _amount);
        require(msg.sender.call.value(_amount)());
    }


    /*************************************************************/
    /********** PRIVATE METHODS / VIEWS **************************/
    /*************************************************************/
    // Credits _account with whatever dividend points they haven't yet been credited.
    //  This needs to be called before any user's balance changes to ensure their
    //  "lastPointsPerToken" credits their current balance, and not an altered one.
    function _updateCreditedPoints(address _account)
      private {
        creditedPoints[_account] += _getUncreditedPoints(_account);
        lastPointsPerToken[_account] = totalPointsPerToken;
    }

    // For a given account, returns how many Wei they haven't yet been credited.
    function _getUncreditedPoints(address _account)
      private
      view
      returns (uint _amount) {
        uint _pointsPerToken = totalPointsPerToken.sub(lastPointsPerToken[_account]);
        // The upper bound on this number is:
        //   ((1e32 * TOTAL_DIVIDEND_AMT) / totalSupply) * balances[_account]
        // Since totalSupply >= balances[_account], this will overflow only if
        //   TOTAL_DIVIDEND_AMT is around 1e45 wei. Not ever going to happen.
        return _pointsPerToken * balances[_account];
    }


    /*************************************************************/
    /********* CONSTANTS *****************************************/
    /*************************************************************/
    // Returns how many wei a call to .collectOwedDividends() would transfer.
    function getOwedDividends(address _account)
        public
        constant
        returns (uint _amount)
    {
        return (_getUncreditedPoints(_account) + creditedPoints[_account])/POINTS_PER_WEI;
    }


  event CollectedDividends(uint time, address indexed account, uint amount);
  event DividendReceived(uint time, address indexed sender, uint amount);
  event Created(uint time);
  event Transfer(address indexed from, address indexed to, uint amount);
  event Approval(address indexed owner, address indexed spender, uint amount);
  event AllowanceUsed(address indexed owner, address indexed spender, uint amount);
}
