"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ITokenHolder = exports.ITokenHolder = 
{
  "contractName": "ITokenHolder",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
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
      "name": "withdrawTokens",
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
  "source": "pragma solidity ^0.4.24;\nimport './IOwned.sol';\nimport '../../token/interfaces/IERC20Token.sol';\n\n/*\n    Token Holder interface\n*/\ncontract ITokenHolder is IOwned {\n    function withdrawTokens(IERC20Token _token, address _to, uint256 _amount) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
    "exportedSymbols": {
      "ITokenHolder": [
        1183
      ]
    },
    "id": 1184,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1169,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:11"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "./IOwned.sol",
        "id": 1170,
        "nodeType": "ImportDirective",
        "scope": 1184,
        "sourceUnit": 1168,
        "src": "25:22:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 1171,
        "nodeType": "ImportDirective",
        "scope": 1184,
        "sourceUnit": 1099,
        "src": "48:48:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1172,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1167,
              "src": "156:6:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$1167",
                "typeString": "contract IOwned"
              }
            },
            "id": 1173,
            "nodeType": "InheritanceSpecifier",
            "src": "156:6:11"
          }
        ],
        "contractDependencies": [
          1167
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1183,
        "linearizedBaseContracts": [
          1183,
          1167
        ],
        "name": "ITokenHolder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1182,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1175,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1182,
                  "src": "193:18:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$1098",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1174,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1098,
                    "src": "193:11:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$1098",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1177,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1182,
                  "src": "213:11:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:7:11",
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
                  "id": 1179,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1182,
                  "src": "226:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1178,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:50:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "249:0:11"
            },
            "scope": 1183,
            "src": "169:81:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1184,
        "src": "131:121:11"
      }
    ],
    "src": "0:253:11"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
    "exportedSymbols": {
      "ITokenHolder": [
        1183
      ]
    },
    "id": 1184,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1169,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:11"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "./IOwned.sol",
        "id": 1170,
        "nodeType": "ImportDirective",
        "scope": 1184,
        "sourceUnit": 1168,
        "src": "25:22:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 1171,
        "nodeType": "ImportDirective",
        "scope": 1184,
        "sourceUnit": 1099,
        "src": "48:48:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1172,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1167,
              "src": "156:6:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$1167",
                "typeString": "contract IOwned"
              }
            },
            "id": 1173,
            "nodeType": "InheritanceSpecifier",
            "src": "156:6:11"
          }
        ],
        "contractDependencies": [
          1167
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1183,
        "linearizedBaseContracts": [
          1183,
          1167
        ],
        "name": "ITokenHolder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1182,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1175,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1182,
                  "src": "193:18:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$1098",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 1174,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1098,
                    "src": "193:11:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$1098",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1177,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1182,
                  "src": "213:11:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1176,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:7:11",
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
                  "id": 1179,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1182,
                  "src": "226:15:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1178,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:50:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 1181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "249:0:11"
            },
            "scope": 1183,
            "src": "169:81:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1184,
        "src": "131:121:11"
      }
    ],
    "src": "0:253:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.971Z"
}