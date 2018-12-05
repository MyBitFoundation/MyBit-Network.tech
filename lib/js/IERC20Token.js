"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC20Token = exports.IERC20Token = 
{
  "contractName": "IERC20Token",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    ERC20 Standard Token interface\n*/\ncontract IERC20Token {\n    // these functions aren't abstract since the compiler emits automatically generated getter functions as external\n    function name() public pure returns (string) {}\n    function symbol() public pure returns (string) {}\n    function decimals() public pure returns (uint8) {}\n    function totalSupply() public pure returns (uint256) {}\n    function balanceOf(address _owner) public pure returns (uint256) { _owner; }\n    function allowance(address _owner, address _spender) public pure returns (uint256) { _owner; _spender; }\n\n    function transfer(address _to, uint256 _value) public returns (bool success);\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);\n    function approve(address _spender, uint256 _value) public returns (bool success);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
    "exportedSymbols": {
      "IERC20Token": [
        8901
      ]
    },
    "id": 8902,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8823,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:29"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8901,
        "linearizedBaseContracts": [
          8901
        ],
        "name": "IERC20Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8828,
              "nodeType": "Block",
              "src": "256:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8829,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "224:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8829,
                  "src": "248:6:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8825,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "248:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "247:8:29"
            },
            "scope": 8901,
            "src": "211:47:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8834,
              "nodeType": "Block",
              "src": "310:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8830,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "278:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8832,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8835,
                  "src": "302:6:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8831,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "301:8:29"
            },
            "scope": 8901,
            "src": "263:49:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8840,
              "nodeType": "Block",
              "src": "365:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8841,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8841,
                  "src": "358:5:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 8837,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "357:7:29"
            },
            "scope": 8901,
            "src": "317:50:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8846,
              "nodeType": "Block",
              "src": "425:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8847,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8842,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "392:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8844,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8847,
                  "src": "416:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "415:9:29"
            },
            "scope": 8901,
            "src": "372:55:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8856,
              "nodeType": "Block",
              "src": "497:11:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8854,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8849,
                    "src": "499:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 8855,
                  "nodeType": "ExpressionStatement",
                  "src": "499:6:29"
                }
              ]
            },
            "documentation": null,
            "id": 8857,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8849,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8857,
                  "src": "451:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8848,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "450:16:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8857,
                  "src": "488:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "487:9:29"
            },
            "scope": 8901,
            "src": "432:76:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8870,
              "nodeType": "Block",
              "src": "596:21:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8866,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8859,
                    "src": "598:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 8867,
                  "nodeType": "ExpressionStatement",
                  "src": "598:6:29"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8868,
                    "name": "_spender",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8861,
                    "src": "606:8:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 8869,
                  "nodeType": "ExpressionStatement",
                  "src": "606:8:29"
                }
              ]
            },
            "documentation": null,
            "id": 8871,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8859,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8871,
                  "src": "532:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8858,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:7:29",
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
                  "id": 8861,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8871,
                  "src": "548:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8860,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "531:34:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8864,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8871,
                  "src": "587:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:9:29"
            },
            "scope": 8901,
            "src": "513:104:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8880,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8873,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8880,
                  "src": "641:11:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8872,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:29",
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
                  "id": 8875,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8880,
                  "src": "654:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "640:29:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8878,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8880,
                  "src": "686:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8877,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:14:29"
            },
            "scope": 8901,
            "src": "623:77:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8882,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "727:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8881,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:29",
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
                  "id": 8884,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "742:11:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:29",
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
                  "id": 8886,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "755:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "726:44:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8889,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "787:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8888,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "787:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "786:14:29"
            },
            "scope": 8901,
            "src": "705:96:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8900,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8893,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8900,
                  "src": "823:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8892,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:29",
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
                  "id": 8895,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8900,
                  "src": "841:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8894,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "841:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "822:34:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8899,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8898,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8900,
                  "src": "873:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8897,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "872:14:29"
            },
            "scope": 8901,
            "src": "806:81:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8902,
        "src": "67:822:29"
      }
    ],
    "src": "0:890:29"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
    "exportedSymbols": {
      "IERC20Token": [
        8901
      ]
    },
    "id": 8902,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8823,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:29"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8901,
        "linearizedBaseContracts": [
          8901
        ],
        "name": "IERC20Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8828,
              "nodeType": "Block",
              "src": "256:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8829,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "224:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8829,
                  "src": "248:6:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8825,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "248:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "247:8:29"
            },
            "scope": 8901,
            "src": "211:47:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8834,
              "nodeType": "Block",
              "src": "310:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8830,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "278:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8832,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8835,
                  "src": "302:6:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8831,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "301:8:29"
            },
            "scope": 8901,
            "src": "263:49:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8840,
              "nodeType": "Block",
              "src": "365:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8841,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8841,
                  "src": "358:5:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 8837,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "357:7:29"
            },
            "scope": 8901,
            "src": "317:50:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8846,
              "nodeType": "Block",
              "src": "425:2:29",
              "statements": []
            },
            "documentation": null,
            "id": 8847,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8842,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "392:2:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8844,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8847,
                  "src": "416:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "415:9:29"
            },
            "scope": 8901,
            "src": "372:55:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8856,
              "nodeType": "Block",
              "src": "497:11:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8854,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8849,
                    "src": "499:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 8855,
                  "nodeType": "ExpressionStatement",
                  "src": "499:6:29"
                }
              ]
            },
            "documentation": null,
            "id": 8857,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8849,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8857,
                  "src": "451:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8848,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "450:16:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8857,
                  "src": "488:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "487:9:29"
            },
            "scope": 8901,
            "src": "432:76:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8870,
              "nodeType": "Block",
              "src": "596:21:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8866,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8859,
                    "src": "598:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 8867,
                  "nodeType": "ExpressionStatement",
                  "src": "598:6:29"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8868,
                    "name": "_spender",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8861,
                    "src": "606:8:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 8869,
                  "nodeType": "ExpressionStatement",
                  "src": "606:8:29"
                }
              ]
            },
            "documentation": null,
            "id": 8871,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8859,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8871,
                  "src": "532:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8858,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:7:29",
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
                  "id": 8861,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8871,
                  "src": "548:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8860,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "531:34:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8864,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8871,
                  "src": "587:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:9:29"
            },
            "scope": 8901,
            "src": "513:104:29",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8880,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8873,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8880,
                  "src": "641:11:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8872,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:29",
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
                  "id": 8875,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8880,
                  "src": "654:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "640:29:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8878,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8880,
                  "src": "686:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8877,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:14:29"
            },
            "scope": 8901,
            "src": "623:77:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8882,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "727:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8881,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:29",
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
                  "id": 8884,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "742:11:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:29",
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
                  "id": 8886,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "755:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "726:44:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8889,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8891,
                  "src": "787:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8888,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "787:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "786:14:29"
            },
            "scope": 8901,
            "src": "705:96:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8900,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8896,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8893,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8900,
                  "src": "823:16:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8892,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:29",
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
                  "id": 8895,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8900,
                  "src": "841:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8894,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "841:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "822:34:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8899,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8898,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8900,
                  "src": "873:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8897,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "872:14:29"
            },
            "scope": 8901,
            "src": "806:81:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8902,
        "src": "67:822:29"
      }
    ],
    "src": "0:890:29"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-05T20:40:37.182Z"
}