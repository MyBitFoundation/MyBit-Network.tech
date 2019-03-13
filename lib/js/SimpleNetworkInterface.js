"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SimpleNetworkInterface = exports.SimpleNetworkInterface = 
{
  "contractName": "SimpleNetworkInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
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
          "name": "minConversionRate",
          "type": "uint256"
        }
      ],
      "name": "swapTokenToToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "minConversionRate",
          "type": "uint256"
        }
      ],
      "name": "swapEtherToToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "srcAmount",
          "type": "uint256"
        },
        {
          "name": "minConversionRate",
          "type": "uint256"
        }
      ],
      "name": "swapTokenToEther",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n\n/// @title simple interface for Kyber Network\ninterface SimpleNetworkInterface {\n    function swapTokenToToken(ERC20 src, uint srcAmount, ERC20 dest, uint minConversionRate) external returns(uint);\n    function swapEtherToToken(ERC20 token, uint minConversionRate) external payable returns(uint);\n    function swapTokenToEther(ERC20 token, uint srcAmount, uint minConversionRate) external returns(uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SimpleNetworkInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SimpleNetworkInterface.sol",
    "exportedSymbols": {
      "SimpleNetworkInterface": [
        20201
      ]
    },
    "id": 20202,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20166,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20167,
        "nodeType": "ImportDirective",
        "scope": 20202,
        "sourceUnit": 9438,
        "src": "26:33:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title simple interface for Kyber Network",
        "fullyImplemented": false,
        "id": 20201,
        "linearizedBaseContracts": [
          20201
        ],
        "name": "SimpleNetworkInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 20180,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20169,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "173:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20168,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "173:5:64",
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
                  "id": 20171,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "184:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:4:64",
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
                  "id": 20173,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "200:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20172,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "200:5:64",
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
                  "id": 20175,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "212:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20174,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "172:63:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20178,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "253:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20177,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:6:64"
            },
            "scope": 20201,
            "src": "147:112:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20189,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapEtherToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20182,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20189,
                  "src": "290:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20181,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "290:5:64",
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
                  "id": 20184,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20189,
                  "src": "303:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20183,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "289:37:64"
            },
            "payable": true,
            "returnParameters": {
              "id": 20188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20187,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20189,
                  "src": "352:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20186,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "352:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:6:64"
            },
            "scope": 20201,
            "src": "264:94:64",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20191,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "389:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20190,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "389:5:64",
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
                  "id": 20193,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "402:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20192,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "402:4:64",
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
                  "id": 20195,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "418:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20194,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "388:53:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "459:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20197,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:6:64"
            },
            "scope": 20201,
            "src": "363:102:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 20202,
        "src": "108:359:64"
      }
    ],
    "src": "0:468:64"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/SimpleNetworkInterface.sol",
    "exportedSymbols": {
      "SimpleNetworkInterface": [
        20201
      ]
    },
    "id": 20202,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20166,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20167,
        "nodeType": "ImportDirective",
        "scope": 20202,
        "sourceUnit": 9438,
        "src": "26:33:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title simple interface for Kyber Network",
        "fullyImplemented": false,
        "id": 20201,
        "linearizedBaseContracts": [
          20201
        ],
        "name": "SimpleNetworkInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 20180,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20169,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "173:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20168,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "173:5:64",
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
                  "id": 20171,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "184:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:4:64",
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
                  "id": 20173,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "200:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20172,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "200:5:64",
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
                  "id": 20175,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "212:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20174,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "172:63:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20178,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20180,
                  "src": "253:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20177,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:6:64"
            },
            "scope": 20201,
            "src": "147:112:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20189,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapEtherToToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20182,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20189,
                  "src": "290:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20181,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "290:5:64",
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
                  "id": 20184,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20189,
                  "src": "303:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20183,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "289:37:64"
            },
            "payable": true,
            "returnParameters": {
              "id": 20188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20187,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20189,
                  "src": "352:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20186,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "352:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "351:6:64"
            },
            "scope": 20201,
            "src": "264:94:64",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 20200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "swapTokenToEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20191,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "389:11:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9437",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20190,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9437,
                    "src": "389:5:64",
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
                  "id": 20193,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "402:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20192,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "402:4:64",
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
                  "id": 20195,
                  "name": "minConversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "418:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20194,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "388:53:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 20199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20200,
                  "src": "459:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20197,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:6:64"
            },
            "scope": 20201,
            "src": "363:102:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 20202,
        "src": "108:359:64"
      }
    ],
    "src": "0:468:64"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-13T22:36:34.370Z",
  "devdoc": {
    "methods": {},
    "title": "simple interface for Kyber Network"
  },
  "userdoc": {
    "methods": {}
  }
}