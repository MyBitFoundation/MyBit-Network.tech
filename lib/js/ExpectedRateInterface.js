"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ExpectedRateInterface = exports.ExpectedRateInterface = 
{
  "contractName": "ExpectedRateInterface",
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
        },
        {
          "name": "srcQty",
          "type": "uint256"
        },
        {
          "name": "usePermissionless",
          "type": "bool"
        }
      ],
      "name": "getExpectedRate",
      "outputs": [
        {
          "name": "expectedRate",
          "type": "uint256"
        },
        {
          "name": "slippageRate",
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n\ninterface ExpectedRateInterface {\n    function getExpectedRate(ERC20 src, ERC20 dest, uint srcQty, bool usePermissionless) external view\n        returns (uint expectedRate, uint slippageRate);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ExpectedRateInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ExpectedRateInterface.sol",
    "exportedSymbols": {
      "ExpectedRateInterface": [
        11531
      ]
    },
    "id": 11532,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11514,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:44"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 11515,
        "nodeType": "ImportDirective",
        "scope": 11532,
        "sourceUnit": 9438,
        "src": "26:33:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 11531,
        "linearizedBaseContracts": [
          11531
        ],
        "name": "ExpectedRateInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11530,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11517,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "125:9:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11516,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "125:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9437",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11519,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "136:10:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11518,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "136:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9437",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11521,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "148:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11520,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "148:4:44",
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
                  "id": 11523,
                  "name": "usePermissionless",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "161:22:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11522,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "124:60:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 11529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11526,
                  "name": "expectedRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "216:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11525,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:4:44",
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
                  "id": 11528,
                  "name": "slippageRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "235:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11527,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "215:38:44"
            },
            "scope": 11531,
            "src": "100:154:44",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11532,
        "src": "62:194:44"
      }
    ],
    "src": "0:257:44"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ExpectedRateInterface.sol",
    "exportedSymbols": {
      "ExpectedRateInterface": [
        11531
      ]
    },
    "id": 11532,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11514,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:44"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 11515,
        "nodeType": "ImportDirective",
        "scope": 11532,
        "sourceUnit": 9438,
        "src": "26:33:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 11531,
        "linearizedBaseContracts": [
          11531
        ],
        "name": "ExpectedRateInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11530,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11524,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11517,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "125:9:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11516,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "125:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9437",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11519,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "136:10:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11518,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "136:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9437",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11521,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "148:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11520,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "148:4:44",
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
                  "id": 11523,
                  "name": "usePermissionless",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "161:22:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11522,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "124:60:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 11529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11526,
                  "name": "expectedRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "216:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11525,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:4:44",
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
                  "id": 11528,
                  "name": "slippageRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11530,
                  "src": "235:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11527,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "215:38:44"
            },
            "scope": 11531,
            "src": "100:154:44",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11532,
        "src": "62:194:44"
      }
    ],
    "src": "0:257:44"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-13T22:36:34.215Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}