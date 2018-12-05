"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorConverterUpgrader = exports.IBancorConverterUpgrader = 
{
  "contractName": "IBancorConverterUpgrader",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_version",
          "type": "bytes32"
        }
      ],
      "name": "upgrade",
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
  "source": "pragma solidity ^0.4.24;\nimport './IBancorConverter.sol';\n\n/*\n    Bancor Converter Upgrader interface\n*/\ncontract IBancorConverterUpgrader {\n    function upgrade(bytes32 _version) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverterUpgrader.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverterUpgrader.sol",
    "exportedSymbols": {
      "IBancorConverterUpgrader": [
        7672
      ]
    },
    "id": 7673,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7665,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverter.sol",
        "file": "./IBancorConverter.sol",
        "id": 7666,
        "nodeType": "ImportDirective",
        "scope": 7673,
        "sourceUnit": 7643,
        "src": "25:32:17",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7672,
        "linearizedBaseContracts": [
          7672
        ],
        "name": "IBancorConverterUpgrader",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7671,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7668,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 7671,
                  "src": "162:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7667,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "162:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "161:18:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 7670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "186:0:17"
            },
            "scope": 7672,
            "src": "145:42:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7673,
        "src": "105:84:17"
      }
    ],
    "src": "0:190:17"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverterUpgrader.sol",
    "exportedSymbols": {
      "IBancorConverterUpgrader": [
        7672
      ]
    },
    "id": 7673,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7665,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverter.sol",
        "file": "./IBancorConverter.sol",
        "id": 7666,
        "nodeType": "ImportDirective",
        "scope": 7673,
        "sourceUnit": 7643,
        "src": "25:32:17",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7672,
        "linearizedBaseContracts": [
          7672
        ],
        "name": "IBancorConverterUpgrader",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7671,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7668,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 7671,
                  "src": "162:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7667,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "162:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "161:18:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 7670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "186:0:17"
            },
            "scope": 7672,
            "src": "145:42:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7673,
        "src": "105:84:17"
      }
    ],
    "src": "0:190:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-05T20:40:37.147Z"
}