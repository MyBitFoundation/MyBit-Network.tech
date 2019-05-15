pragma solidity ^0.4.24;

import './MintableToken.sol';
import '../../math/SafeMath.sol';
import '../../interfaces/ApproveAndCallFallback.sol';

// @title ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.
// @author Kyle Dewhurst & Peter Phillips MyBit Foundation
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
contract DividendToken is MintableToken {
    using SafeMath for uint;

    ERC20 public erc20;

    // @notice Token Income Information
    uint constant scalingFactor = 1e32;
    uint public valuePerToken;
    uint public assetIncome;
    uint public assetIncomeIssued;


    mapping (address => uint) public incomeOwed;
    mapping (address => uint) public previousValuePerToken;


    // @notice constructor: initialized
    constructor(string _tokenURI, address _owner, address _erc20Address)
    public
    MintableToken(_tokenURI, _tokenURI, uint8(18), _owner){
      if(_erc20Address != address(0)){
        erc20 = ERC20(_erc20Address); //Set the address of the ERC20 token that will be issued as dividends
      }
    }

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

    // @notice A 3rd party can transfer tokens if investor approves them to do so
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
    external
    updateIncomeClaimed(msg.sender)
    returns (bool) {
        uint amount = incomeOwed[msg.sender].div(scalingFactor);
        delete incomeOwed[msg.sender];
        assetIncomeIssued = assetIncomeIssued.add(amount);
        if(address(erc20) == address(0)){
          msg.sender.transfer(amount);
        } else {
          require(erc20.transfer(msg.sender, amount));
        }
        emit LogIncomeCollected(msg.sender, amount);
        return true;
    }

    // @notice assets can send their income here to be collected by investors
    function issueDividends(uint256 _amount)
    payable
    external
    returns (bool) {
        require(_amount > 0, "Cannot send zero");
        if(address(erc20) == address(0)){
          require(msg.value == _amount);
        } else {
          require(msg.value == 0);
          require(erc20.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        }
        assetIncome = assetIncome.add(_amount);
        valuePerToken = valuePerToken.add(_amount.mul(scalingFactor).div(supply));
        emit LogIncomeReceived(msg.sender, _amount);
        return true;
    }

    //In case a investor transferred a token directly to this contract
    //anyone can run this function to clean up the balances
    //and distribute the difference to token holders
    function checkForTransfers()
    external {
      uint bookBalance = assetIncome.sub(assetIncomeIssued);
      uint actualBalance;
      if(address(erc20) == address(0)){
        actualBalance = address(this).balance;
      } else {
        actualBalance = erc20.balanceOf(this);
      }
      uint diffBalance = actualBalance.sub(bookBalance);
      if(diffBalance > 0){
        //Update value per token
        valuePerToken = valuePerToken.add(diffBalance.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(diffBalance);
      }
      emit LogCheckBalance(diffBalance);
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

    // Fallback function: receives Ether and updates income ledger
    function ()
    payable
    external {
      require(address(erc20) == address(0));
      assetIncome = assetIncome.add(msg.value);
      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
      emit LogIncomeReceived(msg.sender, msg.value);
    }


    // ------------------------------------------------------------------------
    //                           View functions
    // ------------------------------------------------------------------------

    // @notice Calculates how much more income is owed to investor since last calculation
    function collectLatestPayments(address _investor)
    private
    view
    returns (uint) {
        uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_investor]);
        return valuePerTokenDifference.mul(balances[_investor]);
    }

    // @notice Calculates how much wei investor is owed. (points + incomeOwed) / 10**32
    function getAmountOwed(address _investor)
    public
    view
    returns (uint) {
        return (collectLatestPayments(_investor).add(incomeOwed[_investor]).div(scalingFactor));
    }

    // @notice returns ERC20 token. Returns null if the token uses Ether.
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
        incomeOwed[_investor] = incomeOwed[_investor].add(collectLatestPayments(_investor));
        previousValuePerToken[_investor] = valuePerToken;
        _;
    }

    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
    event LogIncomeCollected(address _address, uint _amount);
    event LogCheckBalance(uint _difference);

}
