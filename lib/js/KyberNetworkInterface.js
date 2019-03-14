"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var KyberNetworkInterface = exports.KyberNetworkInterface = 
{
  "contractName": "KyberNetworkInterface",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "maxGasPrice",
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
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserCapInWei",
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
          "name": "user",
          "type": "address"
        },
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getUserCapInTokenWei",
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
      "inputs": [],
      "name": "enabled",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "info",
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
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "trader",
          "type": "address"
        },
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "srcAmount",
          "type": "uint256"
        },
        {
          "name": "dest",
          "type": "address"
        },
        {
          "name": "destAddress",
          "type": "address"
        },
        {
          "name": "maxDestAmount",
          "type": "uint256"
        },
        {
          "name": "minConversionRate",
          "type": "uint256"
        },
        {
          "name": "walletId",
          "type": "address"
        },
        {
          "name": "hint",
          "type": "bytes"
        }
      ],
      "name": "tradeWHint",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n\n/// @title Kyber Network interface\ninterface KyberNetworkInterface {\n    function maxGasPrice() external view returns(uint);\n    function getUserCapInWei(address user) external view returns(uint);\n    function getUserCapInTokenWei(address user, ERC20 token) external view returns(uint);\n    function enabled() external view returns(bool);\n    function info(bytes32 id) external view returns(uint);\n\n    function getExpectedRate(ERC20 src, ERC20 dest, uint srcQty) external view\n        returns (uint expectedRate, uint slippageRate);\n\n    function tradeWHint(address trader, ERC20 src, uint srcAmount, ERC20 dest, address destAddress,\n        uint maxDestAmount, uint minConversionRate, address walletId, bytes hint) external payable returns(uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/KyberNetworkInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/KyberNetworkInterface.sol",
    "exportedSymbols": {
      "KyberNetworkInterface": [
        14331
      ]
    },
    "id": 14332,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14260,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:48"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 14261,
        "nodeType": "ImportDirective",
        "scope": 14332,
        "sourceUnit": 9534,
        "src": "26:33:48",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title Kyber Network interface",
        "fullyImplemented": false,
        "id": 14331,
        "linearizedBaseContracts": [
          14331
        ],
        "name": "KyberNetworkInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 14266,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "maxGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "155:2:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14264,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14266,
                  "src": "180:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14263,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "180:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "179:6:48"
            },
            "scope": 14331,
            "src": "135:51:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14273,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserCapInWei",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14268,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 14273,
                  "src": "216:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14267,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "215:14:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14271,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14273,
                  "src": "252:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14270,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "251:6:48"
            },
            "scope": 14331,
            "src": "191:67:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14282,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserCapInTokenWei",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14275,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 14282,
                  "src": "293:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "293:7:48",
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
                  "id": 14277,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 14282,
                  "src": "307:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14276,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "307:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "292:27:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14280,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14282,
                  "src": "342:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14279,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:6:48"
            },
            "scope": 14331,
            "src": "263:85:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14287,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "enabled",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14283,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "369:2:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14285,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14287,
                  "src": "394:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14284,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "393:6:48"
            },
            "scope": 14331,
            "src": "353:47:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14294,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "info",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14289,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 14294,
                  "src": "419:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14288,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "418:12:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14292,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14294,
                  "src": "453:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14291,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "453:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "452:6:48"
            },
            "scope": 14331,
            "src": "405:54:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14307,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14296,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "490:9:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14295,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "490:5:48",
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
                  "id": 14298,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "501:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14297,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "501:5:48",
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
                  "id": 14300,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "513:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14299,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "513:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "489:36:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14303,
                  "name": "expectedRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "557:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14302,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:4:48",
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
                  "id": 14305,
                  "name": "slippageRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "576:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14304,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "556:38:48"
            },
            "scope": 14331,
            "src": "465:130:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14330,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "tradeWHint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14309,
                  "name": "trader",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "621:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14308,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:7:48",
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
                  "id": 14311,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "637:9:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14310,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "637:5:48",
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
                  "id": 14313,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "648:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14312,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "648:4:48",
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
                  "id": 14315,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "664:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14314,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "664:5:48",
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
                  "id": 14317,
                  "name": "destAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "676:19:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14316,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "676:7:48",
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
                  "id": 14319,
                  "name": "maxDestAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "705:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14318,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "705:4:48",
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
                  "id": 14321,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "725:22:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14320,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:4:48",
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
                  "id": 14323,
                  "name": "walletId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "749:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "749:7:48",
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
                  "id": 14325,
                  "name": "hint",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "767:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 14324,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:158:48"
            },
            "payable": true,
            "returnParameters": {
              "id": 14329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14328,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "804:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14327,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "803:6:48"
            },
            "scope": 14331,
            "src": "601:209:48",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 14332,
        "src": "97:715:48"
      }
    ],
    "src": "0:813:48"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/KyberNetworkInterface.sol",
    "exportedSymbols": {
      "KyberNetworkInterface": [
        14331
      ]
    },
    "id": 14332,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14260,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:48"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 14261,
        "nodeType": "ImportDirective",
        "scope": 14332,
        "sourceUnit": 9534,
        "src": "26:33:48",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title Kyber Network interface",
        "fullyImplemented": false,
        "id": 14331,
        "linearizedBaseContracts": [
          14331
        ],
        "name": "KyberNetworkInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 14266,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "maxGasPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "155:2:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14264,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14266,
                  "src": "180:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14263,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "180:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "179:6:48"
            },
            "scope": 14331,
            "src": "135:51:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14273,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserCapInWei",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14268,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 14273,
                  "src": "216:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14267,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "215:14:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14271,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14273,
                  "src": "252:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14270,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "251:6:48"
            },
            "scope": 14331,
            "src": "191:67:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14282,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUserCapInTokenWei",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14275,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 14282,
                  "src": "293:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "293:7:48",
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
                  "id": 14277,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 14282,
                  "src": "307:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14276,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "307:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "292:27:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14280,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14282,
                  "src": "342:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14279,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:6:48"
            },
            "scope": 14331,
            "src": "263:85:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14287,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "enabled",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14283,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "369:2:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14285,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14287,
                  "src": "394:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14284,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "393:6:48"
            },
            "scope": 14331,
            "src": "353:47:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14294,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "info",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14289,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 14294,
                  "src": "419:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14288,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "418:12:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14292,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14294,
                  "src": "453:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14291,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "453:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "452:6:48"
            },
            "scope": 14331,
            "src": "405:54:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14307,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14296,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "490:9:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14295,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "490:5:48",
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
                  "id": 14298,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "501:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14297,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "501:5:48",
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
                  "id": 14300,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "513:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14299,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "513:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "489:36:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 14306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14303,
                  "name": "expectedRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "557:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14302,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:4:48",
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
                  "id": 14305,
                  "name": "slippageRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 14307,
                  "src": "576:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14304,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "556:38:48"
            },
            "scope": 14331,
            "src": "465:130:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 14330,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "tradeWHint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14309,
                  "name": "trader",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "621:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14308,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:7:48",
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
                  "id": 14311,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "637:9:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14310,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "637:5:48",
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
                  "id": 14313,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "648:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14312,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "648:4:48",
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
                  "id": 14315,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "664:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 14314,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "664:5:48",
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
                  "id": 14317,
                  "name": "destAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "676:19:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14316,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "676:7:48",
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
                  "id": 14319,
                  "name": "maxDestAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "705:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14318,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "705:4:48",
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
                  "id": 14321,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "725:22:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14320,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:4:48",
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
                  "id": 14323,
                  "name": "walletId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "749:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "749:7:48",
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
                  "id": 14325,
                  "name": "hint",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "767:10:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 14324,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:158:48"
            },
            "payable": true,
            "returnParameters": {
              "id": 14329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14328,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14330,
                  "src": "804:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14327,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "803:6:48"
            },
            "scope": 14331,
            "src": "601:209:48",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 14332,
        "src": "97:715:48"
      }
    ],
    "src": "0:813:48"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.638Z",
  "devdoc": {
    "methods": {},
    "title": "Kyber Network interface"
  },
  "userdoc": {
    "methods": {}
  }
}