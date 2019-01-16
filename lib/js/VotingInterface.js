"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var VotingInterface = exports.VotingInterface = 
{
  "contractName": "VotingInterface",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_proposalID",
          "type": "bytes32"
        }
      ],
      "name": "result",
      "outputs": [
        {
          "name": "passed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_proposalID",
          "type": "bytes32"
        }
      ],
      "name": "proposalExtant",
      "outputs": [
        {
          "name": "extant",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface VotingInterface {\n  function result(bytes32 _proposalID) external view returns (bool passed);\n\n  function proposalExtant(bytes32 _proposalID) external view returns (bool extant);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
    "exportedSymbols": {
      "VotingInterface": [
        8739
      ]
    },
    "id": 8740,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8724,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8739,
        "linearizedBaseContracts": [
          8739
        ],
        "name": "VotingInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8731,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "result",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8726,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 8731,
                  "src": "72:19:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8725,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:21:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 8730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8729,
                  "name": "passed",
                  "nodeType": "VariableDeclaration",
                  "scope": 8731,
                  "src": "116:11:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8728,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "116:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "115:13:40"
            },
            "scope": 8739,
            "src": "56:73:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8738,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "proposalExtant",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8733,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 8738,
                  "src": "157:19:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8732,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "157:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "156:21:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 8737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8736,
                  "name": "extant",
                  "nodeType": "VariableDeclaration",
                  "scope": 8738,
                  "src": "201:11:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8735,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "201:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "200:13:40"
            },
            "scope": 8739,
            "src": "133:81:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8740,
        "src": "26:190:40"
      }
    ],
    "src": "0:217:40"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
    "exportedSymbols": {
      "VotingInterface": [
        8739
      ]
    },
    "id": 8740,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8724,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8739,
        "linearizedBaseContracts": [
          8739
        ],
        "name": "VotingInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8731,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "result",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8726,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 8731,
                  "src": "72:19:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8725,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:21:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 8730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8729,
                  "name": "passed",
                  "nodeType": "VariableDeclaration",
                  "scope": 8731,
                  "src": "116:11:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8728,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "116:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "115:13:40"
            },
            "scope": 8739,
            "src": "56:73:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8738,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "proposalExtant",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8733,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 8738,
                  "src": "157:19:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8732,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "157:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "156:21:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 8737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8736,
                  "name": "extant",
                  "nodeType": "VariableDeclaration",
                  "scope": 8738,
                  "src": "201:11:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8735,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "201:4:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "200:13:40"
            },
            "scope": 8739,
            "src": "133:81:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8740,
        "src": "26:190:40"
      }
    ],
    "src": "0:217:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2019-01-15T20:50:39.232Z"
}