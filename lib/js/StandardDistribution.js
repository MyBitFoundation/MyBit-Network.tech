"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var StandardDistribution = exports.StandardDistribution = 
{
  "contractName": "StandardDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "supply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "assetIncome",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "valuePerToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "claimableIncome",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "previousValuePerToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "issueDividends",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getTokenValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUnclaimedAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610ab7806100206000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063047fc9aa1461017457806318160ddd1461019f5780632ba1b3a1146101ca5780633c130d90146101f55780633ccfd60b1461028557806370a08231146102b0578063a8fa8e5214610307578063b815239514610332578063eba74e5c14610389578063ec8593be14610393578063efcb5dea146103ea578063f1c5d6c214610441575b6101036100f26000546100e46d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b60048190555061011e346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2005b34801561018057600080fd5b50610189610507565b6040518082815260200191505060405180910390f35b3480156101ab57600080fd5b506101b461050d565b6040518082815260200191505060405180910390f35b3480156101d657600080fd5b506101df610516565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b5061020a61051c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024a57808201518184015260208101905061022f565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029157600080fd5b5061029a6105ba565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b506102f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610803565b6040518082815260200191505060405180910390f35b34801561031357600080fd5b5061031c61084c565b6040518082815260200191505060405180910390f35b34801561033e57600080fd5b50610373600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610852565b6040518082815260200191505060405180910390f35b6103916108d5565b005b34801561039f57600080fd5b506103d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098f565b6040518082815260200191505060405180910390f35b3480156103f657600080fd5b5061042b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a7565b6040518082815260200191505060405180910390f35b34801561044d57600080fd5b50610482600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109bf565b6040518082815260200191505060405180910390f35b60008060008414156104ad57600091506104cc565b82840290508284828115156104be57fe5b041415156104c857fe5b8091505b5092915050565b600081838115156104e057fe5b04905092915050565b60008082840190508381101515156104fd57fe5b8091505092915050565b60005481565b60008054905090565b60035481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b25780601f10610587576101008083540402835291602001916105b2565b820191906000526020600020905b81548152906001019060200180831161059557829003601f168201915b505050505081565b6000336106176105c9826109bf565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104e990919063ffffffff16565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107006d04ee2d6d415b85acef8100000000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d390919063ffffffff16565b9150600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090553373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561078b573d6000803e3d6000fd5b507f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac42423384604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60045481565b60006108ce6d04ee2d6d415b85acef81000000006108c0600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108b2866109bf565b6104e990919063ffffffff16565b6104d390919063ffffffff16565b9050919050565b61091e61090d6000546108ff6d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b600481905550610939346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2565b60056020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b600080610a16600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600454610a7290919063ffffffff16565b9050610a6a600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261049890919063ffffffff16565b915050919050565b6000828211151515610a8057fe5b8183039050929150505600a165627a7a723058205bc44d60f001361942e7419b08305fb94bd13057c76aa44b6b711b0b8ca0a2d60029",
  "deployedBytecode": "0x6080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063047fc9aa1461017457806318160ddd1461019f5780632ba1b3a1146101ca5780633c130d90146101f55780633ccfd60b1461028557806370a08231146102b0578063a8fa8e5214610307578063b815239514610332578063eba74e5c14610389578063ec8593be14610393578063efcb5dea146103ea578063f1c5d6c214610441575b6101036100f26000546100e46d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b60048190555061011e346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2005b34801561018057600080fd5b50610189610507565b6040518082815260200191505060405180910390f35b3480156101ab57600080fd5b506101b461050d565b6040518082815260200191505060405180910390f35b3480156101d657600080fd5b506101df610516565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b5061020a61051c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024a57808201518184015260208101905061022f565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029157600080fd5b5061029a6105ba565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b506102f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610803565b6040518082815260200191505060405180910390f35b34801561031357600080fd5b5061031c61084c565b6040518082815260200191505060405180910390f35b34801561033e57600080fd5b50610373600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610852565b6040518082815260200191505060405180910390f35b6103916108d5565b005b34801561039f57600080fd5b506103d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098f565b6040518082815260200191505060405180910390f35b3480156103f657600080fd5b5061042b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a7565b6040518082815260200191505060405180910390f35b34801561044d57600080fd5b50610482600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109bf565b6040518082815260200191505060405180910390f35b60008060008414156104ad57600091506104cc565b82840290508284828115156104be57fe5b041415156104c857fe5b8091505b5092915050565b600081838115156104e057fe5b04905092915050565b60008082840190508381101515156104fd57fe5b8091505092915050565b60005481565b60008054905090565b60035481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b25780601f10610587576101008083540402835291602001916105b2565b820191906000526020600020905b81548152906001019060200180831161059557829003601f168201915b505050505081565b6000336106176105c9826109bf565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104e990919063ffffffff16565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107006d04ee2d6d415b85acef8100000000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d390919063ffffffff16565b9150600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090553373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561078b573d6000803e3d6000fd5b507f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac42423384604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60045481565b60006108ce6d04ee2d6d415b85acef81000000006108c0600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108b2866109bf565b6104e990919063ffffffff16565b6104d390919063ffffffff16565b9050919050565b61091e61090d6000546108ff6d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b600481905550610939346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2565b60056020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b600080610a16600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600454610a7290919063ffffffff16565b9050610a6a600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261049890919063ffffffff16565b915050919050565b6000828211151515610a8057fe5b8183039050929150505600a165627a7a723058205bc44d60f001361942e7419b08305fb94bd13057c76aa44b6b711b0b8ca0a2d60029",
  "sourceMap": "490:3793:39:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;490:3793:39;;;;;;;",
  "deployedSourceMap": "490:3793:39:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:59;2188:40;2221:6;;2188:28;795:4;2188:9;:13;;:28;;;;:::i;:::-;:32;;:40;;;;:::i;:::-;2170:13;;:17;;:59;;;;:::i;:::-;2154:13;:75;;;;2251:26;2267:9;2251:11;;:15;;:26;;;;:::i;:::-;2237:11;:40;;;;2308:10;2290:40;;;2320:9;2290:40;;;;;;;;;;;;;;;;;;490:3793;552:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;552:18:39;;;;;;;;;;;;;;;;;;;;;;;3134:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3134:77:39;;;;;;;;;;;;;;;;;;;;;;;803:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;803:23:39;;;;;;;;;;;;;;;;;;;;;;;622:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;622:22:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;622:22:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:294;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1044:294:39;;;;;;;;;;;;;;;;;;;;;;;3215:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3215:99:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;830:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;830:25:39;;;;;;;;;;;;;;;;;;;;;;;2965:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2965:165:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1795:234;;;;;;860:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;860:48:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;912:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;912:54:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2649:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2649:221:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;310:173:25;368:7;423:9;392:1;387;:6;383:35;;;410:1;403:8;;;;383:35;439:1;435;:5;423:17;;462:1;457;453;:5;;;;;;;;:10;446:18;;;;;;477:1;470:8;;310:173;;;;;;:::o;558:272::-;616:7;824:1;820;:5;;;;;;;;813:12;;558:272;;;;:::o;1100:129::-;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;552:18:39:-;;;;:::o;3134:77::-;3178:7;3200:6;;3193:13;;3134:77;:::o;803:23::-;;;;:::o;622:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:294::-;1120:12;1097:10;3765:48;3792:20;3806:5;3792:13;:20::i;:::-;3765:15;:22;3781:5;3765:22;;;;;;;;;;;;;;;;:26;;:48;;;;:::i;:::-;3740:15;:22;3756:5;3740:22;;;;;;;;;;;;;;;:73;;;;3852:13;;3821:21;:28;3843:5;3821:28;;;;;;;;;;;;;;;:44;;;;1152:46;795:4;1152:15;:27;1168:10;1152:27;;;;;;;;;;;;;;;;:31;;:46;;;;:::i;:::-;1142:56;;1213:15;:27;1229:10;1213:27;;;;;;;;;;;;;;;1206:34;;;1248:10;:19;;:28;1268:7;1248:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1248:28:39;1289:44;1308:3;1313:10;1325:7;1289:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:294;;:::o;3215:99::-;3271:7;3293:8;:16;3302:6;3293:16;;;;;;;;;;;;;;;;3286:23;;3215:99;;;:::o;830:25::-;;;;:::o;2965:165::-;3035:4;3057:67;795:4;3057:48;3082:15;:22;3098:5;3082:22;;;;;;;;;;;;;;;;3057:20;3071:5;3057:13;:20::i;:::-;:24;;:48;;;;:::i;:::-;:52;;:67;;;;:::i;:::-;3049:76;;2965:165;;;:::o;1795:234::-;1864:59;1882:40;1915:6;;1882:28;795:4;1882:9;:13;;:28;;;;:::i;:::-;:32;;:40;;;;:::i;:::-;1864:13;;:17;;:59;;;;:::i;:::-;1848:13;:75;;;;1945:26;1961:9;1945:11;;:15;;:26;;;;:::i;:::-;1931:11;:40;;;;2002:10;1984:40;;;2014:9;1984:40;;;;;;;;;;;;;;;;;;1795:234::o;860:48::-;;;;;;;;;;;;;;;;;:::o;912:54::-;;;;;;;;;;;;;;;;;:::o;2649:221::-;2714:4;2728:28;2759:47;2777:21;:28;2799:5;2777:28;;;;;;;;;;;;;;;;2759:13;;:17;;:47;;;;:::i;:::-;2728:78;;2821:44;2849:8;:15;2858:5;2849:15;;;;;;;;;;;;;;;;2821:23;:27;;:44;;;;:::i;:::-;2814:51;;2649:221;;;;:::o;935:110:25:-;993:7;1020:1;1015;:6;;1008:14;;;;;;1039:1;1035;:5;1028:12;;935:110;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport '../../interfaces/PullPayment.sol';\n\n\n// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share\n// @author Kyle Dewhurst, MyBitFoundation\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\n\ncontract StandardDistribution{\n  using SafeMath for uint;\n\n\n  uint public supply;\n  mapping (address => uint) internal balances;\n\n  string public tokenURI;                 // A reference to a URI containing further token information\n\n\n  // @notice Token Income Information\n  uint constant scalingFactor = 1e32;\n  uint public assetIncome;\n  uint public valuePerToken;\n\n  mapping (address => uint) public claimableIncome;\n  mapping (address => uint) public previousValuePerToken;\n\n\n  // @notice Updates claimableIncome, sends all wei to the token holder\n  function withdraw()\n  public\n  updateclaimableIncome(msg.sender)\n  returns (uint _amount) {\n      _amount = claimableIncome[msg.sender].div(scalingFactor);\n      delete claimableIncome[msg.sender];\n      msg.sender.transfer(_amount);\n      emit LogIncomeCollected(now, msg.sender, _amount);\n  }\n/*\n  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here\n  // @dev can call withdraw() on any address if there are no parameters required. Fallback function will be triggered\n  // @param (address) _contractAddress = The address to call withdraw() on.\n  function getFunds(address _contractAddress)\n  external\n  returns (bool) {\n    PullPayment(_contractAddress).withdraw();\n    return true;\n  }\n\n*/\n  function issueDividends()\n  payable\n  public {\n      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));\n      assetIncome = assetIncome.add(msg.value);\n      emit LogIncomeReceived(msg.sender, msg.value);\n  }\n\n    // Fallback function: Accepts Ether and updates ledger (issues dividends)\n  function ()\n    payable\n    public {\n      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));\n      assetIncome = assetIncome.add(msg.value);\n      emit LogIncomeReceived(msg.sender, msg.value);\n  }\n\n  // ------------------------------------------------------------------------------------------------\n  //                                   View Functions\n  // ------------------------------------------------------------------------------------------------\n\n  // @notice Calculates how much value _user holds\n  function getTokenValue(address _user)\n  public\n  view\n  returns (uint) {\n      uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_user]);\n      return valuePerTokenDifference.mul(balances[_user]);\n  }\n\n  // @notice Calculates how much wei user is owed. (new income + claimableIncome) / 10**32\n  function getUnclaimedAmount(address _user)\n  public\n  view\n  returns (uint) {\n      return (getTokenValue(_user).add(claimableIncome[_user]).div(scalingFactor));\n  }\n\n  function totalSupply() public view returns (uint256) {\n    return supply;\n  }\n\n  function balanceOf(address _owner) public view returns (uint256) {\n    return balances[_owner];\n  }\n\n  // ------------------------------------------------------------------------------------------------\n  //                                   Modifiers\n  // ------------------------------------------------------------------------------------------------\n\n  // Updates the amount owed to user while holding tokenSupply\n  // @dev must be called before transfering tokens\n  modifier updateclaimableIncome(address _user) {\n      claimableIncome[_user] = claimableIncome[_user].add(getTokenValue(_user));\n      previousValuePerToken[_user] = valuePerToken;\n      _;\n  }\n\n\n  // ------------------------------------------------------------------------------------------------\n  //                                     Events\n  // ------------------------------------------------------------------------------------------------\n\n  event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n  event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
    "exportedSymbols": {
      "StandardDistribution": [
        10433
      ]
    },
    "id": 10434,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10193,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:39"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 10194,
        "nodeType": "ImportDirective",
        "scope": 10434,
        "sourceUnit": 6331,
        "src": "25:33:39",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 10195,
        "nodeType": "ImportDirective",
        "scope": 10434,
        "sourceUnit": 6219,
        "src": "59:42:39",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10433,
        "linearizedBaseContracts": [
          10433
        ],
        "name": "StandardDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10198,
            "libraryName": {
              "contractScope": null,
              "id": 10196,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6330,
              "src": "529:8:39",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6330",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "523:24:39",
            "typeName": {
              "id": 10197,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "542:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 10200,
            "name": "supply",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "552:18:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10199,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "552:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10204,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "574:43:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10203,
              "keyType": {
                "id": 10201,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "583:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "574:25:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10202,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "594:4:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10206,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "622:22:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 10205,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "622:6:39",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 10209,
            "name": "scalingFactor",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "765:34:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10207,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "765:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653332",
              "id": 10208,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "795:4:39",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(25 digits omitted)...0000"
              },
              "value": "1e32"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10211,
            "name": "assetIncome",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "803:23:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10210,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "803:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10213,
            "name": "valuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "830:25:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10212,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "830:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10217,
            "name": "claimableIncome",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "860:48:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10216,
              "keyType": {
                "id": 10214,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "869:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "860:25:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10215,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "880:4:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10221,
            "name": "previousValuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "912:54:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10220,
              "keyType": {
                "id": 10218,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "921:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "912:25:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10219,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "932:4:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10261,
              "nodeType": "Block",
              "src": "1134:204:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10230,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10228,
                      "src": "1142:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10236,
                          "name": "scalingFactor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10209,
                          "src": "1184:13:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 10231,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10217,
                            "src": "1152:15:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 10234,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10232,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "1168:3:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1168:10:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1152:27:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "div",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6267,
                        "src": "1152:31:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10237,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1152:46:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1142:56:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10239,
                  "nodeType": "ExpressionStatement",
                  "src": "1142:56:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "1206:34:39",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10240,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10217,
                        "src": "1213:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10243,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10241,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1229:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10242,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1229:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1213:27:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10245,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:34:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10251,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10228,
                        "src": "1268:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10246,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1248:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1248:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 10250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1248:19:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 10252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1248:28:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10253,
                  "nodeType": "ExpressionStatement",
                  "src": "1248:28:39"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10255,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12466,
                        "src": "1308:3:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10256,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1313:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1313:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10258,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10228,
                        "src": "1325:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10254,
                      "name": "LogIncomeCollected",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10432,
                      "src": "1289:18:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 10259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:44:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10260,
                  "nodeType": "EmitStatement",
                  "src": "1284:49:39"
                }
              ]
            },
            "documentation": null,
            "id": 10262,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 10224,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12464,
                      "src": "1097:3:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 10225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1097:10:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 10226,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10223,
                  "name": "updateclaimableIncome",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10418,
                  "src": "1075:21:39",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1075:33:39"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10222,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1061:2:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10228,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10262,
                  "src": "1120:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10227,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:14:39"
            },
            "scope": 10433,
            "src": "1044:294:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10294,
              "nodeType": "Block",
              "src": "1840:189:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10265,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10213,
                      "src": "1848:13:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10274,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10200,
                              "src": "1915:6:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10271,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10209,
                                  "src": "1896:13:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 10268,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12464,
                                    "src": "1882:3:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 10269,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1882:9:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 10270,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6253,
                                "src": "1882:13:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 10272,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1882:28:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6267,
                            "src": "1882:32:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1882:40:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10266,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10213,
                          "src": "1864:13:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1864:17:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1864:59:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1848:75:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10278,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:75:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10279,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10211,
                      "src": "1931:11:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10282,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12464,
                            "src": "1961:3:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1961:9:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10280,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10211,
                          "src": "1945:11:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1945:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1945:26:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1931:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10286,
                  "nodeType": "ExpressionStatement",
                  "src": "1931:40:39"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10288,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2002:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2002:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10290,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2014:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2014:9:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10287,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10424,
                      "src": "1984:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1984:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10293,
                  "nodeType": "EmitStatement",
                  "src": "1979:45:39"
                }
              ]
            },
            "documentation": null,
            "id": 10295,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10263,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:2:39"
            },
            "payable": true,
            "returnParameters": {
              "id": 10264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1840:0:39"
            },
            "scope": 10433,
            "src": "1795:234:39",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10327,
              "nodeType": "Block",
              "src": "2146:189:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10298,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10213,
                      "src": "2154:13:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10307,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10200,
                              "src": "2221:6:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10304,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10209,
                                  "src": "2202:13:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 10301,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12464,
                                    "src": "2188:3:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 10302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2188:9:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 10303,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6253,
                                "src": "2188:13:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 10305,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2188:28:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10306,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6267,
                            "src": "2188:32:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2188:40:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10299,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10213,
                          "src": "2170:13:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "2170:17:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2170:59:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2154:75:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10311,
                  "nodeType": "ExpressionStatement",
                  "src": "2154:75:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10312,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10211,
                      "src": "2237:11:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10315,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12464,
                            "src": "2267:3:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2267:9:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10313,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10211,
                          "src": "2251:11:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "2251:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10317,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2251:26:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2237:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10319,
                  "nodeType": "ExpressionStatement",
                  "src": "2237:40:39"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10321,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2308:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2308:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10323,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2320:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2320:9:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10320,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10424,
                      "src": "2290:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2290:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10326,
                  "nodeType": "EmitStatement",
                  "src": "2285:45:39"
                }
              ]
            },
            "documentation": null,
            "id": 10328,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10296,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2120:2:39"
            },
            "payable": true,
            "returnParameters": {
              "id": 10297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2146:0:39"
            },
            "scope": 10433,
            "src": "2111:224:39",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10351,
              "nodeType": "Block",
              "src": "2720:150:39",
              "statements": [
                {
                  "assignments": [
                    10336
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10336,
                      "name": "valuePerTokenDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 10352,
                      "src": "2728:28:39",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10335,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2728:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10343,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10339,
                          "name": "previousValuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10221,
                          "src": "2777:21:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 10341,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10340,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10330,
                          "src": "2799:5:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2777:28:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 10337,
                        "name": "valuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10213,
                        "src": "2759:13:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6287,
                      "src": "2759:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2759:47:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2728:78:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10346,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10204,
                          "src": "2849:8:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 10348,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10347,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10330,
                          "src": "2858:5:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2849:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 10344,
                        "name": "valuePerTokenDifference",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10336,
                        "src": "2821:23:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6253,
                      "src": "2821:27:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2821:44:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10334,
                  "id": 10350,
                  "nodeType": "Return",
                  "src": "2814:51:39"
                }
              ]
            },
            "documentation": null,
            "id": 10352,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10330,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10352,
                  "src": "2672:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2671:15:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10333,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10352,
                  "src": "2714:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10332,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2714:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2713:6:39"
            },
            "scope": 10433,
            "src": "2649:221:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10372,
              "nodeType": "Block",
              "src": "3041:89:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 10368,
                            "name": "scalingFactor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10209,
                            "src": "3110:13:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 10363,
                                  "name": "claimableIncome",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10217,
                                  "src": "3082:15:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 10365,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 10364,
                                  "name": "_user",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10354,
                                  "src": "3098:5:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3082:22:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 10360,
                                    "name": "_user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10354,
                                    "src": "3071:5:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 10359,
                                  "name": "getTokenValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10352,
                                  "src": "3057:13:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view returns (uint256)"
                                  }
                                },
                                "id": 10361,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3057:20:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10362,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6311,
                              "src": "3057:24:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10366,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3057:48:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 10367,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6267,
                          "src": "3057:52:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 10369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3057:67:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 10370,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3056:69:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10358,
                  "id": 10371,
                  "nodeType": "Return",
                  "src": "3049:76:39"
                }
              ]
            },
            "documentation": null,
            "id": 10373,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUnclaimedAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10354,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10373,
                  "src": "2993:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10353,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2993:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2992:15:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10357,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10373,
                  "src": "3035:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10356,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3035:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3034:6:39"
            },
            "scope": 10433,
            "src": "2965:165:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10380,
              "nodeType": "Block",
              "src": "3187:24:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10378,
                    "name": "supply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10200,
                    "src": "3200:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10377,
                  "id": 10379,
                  "nodeType": "Return",
                  "src": "3193:13:39"
                }
              ]
            },
            "documentation": null,
            "id": 10381,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3154:2:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10376,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10381,
                  "src": "3178:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10375,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3178:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3177:9:39"
            },
            "scope": 10433,
            "src": "3134:77:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10392,
              "nodeType": "Block",
              "src": "3280:34:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 10388,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10204,
                      "src": "3293:8:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 10390,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 10389,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10383,
                      "src": "3302:6:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3293:16:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10387,
                  "id": 10391,
                  "nodeType": "Return",
                  "src": "3286:23:39"
                }
              ]
            },
            "documentation": null,
            "id": 10393,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10383,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10393,
                  "src": "3234:14:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10382,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3234:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3233:16:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10386,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10393,
                  "src": "3271:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3271:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:9:39"
            },
            "scope": 10433,
            "src": "3215:99:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10417,
              "nodeType": "Block",
              "src": "3732:147:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10397,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10217,
                        "src": "3740:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10399,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10398,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10395,
                        "src": "3756:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3740:22:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10405,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10395,
                              "src": "3806:5:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 10404,
                            "name": "getTokenValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10352,
                            "src": "3792:13:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 10406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3792:20:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 10400,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10217,
                            "src": "3765:15:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 10402,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 10401,
                            "name": "_user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10395,
                            "src": "3781:5:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3765:22:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "3765:26:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3765:48:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3740:73:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10409,
                  "nodeType": "ExpressionStatement",
                  "src": "3740:73:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10410,
                        "name": "previousValuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10221,
                        "src": "3821:21:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10412,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10411,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10395,
                        "src": "3843:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3821:28:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10413,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10213,
                      "src": "3852:13:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3821:44:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10415,
                  "nodeType": "ExpressionStatement",
                  "src": "3821:44:39"
                },
                {
                  "id": 10416,
                  "nodeType": "PlaceholderStatement",
                  "src": "3873:1:39"
                }
              ]
            },
            "documentation": null,
            "id": 10418,
            "name": "updateclaimableIncome",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10395,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10418,
                  "src": "3717:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3716:15:39"
            },
            "src": "3686:193:39",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10424,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10420,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10424,
                  "src": "4161:23:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10419,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4161:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10422,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10424,
                  "src": "4186:19:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10421,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4160:46:39"
            },
            "src": "4137:70:39"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10432,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10426,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 10432,
                  "src": "4235:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4235:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10428,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 10432,
                  "src": "4248:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4248:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10430,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10432,
                  "src": "4266:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10429,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4266:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4234:45:39"
            },
            "src": "4210:70:39"
          }
        ],
        "scope": 10434,
        "src": "490:3793:39"
      }
    ],
    "src": "0:4284:39"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
    "exportedSymbols": {
      "StandardDistribution": [
        10433
      ]
    },
    "id": 10434,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10193,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:39"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 10194,
        "nodeType": "ImportDirective",
        "scope": 10434,
        "sourceUnit": 6331,
        "src": "25:33:39",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 10195,
        "nodeType": "ImportDirective",
        "scope": 10434,
        "sourceUnit": 6219,
        "src": "59:42:39",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10433,
        "linearizedBaseContracts": [
          10433
        ],
        "name": "StandardDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10198,
            "libraryName": {
              "contractScope": null,
              "id": 10196,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6330,
              "src": "529:8:39",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6330",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "523:24:39",
            "typeName": {
              "id": 10197,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "542:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 10200,
            "name": "supply",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "552:18:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10199,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "552:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10204,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "574:43:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10203,
              "keyType": {
                "id": 10201,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "583:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "574:25:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10202,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "594:4:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10206,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "622:22:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 10205,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "622:6:39",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 10209,
            "name": "scalingFactor",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "765:34:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10207,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "765:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653332",
              "id": 10208,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "795:4:39",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(25 digits omitted)...0000"
              },
              "value": "1e32"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10211,
            "name": "assetIncome",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "803:23:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10210,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "803:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10213,
            "name": "valuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "830:25:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10212,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "830:4:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10217,
            "name": "claimableIncome",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "860:48:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10216,
              "keyType": {
                "id": 10214,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "869:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "860:25:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10215,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "880:4:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10221,
            "name": "previousValuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 10433,
            "src": "912:54:39",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 10220,
              "keyType": {
                "id": 10218,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "921:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "912:25:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10219,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "932:4:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10261,
              "nodeType": "Block",
              "src": "1134:204:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10230,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10228,
                      "src": "1142:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10236,
                          "name": "scalingFactor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10209,
                          "src": "1184:13:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 10231,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10217,
                            "src": "1152:15:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 10234,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10232,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "1168:3:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1168:10:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1152:27:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "div",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6267,
                        "src": "1152:31:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10237,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1152:46:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1142:56:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10239,
                  "nodeType": "ExpressionStatement",
                  "src": "1142:56:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "1206:34:39",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10240,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10217,
                        "src": "1213:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10243,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10241,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1229:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10242,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1229:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1213:27:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10245,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:34:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10251,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10228,
                        "src": "1268:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10246,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1248:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1248:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 10250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1248:19:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 10252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1248:28:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10253,
                  "nodeType": "ExpressionStatement",
                  "src": "1248:28:39"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10255,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12466,
                        "src": "1308:3:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10256,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1313:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1313:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10258,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10228,
                        "src": "1325:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10254,
                      "name": "LogIncomeCollected",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10432,
                      "src": "1289:18:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 10259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:44:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10260,
                  "nodeType": "EmitStatement",
                  "src": "1284:49:39"
                }
              ]
            },
            "documentation": null,
            "id": 10262,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 10224,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12464,
                      "src": "1097:3:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 10225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1097:10:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 10226,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10223,
                  "name": "updateclaimableIncome",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10418,
                  "src": "1075:21:39",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1075:33:39"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10222,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1061:2:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10228,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10262,
                  "src": "1120:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10227,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:14:39"
            },
            "scope": 10433,
            "src": "1044:294:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10294,
              "nodeType": "Block",
              "src": "1840:189:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10265,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10213,
                      "src": "1848:13:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10274,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10200,
                              "src": "1915:6:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10271,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10209,
                                  "src": "1896:13:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 10268,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12464,
                                    "src": "1882:3:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 10269,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1882:9:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 10270,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6253,
                                "src": "1882:13:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 10272,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1882:28:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6267,
                            "src": "1882:32:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1882:40:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10266,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10213,
                          "src": "1864:13:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1864:17:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1864:59:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1848:75:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10278,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:75:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10279,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10211,
                      "src": "1931:11:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10282,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12464,
                            "src": "1961:3:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10283,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1961:9:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10280,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10211,
                          "src": "1945:11:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1945:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1945:26:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1931:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10286,
                  "nodeType": "ExpressionStatement",
                  "src": "1931:40:39"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10288,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2002:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2002:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10290,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2014:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2014:9:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10287,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10424,
                      "src": "1984:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1984:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10293,
                  "nodeType": "EmitStatement",
                  "src": "1979:45:39"
                }
              ]
            },
            "documentation": null,
            "id": 10295,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10263,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:2:39"
            },
            "payable": true,
            "returnParameters": {
              "id": 10264,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1840:0:39"
            },
            "scope": 10433,
            "src": "1795:234:39",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10327,
              "nodeType": "Block",
              "src": "2146:189:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10298,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10213,
                      "src": "2154:13:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10307,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10200,
                              "src": "2221:6:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10304,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10209,
                                  "src": "2202:13:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 10301,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12464,
                                    "src": "2188:3:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 10302,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2188:9:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 10303,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 6253,
                                "src": "2188:13:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 10305,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2188:28:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10306,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 6267,
                            "src": "2188:32:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2188:40:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10299,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10213,
                          "src": "2170:13:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "2170:17:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2170:59:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2154:75:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10311,
                  "nodeType": "ExpressionStatement",
                  "src": "2154:75:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10312,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10211,
                      "src": "2237:11:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10315,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12464,
                            "src": "2267:3:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2267:9:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10313,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10211,
                          "src": "2251:11:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10314,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "2251:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10317,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2251:26:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2237:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10319,
                  "nodeType": "ExpressionStatement",
                  "src": "2237:40:39"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10321,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2308:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2308:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10323,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2320:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2320:9:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10320,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10424,
                      "src": "2290:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10325,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2290:40:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10326,
                  "nodeType": "EmitStatement",
                  "src": "2285:45:39"
                }
              ]
            },
            "documentation": null,
            "id": 10328,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10296,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2120:2:39"
            },
            "payable": true,
            "returnParameters": {
              "id": 10297,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2146:0:39"
            },
            "scope": 10433,
            "src": "2111:224:39",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10351,
              "nodeType": "Block",
              "src": "2720:150:39",
              "statements": [
                {
                  "assignments": [
                    10336
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10336,
                      "name": "valuePerTokenDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 10352,
                      "src": "2728:28:39",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10335,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2728:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10343,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10339,
                          "name": "previousValuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10221,
                          "src": "2777:21:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 10341,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10340,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10330,
                          "src": "2799:5:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2777:28:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 10337,
                        "name": "valuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10213,
                        "src": "2759:13:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10338,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6287,
                      "src": "2759:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2759:47:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2728:78:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10346,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10204,
                          "src": "2849:8:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 10348,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10347,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10330,
                          "src": "2858:5:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2849:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 10344,
                        "name": "valuePerTokenDifference",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10336,
                        "src": "2821:23:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10345,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6253,
                      "src": "2821:27:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2821:44:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10334,
                  "id": 10350,
                  "nodeType": "Return",
                  "src": "2814:51:39"
                }
              ]
            },
            "documentation": null,
            "id": 10352,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10330,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10352,
                  "src": "2672:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2671:15:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10333,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10352,
                  "src": "2714:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10332,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2714:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2713:6:39"
            },
            "scope": 10433,
            "src": "2649:221:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10372,
              "nodeType": "Block",
              "src": "3041:89:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 10368,
                            "name": "scalingFactor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10209,
                            "src": "3110:13:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 10363,
                                  "name": "claimableIncome",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10217,
                                  "src": "3082:15:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 10365,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 10364,
                                  "name": "_user",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10354,
                                  "src": "3098:5:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3082:22:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 10360,
                                    "name": "_user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10354,
                                    "src": "3071:5:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 10359,
                                  "name": "getTokenValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10352,
                                  "src": "3057:13:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view returns (uint256)"
                                  }
                                },
                                "id": 10361,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3057:20:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10362,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6311,
                              "src": "3057:24:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10366,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3057:48:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 10367,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6267,
                          "src": "3057:52:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 10369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3057:67:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 10370,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3056:69:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10358,
                  "id": 10371,
                  "nodeType": "Return",
                  "src": "3049:76:39"
                }
              ]
            },
            "documentation": null,
            "id": 10373,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUnclaimedAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10354,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10373,
                  "src": "2993:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10353,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2993:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2992:15:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10357,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10373,
                  "src": "3035:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10356,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3035:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3034:6:39"
            },
            "scope": 10433,
            "src": "2965:165:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10380,
              "nodeType": "Block",
              "src": "3187:24:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10378,
                    "name": "supply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10200,
                    "src": "3200:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10377,
                  "id": 10379,
                  "nodeType": "Return",
                  "src": "3193:13:39"
                }
              ]
            },
            "documentation": null,
            "id": 10381,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3154:2:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10376,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10381,
                  "src": "3178:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10375,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3178:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3177:9:39"
            },
            "scope": 10433,
            "src": "3134:77:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10392,
              "nodeType": "Block",
              "src": "3280:34:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 10388,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10204,
                      "src": "3293:8:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 10390,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 10389,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10383,
                      "src": "3302:6:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3293:16:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10387,
                  "id": 10391,
                  "nodeType": "Return",
                  "src": "3286:23:39"
                }
              ]
            },
            "documentation": null,
            "id": 10393,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10383,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10393,
                  "src": "3234:14:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10382,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3234:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3233:16:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 10387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10386,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10393,
                  "src": "3271:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3271:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:9:39"
            },
            "scope": 10433,
            "src": "3215:99:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10417,
              "nodeType": "Block",
              "src": "3732:147:39",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10408,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10397,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10217,
                        "src": "3740:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10399,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10398,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10395,
                        "src": "3756:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3740:22:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10405,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10395,
                              "src": "3806:5:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 10404,
                            "name": "getTokenValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10352,
                            "src": "3792:13:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 10406,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3792:20:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 10400,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10217,
                            "src": "3765:15:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 10402,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 10401,
                            "name": "_user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10395,
                            "src": "3781:5:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3765:22:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "3765:26:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3765:48:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3740:73:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10409,
                  "nodeType": "ExpressionStatement",
                  "src": "3740:73:39"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10410,
                        "name": "previousValuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10221,
                        "src": "3821:21:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10412,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10411,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10395,
                        "src": "3843:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3821:28:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10413,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10213,
                      "src": "3852:13:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3821:44:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10415,
                  "nodeType": "ExpressionStatement",
                  "src": "3821:44:39"
                },
                {
                  "id": 10416,
                  "nodeType": "PlaceholderStatement",
                  "src": "3873:1:39"
                }
              ]
            },
            "documentation": null,
            "id": 10418,
            "name": "updateclaimableIncome",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10395,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10418,
                  "src": "3717:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3716:15:39"
            },
            "src": "3686:193:39",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10424,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10420,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10424,
                  "src": "4161:23:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10419,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4161:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10422,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10424,
                  "src": "4186:19:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10421,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4160:46:39"
            },
            "src": "4137:70:39"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10432,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10426,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 10432,
                  "src": "4235:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4235:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10428,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 10432,
                  "src": "4248:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4248:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10430,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10432,
                  "src": "4266:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10429,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4266:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4234:45:39"
            },
            "src": "4210:70:39"
          }
        ],
        "scope": 10434,
        "src": "490:3793:39"
      }
    ],
    "src": "0:4284:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.520Z"
}