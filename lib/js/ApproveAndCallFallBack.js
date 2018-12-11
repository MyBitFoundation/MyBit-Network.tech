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
        16619
      ]
    },
    "id": 16620,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16607,
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
        "id": 16619,
        "linearizedBaseContracts": [
          16619
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16618,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16609,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "144:12:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16608,
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
                  "id": 16611,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "158:11:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16610,
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
                  "id": 16613,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "171:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16612,
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
                  "id": 16615,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "186:10:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16614,
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
              "id": 16617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:57"
            },
            "scope": 16619,
            "src": "119:88:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16620,
        "src": "80:129:57"
      }
    ],
    "src": "0:210:57"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        16619
      ]
    },
    "id": 16620,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16607,
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
        "id": 16619,
        "linearizedBaseContracts": [
          16619
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16618,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16609,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "144:12:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16608,
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
                  "id": 16611,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "158:11:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16610,
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
                  "id": 16613,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "171:13:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16612,
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
                  "id": 16615,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 16618,
                  "src": "186:10:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 16614,
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
              "id": 16617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:57"
            },
            "scope": 16619,
            "src": "119:88:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16620,
        "src": "80:129:57"
      }
    ],
    "src": "0:210:57"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.699Z"
}