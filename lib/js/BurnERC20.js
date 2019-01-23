"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnERC20 = exports.BurnERC20 = 
{
  "contractName": "BurnERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "success",
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
  "source": "pragma solidity ^0.4.24;\n\n\ninterface BurnERC20 {\n\n    function burnFrom(address _tokenHolder, uint _amount) external returns (bool success);\n\n    function burn(uint _amount) external returns (bool success);\n\n    event LogBurn(address indexed _spender, uint256 _value);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
    "exportedSymbols": {
      "BurnERC20": [
        8170
      ]
    },
    "id": 8171,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8147,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8170,
        "linearizedBaseContracts": [
          8170
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8156,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8149,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8156,
                  "src": "72:20:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:30",
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
                  "id": 8151,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8156,
                  "src": "94:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8150,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8154,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8156,
                  "src": "126:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8153,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:30"
            },
            "scope": 8170,
            "src": "54:86:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8163,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8158,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8163,
                  "src": "160:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8157,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8161,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8163,
                  "src": "192:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8160,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:30"
            },
            "scope": 8170,
            "src": "146:60:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8169,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8165,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8169,
                  "src": "226:24:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8164,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:30",
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
                  "id": 8167,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8169,
                  "src": "252:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8166,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:30"
            },
            "src": "212:56:30"
          }
        ],
        "scope": 8171,
        "src": "27:244:30"
      }
    ],
    "src": "0:272:30"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
    "exportedSymbols": {
      "BurnERC20": [
        8170
      ]
    },
    "id": 8171,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8147,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8170,
        "linearizedBaseContracts": [
          8170
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8156,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8149,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8156,
                  "src": "72:20:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:30",
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
                  "id": 8151,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8156,
                  "src": "94:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8150,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8154,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8156,
                  "src": "126:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8153,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:30"
            },
            "scope": 8170,
            "src": "54:86:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8163,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8158,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8163,
                  "src": "160:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8157,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8161,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8163,
                  "src": "192:12:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8160,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:30"
            },
            "scope": 8170,
            "src": "146:60:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8169,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8165,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8169,
                  "src": "226:24:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8164,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:30",
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
                  "id": 8167,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8169,
                  "src": "252:14:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8166,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:30"
            },
            "src": "212:56:30"
          }
        ],
        "scope": 8171,
        "src": "27:244:30"
      }
    ],
    "src": "0:272:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.897Z"
}