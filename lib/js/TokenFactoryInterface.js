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
        9561
      ]
    },
    "id": 9562,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9544,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9561,
        "linearizedBaseContracts": [
          9561
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9551,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9546,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "91:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9549,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "127:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9548,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:39"
            },
            "scope": 9561,
            "src": "62:74:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9560,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9553,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 9560,
                  "src": "169:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9552,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:39",
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
                  "id": 9555,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9560,
                  "src": "187:21:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9558,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9560,
                  "src": "228:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9557,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:39"
            },
            "scope": 9561,
            "src": "140:97:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9562,
        "src": "26:214:39"
      }
    ],
    "src": "0:241:39"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        9561
      ]
    },
    "id": 9562,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9544,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9561,
        "linearizedBaseContracts": [
          9561
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9551,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9546,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "91:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9545,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9549,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "127:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9548,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:39"
            },
            "scope": 9561,
            "src": "62:74:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9560,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9553,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 9560,
                  "src": "169:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9552,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:39",
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
                  "id": 9555,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9560,
                  "src": "187:21:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9558,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9560,
                  "src": "228:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9557,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:39"
            },
            "scope": 9561,
            "src": "140:97:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9562,
        "src": "26:214:39"
      }
    ],
    "src": "0:241:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-13T22:36:34.210Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}