"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20 = exports.ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
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
      "stateMutability": "view",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_who",
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
      "stateMutability": "view",
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
      "stateMutability": "view",
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ninterface ERC20 {\n  function decimals() external view returns (uint8);\n\n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function allowance(address _owner, address _spender) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        10246
      ]
    },
    "id": 10247,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10174,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 10246,
        "linearizedBaseContracts": [
          10246
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10179,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "153:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10177,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10179,
                  "src": "179:5:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 10176,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "179:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "178:7:34"
            },
            "scope": 10246,
            "src": "136:50:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10184,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "210:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10182,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10184,
                  "src": "236:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10181,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "235:9:34"
            },
            "scope": 10246,
            "src": "190:55:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10191,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10186,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "268:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "268:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "267:14:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "305:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "304:9:34"
            },
            "scope": 10246,
            "src": "249:65:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10193,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10200,
                  "src": "337:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:34",
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
                  "id": 10195,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10200,
                  "src": "353:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10200,
                  "src": "394:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10197,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "393:9:34"
            },
            "scope": 10246,
            "src": "318:85:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10209,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10202,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10209,
                  "src": "425:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10201,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:34",
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
                  "id": 10204,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10209,
                  "src": "438:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "424:29:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10207,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10209,
                  "src": "472:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10206,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "471:6:34"
            },
            "scope": 10246,
            "src": "407:71:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10218,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10211,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10218,
                  "src": "499:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:7:34",
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
                  "id": 10213,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10218,
                  "src": "517:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "517:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10216,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10218,
                  "src": "551:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10215,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "551:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "550:6:34"
            },
            "scope": 10246,
            "src": "482:75:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10229,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10220,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "583:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:7:34",
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
                  "id": 10222,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "598:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10221,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:34",
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
                  "id": 10224,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "611:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "582:44:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10227,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "645:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10226,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "644:6:34"
            },
            "scope": 10246,
            "src": "561:90:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10237,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10231,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10237,
                  "src": "670:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10230,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "670:7:34",
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
                  "id": 10233,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10237,
                  "src": "692:18:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:7:34",
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
                  "id": 10235,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10237,
                  "src": "712:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "712:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "669:57:34"
            },
            "src": "655:72:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10245,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10239,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10245,
                  "src": "746:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "746:7:34",
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
                  "id": 10241,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10245,
                  "src": "769:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10240,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:34",
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
                  "id": 10243,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10245,
                  "src": "794:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10242,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "745:63:34"
            },
            "src": "731:78:34"
          }
        ],
        "scope": 10247,
        "src": "116:695:34"
      }
    ],
    "src": "0:812:34"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        10246
      ]
    },
    "id": 10247,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10174,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 10246,
        "linearizedBaseContracts": [
          10246
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10179,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "153:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10177,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10179,
                  "src": "179:5:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 10176,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "179:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "178:7:34"
            },
            "scope": 10246,
            "src": "136:50:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10184,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10180,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "210:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10182,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10184,
                  "src": "236:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10181,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "236:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "235:9:34"
            },
            "scope": 10246,
            "src": "190:55:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10191,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10186,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "268:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "268:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "267:14:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10191,
                  "src": "305:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "305:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "304:9:34"
            },
            "scope": 10246,
            "src": "249:65:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10193,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10200,
                  "src": "337:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "337:7:34",
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
                  "id": 10195,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10200,
                  "src": "353:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10200,
                  "src": "394:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10197,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "394:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "393:9:34"
            },
            "scope": 10246,
            "src": "318:85:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10209,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10202,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10209,
                  "src": "425:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10201,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:34",
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
                  "id": 10204,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10209,
                  "src": "438:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10203,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "424:29:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10207,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10209,
                  "src": "472:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10206,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "471:6:34"
            },
            "scope": 10246,
            "src": "407:71:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10218,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10211,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10218,
                  "src": "499:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "499:7:34",
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
                  "id": 10213,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10218,
                  "src": "517:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "517:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "498:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10216,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10218,
                  "src": "551:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10215,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "551:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "550:6:34"
            },
            "scope": 10246,
            "src": "482:75:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10229,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10220,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "583:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:7:34",
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
                  "id": 10222,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "598:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10221,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:34",
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
                  "id": 10224,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "611:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "611:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "582:44:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 10228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10227,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10229,
                  "src": "645:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10226,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "644:6:34"
            },
            "scope": 10246,
            "src": "561:90:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10237,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10231,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10237,
                  "src": "670:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10230,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "670:7:34",
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
                  "id": 10233,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10237,
                  "src": "692:18:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:7:34",
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
                  "id": 10235,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10237,
                  "src": "712:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "712:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "669:57:34"
            },
            "src": "655:72:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10245,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10239,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10245,
                  "src": "746:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "746:7:34",
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
                  "id": 10241,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10245,
                  "src": "769:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10240,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:34",
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
                  "id": 10243,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10245,
                  "src": "794:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10242,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "745:63:34"
            },
            "src": "731:78:34"
          }
        ],
        "scope": 10247,
        "src": "116:695:34"
      }
    ],
    "src": "0:812:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-20T20:50:44.524Z",
  "devdoc": {
    "methods": {},
    "title": "ERC20 interface"
  },
  "userdoc": {
    "methods": {}
  }
}