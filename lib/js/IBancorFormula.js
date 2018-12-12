"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorFormula = exports.IBancorFormula = 
{
  "contractName": "IBancorFormula",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_supply",
          "type": "uint256"
        },
        {
          "name": "_connectorBalance",
          "type": "uint256"
        },
        {
          "name": "_connectorWeight",
          "type": "uint32"
        },
        {
          "name": "_depositAmount",
          "type": "uint256"
        }
      ],
      "name": "calculatePurchaseReturn",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_supply",
          "type": "uint256"
        },
        {
          "name": "_connectorBalance",
          "type": "uint256"
        },
        {
          "name": "_connectorWeight",
          "type": "uint32"
        },
        {
          "name": "_sellAmount",
          "type": "uint256"
        }
      ],
      "name": "calculateSaleReturn",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_fromConnectorBalance",
          "type": "uint256"
        },
        {
          "name": "_fromConnectorWeight",
          "type": "uint32"
        },
        {
          "name": "_toConnectorBalance",
          "type": "uint256"
        },
        {
          "name": "_toConnectorWeight",
          "type": "uint32"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "calculateCrossConnectorReturn",
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Bancor Formula interface\n*/\ncontract IBancorFormula {\n    function calculatePurchaseReturn(uint256 _supply, uint256 _connectorBalance, uint32 _connectorWeight, uint256 _depositAmount) public view returns (uint256);\n    function calculateSaleReturn(uint256 _supply, uint256 _connectorBalance, uint32 _connectorWeight, uint256 _sellAmount) public view returns (uint256);\n    function calculateCrossConnectorReturn(uint256 _fromConnectorBalance, uint32 _fromConnectorWeight, uint256 _toConnectorBalance, uint32 _toConnectorWeight, uint256 _amount) public view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorFormula.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorFormula.sol",
    "exportedSymbols": {
      "IBancorFormula": [
        7716
      ]
    },
    "id": 7717,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7674,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7716,
        "linearizedBaseContracts": [
          7716
        ],
        "name": "IBancorFormula",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7687,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "calculatePurchaseReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7676,
                  "name": "_supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "124:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:18",
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
                  "id": 7678,
                  "name": "_connectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "141:25:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "141:7:18",
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
                  "id": 7680,
                  "name": "_connectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "168:23:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7679,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "168:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7682,
                  "name": "_depositAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "193:22:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:93:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 7686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7685,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "238:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:9:18"
            },
            "scope": 7716,
            "src": "91:156:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7700,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "calculateSaleReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7689,
                  "name": "_supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "281:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "281:7:18",
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
                  "id": 7691,
                  "name": "_connectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "298:25:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:18",
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
                  "id": 7693,
                  "name": "_connectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "325:23:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7692,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7695,
                  "name": "_sellAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "350:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "280:90:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 7699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7698,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "392:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "391:9:18"
            },
            "scope": 7716,
            "src": "252:149:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7715,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "calculateCrossConnectorReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7702,
                  "name": "_fromConnectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "445:29:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:18",
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
                  "id": 7704,
                  "name": "_fromConnectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "476:27:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7703,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7706,
                  "name": "_toConnectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "505:27:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7705,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:18",
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
                  "id": 7708,
                  "name": "_toConnectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "534:25:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7707,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "534:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7710,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "561:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "561:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:133:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 7714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7713,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "599:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "598:9:18"
            },
            "scope": 7716,
            "src": "406:202:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7717,
        "src": "61:549:18"
      }
    ],
    "src": "0:611:18"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorFormula.sol",
    "exportedSymbols": {
      "IBancorFormula": [
        7716
      ]
    },
    "id": 7717,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7674,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7716,
        "linearizedBaseContracts": [
          7716
        ],
        "name": "IBancorFormula",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7687,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "calculatePurchaseReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7676,
                  "name": "_supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "124:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "124:7:18",
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
                  "id": 7678,
                  "name": "_connectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "141:25:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "141:7:18",
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
                  "id": 7680,
                  "name": "_connectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "168:23:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7679,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "168:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7682,
                  "name": "_depositAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "193:22:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7681,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "193:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "123:93:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 7686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7685,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7687,
                  "src": "238:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:9:18"
            },
            "scope": 7716,
            "src": "91:156:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7700,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "calculateSaleReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7689,
                  "name": "_supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "281:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "281:7:18",
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
                  "id": 7691,
                  "name": "_connectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "298:25:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:18",
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
                  "id": 7693,
                  "name": "_connectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "325:23:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7692,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7695,
                  "name": "_sellAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "350:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "280:90:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 7699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7698,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7700,
                  "src": "392:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "391:9:18"
            },
            "scope": 7716,
            "src": "252:149:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7715,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "calculateCrossConnectorReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7702,
                  "name": "_fromConnectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "445:29:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:18",
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
                  "id": 7704,
                  "name": "_fromConnectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "476:27:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7703,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7706,
                  "name": "_toConnectorBalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "505:27:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7705,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:18",
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
                  "id": 7708,
                  "name": "_toConnectorWeight",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "534:25:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7707,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "534:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7710,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "561:15:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "561:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:133:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 7714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7713,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7715,
                  "src": "599:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "598:9:18"
            },
            "scope": 7716,
            "src": "406:202:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7717,
        "src": "61:549:18"
      }
    ],
    "src": "0:611:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.505Z"
}