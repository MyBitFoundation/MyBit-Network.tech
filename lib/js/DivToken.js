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
        6628
      ]
    },
    "id": 6629,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6503,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:22"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6628,
        "linearizedBaseContracts": [
          6628
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6512,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6505,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6512,
                  "src": "694:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6504,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:7:22",
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
                  "id": 6507,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6512,
                  "src": "707:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6506,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "693:27:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6510,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6512,
                  "src": "747:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6509,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "747:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "746:14:22"
            },
            "scope": 6628,
            "src": "676:85:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6523,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6514,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1162:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6513,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:22",
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
                  "id": 6516,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1177:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6515,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1177:7:22",
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
                  "id": 6518,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1190:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6517,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1190:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:42:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6521,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1230:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6520,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1230:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1229:14:22"
            },
            "scope": 6628,
            "src": "1140:104:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6532,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6525,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6532,
                  "src": "1541:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1541:7:22",
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
                  "id": 6527,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6532,
                  "src": "1559:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6526,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1540:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6530,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6532,
                  "src": "1599:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6529,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1598:14:22"
            },
            "scope": 6628,
            "src": "1524:89:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6543,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6534,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "1960:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:22",
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
                  "id": 6536,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "1978:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6535,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1978:4:22",
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
                  "id": 6538,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "1992:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6537,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1992:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1959:45:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6541,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "2031:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6540,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2030:14:22"
            },
            "scope": 6628,
            "src": "1936:109:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6548,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6544,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2068:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6546,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6548,
                  "src": "2097:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6545,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2096:6:22"
            },
            "scope": 6628,
            "src": "2051:52:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6553,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2210:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6551,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6553,
                  "src": "2239:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6550,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2238:14:22"
            },
            "scope": 6628,
            "src": "2181:72:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6562,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6555,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6562,
                  "src": "2359:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2359:7:22",
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
                  "id": 6557,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6562,
                  "src": "2381:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6556,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2381:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2358:40:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6560,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6562,
                  "src": "2434:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6559,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2434:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2433:6:22"
            },
            "scope": 6628,
            "src": "2340:100:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6567,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6563,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2525:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6565,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "2563:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6564,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2563:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2562:18:22"
            },
            "scope": 6628,
            "src": "2505:76:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6574,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6569,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "2655:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6568,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2655:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2654:22:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6572,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "2712:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6571,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2712:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2711:14:22"
            },
            "scope": 6628,
            "src": "2636:90:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6579,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2794:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6577,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6579,
                  "src": "2832:6:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6576,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2832:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2831:8:22"
            },
            "scope": 6628,
            "src": "2777:63:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6584,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2868:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6584,
                  "src": "2906:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6581,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2905:6:22"
            },
            "scope": 6628,
            "src": "2846:66:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6589,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2940:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6589,
                  "src": "2978:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6586,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2978:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2977:6:22"
            },
            "scope": 6628,
            "src": "2918:66:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6596,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6591,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6596,
                  "src": "3066:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6590,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3066:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3065:15:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6594,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6596,
                  "src": "3116:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6593,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3116:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:6:22"
            },
            "scope": 6628,
            "src": "3043:79:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6603,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6598,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6603,
                  "src": "3241:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3241:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3240:15:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6601,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6603,
                  "src": "3295:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6600,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3295:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3294:6:22"
            },
            "scope": 6628,
            "src": "3215:86:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6608,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3327:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6608,
                  "src": "3365:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3365:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3364:6:22"
            },
            "scope": 6628,
            "src": "3307:64:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6613,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3394:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6611,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6613,
                  "src": "3432:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6610,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3432:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3431:9:22"
            },
            "scope": 6628,
            "src": "3377:64:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6619,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6615,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6619,
                  "src": "3471:23:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6614,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3471:7:22",
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
                  "id": 6617,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6619,
                  "src": "3496:19:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6616,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3496:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3470:46:22"
            },
            "src": "3447:70:22"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6627,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6621,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 6627,
                  "src": "3547:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6620,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3547:4:22",
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
                  "id": 6623,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 6627,
                  "src": "3560:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3560:7:22",
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
                  "id": 6625,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6627,
                  "src": "3578:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6624,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3578:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3546:45:22"
            },
            "src": "3522:70:22"
          }
        ],
        "scope": 6629,
        "src": "399:3196:22"
      }
    ],
    "src": "0:3596:22"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        6628
      ]
    },
    "id": 6629,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6503,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:22"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6628,
        "linearizedBaseContracts": [
          6628
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6512,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6505,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6512,
                  "src": "694:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6504,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "694:7:22",
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
                  "id": 6507,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6512,
                  "src": "707:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6506,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "693:27:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6510,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6512,
                  "src": "747:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6509,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "747:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "746:14:22"
            },
            "scope": 6628,
            "src": "676:85:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6523,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6514,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1162:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6513,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1162:7:22",
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
                  "id": 6516,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1177:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6515,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1177:7:22",
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
                  "id": 6518,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1190:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6517,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1190:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1161:42:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6522,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6521,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6523,
                  "src": "1230:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6520,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1230:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1229:14:22"
            },
            "scope": 6628,
            "src": "1140:104:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6532,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6525,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6532,
                  "src": "1541:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1541:7:22",
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
                  "id": 6527,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6532,
                  "src": "1559:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6526,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1559:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1540:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6531,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6530,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6532,
                  "src": "1599:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6529,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1598:14:22"
            },
            "scope": 6628,
            "src": "1524:89:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6543,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6534,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "1960:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:22",
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
                  "id": 6536,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "1978:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6535,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1978:4:22",
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
                  "id": 6538,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "1992:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6537,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1992:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1959:45:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6541,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 6543,
                  "src": "2031:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6540,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2030:14:22"
            },
            "scope": 6628,
            "src": "1936:109:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6548,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6544,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2068:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6546,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6548,
                  "src": "2097:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6545,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2096:6:22"
            },
            "scope": 6628,
            "src": "2051:52:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6553,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6549,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2210:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6551,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6553,
                  "src": "2239:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6550,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2238:14:22"
            },
            "scope": 6628,
            "src": "2181:72:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6562,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6555,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6562,
                  "src": "2359:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2359:7:22",
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
                  "id": 6557,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6562,
                  "src": "2381:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6556,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2381:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2358:40:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6560,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6562,
                  "src": "2434:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6559,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2434:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2433:6:22"
            },
            "scope": 6628,
            "src": "2340:100:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6567,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6563,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2525:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6565,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "2563:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6564,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2563:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2562:18:22"
            },
            "scope": 6628,
            "src": "2505:76:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6574,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6569,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "2655:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6568,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2655:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2654:22:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6572,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 6574,
                  "src": "2712:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6571,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2712:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2711:14:22"
            },
            "scope": 6628,
            "src": "2636:90:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6579,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2794:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6577,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6579,
                  "src": "2832:6:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6576,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2832:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2831:8:22"
            },
            "scope": 6628,
            "src": "2777:63:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6584,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2868:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6584,
                  "src": "2906:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6581,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2905:6:22"
            },
            "scope": 6628,
            "src": "2846:66:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6589,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2940:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6589,
                  "src": "2978:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6586,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2978:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2977:6:22"
            },
            "scope": 6628,
            "src": "2918:66:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6596,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6591,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6596,
                  "src": "3066:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6590,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3066:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3065:15:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6594,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6596,
                  "src": "3116:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6593,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3116:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3115:6:22"
            },
            "scope": 6628,
            "src": "3043:79:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6603,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6598,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 6603,
                  "src": "3241:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3241:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3240:15:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6601,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6603,
                  "src": "3295:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6600,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3295:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3294:6:22"
            },
            "scope": 6628,
            "src": "3215:86:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6608,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6604,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3327:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6608,
                  "src": "3365:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3365:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3364:6:22"
            },
            "scope": 6628,
            "src": "3307:64:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6613,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3394:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 6612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6611,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6613,
                  "src": "3432:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6610,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3432:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3431:9:22"
            },
            "scope": 6628,
            "src": "3377:64:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6619,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6618,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6615,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6619,
                  "src": "3471:23:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6614,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3471:7:22",
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
                  "id": 6617,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6619,
                  "src": "3496:19:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6616,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3496:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3470:46:22"
            },
            "src": "3447:70:22"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 6627,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6621,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 6627,
                  "src": "3547:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6620,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3547:4:22",
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
                  "id": 6623,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 6627,
                  "src": "3560:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3560:7:22",
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
                  "id": 6625,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6627,
                  "src": "3578:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6624,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3578:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3546:45:22"
            },
            "src": "3522:70:22"
          }
        ],
        "scope": 6629,
        "src": "399:3196:22"
      }
    ],
    "src": "0:3596:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.819Z"
}