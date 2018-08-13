pragma solidity 0.4.24;

import './SafeMath.sol'; 

// ----------------------------------------------------------------------------
// Receive approval and then execute function
// ----------------------------------------------------------------------------
contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint tokens, address token, bytes data) public;
}

// ----------------------------------------------------------------------------
// ERC Token Standard #20 Interface
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
// ----------------------------------------------------------------------------
contract ERC20Interface {
    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}


// ------------------------------------------------------------------------
// @notice ERC20 token contract with shared revenue distribution functionality. 
// Credit goes to Nick Johnson for the dividend token
// https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// Fixed Supply with burn capabilities
// ------------------------------------------------------------------------
contract DividendToken is ERC20Interface{
    using SafeMath for uint; 

    // ------------------------------------------------------------------------
    /// Token supply, balances and allowance
    // ------------------------------------------------------------------------
    uint internal supply;
    mapping (address => uint) internal balances;
    mapping (address => mapping (address => uint)) internal allowed;

    // ------------------------------------------------------------------------
    // Asset Token Information
    // ------------------------------------------------------------------------
    bytes32 public id;                 // An identifier
    address public mint;               // This address which has authorization to mint tokens

    // ------------------------------------------------------------------------
    // Token Income Information
    // ------------------------------------------------------------------------
    uint constant scalingFactor = 1e32;
    uint public assetIncome;
    uint public valuePerToken;


    mapping (address => uint) public incomeClaimed;
    mapping (address => uint) public previousValuePerToken;    


    // ------------------------------------------------------------------------
    // @notice constructor. 
    // ------------------------------------------------------------------------
    constructor(address _mint, bytes32 _id) 
    public {
        supply = _initialAmount;                        // Update total supply
        id = _id;                                            // Set the id for reference
        emit Transfer(address(0), msg.sender, _initialAmount);    // Transfer event indicating token creation
    }


    // ------------------------------------------------------------------------
    // @notice Transfer _amount tokens to address _to.  
    // @dev Sender must have enough tokens. Cannot send to 0x0.
    // ------------------------------------------------------------------------
    function transfer(address _to, uint _amount) 
    public 
    updateIncomeClaimed(msg.sender)
    updateIncomeClaimed(_to)
    returns (bool success) {
        require(_to != address(0));         // Use burn() function instead
        require(_to != address(this));
        balances[msg.sender] = balances[msg.sender].sub(_amount);
        balances[_to] = balances[_to].add(_amount);
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    // ------------------------------------------------------------------------
    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so. _from must have enough tokens + must have approved msg.sender 
    // ------------------------------------------------------------------------
    function transferFrom(address _from, address _to, uint _amount) 
    public 
    updateIncomeClaimed(_from)
    updateIncomeClaimed(_to)
    returns (bool success) {
        require(_to != address(0)); 
        require(_to != address(this)); 
        balances[_from] = balances[_from].sub(_amount);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_amount);
        balances[_to] = balances[_to].add(_amount);
        emit Transfer(_from, _to, _amount);
        return true;
    }

    // ------------------------------------------------------------------------
    // @notice Token owner can approve for `spender` to transferFrom(...) `tokens`from the token owner's account
    // ------------------------------------------------------------------------
    function approve(address _spender, uint _amount) 
    public 
    returns (bool success) {
        allowed[msg.sender][_spender] = _amount;
        emit Approval(msg.sender, _spender, _amount);
        return true;
    }


    // ------------------------------------------------------------------------
    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens
    // ------------------------------------------------------------------------
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

    // ------------------------------------------------------------------------
    // @notice The address with authorization to mint tokens can do so here
    // ------------------------------------------------------------------------
    function mint(address _beneficiary, uint _amount)
    external 
    returns (bool) { 
        require(msg.sender == mint);
        supply = supply.add(_amount); 
        balances[_beneficiary] = balances[_beneficiary].add(_amount); 
        emit Transfer(address(0), _beneficiary, _amount); 
        return true; 
    }

    // // ------------------------------------------------------------------------
    // @notice Updates incomeClaimed, sends all wei to the owner
    // // ------------------------------------------------------------------------
    function collectOwedDividends()
      public
      updateIncomeClaimed(msg.sender)
      returns (uint _amount) {
        _amount = incomeClaimed[msg.sender].div(scalingFactor);
        delete incomeClaimed[msg.sender]; 
        msg.sender.transfer(_amount); 
        emit LogIncomeCollected(now, msg.sender, _amount);
    }

    // ------------------------------------------------------------------------
    // @notice Returns the number of tokens in circulation
    // ------------------------------------------------------------------------
    function totalSupply()
    public 
    view 
    returns (uint tokenSupply) { 
        return supply; 
    }

    // ------------------------------------------------------------------------
    // @notice Returns the token balance of user
    // ------------------------------------------------------------------------
    function balanceOf(address _tokenHolder) 
    public 
    view 
    returns (uint balance) {
        return balances[_tokenHolder];
    }


    // ------------------------------------------------------------------------
    //                           Constant functions 
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // @notice Returns amount of tokens _spender is allowed to transfer or burn
    // ------------------------------------------------------------------------
    function allowance(address _tokenHolder, address _spender) 
    public 
    view 
    returns (uint) {
        return allowed[_tokenHolder][_spender];
    }

    // ------------------------------------------------------------------------
    // @notice Calculates how much value _user holds
    // ------------------------------------------------------------------------
    function getAmountOwed(address _user)
      private
      view
      returns (uint) {
        uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_user]);
        return valuePerTokenDifference.mul(balances[_user]);
    }

    // ------------------------------------------------------------------------
    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32
    // ------------------------------------------------------------------------
    function getOwedDividends(address _user)
    public
    constant
    returns (uint) {
        return (getAmountOwed(_user).add(incomeClaimed[_user]).div(scalingFactor));
    }



    // ------------------------------------------------------------------------
    //                            Modifiers 
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // Updates the amount owed to user while holding tokenSupply
    // @dev must be called before transfering tokens
    // ------------------------------------------------------------------------
    modifier updateIncomeClaimed(address _user) { 
        incomeClaimed[_user] = incomeClaimed[_user].add(getAmountOwed(_user));
        previousValuePerToken[_user] = valuePerToken;
        _; 
    }

    // ------------------------------------------------------------------------
    // Fallback function:
    // TODO: Let each Asset handle income or do it all in AssetBank?? 
    // ------------------------------------------------------------------------
    function ()
      payable
      requiresEther
      public {
        valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
        assetIncome = assetIncome.add(msg.value);
        emit LogIncomeReceived(msg.sender, msg.value);
    }

    // ------------------------------------------------------------------------
    // Fallback function: Reject Ether payments
    // ------------------------------------------------------------------------
    // function () 
    // public 
    // payable {
    //     revert();
    // }

    //------------------------------------------------------------------------------------------------------------------
    // Requires that Ether is sent with the transaction
    //------------------------------------------------------------------------------------------------------------------
    modifier requiresEther {
        require(msg.value > 0);
        _;
    }

    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);

}


