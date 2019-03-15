"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SanityRatesInterface = exports.SanityRatesInterface = 
{
  "contractName": "SanityRatesInterface",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "dest",
          "type": "address"
        }
      ],
      "name": "getSanityRate",
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\ninterface SanityRatesInterface {\n    function getSanityRate(ERC20 src, ERC20 dest) external view returns(uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SanityRatesInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SanityRatesInterface.sol",
    "exportedSymbols": {
      "SanityRatesInterface": [
        20260
      ]
    },
    "id": 20261,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20249,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:63"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20250,
        "nodeType": "ImportDirective",
        "scope": 20261,
        "sourceUnit": 9534,
        "src": "26:33:63",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 20260,
        "linearizedBaseContracts": [
          20260
        ],
        "name": "SanityRatesInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 20259,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSanityRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20252,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 20259,
                  "src": "121:9:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20251,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "121:5:63",
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
                  "id": 20254,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 20259,
                  "src": "132:10:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20253,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "132:5:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:23:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 20258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20257,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20259,
                  "src": "166:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20256,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "166:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "165:6:63"
            },
            "scope": 20260,
            "src": "98:74:63",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 20261,
        "src": "61:113:63"
      }
    ],
    "src": "0:175:63"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SanityRatesInterface.sol",
    "exportedSymbols": {
      "SanityRatesInterface": [
        20260
      ]
    },
    "id": 20261,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20249,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:63"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20250,
        "nodeType": "ImportDirective",
        "scope": 20261,
        "sourceUnit": 9534,
        "src": "26:33:63",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 20260,
        "linearizedBaseContracts": [
          20260
        ],
        "name": "SanityRatesInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 20259,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSanityRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20252,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 20259,
                  "src": "121:9:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20251,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "121:5:63",
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
                  "id": 20254,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 20259,
                  "src": "132:10:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20253,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "132:5:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:23:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 20258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20257,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20259,
                  "src": "166:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20256,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "166:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "165:6:63"
            },
            "scope": 20260,
            "src": "98:74:63",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 20261,
        "src": "61:113:63"
      }
    ],
    "src": "0:175:63"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.710Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}