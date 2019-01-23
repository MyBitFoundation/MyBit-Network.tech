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
        8402
      ]
    },
    "id": 8403,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8263,
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
        "id": 8402,
        "linearizedBaseContracts": [
          8402
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8268,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8265,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 8268,
                  "src": "103:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8264,
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
              "id": 8267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:32"
            },
            "scope": 8402,
            "src": "75:65:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8275,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8270,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8275,
                  "src": "232:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8269,
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
                  "id": 8272,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8275,
                  "src": "246:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8271,
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
              "id": 8274,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:32"
            },
            "scope": 8402,
            "src": "212:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8282,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8277,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8282,
                  "src": "298:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8276,
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
                  "id": 8279,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8282,
                  "src": "312:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8278,
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
              "id": 8281,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:32"
            },
            "scope": 8402,
            "src": "281:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8284,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8289,
                  "src": "363:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8283,
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
                  "id": 8286,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8289,
                  "src": "377:13:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8285,
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
              "id": 8288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:32"
            },
            "scope": 8402,
            "src": "344:61:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8291,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8296,
                  "src": "429:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8290,
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
                  "id": 8293,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8296,
                  "src": "443:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8292,
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
              "id": 8295,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:32"
            },
            "scope": 8402,
            "src": "411:59:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8303,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8298,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8303,
                  "src": "496:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8297,
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
                  "id": 8300,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8303,
                  "src": "510:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8299,
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
              "id": 8302,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:32"
            },
            "scope": 8402,
            "src": "476:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8310,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8305,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8310,
                  "src": "562:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8304,
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
                  "id": 8307,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8310,
                  "src": "576:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8306,
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
              "id": 8309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:32"
            },
            "scope": 8402,
            "src": "545:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8317,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8312,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8317,
                  "src": "624:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8311,
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
                  "id": 8314,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8317,
                  "src": "638:10:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8313,
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
              "id": 8316,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:32"
            },
            "scope": 8402,
            "src": "608:55:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8322,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8319,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8322,
                  "src": "755:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8318,
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
              "id": 8321,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:32"
            },
            "scope": 8402,
            "src": "732:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8327,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8324,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8327,
                  "src": "808:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8323,
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
              "id": 8326,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:32"
            },
            "scope": 8402,
            "src": "788:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8332,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8329,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8332,
                  "src": "863:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8328,
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
              "id": 8331,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:32"
            },
            "scope": 8402,
            "src": "841:49:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8337,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8334,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8337,
                  "src": "917:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8333,
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
              "id": 8336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:32"
            },
            "scope": 8402,
            "src": "896:48:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8342,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8339,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8342,
                  "src": "973:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8338,
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
              "id": 8341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:32"
            },
            "scope": 8402,
            "src": "950:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8347,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8344,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8347,
                  "src": "1026:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8343,
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
              "id": 8346,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:32"
            },
            "scope": 8402,
            "src": "1006:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8352,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8349,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8352,
                  "src": "1078:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8348,
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
              "id": 8351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:32"
            },
            "scope": 8402,
            "src": "1059:46:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8359,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8354,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8359,
                  "src": "1194:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8353,
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
              "id": 8358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8357,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8359,
                  "src": "1243:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8356,
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
            "scope": 8402,
            "src": "1173:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8366,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8361,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8366,
                  "src": "1278:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8360,
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
              "id": 8365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8364,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8366,
                  "src": "1327:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8363,
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
            "scope": 8402,
            "src": "1255:80:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8373,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8368,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8373,
                  "src": "1365:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8367,
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
              "id": 8372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8371,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8373,
                  "src": "1414:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8370,
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
            "scope": 8402,
            "src": "1341:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8380,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8375,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8380,
                  "src": "1451:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8374,
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
              "id": 8379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8378,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8380,
                  "src": "1500:5:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8377,
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
            "scope": 8402,
            "src": "1429:78:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8387,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8382,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8387,
                  "src": "1537:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8381,
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
              "id": 8386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8385,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8387,
                  "src": "1586:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8384,
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
            "scope": 8402,
            "src": "1513:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8394,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8389,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8394,
                  "src": "1622:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8388,
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
              "id": 8393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8392,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8394,
                  "src": "1671:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8391,
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
            "scope": 8402,
            "src": "1601:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8401,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8396,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8401,
                  "src": "1703:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8395,
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
              "id": 8400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8399,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8401,
                  "src": "1752:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8398,
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
            "scope": 8402,
            "src": "1683:75:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8403,
        "src": "48:1712:32"
      }
    ],
    "src": "0:1761:32"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        8402
      ]
    },
    "id": 8403,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8263,
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
        "id": 8402,
        "linearizedBaseContracts": [
          8402
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8268,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8265,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 8268,
                  "src": "103:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8264,
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
              "id": 8267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:32"
            },
            "scope": 8402,
            "src": "75:65:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8275,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8270,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8275,
                  "src": "232:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8269,
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
                  "id": 8272,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8275,
                  "src": "246:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8271,
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
              "id": 8274,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:32"
            },
            "scope": 8402,
            "src": "212:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8282,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8277,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8282,
                  "src": "298:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8276,
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
                  "id": 8279,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8282,
                  "src": "312:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8278,
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
              "id": 8281,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:32"
            },
            "scope": 8402,
            "src": "281:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8284,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8289,
                  "src": "363:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8283,
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
                  "id": 8286,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8289,
                  "src": "377:13:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8285,
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
              "id": 8288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:32"
            },
            "scope": 8402,
            "src": "344:61:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8296,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8291,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8296,
                  "src": "429:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8290,
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
                  "id": 8293,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8296,
                  "src": "443:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8292,
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
              "id": 8295,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:32"
            },
            "scope": 8402,
            "src": "411:59:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8303,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8298,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8303,
                  "src": "496:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8297,
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
                  "id": 8300,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8303,
                  "src": "510:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8299,
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
              "id": 8302,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:32"
            },
            "scope": 8402,
            "src": "476:63:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8310,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8305,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8310,
                  "src": "562:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8304,
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
                  "id": 8307,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8310,
                  "src": "576:11:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8306,
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
              "id": 8309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:32"
            },
            "scope": 8402,
            "src": "545:57:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8317,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8312,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8317,
                  "src": "624:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8311,
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
                  "id": 8314,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8317,
                  "src": "638:10:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8313,
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
              "id": 8316,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:32"
            },
            "scope": 8402,
            "src": "608:55:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8322,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8319,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8322,
                  "src": "755:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8318,
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
              "id": 8321,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:32"
            },
            "scope": 8402,
            "src": "732:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8327,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8324,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8327,
                  "src": "808:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8323,
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
              "id": 8326,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:32"
            },
            "scope": 8402,
            "src": "788:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8332,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8329,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8332,
                  "src": "863:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8328,
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
              "id": 8331,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:32"
            },
            "scope": 8402,
            "src": "841:49:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8337,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8334,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8337,
                  "src": "917:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8333,
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
              "id": 8336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:32"
            },
            "scope": 8402,
            "src": "896:48:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8342,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8339,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8342,
                  "src": "973:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8338,
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
              "id": 8341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:32"
            },
            "scope": 8402,
            "src": "950:50:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8347,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8345,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8344,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8347,
                  "src": "1026:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8343,
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
              "id": 8346,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:32"
            },
            "scope": 8402,
            "src": "1006:47:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8352,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8349,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8352,
                  "src": "1078:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8348,
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
              "id": 8351,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:32"
            },
            "scope": 8402,
            "src": "1059:46:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8359,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8354,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8359,
                  "src": "1194:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8353,
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
              "id": 8358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8357,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8359,
                  "src": "1243:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8356,
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
            "scope": 8402,
            "src": "1173:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8366,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8361,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8366,
                  "src": "1278:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8360,
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
              "id": 8365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8364,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8366,
                  "src": "1327:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8363,
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
            "scope": 8402,
            "src": "1255:80:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8373,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8368,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8373,
                  "src": "1365:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8367,
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
              "id": 8372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8371,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8373,
                  "src": "1414:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8370,
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
            "scope": 8402,
            "src": "1341:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8380,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8375,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8380,
                  "src": "1451:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8374,
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
              "id": 8379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8378,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8380,
                  "src": "1500:5:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8377,
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
            "scope": 8402,
            "src": "1429:78:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8387,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8382,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8387,
                  "src": "1537:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8381,
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
              "id": 8386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8385,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8387,
                  "src": "1586:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8384,
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
            "scope": 8402,
            "src": "1513:82:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8394,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8389,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8394,
                  "src": "1622:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8388,
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
              "id": 8393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8392,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8394,
                  "src": "1671:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8391,
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
            "scope": 8402,
            "src": "1601:76:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8401,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8396,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 8401,
                  "src": "1703:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8395,
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
              "id": 8400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8399,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8401,
                  "src": "1752:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8398,
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
            "scope": 8402,
            "src": "1683:75:32",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8403,
        "src": "48:1712:32"
      }
    ],
    "src": "0:1761:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.353Z"
}