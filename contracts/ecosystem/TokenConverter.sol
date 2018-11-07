pragma solidity 0.4.24;

import "./../bancor/bancor-contracts/solidity/contracts/IBancorNetwork.sol";
import "./../bancor/bancor-contracts/solidity/contracts/token/EtherToken.sol";
import "./../bancor/bancor-contracts/solidity/contracts/token/interfaces/IERC20Token.sol";
import "./../bancor/bancor-contracts/solidity/contracts/token/interfaces/ISmartToken.sol";
import "./../bancor/bancor-contracts/solidity/contracts/token/interfaces/IEtherToken.sol";
import "./../bancor/bancor-contracts/solidity/contracts/token/SmartToken.sol";


///@title A contract for converting any token into MYB (using Bancor's API)
///@author Vlad Silviu Farcas
contract TokenConverter {

    IBancorNetwork bancorNetwork;

    ///@notice initialise addresses needed for conversion
    constructor(IBancorNetwork _bancorNetwork) {
        bancorNetwork = _bancorNetwork;
    }

    ///@notice convert some tokens
    ///@param _token the contract of the token that is about to be converted
    ///@param _amount the amount of _token that is about to be converted
    ///@param _minimumReturn the minimum return of MyBit token that is about to be received
    function convertTokenToMyBit(
        address _token, 
        uint _amount, 
        uint _minimumReturn,
        address _toToken,
        address _ether
        ) payable {
        IERC20Token token;
        IERC20Token[] memory path = new IERC20Token[](3);
        uint amount = _amount;
        uint value = 0;
        ISmartToken toToken = ISmartToken(_toToken);
        if (msg.value == 0){
            // require(bancorNetwork.etherTokens(_token) == true, "Token not supported");
            token = ISmartToken(_token);
            token.transferFrom(msg.sender, bancorNetwork, amount);
            token.approve(bancorNetwork, amount);
        } else {
            token = IEtherToken(_ether);
            amount = msg.value;
            value = msg.value;
        }
        path[0] = token;
        path[1] = toToken;
        path[2] = toToken;
        uint convertedValue = IBancorNetwork(bancorNetwork).convert.value(value)(
            path,
            amount,
            _minimumReturn
        );
        require (convertedValue >= _minimumReturn, "Transaction failed.");
        require (toToken.balanceOf(this) == convertedValue, "Transaction failed with different return than expected");
        toToken.transfer(msg.sender, convertedValue);
        token.transfer(msg.sender, token.balanceOf(this));
    }

}