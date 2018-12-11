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
        17196
      ]
    },
    "id": 17197,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17179,
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
        "id": 17196,
        "linearizedBaseContracts": [
          17196
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17186,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17181,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17186,
                  "src": "91:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17180,
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
              "id": 17185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17186,
                  "src": "127:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17183,
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
            "scope": 17196,
            "src": "62:74:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17195,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17188,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17195,
                  "src": "169:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17187,
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
                  "id": 17190,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17195,
                  "src": "187:21:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17189,
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
              "id": 17194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17193,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17195,
                  "src": "228:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17192,
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
            "scope": 17196,
            "src": "140:97:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17197,
        "src": "26:214:67"
      }
    ],
    "src": "0:241:67"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        17196
      ]
    },
    "id": 17197,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17179,
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
        "id": 17196,
        "linearizedBaseContracts": [
          17196
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17186,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17181,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17186,
                  "src": "91:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17180,
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
              "id": 17185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17186,
                  "src": "127:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17183,
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
            "scope": 17196,
            "src": "62:74:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17195,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17188,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 17195,
                  "src": "169:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 17187,
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
                  "id": 17190,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17195,
                  "src": "187:21:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17189,
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
              "id": 17194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17193,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17195,
                  "src": "228:7:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17192,
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
            "scope": 17196,
            "src": "140:97:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17197,
        "src": "26:214:67"
      }
    ],
    "src": "0:241:67"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.731Z"
}