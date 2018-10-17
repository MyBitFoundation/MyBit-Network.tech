"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DivTokenERC20 = exports.DivTokenERC20 = 
{
  "contractName": "DivTokenERC20",
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
          "name": "_difference",
          "type": "uint256"
        }
      ],
      "name": "LogCheckBalance",
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
      "constant": false,
      "inputs": [],
      "name": "checkForTransfers",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity 0.4.24;\n\n// @title ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\n// TODO: Suicide function\ninterface DivTokenERC20{\n\n    // @notice Transfer _amount tokens to address _to.\n    // @dev Sender must have enough tokens. Cannot send to 0x0.\n    // @param (address) _to = The address which will receive the tokens\n    // @param (uint) _amount = The amount of tokens to send\n    function transfer(address _to, uint _amount) external returns (bool success);\n\n    // @notice A 3rd party can transfer tokens if user approves them to do so\n    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.\n    // @param (address) _from = The address who approved msg.sender to spend tokens\n    // @param (address) _to = The address who will receive the tokens\n    // @param (uint) _amount = The number of tokens to send\n    function transferFrom(address _from, address _to, uint _amount) external returns (bool success);\n\n    // @notice approves a 3rd party to transfer msg.sender's tokens on behalf of him/her\n    // @param (address) _spender = The address of who msg.sender approves to spend tokens on their behalf\n    // @param (uint) _amount = The upper limit of how many tokens can be spent\n    function approve(address _spender, uint _amount) external returns (bool success);\n\n    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens\n    // @param (address) _spender = The contract to call after approval is done\n    // @param (uint) _amount = Number of tokens to send\n    // @param (bytes) _data = Bytes data to send along with the contract call\n    function approveAndCall(address _spender, uint _amount, bytes _data) external returns (bool success);\n\n    function issueDividends(uint _amount) external;\n\n    // @notice Updates incomeClaimed, sends all wei to the token holder\n    function collectOwedDividends() external returns (uint _amount);\n\n    //In case a user transferred a token directly to this contract\n    //anyone can run this function to clean up the balances\n    //and distribute the difference to token holders\n    function checkForTransfers() external returns (uint);\n\n\n    // ------------------------------------------------------------------------\n    //                           View functions\n    // ------------------------------------------------------------------------\n\n    // @notice Returns amount of tokens _spender is allowed to transfer or burn\n    function allowance(address _tokenHolder, address _spender) external view returns (uint);\n\n    // @notice Returns the number of tokens in circulation\n    function totalSupply() external view returns (uint tokenSupply);\n\n    // @notice Returns the token balance of user\n    function balanceOf(address _tokenHolder) external view returns (uint balance);\n\n    function tokenURI() external view returns (string);\n\n    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32\n    function getOwedDividends(address _user) external constant returns (uint);\n\n    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n    event LogCheckBalance(uint _difference);\n    event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivTokenERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivTokenERC20.sol",
    "exportedSymbols": {
      "DivTokenERC20": [
        934
      ]
    },
    "id": 935,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 827,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 934,
        "linearizedBaseContracts": [
          934
        ],
        "name": "DivTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 836,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 829,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "697:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:2",
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
                  "id": 831,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "710:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "696:27:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 834,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "742:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 833,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "741:14:2"
            },
            "scope": 934,
            "src": "679:77:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 838,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1157:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:2",
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
                  "id": 840,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1172:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 839,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1172:7:2",
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
                  "id": 842,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1185:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 841,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1156:42:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 845,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1217:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 844,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1217:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1216:14:2"
            },
            "scope": 934,
            "src": "1135:96:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 856,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 849,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 856,
                  "src": "1528:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 848,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1528:7:2",
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
                  "id": 851,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 856,
                  "src": "1546:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 850,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1546:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1527:32:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 854,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 856,
                  "src": "1578:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 853,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1577:14:2"
            },
            "scope": 934,
            "src": "1511:81:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 867,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 858,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "1938:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1938:7:2",
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
                  "id": 860,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "1956:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 859,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1956:4:2",
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
                  "id": 862,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "1970:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 861,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1970:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1937:45:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 865,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "2001:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 864,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2001:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2000:14:2"
            },
            "scope": 934,
            "src": "1914:101:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 872,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 869,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 872,
                  "src": "2045:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 868,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2044:14:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 871,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2067:0:2"
            },
            "scope": 934,
            "src": "2021:47:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 877,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 873,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2175:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 875,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 877,
                  "src": "2196:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 874,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2196:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2195:14:2"
            },
            "scope": 934,
            "src": "2146:64:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 882,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "checkForTransfers",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2422:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 880,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 882,
                  "src": "2443:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 879,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2443:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2442:6:2"
            },
            "scope": 934,
            "src": "2396:53:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 884,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "2764:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2764:7:2",
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
                  "id": 886,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "2786:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2786:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2763:40:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 889,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "2827:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 888,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2827:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2826:6:2"
            },
            "scope": 934,
            "src": "2745:88:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 896,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2918:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 894,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 896,
                  "src": "2944:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 893,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2944:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2943:18:2"
            },
            "scope": 934,
            "src": "2898:64:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 903,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 899,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 898,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 903,
                  "src": "3036:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 897,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3036:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3035:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 901,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 903,
                  "src": "3081:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 900,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3081:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3080:14:2"
            },
            "scope": 934,
            "src": "3017:78:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 908,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 904,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3118:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 906,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 908,
                  "src": "3144:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 905,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3144:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3143:8:2"
            },
            "scope": 934,
            "src": "3101:51:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 915,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 910,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 915,
                  "src": "3271:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3271:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:15:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 913,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 915,
                  "src": "3313:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 912,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3313:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3312:6:2"
            },
            "scope": 934,
            "src": "3245:74:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 921,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 917,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 921,
                  "src": "3349:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:2",
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
                  "id": 919,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 921,
                  "src": "3374:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 918,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3374:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3348:46:2"
            },
            "src": "3325:70:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 925,
            "name": "LogCheckBalance",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 923,
                  "indexed": false,
                  "name": "_difference",
                  "nodeType": "VariableDeclaration",
                  "scope": 925,
                  "src": "3422:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 922,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3422:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3421:18:2"
            },
            "src": "3400:40:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 933,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 927,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 933,
                  "src": "3470:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 926,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3470:4:2",
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
                  "id": 929,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 933,
                  "src": "3483:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 928,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3483:7:2",
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
                  "id": 931,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 933,
                  "src": "3501:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 930,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3501:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3469:45:2"
            },
            "src": "3445:70:2"
          }
        ],
        "scope": 935,
        "src": "398:3120:2"
      }
    ],
    "src": "0:3519:2"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivTokenERC20.sol",
    "exportedSymbols": {
      "DivTokenERC20": [
        934
      ]
    },
    "id": 935,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 827,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 934,
        "linearizedBaseContracts": [
          934
        ],
        "name": "DivTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 836,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 829,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "697:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:2",
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
                  "id": 831,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "710:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 830,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "696:27:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 834,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 836,
                  "src": "742:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 833,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "741:14:2"
            },
            "scope": 934,
            "src": "679:77:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 838,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1157:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:2",
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
                  "id": 840,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1172:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 839,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1172:7:2",
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
                  "id": 842,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1185:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 841,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1156:42:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 845,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 847,
                  "src": "1217:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 844,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1217:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1216:14:2"
            },
            "scope": 934,
            "src": "1135:96:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 856,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 849,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 856,
                  "src": "1528:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 848,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1528:7:2",
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
                  "id": 851,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 856,
                  "src": "1546:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 850,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1546:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1527:32:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 854,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 856,
                  "src": "1578:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 853,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1577:14:2"
            },
            "scope": 934,
            "src": "1511:81:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 867,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 858,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "1938:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1938:7:2",
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
                  "id": 860,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "1956:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 859,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1956:4:2",
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
                  "id": 862,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "1970:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 861,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1970:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1937:45:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 865,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 867,
                  "src": "2001:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 864,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2001:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2000:14:2"
            },
            "scope": 934,
            "src": "1914:101:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 872,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 869,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 872,
                  "src": "2045:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 868,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2044:14:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 871,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2067:0:2"
            },
            "scope": 934,
            "src": "2021:47:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 877,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 873,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2175:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 875,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 877,
                  "src": "2196:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 874,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2196:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2195:14:2"
            },
            "scope": 934,
            "src": "2146:64:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 882,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "checkForTransfers",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2422:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 880,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 882,
                  "src": "2443:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 879,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2443:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2442:6:2"
            },
            "scope": 934,
            "src": "2396:53:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 884,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "2764:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2764:7:2",
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
                  "id": 886,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "2786:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2786:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2763:40:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 889,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "2827:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 888,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2827:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2826:6:2"
            },
            "scope": 934,
            "src": "2745:88:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 896,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2918:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 894,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 896,
                  "src": "2944:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 893,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2944:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2943:18:2"
            },
            "scope": 934,
            "src": "2898:64:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 903,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 899,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 898,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 903,
                  "src": "3036:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 897,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3036:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3035:22:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 901,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 903,
                  "src": "3081:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 900,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3081:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3080:14:2"
            },
            "scope": 934,
            "src": "3017:78:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 908,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 904,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3118:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 907,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 906,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 908,
                  "src": "3144:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 905,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3144:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3143:8:2"
            },
            "scope": 934,
            "src": "3101:51:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 915,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 910,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 915,
                  "src": "3271:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3271:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:15:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 913,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 915,
                  "src": "3313:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 912,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3313:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3312:6:2"
            },
            "scope": 934,
            "src": "3245:74:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 921,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 917,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 921,
                  "src": "3349:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:7:2",
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
                  "id": 919,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 921,
                  "src": "3374:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 918,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3374:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3348:46:2"
            },
            "src": "3325:70:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 925,
            "name": "LogCheckBalance",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 923,
                  "indexed": false,
                  "name": "_difference",
                  "nodeType": "VariableDeclaration",
                  "scope": 925,
                  "src": "3422:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 922,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3422:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3421:18:2"
            },
            "src": "3400:40:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 933,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 927,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 933,
                  "src": "3470:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 926,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3470:4:2",
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
                  "id": 929,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 933,
                  "src": "3483:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 928,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3483:7:2",
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
                  "id": 931,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 933,
                  "src": "3501:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 930,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3501:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3469:45:2"
            },
            "src": "3445:70:2"
          }
        ],
        "scope": 935,
        "src": "398:3120:2"
      }
    ],
    "src": "0:3519:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-14T16:35:11.053Z"
}