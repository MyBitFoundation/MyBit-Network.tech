"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ConversionRatesInterface = exports.ConversionRatesInterface = 
{
  "contractName": "ConversionRatesInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "buyAmount",
          "type": "int256"
        },
        {
          "name": "rateUpdateBlock",
          "type": "uint256"
        },
        {
          "name": "currentBlock",
          "type": "uint256"
        }
      ],
      "name": "recordImbalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "currentBlockNumber",
          "type": "uint256"
        },
        {
          "name": "buy",
          "type": "bool"
        },
        {
          "name": "qty",
          "type": "uint256"
        }
      ],
      "name": "getRate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n\ninterface ConversionRatesInterface {\n\n    function recordImbalance(\n        ERC20 token,\n        int buyAmount,\n        uint rateUpdateBlock,\n        uint currentBlock\n    )\n        external;\n\n    function getRate(ERC20 token, uint currentBlockNumber, bool buy, uint qty) external view returns(uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ConversionRatesInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ConversionRatesInterface.sol",
    "exportedSymbols": {
      "ConversionRatesInterface": [
        11168
      ]
    },
    "id": 11169,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11142,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 11143,
        "nodeType": "ImportDirective",
        "scope": 11169,
        "sourceUnit": 9534,
        "src": "26:33:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 11168,
        "linearizedBaseContracts": [
          11168
        ],
        "name": "ConversionRatesInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11154,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "recordImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11145,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "138:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11144,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "138:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11147,
                  "name": "buyAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "159:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 11146,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "159:3:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11149,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "182:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11148,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:4:42",
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
                  "id": 11151,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "212:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11150,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "128:107:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 11153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "252:0:42"
            },
            "scope": 11168,
            "src": "104:149:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11167,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11156,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "276:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11155,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "276:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11158,
                  "name": "currentBlockNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "289:23:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11157,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:4:42",
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
                  "id": 11160,
                  "name": "buy",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "314:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11159,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11162,
                  "name": "qty",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "324:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11161,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "275:58:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 11166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11165,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "356:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11164,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "355:6:42"
            },
            "scope": 11168,
            "src": "259:103:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11169,
        "src": "62:302:42"
      }
    ],
    "src": "0:365:42"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ConversionRatesInterface.sol",
    "exportedSymbols": {
      "ConversionRatesInterface": [
        11168
      ]
    },
    "id": 11169,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11142,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 11143,
        "nodeType": "ImportDirective",
        "scope": 11169,
        "sourceUnit": 9534,
        "src": "26:33:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 11168,
        "linearizedBaseContracts": [
          11168
        ],
        "name": "ConversionRatesInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11154,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "recordImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11145,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "138:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11144,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "138:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11147,
                  "name": "buyAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "159:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 11146,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "159:3:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11149,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "182:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11148,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:4:42",
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
                  "id": 11151,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 11154,
                  "src": "212:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11150,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "128:107:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 11153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "252:0:42"
            },
            "scope": 11168,
            "src": "104:149:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11167,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11156,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "276:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11155,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "276:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11158,
                  "name": "currentBlockNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "289:23:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11157,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:4:42",
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
                  "id": 11160,
                  "name": "buy",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "314:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11159,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11162,
                  "name": "qty",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "324:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11161,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "275:58:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 11166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11165,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11167,
                  "src": "356:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11164,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "355:6:42"
            },
            "scope": 11168,
            "src": "259:103:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11169,
        "src": "62:302:42"
      }
    ],
    "src": "0:365:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.595Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}