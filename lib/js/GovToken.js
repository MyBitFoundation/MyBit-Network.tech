"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var GovToken = exports.GovToken = 
{
  "contractName": "GovToken",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unlockTokens",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "lockTokens",
      "outputs": [
        {
          "name": "",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
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
  "source": "pragma solidity 0.4.24;\n\n\ninterface GovToken {\n\n  function totalSupply() external returns (uint);\n\n  function balanceOf(address _user) external returns (uint);\n\n  function unlockTokens() external returns (bool);\n\n  function lockTokens() external returns (bool); \n\n  function transfer(address _to, uint _amount) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint _amount) external returns (bool);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        6210
      ]
    },
    "id": 6211,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6167,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6210,
        "linearizedBaseContracts": [
          6210
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6172,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "70:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6170,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6172,
                  "src": "91:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6169,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:6:23"
            },
            "scope": 6210,
            "src": "50:47:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6179,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6174,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6179,
                  "src": "120:13:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "120:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "119:15:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6177,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6179,
                  "src": "153:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6176,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:23"
            },
            "scope": 6210,
            "src": "101:58:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6184,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "184:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6182,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6184,
                  "src": "205:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6181,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:6:23"
            },
            "scope": 6210,
            "src": "163:48:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6189,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "234:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6187,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6189,
                  "src": "255:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6186,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "254:6:23"
            },
            "scope": 6210,
            "src": "215:46:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6198,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6191,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6198,
                  "src": "284:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6190,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:23",
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
                  "id": 6193,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6198,
                  "src": "297:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6192,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6196,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6198,
                  "src": "329:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6195,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:23"
            },
            "scope": 6210,
            "src": "266:69:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6209,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6200,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "361:13:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:23",
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
                  "id": 6202,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "376:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6201,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:23",
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
                  "id": 6204,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "389:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6203,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6207,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "421:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6206,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:23"
            },
            "scope": 6210,
            "src": "339:88:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6211,
        "src": "26:404:23"
      }
    ],
    "src": "0:431:23"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        6210
      ]
    },
    "id": 6211,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6167,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6210,
        "linearizedBaseContracts": [
          6210
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6172,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "70:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6170,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6172,
                  "src": "91:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6169,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:6:23"
            },
            "scope": 6210,
            "src": "50:47:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6179,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6174,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6179,
                  "src": "120:13:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "120:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "119:15:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6177,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6179,
                  "src": "153:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6176,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:23"
            },
            "scope": 6210,
            "src": "101:58:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6184,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "184:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6182,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6184,
                  "src": "205:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6181,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:6:23"
            },
            "scope": 6210,
            "src": "163:48:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6189,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "234:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6187,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6189,
                  "src": "255:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6186,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "254:6:23"
            },
            "scope": 6210,
            "src": "215:46:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6198,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6191,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6198,
                  "src": "284:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6190,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:23",
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
                  "id": 6193,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6198,
                  "src": "297:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6192,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6197,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6196,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6198,
                  "src": "329:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6195,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:23"
            },
            "scope": 6210,
            "src": "266:69:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6209,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6200,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "361:13:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:23",
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
                  "id": 6202,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "376:11:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6201,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:23",
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
                  "id": 6204,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "389:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6203,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 6208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6207,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6209,
                  "src": "421:4:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6206,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:23"
            },
            "scope": 6210,
            "src": "339:88:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6211,
        "src": "26:404:23"
      }
    ],
    "src": "0:431:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.452Z"
}