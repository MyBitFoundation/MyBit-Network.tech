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
        11627
      ]
    },
    "id": 11628,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11610,
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
        "id": 11611,
        "nodeType": "ImportDirective",
        "scope": 11628,
        "sourceUnit": 9534,
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
        "id": 11627,
        "linearizedBaseContracts": [
          11627
        ],
        "name": "ExpectedRateInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11626,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11613,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "125:9:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11612,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "125:5:44",
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
                  "id": 11615,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "136:10:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11614,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "136:5:44",
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
                  "id": 11617,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "148:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11616,
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
                  "id": 11619,
                  "name": "usePermissionless",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "161:22:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11618,
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
              "id": 11625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11622,
                  "name": "expectedRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "216:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11621,
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
                  "id": 11624,
                  "name": "slippageRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "235:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11623,
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
            "scope": 11627,
            "src": "100:154:44",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11628,
        "src": "62:194:44"
      }
    ],
    "src": "0:257:44"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/ExpectedRateInterface.sol",
    "exportedSymbols": {
      "ExpectedRateInterface": [
        11627
      ]
    },
    "id": 11628,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11610,
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
        "id": 11611,
        "nodeType": "ImportDirective",
        "scope": 11628,
        "sourceUnit": 9534,
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
        "id": 11627,
        "linearizedBaseContracts": [
          11627
        ],
        "name": "ExpectedRateInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11626,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11613,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "125:9:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11612,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "125:5:44",
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
                  "id": 11615,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "136:10:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 11614,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "136:5:44",
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
                  "id": 11617,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "148:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11616,
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
                  "id": 11619,
                  "name": "usePermissionless",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "161:22:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11618,
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
              "id": 11625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11622,
                  "name": "expectedRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "216:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11621,
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
                  "id": 11624,
                  "name": "slippageRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 11626,
                  "src": "235:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11623,
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
            "scope": 11627,
            "src": "100:154:44",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11628,
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
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.597Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}