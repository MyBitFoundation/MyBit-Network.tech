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
        9903
      ]
    },
    "id": 9904,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9889,
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
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "./IOwned.sol",
        "id": 9890,
        "nodeType": "ImportDirective",
        "scope": 9904,
        "sourceUnit": 9888,
        "src": "25:22:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 9891,
        "nodeType": "ImportDirective",
        "scope": 9904,
        "sourceUnit": 8902,
        "src": "48:48:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9892,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9887,
              "src": "156:6:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$9887",
                "typeString": "contract IOwned"
              }
            },
            "id": 9893,
            "nodeType": "InheritanceSpecifier",
            "src": "156:6:42"
          }
        ],
        "contractDependencies": [
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9903,
        "linearizedBaseContracts": [
          9903,
          9887
        ],
        "name": "ITokenHolder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9902,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9895,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9902,
                  "src": "193:18:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 9894,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "193:11:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9897,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9902,
                  "src": "213:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9896,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:7:42",
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
                  "id": 9899,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9902,
                  "src": "226:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:50:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 9901,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "249:0:42"
            },
            "scope": 9903,
            "src": "169:81:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9904,
        "src": "131:121:42"
      }
    ],
    "src": "0:253:42"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
    "exportedSymbols": {
      "ITokenHolder": [
        9903
      ]
    },
    "id": 9904,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9889,
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
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "./IOwned.sol",
        "id": 9890,
        "nodeType": "ImportDirective",
        "scope": 9904,
        "sourceUnit": 9888,
        "src": "25:22:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 9891,
        "nodeType": "ImportDirective",
        "scope": 9904,
        "sourceUnit": 8902,
        "src": "48:48:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9892,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9887,
              "src": "156:6:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$9887",
                "typeString": "contract IOwned"
              }
            },
            "id": 9893,
            "nodeType": "InheritanceSpecifier",
            "src": "156:6:42"
          }
        ],
        "contractDependencies": [
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9903,
        "linearizedBaseContracts": [
          9903,
          9887
        ],
        "name": "ITokenHolder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9902,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9895,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 9902,
                  "src": "193:18:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 9894,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "193:11:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9897,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9902,
                  "src": "213:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9896,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:7:42",
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
                  "id": 9899,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9902,
                  "src": "226:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9898,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "192:50:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 9901,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "249:0:42"
            },
            "scope": 9903,
            "src": "169:81:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9904,
        "src": "131:121:42"
      }
    ],
    "src": "0:253:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:52.928Z"
}