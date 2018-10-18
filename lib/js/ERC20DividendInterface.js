"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20DividendInterface = exports.ERC20DividendInterface = 
{
  "contractName": "ERC20DividendInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
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
      "inputs": [],
      "name": "finishMinting",
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
      "name": "issueDividends",
      "outputs": [],
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface ERC20DividendInterface{\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount) external returns (bool);\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting() external returns (bool);\n\n  function issueDividends(uint _amount) external;\n\n  // @dev Total number of tokens in existence\n  function totalSupply() external view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        6724
      ]
    },
    "id": 6725,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6699,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6724,
        "linearizedBaseContracts": [
          6724
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6708,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6701,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "225:11:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:24",
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
                  "id": 6703,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "238:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6702,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6706,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "273:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6705,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:24"
            },
            "scope": 6724,
            "src": "211:68:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6713,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6709,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6711,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6713,
                  "src": "373:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6710,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:24"
            },
            "scope": 6724,
            "src": "330:49:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6718,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6715,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6718,
                  "src": "407:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6714,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6717,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:24"
            },
            "scope": 6724,
            "src": "383:47:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6723,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6723,
                  "src": "526:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:24"
            },
            "scope": 6724,
            "src": "480:55:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6725,
        "src": "26:511:24"
      }
    ],
    "src": "0:538:24"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        6724
      ]
    },
    "id": 6725,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6699,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6724,
        "linearizedBaseContracts": [
          6724
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6708,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6701,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "225:11:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6700,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:24",
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
                  "id": 6703,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "238:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6702,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6706,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6708,
                  "src": "273:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6705,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:24"
            },
            "scope": 6724,
            "src": "211:68:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6713,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6709,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6711,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6713,
                  "src": "373:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6710,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:24"
            },
            "scope": 6724,
            "src": "330:49:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6718,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6715,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6718,
                  "src": "407:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6714,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6717,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:24"
            },
            "scope": 6724,
            "src": "383:47:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6723,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 6722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6723,
                  "src": "526:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:24"
            },
            "scope": 6724,
            "src": "480:55:24",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6725,
        "src": "26:511:24"
      }
    ],
    "src": "0:538:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.819Z"
}