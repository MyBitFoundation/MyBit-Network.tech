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
        17213
      ]
    },
    "id": 17214,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17198,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:68"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17213,
        "linearizedBaseContracts": [
          17213
        ],
        "name": "VotingInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17205,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "result",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17200,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 17205,
                  "src": "72:19:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 17199,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:21:68"
            },
            "payable": false,
            "returnParameters": {
              "id": 17204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17203,
                  "name": "passed",
                  "nodeType": "VariableDeclaration",
                  "scope": 17205,
                  "src": "116:11:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17202,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "116:4:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "115:13:68"
            },
            "scope": 17213,
            "src": "56:73:68",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17212,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "proposalExtant",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17207,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 17212,
                  "src": "157:19:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 17206,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "157:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "156:21:68"
            },
            "payable": false,
            "returnParameters": {
              "id": 17211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17210,
                  "name": "extant",
                  "nodeType": "VariableDeclaration",
                  "scope": 17212,
                  "src": "201:11:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17209,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "201:4:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "200:13:68"
            },
            "scope": 17213,
            "src": "133:81:68",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17214,
        "src": "26:190:68"
      }
    ],
    "src": "0:217:68"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
    "exportedSymbols": {
      "VotingInterface": [
        17213
      ]
    },
    "id": 17214,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17198,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:68"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17213,
        "linearizedBaseContracts": [
          17213
        ],
        "name": "VotingInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17205,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "result",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17200,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 17205,
                  "src": "72:19:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 17199,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:21:68"
            },
            "payable": false,
            "returnParameters": {
              "id": 17204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17203,
                  "name": "passed",
                  "nodeType": "VariableDeclaration",
                  "scope": 17205,
                  "src": "116:11:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17202,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "116:4:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "115:13:68"
            },
            "scope": 17213,
            "src": "56:73:68",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17212,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "proposalExtant",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17207,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 17212,
                  "src": "157:19:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 17206,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "157:7:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "156:21:68"
            },
            "payable": false,
            "returnParameters": {
              "id": 17211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17210,
                  "name": "extant",
                  "nodeType": "VariableDeclaration",
                  "scope": 17212,
                  "src": "201:11:68",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17209,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "201:4:68",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "200:13:68"
            },
            "scope": 17213,
            "src": "133:81:68",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17214,
        "src": "26:190:68"
      }
    ],
    "src": "0:217:68"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.731Z"
}