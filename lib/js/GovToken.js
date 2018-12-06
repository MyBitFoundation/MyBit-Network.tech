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
  "source": "pragma solidity ^0.4.24;\n\n\ninterface GovToken {\n\n  function totalSupply() external returns (uint);\n\n  function balanceOf(address _user) external returns (uint);\n\n  function unlockTokens() external returns (bool);\n\n  function lockTokens() external returns (bool);\n\n  function transfer(address _to, uint _amount) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint _amount) external returns (bool);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        17169
      ]
    },
    "id": 17170,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17126,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:65"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17169,
        "linearizedBaseContracts": [
          17169
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17131,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "71:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17129,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17131,
                  "src": "92:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17128,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "91:6:65"
            },
            "scope": 17169,
            "src": "51:47:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17138,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17133,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17138,
                  "src": "121:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:15:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17136,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17138,
                  "src": "154:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17135,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:6:65"
            },
            "scope": 17169,
            "src": "102:58:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17143,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "185:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17141,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17143,
                  "src": "206:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17140,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:6:65"
            },
            "scope": 17169,
            "src": "164:48:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17148,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17146,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17148,
                  "src": "256:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17145,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:6:65"
            },
            "scope": 17169,
            "src": "216:46:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17157,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17150,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17157,
                  "src": "284:11:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17149,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:65",
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
                  "id": 17152,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17157,
                  "src": "297:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17151,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17155,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17157,
                  "src": "329:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17154,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:65"
            },
            "scope": 17169,
            "src": "266:69:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17168,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17159,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "361:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17158,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:65",
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
                  "id": 17161,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "376:11:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17160,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:65",
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
                  "id": 17163,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "389:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17162,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17166,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "421:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17165,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:65"
            },
            "scope": 17169,
            "src": "339:88:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17170,
        "src": "27:403:65"
      }
    ],
    "src": "0:431:65"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        17169
      ]
    },
    "id": 17170,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17126,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:65"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17169,
        "linearizedBaseContracts": [
          17169
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17131,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "71:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17129,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17131,
                  "src": "92:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17128,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "91:6:65"
            },
            "scope": 17169,
            "src": "51:47:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17138,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17133,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17138,
                  "src": "121:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:15:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17136,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17138,
                  "src": "154:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17135,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:6:65"
            },
            "scope": 17169,
            "src": "102:58:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17143,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "185:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17141,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17143,
                  "src": "206:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17140,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:6:65"
            },
            "scope": 17169,
            "src": "164:48:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17148,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17146,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17148,
                  "src": "256:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17145,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:6:65"
            },
            "scope": 17169,
            "src": "216:46:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17157,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17150,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17157,
                  "src": "284:11:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17149,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:65",
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
                  "id": 17152,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17157,
                  "src": "297:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17151,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17155,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17157,
                  "src": "329:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17154,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:65"
            },
            "scope": 17169,
            "src": "266:69:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17168,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17159,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "361:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17158,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:65",
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
                  "id": 17161,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "376:11:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17160,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:65",
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
                  "id": 17163,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "389:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17162,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17166,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17168,
                  "src": "421:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17165,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:65"
            },
            "scope": 17169,
            "src": "339:88:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17170,
        "src": "27:403:65"
      }
    ],
    "src": "0:431:65"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.730Z"
}