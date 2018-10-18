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
        6501
      ]
    },
    "id": 6502,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6362,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6501,
        "linearizedBaseContracts": [
          6501
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6367,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6364,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 6367,
                  "src": "103:24:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6363,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:21"
            },
            "scope": 6501,
            "src": "75:65:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6374,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6369,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6374,
                  "src": "232:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6368,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:21",
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
                  "id": 6371,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6374,
                  "src": "246:14:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6370,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6373,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:21"
            },
            "scope": 6501,
            "src": "212:63:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6381,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6376,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6381,
                  "src": "298:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6375,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:21",
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
                  "id": 6378,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6381,
                  "src": "312:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6377,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:21"
            },
            "scope": 6501,
            "src": "281:57:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6388,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6383,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6388,
                  "src": "363:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6382,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:21",
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
                  "id": 6385,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6388,
                  "src": "377:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6387,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:21"
            },
            "scope": 6501,
            "src": "344:61:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6395,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6390,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6395,
                  "src": "429:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6389,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:21",
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
                  "id": 6392,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6395,
                  "src": "443:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6391,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6394,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:21"
            },
            "scope": 6501,
            "src": "411:59:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6402,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6397,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6402,
                  "src": "496:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6396,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:21",
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
                  "id": 6399,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6402,
                  "src": "510:14:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6398,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:21"
            },
            "scope": 6501,
            "src": "476:63:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6409,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6404,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6409,
                  "src": "562:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6403,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:21",
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
                  "id": 6406,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6409,
                  "src": "576:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6405,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:21"
            },
            "scope": 6501,
            "src": "545:57:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6416,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6411,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6416,
                  "src": "624:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6410,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:21",
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
                  "id": 6413,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6416,
                  "src": "638:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 6412,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:21"
            },
            "scope": 6501,
            "src": "608:55:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6421,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6418,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6421,
                  "src": "755:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6417,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:21"
            },
            "scope": 6501,
            "src": "732:50:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6426,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6423,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6426,
                  "src": "808:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6422,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6425,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:21"
            },
            "scope": 6501,
            "src": "788:47:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6431,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6428,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6431,
                  "src": "863:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6427,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6430,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:21"
            },
            "scope": 6501,
            "src": "841:49:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6436,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6433,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6436,
                  "src": "917:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6432,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6435,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:21"
            },
            "scope": 6501,
            "src": "896:48:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6441,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6438,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6441,
                  "src": "973:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6437,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:21"
            },
            "scope": 6501,
            "src": "950:50:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6446,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6443,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6446,
                  "src": "1026:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6442,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:21"
            },
            "scope": 6501,
            "src": "1006:47:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6451,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6448,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "1078:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6447,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:21"
            },
            "scope": 6501,
            "src": "1059:46:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6458,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6453,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6458,
                  "src": "1194:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6452,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6456,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6458,
                  "src": "1243:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6455,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:21"
            },
            "scope": 6501,
            "src": "1173:76:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6465,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6460,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6465,
                  "src": "1278:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6459,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6463,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6465,
                  "src": "1327:6:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6462,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:21"
            },
            "scope": 6501,
            "src": "1255:80:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6472,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6467,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6472,
                  "src": "1365:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6466,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6470,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6472,
                  "src": "1414:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:21"
            },
            "scope": 6501,
            "src": "1341:82:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6479,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6474,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6479,
                  "src": "1451:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6473,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6477,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6479,
                  "src": "1500:5:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6476,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:21"
            },
            "scope": 6501,
            "src": "1429:78:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6486,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6481,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6486,
                  "src": "1537:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6480,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6484,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6486,
                  "src": "1586:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6483,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:21"
            },
            "scope": 6501,
            "src": "1513:82:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6493,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6488,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6493,
                  "src": "1622:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6487,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6491,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6493,
                  "src": "1671:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:21"
            },
            "scope": 6501,
            "src": "1601:76:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6500,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6495,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6500,
                  "src": "1703:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6494,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6498,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6500,
                  "src": "1752:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6497,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:21"
            },
            "scope": 6501,
            "src": "1683:75:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6502,
        "src": "48:1712:21"
      }
    ],
    "src": "0:1761:21"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        6501
      ]
    },
    "id": 6502,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6362,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6501,
        "linearizedBaseContracts": [
          6501
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6367,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6364,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 6367,
                  "src": "103:24:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6363,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:21"
            },
            "scope": 6501,
            "src": "75:65:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6374,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6369,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6374,
                  "src": "232:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6368,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:21",
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
                  "id": 6371,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6374,
                  "src": "246:14:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6370,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6373,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:21"
            },
            "scope": 6501,
            "src": "212:63:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6381,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6376,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6381,
                  "src": "298:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6375,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:21",
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
                  "id": 6378,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6381,
                  "src": "312:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6377,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:21"
            },
            "scope": 6501,
            "src": "281:57:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6388,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6383,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6388,
                  "src": "363:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6382,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:21",
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
                  "id": 6385,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6388,
                  "src": "377:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6387,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:21"
            },
            "scope": 6501,
            "src": "344:61:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6395,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6390,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6395,
                  "src": "429:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6389,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:21",
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
                  "id": 6392,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6395,
                  "src": "443:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6391,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6394,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:21"
            },
            "scope": 6501,
            "src": "411:59:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6402,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6397,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6402,
                  "src": "496:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6396,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:21",
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
                  "id": 6399,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6402,
                  "src": "510:14:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6398,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:21"
            },
            "scope": 6501,
            "src": "476:63:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6409,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6404,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6409,
                  "src": "562:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6403,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:21",
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
                  "id": 6406,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6409,
                  "src": "576:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6405,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:21"
            },
            "scope": 6501,
            "src": "545:57:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6416,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6411,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6416,
                  "src": "624:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6410,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:21",
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
                  "id": 6413,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6416,
                  "src": "638:10:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 6412,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:21"
            },
            "scope": 6501,
            "src": "608:55:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6421,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6418,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6421,
                  "src": "755:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6417,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:21"
            },
            "scope": 6501,
            "src": "732:50:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6426,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6424,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6423,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6426,
                  "src": "808:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6422,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6425,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:21"
            },
            "scope": 6501,
            "src": "788:47:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6431,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6428,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6431,
                  "src": "863:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6427,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6430,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:21"
            },
            "scope": 6501,
            "src": "841:49:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6436,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6433,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6436,
                  "src": "917:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6432,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6435,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:21"
            },
            "scope": 6501,
            "src": "896:48:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6441,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6438,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6441,
                  "src": "973:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6437,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:21"
            },
            "scope": 6501,
            "src": "950:50:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6446,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6443,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6446,
                  "src": "1026:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6442,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:21"
            },
            "scope": 6501,
            "src": "1006:47:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6451,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6448,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "1078:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6447,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:21"
            },
            "scope": 6501,
            "src": "1059:46:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6458,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6453,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6458,
                  "src": "1194:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6452,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6456,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6458,
                  "src": "1243:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6455,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:21"
            },
            "scope": 6501,
            "src": "1173:76:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6465,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6460,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6465,
                  "src": "1278:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6459,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6463,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6465,
                  "src": "1327:6:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6462,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:21"
            },
            "scope": 6501,
            "src": "1255:80:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6472,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6468,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6467,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6472,
                  "src": "1365:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6466,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6470,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6472,
                  "src": "1414:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:21"
            },
            "scope": 6501,
            "src": "1341:82:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6479,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6474,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6479,
                  "src": "1451:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6473,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6477,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6479,
                  "src": "1500:5:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6476,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:21"
            },
            "scope": 6501,
            "src": "1429:78:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6486,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6481,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6486,
                  "src": "1537:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6480,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6484,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6486,
                  "src": "1586:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6483,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:21"
            },
            "scope": 6501,
            "src": "1513:82:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6493,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6488,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6493,
                  "src": "1622:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6487,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6491,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6493,
                  "src": "1671:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6490,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:21"
            },
            "scope": 6501,
            "src": "1601:76:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6500,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6495,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 6500,
                  "src": "1703:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6494,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6499,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6498,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6500,
                  "src": "1752:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6497,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:21"
            },
            "scope": 6501,
            "src": "1683:75:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6502,
        "src": "48:1712:21"
      }
    ],
    "src": "0:1761:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.818Z"
}