"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var OrderListInterface = exports.OrderListInterface = 
{
  "contractName": "OrderListInterface",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "orderId",
          "type": "uint32"
        }
      ],
      "name": "getOrderDetails",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint128"
        },
        {
          "name": "",
          "type": "uint128"
        },
        {
          "name": "",
          "type": "uint32"
        },
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "maker",
          "type": "address"
        },
        {
          "name": "orderId",
          "type": "uint32"
        },
        {
          "name": "srcAmount",
          "type": "uint128"
        },
        {
          "name": "dstAmount",
          "type": "uint128"
        }
      ],
      "name": "add",
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
      "inputs": [
        {
          "name": "orderId",
          "type": "uint32"
        }
      ],
      "name": "remove",
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
      "inputs": [
        {
          "name": "orderId",
          "type": "uint32"
        },
        {
          "name": "srcAmount",
          "type": "uint128"
        },
        {
          "name": "dstAmount",
          "type": "uint128"
        }
      ],
      "name": "update",
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
      "constant": true,
      "inputs": [],
      "name": "getFirstOrder",
      "outputs": [
        {
          "name": "orderId",
          "type": "uint32"
        },
        {
          "name": "isEmpty",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "howMany",
          "type": "uint32"
        }
      ],
      "name": "allocateIds",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
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
          "name": "srcAmount",
          "type": "uint128"
        },
        {
          "name": "dstAmount",
          "type": "uint128"
        }
      ],
      "name": "findPrevOrderId",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "maker",
          "type": "address"
        },
        {
          "name": "orderId",
          "type": "uint32"
        },
        {
          "name": "srcAmount",
          "type": "uint128"
        },
        {
          "name": "dstAmount",
          "type": "uint128"
        },
        {
          "name": "prevId",
          "type": "uint32"
        }
      ],
      "name": "addAfterId",
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
      "inputs": [
        {
          "name": "orderId",
          "type": "uint32"
        },
        {
          "name": "srcAmount",
          "type": "uint128"
        },
        {
          "name": "dstAmount",
          "type": "uint128"
        },
        {
          "name": "prevId",
          "type": "uint32"
        }
      ],
      "name": "updateWithPositionHint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\ninterface OrderListInterface {\n    function getOrderDetails(uint32 orderId) external view returns (address, uint128, uint128, uint32, uint32);\n    function add(address maker, uint32 orderId, uint128 srcAmount, uint128 dstAmount) external returns (bool);\n    function remove(uint32 orderId) external returns (bool);\n    function update(uint32 orderId, uint128 srcAmount, uint128 dstAmount) external returns (bool);\n    function getFirstOrder() external view returns(uint32 orderId, bool isEmpty);\n    function allocateIds(uint32 howMany) external returns(uint32);\n    function findPrevOrderId(uint128 srcAmount, uint128 dstAmount) external view returns(uint32);\n\n    function addAfterId(address maker, uint32 orderId, uint128 srcAmount, uint128 dstAmount, uint32 prevId) external\n        returns (bool);\n\n    function updateWithPositionHint(uint32 orderId, uint128 srcAmount, uint128 dstAmount, uint32 prevId) external\n        returns(bool, uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListInterface.sol",
    "exportedSymbols": {
      "OrderListInterface": [
        16530
      ]
    },
    "id": 16531,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16430,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16530,
        "linearizedBaseContracts": [
          16530
        ],
        "name": "OrderListInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16445,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOrderDetails",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16432,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "87:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16431,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "87:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "86:16:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "126:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:7:59",
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
                  "id": 16437,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "135:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16436,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "135:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16439,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "144:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16438,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16441,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "153:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16440,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16443,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "161:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16442,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:43:59"
            },
            "scope": 16530,
            "src": "62:107:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16458,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16447,
                  "name": "maker",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "187:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16446,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:59",
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
                  "id": 16449,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "202:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16448,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "202:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16451,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "218:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16450,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "218:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16453,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "237:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16452,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "237:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "186:69:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16456,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "274:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16455,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "273:6:59"
            },
            "scope": 16530,
            "src": "174:106:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16465,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "remove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16460,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16465,
                  "src": "301:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16459,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:16:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16463,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16465,
                  "src": "335:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16462,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "335:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "334:6:59"
            },
            "scope": 16530,
            "src": "285:56:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16476,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16467,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "362:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16466,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16469,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "378:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16468,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "378:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16471,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "397:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16470,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "361:54:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16474,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "434:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16473,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "434:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "433:6:59"
            },
            "scope": 16530,
            "src": "346:94:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16483,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFirstOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16477,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "467:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16479,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16483,
                  "src": "492:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16478,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16481,
                  "name": "isEmpty",
                  "nodeType": "VariableDeclaration",
                  "scope": 16483,
                  "src": "508:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16480,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:30:59"
            },
            "scope": 16530,
            "src": "445:77:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16490,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allocateIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16485,
                  "name": "howMany",
                  "nodeType": "VariableDeclaration",
                  "scope": 16490,
                  "src": "548:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16484,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:16:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16488,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16490,
                  "src": "581:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16487,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "580:8:59"
            },
            "scope": 16530,
            "src": "527:62:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16499,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "findPrevOrderId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16492,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16499,
                  "src": "619:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16491,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16494,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16499,
                  "src": "638:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16493,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:38:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16497,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16499,
                  "src": "679:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16496,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "678:8:59"
            },
            "scope": 16530,
            "src": "594:93:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16514,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addAfterId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16501,
                  "name": "maker",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "713:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "713:7:59",
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
                  "id": 16503,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "728:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16502,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16505,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "744:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16504,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16507,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "763:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16506,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "763:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16509,
                  "name": "prevId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "782:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16508,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "712:84:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16512,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "823:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16511,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "822:6:59"
            },
            "scope": 16530,
            "src": "693:136:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16529,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "updateWithPositionHint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16516,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "867:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16515,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16518,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "883:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16517,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16520,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "902:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16519,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16522,
                  "name": "prevId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "921:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16521,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "866:69:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16525,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "961:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16524,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16527,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "967:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16526,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:12:59"
            },
            "scope": 16530,
            "src": "835:138:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16531,
        "src": "27:948:59"
      }
    ],
    "src": "0:976:59"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListInterface.sol",
    "exportedSymbols": {
      "OrderListInterface": [
        16530
      ]
    },
    "id": 16531,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16430,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16530,
        "linearizedBaseContracts": [
          16530
        ],
        "name": "OrderListInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16445,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOrderDetails",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16432,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "87:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16431,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "87:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "86:16:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16435,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "126:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:7:59",
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
                  "id": 16437,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "135:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16436,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "135:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16439,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "144:7:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16438,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16441,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "153:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16440,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "153:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16443,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16445,
                  "src": "161:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16442,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "161:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "125:43:59"
            },
            "scope": 16530,
            "src": "62:107:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16458,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "add",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16447,
                  "name": "maker",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "187:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16446,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:59",
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
                  "id": 16449,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "202:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16448,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "202:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16451,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "218:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16450,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "218:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16453,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "237:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16452,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "237:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "186:69:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16456,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16458,
                  "src": "274:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16455,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "273:6:59"
            },
            "scope": 16530,
            "src": "174:106:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16465,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "remove",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16460,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16465,
                  "src": "301:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16459,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "301:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "300:16:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16463,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16465,
                  "src": "335:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16462,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "335:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "334:6:59"
            },
            "scope": 16530,
            "src": "285:56:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16476,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16467,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "362:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16466,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "362:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16469,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "378:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16468,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "378:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16471,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "397:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16470,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "361:54:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16474,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16476,
                  "src": "434:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16473,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "434:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "433:6:59"
            },
            "scope": 16530,
            "src": "346:94:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16483,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFirstOrder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16477,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "467:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16479,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16483,
                  "src": "492:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16478,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16481,
                  "name": "isEmpty",
                  "nodeType": "VariableDeclaration",
                  "scope": 16483,
                  "src": "508:12:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16480,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "491:30:59"
            },
            "scope": 16530,
            "src": "445:77:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16490,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allocateIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16486,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16485,
                  "name": "howMany",
                  "nodeType": "VariableDeclaration",
                  "scope": 16490,
                  "src": "548:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16484,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:16:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16488,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16490,
                  "src": "581:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16487,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "581:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "580:8:59"
            },
            "scope": 16530,
            "src": "527:62:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16499,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "findPrevOrderId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16492,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16499,
                  "src": "619:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16491,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "619:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16494,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16499,
                  "src": "638:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16493,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "618:38:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16497,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16499,
                  "src": "679:6:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16496,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "678:8:59"
            },
            "scope": 16530,
            "src": "594:93:59",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16514,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addAfterId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16501,
                  "name": "maker",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "713:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "713:7:59",
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
                  "id": 16503,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "728:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16502,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16505,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "744:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16504,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16507,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "763:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16506,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "763:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16509,
                  "name": "prevId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "782:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16508,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "712:84:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16512,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16514,
                  "src": "823:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16511,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "822:6:59"
            },
            "scope": 16530,
            "src": "693:136:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 16529,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "updateWithPositionHint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16523,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16516,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "867:14:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16515,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "867:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16518,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "883:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16517,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "883:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16520,
                  "name": "dstAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "902:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint128",
                    "typeString": "uint128"
                  },
                  "typeName": {
                    "id": 16519,
                    "name": "uint128",
                    "nodeType": "ElementaryTypeName",
                    "src": "902:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16522,
                  "name": "prevId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "921:13:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16521,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:6:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "866:69:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 16528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16525,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "961:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16524,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16527,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16529,
                  "src": "967:4:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16526,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:4:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:12:59"
            },
            "scope": 16530,
            "src": "835:138:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16531,
        "src": "27:948:59"
      }
    ],
    "src": "0:976:59"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.647Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}