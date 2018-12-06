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
        16644
      ]
    },
    "id": 16645,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16621,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:58"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16644,
        "linearizedBaseContracts": [
          16644
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16630,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16623,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16630,
                  "src": "72:20:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:58",
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
                  "id": 16625,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16630,
                  "src": "94:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16624,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:58"
            },
            "payable": false,
            "returnParameters": {
              "id": 16629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16628,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16630,
                  "src": "126:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16627,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:58"
            },
            "scope": 16644,
            "src": "54:86:58",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16637,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16632,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16637,
                  "src": "160:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16631,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:58"
            },
            "payable": false,
            "returnParameters": {
              "id": 16636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16635,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16637,
                  "src": "192:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16634,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:58"
            },
            "scope": 16644,
            "src": "146:60:58",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16643,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16639,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16643,
                  "src": "226:24:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16638,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:58",
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
                  "id": 16641,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16643,
                  "src": "252:14:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16640,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:58"
            },
            "src": "212:56:58"
          }
        ],
        "scope": 16645,
        "src": "27:244:58"
      }
    ],
    "src": "0:272:58"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
    "exportedSymbols": {
      "BurnERC20": [
        16644
      ]
    },
    "id": 16645,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16621,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:58"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16644,
        "linearizedBaseContracts": [
          16644
        ],
        "name": "BurnERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16630,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16623,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 16630,
                  "src": "72:20:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "72:7:58",
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
                  "id": 16625,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16630,
                  "src": "94:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16624,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "94:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "71:36:58"
            },
            "payable": false,
            "returnParameters": {
              "id": 16629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16628,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16630,
                  "src": "126:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16627,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:14:58"
            },
            "scope": 16644,
            "src": "54:86:58",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16637,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16632,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16637,
                  "src": "160:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16631,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:14:58"
            },
            "payable": false,
            "returnParameters": {
              "id": 16636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16635,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 16637,
                  "src": "192:12:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16634,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "191:14:58"
            },
            "scope": 16644,
            "src": "146:60:58",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 16643,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 16642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16639,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 16643,
                  "src": "226:24:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16638,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:58",
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
                  "id": 16641,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 16643,
                  "src": "252:14:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16640,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:42:58"
            },
            "src": "212:56:58"
          }
        ],
        "scope": 16645,
        "src": "27:244:58"
      }
    ],
    "src": "0:272:58"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:53.078Z"
}