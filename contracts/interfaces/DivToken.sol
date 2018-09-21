pragma solidity 0.4.24;


// @title ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// TODO: Suicide function
interface DivToken {

    // @notice Transfer _amount tokens to address _to.
    // @dev Sender must have enough tokens. Cannot send to 0x0.
    // @param (address) _to = The address which will receive the tokens
    // @param (uint) _amount = The amount of tokens to send
    function transfer(address _to, uint _amount)
    external
    returns (bool success);

    // @notice A 3rd party can transfer tokens if user approves them to do so
    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.
    // @param (address) _from = The address who approved msg.sender to spend tokens
    // @param (address) _to = The address who will receive the tokens
    // @param (uint) _amount = The number of tokens to send
    function transferFrom(address _from, address _to, uint _amount)
    external
    returns (bool success);

    // @notice approves a 3rd party to transfer msg.sender's tokens on behalf of him/her
    // @param (address) _spender = The address of who msg.sender approves to spend tokens on their behalf
    // @param (uint) _amount = The upper limit of how many tokens can be spent
    function approve(address _spender, uint _amount)
    external
    returns (bool success);


    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens
    // @param (address) _spender = The contract to call after approval is done
    // @param (uint) _amount = Number of tokens to send
    // @param (bytes) _data = Bytes data to send along with the contract call
    function approveAndCall(address _spender, uint _amount, bytes _data)
    external
    returns (bool success);


    // @notice Updates incomeClaimed, sends all wei to the token holder
    function collectOwedDividends()
    external
    returns (uint _amount);


    // @notice Returns amount of tokens _spender is allowed to transfer or burn
    function allowance(address _tokenHolder, address _spender)
    external
    view
    returns (uint);

    // @notice Returns the number of tokens in circulation
    function totalSupply()
    external
    view
    returns (uint tokenSupply);

    // @notice Returns the token balance of user
    function balanceOf(address _tokenHolder)
    external
    view
    returns (uint balance);

    // @notice Returns the URI of this token
    function tokenURI()
    external
    view
    returns (string);

    function valuePerToken()
    external
    view
    returns (uint);

    function scalingFactor()
    external
    view
    returns (uint);

    // @notice Calculates how much value _user holds
    function getAmountOwed(address _user)
    external
    view
    returns (uint);

    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32
    function getOwedDividends(address _user)
    external
    constant
    returns (uint);

    function assetIncome()
    external
    view
    returns (uint);


    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
    event LogIncomeCollected(uint _block, address _address, uint _amount);

}
