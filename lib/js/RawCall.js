"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var RawCall = exports.RawCall = 
{
  "contractName": "RawCall",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contract",
          "type": "address"
        },
        {
          "name": "_methodID",
          "type": "bytes4"
        },
        {
          "name": "_params",
          "type": "bytes"
        },
        {
          "name": "_proposalID",
          "type": "bytes32"
        },
        {
          "name": "_votingInterface",
          "type": "address"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506101e2806100206000396000f3006080604052600436106100275763ffffffff60e060020a600035041663a5edb558811461002c575b600080fd5b61008d73ffffffffffffffffffffffffffffffffffffffff600480358216917fffffffff00000000000000000000000000000000000000000000000000000000602480359190911692604435918201929101359060643590608435166100a1565b604080519115158252519081900360200190f35b604080517f39a926c4000000000000000000000000000000000000000000000000000000008152600481018490529051600091839173ffffffffffffffffffffffffffffffffffffffff8316916339a926c491602480830192602092919082900301818887803b15801561011457600080fd5b505af1158015610128573d6000803e3d6000fd5b505050506040513d602081101561013e57600080fd5b5051151561014b57600080fd5b8773ffffffffffffffffffffffffffffffffffffffff1662030d40348960e060020a9004919089896040518563ffffffff1660e060020a02815260040180838380828437820191505092505050600060405180830381858988f19d9c505050505050505050505050505600a165627a7a7230582075a39c30a58b2984eaec5bc372819e70e0d972dcaad8ace85acc76f87b89ac560029",
  "deployedBytecode": "0x6080604052600436106100275763ffffffff60e060020a600035041663a5edb558811461002c575b600080fd5b61008d73ffffffffffffffffffffffffffffffffffffffff600480358216917fffffffff00000000000000000000000000000000000000000000000000000000602480359190911692604435918201929101359060643590608435166100a1565b604080519115158252519081900360200190f35b604080517f39a926c4000000000000000000000000000000000000000000000000000000008152600481018490529051600091839173ffffffffffffffffffffffffffffffffffffffff8316916339a926c491602480830192602092919082900301818887803b15801561011457600080fd5b505af1158015610128573d6000803e3d6000fd5b505050506040513d602081101561013e57600080fd5b5051151561014b57600080fd5b8773ffffffffffffffffffffffffffffffffffffffff1662030d40348960e060020a9004919089896040518563ffffffff1660e060020a02815260040180838380828437820191505092505050600060405180830381858988f19d9c505050505050505050505050505600a165627a7a7230582075a39c30a58b2984eaec5bc372819e70e0d972dcaad8ace85acc76f87b89ac560029",
  "sourceMap": "208:445:50:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;208:445:50;;;;;;;",
  "deployedSourceMap": "208:445:50:-;;;;;;;;;-1:-1:-1;;;208:445:50;;;;;;;;;;;;;296:355;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;534:33;;;;;;;;;;;;;;444:4;;503:16;;534:20;;;;;;:33;;;;;;;;;;;;;;444:4;534:20;:33;;;5:2:-1;;;;30:1;27;20:12;5:2;534:33:50;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;534:33:50;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;534:33:50;526:42;;;;;;;;582:9;:14;;601:6;615:9;626;-1:-1:-1;;;582:63:50;;;;637:7;;582:63;;;;;-1:-1:-1;;;582:63:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;296:355;-1:-1:-1;;;;;;;;;;;;;296:355:50:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/VotingInterface.sol\";\n\ninterface ProposalAction {\n  function withdraw() external returns (bool);\n  function withdraw(address _user) external returns (bool);\n}\n\ncontract RawCall{\n  address private contractAddress;\n  bytes private functionParams;\n\n  function execute(address _contract, bytes4 _methodID, bytes _params, bytes32 _proposalID, address _votingInterface)\n  external\n  payable\n  returns (bool){\n    VotingInterface votingProcess = VotingInterface(_votingInterface);\n    require(votingProcess.result(_proposalID));\n\n    return(_contract.call.gas(200000).value(msg.value)(_methodID, _params));\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
    "exportedSymbols": {
      "ProposalAction": [
        13015
      ],
      "RawCall": [
        13063
      ]
    },
    "id": 13064,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 13001,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:50"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
        "file": "../interfaces/VotingInterface.sol",
        "id": 13002,
        "nodeType": "ImportDirective",
        "scope": 13064,
        "sourceUnit": 8740,
        "src": "26:43:50",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 13015,
        "linearizedBaseContracts": [
          13015
        ],
        "name": "ProposalAction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 13007,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13003,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "117:2:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 13006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13005,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 13007,
                  "src": "138:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13004,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:6:50"
            },
            "scope": 13015,
            "src": "100:44:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 13014,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13009,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 13014,
                  "src": "165:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13008,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:15:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 13013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13012,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 13014,
                  "src": "198:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13011,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:6:50"
            },
            "scope": 13015,
            "src": "147:57:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 13064,
        "src": "71:135:50"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 13063,
        "linearizedBaseContracts": [
          13063
        ],
        "name": "RawCall",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 13017,
            "name": "contractAddress",
            "nodeType": "VariableDeclaration",
            "scope": 13063,
            "src": "228:31:50",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 13016,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "228:7:50",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 13019,
            "name": "functionParams",
            "nodeType": "VariableDeclaration",
            "scope": 13063,
            "src": "263:28:50",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes_storage",
              "typeString": "bytes"
            },
            "typeName": {
              "id": 13018,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "263:5:50",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 13061,
              "nodeType": "Block",
              "src": "449:202:50",
              "statements": [
                {
                  "assignments": [
                    13035
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13035,
                      "name": "votingProcess",
                      "nodeType": "VariableDeclaration",
                      "scope": 13062,
                      "src": "455:29:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VotingInterface_$8739",
                        "typeString": "contract VotingInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 13034,
                        "name": "VotingInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8739,
                        "src": "455:15:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VotingInterface_$8739",
                          "typeString": "contract VotingInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 13039,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 13037,
                        "name": "_votingInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13029,
                        "src": "503:16:50",
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
                      "id": 13036,
                      "name": "VotingInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8739,
                      "src": "487:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_VotingInterface_$8739_$",
                        "typeString": "type(contract VotingInterface)"
                      }
                    },
                    "id": 13038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "487:33:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VotingInterface_$8739",
                      "typeString": "contract VotingInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "455:65:50"
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
                            "id": 13043,
                            "name": "_proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13027,
                            "src": "555:11:50",
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
                            "id": 13041,
                            "name": "votingProcess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13035,
                            "src": "534:13:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VotingInterface_$8739",
                              "typeString": "contract VotingInterface"
                            }
                          },
                          "id": 13042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "result",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8731,
                          "src": "534:20:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 13044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "534:33:50",
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
                      "id": 13040,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "526:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 13045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:42:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13046,
                  "nodeType": "ExpressionStatement",
                  "src": "526:42:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 13056,
                            "name": "_methodID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13023,
                            "src": "626:9:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 13057,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13025,
                            "src": "637:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          ],
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 13053,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20967,
                                "src": "615:3:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 13054,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "615:9:50",
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
                                  "hexValue": "323030303030",
                                  "id": 13050,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "601:6:50",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  },
                                  "value": "200000"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 13047,
                                    "name": "_contract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13021,
                                    "src": "582:9:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 13048,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "call",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "582:14:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                    "typeString": "function () payable returns (bool)"
                                  }
                                },
                                "id": 13049,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "gas",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "582:18:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gas_$",
                                  "typeString": "function (uint256) returns (function () payable returns (bool))"
                                }
                              },
                              "id": 13051,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "582:26:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gas",
                                "typeString": "function () payable returns (bool)"
                              }
                            },
                            "id": 13052,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "582:32:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$gas",
                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                            }
                          },
                          "id": 13055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "582:43:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                            "typeString": "function () payable returns (bool)"
                          }
                        },
                        "id": 13058,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "582:63:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 13059,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "581:65:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 13033,
                  "id": 13060,
                  "nodeType": "Return",
                  "src": "575:71:50"
                }
              ]
            },
            "documentation": null,
            "id": 13062,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13021,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "313:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13020,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:50",
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
                  "id": 13023,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "332:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 13022,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13025,
                  "name": "_params",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "350:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 13024,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13027,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "365:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 13026,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13029,
                  "name": "_votingInterface",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "386:24:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13028,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:99:50"
            },
            "payable": true,
            "returnParameters": {
              "id": 13033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13032,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "444:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13031,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:6:50"
            },
            "scope": 13063,
            "src": "296:355:50",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 13064,
        "src": "208:445:50"
      }
    ],
    "src": "0:654:50"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
    "exportedSymbols": {
      "ProposalAction": [
        13015
      ],
      "RawCall": [
        13063
      ]
    },
    "id": 13064,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 13001,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:50"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
        "file": "../interfaces/VotingInterface.sol",
        "id": 13002,
        "nodeType": "ImportDirective",
        "scope": 13064,
        "sourceUnit": 8740,
        "src": "26:43:50",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 13015,
        "linearizedBaseContracts": [
          13015
        ],
        "name": "ProposalAction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 13007,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13003,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "117:2:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 13006,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13005,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 13007,
                  "src": "138:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13004,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:6:50"
            },
            "scope": 13015,
            "src": "100:44:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 13014,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13009,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 13014,
                  "src": "165:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13008,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:15:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 13013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13012,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 13014,
                  "src": "198:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13011,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:6:50"
            },
            "scope": 13015,
            "src": "147:57:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 13064,
        "src": "71:135:50"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 13063,
        "linearizedBaseContracts": [
          13063
        ],
        "name": "RawCall",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 13017,
            "name": "contractAddress",
            "nodeType": "VariableDeclaration",
            "scope": 13063,
            "src": "228:31:50",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 13016,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "228:7:50",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 13019,
            "name": "functionParams",
            "nodeType": "VariableDeclaration",
            "scope": 13063,
            "src": "263:28:50",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes_storage",
              "typeString": "bytes"
            },
            "typeName": {
              "id": 13018,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "263:5:50",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 13061,
              "nodeType": "Block",
              "src": "449:202:50",
              "statements": [
                {
                  "assignments": [
                    13035
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13035,
                      "name": "votingProcess",
                      "nodeType": "VariableDeclaration",
                      "scope": 13062,
                      "src": "455:29:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VotingInterface_$8739",
                        "typeString": "contract VotingInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 13034,
                        "name": "VotingInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8739,
                        "src": "455:15:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VotingInterface_$8739",
                          "typeString": "contract VotingInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 13039,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 13037,
                        "name": "_votingInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13029,
                        "src": "503:16:50",
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
                      "id": 13036,
                      "name": "VotingInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8739,
                      "src": "487:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_VotingInterface_$8739_$",
                        "typeString": "type(contract VotingInterface)"
                      }
                    },
                    "id": 13038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "487:33:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VotingInterface_$8739",
                      "typeString": "contract VotingInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "455:65:50"
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
                            "id": 13043,
                            "name": "_proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13027,
                            "src": "555:11:50",
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
                            "id": 13041,
                            "name": "votingProcess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13035,
                            "src": "534:13:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VotingInterface_$8739",
                              "typeString": "contract VotingInterface"
                            }
                          },
                          "id": 13042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "result",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8731,
                          "src": "534:20:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 13044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "534:33:50",
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
                      "id": 13040,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "526:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 13045,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:42:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13046,
                  "nodeType": "ExpressionStatement",
                  "src": "526:42:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 13056,
                            "name": "_methodID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13023,
                            "src": "626:9:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 13057,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13025,
                            "src": "637:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          ],
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 13053,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20967,
                                "src": "615:3:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 13054,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "615:9:50",
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
                                  "hexValue": "323030303030",
                                  "id": 13050,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "601:6:50",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  },
                                  "value": "200000"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 13047,
                                    "name": "_contract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13021,
                                    "src": "582:9:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 13048,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "call",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "582:14:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                    "typeString": "function () payable returns (bool)"
                                  }
                                },
                                "id": 13049,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "gas",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "582:18:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gas_$",
                                  "typeString": "function (uint256) returns (function () payable returns (bool))"
                                }
                              },
                              "id": 13051,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "582:26:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gas",
                                "typeString": "function () payable returns (bool)"
                              }
                            },
                            "id": 13052,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "582:32:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$gas",
                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                            }
                          },
                          "id": 13055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "582:43:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                            "typeString": "function () payable returns (bool)"
                          }
                        },
                        "id": 13058,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "582:63:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 13059,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "581:65:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 13033,
                  "id": 13060,
                  "nodeType": "Return",
                  "src": "575:71:50"
                }
              ]
            },
            "documentation": null,
            "id": 13062,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13021,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "313:17:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13020,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:50",
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
                  "id": 13023,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "332:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 13022,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13025,
                  "name": "_params",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "350:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 13024,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13027,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "365:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 13026,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13029,
                  "name": "_votingInterface",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "386:24:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13028,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:99:50"
            },
            "payable": true,
            "returnParameters": {
              "id": 13033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13032,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 13062,
                  "src": "444:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 13031,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:6:50"
            },
            "scope": 13063,
            "src": "296:355:50",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 13064,
        "src": "208:445:50"
      }
    ],
    "src": "0:654:50"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2019-01-15T20:50:39.355Z"
}