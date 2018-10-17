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
        5917
      ]
    },
    "id": 5918,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5778,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 5917,
        "linearizedBaseContracts": [
          5917
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5783,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5780,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 5783,
                  "src": "103:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5779,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5782,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:18"
            },
            "scope": 5917,
            "src": "75:65:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5790,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5785,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5790,
                  "src": "232:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5784,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:18",
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
                  "id": 5787,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5790,
                  "src": "246:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:18"
            },
            "scope": 5917,
            "src": "212:63:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5797,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5792,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5797,
                  "src": "298:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5791,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:18",
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
                  "id": 5794,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5797,
                  "src": "312:11:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5793,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:18"
            },
            "scope": 5917,
            "src": "281:57:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5804,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5799,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5804,
                  "src": "363:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5798,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:18",
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
                  "id": 5801,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5804,
                  "src": "377:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5800,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:18"
            },
            "scope": 5917,
            "src": "344:61:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5811,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5806,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5811,
                  "src": "429:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5805,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:18",
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
                  "id": 5808,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5811,
                  "src": "443:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5807,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:18"
            },
            "scope": 5917,
            "src": "411:59:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5813,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5818,
                  "src": "496:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5812,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:18",
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
                  "id": 5815,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5818,
                  "src": "510:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5814,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:18"
            },
            "scope": 5917,
            "src": "476:63:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5825,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5820,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5825,
                  "src": "562:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5819,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:18",
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
                  "id": 5822,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5825,
                  "src": "576:11:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5821,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:18"
            },
            "scope": 5917,
            "src": "545:57:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5832,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5827,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5832,
                  "src": "624:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5826,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:18",
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
                  "id": 5829,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5832,
                  "src": "638:10:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 5828,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5831,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:18"
            },
            "scope": 5917,
            "src": "608:55:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5837,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5834,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5837,
                  "src": "755:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5833,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:18"
            },
            "scope": 5917,
            "src": "732:50:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5842,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5839,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5842,
                  "src": "808:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5838,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:18"
            },
            "scope": 5917,
            "src": "788:47:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5844,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5847,
                  "src": "863:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5843,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:18"
            },
            "scope": 5917,
            "src": "841:49:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5852,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5849,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5852,
                  "src": "917:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5848,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:18"
            },
            "scope": 5917,
            "src": "896:48:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5857,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5854,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5857,
                  "src": "973:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5853,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:18"
            },
            "scope": 5917,
            "src": "950:50:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5862,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5859,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5862,
                  "src": "1026:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5858,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5861,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:18"
            },
            "scope": 5917,
            "src": "1006:47:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5867,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5864,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5867,
                  "src": "1078:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5863,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5866,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:18"
            },
            "scope": 5917,
            "src": "1059:46:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5874,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5869,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5874,
                  "src": "1194:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5868,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5872,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5874,
                  "src": "1243:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5871,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:18"
            },
            "scope": 5917,
            "src": "1173:76:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5881,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5876,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5881,
                  "src": "1278:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5875,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5879,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5881,
                  "src": "1327:6:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5878,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:18"
            },
            "scope": 5917,
            "src": "1255:80:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5888,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5883,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "1365:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5882,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "1414:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:18"
            },
            "scope": 5917,
            "src": "1341:82:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5895,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5890,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5895,
                  "src": "1451:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5889,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5893,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5895,
                  "src": "1500:5:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5892,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:18"
            },
            "scope": 5917,
            "src": "1429:78:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5902,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5897,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5902,
                  "src": "1537:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5896,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5900,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5902,
                  "src": "1586:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5899,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:18"
            },
            "scope": 5917,
            "src": "1513:82:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5909,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5904,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5909,
                  "src": "1622:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5903,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5907,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5909,
                  "src": "1671:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5906,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:18"
            },
            "scope": 5917,
            "src": "1601:76:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5916,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5911,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5916,
                  "src": "1703:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5910,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5914,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5916,
                  "src": "1752:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5913,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:18"
            },
            "scope": 5917,
            "src": "1683:75:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 5918,
        "src": "48:1712:18"
      }
    ],
    "src": "0:1761:18"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
    "exportedSymbols": {
      "DBInterface": [
        5917
      ]
    },
    "id": 5918,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5778,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 5917,
        "linearizedBaseContracts": [
          5917
        ],
        "name": "DBInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5783,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setContractManager",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5780,
                  "name": "_contractManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 5783,
                  "src": "103:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5779,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "103:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "102:26:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5782,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:0:18"
            },
            "scope": 5917,
            "src": "75:65:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5790,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5785,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5790,
                  "src": "232:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5784,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:7:18",
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
                  "id": 5787,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5790,
                  "src": "246:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:30:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:18"
            },
            "scope": 5917,
            "src": "212:63:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5797,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5792,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5797,
                  "src": "298:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5791,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:18",
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
                  "id": 5794,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5797,
                  "src": "312:11:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5793,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:27:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:18"
            },
            "scope": 5917,
            "src": "281:57:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5804,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5799,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5804,
                  "src": "363:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5798,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:18",
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
                  "id": 5801,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5804,
                  "src": "377:13:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5800,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:29:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:0:18"
            },
            "scope": 5917,
            "src": "344:61:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5811,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5806,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5811,
                  "src": "429:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5805,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "429:7:18",
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
                  "id": 5808,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5811,
                  "src": "443:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5807,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:5:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "428:28:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "469:0:18"
            },
            "scope": 5917,
            "src": "411:59:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5813,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5818,
                  "src": "496:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5812,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:7:18",
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
                  "id": 5815,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5818,
                  "src": "510:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5814,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "495:30:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:18"
            },
            "scope": 5917,
            "src": "476:63:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5825,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5820,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5825,
                  "src": "562:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5819,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "562:7:18",
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
                  "id": 5822,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5825,
                  "src": "576:11:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5821,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "576:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "561:27:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "601:0:18"
            },
            "scope": 5917,
            "src": "545:57:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5832,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5827,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5832,
                  "src": "624:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5826,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "624:7:18",
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
                  "id": 5829,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5832,
                  "src": "638:10:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 5828,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:3:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "623:26:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5831,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "662:0:18"
            },
            "scope": 5917,
            "src": "608:55:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5837,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5834,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5837,
                  "src": "755:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5833,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "754:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "781:0:18"
            },
            "scope": 5917,
            "src": "732:50:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5842,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5839,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5842,
                  "src": "808:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5838,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "834:0:18"
            },
            "scope": 5917,
            "src": "788:47:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5847,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteString",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5844,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5847,
                  "src": "863:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5843,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "889:0:18"
            },
            "scope": 5917,
            "src": "841:49:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5852,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5849,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5852,
                  "src": "917:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5848,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "916:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "943:0:18"
            },
            "scope": 5917,
            "src": "896:48:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5857,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBytes32",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5854,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5857,
                  "src": "973:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5853,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "999:0:18"
            },
            "scope": 5917,
            "src": "950:50:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5862,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5859,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5862,
                  "src": "1026:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5858,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1026:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1025:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5861,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1052:0:18"
            },
            "scope": 5917,
            "src": "1006:47:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5867,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteInt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5864,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5867,
                  "src": "1078:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5863,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1078:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1077:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5866,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1104:0:18"
            },
            "scope": 5917,
            "src": "1059:46:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5874,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5869,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5874,
                  "src": "1194:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5868,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1194:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1193:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5872,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5874,
                  "src": "1243:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5871,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1243:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1242:6:18"
            },
            "scope": 5917,
            "src": "1173:76:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5881,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "stringStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5876,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5881,
                  "src": "1278:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5875,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1277:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5879,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5881,
                  "src": "1327:6:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5878,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1327:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1326:8:18"
            },
            "scope": 5917,
            "src": "1255:80:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5888,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5883,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "1365:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5882,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1365:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1364:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "1414:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5885,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:9:18"
            },
            "scope": 5917,
            "src": "1341:82:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5895,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytesStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5890,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5895,
                  "src": "1451:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5889,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5893,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5895,
                  "src": "1500:5:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 5892,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1500:5:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1499:7:18"
            },
            "scope": 5917,
            "src": "1429:78:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5902,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5897,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5902,
                  "src": "1537:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5896,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1536:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5900,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5902,
                  "src": "1586:7:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5899,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:9:18"
            },
            "scope": 5917,
            "src": "1513:82:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5909,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5904,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5909,
                  "src": "1622:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5903,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1622:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1621:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5907,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5909,
                  "src": "1671:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5906,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1671:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1670:6:18"
            },
            "scope": 5917,
            "src": "1601:76:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5916,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "intStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5911,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 5916,
                  "src": "1703:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 5910,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 5915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5914,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5916,
                  "src": "1752:4:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5913,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:6:18"
            },
            "scope": 5917,
            "src": "1683:75:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 5918,
        "src": "48:1712:18"
      }
    ],
    "src": "0:1761:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.444Z"
}