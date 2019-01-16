"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnableERC20 = exports.BurnableERC20 = 
{
  "contractName": "BurnableERC20",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
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
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
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
  "source": "pragma solidity ^0.4.24;\n\n// @title An interface to interact with Burnable ERC20 tokens \ninterface BurnableERC20 { \n\n  function allowance(address tokenOwner, address spender) external view returns (uint remaining);\n  \n  function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); \n\n  function burn(uint _amount) external returns (bool success); \n  \n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n\n  event LogBurn(address indexed _spender, uint256 _value); \n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        8261
      ]
    },
    "id": 8262,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8172,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:31"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8261,
        "linearizedBaseContracts": [
          8261
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8181,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8174,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8181,
                  "src": "138:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:31",
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
                  "id": 8176,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8181,
                  "src": "158:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8175,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8179,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 8181,
                  "src": "198:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8178,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:31"
            },
            "scope": 8261,
            "src": "119:95:31",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8190,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8183,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8190,
                  "src": "238:20:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:31",
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
                  "id": 8185,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8190,
                  "src": "260:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8184,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8188,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8190,
                  "src": "292:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8187,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:31"
            },
            "scope": 8261,
            "src": "220:86:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8197,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8192,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8197,
                  "src": "325:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8195,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8197,
                  "src": "357:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8194,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:31"
            },
            "scope": 8261,
            "src": "311:60:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8202,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8198,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8200,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8202,
                  "src": "424:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:31"
            },
            "scope": 8261,
            "src": "378:55:31",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8209,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8204,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 8209,
                  "src": "456:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8203,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8207,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8209,
                  "src": "493:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8206,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:31"
            },
            "scope": 8261,
            "src": "437:65:31",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8218,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8211,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8218,
                  "src": "524:11:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:31",
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
                  "id": 8213,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8218,
                  "src": "537:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8216,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8218,
                  "src": "571:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8215,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:31"
            },
            "scope": 8261,
            "src": "506:71:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8227,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8220,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8227,
                  "src": "598:16:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:31",
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
                  "id": 8222,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8227,
                  "src": "616:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8221,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8225,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8227,
                  "src": "650:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8224,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:31"
            },
            "scope": 8261,
            "src": "581:75:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8238,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8229,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "682:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:31",
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
                  "id": 8231,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "697:11:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8230,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:31",
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
                  "id": 8233,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "710:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8232,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8236,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "744:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8235,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:31"
            },
            "scope": 8261,
            "src": "660:90:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8246,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8240,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8246,
                  "src": "769:20:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:31",
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
                  "id": 8242,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8246,
                  "src": "791:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:31",
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
                  "id": 8244,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8246,
                  "src": "811:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:31"
            },
            "src": "754:72:31"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8254,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8248,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8254,
                  "src": "845:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:31",
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
                  "id": 8250,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8254,
                  "src": "868:23:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8249,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:31",
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
                  "id": 8252,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8254,
                  "src": "893:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:31"
            },
            "src": "830:78:31"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8260,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8256,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8260,
                  "src": "926:24:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8255,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:31",
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
                  "id": 8258,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8260,
                  "src": "952:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8257,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:31"
            },
            "src": "912:56:31"
          }
        ],
        "scope": 8262,
        "src": "89:882:31"
      }
    ],
    "src": "0:972:31"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        8261
      ]
    },
    "id": 8262,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8172,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:31"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8261,
        "linearizedBaseContracts": [
          8261
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8181,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8177,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8174,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8181,
                  "src": "138:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:31",
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
                  "id": 8176,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8181,
                  "src": "158:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8175,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8179,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 8181,
                  "src": "198:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8178,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:31"
            },
            "scope": 8261,
            "src": "119:95:31",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8190,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8183,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8190,
                  "src": "238:20:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:31",
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
                  "id": 8185,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8190,
                  "src": "260:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8184,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8188,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8190,
                  "src": "292:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8187,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:31"
            },
            "scope": 8261,
            "src": "220:86:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8197,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8192,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8197,
                  "src": "325:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8195,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8197,
                  "src": "357:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8194,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:31"
            },
            "scope": 8261,
            "src": "311:60:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8202,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8198,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8200,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8202,
                  "src": "424:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:31"
            },
            "scope": 8261,
            "src": "378:55:31",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8209,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8204,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 8209,
                  "src": "456:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8203,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8207,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8209,
                  "src": "493:7:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8206,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:31"
            },
            "scope": 8261,
            "src": "437:65:31",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8218,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8211,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8218,
                  "src": "524:11:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:31",
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
                  "id": 8213,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8218,
                  "src": "537:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8216,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8218,
                  "src": "571:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8215,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:31"
            },
            "scope": 8261,
            "src": "506:71:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8227,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8220,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8227,
                  "src": "598:16:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:31",
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
                  "id": 8222,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8227,
                  "src": "616:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8221,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8225,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8227,
                  "src": "650:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8224,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:31"
            },
            "scope": 8261,
            "src": "581:75:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8238,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8229,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "682:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:31",
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
                  "id": 8231,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "697:11:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8230,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:31",
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
                  "id": 8233,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "710:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8232,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8237,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8236,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8238,
                  "src": "744:4:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8235,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:31"
            },
            "scope": 8261,
            "src": "660:90:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8246,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8240,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8246,
                  "src": "769:20:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:31",
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
                  "id": 8242,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8246,
                  "src": "791:18:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:31",
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
                  "id": 8244,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8246,
                  "src": "811:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:31"
            },
            "src": "754:72:31"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8254,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8248,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8254,
                  "src": "845:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8247,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:31",
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
                  "id": 8250,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8254,
                  "src": "868:23:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8249,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:31",
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
                  "id": 8252,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8254,
                  "src": "893:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:31"
            },
            "src": "830:78:31"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8260,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8256,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8260,
                  "src": "926:24:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8255,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:31",
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
                  "id": 8258,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8260,
                  "src": "952:14:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8257,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:31"
            },
            "src": "912:56:31"
          }
        ],
        "scope": 8262,
        "src": "89:882:31"
      }
    ],
    "src": "0:972:31"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2019-01-15T20:50:39.218Z"
}