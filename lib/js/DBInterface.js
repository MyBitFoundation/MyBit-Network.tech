"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DBInterface = exports.DBInterface = 
{
  "contractName": "DBInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contractManager",
          "type": "address"
        }
      ],
      "name": "setContractManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "address"
        }
      ],
      "name": "setAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setUint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "string"
        }
      ],
      "name": "setString",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bytes"
        }
      ],
      "name": "setBytes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bytes32"
        }
      ],
      "name": "setBytes32",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bool"
        }
      ],
      "name": "setBool",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "int256"
        }
      ],
      "name": "setInt",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteUint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteString",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteBytes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteBytes32",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteBool",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteInt",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "uintStorage",
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "stringStorage",
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "addressStorage",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "bytesStorage",
      "outputs": [
        {
          "name": "",
          "type": "bytes"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "bytes32Storage",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "boolStorage",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "intStorage",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\n// Database interface\ninterface DBInterface {\n\n  function setContractManager(address _contractManager)\n  external;\n\n    // --------------------Set Functions------------------------\n\n    function setAddress(bytes32 _key, address _value)\n    external;\n\n    function setUint(bytes32 _key, uint _value)\n    external;\n\n    function setString(bytes32 _key, string _value)\n    external;\n\n    function setBytes(bytes32 _key, bytes _value)\n    external;\n\n    function setBytes32(bytes32 _key, bytes32 _value)\n    external;\n\n    function setBool(bytes32 _key, bool _value)\n    external;\n\n    function setInt(bytes32 _key, int _value)\n    external;\n\n\n     // -------------- Deletion Functions ------------------\n\n    function deleteAddress(bytes32 _key)\n    external;\n\n    function deleteUint(bytes32 _key)\n    external;\n\n    function deleteString(bytes32 _key)\n    external;\n\n    function deleteBytes(bytes32 _key)\n    external;\n\n    function deleteBytes32(bytes32 _key)\n    external;\n\n    function deleteBool(bytes32 _key)\n    external;\n\n    function deleteInt(bytes32 _key)\n    external;\n\n    // ----------------Variable Getters---------------------\n\n    function uintStorage(bytes32 _key)\n    external\n    view\n    returns (uint);\n\n    function stringStorage(bytes32 _key)\n    external\n    view\n    returns (string);\n\n    function addressStorage(bytes32 _key)\n    external\n    view\n    returns (address);\n\n    function bytesStorage(bytes32 _key)\n    external\n    view\n    returns (bytes);\n\n    function bytes32Storage(bytes32 _key)\n    external\n    view\n    returns (bytes32);\n\n    function boolStorage(bytes32 _key)\n    external\n    view\n    returns (bool);\n\n    function intStorage(bytes32 _key)\n    external\n    view\n    returns (bool);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        9265
      ]
    },
    "id": 9266,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9126,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9265,
        "linearizedBaseContracts": [
          9265
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9131,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9128,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9131,
                  "src": "103:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9127,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9130,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:32"
            },
            "scope": 9265,
            "src": "75:65:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9138,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9133,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9138,
                  "src": "232:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9132,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9135,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9138,
                  "src": "246:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9137,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:32"
            },
            "scope": 9265,
            "src": "212:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9145,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9140,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9145,
                  "src": "298:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9139,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9142,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9145,
                  "src": "312:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:32"
            },
            "scope": 9265,
            "src": "281:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9152,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9147,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9152,
                  "src": "363:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9146,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9149,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9152,
                  "src": "377:13:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9148,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9151,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:32"
            },
            "scope": 9265,
            "src": "344:61:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9159,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9154,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9159,
                  "src": "429:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9153,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9156,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9159,
                  "src": "443:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9155,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:32"
            },
            "scope": 9265,
            "src": "411:59:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9166,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9161,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9166,
                  "src": "496:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9160,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9163,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9166,
                  "src": "510:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9162,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:32"
            },
            "scope": 9265,
            "src": "476:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9173,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9168,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9173,
                  "src": "562:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9167,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9170,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9173,
                  "src": "576:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9169,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:32"
            },
            "scope": 9265,
            "src": "545:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9180,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9175,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9180,
                  "src": "624:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9174,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9177,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9180,
                  "src": "638:10:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9176,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:32"
            },
            "scope": 9265,
            "src": "608:55:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9185,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9182,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9185,
                  "src": "755:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9181,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:32"
            },
            "scope": 9265,
            "src": "732:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9190,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9187,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9190,
                  "src": "808:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9186,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:32"
            },
            "scope": 9265,
            "src": "788:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9195,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9192,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "863:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9191,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:32"
            },
            "scope": 9265,
            "src": "841:49:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9197,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9200,
                  "src": "917:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9196,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9199,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:32"
            },
            "scope": 9265,
            "src": "896:48:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9205,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9202,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9205,
                  "src": "973:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9201,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:32"
            },
            "scope": 9265,
            "src": "950:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9210,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9207,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9210,
                  "src": "1026:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9206,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9209,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:32"
            },
            "scope": 9265,
            "src": "1006:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9215,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9212,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9215,
                  "src": "1078:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9211,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:32"
            },
            "scope": 9265,
            "src": "1059:46:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9222,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9217,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9222,
                  "src": "1194:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9216,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9220,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9222,
                  "src": "1243:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9219,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:32"
            },
            "scope": 9265,
            "src": "1173:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9229,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9224,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9229,
                  "src": "1278:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9223,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9227,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9229,
                  "src": "1327:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9226,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:32"
            },
            "scope": 9265,
            "src": "1255:80:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9236,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9231,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9236,
                  "src": "1365:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9230,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9234,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9236,
                  "src": "1414:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:32"
            },
            "scope": 9265,
            "src": "1341:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9243,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9238,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9243,
                  "src": "1451:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9237,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9241,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9243,
                  "src": "1500:5:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9240,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:32"
            },
            "scope": 9265,
            "src": "1429:78:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9250,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9245,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9250,
                  "src": "1537:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9244,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9248,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9250,
                  "src": "1586:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9247,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:32"
            },
            "scope": 9265,
            "src": "1513:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9257,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9252,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9257,
                  "src": "1622:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9251,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9255,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9257,
                  "src": "1671:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9254,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:32"
            },
            "scope": 9265,
            "src": "1601:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9264,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9259,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9264,
                  "src": "1703:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9258,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9262,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9264,
                  "src": "1752:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9261,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:32"
            },
            "scope": 9265,
            "src": "1683:75:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9266,
        "src": "48:1712:32"
      }
    ],
    "src": "0:1761:32"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        9265
      ]
    },
    "id": 9266,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9126,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9265,
        "linearizedBaseContracts": [
          9265
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9131,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9128,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9131,
                  "src": "103:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9127,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9130,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:32"
            },
            "scope": 9265,
            "src": "75:65:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9138,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9133,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9138,
                  "src": "232:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9132,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9135,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9138,
                  "src": "246:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9137,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:32"
            },
            "scope": 9265,
            "src": "212:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9145,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9140,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9145,
                  "src": "298:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9139,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9142,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9145,
                  "src": "312:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:32"
            },
            "scope": 9265,
            "src": "281:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9152,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9147,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9152,
                  "src": "363:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9146,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9149,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9152,
                  "src": "377:13:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9148,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9151,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:32"
            },
            "scope": 9265,
            "src": "344:61:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9159,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9154,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9159,
                  "src": "429:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9153,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9156,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9159,
                  "src": "443:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9155,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:32"
            },
            "scope": 9265,
            "src": "411:59:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9166,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9161,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9166,
                  "src": "496:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9160,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9163,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9166,
                  "src": "510:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9162,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:32"
            },
            "scope": 9265,
            "src": "476:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9173,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9168,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9173,
                  "src": "562:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9167,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9170,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9173,
                  "src": "576:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9169,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:32"
            },
            "scope": 9265,
            "src": "545:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9180,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9178,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9175,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9180,
                  "src": "624:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9174,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9177,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 9180,
                  "src": "638:10:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9176,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:32"
            },
            "scope": 9265,
            "src": "608:55:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9185,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9182,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9185,
                  "src": "755:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9181,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9184,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:32"
            },
            "scope": 9265,
            "src": "732:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9190,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9187,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9190,
                  "src": "808:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9186,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:32"
            },
            "scope": 9265,
            "src": "788:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9195,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9192,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "863:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9191,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:32"
            },
            "scope": 9265,
            "src": "841:49:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9198,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9197,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9200,
                  "src": "917:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9196,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9199,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:32"
            },
            "scope": 9265,
            "src": "896:48:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9205,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9202,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9205,
                  "src": "973:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9201,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:32"
            },
            "scope": 9265,
            "src": "950:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9210,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9207,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9210,
                  "src": "1026:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9206,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9209,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:32"
            },
            "scope": 9265,
            "src": "1006:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9215,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9212,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9215,
                  "src": "1078:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9211,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:32"
            },
            "scope": 9265,
            "src": "1059:46:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9222,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9217,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9222,
                  "src": "1194:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9216,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9220,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9222,
                  "src": "1243:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9219,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:32"
            },
            "scope": 9265,
            "src": "1173:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9229,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9224,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9229,
                  "src": "1278:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9223,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9228,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9227,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9229,
                  "src": "1327:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9226,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:32"
            },
            "scope": 9265,
            "src": "1255:80:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9236,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9231,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9236,
                  "src": "1365:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9230,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9234,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9236,
                  "src": "1414:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:32"
            },
            "scope": 9265,
            "src": "1341:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9243,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9238,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9243,
                  "src": "1451:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9237,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9241,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9243,
                  "src": "1500:5:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 9240,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:32"
            },
            "scope": 9265,
            "src": "1429:78:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9250,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9245,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9250,
                  "src": "1537:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9244,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9248,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9250,
                  "src": "1586:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9247,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:32"
            },
            "scope": 9265,
            "src": "1513:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9257,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9252,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9257,
                  "src": "1622:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9251,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9255,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9257,
                  "src": "1671:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9254,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:32"
            },
            "scope": 9265,
            "src": "1601:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9264,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9259,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 9264,
                  "src": "1703:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 9258,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9262,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9264,
                  "src": "1752:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9261,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:32"
            },
            "scope": 9265,
            "src": "1683:75:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9266,
        "src": "48:1712:32"
      }
    ],
    "src": "0:1761:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-11T22:02:15.740Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}