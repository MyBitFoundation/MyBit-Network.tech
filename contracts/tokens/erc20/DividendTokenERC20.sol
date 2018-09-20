pragma solidity ^0.4.24;

import '../../math/SafeMath.sol';
import './MintableToken.sol';
import '../../interfaces/ERC20.sol';


// @notice Receive approval and then execute function
contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint tokens, address token, bytes data) public;
}

// @title ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive ERC20 tokens as payments and token owners receive their share when transferring tokens.
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// TODO: Suicide function
contract DividendTokenERC20 is MintableToken {
    using SafeMath for uint;

    ERC20 public erc20;

    // @notice Token Income Information
    uint constant scalingFactor = 1e32;

    uint private assetIncome;
    uint private assetIncomeIssued;
    uint private valuePerToken;


    mapping (address => uint) private incomeClaimed;
    mapping (address => uint) private previousValuePerToken;


    // @notice constructor: initialized
    constructor(string _tokenURI, address _erc20Address)
    public  
    MintableToken(_tokenURI) {
        erc20 = ERC20(_erc20Address); //Set the address of the ERC20 token that will be issued as dividends
    }


    function transfer(address _to, uint _amount)
    public
    updateIncomeClaimed(msg.sender)
    updateIncomeClaimed(_to)
    returns (bool success) {
        require(_to != address(this));
        super.transfer(_to, _amount);
        return true;
    }


    function transferFrom(address _from, address _to, uint _amount)
    public
    updateIncomeClaimed(_from)
    updateIncomeClaimed(_to)
    returns (bool success) {
        require(_to != address(this));
        super.transferFrom(_from, _to, _amount);
        return true;
    }

    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens
    // @param (address) _spender = The contract to call after approval is done
    // @param (uint) _amount = Number of tokens to send
    // @param (bytes) _data = Bytes data to send along with the contract call
    function approveAndCall(address _spender, uint _amount, bytes _data)
    public
    updateIncomeClaimed(msg.sender)
    updateIncomeClaimed(_spender)
    returns (bool success) {
        allowed[msg.sender][_spender] = _amount;
        emit Approval(msg.sender, _spender, _amount);
        ApproveAndCallFallBack(_spender).receiveApproval(msg.sender, _amount, address(this), _data);
        return true;
    }

    function issueDividends(uint _amount)
    public {
        require(_amount > 0);
        erc20.transferFrom(msg.sender, address(this), _amount);
        valuePerToken = valuePerToken.add(_amount.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(_amount);
        emit LogIncomeReceived(msg.sender, _amount);
    }

    // @notice Updates incomeClaimed, sends all wei to the token holder
    function withdraw()
    public
    updateIncomeClaimed(msg.sender)
    returns (uint _amount) {
        _amount = incomeClaimed[msg.sender].div(scalingFactor);
        delete incomeClaimed[msg.sender];
        assetIncomeIssued = assetIncomeIssued.add(_amount);
        erc20.transfer(msg.sender, _amount);
        emit LogIncomeCollected(now, msg.sender, _amount);
    }

    //In case a user transferred a token directly to this contract
    //anyone can run this function to clean up the balances
    //and distribute the difference to token holders
    function checkForTransfers()
    external {
      uint bookBalance = assetIncome.sub(assetIncomeIssued);
      uint actualBalance = erc20.balanceOf(address(this));
      uint diffBalance = actualBalance.sub(bookBalance);
      if(diffBalance > 0){
        //Update value per token
        valuePerToken = valuePerToken.add(diffBalance.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(diffBalance);
      }
      emit LogCheckBalance(diffBalance);
    }


    // ------------------------------------------------------------------------
    //                           View functions
    // ------------------------------------------------------------------------
    
    // @notice Calculates how much value _user holds
    function getAmountOwed(address _user)
    private
    view
    returns (uint) {
        uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_user]);
        return valuePerTokenDifference.mul(balances[_user]);
    }

    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32
    function getOwedDividends(address _user)
    public
    constant
    returns (uint) {
        return (getAmountOwed(_user).add(incomeClaimed[_user]).div(scalingFactor));
    }



    // ------------------------------------------------------------------------
    //                            Modifiers
    // ------------------------------------------------------------------------

    // Updates the amount owed to user while holding tokenSupply
    // @dev must be called before transfering tokens
    modifier updateIncomeClaimed(address _user) {
        incomeClaimed[_user] = incomeClaimed[_user].add(getAmountOwed(_user));
        previousValuePerToken[_user] = valuePerToken;
        _;
    }

    // Fallback function:
    // Only works with ERC223
    // Can't currently detect which token
    /*
    function tokenFallback(address _from, uint _value, bytes _data)
      public {
        valuePerToken = valuePerToken.add(_value.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(_value);
        emit LogIncomeReceived(_from, _value);
    }
    */

    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
    event LogCheckBalance(uint _difference);
    event LogIncomeCollected(uint _block, address _address, uint _amount);

}
