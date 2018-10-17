"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SafeMathWrapper = exports.SafeMathWrapper = 
{
  "contractName": "SafeMathWrapper",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "multiply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "divide",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "subtract",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "addto",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "fraction",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "bytes"
        }
      ],
      "name": "bToU",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506104a2806100206000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ec410f31461007d5780630f1530e4146100c8578063165c4a16146101135780633ef5e4451461015e578063e2667c1e146101a9578063f88e9fbf146101f8575b600080fd5b34801561008957600080fd5b506100b26004803603810190808035906020019092919080359060200190929190505050610243565b6040518082815260200191505060405180910390f35b3480156100d457600080fd5b506100fd6004803603810190808035906020019092919080359060200190929190505050610260565b6040518082815260200191505060405180910390f35b34801561011f57600080fd5b50610148600480360381019080803590602001909291908035906020019092919050505061027d565b6040518082815260200191505060405180910390f35b34801561016a57600080fd5b50610193600480360381019080803590602001909291908035906020019092919050505061029a565b6040518082815260200191505060405180910390f35b3480156101b557600080fd5b506101e26004803603810190808035906020019082018035906020019190919293919293905050506102b7565b6040518082815260200191505060405180910390f35b34801561020457600080fd5b5061022d60048036038101908080359060200190929190803590602001909291905050506102fc565b6040518082815260200191505060405180910390f35b6000610258828461031990919063ffffffff16565b905092915050565b6000610275828461033790919063ffffffff16565b905092915050565b6000610292828461035590919063ffffffff16565b905092915050565b60006102af828461039090919063ffffffff16565b905092915050565b60006102f483838080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050506103a9565b905092915050565b6000610311828461046090919063ffffffff16565b905092915050565b600080828401905083811015151561032d57fe5b8091505092915050565b600061034d6103468484610355565b6064610460565b905092915050565b600080600084141561036a5760009150610389565b828402905082848281151561037b57fe5b0414151561038557fe5b8091505b5092915050565b600082821115151561039e57fe5b818303905092915050565b60008060008090505b8351811015610456576001810184510360080260020a84828151811015156103d657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027f01000000000000000000000000000000000000000000000000000000000000009004028201915080806001019150506103b2565b8192505050919050565b6000818381151561046d57fe5b049050929150505600a165627a7a7230582000518290e81beb38751f4d07971e259fee5c4963244789a9054dda29f43c55c80029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ec410f31461007d5780630f1530e4146100c8578063165c4a16146101135780633ef5e4451461015e578063e2667c1e146101a9578063f88e9fbf146101f8575b600080fd5b34801561008957600080fd5b506100b26004803603810190808035906020019092919080359060200190929190505050610243565b6040518082815260200191505060405180910390f35b3480156100d457600080fd5b506100fd6004803603810190808035906020019092919080359060200190929190505050610260565b6040518082815260200191505060405180910390f35b34801561011f57600080fd5b50610148600480360381019080803590602001909291908035906020019092919050505061027d565b6040518082815260200191505060405180910390f35b34801561016a57600080fd5b50610193600480360381019080803590602001909291908035906020019092919050505061029a565b6040518082815260200191505060405180910390f35b3480156101b557600080fd5b506101e26004803603810190808035906020019082018035906020019190919293919293905050506102b7565b6040518082815260200191505060405180910390f35b34801561020457600080fd5b5061022d60048036038101908080359060200190929190803590602001909291905050506102fc565b6040518082815260200191505060405180910390f35b6000610258828461031990919063ffffffff16565b905092915050565b6000610275828461033790919063ffffffff16565b905092915050565b6000610292828461035590919063ffffffff16565b905092915050565b60006102af828461039090919063ffffffff16565b905092915050565b60006102f483838080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050506103a9565b905092915050565b6000610311828461046090919063ffffffff16565b905092915050565b600080828401905083811015151561032d57fe5b8091505092915050565b600061034d6103468484610355565b6064610460565b905092915050565b600080600084141561036a5760009150610389565b828402905082848281151561037b57fe5b0414151561038557fe5b8091505b5092915050565b600082821115151561039e57fe5b818303905092915050565b60008060008090505b8351811015610456576001810184510360080260020a84828151811015156103d657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027f01000000000000000000000000000000000000000000000000000000000000009004028201915080806001019150506103b2565b8192505050919050565b6000818381151561046d57fe5b049050929150505600a165627a7a7230582000518290e81beb38751f4d07971e259fee5c4963244789a9054dda29f43c55c80029",
  "sourceMap": "57:697:41:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;57:697:41;;;;;;;",
  "deployedSourceMap": "57:697:41:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;446:95:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;545:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;545:114:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;142:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;142:98:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;344;;8:9:-1;5:2;;;30:1;27;20:12;5:2;344:98:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;663:88;;8:9:-1;5:2;;;30:1;27;20:12;5:2;663:88:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;244:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;244:96:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:95;506:7;528:8;534:1;528;:5;;:8;;;;:::i;:::-;521:15;;446:95;;;;:::o;545:114::-;608:7;630:24;652:1;630;:21;;:24;;;;:::i;:::-;623:31;;545:114;;;;:::o;142:98::-;205:7;227:8;233:1;227;:5;;:8;;;;:::i;:::-;220:15;;142:98;;;;:::o;344:::-;407:7;429:8;435:1;429;:5;;:8;;;;:::i;:::-;422:15;;344:98;;;;:::o;663:88::-;709:7;731:15;:1;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:15::i;:::-;724:22;;663:88;;;;:::o;244:96::-;305:7;327:8;333:1;327;:5;;:8;;;;:::i;:::-;320:15;;244:96;;;;:::o;2047:129:33:-;2105:7;2120:9;2136:1;2132;:5;2120:17;;2155:1;2150;:6;;2143:14;;;;;;2170:1;2163:8;;2047:129;;;;;:::o;2417:158::-;2513:7;2535:35;2539:25;2543:7;2552:11;2539:3;:25::i;:::-;2566:3;2535;:35::i;:::-;2528:42;;2417:158;;;;:::o;663:173::-;721:7;776:9;745:1;740;:6;736:35;;;763:1;756:8;;;;736:35;792:1;788;:5;776:17;;815:1;810;806;:5;;;;;;;;:10;799:18;;;;;;830:1;823:8;;663:173;;;;;;:::o;1684:110::-;1742:7;1769:1;1764;:6;;1757:14;;;;;;1788:1;1784;:5;1777:12;;1684:110;;;;:::o;2851:230::-;2904:7;2921:14;2947:6;2954:1;2947:8;;2943:113;2961:1;:8;2957:1;:12;2943:113;;;3042:1;3040;:3;3028:1;:8;:16;3023:1;:22;3019:1;:27;3010:1;3012;3010:4;;;;;;;;;;;;;;;;;;;;3005:10;;;:42;2996:6;:51;2987:60;;2971:3;;;;;;;2943:113;;;3070:6;3063:13;;2851:230;;;;;:::o;1109:272::-;1167:7;1375:1;1371;:5;;;;;;;;1364:12;;1109:272;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"../math/SafeMath.sol\";\n\ncontract SafeMathWrapper {\n  using SafeMath for uint;\n  using SafeMath for bytes;\n\n  function multiply(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.mul(b);\n  }\n\n  function divide(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.div(b);\n  }\n\n  function subtract(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.sub(b);\n  }\n\n  function addto(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.add(b);\n  }\n\n  function fraction(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.getFractionalAmount(b);\n  }\n\n  function bToU(bytes a) external pure returns (uint256) {\n    return a.bytesToUint();\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        10459
      ]
    },
    "id": 10460,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10364,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:41"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 10365,
        "nodeType": "ImportDirective",
        "scope": 10460,
        "sourceUnit": 8663,
        "src": "25:30:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10459,
        "linearizedBaseContracts": [
          10459
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10368,
            "libraryName": {
              "contractScope": null,
              "id": 10366,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8662,
              "src": "92:8:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8662",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "86:24:41",
            "typeName": {
              "id": 10367,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "105:4:41",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 10371,
            "libraryName": {
              "contractScope": null,
              "id": 10369,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8662,
              "src": "119:8:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8662",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "113:25:41",
            "typeName": {
              "id": 10370,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "132:5:41",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 10385,
              "nodeType": "Block",
              "src": "214:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10382,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10375,
                        "src": "233:1:41",
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
                        "id": 10380,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10373,
                        "src": "227:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8534,
                      "src": "227:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "227:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10379,
                  "id": 10384,
                  "nodeType": "Return",
                  "src": "220:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10386,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10373,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10386,
                  "src": "160:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10372,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:7:41",
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
                  "id": 10375,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10386,
                  "src": "171:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10374,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10378,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10386,
                  "src": "205:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:9:41"
            },
            "scope": 10459,
            "src": "142:98:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10400,
              "nodeType": "Block",
              "src": "314:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10397,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10390,
                        "src": "333:1:41",
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
                        "id": 10395,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10388,
                        "src": "327:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8548,
                      "src": "327:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "327:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10394,
                  "id": 10399,
                  "nodeType": "Return",
                  "src": "320:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10401,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10388,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10401,
                  "src": "260:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:7:41",
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
                  "id": 10390,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10401,
                  "src": "271:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10393,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10401,
                  "src": "305:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "304:9:41"
            },
            "scope": 10459,
            "src": "244:96:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10415,
              "nodeType": "Block",
              "src": "416:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10412,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10405,
                        "src": "435:1:41",
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
                        "id": 10410,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10403,
                        "src": "429:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8568,
                      "src": "429:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "429:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10409,
                  "id": 10414,
                  "nodeType": "Return",
                  "src": "422:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10403,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10416,
                  "src": "362:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10402,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:41",
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
                  "id": 10405,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10416,
                  "src": "373:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10404,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "361:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10408,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10416,
                  "src": "407:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:9:41"
            },
            "scope": 10459,
            "src": "344:98:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10430,
              "nodeType": "Block",
              "src": "515:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10427,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10420,
                        "src": "534:1:41",
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
                        "id": 10425,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10418,
                        "src": "528:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8592,
                      "src": "528:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10424,
                  "id": 10429,
                  "nodeType": "Return",
                  "src": "521:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10431,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10418,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10431,
                  "src": "461:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10417,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:41",
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
                  "id": 10420,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10431,
                  "src": "472:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "460:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10423,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10431,
                  "src": "506:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10422,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:9:41"
            },
            "scope": 10459,
            "src": "446:95:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10445,
              "nodeType": "Block",
              "src": "617:42:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10442,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10435,
                        "src": "652:1:41",
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
                        "id": 10440,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10433,
                        "src": "630:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8610,
                      "src": "630:21:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "630:24:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10439,
                  "id": 10444,
                  "nodeType": "Return",
                  "src": "623:31:41"
                }
              ]
            },
            "documentation": null,
            "id": 10446,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10433,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10446,
                  "src": "563:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10432,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "563:7:41",
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
                  "id": 10435,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10446,
                  "src": "574:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "574:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "562:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10438,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10446,
                  "src": "608:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "607:9:41"
            },
            "scope": 10459,
            "src": "545:114:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10457,
              "nodeType": "Block",
              "src": "718:33:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 10453,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10448,
                        "src": "731:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "id": 10454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytesToUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8661,
                      "src": "731:13:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 10455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "731:15:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10452,
                  "id": 10456,
                  "nodeType": "Return",
                  "src": "724:22:41"
                }
              ]
            },
            "documentation": null,
            "id": 10458,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bToU",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10448,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10458,
                  "src": "677:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10447,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "677:5:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "676:9:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10451,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10458,
                  "src": "709:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "708:9:41"
            },
            "scope": 10459,
            "src": "663:88:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 10460,
        "src": "57:697:41"
      }
    ],
    "src": "0:755:41"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        10459
      ]
    },
    "id": 10460,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10364,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:41"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 10365,
        "nodeType": "ImportDirective",
        "scope": 10460,
        "sourceUnit": 8663,
        "src": "25:30:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10459,
        "linearizedBaseContracts": [
          10459
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10368,
            "libraryName": {
              "contractScope": null,
              "id": 10366,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8662,
              "src": "92:8:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8662",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "86:24:41",
            "typeName": {
              "id": 10367,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "105:4:41",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 10371,
            "libraryName": {
              "contractScope": null,
              "id": 10369,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8662,
              "src": "119:8:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8662",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "113:25:41",
            "typeName": {
              "id": 10370,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "132:5:41",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 10385,
              "nodeType": "Block",
              "src": "214:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10382,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10375,
                        "src": "233:1:41",
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
                        "id": 10380,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10373,
                        "src": "227:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10381,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8534,
                      "src": "227:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10383,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "227:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10379,
                  "id": 10384,
                  "nodeType": "Return",
                  "src": "220:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10386,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10373,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10386,
                  "src": "160:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10372,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:7:41",
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
                  "id": 10375,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10386,
                  "src": "171:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10374,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10378,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10386,
                  "src": "205:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:9:41"
            },
            "scope": 10459,
            "src": "142:98:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10400,
              "nodeType": "Block",
              "src": "314:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10397,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10390,
                        "src": "333:1:41",
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
                        "id": 10395,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10388,
                        "src": "327:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8548,
                      "src": "327:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "327:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10394,
                  "id": 10399,
                  "nodeType": "Return",
                  "src": "320:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10401,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10388,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10401,
                  "src": "260:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:7:41",
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
                  "id": 10390,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10401,
                  "src": "271:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10393,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10401,
                  "src": "305:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "304:9:41"
            },
            "scope": 10459,
            "src": "244:96:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10415,
              "nodeType": "Block",
              "src": "416:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10412,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10405,
                        "src": "435:1:41",
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
                        "id": 10410,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10403,
                        "src": "429:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10411,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8568,
                      "src": "429:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "429:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10409,
                  "id": 10414,
                  "nodeType": "Return",
                  "src": "422:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10403,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10416,
                  "src": "362:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10402,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:7:41",
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
                  "id": 10405,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10416,
                  "src": "373:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10404,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "361:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10408,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10416,
                  "src": "407:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10407,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:9:41"
            },
            "scope": 10459,
            "src": "344:98:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10430,
              "nodeType": "Block",
              "src": "515:26:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10427,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10420,
                        "src": "534:1:41",
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
                        "id": 10425,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10418,
                        "src": "528:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8592,
                      "src": "528:5:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:8:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10424,
                  "id": 10429,
                  "nodeType": "Return",
                  "src": "521:15:41"
                }
              ]
            },
            "documentation": null,
            "id": 10431,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10418,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10431,
                  "src": "461:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10417,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:41",
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
                  "id": 10420,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10431,
                  "src": "472:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "460:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10423,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10431,
                  "src": "506:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10422,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:9:41"
            },
            "scope": 10459,
            "src": "446:95:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10445,
              "nodeType": "Block",
              "src": "617:42:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10442,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10435,
                        "src": "652:1:41",
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
                        "id": 10440,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10433,
                        "src": "630:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8610,
                      "src": "630:21:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "630:24:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10439,
                  "id": 10444,
                  "nodeType": "Return",
                  "src": "623:31:41"
                }
              ]
            },
            "documentation": null,
            "id": 10446,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10433,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10446,
                  "src": "563:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10432,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "563:7:41",
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
                  "id": 10435,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10446,
                  "src": "574:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "574:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "562:22:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10438,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10446,
                  "src": "608:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "607:9:41"
            },
            "scope": 10459,
            "src": "545:114:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10457,
              "nodeType": "Block",
              "src": "718:33:41",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 10453,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10448,
                        "src": "731:1:41",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      },
                      "id": 10454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytesToUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8661,
                      "src": "731:13:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) pure returns (uint256)"
                      }
                    },
                    "id": 10455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "731:15:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10452,
                  "id": 10456,
                  "nodeType": "Return",
                  "src": "724:22:41"
                }
              ]
            },
            "documentation": null,
            "id": 10458,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bToU",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10448,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10458,
                  "src": "677:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10447,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "677:5:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "676:9:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10451,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10458,
                  "src": "709:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "708:9:41"
            },
            "scope": 10459,
            "src": "663:88:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 10460,
        "src": "57:697:41"
      }
    ],
    "src": "0:755:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-11T19:26:29.606Z"
}