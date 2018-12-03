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
        17144
      ]
    },
    "id": 17145,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17138,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:66"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17144,
        "linearizedBaseContracts": [
          17144
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17143,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:66"
            },
            "payable": false,
            "returnParameters": {
              "id": 17142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17141,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17143,
                  "src": "193:4:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17140,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:66"
            },
            "scope": 17144,
            "src": "156:43:66",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17145,
        "src": "130:72:66"
      }
    ],
    "src": "0:203:66"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
    "exportedSymbols": {
      "PullPayment": [
        17144
      ]
    },
    "id": 17145,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17138,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:66"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17144,
        "linearizedBaseContracts": [
          17144
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17143,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:66"
            },
            "payable": false,
            "returnParameters": {
              "id": 17142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17141,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17143,
                  "src": "193:4:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17140,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:66"
            },
            "scope": 17144,
            "src": "156:43:66",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17145,
        "src": "130:72:66"
      }
    ],
    "src": "0:203:66"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:12.154Z"
}