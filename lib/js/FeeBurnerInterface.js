"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var FeeBurnerInterface = exports.FeeBurnerInterface = 
{
  "contractName": "FeeBurnerInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "tradeWeiAmount",
          "type": "uint256"
        },
        {
          "name": "reserve",
          "type": "address"
        },
        {
          "name": "wallet",
          "type": "address"
        }
      ],
      "name": "handleFees",
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
          "name": "reserve",
          "type": "address"
        },
        {
          "name": "feesInBps",
          "type": "uint256"
        },
        {
          "name": "kncWallet",
          "type": "address"
        }
      ],
      "name": "setReserveData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface FeeBurnerInterface {\n    function handleFees (uint tradeWeiAmount, address reserve, address wallet) external returns(bool);\n    function setReserveData(address reserve, uint feesInBps, address kncWallet) external;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/FeeBurnerInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/FeeBurnerInterface.sol",
    "exportedSymbols": {
      "FeeBurnerInterface": [
        12338
      ]
    },
    "id": 12339,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 12317,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:46"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 12338,
        "linearizedBaseContracts": [
          12338
        ],
        "name": "FeeBurnerInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 12328,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "handleFees",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12319,
                  "name": "tradeWeiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "82:19:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12318,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:4:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12321,
                  "name": "reserve",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "103:15:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12320,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:46",
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
                  "id": 12323,
                  "name": "wallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "120:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "120:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 12327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12326,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "153:4:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12325,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:46"
            },
            "scope": 12338,
            "src": "61:98:46",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 12337,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setReserveData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12330,
                  "name": "reserve",
                  "nodeType": "VariableDeclaration",
                  "scope": 12337,
                  "src": "188:15:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:46",
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
                  "id": 12332,
                  "name": "feesInBps",
                  "nodeType": "VariableDeclaration",
                  "scope": 12337,
                  "src": "205:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12331,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12334,
                  "name": "kncWallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 12337,
                  "src": "221:17:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "187:52:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 12336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "248:0:46"
            },
            "scope": 12338,
            "src": "164:85:46",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 12339,
        "src": "26:225:46"
      }
    ],
    "src": "0:252:46"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/FeeBurnerInterface.sol",
    "exportedSymbols": {
      "FeeBurnerInterface": [
        12338
      ]
    },
    "id": 12339,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 12317,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:46"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 12338,
        "linearizedBaseContracts": [
          12338
        ],
        "name": "FeeBurnerInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 12328,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "handleFees",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12319,
                  "name": "tradeWeiAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "82:19:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12318,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:4:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12321,
                  "name": "reserve",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "103:15:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12320,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:46",
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
                  "id": 12323,
                  "name": "wallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "120:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "120:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "81:54:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 12327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12326,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12328,
                  "src": "153:4:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12325,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:4:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:6:46"
            },
            "scope": 12338,
            "src": "61:98:46",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 12337,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setReserveData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12330,
                  "name": "reserve",
                  "nodeType": "VariableDeclaration",
                  "scope": 12337,
                  "src": "188:15:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:46",
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
                  "id": 12332,
                  "name": "feesInBps",
                  "nodeType": "VariableDeclaration",
                  "scope": 12337,
                  "src": "205:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12331,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12334,
                  "name": "kncWallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 12337,
                  "src": "221:17:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "187:52:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 12336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "248:0:46"
            },
            "scope": 12338,
            "src": "164:85:46",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 12339,
        "src": "26:225:46"
      }
    ],
    "src": "0:252:46"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.600Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}