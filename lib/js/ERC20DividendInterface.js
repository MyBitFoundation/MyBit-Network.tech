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
        17066
      ]
    },
    "id": 17067,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17041,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:63"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17066,
        "linearizedBaseContracts": [
          17066
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17050,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17043,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17050,
                  "src": "225:11:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:63",
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
                  "id": 17045,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17050,
                  "src": "238:15:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17044,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17048,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17050,
                  "src": "273:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17047,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:63"
            },
            "scope": 17066,
            "src": "211:68:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17055,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17051,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17053,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17055,
                  "src": "373:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17052,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:63"
            },
            "scope": 17066,
            "src": "330:49:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17060,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17057,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17060,
                  "src": "407:12:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17056,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17059,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:63"
            },
            "scope": 17066,
            "src": "383:47:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17065,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17063,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17065,
                  "src": "526:7:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17062,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:63"
            },
            "scope": 17066,
            "src": "480:55:63",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17067,
        "src": "26:511:63"
      }
    ],
    "src": "0:538:63"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        17066
      ]
    },
    "id": 17067,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17041,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:63"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 17066,
        "linearizedBaseContracts": [
          17066
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 17050,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17043,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 17050,
                  "src": "225:11:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:63",
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
                  "id": 17045,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17050,
                  "src": "238:15:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17044,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17048,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17050,
                  "src": "273:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17047,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:63"
            },
            "scope": 17066,
            "src": "211:68:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17055,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17051,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17053,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17055,
                  "src": "373:4:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17052,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:63"
            },
            "scope": 17066,
            "src": "330:49:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17060,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17057,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17060,
                  "src": "407:12:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17056,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17059,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:63"
            },
            "scope": 17066,
            "src": "383:47:63",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 17065,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:63"
            },
            "payable": false,
            "returnParameters": {
              "id": 17064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17063,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17065,
                  "src": "526:7:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17062,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:63"
            },
            "scope": 17066,
            "src": "480:55:63",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17067,
        "src": "26:511:63"
      }
    ],
    "src": "0:538:63"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-05T20:40:37.331Z"
}