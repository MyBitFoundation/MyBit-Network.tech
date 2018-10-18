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
        6749
      ]
    },
    "id": 6750,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6726,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:25"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6749,
        "linearizedBaseContracts": [
          6749
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6735,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6728,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6735,
                  "src": "225:11:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:25",
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
                  "id": 6730,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6735,
                  "src": "238:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 6734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6733,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6735,
                  "src": "273:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6732,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:25"
            },
            "scope": 6749,
            "src": "211:68:25",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6740,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6736,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 6739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6738,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "373:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6737,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:25"
            },
            "scope": 6749,
            "src": "330:49:25",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6743,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6741,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:25"
            },
            "payable": true,
            "returnParameters": {
              "id": 6742,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:25"
            },
            "scope": 6749,
            "src": "383:43:25",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6748,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 6747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6746,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6748,
                  "src": "522:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:25"
            },
            "scope": 6749,
            "src": "476:55:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6750,
        "src": "26:507:25"
      }
    ],
    "src": "0:534:25"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
    "exportedSymbols": {
      "EtherDividendInterface": [
        6749
      ]
    },
    "id": 6750,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6726,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:25"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6749,
        "linearizedBaseContracts": [
          6749
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6735,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6728,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6735,
                  "src": "225:11:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6727,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:25",
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
                  "id": 6730,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6735,
                  "src": "238:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 6734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6733,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6735,
                  "src": "273:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6732,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:25"
            },
            "scope": 6749,
            "src": "211:68:25",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6740,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6736,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 6739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6738,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "373:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6737,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:25"
            },
            "scope": 6749,
            "src": "330:49:25",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6743,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6741,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:25"
            },
            "payable": true,
            "returnParameters": {
              "id": 6742,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:25"
            },
            "scope": 6749,
            "src": "383:43:25",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6748,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6744,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 6747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6746,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6748,
                  "src": "522:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:25"
            },
            "scope": 6749,
            "src": "476:55:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6750,
        "src": "26:507:25"
      }
    ],
    "src": "0:534:25"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.833Z"
}