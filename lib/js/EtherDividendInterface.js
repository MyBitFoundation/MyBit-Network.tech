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
        9585
      ]
    },
    "id": 9586,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9562,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9585,
        "linearizedBaseContracts": [
          9585
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9571,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9564,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9571,
                  "src": "225:11:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9563,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:36",
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
                  "id": 9566,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9571,
                  "src": "238:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9569,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9571,
                  "src": "273:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9568,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:36"
            },
            "scope": 9585,
            "src": "211:68:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9576,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9572,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9574,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9576,
                  "src": "373:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9573,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:36"
            },
            "scope": 9585,
            "src": "330:49:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9579,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9577,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:36"
            },
            "payable": true,
            "returnParameters": {
              "id": 9578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:36"
            },
            "scope": 9585,
            "src": "383:43:36",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9584,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9584,
                  "src": "522:7:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:36"
            },
            "scope": 9585,
            "src": "476:55:36",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9586,
        "src": "26:507:36"
      }
    ],
    "src": "0:534:36"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
    "exportedSymbols": {
      "EtherDividendInterface": [
        9585
      ]
    },
    "id": 9586,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9562,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9585,
        "linearizedBaseContracts": [
          9585
        ],
        "name": "EtherDividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9571,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9564,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9571,
                  "src": "225:11:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9563,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:36",
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
                  "id": 9566,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9571,
                  "src": "238:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9569,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9571,
                  "src": "273:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9568,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:36"
            },
            "scope": 9585,
            "src": "211:68:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9576,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9572,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9574,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9576,
                  "src": "373:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9573,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:36"
            },
            "scope": 9585,
            "src": "330:49:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9579,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9577,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:2:36"
            },
            "payable": true,
            "returnParameters": {
              "id": 9578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "425:0:36"
            },
            "scope": 9585,
            "src": "383:43:36",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9584,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 9583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9584,
                  "src": "522:7:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "522:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "521:9:36"
            },
            "scope": 9585,
            "src": "476:55:36",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9586,
        "src": "26:507:36"
      }
    ],
    "src": "0:534:36"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.583Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}