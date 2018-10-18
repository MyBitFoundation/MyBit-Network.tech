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
        6821
      ]
    },
    "id": 6822,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6804,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6821,
        "linearizedBaseContracts": [
          6821
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6811,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6806,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 6811,
                  "src": "91:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6805,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 6810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6809,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6811,
                  "src": "127:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6808,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:28"
            },
            "scope": 6821,
            "src": "62:74:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6820,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6813,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 6820,
                  "src": "169:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6812,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:28",
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
                  "id": 6815,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 6820,
                  "src": "187:21:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 6819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6818,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6820,
                  "src": "228:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:28"
            },
            "scope": 6821,
            "src": "140:97:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6822,
        "src": "26:214:28"
      }
    ],
    "src": "0:241:28"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        6821
      ]
    },
    "id": 6822,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6804,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6821,
        "linearizedBaseContracts": [
          6821
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6811,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6806,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 6811,
                  "src": "91:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6805,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 6810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6809,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6811,
                  "src": "127:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6808,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:28"
            },
            "scope": 6821,
            "src": "62:74:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6820,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6813,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 6820,
                  "src": "169:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6812,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:28",
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
                  "id": 6815,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 6820,
                  "src": "187:21:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 6819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6818,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6820,
                  "src": "228:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6817,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:28"
            },
            "scope": 6821,
            "src": "140:97:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6822,
        "src": "26:214:28"
      }
    ],
    "src": "0:241:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.834Z"
}