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
  "bytecode": "0x608060405234801561001057600080fd5b50610237806100206000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638f4ffcb114610046575b600080fd5b34801561005257600080fd5b506100f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506100f9565b005b7fd1e419339498c9d2e8f386de61fec7e8c7275e0181575dbed01b6d91f1e677a084848484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050505600a165627a7a72305820e6069ee26b48fd110c751eeb347f131601e2e1451f7651ae4acd023d23a9545b0029",
  "deployedBytecode": "0x608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638f4ffcb114610046575b600080fd5b34801561005257600080fd5b506100f7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506100f9565b005b7fd1e419339498c9d2e8f386de61fec7e8c7275e0181575dbed01b6d91f1e677a084848484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1505050505600a165627a7a72305820e6069ee26b48fd110c751eeb347f131601e2e1451f7651ae4acd023d23a9545b0029",
  "sourceMap": "26:255:39:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:255:39;;;;;;;",
  "deployedSourceMap": "26:255:39:-;;;;;;;;;;;;;;;;;;;;;;;;57:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;57:142:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;156:38;168:4;174:6;182:5;189:4;156:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;156:38:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;57:142;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\ncontract ApproveAndCallTest{\n  function receiveApproval(address from, uint tokens, address token, bytes data)\n  public {\n    emit LogApproval(from, tokens, token, data);\n  }\n\n  event LogApproval(address _from, uint _tokens, address _token, bytes _data);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
    "exportedSymbols": {
      "ApproveAndCallTest": [
        9976
      ]
    },
    "id": 9977,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9946,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9976,
        "linearizedBaseContracts": [
          9976
        ],
        "name": "ApproveAndCallTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 9964,
              "nodeType": "Block",
              "src": "145:54:39",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9958,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9948,
                        "src": "168:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9959,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9950,
                        "src": "174:6:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9960,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9952,
                        "src": "182:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9961,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9954,
                        "src": "189:4:39",
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
                      "id": 9957,
                      "name": "LogApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9975,
                      "src": "156:11:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory)"
                      }
                    },
                    "id": 9962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "156:38:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9963,
                  "nodeType": "EmitStatement",
                  "src": "151:43:39"
                }
              ]
            },
            "documentation": null,
            "id": 9965,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9948,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "82:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9947,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:7:39",
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
                  "id": 9950,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "96:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9949,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:4:39",
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
                  "id": 9952,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "109:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9951,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:39",
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
                  "id": 9954,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "124:10:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9953,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9956,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "145:0:39"
            },
            "scope": 9976,
            "src": "57:142:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9975,
            "name": "LogApproval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9967,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "221:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:39",
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
                  "id": 9969,
                  "indexed": false,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "236:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9968,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:4:39",
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
                  "id": 9971,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "250:14:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:39",
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
                  "id": 9973,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "266:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9972,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:58:39"
            },
            "src": "203:76:39"
          }
        ],
        "scope": 9977,
        "src": "26:255:39"
      }
    ],
    "src": "0:282:39"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ApproveAndCallTest.sol",
    "exportedSymbols": {
      "ApproveAndCallTest": [
        9976
      ]
    },
    "id": 9977,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9946,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9976,
        "linearizedBaseContracts": [
          9976
        ],
        "name": "ApproveAndCallTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 9964,
              "nodeType": "Block",
              "src": "145:54:39",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9958,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9948,
                        "src": "168:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9959,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9950,
                        "src": "174:6:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9960,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9952,
                        "src": "182:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9961,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9954,
                        "src": "189:4:39",
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
                      "id": 9957,
                      "name": "LogApproval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9975,
                      "src": "156:11:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,address,bytes memory)"
                      }
                    },
                    "id": 9962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "156:38:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9963,
                  "nodeType": "EmitStatement",
                  "src": "151:43:39"
                }
              ]
            },
            "documentation": null,
            "id": 9965,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9948,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "82:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9947,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:7:39",
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
                  "id": 9950,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "96:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9949,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "96:4:39",
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
                  "id": 9952,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "109:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9951,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:39",
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
                  "id": 9954,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 9965,
                  "src": "124:10:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9953,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9956,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "145:0:39"
            },
            "scope": 9976,
            "src": "57:142:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9975,
            "name": "LogApproval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9967,
                  "indexed": false,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "221:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:39",
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
                  "id": 9969,
                  "indexed": false,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "236:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9968,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:4:39",
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
                  "id": 9971,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "250:14:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:39",
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
                  "id": 9973,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 9975,
                  "src": "266:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9972,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:58:39"
            },
            "src": "203:76:39"
          }
        ],
        "scope": 9977,
        "src": "26:255:39"
      }
    ],
    "src": "0:282:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-11T19:26:29.596Z"
}