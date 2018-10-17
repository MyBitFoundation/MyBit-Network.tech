pragma solidity ^0.4.24;

import './MintableToken.sol';
import '../../math/SafeMath.sol';
import '../../interfaces/ERC20.sol';
import '../../interfaces/ApproveAndCallFallback.sol';

// @title ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive ERC20 tokens as payments and token owners receive their share when transferring tokens.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
contract DividendTokenERC20 is MintableToken {
    using SafeMath for uint;

    ERC20 public erc20;

    // @notice Token Income Information
    uint constant scalingFactor = 1e32;

    uint public assetIncome;
    uint public assetIncomeIssued;
    uint public valuePerToken;


    mapping (address => uint) public incomeClaimed;
    mapping (address => uint) public previousValuePerToken;


    // @notice constructor: initialized
    constructor(string _tokenURI, address _owner, address _erc20Address)
    public  MintableToken(_tokenURI, _owner){
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
    public
    returns (bool){
        require(_amount > 0);
        require(erc20.transferFrom(msg.sender, address(this), _amount));
        valuePerToken = valuePerToken.add(_amount.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(_amount);
        emit LogIncomeReceived(msg.sender, _amount);
        return true;
    }

    // @notice Updates incomeClaimed, sends all wei to the token holder
    function withdraw()
    public
    updateIncomeClaimed(msg.sender)
    returns (bool) {
        uint amount = incomeClaimed[msg.sender].div(scalingFactor);
        delete incomeClaimed[msg.sender];
        assetIncomeIssued = assetIncomeIssued.add(amount);
        require(erc20.transfer(msg.sender, amount));
        emit LogIncomeCollected(msg.sender, amount);
        return true;
    }

    //In case a investor transferred a token directly to this contract
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

    // @notice Calculates how much value _investor holds
    function collectLatestPayments(address _investor)
    public
    view
    returns (uint) {
        uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_investor]);
        return valuePerTokenDifference.mul(balances[_investor]);
    }

    // @notice Calculates how much wei investor is owed. (points + incomeClaimed) / 10**32
    function getAmountOwed(address _investor)
    public
    view
    returns (uint) {
        return (collectLatestPayments(_investor).add(incomeClaimed[_investor]).div(scalingFactor));
    }

    function getERC20()
    external
    view
    returns(address){
      return address(erc20);
    }

    // ------------------------------------------------------------------------
    //                            Modifiers
    // ------------------------------------------------------------------------

    // Updates the amount owed to investor while holding tokenSupply
    // @dev must be called before transfering tokens
    modifier updateIncomeClaimed(address _investor) {
        incomeClaimed[_investor] = incomeClaimed[_investor].add(collectLatestPayments(_investor));
        previousValuePerToken[_investor] = valuePerToken;
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
    event LogIncomeCollected(address _address, uint _amount);

}
