"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ApproveAndCallFallBack = exports.ApproveAndCallFallBack = 
{
  "contractName": "ApproveAndCallFallBack",
  "abi": [
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n// @notice Receive approval and then execute function\ninterface ApproveAndCallFallBack {\n    function receiveApproval(address from, uint tokens, address token, bytes data) external;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        5685
      ]
    },
    "id": 5686,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5673,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:16"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 5685,
        "linearizedBaseContracts": [
          5685
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5684,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5675,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "144:12:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5674,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:16",
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
                  "id": 5677,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "158:11:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5676,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:4:16",
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
                  "id": 5679,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "171:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5678,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:16",
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
                  "id": 5681,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "186:10:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5680,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "186:5:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:54:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5683,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:16"
            },
            "scope": 5685,
            "src": "119:88:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 5686,
        "src": "80:129:16"
      }
    ],
    "src": "0:210:16"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        5685
      ]
    },
    "id": 5686,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5673,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:16"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 5685,
        "linearizedBaseContracts": [
          5685
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5684,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5675,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "144:12:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5674,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:16",
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
                  "id": 5677,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "158:11:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5676,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:4:16",
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
                  "id": 5679,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "171:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5678,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:16",
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
                  "id": 5681,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "186:10:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5680,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "186:5:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:54:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5683,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:16"
            },
            "scope": 5685,
            "src": "119:88:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 5686,
        "src": "80:129:16"
      }
    ],
    "src": "0:210:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.443Z"
}