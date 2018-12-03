"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IWhitelist = exports.IWhitelist = 
{
  "contractName": "IWhitelist",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isWhitelisted",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Whitelist interface\n*/\ncontract IWhitelist {\n    function isWhitelisted(address _address) public view returns (bool);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
    "exportedSymbols": {
      "IWhitelist": [
        9913
      ]
    },
    "id": 9914,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9905,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9913,
        "linearizedBaseContracts": [
          9913
        ],
        "name": "IWhitelist",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9912,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isWhitelisted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9907,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9912,
                  "src": "105:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9906,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "105:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "104:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 9911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9912,
                  "src": "144:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9909,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:6:43"
            },
            "scope": 9913,
            "src": "82:68:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9914,
        "src": "56:96:43"
      }
    ],
    "src": "0:153:43"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
    "exportedSymbols": {
      "IWhitelist": [
        9913
      ]
    },
    "id": 9914,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9905,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9913,
        "linearizedBaseContracts": [
          9913
        ],
        "name": "IWhitelist",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9912,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isWhitelisted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9907,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9912,
                  "src": "105:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9906,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "105:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "104:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 9911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9912,
                  "src": "144:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9909,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:6:43"
            },
            "scope": 9913,
            "src": "82:68:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9914,
        "src": "56:96:43"
      }
    ],
    "src": "0:153:43"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.981Z"
}