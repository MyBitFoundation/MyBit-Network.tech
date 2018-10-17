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
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061034c806100206000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ec410f3146100725780630f1530e4146100bd578063165c4a16146101085780633ef5e44514610153578063f88e9fbf1461019e575b600080fd5b34801561007e57600080fd5b506100a760048036038101908080359060200190929190803590602001909291905050506101e9565b6040518082815260200191505060405180910390f35b3480156100c957600080fd5b506100f26004803603810190808035906020019092919080359060200190929190505050610206565b6040518082815260200191505060405180910390f35b34801561011457600080fd5b5061013d6004803603810190808035906020019092919080359060200190929190505050610223565b6040518082815260200191505060405180910390f35b34801561015f57600080fd5b506101886004803603810190808035906020019092919080359060200190929190505050610240565b6040518082815260200191505060405180910390f35b3480156101aa57600080fd5b506101d3600480360381019080803590602001909291908035906020019092919050505061025d565b6040518082815260200191505060405180910390f35b60006101fe828461027a90919063ffffffff16565b905092915050565b600061021b828461029890919063ffffffff16565b905092915050565b600061023882846102b690919063ffffffff16565b905092915050565b600061025582846102f190919063ffffffff16565b905092915050565b6000610272828461030a90919063ffffffff16565b905092915050565b600080828401905083811015151561028e57fe5b8091505092915050565b60006102ae6102a784846102b6565b606461030a565b905092915050565b60008060008414156102cb57600091506102ea565b82840290508284828115156102dc57fe5b041415156102e657fe5b8091505b5092915050565b60008282111515156102ff57fe5b818303905092915050565b6000818381151561031757fe5b049050929150505600a165627a7a7230582076c27e7340547d0190803189de63bf197ae66f806deb124324b31722237d27c30029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ec410f3146100725780630f1530e4146100bd578063165c4a16146101085780633ef5e44514610153578063f88e9fbf1461019e575b600080fd5b34801561007e57600080fd5b506100a760048036038101908080359060200190929190803590602001909291905050506101e9565b6040518082815260200191505060405180910390f35b3480156100c957600080fd5b506100f26004803603810190808035906020019092919080359060200190929190505050610206565b6040518082815260200191505060405180910390f35b34801561011457600080fd5b5061013d6004803603810190808035906020019092919080359060200190929190505050610223565b6040518082815260200191505060405180910390f35b34801561015f57600080fd5b506101886004803603810190808035906020019092919080359060200190929190505050610240565b6040518082815260200191505060405180910390f35b3480156101aa57600080fd5b506101d3600480360381019080803590602001909291908035906020019092919050505061025d565b6040518082815260200191505060405180910390f35b60006101fe828461027a90919063ffffffff16565b905092915050565b600061021b828461029890919063ffffffff16565b905092915050565b600061023882846102b690919063ffffffff16565b905092915050565b600061025582846102f190919063ffffffff16565b905092915050565b6000610272828461030a90919063ffffffff16565b905092915050565b600080828401905083811015151561028e57fe5b8091505092915050565b60006102ae6102a784846102b6565b606461030a565b905092915050565b60008060008414156102cb57600091506102ea565b82840290508284828115156102dc57fe5b041415156102e657fe5b8091505b5092915050565b60008282111515156102ff57fe5b818303905092915050565b6000818381151561031757fe5b049050929150505600a165627a7a7230582076c27e7340547d0190803189de63bf197ae66f806deb124324b31722237d27c30029",
  "sourceMap": "57:604:40:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;57:604:40;;;;;;;",
  "deployedSourceMap": "57:604:40:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;446:95:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;545:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;545:114:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;142:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;142:98:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;344;;8:9:-1;5:2;;;30:1;27;20:12;5:2;344:98:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;244:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;244:96:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;446:95;506:7;528:8;534:1;528;:5;;:8;;;;:::i;:::-;521:15;;446:95;;;;:::o;545:114::-;608:7;630:24;652:1;630;:21;;:24;;;;:::i;:::-;623:31;;545:114;;;;:::o;142:98::-;205:7;227:8;233:1;227;:5;;:8;;;;:::i;:::-;220:15;;142:98;;;;:::o;344:::-;407:7;429:8;435:1;429;:5;;:8;;;;:::i;:::-;422:15;;344:98;;;;:::o;244:96::-;305:7;327:8;333:1;327;:5;;:8;;;;:::i;:::-;320:15;;244:96;;;;:::o;1100:129:29:-;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;1272:158::-;1368:7;1390:35;1394:25;1398:7;1407:11;1394:3;:25::i;:::-;1421:3;1390;:35::i;:::-;1383:42;;1272:158;;;;:::o;310:173::-;368:7;423:9;392:1;387;:6;383:35;;;410:1;403:8;;;;383:35;439:1;435;:5;423:17;;462:1;457;453;:5;;;;;;;;:10;446:18;;;;;;477:1;470:8;;310:173;;;;;;:::o;935:110::-;993:7;1020:1;1015;:6;;1008:14;;;;;;1039:1;1035;:5;1028:12;;935:110;;;;:::o;558:272::-;616:7;824:1;820;:5;;;;;;;;813:12;;558:272;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"../math/SafeMath.sol\";\n\ncontract SafeMathWrapper {\n  using SafeMath for uint;\n  using SafeMath for bytes;\n\n  function multiply(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.mul(b);\n  }\n\n  function divide(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.div(b);\n  }\n\n  function subtract(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.sub(b);\n  }\n\n  function addto(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.add(b);\n  }\n\n  function fraction(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.getFractionalAmount(b);\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        10452
      ]
    },
    "id": 10453,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10369,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:40"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 10370,
        "nodeType": "ImportDirective",
        "scope": 10453,
        "sourceUnit": 6934,
        "src": "25:30:40",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10452,
        "linearizedBaseContracts": [
          10452
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10373,
            "libraryName": {
              "contractScope": null,
              "id": 10371,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6933,
              "src": "92:8:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6933",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "86:24:40",
            "typeName": {
              "id": 10372,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "105:4:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 10376,
            "libraryName": {
              "contractScope": null,
              "id": 10374,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6933,
              "src": "119:8:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6933",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "113:25:40",
            "typeName": {
              "id": 10375,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "132:5:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 10390,
              "nodeType": "Block",
              "src": "214:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10387,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10380,
                        "src": "233:1:40",
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
                        "id": 10385,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10378,
                        "src": "227:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6856,
                      "src": "227:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "227:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10384,
                  "id": 10389,
                  "nodeType": "Return",
                  "src": "220:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10391,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10381,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10378,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10391,
                  "src": "160:9:40",
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
                    "src": "160:7:40",
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
                  "id": 10380,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10391,
                  "src": "171:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10379,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10383,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10391,
                  "src": "205:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:9:40"
            },
            "scope": 10452,
            "src": "142:98:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10405,
              "nodeType": "Block",
              "src": "314:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10402,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10395,
                        "src": "333:1:40",
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
                        "id": 10400,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10393,
                        "src": "327:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6870,
                      "src": "327:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "327:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10399,
                  "id": 10404,
                  "nodeType": "Return",
                  "src": "320:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10406,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10393,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10406,
                  "src": "260:9:40",
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
                    "src": "260:7:40",
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
                  "id": 10395,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10406,
                  "src": "271:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10394,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10398,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10406,
                  "src": "305:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "304:9:40"
            },
            "scope": 10452,
            "src": "244:96:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10420,
              "nodeType": "Block",
              "src": "416:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10417,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10410,
                        "src": "435:1:40",
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
                        "id": 10415,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10408,
                        "src": "429:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6890,
                      "src": "429:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "429:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10414,
                  "id": 10419,
                  "nodeType": "Return",
                  "src": "422:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10421,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10411,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10408,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10421,
                  "src": "362:9:40",
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
                    "src": "362:7:40",
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
                  "id": 10410,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10421,
                  "src": "373:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "361:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10413,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10421,
                  "src": "407:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:9:40"
            },
            "scope": 10452,
            "src": "344:98:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10435,
              "nodeType": "Block",
              "src": "515:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10432,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10425,
                        "src": "534:1:40",
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
                        "id": 10430,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10423,
                        "src": "528:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6914,
                      "src": "528:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10429,
                  "id": 10434,
                  "nodeType": "Return",
                  "src": "521:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10436,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10423,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10436,
                  "src": "461:9:40",
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
                    "src": "461:7:40",
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
                  "id": 10425,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10436,
                  "src": "472:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10424,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "460:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10436,
                  "src": "506:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:9:40"
            },
            "scope": 10452,
            "src": "446:95:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10450,
              "nodeType": "Block",
              "src": "617:42:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10447,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10440,
                        "src": "652:1:40",
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
                        "id": 10445,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10438,
                        "src": "630:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10446,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6932,
                      "src": "630:21:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "630:24:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10444,
                  "id": 10449,
                  "nodeType": "Return",
                  "src": "623:31:40"
                }
              ]
            },
            "documentation": null,
            "id": 10451,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10438,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10451,
                  "src": "563:9:40",
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
                    "src": "563:7:40",
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
                  "id": 10440,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10451,
                  "src": "574:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "574:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "562:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10443,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10451,
                  "src": "608:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "607:9:40"
            },
            "scope": 10452,
            "src": "545:114:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 10453,
        "src": "57:604:40"
      }
    ],
    "src": "0:662:40"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        10452
      ]
    },
    "id": 10453,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10369,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:40"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 10370,
        "nodeType": "ImportDirective",
        "scope": 10453,
        "sourceUnit": 6934,
        "src": "25:30:40",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10452,
        "linearizedBaseContracts": [
          10452
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10373,
            "libraryName": {
              "contractScope": null,
              "id": 10371,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6933,
              "src": "92:8:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6933",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "86:24:40",
            "typeName": {
              "id": 10372,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "105:4:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 10376,
            "libraryName": {
              "contractScope": null,
              "id": 10374,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6933,
              "src": "119:8:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6933",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "113:25:40",
            "typeName": {
              "id": 10375,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "132:5:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 10390,
              "nodeType": "Block",
              "src": "214:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10387,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10380,
                        "src": "233:1:40",
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
                        "id": 10385,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10378,
                        "src": "227:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6856,
                      "src": "227:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "227:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10384,
                  "id": 10389,
                  "nodeType": "Return",
                  "src": "220:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10391,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10381,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10378,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10391,
                  "src": "160:9:40",
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
                    "src": "160:7:40",
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
                  "id": 10380,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10391,
                  "src": "171:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10379,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10383,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10391,
                  "src": "205:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:9:40"
            },
            "scope": 10452,
            "src": "142:98:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10405,
              "nodeType": "Block",
              "src": "314:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10402,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10395,
                        "src": "333:1:40",
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
                        "id": 10400,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10393,
                        "src": "327:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6870,
                      "src": "327:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "327:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10399,
                  "id": 10404,
                  "nodeType": "Return",
                  "src": "320:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10406,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10393,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10406,
                  "src": "260:9:40",
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
                    "src": "260:7:40",
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
                  "id": 10395,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10406,
                  "src": "271:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10394,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10398,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10406,
                  "src": "305:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "304:9:40"
            },
            "scope": 10452,
            "src": "244:96:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10420,
              "nodeType": "Block",
              "src": "416:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10417,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10410,
                        "src": "435:1:40",
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
                        "id": 10415,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10408,
                        "src": "429:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6890,
                      "src": "429:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "429:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10414,
                  "id": 10419,
                  "nodeType": "Return",
                  "src": "422:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10421,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10411,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10408,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10421,
                  "src": "362:9:40",
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
                    "src": "362:7:40",
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
                  "id": 10410,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10421,
                  "src": "373:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "361:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10413,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10421,
                  "src": "407:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:9:40"
            },
            "scope": 10452,
            "src": "344:98:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10435,
              "nodeType": "Block",
              "src": "515:26:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10432,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10425,
                        "src": "534:1:40",
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
                        "id": 10430,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10423,
                        "src": "528:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10431,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6914,
                      "src": "528:5:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "528:8:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10429,
                  "id": 10434,
                  "nodeType": "Return",
                  "src": "521:15:40"
                }
              ]
            },
            "documentation": null,
            "id": 10436,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10423,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10436,
                  "src": "461:9:40",
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
                    "src": "461:7:40",
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
                  "id": 10425,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10436,
                  "src": "472:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10424,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "460:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10436,
                  "src": "506:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "506:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "505:9:40"
            },
            "scope": 10452,
            "src": "446:95:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10450,
              "nodeType": "Block",
              "src": "617:42:40",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10447,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10440,
                        "src": "652:1:40",
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
                        "id": 10445,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10438,
                        "src": "630:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 10446,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6932,
                      "src": "630:21:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 10448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "630:24:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10444,
                  "id": 10449,
                  "nodeType": "Return",
                  "src": "623:31:40"
                }
              ]
            },
            "documentation": null,
            "id": 10451,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10438,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 10451,
                  "src": "563:9:40",
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
                    "src": "563:7:40",
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
                  "id": 10440,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 10451,
                  "src": "574:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "574:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "562:22:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10443,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10451,
                  "src": "608:7:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "608:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "607:9:40"
            },
            "scope": 10452,
            "src": "545:114:40",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 10453,
        "src": "57:604:40"
      }
    ],
    "src": "0:662:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.906Z"
}