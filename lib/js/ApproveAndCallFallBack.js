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
        16586
      ]
    },
    "id": 16587,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16574,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:57"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16586,
        "linearizedBaseContracts": [
          16586
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16585,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16576,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "144:12:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:57",
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
                  "id": 16578,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "158:11:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16577,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:4:57",
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
                  "id": 16580,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "171:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16579,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:57",
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
                  "id": 16582,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "186:10:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16581,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "186:5:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:54:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16584,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:57"
            },
            "scope": 16586,
            "src": "119:88:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16587,
        "src": "80:129:57"
      }
    ],
    "src": "0:210:57"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        16586
      ]
    },
    "id": 16587,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16574,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:57"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16586,
        "linearizedBaseContracts": [
          16586
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16585,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16576,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "144:12:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:57",
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
                  "id": 16578,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "158:11:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16577,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:4:57",
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
                  "id": 16580,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "171:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16579,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:57",
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
                  "id": 16582,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16585,
                  "src": "186:10:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16581,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "186:5:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:54:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16584,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:57"
            },
            "scope": 16586,
            "src": "119:88:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16587,
        "src": "80:129:57"
      }
    ],
    "src": "0:210:57"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:12.122Z"
}