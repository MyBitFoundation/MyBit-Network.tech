"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var PullPayment = exports.PullPayment = 
{
  "contractName": "PullPayment",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
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
  "source": "pragma solidity ^0.4.24;\n\n// @notice allows contract to call a basic withdraw() function taking no parameters on another contract\ninterface PullPayment {\n\n\tfunction withdraw()\texternal returns(bool);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
    "exportedSymbols": {
      "PullPayment": [
        6802
      ]
    },
    "id": 6803,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6796,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6802,
        "linearizedBaseContracts": [
          6802
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6801,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6797,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 6800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6799,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6801,
                  "src": "193:4:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6798,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:27"
            },
            "scope": 6802,
            "src": "156:43:27",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6803,
        "src": "130:72:27"
      }
    ],
    "src": "0:203:27"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
    "exportedSymbols": {
      "PullPayment": [
        6802
      ]
    },
    "id": 6803,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6796,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6802,
        "linearizedBaseContracts": [
          6802
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6801,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6797,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:27"
            },
            "payable": false,
            "returnParameters": {
              "id": 6800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6799,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6801,
                  "src": "193:4:27",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6798,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:27",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:27"
            },
            "scope": 6802,
            "src": "156:43:27",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6803,
        "src": "130:72:27"
      }
    ],
    "src": "0:203:27"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.834Z"
}