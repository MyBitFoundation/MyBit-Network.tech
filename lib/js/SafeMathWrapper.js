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
  "bytecode": "0x608060405234801561001057600080fd5b50610219806100206000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630ec410f381146100715780630f1530e41461009e578063165c4a16146100b95780633ef5e445146100d4578063f88e9fbf146100ef575b600080fd5b34801561007d57600080fd5b5061008c60043560243561010a565b60408051918252519081900360200190f35b3480156100aa57600080fd5b5061008c600435602435610123565b3480156100c557600080fd5b5061008c600435602435610135565b3480156100e057600080fd5b5061008c600435602435610147565b3480156100fb57600080fd5b5061008c600435602435610159565b600061011c838363ffffffff61016b16565b9392505050565b600061011c838363ffffffff61018516565b600061011c838363ffffffff61019b16565b600061011c838363ffffffff6101c616565b600061011c838363ffffffff6101d816565b60008282018381101561017a57fe5b8091505b5092915050565b600061011c610194848461019b565b60646101d8565b6000808315156101ae576000915061017e565b508282028284828115156101be57fe5b041461017a57fe5b6000828211156101d257fe5b50900390565b600081838115156101e557fe5b0493925050505600a165627a7a723058203c5221807e54f87d567fdbec745833571151742c30dab056befcc32a3267c01b0029",
  "deployedBytecode": "0x60806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630ec410f381146100715780630f1530e41461009e578063165c4a16146100b95780633ef5e445146100d4578063f88e9fbf146100ef575b600080fd5b34801561007d57600080fd5b5061008c60043560243561010a565b60408051918252519081900360200190f35b3480156100aa57600080fd5b5061008c600435602435610123565b3480156100c557600080fd5b5061008c600435602435610135565b3480156100e057600080fd5b5061008c600435602435610147565b3480156100fb57600080fd5b5061008c600435602435610159565b600061011c838363ffffffff61016b16565b9392505050565b600061011c838363ffffffff61018516565b600061011c838363ffffffff61019b16565b600061011c838363ffffffff6101c616565b600061011c838363ffffffff6101d816565b60008282018381101561017a57fe5b8091505b5092915050565b600061011c610194848461019b565b60646101d8565b6000808315156101ae576000915061017e565b508282028284828115156101be57fe5b041461017a57fe5b6000828211156101d257fe5b50900390565b600081838115156101e557fe5b0493925050505600a165627a7a723058203c5221807e54f87d567fdbec745833571151742c30dab056befcc32a3267c01b0029",
  "sourceMap": "58:604:59:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;58:604:59;;;;;;;",
  "deployedSourceMap": "58:604:59:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;447:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;447:95:59;;;;;;;;;;;;;;;;;;;;;;;546:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;546:114:59;;;;;;;143:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;143:98:59;;;;;;;345;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;345:98:59;;;;;;;245:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;245:96:59;;;;;;;447:95;507:7;529:8;:1;535;529:8;:5;:8;:::i;:::-;522:15;447:95;-1:-1:-1;;;447:95:59:o;546:114::-;609:7;631:24;:1;653;631:24;:21;:24;:::i;143:98::-;206:7;228:8;:1;234;228:8;:5;:8;:::i;345:98::-;408:7;430:8;:1;436;430:8;:5;:8;:::i;245:96::-;306:7;328:8;:1;334;328:8;:5;:8;:::i;1101:129:42:-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1217:8;;1101:129;;;;;;:::o;1273:158::-;1369:7;1391:35;1395:25;1399:7;1408:11;1395:3;:25::i;:::-;1422:3;1391;:35::i;311:173::-;369:7;;388:6;;384:35;;;411:1;404:8;;;;384:35;-1:-1:-1;436:5:42;;;440:1;436;:5;454;;;;;;;;:10;447:18;;;936:110;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:42;;;936:110::o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:42:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../math/SafeMath.sol\";\n\ncontract SafeMathWrapper {\n  using SafeMath for uint;\n  using SafeMath for bytes;\n\n  function multiply(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.mul(b);\n  }\n\n  function divide(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.div(b);\n  }\n\n  function subtract(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.sub(b);\n  }\n\n  function addto(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.add(b);\n  }\n\n  function fraction(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.getFractionalAmount(b);\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        16897
      ]
    },
    "id": 16898,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16814,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 16815,
        "nodeType": "ImportDirective",
        "scope": 16898,
        "sourceUnit": 8864,
        "src": "26:30:59",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16897,
        "linearizedBaseContracts": [
          16897
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 16818,
            "libraryName": {
              "contractScope": null,
              "id": 16816,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "93:8:59",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "87:24:59",
            "typeName": {
              "id": 16817,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "106:4:59",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 16821,
            "libraryName": {
              "contractScope": null,
              "id": 16819,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "120:8:59",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "114:25:59",
            "typeName": {
              "id": 16820,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "133:5:59",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 16835,
              "nodeType": "Block",
              "src": "215:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16832,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16825,
                        "src": "234:1:59",
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
                        "id": 16830,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16823,
                        "src": "228:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8786,
                      "src": "228:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "228:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16829,
                  "id": 16834,
                  "nodeType": "Return",
                  "src": "221:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16836,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16823,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16836,
                  "src": "161:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:59",
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
                  "id": 16825,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16836,
                  "src": "172:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "160:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16828,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16836,
                  "src": "206:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:9:59"
            },
            "scope": 16897,
            "src": "143:98:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16850,
              "nodeType": "Block",
              "src": "315:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16847,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16840,
                        "src": "334:1:59",
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
                        "id": 16845,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16838,
                        "src": "328:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8800,
                      "src": "328:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16844,
                  "id": 16849,
                  "nodeType": "Return",
                  "src": "321:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16851,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16838,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16851,
                  "src": "261:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:59",
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
                  "id": 16840,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16851,
                  "src": "272:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16843,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16851,
                  "src": "306:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:9:59"
            },
            "scope": 16897,
            "src": "245:96:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16865,
              "nodeType": "Block",
              "src": "417:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16862,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16855,
                        "src": "436:1:59",
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
                        "id": 16860,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16853,
                        "src": "430:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16861,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "430:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16859,
                  "id": 16864,
                  "nodeType": "Return",
                  "src": "423:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16866,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16853,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16866,
                  "src": "363:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16852,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:59",
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
                  "id": 16855,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16866,
                  "src": "374:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16858,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16866,
                  "src": "408:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:9:59"
            },
            "scope": 16897,
            "src": "345:98:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16880,
              "nodeType": "Block",
              "src": "516:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16877,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16870,
                        "src": "535:1:59",
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
                        "id": 16875,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16868,
                        "src": "529:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8844,
                      "src": "529:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16874,
                  "id": 16879,
                  "nodeType": "Return",
                  "src": "522:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16881,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16868,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16881,
                  "src": "462:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:59",
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
                  "id": 16870,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16881,
                  "src": "473:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16869,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16873,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16881,
                  "src": "507:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:9:59"
            },
            "scope": 16897,
            "src": "447:95:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16895,
              "nodeType": "Block",
              "src": "618:42:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16892,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16885,
                        "src": "653:1:59",
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
                        "id": 16890,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16883,
                        "src": "631:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8862,
                      "src": "631:21:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "631:24:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16889,
                  "id": 16894,
                  "nodeType": "Return",
                  "src": "624:31:59"
                }
              ]
            },
            "documentation": null,
            "id": 16896,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16883,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16896,
                  "src": "564:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:59",
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
                  "id": 16885,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16896,
                  "src": "575:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16884,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "563:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16888,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16896,
                  "src": "609:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "608:9:59"
            },
            "scope": 16897,
            "src": "546:114:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16898,
        "src": "58:604:59"
      }
    ],
    "src": "0:663:59"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        16897
      ]
    },
    "id": 16898,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16814,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 16815,
        "nodeType": "ImportDirective",
        "scope": 16898,
        "sourceUnit": 8864,
        "src": "26:30:59",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16897,
        "linearizedBaseContracts": [
          16897
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 16818,
            "libraryName": {
              "contractScope": null,
              "id": 16816,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "93:8:59",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "87:24:59",
            "typeName": {
              "id": 16817,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "106:4:59",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 16821,
            "libraryName": {
              "contractScope": null,
              "id": 16819,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "120:8:59",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "114:25:59",
            "typeName": {
              "id": 16820,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "133:5:59",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 16835,
              "nodeType": "Block",
              "src": "215:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16832,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16825,
                        "src": "234:1:59",
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
                        "id": 16830,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16823,
                        "src": "228:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8786,
                      "src": "228:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "228:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16829,
                  "id": 16834,
                  "nodeType": "Return",
                  "src": "221:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16836,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16823,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16836,
                  "src": "161:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:59",
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
                  "id": 16825,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16836,
                  "src": "172:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "160:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16828,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16836,
                  "src": "206:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:9:59"
            },
            "scope": 16897,
            "src": "143:98:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16850,
              "nodeType": "Block",
              "src": "315:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16847,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16840,
                        "src": "334:1:59",
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
                        "id": 16845,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16838,
                        "src": "328:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16846,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8800,
                      "src": "328:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16844,
                  "id": 16849,
                  "nodeType": "Return",
                  "src": "321:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16851,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16838,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16851,
                  "src": "261:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:59",
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
                  "id": 16840,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16851,
                  "src": "272:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16843,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16851,
                  "src": "306:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:9:59"
            },
            "scope": 16897,
            "src": "245:96:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16865,
              "nodeType": "Block",
              "src": "417:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16862,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16855,
                        "src": "436:1:59",
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
                        "id": 16860,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16853,
                        "src": "430:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16861,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "430:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16859,
                  "id": 16864,
                  "nodeType": "Return",
                  "src": "423:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16866,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16853,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16866,
                  "src": "363:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16852,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:59",
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
                  "id": 16855,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16866,
                  "src": "374:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16858,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16866,
                  "src": "408:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:9:59"
            },
            "scope": 16897,
            "src": "345:98:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16880,
              "nodeType": "Block",
              "src": "516:26:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16877,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16870,
                        "src": "535:1:59",
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
                        "id": 16875,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16868,
                        "src": "529:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8844,
                      "src": "529:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:8:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16874,
                  "id": 16879,
                  "nodeType": "Return",
                  "src": "522:15:59"
                }
              ]
            },
            "documentation": null,
            "id": 16881,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16868,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16881,
                  "src": "462:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:59",
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
                  "id": 16870,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16881,
                  "src": "473:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16869,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16873,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16881,
                  "src": "507:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:9:59"
            },
            "scope": 16897,
            "src": "447:95:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16895,
              "nodeType": "Block",
              "src": "618:42:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16892,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16885,
                        "src": "653:1:59",
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
                        "id": 16890,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16883,
                        "src": "631:1:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 16891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8862,
                      "src": "631:21:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 16893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "631:24:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 16889,
                  "id": 16894,
                  "nodeType": "Return",
                  "src": "624:31:59"
                }
              ]
            },
            "documentation": null,
            "id": 16896,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16883,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 16896,
                  "src": "564:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:59",
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
                  "id": 16885,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 16896,
                  "src": "575:9:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16884,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "563:22:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16888,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16896,
                  "src": "609:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16887,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "608:9:59"
            },
            "scope": 16897,
            "src": "546:114:59",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16898,
        "src": "58:604:59"
      }
    ],
    "src": "0:663:59"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.790Z"
}