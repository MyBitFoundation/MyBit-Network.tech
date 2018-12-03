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
  "bytecode": "0x608060405234801561001057600080fd5b50610219806100206000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630ec410f381146100715780630f1530e41461009e578063165c4a16146100b95780633ef5e445146100d4578063f88e9fbf146100ef575b600080fd5b34801561007d57600080fd5b5061008c60043560243561010a565b60408051918252519081900360200190f35b3480156100aa57600080fd5b5061008c600435602435610123565b3480156100c557600080fd5b5061008c600435602435610135565b3480156100e057600080fd5b5061008c600435602435610147565b3480156100fb57600080fd5b5061008c600435602435610159565b600061011c838363ffffffff61016b16565b9392505050565b600061011c838363ffffffff61018516565b600061011c838363ffffffff61019b16565b600061011c838363ffffffff6101c616565b600061011c838363ffffffff6101d816565b60008282018381101561017a57fe5b8091505b5092915050565b600061011c610194848461019b565b60646101d8565b6000808315156101ae576000915061017e565b508282028284828115156101be57fe5b041461017a57fe5b6000828211156101d257fe5b50900390565b600081838115156101e557fe5b0493925050505600a165627a7a7230582012996cbd335d41643e2bcf7667c8070ad1ff338897c34758b78a2d80a8971b990029",
  "deployedBytecode": "0x60806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630ec410f381146100715780630f1530e41461009e578063165c4a16146100b95780633ef5e445146100d4578063f88e9fbf146100ef575b600080fd5b34801561007d57600080fd5b5061008c60043560243561010a565b60408051918252519081900360200190f35b3480156100aa57600080fd5b5061008c600435602435610123565b3480156100c557600080fd5b5061008c600435602435610135565b3480156100e057600080fd5b5061008c600435602435610147565b3480156100fb57600080fd5b5061008c600435602435610159565b600061011c838363ffffffff61016b16565b9392505050565b600061011c838363ffffffff61018516565b600061011c838363ffffffff61019b16565b600061011c838363ffffffff6101c616565b600061011c838363ffffffff6101d816565b60008282018381101561017a57fe5b8091505b5092915050565b600061011c610194848461019b565b60646101d8565b6000808315156101ae576000915061017e565b508282028284828115156101be57fe5b041461017a57fe5b6000828211156101d257fe5b50900390565b600081838115156101e557fe5b0493925050505600a165627a7a7230582012996cbd335d41643e2bcf7667c8070ad1ff338897c34758b78a2d80a8971b990029",
  "sourceMap": "58:604:86:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;58:604:86;;;;;;;",
  "deployedSourceMap": "58:604:86:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;447:95;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;447:95:86;;;;;;;;;;;;;;;;;;;;;;;546:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;546:114:86;;;;;;;143:98;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;143:98:86;;;;;;;345;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;345:98:86;;;;;;;245:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;245:96:86;;;;;;;447:95;507:7;529:8;:1;535;529:8;:5;:8;:::i;:::-;522:15;447:95;-1:-1:-1;;;447:95:86:o;546:114::-;609:7;631:24;:1;653;631:24;:21;:24;:::i;143:98::-;206:7;228:8;:1;234;228:8;:5;:8;:::i;345:98::-;408:7;430:8;:1;436;430:8;:5;:8;:::i;245:96::-;306:7;328:8;:1;334;328:8;:5;:8;:::i;1101:129:70:-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1217:8;;1101:129;;;;;;:::o;1273:158::-;1369:7;1391:35;1395:25;1399:7;1408:11;1395:3;:25::i;:::-;1422:3;1391;:35::i;311:173::-;369:7;;388:6;;384:35;;;411:1;404:8;;;;384:35;-1:-1:-1;436:5:70;;;440:1;436;:5;454;;;;;;;;:10;447:18;;;936:110;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:70;;;936:110::o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:70:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../math/SafeMath.sol\";\n\ncontract SafeMathWrapper {\n  using SafeMath for uint;\n  using SafeMath for bytes;\n\n  function multiply(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.mul(b);\n  }\n\n  function divide(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.div(b);\n  }\n\n  function subtract(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.sub(b);\n  }\n\n  function addto(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.add(b);\n  }\n\n  function fraction(uint256 a, uint256 b) external pure returns (uint256) {\n    return a.getFractionalAmount(b);\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        25390
      ]
    },
    "id": 25391,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25307,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:86"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 25308,
        "nodeType": "ImportDirective",
        "scope": 25391,
        "sourceUnit": 17305,
        "src": "26:30:86",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25390,
        "linearizedBaseContracts": [
          25390
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25311,
            "libraryName": {
              "contractScope": null,
              "id": 25309,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17304,
              "src": "93:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17304",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "87:24:86",
            "typeName": {
              "id": 25310,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "106:4:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 25314,
            "libraryName": {
              "contractScope": null,
              "id": 25312,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17304,
              "src": "120:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17304",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "114:25:86",
            "typeName": {
              "id": 25313,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "133:5:86",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 25328,
              "nodeType": "Block",
              "src": "215:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25325,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25318,
                        "src": "234:1:86",
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
                        "id": 25323,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25316,
                        "src": "228:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25324,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17227,
                      "src": "228:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "228:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25322,
                  "id": 25327,
                  "nodeType": "Return",
                  "src": "221:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25329,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25316,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25329,
                  "src": "161:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:86",
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
                  "id": 25318,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25329,
                  "src": "172:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "160:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25321,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25329,
                  "src": "206:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:9:86"
            },
            "scope": 25390,
            "src": "143:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25343,
              "nodeType": "Block",
              "src": "315:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25340,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25333,
                        "src": "334:1:86",
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
                        "id": 25338,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25331,
                        "src": "328:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17241,
                      "src": "328:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25337,
                  "id": 25342,
                  "nodeType": "Return",
                  "src": "321:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25344,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25331,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25344,
                  "src": "261:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:86",
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
                  "id": 25333,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25344,
                  "src": "272:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25332,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25336,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25344,
                  "src": "306:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25335,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:9:86"
            },
            "scope": 25390,
            "src": "245:96:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25358,
              "nodeType": "Block",
              "src": "417:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25355,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25348,
                        "src": "436:1:86",
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
                        "id": 25353,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25346,
                        "src": "430:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17261,
                      "src": "430:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25352,
                  "id": 25357,
                  "nodeType": "Return",
                  "src": "423:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25359,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25346,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25359,
                  "src": "363:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25345,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:86",
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
                  "id": 25348,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25359,
                  "src": "374:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25351,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25359,
                  "src": "408:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:9:86"
            },
            "scope": 25390,
            "src": "345:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25373,
              "nodeType": "Block",
              "src": "516:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25370,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25363,
                        "src": "535:1:86",
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
                        "id": 25368,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25361,
                        "src": "529:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25369,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17285,
                      "src": "529:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25367,
                  "id": 25372,
                  "nodeType": "Return",
                  "src": "522:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25374,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25364,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25361,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25374,
                  "src": "462:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25360,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:86",
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
                  "id": 25363,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25374,
                  "src": "473:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25362,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25366,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25374,
                  "src": "507:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25365,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:9:86"
            },
            "scope": 25390,
            "src": "447:95:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25388,
              "nodeType": "Block",
              "src": "618:42:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25385,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25378,
                        "src": "653:1:86",
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
                        "id": 25383,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25376,
                        "src": "631:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17303,
                      "src": "631:21:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "631:24:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25382,
                  "id": 25387,
                  "nodeType": "Return",
                  "src": "624:31:86"
                }
              ]
            },
            "documentation": null,
            "id": 25389,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25376,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25389,
                  "src": "564:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25375,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:86",
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
                  "id": 25378,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25389,
                  "src": "575:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "563:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25381,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25389,
                  "src": "609:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "608:9:86"
            },
            "scope": 25390,
            "src": "546:114:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 25391,
        "src": "58:604:86"
      }
    ],
    "src": "0:663:86"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/SafeMathWrapper.sol",
    "exportedSymbols": {
      "SafeMathWrapper": [
        25390
      ]
    },
    "id": 25391,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25307,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:86"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 25308,
        "nodeType": "ImportDirective",
        "scope": 25391,
        "sourceUnit": 17305,
        "src": "26:30:86",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25390,
        "linearizedBaseContracts": [
          25390
        ],
        "name": "SafeMathWrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25311,
            "libraryName": {
              "contractScope": null,
              "id": 25309,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17304,
              "src": "93:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17304",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "87:24:86",
            "typeName": {
              "id": 25310,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "106:4:86",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 25314,
            "libraryName": {
              "contractScope": null,
              "id": 25312,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17304,
              "src": "120:8:86",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17304",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "114:25:86",
            "typeName": {
              "id": 25313,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "133:5:86",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "body": {
              "id": 25328,
              "nodeType": "Block",
              "src": "215:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25325,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25318,
                        "src": "234:1:86",
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
                        "id": 25323,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25316,
                        "src": "228:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25324,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17227,
                      "src": "228:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "228:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25322,
                  "id": 25327,
                  "nodeType": "Return",
                  "src": "221:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25329,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "multiply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25316,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25329,
                  "src": "161:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:7:86",
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
                  "id": 25318,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25329,
                  "src": "172:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "172:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "160:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25321,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25329,
                  "src": "206:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:9:86"
            },
            "scope": 25390,
            "src": "143:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25343,
              "nodeType": "Block",
              "src": "315:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25340,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25333,
                        "src": "334:1:86",
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
                        "id": 25338,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25331,
                        "src": "328:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17241,
                      "src": "328:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "328:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25337,
                  "id": 25342,
                  "nodeType": "Return",
                  "src": "321:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25344,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "divide",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25331,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25344,
                  "src": "261:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "261:7:86",
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
                  "id": 25333,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25344,
                  "src": "272:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25332,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "260:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25336,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25344,
                  "src": "306:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25335,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:9:86"
            },
            "scope": 25390,
            "src": "245:96:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25358,
              "nodeType": "Block",
              "src": "417:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25355,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25348,
                        "src": "436:1:86",
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
                        "id": 25353,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25346,
                        "src": "430:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17261,
                      "src": "430:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25352,
                  "id": 25357,
                  "nodeType": "Return",
                  "src": "423:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25359,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "subtract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25346,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25359,
                  "src": "363:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25345,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:86",
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
                  "id": 25348,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25359,
                  "src": "374:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "374:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25351,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25359,
                  "src": "408:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:9:86"
            },
            "scope": 25390,
            "src": "345:98:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25373,
              "nodeType": "Block",
              "src": "516:26:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25370,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25363,
                        "src": "535:1:86",
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
                        "id": 25368,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25361,
                        "src": "529:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25369,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17285,
                      "src": "529:5:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "529:8:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25367,
                  "id": 25372,
                  "nodeType": "Return",
                  "src": "522:15:86"
                }
              ]
            },
            "documentation": null,
            "id": 25374,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addto",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25364,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25361,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25374,
                  "src": "462:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25360,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "462:7:86",
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
                  "id": 25363,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25374,
                  "src": "473:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25362,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "461:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25367,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25366,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25374,
                  "src": "507:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25365,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:9:86"
            },
            "scope": 25390,
            "src": "447:95:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25388,
              "nodeType": "Block",
              "src": "618:42:86",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25385,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25378,
                        "src": "653:1:86",
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
                        "id": 25383,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25376,
                        "src": "631:1:86",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getFractionalAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17303,
                      "src": "631:21:86",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "631:24:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25382,
                  "id": 25387,
                  "nodeType": "Return",
                  "src": "624:31:86"
                }
              ]
            },
            "documentation": null,
            "id": 25389,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "fraction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25376,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 25389,
                  "src": "564:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25375,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "564:7:86",
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
                  "id": 25378,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 25389,
                  "src": "575:9:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25377,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "563:22:86"
            },
            "payable": false,
            "returnParameters": {
              "id": 25382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25381,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25389,
                  "src": "609:7:86",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "609:7:86",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "608:9:86"
            },
            "scope": 25390,
            "src": "546:114:86",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 25391,
        "src": "58:604:86"
      }
    ],
    "src": "0:663:86"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:12.297Z"
}