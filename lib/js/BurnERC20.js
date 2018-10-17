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
        6269
      ]
    },
    "id": 6270,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6246,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6269,
        "linearizedBaseContracts": [
          6269
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6255,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6248,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6255,
                  "src": "72:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:19",
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
                  "id": 6250,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6255,
                  "src": "94:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6249,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6253,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6255,
                  "src": "126:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6252,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:19"
            },
            "scope": 6269,
            "src": "54:86:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6262,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6257,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6262,
                  "src": "160:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6256,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6260,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6262,
                  "src": "192:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6259,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:19"
            },
            "scope": 6269,
            "src": "146:60:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6268,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6264,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6268,
                  "src": "226:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6263,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:19",
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
                  "id": 6266,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6268,
                  "src": "252:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6265,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:19"
            },
            "src": "212:56:19"
          }
        ],
        "scope": 6270,
        "src": "27:244:19"
      }
    ],
    "src": "0:272:19"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
    "exportedSymbols": {
      "BurnERC20": [
        6269
      ]
    },
    "id": 6270,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6246,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6269,
        "linearizedBaseContracts": [
          6269
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6255,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6248,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6255,
                  "src": "72:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:19",
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
                  "id": 6250,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6255,
                  "src": "94:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6249,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6253,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6255,
                  "src": "126:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6252,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:19"
            },
            "scope": 6269,
            "src": "54:86:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6262,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6257,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6262,
                  "src": "160:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6256,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6260,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6262,
                  "src": "192:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6259,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:19"
            },
            "scope": 6269,
            "src": "146:60:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6268,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6264,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6268,
                  "src": "226:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6263,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:19",
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
                  "id": 6266,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6268,
                  "src": "252:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6265,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:19"
            },
            "src": "212:56:19"
          }
        ],
        "scope": 6270,
        "src": "27:244:19"
      }
    ],
    "src": "0:272:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.814Z"
}