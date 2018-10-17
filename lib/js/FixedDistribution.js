"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var FixedDistribution = exports.FixedDistribution = 
{
  "contractName": "FixedDistribution",
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
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_tokenHolders",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162000d8238038062000d8283398101806040528101908080518201929190602001805182019291906020018051820192919050505060008060c8845110801562000060575082518451145b15156200006c57600080fd5b8460029080519060200190620000849291906200020c565b50600090505b83518160ff161015620001db57620000d5838260ff16815181101515620000ad57fe5b9060200190602002015183620001ed64010000000002620004e9179091906401000000009004565b91506200016f838260ff16815181101515620000ed57fe5b9060200190602002015160016000878560ff168151811015156200010d57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620001ed64010000000002620004e9179091906401000000009004565b60016000868460ff168151811015156200018557fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080806001019150506200008a565b816000819055505050505050620002bb565b60008082840190508381101515156200020257fe5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200024f57805160ff191683800117855562000280565b8280016001018555821562000280579182015b828111156200027f57825182559160200191906001019062000262565b5b5090506200028f919062000293565b5090565b620002b891905b80821115620002b45760008160009055506001016200029a565b5090565b90565b610ab780620002cb6000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063047fc9aa1461017457806318160ddd1461019f5780632ba1b3a1146101ca5780633c130d90146101f55780633ccfd60b1461028557806370a08231146102b0578063a8fa8e5214610307578063b815239514610332578063eba74e5c14610389578063ec8593be14610393578063efcb5dea146103ea578063f1c5d6c214610441575b6101036100f26000546100e46d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b60048190555061011e346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2005b34801561018057600080fd5b50610189610507565b6040518082815260200191505060405180910390f35b3480156101ab57600080fd5b506101b461050d565b6040518082815260200191505060405180910390f35b3480156101d657600080fd5b506101df610516565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b5061020a61051c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024a57808201518184015260208101905061022f565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029157600080fd5b5061029a6105ba565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b506102f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610803565b6040518082815260200191505060405180910390f35b34801561031357600080fd5b5061031c61084c565b6040518082815260200191505060405180910390f35b34801561033e57600080fd5b50610373600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610852565b6040518082815260200191505060405180910390f35b6103916108d5565b005b34801561039f57600080fd5b506103d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098f565b6040518082815260200191505060405180910390f35b3480156103f657600080fd5b5061042b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a7565b6040518082815260200191505060405180910390f35b34801561044d57600080fd5b50610482600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109bf565b6040518082815260200191505060405180910390f35b60008060008414156104ad57600091506104cc565b82840290508284828115156104be57fe5b041415156104c857fe5b8091505b5092915050565b600081838115156104e057fe5b04905092915050565b60008082840190508381101515156104fd57fe5b8091505092915050565b60005481565b60008054905090565b60035481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b25780601f10610587576101008083540402835291602001916105b2565b820191906000526020600020905b81548152906001019060200180831161059557829003601f168201915b505050505081565b6000336106176105c9826109bf565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104e990919063ffffffff16565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107006d04ee2d6d415b85acef8100000000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d390919063ffffffff16565b9150600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090553373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561078b573d6000803e3d6000fd5b507f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac42423384604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60045481565b60006108ce6d04ee2d6d415b85acef81000000006108c0600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108b2866109bf565b6104e990919063ffffffff16565b6104d390919063ffffffff16565b9050919050565b61091e61090d6000546108ff6d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b600481905550610939346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2565b60056020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b600080610a16600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600454610a7290919063ffffffff16565b9050610a6a600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261049890919063ffffffff16565b915050919050565b6000828211151515610a8057fe5b8183039050929150505600a165627a7a723058200d9e6cbb1e223ddf1cfa6b90a55bc07ecf8645881634334fc92cb495b090af970029",
  "deployedBytecode": "0x6080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063047fc9aa1461017457806318160ddd1461019f5780632ba1b3a1146101ca5780633c130d90146101f55780633ccfd60b1461028557806370a08231146102b0578063a8fa8e5214610307578063b815239514610332578063eba74e5c14610389578063ec8593be14610393578063efcb5dea146103ea578063f1c5d6c214610441575b6101036100f26000546100e46d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b60048190555061011e346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2005b34801561018057600080fd5b50610189610507565b6040518082815260200191505060405180910390f35b3480156101ab57600080fd5b506101b461050d565b6040518082815260200191505060405180910390f35b3480156101d657600080fd5b506101df610516565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b5061020a61051c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561024a57808201518184015260208101905061022f565b50505050905090810190601f1680156102775780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561029157600080fd5b5061029a6105ba565b6040518082815260200191505060405180910390f35b3480156102bc57600080fd5b506102f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610803565b6040518082815260200191505060405180910390f35b34801561031357600080fd5b5061031c61084c565b6040518082815260200191505060405180910390f35b34801561033e57600080fd5b50610373600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610852565b6040518082815260200191505060405180910390f35b6103916108d5565b005b34801561039f57600080fd5b506103d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098f565b6040518082815260200191505060405180910390f35b3480156103f657600080fd5b5061042b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a7565b6040518082815260200191505060405180910390f35b34801561044d57600080fd5b50610482600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109bf565b6040518082815260200191505060405180910390f35b60008060008414156104ad57600091506104cc565b82840290508284828115156104be57fe5b041415156104c857fe5b8091505b5092915050565b600081838115156104e057fe5b04905092915050565b60008082840190508381101515156104fd57fe5b8091505092915050565b60005481565b60008054905090565b60035481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b25780601f10610587576101008083540402835291602001916105b2565b820191906000526020600020905b81548152906001019060200180831161059557829003601f168201915b505050505081565b6000336106176105c9826109bf565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104e990919063ffffffff16565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107006d04ee2d6d415b85acef8100000000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d390919063ffffffff16565b9150600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090553373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561078b573d6000803e3d6000fd5b507f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac42423384604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60045481565b60006108ce6d04ee2d6d415b85acef81000000006108c0600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108b2866109bf565b6104e990919063ffffffff16565b6104d390919063ffffffff16565b9050919050565b61091e61090d6000546108ff6d04ee2d6d415b85acef81000000003461049890919063ffffffff16565b6104d390919063ffffffff16565b6004546104e990919063ffffffff16565b600481905550610939346003546104e990919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2565b60056020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b600080610a16600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600454610a7290919063ffffffff16565b9050610a6a600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261049890919063ffffffff16565b915050919050565b6000828211151515610a8057fe5b8183039050929150505600a165627a7a723058200d9e6cbb1e223ddf1cfa6b90a55bc07ecf8645881634334fc92cb495b090af970029",
  "sourceMap": "484:558:44:-;;;605:435;8:9:-1;5:2;;;30:1;27;20:12;5:2;605:435:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;774:17;828:7;722:3;699:13;:20;:26;:68;;;;;753:7;:14;729:13;:20;:38;699:68;691:77;;;;;;;;808:9;797:8;:20;;;;;;;;;;;;:::i;:::-;;838:1;828:11;;823:186;845:13;:20;841:1;:24;;;823:186;;;895:28;912:7;920:1;912:10;;;;;;;;;;;;;;;;;;;;895:12;:16;;;;;;:28;;;;;:::i;:::-;880:43;;960:42;991:7;999:1;991:10;;;;;;;;;;;;;;;;;;;;960:8;:26;969:13;983:1;969:16;;;;;;;;;;;;;;;;;;;;960:26;;;;;;;;;;;;;;;;:30;;;;;;:42;;;;;:::i;:::-;931:8;:26;940:13;954:1;940:16;;;;;;;;;;;;;;;;;;;;931:26;;;;;;;;;;;;;;;:71;;;;867:3;;;;;;;823:186;;;1023:12;1014:6;:21;;;;605:435;;;;;484:558;;1100:129:29;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;484:558:44:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "484:558:44:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2169:59:46;2187:40;2220:6;;2187:28;794:4;2187:9;:13;;:28;;;;:::i;:::-;:32;;:40;;;;:::i;:::-;2169:13;;:17;;:59;;;;:::i;:::-;2153:13;:75;;;;2250:26;2266:9;2250:11;;:15;;:26;;;;:::i;:::-;2236:11;:40;;;;2307:10;2289:40;;;2319:9;2289:40;;;;;;;;;;;;;;;;;;484:558:44;551:18:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;551:18:46;;;;;;;;;;;;;;;;;;;;;;;3133:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3133:77:46;;;;;;;;;;;;;;;;;;;;;;;802:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;802:23:46;;;;;;;;;;;;;;;;;;;;;;;621:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;621:22:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;621:22:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1043:294;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1043:294:46;;;;;;;;;;;;;;;;;;;;;;;3214:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3214:99:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;829:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;829:25:46;;;;;;;;;;;;;;;;;;;;;;;2964:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2964:165:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1794:234;;;;;;859:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;859:48:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;911:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;911:54:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2648:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2648:221:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;310:173:29;368:7;423:9;392:1;387;:6;383:35;;;410:1;403:8;;;;383:35;439:1;435;:5;423:17;;462:1;457;453;:5;;;;;;;;:10;446:18;;;;;;477:1;470:8;;310:173;;;;;;:::o;558:272::-;616:7;824:1;820;:5;;;;;;;;813:12;;558:272;;;;:::o;1100:129::-;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;551:18:46:-;;;;:::o;3133:77::-;3177:7;3199:6;;3192:13;;3133:77;:::o;802:23::-;;;;:::o;621:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1043:294::-;1119:12;1096:10;3764:48;3791:20;3805:5;3791:13;:20::i;:::-;3764:15;:22;3780:5;3764:22;;;;;;;;;;;;;;;;:26;;:48;;;;:::i;:::-;3739:15;:22;3755:5;3739:22;;;;;;;;;;;;;;;:73;;;;3851:13;;3820:21;:28;3842:5;3820:28;;;;;;;;;;;;;;;:44;;;;1151:46;794:4;1151:15;:27;1167:10;1151:27;;;;;;;;;;;;;;;;:31;;:46;;;;:::i;:::-;1141:56;;1212:15;:27;1228:10;1212:27;;;;;;;;;;;;;;;1205:34;;;1247:10;:19;;:28;1267:7;1247:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1247:28:46;1288:44;1307:3;1312:10;1324:7;1288:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1043:294;;:::o;3214:99::-;3270:7;3292:8;:16;3301:6;3292:16;;;;;;;;;;;;;;;;3285:23;;3214:99;;;:::o;829:25::-;;;;:::o;2964:165::-;3034:4;3056:67;794:4;3056:48;3081:15;:22;3097:5;3081:22;;;;;;;;;;;;;;;;3056:20;3070:5;3056:13;:20::i;:::-;:24;;:48;;;;:::i;:::-;:52;;:67;;;;:::i;:::-;3048:76;;2964:165;;;:::o;1794:234::-;1863:59;1881:40;1914:6;;1881:28;794:4;1881:9;:13;;:28;;;;:::i;:::-;:32;;:40;;;;:::i;:::-;1863:13;;:17;;:59;;;;:::i;:::-;1847:13;:75;;;;1944:26;1960:9;1944:11;;:15;;:26;;;;:::i;:::-;1930:11;:40;;;;2001:10;1983:40;;;2013:9;1983:40;;;;;;;;;;;;;;;;;;1794:234::o;859:48::-;;;;;;;;;;;;;;;;;:::o;911:54::-;;;;;;;;;;;;;;;;;:::o;2648:221::-;2713:4;2727:28;2758:47;2776:21;:28;2798:5;2776:28;;;;;;;;;;;;;;;;2758:13;;:17;;:47;;;;:::i;:::-;2727:78;;2820:44;2848:8;:15;2857:5;2848:15;;;;;;;;;;;;;;;;2820:23;:27;;:44;;;;:::i;:::-;2813:51;;2648:221;;;;:::o;935:110:29:-;993:7;1020:1;1015;:6;;1008:14;;;;;;1039:1;1035;:5;1028:12;;935:110;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport './StandardDistribution.sol';\n\n\n// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share\n// @author Kyle Dewhurst, MyBit Foundation\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\ncontract FixedDistribution is StandardDistribution {\n  using SafeMath for uint;\n\n  // @notice constructor: initialized\n  constructor(string _tokenURI, address[] _tokenHolders, uint[] _amount)\n  public {\n    require(_tokenHolders.length < 200 && _tokenHolders.length == _amount.length);\n    uint _totalSupply;\n    tokenURI = _tokenURI;\n    for (uint8 i = 0; i < _tokenHolders.length; i++) {\n      _totalSupply = _totalSupply.add(_amount[i]);\n      balances[_tokenHolders[i]] = balances[_tokenHolders[i]].add(_amount[i]);\n    }\n    supply = _totalSupply;\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/FixedDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/FixedDistribution.sol",
    "exportedSymbols": {
      "FixedDistribution": [
        10888
      ]
    },
    "id": 10889,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10805,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:44"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 10806,
        "nodeType": "ImportDirective",
        "scope": 10889,
        "sourceUnit": 6934,
        "src": "25:33:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
        "file": "./StandardDistribution.sol",
        "id": 10807,
        "nodeType": "ImportDirective",
        "scope": 10889,
        "sourceUnit": 11238,
        "src": "59:36:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10808,
              "name": "StandardDistribution",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 11237,
              "src": "514:20:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardDistribution_$11237",
                "typeString": "contract StandardDistribution"
              }
            },
            "id": 10809,
            "nodeType": "InheritanceSpecifier",
            "src": "514:20:44"
          }
        ],
        "contractDependencies": [
          11237
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10888,
        "linearizedBaseContracts": [
          10888,
          11237
        ],
        "name": "FixedDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10812,
            "libraryName": {
              "contractScope": null,
              "id": 10810,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6933,
              "src": "545:8:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6933",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "539:24:44",
            "typeName": {
              "id": 10811,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "558:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 10886,
              "nodeType": "Block",
              "src": "685:355:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10827,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10824,
                              "name": "_tokenHolders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10817,
                              "src": "699:13:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 10825,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "699:20:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "323030",
                            "id": 10826,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "722:3:44",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_200_by_1",
                              "typeString": "int_const 200"
                            },
                            "value": "200"
                          },
                          "src": "699:26:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10832,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10828,
                              "name": "_tokenHolders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10817,
                              "src": "729:13:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 10829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:20:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10830,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10820,
                              "src": "753:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 10831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "753:14:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "729:38:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "699:68:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10823,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "691:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "691:77:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10835,
                  "nodeType": "ExpressionStatement",
                  "src": "691:77:44"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10837,
                      "name": "_totalSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 10887,
                      "src": "774:17:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10836,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "774:4:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10838,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "774:17:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10839,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11010,
                      "src": "797:8:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10840,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10814,
                      "src": "808:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "797:20:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 10842,
                  "nodeType": "ExpressionStatement",
                  "src": "797:20:44"
                },
                {
                  "body": {
                    "id": 10880,
                    "nodeType": "Block",
                    "src": "872:137:44",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10861,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 10854,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10837,
                            "src": "880:12:44",
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
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 10857,
                                  "name": "_amount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10820,
                                  "src": "912:7:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 10859,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 10858,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10844,
                                  "src": "920:1:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "912:10:44",
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
                                "id": 10855,
                                "name": "_totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10837,
                                "src": "895:12:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6914,
                              "src": "895:16:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10860,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "895:28:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "880:43:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10862,
                        "nodeType": "ExpressionStatement",
                        "src": "880:43:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 10863,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11008,
                              "src": "931:8:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 10867,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 10864,
                                "name": "_tokenHolders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10817,
                                "src": "940:13:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 10866,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 10865,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10844,
                                "src": "954:1:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "940:16:44",
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
                            "src": "931:26:44",
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
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 10874,
                                  "name": "_amount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10820,
                                  "src": "991:7:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 10876,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 10875,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10844,
                                  "src": "999:1:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "991:10:44",
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
                                  "id": 10868,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11008,
                                  "src": "960:8:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 10872,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 10869,
                                    "name": "_tokenHolders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10817,
                                    "src": "969:13:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 10871,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 10870,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10844,
                                    "src": "983:1:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "969:16:44",
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
                                "src": "960:26:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10873,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6914,
                              "src": "960:30:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "960:42:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "931:71:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10879,
                        "nodeType": "ExpressionStatement",
                        "src": "931:71:44"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 10847,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10844,
                      "src": "841:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 10848,
                        "name": "_tokenHolders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10817,
                        "src": "845:13:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 10849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "845:20:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "841:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10881,
                  "initializationExpression": {
                    "assignments": [
                      10844
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 10844,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 10887,
                        "src": "828:7:44",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 10843,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "828:5:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 10846,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10845,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "838:1:44",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "828:11:44"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10852,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "867:3:44",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 10851,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10844,
                        "src": "867:1:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 10853,
                    "nodeType": "ExpressionStatement",
                    "src": "867:3:44"
                  },
                  "nodeType": "ForStatement",
                  "src": "823:186:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10882,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11004,
                      "src": "1014:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10883,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10837,
                      "src": "1023:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1014:21:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10885,
                  "nodeType": "ExpressionStatement",
                  "src": "1014:21:44"
                }
              ]
            },
            "documentation": null,
            "id": 10887,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10814,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10887,
                  "src": "617:16:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "617:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10817,
                  "name": "_tokenHolders",
                  "nodeType": "VariableDeclaration",
                  "scope": 10887,
                  "src": "635:23:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10815,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "635:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 10816,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "635:9:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10820,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10887,
                  "src": "660:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10818,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "660:4:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10819,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "660:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "616:59:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "685:0:44"
            },
            "scope": 10888,
            "src": "605:435:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10889,
        "src": "484:558:44"
      }
    ],
    "src": "0:1043:44"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/FixedDistribution.sol",
    "exportedSymbols": {
      "FixedDistribution": [
        10888
      ]
    },
    "id": 10889,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10805,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:44"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 10806,
        "nodeType": "ImportDirective",
        "scope": 10889,
        "sourceUnit": 6934,
        "src": "25:33:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
        "file": "./StandardDistribution.sol",
        "id": 10807,
        "nodeType": "ImportDirective",
        "scope": 10889,
        "sourceUnit": 11238,
        "src": "59:36:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10808,
              "name": "StandardDistribution",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 11237,
              "src": "514:20:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardDistribution_$11237",
                "typeString": "contract StandardDistribution"
              }
            },
            "id": 10809,
            "nodeType": "InheritanceSpecifier",
            "src": "514:20:44"
          }
        ],
        "contractDependencies": [
          11237
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10888,
        "linearizedBaseContracts": [
          10888,
          11237
        ],
        "name": "FixedDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10812,
            "libraryName": {
              "contractScope": null,
              "id": 10810,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6933,
              "src": "545:8:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6933",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "539:24:44",
            "typeName": {
              "id": 10811,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "558:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 10886,
              "nodeType": "Block",
              "src": "685:355:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10827,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10824,
                              "name": "_tokenHolders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10817,
                              "src": "699:13:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 10825,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "699:20:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "323030",
                            "id": 10826,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "722:3:44",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_200_by_1",
                              "typeString": "int_const 200"
                            },
                            "value": "200"
                          },
                          "src": "699:26:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10832,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10828,
                              "name": "_tokenHolders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10817,
                              "src": "729:13:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                "typeString": "address[] memory"
                              }
                            },
                            "id": 10829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:20:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10830,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10820,
                              "src": "753:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                "typeString": "uint256[] memory"
                              }
                            },
                            "id": 10831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "753:14:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "729:38:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "699:68:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10823,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "691:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "691:77:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10835,
                  "nodeType": "ExpressionStatement",
                  "src": "691:77:44"
                },
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10837,
                      "name": "_totalSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 10887,
                      "src": "774:17:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10836,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "774:4:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 10838,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "774:17:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10839,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11010,
                      "src": "797:8:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10840,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10814,
                      "src": "808:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "797:20:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 10842,
                  "nodeType": "ExpressionStatement",
                  "src": "797:20:44"
                },
                {
                  "body": {
                    "id": 10880,
                    "nodeType": "Block",
                    "src": "872:137:44",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10861,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 10854,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10837,
                            "src": "880:12:44",
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
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 10857,
                                  "name": "_amount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10820,
                                  "src": "912:7:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 10859,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 10858,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10844,
                                  "src": "920:1:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "912:10:44",
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
                                "id": 10855,
                                "name": "_totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10837,
                                "src": "895:12:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6914,
                              "src": "895:16:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10860,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "895:28:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "880:43:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10862,
                        "nodeType": "ExpressionStatement",
                        "src": "880:43:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 10863,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11008,
                              "src": "931:8:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 10867,
                            "indexExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 10864,
                                "name": "_tokenHolders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10817,
                                "src": "940:13:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 10866,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 10865,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10844,
                                "src": "954:1:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "940:16:44",
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
                            "src": "931:26:44",
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
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 10874,
                                  "name": "_amount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10820,
                                  "src": "991:7:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 10876,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 10875,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10844,
                                  "src": "999:1:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "991:10:44",
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
                                  "id": 10868,
                                  "name": "balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 11008,
                                  "src": "960:8:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 10872,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 10869,
                                    "name": "_tokenHolders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10817,
                                    "src": "969:13:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 10871,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 10870,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10844,
                                    "src": "983:1:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "969:16:44",
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
                                "src": "960:26:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10873,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6914,
                              "src": "960:30:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "960:42:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "931:71:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10879,
                        "nodeType": "ExpressionStatement",
                        "src": "931:71:44"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 10847,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10844,
                      "src": "841:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 10848,
                        "name": "_tokenHolders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10817,
                        "src": "845:13:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 10849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "845:20:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "841:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10881,
                  "initializationExpression": {
                    "assignments": [
                      10844
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 10844,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 10887,
                        "src": "828:7:44",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "typeName": {
                          "id": 10843,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "828:5:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 10846,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10845,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "838:1:44",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "828:11:44"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10852,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "867:3:44",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 10851,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10844,
                        "src": "867:1:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 10853,
                    "nodeType": "ExpressionStatement",
                    "src": "867:3:44"
                  },
                  "nodeType": "ForStatement",
                  "src": "823:186:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10882,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11004,
                      "src": "1014:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10883,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10837,
                      "src": "1023:12:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1014:21:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10885,
                  "nodeType": "ExpressionStatement",
                  "src": "1014:21:44"
                }
              ]
            },
            "documentation": null,
            "id": 10887,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10814,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10887,
                  "src": "617:16:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "617:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10817,
                  "name": "_tokenHolders",
                  "nodeType": "VariableDeclaration",
                  "scope": 10887,
                  "src": "635:23:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10815,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "635:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 10816,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "635:9:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10820,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10887,
                  "src": "660:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10818,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "660:4:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10819,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "660:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "616:59:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "685:0:44"
            },
            "scope": 10888,
            "src": "605:435:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10889,
        "src": "484:558:44"
      }
    ],
    "src": "0:1043:44"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.934Z"
}