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
        9630
      ]
    },
    "id": 9631,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9587,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9630,
        "linearizedBaseContracts": [
          9630
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9592,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9588,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "71:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9590,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9592,
                  "src": "92:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9589,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "91:6:37"
            },
            "scope": 9630,
            "src": "51:47:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9599,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9594,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9599,
                  "src": "121:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:15:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9597,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9599,
                  "src": "154:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9596,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:6:37"
            },
            "scope": 9630,
            "src": "102:58:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9604,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9600,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "185:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9602,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9604,
                  "src": "206:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9601,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:6:37"
            },
            "scope": 9630,
            "src": "164:48:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9609,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9607,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9609,
                  "src": "256:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9606,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:6:37"
            },
            "scope": 9630,
            "src": "216:46:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9618,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9611,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9618,
                  "src": "284:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9610,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:37",
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
                  "id": 9613,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9618,
                  "src": "297:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9612,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9616,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9618,
                  "src": "329:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9615,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:37"
            },
            "scope": 9630,
            "src": "266:69:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9629,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9620,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "361:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9619,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:37",
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
                  "id": 9622,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "376:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9621,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:37",
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
                  "id": 9624,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "389:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9623,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9627,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "421:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9626,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:37"
            },
            "scope": 9630,
            "src": "339:88:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9631,
        "src": "27:403:37"
      }
    ],
    "src": "0:431:37"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        9630
      ]
    },
    "id": 9631,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9587,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9630,
        "linearizedBaseContracts": [
          9630
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9592,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9588,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "71:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9590,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9592,
                  "src": "92:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9589,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "91:6:37"
            },
            "scope": 9630,
            "src": "51:47:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9599,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9594,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9599,
                  "src": "121:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:15:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9597,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9599,
                  "src": "154:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9596,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:6:37"
            },
            "scope": 9630,
            "src": "102:58:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9604,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9600,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "185:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9603,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9602,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9604,
                  "src": "206:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9601,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:6:37"
            },
            "scope": 9630,
            "src": "164:48:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9609,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9607,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9609,
                  "src": "256:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9606,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:6:37"
            },
            "scope": 9630,
            "src": "216:46:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9618,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9611,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9618,
                  "src": "284:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9610,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:37",
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
                  "id": 9613,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9618,
                  "src": "297:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9612,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9616,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9618,
                  "src": "329:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9615,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:37"
            },
            "scope": 9630,
            "src": "266:69:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9629,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9620,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "361:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9619,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:37",
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
                  "id": 9622,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "376:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9621,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:37",
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
                  "id": 9624,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "389:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9623,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 9628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9627,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9629,
                  "src": "421:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9626,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:37"
            },
            "scope": 9630,
            "src": "339:88:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9631,
        "src": "27:403:37"
      }
    ],
    "src": "0:431:37"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.583Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}