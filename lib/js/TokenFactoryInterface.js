"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenFactoryInterface = exports.TokenFactoryInterface = 
{
  "contractName": "TokenFactoryInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        }
      ],
      "name": "createEtherDividend",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "createERC20Dividend",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.24;\n\ninterface TokenFactoryInterface{\n\n  function createEtherDividend(string _tokenURI) external returns (address);\n\n  function createERC20Dividend(string _tokenURI, address _erc20Address) external returns (address);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        17163
      ]
    },
    "id": 17164,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17146,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:67"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17163,
        "linearizedBaseContracts": [
          17163
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17153,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17148,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17153,
                  "src": "91:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17147,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 17152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17151,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17153,
                  "src": "127:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:67"
            },
            "scope": 17163,
            "src": "62:74:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17162,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17155,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17162,
                  "src": "169:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17154,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17157,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17162,
                  "src": "187:21:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 17161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17160,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17162,
                  "src": "228:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:67"
            },
            "scope": 17163,
            "src": "140:97:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17164,
        "src": "26:214:67"
      }
    ],
    "src": "0:241:67"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        17163
      ]
    },
    "id": 17164,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17146,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:67"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17163,
        "linearizedBaseContracts": [
          17163
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17153,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17148,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17153,
                  "src": "91:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17147,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 17152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17151,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17153,
                  "src": "127:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:67"
            },
            "scope": 17163,
            "src": "62:74:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17162,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17155,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17162,
                  "src": "169:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17154,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17157,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17162,
                  "src": "187:21:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 17161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17160,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17162,
                  "src": "228:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:67"
            },
            "scope": 17163,
            "src": "140:97:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17164,
        "src": "26:214:67"
      }
    ],
    "src": "0:241:67"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-05T20:40:37.332Z"
}