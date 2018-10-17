"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var EqualDistribution = exports.EqualDistribution = 
{
  "contractName": "EqualDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "amountRedeemed",
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
      "name": "totalReleased",
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
          "type": "uint256"
        }
      ],
      "name": "beneficiaries",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_beneficiaries",
          "type": "address[]"
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
          "indexed": false,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogPayment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogWithdraw",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contractAddress",
          "type": "address"
        }
      ],
      "name": "getFunds",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "isBeneficiary",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161080b38038061080b833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b505061011d565b8280548282559060005260206000209081019282156100c9579160200282015b828111156100c85782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610070565b5b5090506100d691906100da565b5090565b61011a91905b8082111561011657600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016100e0565b5090565b90565b6106df8061012c6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633ccfd60b146100e55780636d9c6605146101145780639d19b2261461016b578063decebbce146101c6578063e33b7de314610221578063efeb5e581461024c575b7f27a391d95d67e3626574fb5fbe3532bb7366e9254957b1f0e840953c248b2aa83334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b3480156100f157600080fd5b506100fa6102b9565b604051808215151515815260200191505060405180910390f35b34801561012057600080fd5b50610155600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104bc565b6040518082815260200191505060405180910390f35b34801561017757600080fd5b506101ac600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104d4565b604051808215151515815260200191505060405180910390f35b3480156101d257600080fd5b50610207600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610577565b604051808215151515815260200191505060405180910390f35b34801561022d57600080fd5b50610236610622565b6040518082815260200191505060405180910390f35b34801561025857600080fd5b5061027760048036038101908080359060200190929190505050610628565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600080610350600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103426000805490506103346001543073ffffffffffffffffffffffffffffffffffffffff163161066690919063ffffffff16565b61068490919063ffffffff16565b61069a90919063ffffffff16565b90506103a481600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461066690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103fc8160015461066690919063ffffffff16565b6001819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610448573d6000803e3d6000fd5b507f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab7083382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1600191505090565b60026020528060005260406000206000915090505481565b600080600090505b60008054905081101561056c578273ffffffffffffffffffffffffffffffffffffffff1660008281548110151561050f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561055f5760019150610571565b80806001019150506104dc565b600091505b50919050565b60008173ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b505050506040513d602081101561060757600080fd5b81019080805190602001909291905050505060019050919050565b60015481565b60008181548110151561063757fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080828401905083811015151561067a57fe5b8091505092915050565b6000818381151561069157fe5b04905092915050565b60008282111515156106a857fe5b8183039050929150505600a165627a7a723058206ce806096a5de26df47062973aaf8e5b9ff15bb208bbe334daf01d4d302d6dd70029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633ccfd60b146100e55780636d9c6605146101145780639d19b2261461016b578063decebbce146101c6578063e33b7de314610221578063efeb5e581461024c575b7f27a391d95d67e3626574fb5fbe3532bb7366e9254957b1f0e840953c248b2aa83334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b3480156100f157600080fd5b506100fa6102b9565b604051808215151515815260200191505060405180910390f35b34801561012057600080fd5b50610155600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104bc565b6040518082815260200191505060405180910390f35b34801561017757600080fd5b506101ac600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104d4565b604051808215151515815260200191505060405180910390f35b3480156101d257600080fd5b50610207600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610577565b604051808215151515815260200191505060405180910390f35b34801561022d57600080fd5b50610236610622565b6040518082815260200191505060405180910390f35b34801561025857600080fd5b5061027760048036038101908080359060200190929190505050610628565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600080610350600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103426000805490506103346001543073ffffffffffffffffffffffffffffffffffffffff163161066690919063ffffffff16565b61068490919063ffffffff16565b61069a90919063ffffffff16565b90506103a481600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461066690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103fc8160015461066690919063ffffffff16565b6001819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610448573d6000803e3d6000fd5b507f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab7083382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1600191505090565b60026020528060005260406000206000915090505481565b600080600090505b60008054905081101561056c578273ffffffffffffffffffffffffffffffffffffffff1660008281548110151561050f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561055f5760019150610571565b80806001019150506104dc565b600091505b50919050565b60008173ffffffffffffffffffffffffffffffffffffffff16633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b505050506040513d602081101561060757600080fd5b81019080805190602001909291905050505060019050919050565b60015481565b60008181548110151561063757fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080828401905083811015151561067a57fe5b8091505092915050565b6000818381151561069157fe5b04905092915050565b60008282111515156106a857fe5b8183039050929150505600a165627a7a723058206ce806096a5de26df47062973aaf8e5b9ff15bb208bbe334daf01d4d302d6dd70029",
  "sourceMap": "379:2714:36:-;;;952:87;8:9:-1;5:2;;;30:1;27;20:12;5:2;952:87:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1020:14;1004:13;:30;;;;;;;;;;;;:::i;:::-;;952:87;379:2714;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "379:2714:36:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2068:33;2079:10;2091:9;2068:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;379:2714;1562:387;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1562:387:36;;;;;;;;;;;;;;;;;;;;;;;;;;;607:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;607:47:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2475:207;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2475:207:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1347:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1347:140:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;517:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;517:25:36;;;;;;;;;;;;;;;;;;;;;;;438:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;438:30:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1562:387;1604:4;1616:11;1630:102;1705:14;:26;1720:10;1705:26;;;;;;;;;;;;;;;;1631:68;1678:13;:20;;;;1632:40;1658:13;;1640:4;1632:21;;;:25;;:40;;;;:::i;:::-;1631:46;;:68;;;;:::i;:::-;1630:74;;:102;;;;:::i;:::-;1616:116;;1767:38;1798:6;1767:14;:26;1782:10;1767:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1738:14;:26;1753:10;1738:26;;;;;;;;;;;;;;;:67;;;;1827:25;1845:6;1827:13;;:17;;:25;;;;:::i;:::-;1811:13;:41;;;;1858:10;:19;;:27;1878:6;1858:27;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1858:27:36;1896:31;1908:10;1920:6;1896:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;1940:4;1933:11;;1562:387;;:::o;607:47::-;;;;;;;;;;;;;;;;;:::o;2475:207::-;2540:4;2557:6;2566:1;2557:10;;2552:108;2573:13;:20;;;;2569:1;:24;2552:108;;;2631:5;2611:25;;:13;2625:1;2611:16;;;;;;;;;;;;;;;;;;;;;;;;;;;:25;;;2607:47;;;2647:4;2640:11;;;;2607:47;2595:3;;;;;;;2552:108;;;2672:5;2665:12;;2475:207;;;;;:::o;1347:140::-;1413:4;1437:16;1425:38;;;:40;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1425:40:36;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1425:40:36;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1425:40:36;;;;;;;;;;;;;;;;;1478:4;1471:11;;1347:140;;;:::o;517:25::-;;;;:::o;438:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1100:129:25:-;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;558:272::-;616:7;824:1;820;:5;;;;;;;;813:12;;558:272;;;;:::o;935:110::-;993:7;1020:1;1015;:6;;1008:14;;;;;;1039:1;1035;:5;1028:12;;935:110;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport '../../interfaces/PullPayment.sol';\n\n// @title A contract made to equally distribute payments amongs a list of beneficiaries\n// @author Kyle Dewhurst & Peter Phillips MyBit Foundation\n// @notice This contract allows someone to leave ETH for a beneficiary\n// @notice assumes each beneficiary receives equal amount\ncontract EqualDistribution {\n  using SafeMath for uint;\n\n  address[] public beneficiaries;             // List of chosen beneficiaries\n\n  uint public totalReleased;               // Total WEI so far released to beneficiaries\n\n  mapping (address => uint) public amountRedeemed;    // Amount of WEI this address has already withdrawn from contract\n\n\n  // @notice constructor. Sets the beneficiaries and where the income to be distributed is coming from\n  // @param (address) _beneficiary = The ETH address of who is to receive the income. Could be a distribution contract.\n  constructor(address[] _beneficiaries)\n  public{\n    beneficiaries = _beneficiaries;\n  }\n\n  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here\n  // @dev can call withdraw() on any address if there are no parameters required. Fallback function will be triggered\n  // @param (address) _contractAddress = The address to call withdraw() on.\n  function getFunds(address _contractAddress)\n  external\n  returns (bool) {\n    PullPayment(_contractAddress).withdraw();\n    return true;\n  }\n\n  // @notice beneficiaries can withdraw their share of the income here\n  function withdraw()\n  external\n  returns (bool) {\n    uint amount = ((address(this).balance.add(totalReleased)).div(beneficiaries.length)).sub(amountRedeemed[msg.sender]);\n    amountRedeemed[msg.sender] = amountRedeemed[msg.sender].add(amount);\n    totalReleased = totalReleased.add(amount);\n    msg.sender.transfer(amount);\n    emit LogWithdraw(msg.sender, amount);\n    return true;\n  }\n\n  // @notice fallback function. Accepts Ether and updates income balance\n  function ()\n  public\n  payable {\n    emit LogPayment(msg.sender, msg.value);\n  }\n\n\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // Constants\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  // @notice check if the address is one of the beneficiaries\n  function isBeneficiary(address _user)\n  public\n  view\n  returns (bool) {\n    for (uint i = 0; i < beneficiaries.length; i++){\n      if (beneficiaries[i] == _user) { return true; }\n    }\n    return false;\n  }\n\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // Events\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  event LogPayment(address _sender, uint _amount);\n  event LogWithdraw(address _beneficiary, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
    "exportedSymbols": {
      "EqualDistribution": [
        9999
      ]
    },
    "id": 10000,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9838,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:36"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 9839,
        "nodeType": "ImportDirective",
        "scope": 10000,
        "sourceUnit": 6331,
        "src": "25:33:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 9840,
        "nodeType": "ImportDirective",
        "scope": 10000,
        "sourceUnit": 6219,
        "src": "59:42:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9999,
        "linearizedBaseContracts": [
          9999
        ],
        "name": "EqualDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 9843,
            "libraryName": {
              "contractScope": null,
              "id": 9841,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6330,
              "src": "416:8:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6330",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "410:24:36",
            "typeName": {
              "id": 9842,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "429:4:36",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 9846,
            "name": "beneficiaries",
            "nodeType": "VariableDeclaration",
            "scope": 9999,
            "src": "438:30:36",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 9844,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "438:7:36",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 9845,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "438:9:36",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9848,
            "name": "totalReleased",
            "nodeType": "VariableDeclaration",
            "scope": 9999,
            "src": "517:25:36",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9847,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "517:4:36",
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
            "id": 9852,
            "name": "amountRedeemed",
            "nodeType": "VariableDeclaration",
            "scope": 9999,
            "src": "607:47:36",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 9851,
              "keyType": {
                "id": 9849,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "616:7:36",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "607:25:36",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 9850,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "627:4:36",
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
              "id": 9862,
              "nodeType": "Block",
              "src": "998:41:36",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9858,
                      "name": "beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9846,
                      "src": "1004:13:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9859,
                      "name": "_beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9855,
                      "src": "1020:14:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "1004:30:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 9861,
                  "nodeType": "ExpressionStatement",
                  "src": "1004:30:36"
                }
              ]
            },
            "documentation": null,
            "id": 9863,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9855,
                  "name": "_beneficiaries",
                  "nodeType": "VariableDeclaration",
                  "scope": 9863,
                  "src": "964:24:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 9853,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "964:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9854,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "964:9:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "963:26:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9857,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "998:0:36"
            },
            "scope": 9999,
            "src": "952:87:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9878,
              "nodeType": "Block",
              "src": "1419:68:36",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 9871,
                            "name": "_contractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9865,
                            "src": "1437:16:36",
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
                          "id": 9870,
                          "name": "PullPayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6218,
                          "src": "1425:11:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PullPayment_$6218_$",
                            "typeString": "type(contract PullPayment)"
                          }
                        },
                        "id": 9872,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1425:29:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PullPayment_$6218",
                          "typeString": "contract PullPayment"
                        }
                      },
                      "id": 9873,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6217,
                      "src": "1425:38:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                        "typeString": "function () external returns (bool)"
                      }
                    },
                    "id": 9874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1425:40:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9875,
                  "nodeType": "ExpressionStatement",
                  "src": "1425:40:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 9876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1478:4:36",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 9869,
                  "id": 9877,
                  "nodeType": "Return",
                  "src": "1471:11:36"
                }
              ]
            },
            "documentation": null,
            "id": 9879,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9865,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 9879,
                  "src": "1365:24:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9864,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:26:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9868,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9879,
                  "src": "1413:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9867,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1413:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1412:6:36"
            },
            "scope": 9999,
            "src": "1347:140:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9942,
              "nodeType": "Block",
              "src": "1610:339:36",
              "statements": [
                {
                  "assignments": [
                    9885
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9885,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 9943,
                      "src": "1616:11:36",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9884,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1616:4:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9905,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9900,
                          "name": "amountRedeemed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9852,
                          "src": "1705:14:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 9903,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9901,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12464,
                            "src": "1720:3:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1720:10:36",
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
                        "src": "1705:26:36",
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
                        "components": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 9895,
                                  "name": "beneficiaries",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9846,
                                  "src": "1678:13:36",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 9896,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1678:20:36",
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
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 9891,
                                        "name": "totalReleased",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9848,
                                        "src": "1658:13:36",
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
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 9887,
                                              "name": "this",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 12579,
                                              "src": "1640:4:36",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$9999",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$9999",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            ],
                                            "id": 9886,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1632:7:36",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_address_$",
                                              "typeString": "type(address)"
                                            },
                                            "typeName": "address"
                                          },
                                          "id": 9888,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1632:13:36",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "id": 9889,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1632:21:36",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 9890,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 6311,
                                      "src": "1632:25:36",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 9892,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1632:40:36",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 9893,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1631:42:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9894,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6267,
                              "src": "1631:46:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9897,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1631:68:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 9898,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1630:70:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6287,
                      "src": "1630:74:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1630:102:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1616:116:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9906,
                        "name": "amountRedeemed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9852,
                        "src": "1738:14:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 9909,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9907,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1753:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1753:10:36",
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
                      "src": "1738:26:36",
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
                          "id": 9915,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9885,
                          "src": "1798:6:36",
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
                            "id": 9910,
                            "name": "amountRedeemed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9852,
                            "src": "1767:14:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 9913,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9911,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "1782:3:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9912,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1782:10:36",
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
                          "src": "1767:26:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9914,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1767:30:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9916,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1767:38:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1738:67:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9918,
                  "nodeType": "ExpressionStatement",
                  "src": "1738:67:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9919,
                      "name": "totalReleased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9848,
                      "src": "1811:13:36",
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
                          "id": 9922,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9885,
                          "src": "1845:6:36",
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
                          "id": 9920,
                          "name": "totalReleased",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9848,
                          "src": "1827:13:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9921,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1827:17:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1827:25:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1811:41:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9925,
                  "nodeType": "ExpressionStatement",
                  "src": "1811:41:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9931,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9885,
                        "src": "1878:6:36",
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
                          "id": 9926,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1858:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1858:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 9930,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1858:19:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 9932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1858:27:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9933,
                  "nodeType": "ExpressionStatement",
                  "src": "1858:27:36"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9935,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1908:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9936,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1908:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9937,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9885,
                        "src": "1920:6:36",
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
                      "id": 9934,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9998,
                      "src": "1896:11:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1896:31:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9939,
                  "nodeType": "EmitStatement",
                  "src": "1891:36:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 9940,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1940:4:36",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 9883,
                  "id": 9941,
                  "nodeType": "Return",
                  "src": "1933:11:36"
                }
              ]
            },
            "documentation": null,
            "id": 9943,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9880,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1579:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9882,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9943,
                  "src": "1604:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9881,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1604:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1603:6:36"
            },
            "scope": 9999,
            "src": "1562:387:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9953,
              "nodeType": "Block",
              "src": "2057:49:36",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9947,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2079:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2079:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9949,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2091:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2091:9:36",
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
                      "id": 9946,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9992,
                      "src": "2068:10:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2068:33:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9952,
                  "nodeType": "EmitStatement",
                  "src": "2063:38:36"
                }
              ]
            },
            "documentation": null,
            "id": 9954,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9944,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2035:2:36"
            },
            "payable": true,
            "returnParameters": {
              "id": 9945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2057:0:36"
            },
            "scope": 9999,
            "src": "2026:80:36",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9985,
              "nodeType": "Block",
              "src": "2546:136:36",
              "statements": [
                {
                  "body": {
                    "id": 9981,
                    "nodeType": "Block",
                    "src": "2599:61:36",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9972,
                              "name": "beneficiaries",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9846,
                              "src": "2611:13:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 9974,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9973,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9962,
                              "src": "2625:1:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2611:16:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 9975,
                            "name": "_user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9956,
                            "src": "2631:5:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2611:25:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 9980,
                        "nodeType": "IfStatement",
                        "src": "2607:47:36",
                        "trueBody": {
                          "id": 9979,
                          "nodeType": "Block",
                          "src": "2638:16:36",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 9977,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2647:4:36",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 9960,
                              "id": 9978,
                              "nodeType": "Return",
                              "src": "2640:11:36"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9965,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9962,
                      "src": "2569:1:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9966,
                        "name": "beneficiaries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9846,
                        "src": "2573:13:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 9967,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2573:20:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2569:24:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9982,
                  "initializationExpression": {
                    "assignments": [
                      9962
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9962,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9986,
                        "src": "2557:6:36",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9961,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2557:4:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9964,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2566:1:36",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2557:10:36"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9970,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2595:3:36",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9969,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9962,
                        "src": "2595:1:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9971,
                    "nodeType": "ExpressionStatement",
                    "src": "2595:3:36"
                  },
                  "nodeType": "ForStatement",
                  "src": "2552:108:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 9983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2672:5:36",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 9960,
                  "id": 9984,
                  "nodeType": "Return",
                  "src": "2665:12:36"
                }
              ]
            },
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 9986,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9956,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9986,
                  "src": "2498:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9955,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2498:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2497:15:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9959,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9986,
                  "src": "2540:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9958,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2540:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2539:6:36"
            },
            "scope": 9999,
            "src": "2475:207:36",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 9992,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9988,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9992,
                  "src": "3002:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3002:7:36",
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
                  "id": 9990,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9992,
                  "src": "3019:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9989,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3019:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3001:31:36"
            },
            "src": "2985:48:36"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9998,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9994,
                  "indexed": false,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 9998,
                  "src": "3054:20:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9993,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3054:7:36",
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
                  "id": 9996,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9998,
                  "src": "3076:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9995,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3076:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3053:36:36"
            },
            "src": "3036:54:36"
          }
        ],
        "scope": 10000,
        "src": "379:2714:36"
      }
    ],
    "src": "0:3094:36"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
    "exportedSymbols": {
      "EqualDistribution": [
        9999
      ]
    },
    "id": 10000,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9838,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:36"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 9839,
        "nodeType": "ImportDirective",
        "scope": 10000,
        "sourceUnit": 6331,
        "src": "25:33:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 9840,
        "nodeType": "ImportDirective",
        "scope": 10000,
        "sourceUnit": 6219,
        "src": "59:42:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9999,
        "linearizedBaseContracts": [
          9999
        ],
        "name": "EqualDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 9843,
            "libraryName": {
              "contractScope": null,
              "id": 9841,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6330,
              "src": "416:8:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6330",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "410:24:36",
            "typeName": {
              "id": 9842,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "429:4:36",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 9846,
            "name": "beneficiaries",
            "nodeType": "VariableDeclaration",
            "scope": 9999,
            "src": "438:30:36",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 9844,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "438:7:36",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 9845,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "438:9:36",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9848,
            "name": "totalReleased",
            "nodeType": "VariableDeclaration",
            "scope": 9999,
            "src": "517:25:36",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9847,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "517:4:36",
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
            "id": 9852,
            "name": "amountRedeemed",
            "nodeType": "VariableDeclaration",
            "scope": 9999,
            "src": "607:47:36",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 9851,
              "keyType": {
                "id": 9849,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "616:7:36",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "607:25:36",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 9850,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "627:4:36",
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
              "id": 9862,
              "nodeType": "Block",
              "src": "998:41:36",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9858,
                      "name": "beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9846,
                      "src": "1004:13:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9859,
                      "name": "_beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9855,
                      "src": "1020:14:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "1004:30:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 9861,
                  "nodeType": "ExpressionStatement",
                  "src": "1004:30:36"
                }
              ]
            },
            "documentation": null,
            "id": 9863,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9855,
                  "name": "_beneficiaries",
                  "nodeType": "VariableDeclaration",
                  "scope": 9863,
                  "src": "964:24:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 9853,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "964:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9854,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "964:9:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "963:26:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9857,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "998:0:36"
            },
            "scope": 9999,
            "src": "952:87:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9878,
              "nodeType": "Block",
              "src": "1419:68:36",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 9871,
                            "name": "_contractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9865,
                            "src": "1437:16:36",
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
                          "id": 9870,
                          "name": "PullPayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6218,
                          "src": "1425:11:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PullPayment_$6218_$",
                            "typeString": "type(contract PullPayment)"
                          }
                        },
                        "id": 9872,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1425:29:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PullPayment_$6218",
                          "typeString": "contract PullPayment"
                        }
                      },
                      "id": 9873,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6217,
                      "src": "1425:38:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                        "typeString": "function () external returns (bool)"
                      }
                    },
                    "id": 9874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1425:40:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9875,
                  "nodeType": "ExpressionStatement",
                  "src": "1425:40:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 9876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1478:4:36",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 9869,
                  "id": 9877,
                  "nodeType": "Return",
                  "src": "1471:11:36"
                }
              ]
            },
            "documentation": null,
            "id": 9879,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9865,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 9879,
                  "src": "1365:24:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9864,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:26:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9868,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9879,
                  "src": "1413:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9867,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1413:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1412:6:36"
            },
            "scope": 9999,
            "src": "1347:140:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9942,
              "nodeType": "Block",
              "src": "1610:339:36",
              "statements": [
                {
                  "assignments": [
                    9885
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9885,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 9943,
                      "src": "1616:11:36",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9884,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1616:4:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9905,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9900,
                          "name": "amountRedeemed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9852,
                          "src": "1705:14:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 9903,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9901,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12464,
                            "src": "1720:3:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1720:10:36",
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
                        "src": "1705:26:36",
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
                        "components": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 9895,
                                  "name": "beneficiaries",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9846,
                                  "src": "1678:13:36",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 9896,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1678:20:36",
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
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 9891,
                                        "name": "totalReleased",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9848,
                                        "src": "1658:13:36",
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
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 9887,
                                              "name": "this",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 12579,
                                              "src": "1640:4:36",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$9999",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$9999",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            ],
                                            "id": 9886,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1632:7:36",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_address_$",
                                              "typeString": "type(address)"
                                            },
                                            "typeName": "address"
                                          },
                                          "id": 9888,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1632:13:36",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "id": 9889,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1632:21:36",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 9890,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 6311,
                                      "src": "1632:25:36",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 9892,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1632:40:36",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 9893,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1631:42:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9894,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6267,
                              "src": "1631:46:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9897,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1631:68:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 9898,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1630:70:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9899,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6287,
                      "src": "1630:74:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1630:102:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1616:116:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9906,
                        "name": "amountRedeemed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9852,
                        "src": "1738:14:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 9909,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9907,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1753:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1753:10:36",
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
                      "src": "1738:26:36",
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
                          "id": 9915,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9885,
                          "src": "1798:6:36",
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
                            "id": 9910,
                            "name": "amountRedeemed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9852,
                            "src": "1767:14:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 9913,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9911,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "1782:3:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9912,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1782:10:36",
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
                          "src": "1767:26:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9914,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1767:30:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9916,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1767:38:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1738:67:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9918,
                  "nodeType": "ExpressionStatement",
                  "src": "1738:67:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9919,
                      "name": "totalReleased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9848,
                      "src": "1811:13:36",
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
                          "id": 9922,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9885,
                          "src": "1845:6:36",
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
                          "id": 9920,
                          "name": "totalReleased",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9848,
                          "src": "1827:13:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9921,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1827:17:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1827:25:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1811:41:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9925,
                  "nodeType": "ExpressionStatement",
                  "src": "1811:41:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9931,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9885,
                        "src": "1878:6:36",
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
                          "id": 9926,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1858:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1858:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 9930,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1858:19:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 9932,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1858:27:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9933,
                  "nodeType": "ExpressionStatement",
                  "src": "1858:27:36"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9935,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "1908:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9936,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1908:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9937,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9885,
                        "src": "1920:6:36",
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
                      "id": 9934,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9998,
                      "src": "1896:11:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1896:31:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9939,
                  "nodeType": "EmitStatement",
                  "src": "1891:36:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 9940,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1940:4:36",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 9883,
                  "id": 9941,
                  "nodeType": "Return",
                  "src": "1933:11:36"
                }
              ]
            },
            "documentation": null,
            "id": 9943,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9880,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1579:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9882,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9943,
                  "src": "1604:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9881,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1604:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1603:6:36"
            },
            "scope": 9999,
            "src": "1562:387:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9953,
              "nodeType": "Block",
              "src": "2057:49:36",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9947,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2079:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9948,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2079:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 9949,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12464,
                          "src": "2091:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2091:9:36",
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
                      "id": 9946,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9992,
                      "src": "2068:10:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2068:33:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9952,
                  "nodeType": "EmitStatement",
                  "src": "2063:38:36"
                }
              ]
            },
            "documentation": null,
            "id": 9954,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9944,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2035:2:36"
            },
            "payable": true,
            "returnParameters": {
              "id": 9945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2057:0:36"
            },
            "scope": 9999,
            "src": "2026:80:36",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9985,
              "nodeType": "Block",
              "src": "2546:136:36",
              "statements": [
                {
                  "body": {
                    "id": 9981,
                    "nodeType": "Block",
                    "src": "2599:61:36",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9972,
                              "name": "beneficiaries",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9846,
                              "src": "2611:13:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 9974,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 9973,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9962,
                              "src": "2625:1:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2611:16:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 9975,
                            "name": "_user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9956,
                            "src": "2631:5:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2611:25:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 9980,
                        "nodeType": "IfStatement",
                        "src": "2607:47:36",
                        "trueBody": {
                          "id": 9979,
                          "nodeType": "Block",
                          "src": "2638:16:36",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 9977,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2647:4:36",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 9960,
                              "id": 9978,
                              "nodeType": "Return",
                              "src": "2640:11:36"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9965,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9962,
                      "src": "2569:1:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9966,
                        "name": "beneficiaries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9846,
                        "src": "2573:13:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 9967,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2573:20:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2569:24:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9982,
                  "initializationExpression": {
                    "assignments": [
                      9962
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9962,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9986,
                        "src": "2557:6:36",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9961,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2557:4:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9964,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2566:1:36",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2557:10:36"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9970,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2595:3:36",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9969,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9962,
                        "src": "2595:1:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9971,
                    "nodeType": "ExpressionStatement",
                    "src": "2595:3:36"
                  },
                  "nodeType": "ForStatement",
                  "src": "2552:108:36"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 9983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2672:5:36",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 9960,
                  "id": 9984,
                  "nodeType": "Return",
                  "src": "2665:12:36"
                }
              ]
            },
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 9986,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9956,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9986,
                  "src": "2498:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9955,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2498:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2497:15:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9959,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9986,
                  "src": "2540:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9958,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2540:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2539:6:36"
            },
            "scope": 9999,
            "src": "2475:207:36",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 9992,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9988,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9992,
                  "src": "3002:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3002:7:36",
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
                  "id": 9990,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9992,
                  "src": "3019:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9989,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3019:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3001:31:36"
            },
            "src": "2985:48:36"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9998,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9994,
                  "indexed": false,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 9998,
                  "src": "3054:20:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9993,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3054:7:36",
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
                  "id": 9996,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9998,
                  "src": "3076:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9995,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3076:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3053:36:36"
            },
            "src": "3036:54:36"
          }
        ],
        "scope": 10000,
        "src": "379:2714:36"
      }
    ],
    "src": "0:3094:36"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.582Z"
}