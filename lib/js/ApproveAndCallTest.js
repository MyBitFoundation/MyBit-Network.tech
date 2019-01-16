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
  "bytecode": "0x608060405234801561001057600080fd5b506101ff806100206000396000f3006080604052600436106100405763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638f4ffcb18114610045575b600080fd5b34801561005157600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100c29473ffffffffffffffffffffffffffffffffffffffff8135811695602480359660443590931695369560849492019181908401838280828437509497506100c49650505050505050565b005b7fd1e419339498c9d2e8f386de61fec7e8c7275e0181575dbed01b6d91f1e677a084848484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610190578181015183820152602001610178565b50505050905090810190601f1680156101bd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050505600a165627a7a7230582010e4c66e8e059ecc81a4bb53c2caf73d97ad6c0529a4e1e39597121f607fdde40029",
  "deployedBytecode": "0x6080604052600436106100405763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638f4ffcb18114610045575b600080fd5b34801561005157600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100c29473ffffffffffffffffffffffffffffffffffffffff8135811695602480359660443590931695369560849492019181908401838280828437509497506100c49650505050505050565b005b7fd1e419339498c9d2e8f386de61fec7e8c7275e0181575dbed01b6d91f1e677a084848484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610190578181015183820152602001610178565b50505050905090810190601f1680156101bd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050505600a165627a7a7230582010e4c66e8e059ecc81a4bb53c2caf73d97ad6c0529a4e1e39597121f607fdde40029",
  "sourceMap": "26:255:56:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:255:56;;;;;;;",
  "deployedSourceMap": "26:255:56:-;;;;;;;;;;;;;;;;;;;;;;;57:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;57:142:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;57:142:56;;-1:-1:-1;57:142:56;;-1:-1:-1;;;;;;;57:142:56;;;;156:38;168:4;174:6;182:5;189:4;156:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;156:38:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;57:142;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\ncontract ApproveAndCallTest{\n  function receiveApproval(address from, uint tokens, address token, bytes data)\n  public {\n    emit LogApproval(from, tokens, token, data);\n  }\n\n  event LogApproval(address _from, uint _tokens, address _token, bytes _data);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
    "exportedSymbols": {
      "ApproveAndCallTest": [
        16302
      ]
    },
    "id": 16303,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16272,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:56"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16302,
        "linearizedBaseContracts": [
          16302
        ],
        "name": "ApproveAndCallTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 16290,
              "nodeType": "Block",
              "src": "145:54:56",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16284,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16274,
                        "src": "168:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16285,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16276,
                        "src": "174:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16286,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16278,
                        "src": "182:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16287,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16280,
                        "src": "189:4:56",
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
                      "id": 16283,
                      "name": "LogApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16301,
                      "src": "156:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory)"
                      }
                    },
                    "id": 16288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "156:38:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16289,
                  "nodeType": "EmitStatement",
                  "src": "151:43:56"
                }
              ]
            },
            "documentation": null,
            "id": 16291,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16274,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "82:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16273,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:7:56",
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
                  "id": 16276,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "96:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16275,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:4:56",
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
                  "id": 16278,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "109:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:56",
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
                  "id": 16280,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "124:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16279,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:56"
            },
            "payable": false,
            "returnParameters": {
              "id": 16282,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "145:0:56"
            },
            "scope": 16302,
            "src": "57:142:56",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16301,
            "name": "LogApproval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16293,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "221:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:56",
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
                  "id": 16295,
                  "indexed": false,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "236:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16294,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:4:56",
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
                  "id": 16297,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "250:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:56",
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
                  "id": 16299,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "266:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16298,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:58:56"
            },
            "src": "203:76:56"
          }
        ],
        "scope": 16303,
        "src": "26:255:56"
      }
    ],
    "src": "0:282:56"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
    "exportedSymbols": {
      "ApproveAndCallTest": [
        16302
      ]
    },
    "id": 16303,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16272,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:56"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16302,
        "linearizedBaseContracts": [
          16302
        ],
        "name": "ApproveAndCallTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 16290,
              "nodeType": "Block",
              "src": "145:54:56",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 16284,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16274,
                        "src": "168:4:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16285,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16276,
                        "src": "174:6:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16286,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16278,
                        "src": "182:5:56",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16287,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16280,
                        "src": "189:4:56",
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
                      "id": 16283,
                      "name": "LogApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16301,
                      "src": "156:11:56",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory)"
                      }
                    },
                    "id": 16288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "156:38:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16289,
                  "nodeType": "EmitStatement",
                  "src": "151:43:56"
                }
              ]
            },
            "documentation": null,
            "id": 16291,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16274,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "82:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16273,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:7:56",
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
                  "id": 16276,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "96:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16275,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:4:56",
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
                  "id": 16278,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "109:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:56",
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
                  "id": 16280,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16291,
                  "src": "124:10:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16279,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:56"
            },
            "payable": false,
            "returnParameters": {
              "id": 16282,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "145:0:56"
            },
            "scope": 16302,
            "src": "57:142:56",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16301,
            "name": "LogApproval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16293,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "221:13:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:56",
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
                  "id": 16295,
                  "indexed": false,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "236:12:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16294,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:4:56",
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
                  "id": 16297,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "250:14:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16296,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:56",
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
                  "id": 16299,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "266:11:56",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16298,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:5:56",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:58:56"
            },
            "src": "203:76:56"
          }
        ],
        "scope": 16303,
        "src": "26:255:56"
      }
    ],
    "src": "0:282:56"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.759Z"
}