"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IOwned = exports.IOwned = 
{
  "contractName": "IOwned",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Owned contract interface\n*/\ncontract IOwned {\n    // this function isn't abstract since the compiler emits automatically generated getter functions as external\n    function owner() public pure returns (address) {}\n\n    function transferOwnership(address _newOwner) public;\n    function acceptOwnership() public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
    "exportedSymbols": {
      "IOwned": [
        9887
      ]
    },
    "id": 9888,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9872,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9887,
        "linearizedBaseContracts": [
          9887
        ],
        "name": "IOwned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 9877,
              "nodeType": "Block",
              "src": "244:2:41",
              "statements": []
            },
            "documentation": null,
            "id": 9878,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9873,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "211:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 9876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9875,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9878,
                  "src": "235:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:41"
            },
            "scope": 9887,
            "src": "197:49:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9883,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9880,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9883,
                  "src": "279:17:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9879,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "278:19:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 9882,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:0:41"
            },
            "scope": 9887,
            "src": "252:53:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9886,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9884,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 9885,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "343:0:41"
            },
            "scope": 9887,
            "src": "310:34:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9888,
        "src": "61:285:41"
      }
    ],
    "src": "0:347:41"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
    "exportedSymbols": {
      "IOwned": [
        9887
      ]
    },
    "id": 9888,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9872,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9887,
        "linearizedBaseContracts": [
          9887
        ],
        "name": "IOwned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 9877,
              "nodeType": "Block",
              "src": "244:2:41",
              "statements": []
            },
            "documentation": null,
            "id": 9878,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9873,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "211:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 9876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9875,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9878,
                  "src": "235:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:41"
            },
            "scope": 9887,
            "src": "197:49:41",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9883,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9880,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9883,
                  "src": "279:17:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9879,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "278:19:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 9882,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:0:41"
            },
            "scope": 9887,
            "src": "252:53:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9886,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9884,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 9885,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "343:0:41"
            },
            "scope": 9887,
            "src": "310:34:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9888,
        "src": "61:285:41"
      }
    ],
    "src": "0:347:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.563Z"
}