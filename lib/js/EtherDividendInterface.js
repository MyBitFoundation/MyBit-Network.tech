"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var EtherDividendInterface = exports.EtherDividendInterface = 
{
  "contractName": "EtherDividendInterface",
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
      "inputs": [],
      "name": "issueDividends",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
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
  "source": "pragma solidity ^0.4.24;\n\ninterface EtherDividendInterface{\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount) external returns (bool);\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting() external returns (bool);\n\n  function issueDividends() external payable;\n\n  // @dev Total number of tokens in existence\n  function totalSupply() external view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
    "exportedSymbols": {
      "EtherDividendInterface": [
        6165
      ]
    },
    "id": 6166,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6142,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:22"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6165,
        "linearizedBaseContracts": [
          6165
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6151,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6144,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6151,
                  "src": "225:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:22",
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
                  "id": 6146,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6151,
                  "src": "238:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6149,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6151,
                  "src": "273:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6148,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:22"
            },
            "scope": 6165,
            "src": "211:68:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6156,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6154,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6156,
                  "src": "373:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6153,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:22"
            },
            "scope": 6165,
            "src": "330:49:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6159,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:22"
            },
            "payable": true,
            "returnParameters": {
              "id": 6158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:22"
            },
            "scope": 6165,
            "src": "383:43:22",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6164,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6162,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6164,
                  "src": "522:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:22"
            },
            "scope": 6165,
            "src": "476:55:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6166,
        "src": "26:507:22"
      }
    ],
    "src": "0:534:22"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
    "exportedSymbols": {
      "EtherDividendInterface": [
        6165
      ]
    },
    "id": 6166,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6142,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:22"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6165,
        "linearizedBaseContracts": [
          6165
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6151,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6147,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6144,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6151,
                  "src": "225:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:22",
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
                  "id": 6146,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6151,
                  "src": "238:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6145,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6149,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6151,
                  "src": "273:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6148,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:22"
            },
            "scope": 6165,
            "src": "211:68:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6156,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6154,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6156,
                  "src": "373:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6153,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:22"
            },
            "scope": 6165,
            "src": "330:49:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6159,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:22"
            },
            "payable": true,
            "returnParameters": {
              "id": 6158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:22"
            },
            "scope": 6165,
            "src": "383:43:22",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6164,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6162,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6164,
                  "src": "522:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:22"
            },
            "scope": 6165,
            "src": "476:55:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6166,
        "src": "26:507:22"
      }
    ],
    "src": "0:534:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.458Z"
}