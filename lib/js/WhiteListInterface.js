"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var WhiteListInterface = exports.WhiteListInterface = 
{
  "contractName": "WhiteListInterface",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserCapInWei",
      "outputs": [
        {
          "name": "userCapWei",
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
  "source": "pragma solidity ^0.4.24;\n\ncontract WhiteListInterface {\n    function getUserCapInWei(address user) external view returns (uint userCapWei);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/WhiteListInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/WhiteListInterface.sol",
    "exportedSymbols": {
      "WhiteListInterface": [
        21710
      ]
    },
    "id": 21711,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21702,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:69"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 21710,
        "linearizedBaseContracts": [
          21710
        ],
        "name": "WhiteListInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 21709,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserCapInWei",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21704,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21709,
                  "src": "85:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21703,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "85:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "84:14:69"
            },
            "payable": false,
            "returnParameters": {
              "id": 21708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21707,
                  "name": "userCapWei",
                  "nodeType": "VariableDeclaration",
                  "scope": 21709,
                  "src": "122:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21706,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "122:4:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "121:17:69"
            },
            "scope": 21710,
            "src": "60:79:69",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21711,
        "src": "26:115:69"
      }
    ],
    "src": "0:142:69"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/WhiteListInterface.sol",
    "exportedSymbols": {
      "WhiteListInterface": [
        21710
      ]
    },
    "id": 21711,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21702,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:69"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 21710,
        "linearizedBaseContracts": [
          21710
        ],
        "name": "WhiteListInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 21709,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserCapInWei",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21704,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21709,
                  "src": "85:12:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21703,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "85:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "84:14:69"
            },
            "payable": false,
            "returnParameters": {
              "id": 21708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21707,
                  "name": "userCapWei",
                  "nodeType": "VariableDeclaration",
                  "scope": 21709,
                  "src": "122:15:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21706,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "122:4:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "121:17:69"
            },
            "scope": 21710,
            "src": "60:79:69",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21711,
        "src": "26:115:69"
      }
    ],
    "src": "0:142:69"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.721Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}