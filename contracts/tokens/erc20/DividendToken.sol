pragma solidity 0.4.24;

import '../../math/SafeMath.sol';
import './MintableToken.sol';


// @notice Receive approval and then execute function
contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint tokens, address token, bytes data) public;
}

// @title ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// TODO: Suicide function
contract DividendToken is MintableToken {
    using SafeMath for uint;

    // @notice Token Income Information
    uint constant scalingFactor = 1e32;
    uint public assetIncome;
    uint public valuePerToken;

    mapping (address => uint) public incomeClaimed;
    mapping (address => uint) public previousValuePerToken;


    // @notice constructor: initialized
    constructor(string _tokenURI) public MintableToken(_tokenURI){}
    // @notice Transfer _amount tokens to address _to.
    // @dev Sender must have enough tokens. Cannot send to 0x0.
    // @param (address) _to = The address which will receive the tokens
    // @param (uint) _amount = The amount of tokens to send
    function transfer(address _to, uint _amount)
    public
    updateIncomeClaimed(msg.sender)
    updateIncomeClaimed(_to)
    returns (bool success) {
        require(_to != address(this));
        super.transfer(_to, _amount);
        return true;
    }

    // @notice A 3rd party can transfer tokens if user approves them to do so
    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.
    // @param (address) _from = The address who approved msg.sender to spend tokens
    // @param (address) _to = The address who will receive the tokens
    // @param (uint) _amount = The number of tokens to send
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

    // @notice token holders can withdraw income here
    function withdraw()
    public
    updateIncomeClaimed(msg.sender)
    returns (bool) {
        uint amount = incomeClaimed[msg.sender].div(scalingFactor);
        delete incomeClaimed[msg.sender];
        msg.sender.transfer(amount);
        emit LogIncomeCollected(now, msg.sender, amount);
        return true;
    }

    // @notice assets can send their income here to be collected by investors 
    function issueDividends()
    payable
    public 
    returns (bool) {
        valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(msg.value);
        emit LogIncomeReceived(msg.sender, msg.value);
        return true; 
    }

    // Fallback function: receives Ether and updates income ledger
    function ()
    payable
    public {
        valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(msg.value);
        emit LogIncomeReceived(msg.sender, msg.value);
    }


    // ------------------------------------------------------------------------
    //                           View functions
    // ------------------------------------------------------------------------

    // @notice Returns amount of tokens _spender is allowed to transfer or burn
    function allowance(address _tokenHolder, address _spender)
    public
    view
    returns (uint) {
        return allowed[_tokenHolder][_spender];
    }

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





    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
    event LogIncomeCollected(uint _block, address _address, uint _amount);

}
