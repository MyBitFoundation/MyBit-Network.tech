"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ApproveAndCallTest = exports.ApproveAndCallTest = 
{
  "contractName": "ApproveAndCallTest",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokens",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "LogApproval",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "receiveApproval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506101ff806100206000396000f3006080604052600436106100405763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638f4ffcb18114610045575b600080fd5b34801561005157600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100c29473ffffffffffffffffffffffffffffffffffffffff8135811695602480359660443590931695369560849492019181908401838280828437509497506100c49650505050505050565b005b7fd1e419339498c9d2e8f386de61fec7e8c7275e0181575dbed01b6d91f1e677a084848484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610190578181015183820152602001610178565b50505050905090810190601f1680156101bd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050505600a165627a7a72305820a0080e990ab2e3a4206e74d6f5ed5245526cb43f5795815f71a28aa08e74aaad0029",
  "deployedBytecode": "0x6080604052600436106100405763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638f4ffcb18114610045575b600080fd5b34801561005157600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100c29473ffffffffffffffffffffffffffffffffffffffff8135811695602480359660443590931695369560849492019181908401838280828437509497506100c49650505050505050565b005b7fd1e419339498c9d2e8f386de61fec7e8c7275e0181575dbed01b6d91f1e677a084848484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610190578181015183820152602001610178565b50505050905090810190601f1680156101bd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050505600a165627a7a72305820a0080e990ab2e3a4206e74d6f5ed5245526cb43f5795815f71a28aa08e74aaad0029",
  "sourceMap": "26:255:87:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:255:87;;;;;;;",
  "deployedSourceMap": "26:255:87:-;;;;;;;;;;;;;;;;;;;;;;;57:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;57:142:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;57:142:87;;-1:-1:-1;57:142:87;;-1:-1:-1;;;;;;;57:142:87;;;;156:38;168:4;174:6;182:5;189:4;156:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;156:38:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;57:142;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\ncontract ApproveAndCallTest{\n  function receiveApproval(address from, uint tokens, address token, bytes data)\n  public {\n    emit LogApproval(from, tokens, token, data);\n  }\n\n  event LogApproval(address _from, uint _tokens, address _token, bytes _data);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
    "exportedSymbols": {
      "ApproveAndCallTest": [
        30149
      ]
    },
    "id": 30150,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30119,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:87"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30149,
        "linearizedBaseContracts": [
          30149
        ],
        "name": "ApproveAndCallTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 30137,
              "nodeType": "Block",
              "src": "145:54:87",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30131,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30121,
                        "src": "168:4:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 30132,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30123,
                        "src": "174:6:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 30133,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30125,
                        "src": "182:5:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 30134,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30127,
                        "src": "189:4:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30130,
                      "name": "LogApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30148,
                      "src": "156:11:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory)"
                      }
                    },
                    "id": 30135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "156:38:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30136,
                  "nodeType": "EmitStatement",
                  "src": "151:43:87"
                }
              ]
            },
            "documentation": null,
            "id": 30138,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30121,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "82:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30120,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:7:87",
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
                  "id": 30123,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "96:11:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30122,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:4:87",
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
                  "id": 30125,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "109:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30124,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:87",
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
                  "id": 30127,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "124:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30126,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 30129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "145:0:87"
            },
            "scope": 30149,
            "src": "57:142:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 30148,
            "name": "LogApproval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 30147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30140,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "221:13:87",
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
                    "src": "221:7:87",
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
                  "indexed": false,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "236:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:4:87",
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
                  "id": 30144,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "250:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:87",
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
                  "id": 30146,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "266:11:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30145,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:58:87"
            },
            "src": "203:76:87"
          }
        ],
        "scope": 30150,
        "src": "26:255:87"
      }
    ],
    "src": "0:282:87"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
    "exportedSymbols": {
      "ApproveAndCallTest": [
        30149
      ]
    },
    "id": 30150,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30119,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:87"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30149,
        "linearizedBaseContracts": [
          30149
        ],
        "name": "ApproveAndCallTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 30137,
              "nodeType": "Block",
              "src": "145:54:87",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30131,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30121,
                        "src": "168:4:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 30132,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30123,
                        "src": "174:6:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 30133,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30125,
                        "src": "182:5:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 30134,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30127,
                        "src": "189:4:87",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 30130,
                      "name": "LogApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30148,
                      "src": "156:11:87",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory)"
                      }
                    },
                    "id": 30135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "156:38:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30136,
                  "nodeType": "EmitStatement",
                  "src": "151:43:87"
                }
              ]
            },
            "documentation": null,
            "id": 30138,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30121,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "82:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30120,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:7:87",
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
                  "id": 30123,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "96:11:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30122,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:4:87",
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
                  "id": 30125,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "109:13:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30124,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:87",
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
                  "id": 30127,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "124:10:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30126,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:87"
            },
            "payable": false,
            "returnParameters": {
              "id": 30129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "145:0:87"
            },
            "scope": 30149,
            "src": "57:142:87",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 30148,
            "name": "LogApproval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 30147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30140,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "221:13:87",
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
                    "src": "221:7:87",
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
                  "indexed": false,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "236:12:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:4:87",
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
                  "id": 30144,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "250:14:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:87",
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
                  "id": 30146,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 30148,
                  "src": "266:11:87",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 30145,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:5:87",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:58:87"
            },
            "src": "203:76:87"
          }
        ],
        "scope": 30150,
        "src": "26:255:87"
      }
    ],
    "src": "0:282:87"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.843Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}