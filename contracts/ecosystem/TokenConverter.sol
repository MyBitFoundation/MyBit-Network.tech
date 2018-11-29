pragma solidity ^0.4.24;

import "../bancor/IBancorNetwork.sol";
import "../bancor/token/EtherToken.sol";
import "../bancor/token/interfaces/IERC20Token.sol";
import "../bancor/token/interfaces/ISmartToken.sol";
import "../bancor/token/interfaces/IEtherToken.sol";
import "../bancor/token/SmartToken.sol";
import "../interfaces/DBInterface.sol";


///@title A contract for converting any token into MYB (using Bancor's API)
///@author Vlad Silviu Farcas
contract TokenConverter {
    //DBInterface private database;
    IERC20Token private myBitToken;
    IBancorNetwork private bancorNetwork;
    mapping(address => IERC20Token[]) private path;

    address owner;

    ///@notice initialise addresses needed for conversion
    constructor(IERC20Token _token, IBancorNetwork _bancorNetwork) public{
      //database = DBInterface(_database);
      myBitToken = _token;
      owner = msg.sender;
      bancorNetwork = _bancorNetwork;
    }

    ///@notice convert some tokens
    ///@param _token the contract of the token that is about to be converted
    ///@param _amount the amount of _token that is about to be converted
    ///@param _minimumReturn the minimum return of MyBit token that is about to be received
    function convertTokenToMyBit(address _token, uint _amount, uint _minimumReturn)
    external
    payable {
      IERC20Token token;
      if (msg.value == 0){
          // require(bancorNetwork.etherTokens(_token) == true, "Token not supported");
          token = ISmartToken(_token);
          token.transferFrom(msg.sender, bancorNetwork, _amount);
          token.approve(bancorNetwork, _amount);
      } else {
          require(_amount == msg.value);
          token = IEtherToken(_token);
      }
      uint convertedValue = IBancorNetwork(bancorNetwork).convert(
          path[address(token)],
          _amount,
          _minimumReturn
      );
      require (convertedValue >= _minimumReturn, "Transaction failed.");
      require (myBitToken.balanceOf(this) == convertedValue, "Transaction failed with different return than expected");
      myBitToken.transfer(msg.sender, convertedValue);
      token.transfer(msg.sender, token.balanceOf(this));
    }

    function addPath(address token, IERC20Token[] _newPath)
    public
    onlyOwner
    returns (bool){
      path[token] = _newPath;
      return true;
    }

    modifier onlyOwner {
      //require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
      require(owner == msg.sender);
      _;
    }

}
