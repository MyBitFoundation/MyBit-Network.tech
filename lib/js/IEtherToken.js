"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IEtherToken = exports.IEtherToken = 
{
  "contractName": "IEtherToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
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
      "stateMutability": "pure",
      "type": "function"
    },
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
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
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
      "name": "withdraw",
      "outputs": [],
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
      "name": "withdrawTo",
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
  "source": "pragma solidity ^0.4.24;\nimport './IERC20Token.sol';\nimport '../../utility/interfaces/ITokenHolder.sol';\n\n/*\n    Ether Token interface\n*/\ncontract IEtherToken is ITokenHolder, IERC20Token {\n    function deposit() public payable;\n    function withdraw(uint256 _amount) public;\n    function withdrawTo(address _to, uint256 _amount) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
    "exportedSymbols": {
      "IEtherToken": [
        8925
      ]
    },
    "id": 8926,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8903,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./IERC20Token.sol",
        "id": 8904,
        "nodeType": "ImportDirective",
        "scope": 8926,
        "sourceUnit": 8902,
        "src": "25:27:30",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
        "file": "../../utility/interfaces/ITokenHolder.sol",
        "id": 8905,
        "nodeType": "ImportDirective",
        "scope": 8926,
        "sourceUnit": 9904,
        "src": "53:51:30",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8906,
              "name": "ITokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9903,
              "src": "162:12:30",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITokenHolder_$9903",
                "typeString": "contract ITokenHolder"
              }
            },
            "id": 8907,
            "nodeType": "InheritanceSpecifier",
            "src": "162:12:30"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8908,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8901,
              "src": "176:11:30",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                "typeString": "contract IERC20Token"
              }
            },
            "id": 8909,
            "nodeType": "InheritanceSpecifier",
            "src": "176:11:30"
          }
        ],
        "contractDependencies": [
          8901,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8925,
        "linearizedBaseContracts": [
          8925,
          8901,
          9903,
          9887
        ],
        "name": "IEtherToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8912,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8910,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "210:2:30"
            },
            "payable": true,
            "returnParameters": {
              "id": 8911,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "227:0:30"
            },
            "scope": 8925,
            "src": "194:34:30",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8917,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8914,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8917,
                  "src": "251:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:17:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:30"
            },
            "scope": 8925,
            "src": "233:42:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8924,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8919,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8924,
                  "src": "300:11:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:30",
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
                  "id": 8921,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8924,
                  "src": "313:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "299:30:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8923,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "336:0:30"
            },
            "scope": 8925,
            "src": "280:57:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8926,
        "src": "138:201:30"
      }
    ],
    "src": "0:340:30"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
    "exportedSymbols": {
      "IEtherToken": [
        8925
      ]
    },
    "id": 8926,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8903,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:30"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./IERC20Token.sol",
        "id": 8904,
        "nodeType": "ImportDirective",
        "scope": 8926,
        "sourceUnit": 8902,
        "src": "25:27:30",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
        "file": "../../utility/interfaces/ITokenHolder.sol",
        "id": 8905,
        "nodeType": "ImportDirective",
        "scope": 8926,
        "sourceUnit": 9904,
        "src": "53:51:30",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8906,
              "name": "ITokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9903,
              "src": "162:12:30",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITokenHolder_$9903",
                "typeString": "contract ITokenHolder"
              }
            },
            "id": 8907,
            "nodeType": "InheritanceSpecifier",
            "src": "162:12:30"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8908,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8901,
              "src": "176:11:30",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                "typeString": "contract IERC20Token"
              }
            },
            "id": 8909,
            "nodeType": "InheritanceSpecifier",
            "src": "176:11:30"
          }
        ],
        "contractDependencies": [
          8901,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8925,
        "linearizedBaseContracts": [
          8925,
          8901,
          9903,
          9887
        ],
        "name": "IEtherToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8912,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8910,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "210:2:30"
            },
            "payable": true,
            "returnParameters": {
              "id": 8911,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "227:0:30"
            },
            "scope": 8925,
            "src": "194:34:30",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8917,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8914,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8917,
                  "src": "251:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8913,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:17:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:30"
            },
            "scope": 8925,
            "src": "233:42:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8924,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8919,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8924,
                  "src": "300:11:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:30",
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
                  "id": 8921,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8924,
                  "src": "313:15:30",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:30",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "299:30:30"
            },
            "payable": false,
            "returnParameters": {
              "id": 8923,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "336:0:30"
            },
            "scope": 8925,
            "src": "280:57:30",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8926,
        "src": "138:201:30"
      }
    ],
    "src": "0:340:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.943Z"
}