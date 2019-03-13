"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Consensus = exports.Consensus = 
{
  "contractName": "Consensus",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "proposalID",
          "type": "bytes32"
        }
      ],
      "name": "hasConsensus",
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport '../database/API.sol';\n\ninterface Token { function totalSupply() external view returns (uint); }\ninterface Consensus { function hasConsensus(bytes32 proposalID) external view returns (bool); }\n\ncontract ConsensusTest {\n\n  API public api;\n\n  constructor(address _api)\n  public {\n    api = API(_api);\n  }\n\n  function checkConsensus(address user, address token, uint tokens)\n  public\n  view\n  returns (bool){\n    bytes32 parameterHash = keccak256(abi.encodePacked(user, token, tokens));\n    address governanceContract = api.assetGovernance(token);\n    bytes32 proposalID = keccak256(abi.encodePacked(token, governanceContract, msg.sig, parameterHash));\n    require(Consensus(governanceContract).hasConsensus(proposalID));\n    return true;\n  }\n\n\n  function consensusTestParameterHash(address user, address _token, uint _tokens)\n  public\n  pure\n  returns (bytes32){\n    return keccak256(abi.encodePacked(user, _token, _tokens));\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
    "exportedSymbols": {
      "Consensus": [
        30070
      ],
      "ConsensusTest": [
        30160
      ],
      "Token": [
        30062
      ]
    },
    "id": 30161,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30055,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:88"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/API.sol",
        "file": "../database/API.sol",
        "id": 30056,
        "nodeType": "ImportDirective",
        "scope": 30161,
        "sourceUnit": 5693,
        "src": "26:29:88",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30062,
        "linearizedBaseContracts": [
          30062
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30061,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "95:2:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30059,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30061,
                  "src": "121:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30058,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:6:88"
            },
            "scope": 30062,
            "src": "75:52:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "57:72:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30070,
        "linearizedBaseContracts": [
          30070
        ],
        "name": "Consensus",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30069,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "hasConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30064,
                  "name": "proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "174:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30063,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "173:20:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30067,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "217:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30066,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:6:88"
            },
            "scope": 30070,
            "src": "152:71:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "130:95:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30160,
        "linearizedBaseContracts": [
          30160
        ],
        "name": "ConsensusTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 30072,
            "name": "api",
            "nodeType": "VariableDeclaration",
            "scope": 30160,
            "src": "255:14:88",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_API_$5692",
              "typeString": "contract API"
            },
            "typeName": {
              "contractScope": null,
              "id": 30071,
              "name": "API",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5692,
              "src": "255:3:88",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_API_$5692",
                "typeString": "contract API"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30083,
              "nodeType": "Block",
              "src": "309:26:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30077,
                      "name": "api",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30072,
                      "src": "315:3:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 30079,
                          "name": "_api",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30074,
                          "src": "325:4:88",
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
                        "id": 30078,
                        "name": "API",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5692,
                        "src": "321:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_API_$5692_$",
                          "typeString": "type(contract API)"
                        }
                      },
                      "id": 30080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "321:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "src": "315:15:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_API_$5692",
                      "typeString": "contract API"
                    }
                  },
                  "id": 30082,
                  "nodeType": "ExpressionStatement",
                  "src": "315:15:88"
                }
              ]
            },
            "documentation": null,
            "id": 30084,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30074,
                  "name": "_api",
                  "nodeType": "VariableDeclaration",
                  "scope": 30084,
                  "src": "286:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30073,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "285:14:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:88"
            },
            "scope": 30160,
            "src": "274:61:88",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30137,
              "nodeType": "Block",
              "src": "437:335:88",
              "statements": [
                {
                  "assignments": [
                    30096
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30096,
                      "name": "parameterHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "443:21:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30095,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "443:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30105,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30100,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30086,
                            "src": "494:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30101,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "500:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30102,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30090,
                            "src": "507:6:88",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30098,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "477:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "477:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:37:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30097,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "467:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "467:48:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "443:72:88"
                },
                {
                  "assignments": [
                    30107
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30107,
                      "name": "governanceContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "521:26:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 30106,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "521:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30112,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30110,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30088,
                        "src": "570:5:88",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 30108,
                        "name": "api",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30072,
                        "src": "550:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_API_$5692",
                          "typeString": "contract API"
                        }
                      },
                      "id": 30109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4594,
                      "src": "550:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view external returns (address)"
                      }
                    },
                    "id": 30111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "550:26:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "521:55:88"
                },
                {
                  "assignments": [
                    30114
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30114,
                      "name": "proposalID",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "582:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30113,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "582:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30125,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30118,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "630:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30119,
                            "name": "governanceContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30107,
                            "src": "637:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 30120,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34827,
                              "src": "657:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 30121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "657:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30122,
                            "name": "parameterHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30096,
                            "src": "666:13:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30116,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "613:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "613:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "613:67:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30115,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "603:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "603:78:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "582:99:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30131,
                            "name": "proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30114,
                            "src": "738:10:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 30128,
                                "name": "governanceContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30107,
                                "src": "705:18:88",
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
                              "id": 30127,
                              "name": "Consensus",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30070,
                              "src": "695:9:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Consensus_$30070_$",
                                "typeString": "type(contract Consensus)"
                              }
                            },
                            "id": 30129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "695:29:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Consensus_$30070",
                              "typeString": "contract Consensus"
                            }
                          },
                          "id": 30130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hasConsensus",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30069,
                          "src": "695:42:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 30132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "695:54:88",
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
                      "id": 30126,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34830,
                        34831
                      ],
                      "referencedDeclaration": 34830,
                      "src": "687:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 30133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "687:63:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30134,
                  "nodeType": "ExpressionStatement",
                  "src": "687:63:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 30135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "763:4:88",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 30094,
                  "id": 30136,
                  "nodeType": "Return",
                  "src": "756:11:88"
                }
              ]
            },
            "documentation": null,
            "id": 30138,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30086,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "363:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:88",
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
                  "id": 30088,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "377:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30087,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:88",
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
                  "id": 30090,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "392:11:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30089,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:42:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30093,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "432:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30092,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "431:6:88"
            },
            "scope": 30160,
            "src": "339:433:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30158,
              "nodeType": "Block",
              "src": "892:68:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30152,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30140,
                            "src": "932:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30153,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30142,
                            "src": "938:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30154,
                            "name": "_tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30144,
                            "src": "946:7:88",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30150,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "915:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "915:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "915:39:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30149,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "905:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:50:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 30148,
                  "id": 30157,
                  "nodeType": "Return",
                  "src": "898:57:88"
                }
              ]
            },
            "documentation": null,
            "id": 30159,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "consensusTestParameterHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30140,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "813:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:88",
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
                  "id": 30142,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "827:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:88",
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
                  "id": 30144,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "843:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30143,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "812:44:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30147,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "884:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30146,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:9:88"
            },
            "scope": 30160,
            "src": "777:183:88",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 30161,
        "src": "227:736:88"
      }
    ],
    "src": "0:964:88"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
    "exportedSymbols": {
      "Consensus": [
        30070
      ],
      "ConsensusTest": [
        30160
      ],
      "Token": [
        30062
      ]
    },
    "id": 30161,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30055,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:88"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/API.sol",
        "file": "../database/API.sol",
        "id": 30056,
        "nodeType": "ImportDirective",
        "scope": 30161,
        "sourceUnit": 5693,
        "src": "26:29:88",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30062,
        "linearizedBaseContracts": [
          30062
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30061,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "95:2:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30059,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30061,
                  "src": "121:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30058,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:6:88"
            },
            "scope": 30062,
            "src": "75:52:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "57:72:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30070,
        "linearizedBaseContracts": [
          30070
        ],
        "name": "Consensus",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30069,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "hasConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30064,
                  "name": "proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "174:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30063,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "173:20:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30067,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "217:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30066,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:6:88"
            },
            "scope": 30070,
            "src": "152:71:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "130:95:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30160,
        "linearizedBaseContracts": [
          30160
        ],
        "name": "ConsensusTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 30072,
            "name": "api",
            "nodeType": "VariableDeclaration",
            "scope": 30160,
            "src": "255:14:88",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_API_$5692",
              "typeString": "contract API"
            },
            "typeName": {
              "contractScope": null,
              "id": 30071,
              "name": "API",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5692,
              "src": "255:3:88",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_API_$5692",
                "typeString": "contract API"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30083,
              "nodeType": "Block",
              "src": "309:26:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30077,
                      "name": "api",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30072,
                      "src": "315:3:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 30079,
                          "name": "_api",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30074,
                          "src": "325:4:88",
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
                        "id": 30078,
                        "name": "API",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5692,
                        "src": "321:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_API_$5692_$",
                          "typeString": "type(contract API)"
                        }
                      },
                      "id": 30080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "321:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "src": "315:15:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_API_$5692",
                      "typeString": "contract API"
                    }
                  },
                  "id": 30082,
                  "nodeType": "ExpressionStatement",
                  "src": "315:15:88"
                }
              ]
            },
            "documentation": null,
            "id": 30084,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30074,
                  "name": "_api",
                  "nodeType": "VariableDeclaration",
                  "scope": 30084,
                  "src": "286:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30073,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "285:14:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:88"
            },
            "scope": 30160,
            "src": "274:61:88",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30137,
              "nodeType": "Block",
              "src": "437:335:88",
              "statements": [
                {
                  "assignments": [
                    30096
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30096,
                      "name": "parameterHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "443:21:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30095,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "443:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30105,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30100,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30086,
                            "src": "494:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30101,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "500:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30102,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30090,
                            "src": "507:6:88",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30098,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "477:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "477:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:37:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30097,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "467:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "467:48:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "443:72:88"
                },
                {
                  "assignments": [
                    30107
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30107,
                      "name": "governanceContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "521:26:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 30106,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "521:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30112,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30110,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30088,
                        "src": "570:5:88",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 30108,
                        "name": "api",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30072,
                        "src": "550:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_API_$5692",
                          "typeString": "contract API"
                        }
                      },
                      "id": 30109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4594,
                      "src": "550:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view external returns (address)"
                      }
                    },
                    "id": 30111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "550:26:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "521:55:88"
                },
                {
                  "assignments": [
                    30114
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30114,
                      "name": "proposalID",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "582:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30113,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "582:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30125,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30118,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "630:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30119,
                            "name": "governanceContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30107,
                            "src": "637:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 30120,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34827,
                              "src": "657:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 30121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "657:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30122,
                            "name": "parameterHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30096,
                            "src": "666:13:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30116,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "613:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "613:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "613:67:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30115,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "603:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "603:78:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "582:99:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30131,
                            "name": "proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30114,
                            "src": "738:10:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 30128,
                                "name": "governanceContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30107,
                                "src": "705:18:88",
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
                              "id": 30127,
                              "name": "Consensus",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30070,
                              "src": "695:9:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Consensus_$30070_$",
                                "typeString": "type(contract Consensus)"
                              }
                            },
                            "id": 30129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "695:29:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Consensus_$30070",
                              "typeString": "contract Consensus"
                            }
                          },
                          "id": 30130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hasConsensus",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30069,
                          "src": "695:42:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 30132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "695:54:88",
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
                      "id": 30126,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34830,
                        34831
                      ],
                      "referencedDeclaration": 34830,
                      "src": "687:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 30133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "687:63:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30134,
                  "nodeType": "ExpressionStatement",
                  "src": "687:63:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 30135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "763:4:88",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 30094,
                  "id": 30136,
                  "nodeType": "Return",
                  "src": "756:11:88"
                }
              ]
            },
            "documentation": null,
            "id": 30138,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30086,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "363:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:88",
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
                  "id": 30088,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "377:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30087,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:88",
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
                  "id": 30090,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "392:11:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30089,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:42:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30093,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "432:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30092,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "431:6:88"
            },
            "scope": 30160,
            "src": "339:433:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30158,
              "nodeType": "Block",
              "src": "892:68:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30152,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30140,
                            "src": "932:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30153,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30142,
                            "src": "938:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30154,
                            "name": "_tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30144,
                            "src": "946:7:88",
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
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30150,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "915:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "915:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "915:39:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30149,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "905:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:50:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 30148,
                  "id": 30157,
                  "nodeType": "Return",
                  "src": "898:57:88"
                }
              ]
            },
            "documentation": null,
            "id": 30159,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "consensusTestParameterHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30140,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "813:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:88",
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
                  "id": 30142,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "827:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:88",
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
                  "id": 30144,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "843:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30143,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "812:44:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30147,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "884:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30146,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:9:88"
            },
            "scope": 30160,
            "src": "777:183:88",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 30161,
        "src": "227:736:88"
      }
    ],
    "src": "0:964:88"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-13T22:36:34.873Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}