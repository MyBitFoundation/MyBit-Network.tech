"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MyBitToken = exports.MyBitToken = 
{
  "contractName": "MyBitToken",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "totalSupply",
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
      "stateMutability": "nonpayable",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
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
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface MyBitToken {\n\n  function totalSupply() external returns (uint);\n\n  function balanceOf(address _owner) external returns (uint);\n\n  function transfer(address _to, uint _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint _value) external returns (bool);\n\n  function burn(uint _amount) external returns (bool);\n\n  function burnFrom(address _from, uint _amount) external returns (bool);\n\n  function approve(address _spender, uint _value) external returns (bool);\n\n  function allowance(address _owner, address _spender) external returns (uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/interfaces/MyBitToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/interfaces/MyBitToken.sol",
    "exportedSymbols": {
      "MyBitToken": [
        11670
      ]
    },
    "id": 11671,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11603,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 11670,
        "linearizedBaseContracts": [
          11670
        ],
        "name": "MyBitToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11608,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "72:2:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11608,
                  "src": "93:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "93:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "92:6:28"
            },
            "scope": 11670,
            "src": "52:47:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11615,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11610,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 11615,
                  "src": "122:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11609,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "122:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "121:16:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11613,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11615,
                  "src": "156:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11612,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "156:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "155:6:28"
            },
            "scope": 11670,
            "src": "103:59:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11624,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11617,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 11624,
                  "src": "184:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11616,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:7:28",
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
                  "id": 11619,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 11624,
                  "src": "197:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11618,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "183:26:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11624,
                  "src": "228:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11621,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:6:28"
            },
            "scope": 11670,
            "src": "166:68:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11635,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11626,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "260:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:7:28",
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
                  "id": 11628,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "275:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:7:28",
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
                  "id": 11630,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "288:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11629,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:41:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11633,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "319:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11632,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "318:6:28"
            },
            "scope": 11670,
            "src": "238:87:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11642,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11637,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11642,
                  "src": "343:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11636,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:14:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11640,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11642,
                  "src": "375:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11639,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:6:28"
            },
            "scope": 11670,
            "src": "329:52:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11651,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11644,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 11651,
                  "src": "403:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11643,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:7:28",
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
                  "id": 11646,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11651,
                  "src": "418:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11645,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "402:29:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11649,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11651,
                  "src": "450:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11648,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "449:6:28"
            },
            "scope": 11670,
            "src": "385:71:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11660,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11653,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 11660,
                  "src": "477:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11652,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:28",
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
                  "id": 11655,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 11660,
                  "src": "495:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11654,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:31:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11658,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11660,
                  "src": "526:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11657,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:6:28"
            },
            "scope": 11670,
            "src": "460:72:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11669,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11662,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 11669,
                  "src": "555:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "555:7:28",
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
                  "id": 11664,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 11669,
                  "src": "571:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11663,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "554:34:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11667,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11669,
                  "src": "607:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11666,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "607:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "606:6:28"
            },
            "scope": 11670,
            "src": "536:77:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11671,
        "src": "26:589:28"
      }
    ],
    "src": "0:616:28"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/interfaces/MyBitToken.sol",
    "exportedSymbols": {
      "MyBitToken": [
        11670
      ]
    },
    "id": 11671,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11603,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 11670,
        "linearizedBaseContracts": [
          11670
        ],
        "name": "MyBitToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 11608,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "72:2:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11608,
                  "src": "93:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "93:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "92:6:28"
            },
            "scope": 11670,
            "src": "52:47:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11615,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11610,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 11615,
                  "src": "122:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11609,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "122:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "121:16:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11613,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11615,
                  "src": "156:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11612,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "156:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "155:6:28"
            },
            "scope": 11670,
            "src": "103:59:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11624,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11617,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 11624,
                  "src": "184:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11616,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:7:28",
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
                  "id": 11619,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 11624,
                  "src": "197:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11618,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "183:26:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11624,
                  "src": "228:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11621,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:6:28"
            },
            "scope": 11670,
            "src": "166:68:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11635,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11631,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11626,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "260:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:7:28",
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
                  "id": 11628,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "275:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:7:28",
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
                  "id": 11630,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "288:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11629,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:41:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11633,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11635,
                  "src": "319:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11632,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "318:6:28"
            },
            "scope": 11670,
            "src": "238:87:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11642,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11637,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11642,
                  "src": "343:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11636,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:14:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11640,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11642,
                  "src": "375:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11639,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:6:28"
            },
            "scope": 11670,
            "src": "329:52:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11651,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11644,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 11651,
                  "src": "403:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11643,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:7:28",
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
                  "id": 11646,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 11651,
                  "src": "418:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11645,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "402:29:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11649,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11651,
                  "src": "450:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11648,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "449:6:28"
            },
            "scope": 11670,
            "src": "385:71:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11660,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11653,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 11660,
                  "src": "477:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11652,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:28",
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
                  "id": 11655,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 11660,
                  "src": "495:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11654,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:31:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11658,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11660,
                  "src": "526:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11657,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:6:28"
            },
            "scope": 11670,
            "src": "460:72:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 11669,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11662,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 11669,
                  "src": "555:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "555:7:28",
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
                  "id": 11664,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 11669,
                  "src": "571:16:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11663,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "554:34:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 11668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11667,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11669,
                  "src": "607:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11666,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "607:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "606:6:28"
            },
            "scope": 11670,
            "src": "536:77:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 11671,
        "src": "26:589:28"
      }
    ],
    "src": "0:616:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-08T14:16:35.214Z"
}