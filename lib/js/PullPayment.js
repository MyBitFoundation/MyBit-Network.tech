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
        6218
      ]
    },
    "id": 6219,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6212,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6218,
        "linearizedBaseContracts": [
          6218
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6217,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6215,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6217,
                  "src": "193:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6214,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:24"
            },
            "scope": 6218,
            "src": "156:43:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6219,
        "src": "130:72:24"
      }
    ],
    "src": "0:203:24"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
    "exportedSymbols": {
      "PullPayment": [
        6218
      ]
    },
    "id": 6219,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6212,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6218,
        "linearizedBaseContracts": [
          6218
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6217,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6215,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6217,
                  "src": "193:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6214,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:24"
            },
            "scope": 6218,
            "src": "156:43:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6219,
        "src": "130:72:24"
      }
    ],
    "src": "0:203:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.452Z"
}