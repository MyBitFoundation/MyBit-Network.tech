"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DivToken = exports.DivToken = 
{
  "contractName": "DivToken",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
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
          "name": "_amount",
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
          "name": "_amount",
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
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
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
      "inputs": [],
      "name": "withdraw",
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
      "name": "collectOwedDividends",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenHolder",
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
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "tokenSupply",
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
          "name": "_tokenHolder",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "valuePerToken",
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
      "inputs": [],
      "name": "scalingFactor",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getAmountOwed",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getOwedDividends",
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
      "inputs": [],
      "name": "assetIncome",
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
      "inputs": [],
      "name": "getERC20",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.24;\n\n\n// @title ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\n// TODO: Suicide function\ninterface DivToken {\n\n    // @notice Transfer _amount tokens to address _to.\n    // @dev Sender must have enough tokens. Cannot send to 0x0.\n    // @param (address) _to = The address which will receive the tokens\n    // @param (uint) _amount = The amount of tokens to send\n    function transfer(address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice A 3rd party can transfer tokens if user approves them to do so\n    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.\n    // @param (address) _from = The address who approved msg.sender to spend tokens\n    // @param (address) _to = The address who will receive the tokens\n    // @param (uint) _amount = The number of tokens to send\n    function transferFrom(address _from, address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice approves a 3rd party to transfer msg.sender's tokens on behalf of him/her\n    // @param (address) _spender = The address of who msg.sender approves to spend tokens on their behalf\n    // @param (uint) _amount = The upper limit of how many tokens can be spent\n    function approve(address _spender, uint _amount)\n    external\n    returns (bool success);\n\n\n    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens\n    // @param (address) _spender = The contract to call after approval is done\n    // @param (uint) _amount = Number of tokens to send\n    // @param (bytes) _data = Bytes data to send along with the contract call\n    function approveAndCall(address _spender, uint _amount, bytes _data)\n    external\n    returns (bool success);\n\n    function withdraw()\n    external\n    returns (bool);\n\n    // @notice Updates incomeClaimed, sends all wei to the token holder\n    function collectOwedDividends()\n    external\n    returns (uint _amount);\n\n\n    // @notice Returns amount of tokens _spender is allowed to transfer or burn\n    function allowance(address _tokenHolder, address _spender)\n    external\n    view\n    returns (uint);\n\n    // @notice Returns the number of tokens in circulation\n    function totalSupply()\n    external\n    view\n    returns (uint tokenSupply);\n\n    // @notice Returns the token balance of user\n    function balanceOf(address _tokenHolder)\n    external\n    view\n    returns (uint balance);\n\n    // @notice Returns the URI of this token\n    function tokenURI()\n    external\n    view\n    returns (string);\n\n    function valuePerToken()\n    external\n    view\n    returns (uint);\n\n    function scalingFactor()\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much value _user holds\n    function getAmountOwed(address _user)\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32\n    function getOwedDividends(address _user)\n    external\n    view\n    returns (uint);\n\n    function assetIncome()\n    external\n    view\n    returns (uint);\n\n    function getERC20()\n    external\n    view\n    returns (address);\n\n    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n    event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        9392
      ]
    },
    "id": 9393,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9267,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9392,
        "linearizedBaseContracts": [
          9392
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9276,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9269,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9276,
                  "src": "695:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:33",
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
                  "id": 9271,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9276,
                  "src": "708:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9270,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:27:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9274,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9276,
                  "src": "748:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9273,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:14:33"
            },
            "scope": 9392,
            "src": "677:85:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9287,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9278,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1163:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:33",
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
                  "id": 9280,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1178:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9279,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:33",
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
                  "id": 9282,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1191:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9281,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1162:42:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9285,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1231:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9284,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:14:33"
            },
            "scope": 9392,
            "src": "1141:104:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9289,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9296,
                  "src": "1542:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9288,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:7:33",
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
                  "id": 9291,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9296,
                  "src": "1560:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:32:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9294,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9296,
                  "src": "1600:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9293,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1600:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1599:14:33"
            },
            "scope": 9392,
            "src": "1525:89:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9307,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9298,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "1961:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9297,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1961:7:33",
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
                  "id": 9300,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "1979:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9299,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:4:33",
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
                  "id": 9302,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "1993:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9301,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:5:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1960:45:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9305,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "2032:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9304,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:33"
            },
            "scope": 9392,
            "src": "1937:109:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9312,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9310,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9312,
                  "src": "2098:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9309,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2097:6:33"
            },
            "scope": 9392,
            "src": "2052:52:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9317,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9313,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2211:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9315,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9317,
                  "src": "2240:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9314,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2240:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2239:14:33"
            },
            "scope": 9392,
            "src": "2182:72:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9326,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9319,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 9326,
                  "src": "2360:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2360:7:33",
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
                  "id": 9321,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9326,
                  "src": "2382:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9320,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2359:40:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9324,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9326,
                  "src": "2435:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9323,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2435:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2434:6:33"
            },
            "scope": 9392,
            "src": "2341:100:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9331,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9327,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2526:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9329,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 9331,
                  "src": "2564:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9328,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:18:33"
            },
            "scope": 9392,
            "src": "2506:76:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9338,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9333,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 9338,
                  "src": "2656:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:22:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9336,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 9338,
                  "src": "2713:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9335,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2713:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2712:14:33"
            },
            "scope": 9392,
            "src": "2637:90:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9343,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9339,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2795:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9341,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9343,
                  "src": "2833:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9340,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2833:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2832:8:33"
            },
            "scope": 9392,
            "src": "2778:63:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9348,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9344,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9347,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9346,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9348,
                  "src": "2907:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9345,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2907:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2906:6:33"
            },
            "scope": 9392,
            "src": "2847:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9353,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9349,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9351,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9353,
                  "src": "2979:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9350,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2978:6:33"
            },
            "scope": 9392,
            "src": "2919:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9360,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9355,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9360,
                  "src": "3067:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9354,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3067:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3066:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9359,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9358,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9360,
                  "src": "3117:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9357,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3117:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3116:6:33"
            },
            "scope": 9392,
            "src": "3044:79:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9367,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9362,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9367,
                  "src": "3242:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9361,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9365,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9367,
                  "src": "3292:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9364,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3291:6:33"
            },
            "scope": 9392,
            "src": "3216:82:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9372,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9368,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3324:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9370,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9372,
                  "src": "3362:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9369,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:33"
            },
            "scope": 9392,
            "src": "3304:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9377,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9373,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3391:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9375,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9377,
                  "src": "3429:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9374,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3428:9:33"
            },
            "scope": 9392,
            "src": "3374:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9383,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9379,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9383,
                  "src": "3468:23:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9378,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3468:7:33",
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
                  "id": 9381,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9383,
                  "src": "3493:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9380,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3493:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3467:46:33"
            },
            "src": "3444:70:33"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9391,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9385,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 9391,
                  "src": "3544:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9384,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3544:4:33",
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
                  "id": 9387,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9391,
                  "src": "3557:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:7:33",
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
                  "id": 9389,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9391,
                  "src": "3575:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9388,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3575:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3543:45:33"
            },
            "src": "3519:70:33"
          }
        ],
        "scope": 9393,
        "src": "400:3192:33"
      }
    ],
    "src": "0:3593:33"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        9392
      ]
    },
    "id": 9393,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9267,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9392,
        "linearizedBaseContracts": [
          9392
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9276,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9269,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9276,
                  "src": "695:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:33",
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
                  "id": 9271,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9276,
                  "src": "708:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9270,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:27:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9274,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9276,
                  "src": "748:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9273,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:14:33"
            },
            "scope": 9392,
            "src": "677:85:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9287,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9278,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1163:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9277,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:33",
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
                  "id": 9280,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1178:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9279,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:33",
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
                  "id": 9282,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1191:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9281,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1162:42:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9286,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9285,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9287,
                  "src": "1231:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9284,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:14:33"
            },
            "scope": 9392,
            "src": "1141:104:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9289,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9296,
                  "src": "1542:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9288,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:7:33",
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
                  "id": 9291,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9296,
                  "src": "1560:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9290,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:32:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9294,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9296,
                  "src": "1600:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9293,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1600:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1599:14:33"
            },
            "scope": 9392,
            "src": "1525:89:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9307,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9303,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9298,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "1961:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9297,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1961:7:33",
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
                  "id": 9300,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "1979:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9299,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:4:33",
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
                  "id": 9302,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "1993:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9301,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:5:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1960:45:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9305,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 9307,
                  "src": "2032:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9304,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:33"
            },
            "scope": 9392,
            "src": "1937:109:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9312,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9310,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9312,
                  "src": "2098:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9309,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2097:6:33"
            },
            "scope": 9392,
            "src": "2052:52:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9317,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9313,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2211:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9315,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9317,
                  "src": "2240:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9314,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2240:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2239:14:33"
            },
            "scope": 9392,
            "src": "2182:72:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9326,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9319,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 9326,
                  "src": "2360:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2360:7:33",
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
                  "id": 9321,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9326,
                  "src": "2382:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9320,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2359:40:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9324,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9326,
                  "src": "2435:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9323,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2435:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2434:6:33"
            },
            "scope": 9392,
            "src": "2341:100:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9331,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9327,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2526:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9329,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 9331,
                  "src": "2564:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9328,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:18:33"
            },
            "scope": 9392,
            "src": "2506:76:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9338,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9333,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 9338,
                  "src": "2656:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:22:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9337,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9336,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 9338,
                  "src": "2713:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9335,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2713:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2712:14:33"
            },
            "scope": 9392,
            "src": "2637:90:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9343,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9339,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2795:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9341,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9343,
                  "src": "2833:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9340,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2833:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2832:8:33"
            },
            "scope": 9392,
            "src": "2778:63:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9348,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9344,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9347,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9346,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9348,
                  "src": "2907:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9345,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2907:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2906:6:33"
            },
            "scope": 9392,
            "src": "2847:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9353,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9349,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9351,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9353,
                  "src": "2979:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9350,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2978:6:33"
            },
            "scope": 9392,
            "src": "2919:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9360,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9355,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9360,
                  "src": "3067:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9354,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3067:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3066:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9359,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9358,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9360,
                  "src": "3117:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9357,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3117:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3116:6:33"
            },
            "scope": 9392,
            "src": "3044:79:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9367,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9362,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 9367,
                  "src": "3242:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9361,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9365,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9367,
                  "src": "3292:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9364,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3291:6:33"
            },
            "scope": 9392,
            "src": "3216:82:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9372,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9368,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3324:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9370,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9372,
                  "src": "3362:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9369,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:33"
            },
            "scope": 9392,
            "src": "3304:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9377,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9373,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3391:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 9376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9375,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9377,
                  "src": "3429:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9374,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3428:9:33"
            },
            "scope": 9392,
            "src": "3374:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9383,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9379,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 9383,
                  "src": "3468:23:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9378,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3468:7:33",
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
                  "id": 9381,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9383,
                  "src": "3493:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9380,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3493:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3467:46:33"
            },
            "src": "3444:70:33"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9391,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9385,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 9391,
                  "src": "3544:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9384,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3544:4:33",
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
                  "id": 9387,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9391,
                  "src": "3557:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:7:33",
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
                  "id": 9389,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9391,
                  "src": "3575:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9388,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3575:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3543:45:33"
            },
            "src": "3519:70:33"
          }
        ],
        "scope": 9393,
        "src": "400:3192:33"
      }
    ],
    "src": "0:3593:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-11T22:02:15.741Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}