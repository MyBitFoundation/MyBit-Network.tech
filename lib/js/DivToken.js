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
  "source": "pragma solidity 0.4.24;\n\n\n// @title ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\n// TODO: Suicide function\ninterface DivToken {\n\n    // @notice Transfer _amount tokens to address _to.\n    // @dev Sender must have enough tokens. Cannot send to 0x0.\n    // @param (address) _to = The address which will receive the tokens\n    // @param (uint) _amount = The amount of tokens to send\n    function transfer(address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice A 3rd party can transfer tokens if user approves them to do so\n    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.\n    // @param (address) _from = The address who approved msg.sender to spend tokens\n    // @param (address) _to = The address who will receive the tokens\n    // @param (uint) _amount = The number of tokens to send\n    function transferFrom(address _from, address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice approves a 3rd party to transfer msg.sender's tokens on behalf of him/her\n    // @param (address) _spender = The address of who msg.sender approves to spend tokens on their behalf\n    // @param (uint) _amount = The upper limit of how many tokens can be spent\n    function approve(address _spender, uint _amount)\n    external\n    returns (bool success);\n\n\n    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens\n    // @param (address) _spender = The contract to call after approval is done\n    // @param (uint) _amount = Number of tokens to send\n    // @param (bytes) _data = Bytes data to send along with the contract call\n    function approveAndCall(address _spender, uint _amount, bytes _data)\n    external\n    returns (bool success);\n\n    function withdraw()\n    external\n    returns (bool);\n\n    // @notice Updates incomeClaimed, sends all wei to the token holder\n    function collectOwedDividends()\n    external\n    returns (uint _amount);\n\n\n    // @notice Returns amount of tokens _spender is allowed to transfer or burn\n    function allowance(address _tokenHolder, address _spender)\n    external\n    view\n    returns (uint);\n\n    // @notice Returns the number of tokens in circulation\n    function totalSupply()\n    external\n    view\n    returns (uint tokenSupply);\n\n    // @notice Returns the token balance of user\n    function balanceOf(address _tokenHolder)\n    external\n    view\n    returns (uint balance);\n\n    // @notice Returns the URI of this token\n    function tokenURI()\n    external\n    view\n    returns (string);\n\n    function valuePerToken()\n    external\n    view\n    returns (uint);\n\n    function scalingFactor()\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much value _user holds\n    function getAmountOwed(address _user)\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32\n    function getOwedDividends(address _user)\n    external\n    constant\n    returns (uint);\n\n    function assetIncome()\n    external\n    view\n    returns (uint);\n\n    function getERC20()\n    external\n    view\n    returns (address);\n\n    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n    event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        6044
      ]
    },
    "id": 6045,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5919,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6044,
        "linearizedBaseContracts": [
          6044
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5928,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5921,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "694:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5920,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:7:19",
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
                  "id": 5923,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "707:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5922,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "693:27:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5926,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "747:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5925,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "747:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "746:14:19"
            },
            "scope": 6044,
            "src": "676:85:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5939,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5930,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1162:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:19",
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
                  "id": 5932,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1177:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1177:7:19",
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
                  "id": 5934,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1190:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5933,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1190:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:42:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5937,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1230:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5936,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1230:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1229:14:19"
            },
            "scope": 6044,
            "src": "1140:104:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5948,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5941,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "1541:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1541:7:19",
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
                  "id": 5943,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "1559:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5942,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1540:32:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5946,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "1599:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5945,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1598:14:19"
            },
            "scope": 6044,
            "src": "1524:89:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5959,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5950,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "1960:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5949,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:19",
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
                  "id": 5952,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "1978:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5951,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1978:4:19",
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
                  "id": 5954,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "1992:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5953,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1992:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1959:45:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5957,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "2031:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5956,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2030:14:19"
            },
            "scope": 6044,
            "src": "1936:109:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5964,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2068:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5962,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5964,
                  "src": "2097:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5961,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2096:6:19"
            },
            "scope": 6044,
            "src": "2051:52:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5969,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5965,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2210:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5967,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5969,
                  "src": "2239:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5966,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2238:14:19"
            },
            "scope": 6044,
            "src": "2181:72:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5978,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5971,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 5978,
                  "src": "2359:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2359:7:19",
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
                  "id": 5973,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5978,
                  "src": "2381:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2381:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2358:40:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5976,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5978,
                  "src": "2434:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5975,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2434:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2433:6:19"
            },
            "scope": 6044,
            "src": "2340:100:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5983,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2525:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5981,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 5983,
                  "src": "2563:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5980,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2563:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2562:18:19"
            },
            "scope": 6044,
            "src": "2505:76:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5990,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5985,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 5990,
                  "src": "2655:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2655:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2654:22:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5988,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 5990,
                  "src": "2712:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5987,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2712:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2711:14:19"
            },
            "scope": 6044,
            "src": "2636:90:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5995,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5991,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2794:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5993,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5995,
                  "src": "2832:6:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5992,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2832:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2831:8:19"
            },
            "scope": 6044,
            "src": "2777:63:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6000,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5996,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2868:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5998,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6000,
                  "src": "2906:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5997,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2905:6:19"
            },
            "scope": 6044,
            "src": "2846:66:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6005,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2940:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6003,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6005,
                  "src": "2978:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6002,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2978:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2977:6:19"
            },
            "scope": 6044,
            "src": "2918:66:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6012,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6007,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6012,
                  "src": "3066:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6006,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3066:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3065:15:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6010,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6012,
                  "src": "3116:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6009,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3116:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:6:19"
            },
            "scope": 6044,
            "src": "3043:79:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6019,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6014,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6019,
                  "src": "3241:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6013,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3241:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3240:15:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6017,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6019,
                  "src": "3295:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6016,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3295:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3294:6:19"
            },
            "scope": 6044,
            "src": "3215:86:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6024,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6020,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3327:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6022,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6024,
                  "src": "3365:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6021,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3365:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3364:6:19"
            },
            "scope": 6044,
            "src": "3307:64:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6029,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6025,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3394:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6027,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6029,
                  "src": "3432:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3432:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3431:9:19"
            },
            "scope": 6044,
            "src": "3377:64:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6035,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6031,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6035,
                  "src": "3471:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6030,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3471:7:19",
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
                  "id": 6033,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6035,
                  "src": "3496:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6032,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3496:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3470:46:19"
            },
            "src": "3447:70:19"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6043,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6037,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 6043,
                  "src": "3547:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6036,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3547:4:19",
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
                  "id": 6039,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 6043,
                  "src": "3560:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3560:7:19",
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
                  "id": 6041,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6043,
                  "src": "3578:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6040,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3578:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3546:45:19"
            },
            "src": "3522:70:19"
          }
        ],
        "scope": 6045,
        "src": "399:3196:19"
      }
    ],
    "src": "0:3596:19"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        6044
      ]
    },
    "id": 6045,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5919,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6044,
        "linearizedBaseContracts": [
          6044
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5928,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5921,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "694:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5920,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:7:19",
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
                  "id": 5923,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "707:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5922,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "693:27:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5926,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "747:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5925,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "747:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "746:14:19"
            },
            "scope": 6044,
            "src": "676:85:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5939,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5930,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1162:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:19",
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
                  "id": 5932,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1177:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1177:7:19",
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
                  "id": 5934,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1190:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5933,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1190:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:42:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5937,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5939,
                  "src": "1230:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5936,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1230:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1229:14:19"
            },
            "scope": 6044,
            "src": "1140:104:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5948,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5941,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "1541:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1541:7:19",
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
                  "id": 5943,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "1559:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5942,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1540:32:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5946,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "1599:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5945,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1598:14:19"
            },
            "scope": 6044,
            "src": "1524:89:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5959,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5950,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "1960:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5949,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:19",
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
                  "id": 5952,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "1978:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5951,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1978:4:19",
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
                  "id": 5954,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "1992:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5953,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1992:5:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1959:45:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5957,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5959,
                  "src": "2031:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5956,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2030:14:19"
            },
            "scope": 6044,
            "src": "1936:109:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5964,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2068:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5962,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5964,
                  "src": "2097:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5961,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2096:6:19"
            },
            "scope": 6044,
            "src": "2051:52:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5969,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5965,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2210:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5967,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5969,
                  "src": "2239:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5966,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2238:14:19"
            },
            "scope": 6044,
            "src": "2181:72:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5978,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5971,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 5978,
                  "src": "2359:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2359:7:19",
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
                  "id": 5973,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5978,
                  "src": "2381:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5972,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2381:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2358:40:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5976,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5978,
                  "src": "2434:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5975,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2434:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2433:6:19"
            },
            "scope": 6044,
            "src": "2340:100:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5983,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5979,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2525:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5981,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 5983,
                  "src": "2563:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5980,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2563:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2562:18:19"
            },
            "scope": 6044,
            "src": "2505:76:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5990,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5985,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 5990,
                  "src": "2655:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2655:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2654:22:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5988,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 5990,
                  "src": "2712:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5987,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2712:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2711:14:19"
            },
            "scope": 6044,
            "src": "2636:90:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5995,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5991,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2794:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5993,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5995,
                  "src": "2832:6:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5992,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2832:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2831:8:19"
            },
            "scope": 6044,
            "src": "2777:63:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6000,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5996,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2868:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 5999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5998,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6000,
                  "src": "2906:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5997,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2905:6:19"
            },
            "scope": 6044,
            "src": "2846:66:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6005,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2940:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6003,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6005,
                  "src": "2978:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6002,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2978:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2977:6:19"
            },
            "scope": 6044,
            "src": "2918:66:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6012,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6007,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6012,
                  "src": "3066:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6006,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3066:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3065:15:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6010,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6012,
                  "src": "3116:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6009,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3116:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:6:19"
            },
            "scope": 6044,
            "src": "3043:79:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6019,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6014,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6019,
                  "src": "3241:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6013,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3241:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3240:15:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6017,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6019,
                  "src": "3295:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6016,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3295:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3294:6:19"
            },
            "scope": 6044,
            "src": "3215:86:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6024,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6020,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3327:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6022,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6024,
                  "src": "3365:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6021,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3365:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3364:6:19"
            },
            "scope": 6044,
            "src": "3307:64:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6029,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6025,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3394:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6027,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6029,
                  "src": "3432:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3432:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3431:9:19"
            },
            "scope": 6044,
            "src": "3377:64:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6035,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6031,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6035,
                  "src": "3471:23:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6030,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3471:7:19",
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
                  "id": 6033,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6035,
                  "src": "3496:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6032,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3496:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3470:46:19"
            },
            "src": "3447:70:19"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6043,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6037,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 6043,
                  "src": "3547:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6036,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3547:4:19",
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
                  "id": 6039,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 6043,
                  "src": "3560:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3560:7:19",
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
                  "id": 6041,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6043,
                  "src": "3578:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6040,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3578:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3546:45:19"
            },
            "src": "3522:70:19"
          }
        ],
        "scope": 6045,
        "src": "399:3196:19"
      }
    ],
    "src": "0:3596:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.450Z"
}