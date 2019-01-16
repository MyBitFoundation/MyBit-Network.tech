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
        8703
      ]
    },
    "id": 8704,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8697,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8703,
        "linearizedBaseContracts": [
          8703
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8702,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8698,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 8701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8700,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8702,
                  "src": "193:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8699,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:38"
            },
            "scope": 8703,
            "src": "156:43:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8704,
        "src": "130:72:38"
      }
    ],
    "src": "0:203:38"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
    "exportedSymbols": {
      "PullPayment": [
        8703
      ]
    },
    "id": 8704,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8697,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8703,
        "linearizedBaseContracts": [
          8703
        ],
        "name": "PullPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8702,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8698,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 8701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8700,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8702,
                  "src": "193:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8699,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:6:38"
            },
            "scope": 8703,
            "src": "156:43:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8704,
        "src": "130:72:38"
      }
    ],
    "src": "0:203:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.365Z"
}