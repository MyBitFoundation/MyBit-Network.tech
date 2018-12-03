"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var FeatureIds = exports.FeatureIds = 
{
  "contractName": "FeatureIds",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "CONVERTER_CONVERSION_WHITELIST",
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
  "bytecode": "0x6080604052348015600f57600080fd5b5060988061001e6000396000f300608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166392d1abb781146043575b600080fd5b348015604e57600080fd5b5060556067565b60408051918252519081900360200190f35b6001815600a165627a7a7230582033c2e4e12d964f6e1b09cdff098a202829de1bf0e5ffc74ccd0d160e4ffea4190029",
  "deployedBytecode": "0x608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166392d1abb781146043575b600080fd5b348015604e57600080fd5b5060556067565b60408051918252519081900360200190f35b6001815600a165627a7a7230582033c2e4e12d964f6e1b09cdff098a202829de1bf0e5ffc74ccd0d160e4ffea4190029",
  "sourceMap": "199:118:8:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;199:118:8;;;;;;;",
  "deployedSourceMap": "199:118:8:-;;;;;;;;;;;;;;;;;;;;;;;251:63;;8:9:-1;5:2;;;30:1;27;20:12;5:2;251:63:8;;;;;;;;;;;;;;;;;;;;;308:6;251:63;:::o",
  "source": "pragma solidity ^0.4.24;\n\n/**\n    Id definitions for bancor contract features\n\n    Can be used to query the ContractFeatures contract to check whether a certain feature is supported by a contract\n*/\ncontract FeatureIds {\n    // converter features\n    uint256 public constant CONVERTER_CONVERSION_WHITELIST = 1 << 0;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/FeatureIds.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/FeatureIds.sol",
    "exportedSymbols": {
      "FeatureIds": [
        2274
      ]
    },
    "id": 2275,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2268,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:8"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "Id definitions for bancor contract features\nCan be used to query the ContractFeatures contract to check whether a certain feature is supported by a contract",
        "fullyImplemented": true,
        "id": 2274,
        "linearizedBaseContracts": [
          2274
        ],
        "name": "FeatureIds",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 2273,
            "name": "CONVERTER_CONVERSION_WHITELIST",
            "nodeType": "VariableDeclaration",
            "scope": 2274,
            "src": "251:63:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2269,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "251:7:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "id": 2272,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "31",
                "id": 2270,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "308:1:8",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 2271,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "313:1:8",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "src": "308:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              }
            },
            "visibility": "public"
          }
        ],
        "scope": 2275,
        "src": "199:118:8"
      }
    ],
    "src": "0:318:8"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/FeatureIds.sol",
    "exportedSymbols": {
      "FeatureIds": [
        2274
      ]
    },
    "id": 2275,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2268,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:8"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "Id definitions for bancor contract features\nCan be used to query the ContractFeatures contract to check whether a certain feature is supported by a contract",
        "fullyImplemented": true,
        "id": 2274,
        "linearizedBaseContracts": [
          2274
        ],
        "name": "FeatureIds",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 2273,
            "name": "CONVERTER_CONVERSION_WHITELIST",
            "nodeType": "VariableDeclaration",
            "scope": 2274,
            "src": "251:63:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2269,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "251:7:8",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "id": 2272,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "31",
                "id": 2270,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "308:1:8",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "nodeType": "BinaryOperation",
              "operator": "<<",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 2271,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "313:1:8",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "src": "308:6:8",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              }
            },
            "visibility": "public"
          }
        ],
        "scope": 2275,
        "src": "199:118:8"
      }
    ],
    "src": "0:318:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.872Z"
}