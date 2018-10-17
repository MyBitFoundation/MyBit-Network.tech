"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var PullManagerIncome = exports.PullManagerIncome = 
{
  "contractName": "PullManagerIncome",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assetID",
          "type": "bytes32"
        }
      ],
      "name": "withdrawManagerIncome",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n// @notice allows contract to call a basic withdraw() function taking no parameters on another contract\ninterface PullManagerIncome {\n\n\tfunction withdrawManagerIncome(bytes32 _assetID) external returns (bool);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullManagerIncome.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullManagerIncome.sol",
    "exportedSymbols": {
      "PullManagerIncome": [
        2598
      ]
    },
    "id": 2599,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2590,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2598,
        "linearizedBaseContracts": [
          2598
        ],
        "name": "PullManagerIncome",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2597,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawManagerIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2592,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 2597,
                  "src": "193:16:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2591,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:18:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2595,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2597,
                  "src": "229:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2594,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "228:6:13"
            },
            "scope": 2598,
            "src": "162:73:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2599,
        "src": "130:108:13"
      }
    ],
    "src": "0:239:13"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullManagerIncome.sol",
    "exportedSymbols": {
      "PullManagerIncome": [
        2598
      ]
    },
    "id": 2599,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2590,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2598,
        "linearizedBaseContracts": [
          2598
        ],
        "name": "PullManagerIncome",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2597,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawManagerIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2592,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 2597,
                  "src": "193:16:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2591,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:18:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2595,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2597,
                  "src": "229:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2594,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "228:6:13"
            },
            "scope": 2598,
            "src": "162:73:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2599,
        "src": "130:108:13"
      }
    ],
    "src": "0:239:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-11T15:13:26.054Z"
}