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
        6794
      ]
    },
    "id": 6795,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6751,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:26"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6794,
        "linearizedBaseContracts": [
          6794
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6756,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "70:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6754,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6756,
                  "src": "91:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6753,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:6:26"
            },
            "scope": 6794,
            "src": "50:47:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6763,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6758,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6763,
                  "src": "120:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "120:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "119:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6761,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6763,
                  "src": "153:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6760,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:26"
            },
            "scope": 6794,
            "src": "101:58:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6768,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "184:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6766,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6768,
                  "src": "205:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6765,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:6:26"
            },
            "scope": 6794,
            "src": "163:48:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6773,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6769,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "234:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6771,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6773,
                  "src": "255:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6770,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "254:6:26"
            },
            "scope": 6794,
            "src": "215:46:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6782,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6775,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6782,
                  "src": "284:11:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6774,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:26",
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
                  "id": 6777,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6782,
                  "src": "297:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6776,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6780,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6782,
                  "src": "329:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6779,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:26"
            },
            "scope": 6794,
            "src": "266:69:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6793,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6784,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "361:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6783,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:26",
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
                  "id": 6786,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "376:11:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6785,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:26",
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
                  "id": 6788,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "389:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6787,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6791,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "421:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6790,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:26"
            },
            "scope": 6794,
            "src": "339:88:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6795,
        "src": "26:404:26"
      }
    ],
    "src": "0:431:26"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        6794
      ]
    },
    "id": 6795,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6751,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:26"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6794,
        "linearizedBaseContracts": [
          6794
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6756,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "70:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6754,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6756,
                  "src": "91:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6753,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:6:26"
            },
            "scope": 6794,
            "src": "50:47:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6763,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6758,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6763,
                  "src": "120:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "120:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "119:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6761,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6763,
                  "src": "153:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6760,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:26"
            },
            "scope": 6794,
            "src": "101:58:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6768,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "184:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6766,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6768,
                  "src": "205:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6765,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "204:6:26"
            },
            "scope": 6794,
            "src": "163:48:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6773,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6769,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "234:2:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6771,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6773,
                  "src": "255:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6770,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "254:6:26"
            },
            "scope": 6794,
            "src": "215:46:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6782,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6775,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6782,
                  "src": "284:11:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6774,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:26",
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
                  "id": 6777,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6782,
                  "src": "297:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6776,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6780,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6782,
                  "src": "329:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6779,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:26"
            },
            "scope": 6794,
            "src": "266:69:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6793,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6784,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "361:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6783,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:26",
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
                  "id": 6786,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "376:11:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6785,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:26",
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
                  "id": 6788,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "389:12:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6787,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 6792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6791,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6793,
                  "src": "421:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6790,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:26"
            },
            "scope": 6794,
            "src": "339:88:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6795,
        "src": "26:404:26"
      }
    ],
    "src": "0:431:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.834Z"
}