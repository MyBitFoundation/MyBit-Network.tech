"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var OrderIdManager = exports.OrderIdManager = 
{
  "contractName": "OrderIdManager",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "NUM_ORDERS",
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
  "bytecode": "0x6080604052348015600f57600080fd5b5060988061001e6000396000f300608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304068ae281146043575b600080fd5b348015604e57600080fd5b5060556067565b60408051918252519081900360200190f35b6020815600a165627a7a723058209c738f454b3b1c827dcbf6a144e928994371b23de014fa9f953f45c421e744150029",
  "deployedBytecode": "0x608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304068ae281146043575b600080fd5b348015604e57600080fd5b5060556067565b60408051918252519081900360200190f35b6020815600a165627a7a723058209c738f454b3b1c827dcbf6a144e928994371b23de014fa9f953f45c421e744150029",
  "sourceMap": "27:2002:57:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:2002:57;;;;;;;",
  "deployedSourceMap": "27:2002:57:-;;;;;;;;;;;;;;;;;;;;;;;144:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;144:36:57;;;;;;;;;;;;;;;;;;;;;178:2;144:36;:::o",
  "source": "pragma solidity ^0.4.24;\n\n\ncontract OrderIdManager {\n    struct OrderIdData {\n        uint32 firstOrderId;\n        uint takenBitmap;\n    }\n\n    uint constant public NUM_ORDERS = 32;\n\n    function fetchNewOrderId(OrderIdData storage freeOrders)\n        internal\n        returns(uint32)\n    {\n        uint orderBitmap = freeOrders.takenBitmap;\n        uint bitPointer = 1;\n\n        for (uint i = 0; i < NUM_ORDERS; ++i) {\n\n            if ((orderBitmap & bitPointer) == 0) {\n                freeOrders.takenBitmap = orderBitmap | bitPointer;\n                return(uint32(uint(freeOrders.firstOrderId) + i));\n            }\n\n            bitPointer *= 2;\n        }\n\n        revert();\n    }\n\n    /// @dev mark order as free to use.\n    function releaseOrderId(OrderIdData storage freeOrders, uint32 orderId)\n        internal\n        returns(bool)\n    {\n        require(orderId >= freeOrders.firstOrderId);\n        require(orderId < (freeOrders.firstOrderId + NUM_ORDERS));\n\n        uint orderBitNum = uint(orderId) - uint(freeOrders.firstOrderId);\n        uint bitPointer = uint(1) << orderBitNum;\n\n        require(bitPointer & freeOrders.takenBitmap > 0);\n\n        freeOrders.takenBitmap &= ~bitPointer;\n        return true;\n    }\n\n    function allocateOrderIds(\n        OrderIdData storage makerOrders,\n        uint32 firstAllocatedId\n    )\n        internal\n        returns(bool)\n    {\n        if (makerOrders.firstOrderId > 0) {\n            return false;\n        }\n\n        makerOrders.firstOrderId = firstAllocatedId;\n        makerOrders.takenBitmap = 0;\n\n        return true;\n    }\n\n    function orderAllocationRequired(OrderIdData storage freeOrders) internal view returns (bool) {\n\n        if (freeOrders.firstOrderId == 0) return true;\n        return false;\n    }\n\n    function getNumActiveOrderIds(OrderIdData storage makerOrders) internal view returns (uint numActiveOrders) {\n        for (uint i = 0; i < NUM_ORDERS; ++i) {\n            if ((makerOrders.takenBitmap & (uint(1) << i)) > 0) numActiveOrders++;\n        }\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderIdManager.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderIdManager.sol",
    "exportedSymbols": {
      "OrderIdManager": [
        16417
      ]
    },
    "id": 16418,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16197,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:57"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16417,
        "linearizedBaseContracts": [
          16417
        ],
        "name": "OrderIdManager",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "OrderIdManager.OrderIdData",
            "id": 16202,
            "members": [
              {
                "constant": false,
                "id": 16199,
                "name": "firstOrderId",
                "nodeType": "VariableDeclaration",
                "scope": 16202,
                "src": "86:19:57",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 16198,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "86:6:57",
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
                "id": 16201,
                "name": "takenBitmap",
                "nodeType": "VariableDeclaration",
                "scope": 16202,
                "src": "115:16:57",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 16200,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "115:4:57",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "OrderIdData",
            "nodeType": "StructDefinition",
            "scope": 16417,
            "src": "57:81:57",
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 16205,
            "name": "NUM_ORDERS",
            "nodeType": "VariableDeclaration",
            "scope": 16417,
            "src": "144:36:57",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16203,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "144:4:57",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3332",
              "id": 16204,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "178:2:57",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_32_by_1",
                "typeString": "int_const 32"
              },
              "value": "32"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 16266,
              "nodeType": "Block",
              "src": "289:395:57",
              "statements": [
                {
                  "assignments": [
                    16213
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16213,
                      "name": "orderBitmap",
                      "nodeType": "VariableDeclaration",
                      "scope": 16267,
                      "src": "299:16:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16212,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "299:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16216,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 16214,
                      "name": "freeOrders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16207,
                      "src": "318:10:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                        "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                      }
                    },
                    "id": 16215,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "takenBitmap",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 16201,
                    "src": "318:22:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "299:41:57"
                },
                {
                  "assignments": [
                    16218
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16218,
                      "name": "bitPointer",
                      "nodeType": "VariableDeclaration",
                      "scope": 16267,
                      "src": "350:15:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16217,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "350:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16220,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "31",
                    "id": 16219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "368:1:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "350:19:57"
                },
                {
                  "body": {
                    "id": 16261,
                    "nodeType": "Block",
                    "src": "418:241:57",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 16236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 16233,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 16231,
                                  "name": "orderBitmap",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16213,
                                  "src": "438:11:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 16232,
                                  "name": "bitPointer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16218,
                                  "src": "452:10:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "438:24:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 16234,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "437:26:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 16235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "467:1:57",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "437:31:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 16256,
                        "nodeType": "IfStatement",
                        "src": "433:186:57",
                        "trueBody": {
                          "id": 16255,
                          "nodeType": "Block",
                          "src": "470:149:57",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 16243,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 16237,
                                    "name": "freeOrders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16207,
                                    "src": "488:10:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                      "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                    }
                                  },
                                  "id": 16239,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "takenBitmap",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 16201,
                                  "src": "488:22:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 16242,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "id": 16240,
                                    "name": "orderBitmap",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16213,
                                    "src": "513:11:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "|",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 16241,
                                    "name": "bitPointer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16218,
                                    "src": "527:10:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "513:24:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "488:49:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 16244,
                              "nodeType": "ExpressionStatement",
                              "src": "488:49:57"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 16251,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 16247,
                                                "name": "freeOrders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16207,
                                                "src": "574:10:57",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                                  "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                                }
                                              },
                                              "id": 16248,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "firstOrderId",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 16199,
                                              "src": "574:23:57",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint32",
                                                "typeString": "uint32"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_uint32",
                                                "typeString": "uint32"
                                              }
                                            ],
                                            "id": 16246,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "569:4:57",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": "uint"
                                          },
                                          "id": 16249,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "569:29:57",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 16250,
                                          "name": "i",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 16222,
                                          "src": "601:1:57",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "569:33:57",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "id": 16245,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "562:6:57",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint32_$",
                                        "typeString": "type(uint32)"
                                      },
                                      "typeName": "uint32"
                                    },
                                    "id": 16252,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "562:41:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  }
                                ],
                                "id": 16253,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "561:43:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "functionReturnParameters": 16211,
                              "id": 16254,
                              "nodeType": "Return",
                              "src": "555:49:57"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 16259,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 16257,
                            "name": "bitPointer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16218,
                            "src": "633:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "*=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 16258,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "647:1:57",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "633:15:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 16260,
                        "nodeType": "ExpressionStatement",
                        "src": "633:15:57"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 16225,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16222,
                      "src": "397:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 16226,
                      "name": "NUM_ORDERS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16205,
                      "src": "401:10:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "397:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16262,
                  "initializationExpression": {
                    "assignments": [
                      16222
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 16222,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 16267,
                        "src": "385:6:57",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 16221,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "385:4:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 16224,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "394:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "385:10:57"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 16229,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "413:3:57",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 16228,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16222,
                        "src": "415:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 16230,
                    "nodeType": "ExpressionStatement",
                    "src": "413:3:57"
                  },
                  "nodeType": "ForStatement",
                  "src": "380:279:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 16263,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34928,
                        34929
                      ],
                      "referencedDeclaration": 34928,
                      "src": "669:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 16264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "669:8:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16265,
                  "nodeType": "ExpressionStatement",
                  "src": "669:8:57"
                }
              ]
            },
            "documentation": null,
            "id": 16267,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "fetchNewOrderId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16207,
                  "name": "freeOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16267,
                  "src": "212:30:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16206,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "212:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:32:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16210,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16267,
                  "src": "277:6:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16209,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:8:57"
            },
            "scope": 16417,
            "src": "187:497:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16330,
              "nodeType": "Block",
              "src": "845:380:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 16280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16277,
                          "name": "orderId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16271,
                          "src": "863:7:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16278,
                            "name": "freeOrders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16269,
                            "src": "874:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                              "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                            }
                          },
                          "id": 16279,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "firstOrderId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16199,
                          "src": "874:23:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "src": "863:34:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16276,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "855:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "855:43:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16282,
                  "nodeType": "ExpressionStatement",
                  "src": "855:43:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16284,
                          "name": "orderId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16271,
                          "src": "916:7:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 16288,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 16285,
                                  "name": "freeOrders",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16269,
                                  "src": "927:10:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                    "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                  }
                                },
                                "id": 16286,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "firstOrderId",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 16199,
                                "src": "927:23:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 16287,
                                "name": "NUM_ORDERS",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16205,
                                "src": "953:10:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "927:36:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 16289,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "926:38:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "916:48:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16283,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "908:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "908:57:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16292,
                  "nodeType": "ExpressionStatement",
                  "src": "908:57:57"
                },
                {
                  "assignments": [
                    16294
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16294,
                      "name": "orderBitNum",
                      "nodeType": "VariableDeclaration",
                      "scope": 16331,
                      "src": "976:16:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16293,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "976:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16303,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16296,
                          "name": "orderId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16271,
                          "src": "1000:7:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        ],
                        "id": 16295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "995:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 16297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "995:13:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16299,
                            "name": "freeOrders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16269,
                            "src": "1016:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                              "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                            }
                          },
                          "id": 16300,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "firstOrderId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16199,
                          "src": "1016:23:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        ],
                        "id": 16298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1011:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 16301,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1011:29:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "995:45:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "976:64:57"
                },
                {
                  "assignments": [
                    16305
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16305,
                      "name": "bitPointer",
                      "nodeType": "VariableDeclaration",
                      "scope": 16331,
                      "src": "1050:15:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16304,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1050:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16311,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 16307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1073:1:57",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 16306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1068:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 16308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1068:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 16309,
                      "name": "orderBitNum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16294,
                      "src": "1079:11:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1068:22:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1050:40:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 16316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 16313,
                            "name": "bitPointer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16305,
                            "src": "1109:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 16314,
                              "name": "freeOrders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16269,
                              "src": "1122:10:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                              }
                            },
                            "id": 16315,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "takenBitmap",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 16201,
                            "src": "1122:22:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1109:35:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 16317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1147:1:57",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1109:39:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16312,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "1101:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1101:48:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16320,
                  "nodeType": "ExpressionStatement",
                  "src": "1101:48:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16321,
                        "name": "freeOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16269,
                        "src": "1160:10:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16323,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "takenBitmap",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16201,
                      "src": "1160:22:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "&=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "~",
                      "prefix": true,
                      "src": "1186:11:57",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 16324,
                        "name": "bitPointer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16305,
                        "src": "1187:10:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1160:37:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16327,
                  "nodeType": "ExpressionStatement",
                  "src": "1160:37:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 16328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1214:4:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 16275,
                  "id": 16329,
                  "nodeType": "Return",
                  "src": "1207:11:57"
                }
              ]
            },
            "documentation": "@dev mark order as free to use.",
            "id": 16331,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "releaseOrderId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16269,
                  "name": "freeOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16331,
                  "src": "754:30:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16268,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "754:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16271,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16331,
                  "src": "786:14:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16270,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "786:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "753:48:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16274,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16331,
                  "src": "835:4:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16273,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "835:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "834:6:57"
            },
            "scope": 16417,
            "src": "730:495:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16362,
              "nodeType": "Block",
              "src": "1380:200:57",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 16343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16340,
                        "name": "makerOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16333,
                        "src": "1394:11:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16341,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "firstOrderId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16199,
                      "src": "1394:24:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16342,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1421:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1394:28:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 16347,
                  "nodeType": "IfStatement",
                  "src": "1390:71:57",
                  "trueBody": {
                    "id": 16346,
                    "nodeType": "Block",
                    "src": "1424:37:57",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 16344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1445:5:57",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 16339,
                        "id": 16345,
                        "nodeType": "Return",
                        "src": "1438:12:57"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16348,
                        "name": "makerOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16333,
                        "src": "1471:11:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16350,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "firstOrderId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16199,
                      "src": "1471:24:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16351,
                      "name": "firstAllocatedId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16335,
                      "src": "1498:16:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "1471:43:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "id": 16353,
                  "nodeType": "ExpressionStatement",
                  "src": "1471:43:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16354,
                        "name": "makerOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16333,
                        "src": "1524:11:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16356,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "takenBitmap",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16201,
                      "src": "1524:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1550:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1524:27:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16359,
                  "nodeType": "ExpressionStatement",
                  "src": "1524:27:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 16360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1569:4:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 16339,
                  "id": 16361,
                  "nodeType": "Return",
                  "src": "1562:11:57"
                }
              ]
            },
            "documentation": null,
            "id": 16363,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allocateOrderIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16333,
                  "name": "makerOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16363,
                  "src": "1266:31:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16332,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "1266:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16335,
                  "name": "firstAllocatedId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16363,
                  "src": "1307:23:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16334,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1307:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1256:80:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16338,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16363,
                  "src": "1370:4:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16337,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1370:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1369:6:57"
            },
            "scope": 16417,
            "src": "1231:349:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16379,
              "nodeType": "Block",
              "src": "1680:85:57",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 16373,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16370,
                        "name": "freeOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16365,
                        "src": "1695:10:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16371,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "firstOrderId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16199,
                      "src": "1695:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16372,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1722:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1695:28:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 16376,
                  "nodeType": "IfStatement",
                  "src": "1691:45:57",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 16374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1732:4:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 16369,
                    "id": 16375,
                    "nodeType": "Return",
                    "src": "1725:11:57"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 16377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1753:5:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 16369,
                  "id": 16378,
                  "nodeType": "Return",
                  "src": "1746:12:57"
                }
              ]
            },
            "documentation": null,
            "id": 16380,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "orderAllocationRequired",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16365,
                  "name": "freeOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16380,
                  "src": "1619:30:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16364,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "1619:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1618:32:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16368,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16380,
                  "src": "1674:4:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16367,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1674:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1673:6:57"
            },
            "scope": 16417,
            "src": "1586:179:57",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16415,
              "nodeType": "Block",
              "src": "1879:148:57",
              "statements": [
                {
                  "body": {
                    "id": 16413,
                    "nodeType": "Block",
                    "src": "1927:94:57",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 16408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 16405,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 16397,
                                    "name": "makerOrders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16382,
                                    "src": "1946:11:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                      "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                    }
                                  },
                                  "id": 16398,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "takenBitmap",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 16201,
                                  "src": "1946:23:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 16403,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "31",
                                            "id": 16400,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1978:1:57",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            }
                                          ],
                                          "id": 16399,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "1973:4:57",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint256_$",
                                            "typeString": "type(uint256)"
                                          },
                                          "typeName": "uint"
                                        },
                                        "id": 16401,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1973:7:57",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "<<",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "id": 16402,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 16388,
                                        "src": "1984:1:57",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "1973:12:57",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 16404,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "1972:14:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1946:40:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 16406,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1945:42:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 16407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1990:1:57",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1945:46:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 16412,
                        "nodeType": "IfStatement",
                        "src": "1941:69:57",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 16410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "1993:17:57",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 16409,
                              "name": "numActiveOrders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16385,
                              "src": "1993:15:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 16411,
                          "nodeType": "ExpressionStatement",
                          "src": "1993:17:57"
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 16391,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16388,
                      "src": "1906:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 16392,
                      "name": "NUM_ORDERS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16205,
                      "src": "1910:10:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1906:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16414,
                  "initializationExpression": {
                    "assignments": [
                      16388
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 16388,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 16416,
                        "src": "1894:6:57",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 16387,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1894:4:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 16390,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1903:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1894:10:57"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 16395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "1922:3:57",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 16394,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16388,
                        "src": "1924:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 16396,
                    "nodeType": "ExpressionStatement",
                    "src": "1922:3:57"
                  },
                  "nodeType": "ForStatement",
                  "src": "1889:132:57"
                }
              ]
            },
            "documentation": null,
            "id": 16416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getNumActiveOrderIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16382,
                  "name": "makerOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16416,
                  "src": "1801:31:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16381,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "1801:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1800:33:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16385,
                  "name": "numActiveOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16416,
                  "src": "1857:20:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16384,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1857:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1856:22:57"
            },
            "scope": 16417,
            "src": "1771:256:57",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 16418,
        "src": "27:2002:57"
      }
    ],
    "src": "0:2030:57"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderIdManager.sol",
    "exportedSymbols": {
      "OrderIdManager": [
        16417
      ]
    },
    "id": 16418,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16197,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:57"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16417,
        "linearizedBaseContracts": [
          16417
        ],
        "name": "OrderIdManager",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "OrderIdManager.OrderIdData",
            "id": 16202,
            "members": [
              {
                "constant": false,
                "id": 16199,
                "name": "firstOrderId",
                "nodeType": "VariableDeclaration",
                "scope": 16202,
                "src": "86:19:57",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 16198,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "86:6:57",
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
                "id": 16201,
                "name": "takenBitmap",
                "nodeType": "VariableDeclaration",
                "scope": 16202,
                "src": "115:16:57",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 16200,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "115:4:57",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "OrderIdData",
            "nodeType": "StructDefinition",
            "scope": 16417,
            "src": "57:81:57",
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 16205,
            "name": "NUM_ORDERS",
            "nodeType": "VariableDeclaration",
            "scope": 16417,
            "src": "144:36:57",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16203,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "144:4:57",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3332",
              "id": 16204,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "178:2:57",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_32_by_1",
                "typeString": "int_const 32"
              },
              "value": "32"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 16266,
              "nodeType": "Block",
              "src": "289:395:57",
              "statements": [
                {
                  "assignments": [
                    16213
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16213,
                      "name": "orderBitmap",
                      "nodeType": "VariableDeclaration",
                      "scope": 16267,
                      "src": "299:16:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16212,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "299:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16216,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 16214,
                      "name": "freeOrders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16207,
                      "src": "318:10:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                        "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                      }
                    },
                    "id": 16215,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "takenBitmap",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 16201,
                    "src": "318:22:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "299:41:57"
                },
                {
                  "assignments": [
                    16218
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16218,
                      "name": "bitPointer",
                      "nodeType": "VariableDeclaration",
                      "scope": 16267,
                      "src": "350:15:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16217,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "350:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16220,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "31",
                    "id": 16219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "368:1:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1_by_1",
                      "typeString": "int_const 1"
                    },
                    "value": "1"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "350:19:57"
                },
                {
                  "body": {
                    "id": 16261,
                    "nodeType": "Block",
                    "src": "418:241:57",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 16236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 16233,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 16231,
                                  "name": "orderBitmap",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16213,
                                  "src": "438:11:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 16232,
                                  "name": "bitPointer",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16218,
                                  "src": "452:10:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "438:24:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 16234,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "437:26:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 16235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "467:1:57",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "437:31:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 16256,
                        "nodeType": "IfStatement",
                        "src": "433:186:57",
                        "trueBody": {
                          "id": 16255,
                          "nodeType": "Block",
                          "src": "470:149:57",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 16243,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 16237,
                                    "name": "freeOrders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16207,
                                    "src": "488:10:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                      "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                    }
                                  },
                                  "id": 16239,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "takenBitmap",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 16201,
                                  "src": "488:22:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 16242,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "id": 16240,
                                    "name": "orderBitmap",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16213,
                                    "src": "513:11:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "|",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 16241,
                                    "name": "bitPointer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16218,
                                    "src": "527:10:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "513:24:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "488:49:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 16244,
                              "nodeType": "ExpressionStatement",
                              "src": "488:49:57"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 16251,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "expression": {
                                                "argumentTypes": null,
                                                "id": 16247,
                                                "name": "freeOrders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16207,
                                                "src": "574:10:57",
                                                "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                                  "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                                }
                                              },
                                              "id": 16248,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberName": "firstOrderId",
                                              "nodeType": "MemberAccess",
                                              "referencedDeclaration": 16199,
                                              "src": "574:23:57",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_uint32",
                                                "typeString": "uint32"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_uint32",
                                                "typeString": "uint32"
                                              }
                                            ],
                                            "id": 16246,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "569:4:57",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_uint256_$",
                                              "typeString": "type(uint256)"
                                            },
                                            "typeName": "uint"
                                          },
                                          "id": 16249,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "569:29:57",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 16250,
                                          "name": "i",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 16222,
                                          "src": "601:1:57",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "569:33:57",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "id": 16245,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "562:6:57",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint32_$",
                                        "typeString": "type(uint32)"
                                      },
                                      "typeName": "uint32"
                                    },
                                    "id": 16252,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "562:41:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  }
                                ],
                                "id": 16253,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "561:43:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "functionReturnParameters": 16211,
                              "id": 16254,
                              "nodeType": "Return",
                              "src": "555:49:57"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 16259,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 16257,
                            "name": "bitPointer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16218,
                            "src": "633:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "*=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 16258,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "647:1:57",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "633:15:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 16260,
                        "nodeType": "ExpressionStatement",
                        "src": "633:15:57"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 16225,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16222,
                      "src": "397:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 16226,
                      "name": "NUM_ORDERS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16205,
                      "src": "401:10:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "397:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16262,
                  "initializationExpression": {
                    "assignments": [
                      16222
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 16222,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 16267,
                        "src": "385:6:57",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 16221,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "385:4:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 16224,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16223,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "394:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "385:10:57"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 16229,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "413:3:57",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 16228,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16222,
                        "src": "415:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 16230,
                    "nodeType": "ExpressionStatement",
                    "src": "413:3:57"
                  },
                  "nodeType": "ForStatement",
                  "src": "380:279:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 16263,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34928,
                        34929
                      ],
                      "referencedDeclaration": 34928,
                      "src": "669:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 16264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "669:8:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16265,
                  "nodeType": "ExpressionStatement",
                  "src": "669:8:57"
                }
              ]
            },
            "documentation": null,
            "id": 16267,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "fetchNewOrderId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16207,
                  "name": "freeOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16267,
                  "src": "212:30:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16206,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "212:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:32:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16211,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16210,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16267,
                  "src": "277:6:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16209,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:8:57"
            },
            "scope": 16417,
            "src": "187:497:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16330,
              "nodeType": "Block",
              "src": "845:380:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 16280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16277,
                          "name": "orderId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16271,
                          "src": "863:7:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16278,
                            "name": "freeOrders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16269,
                            "src": "874:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                              "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                            }
                          },
                          "id": 16279,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "firstOrderId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16199,
                          "src": "874:23:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "src": "863:34:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16276,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "855:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "855:43:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16282,
                  "nodeType": "ExpressionStatement",
                  "src": "855:43:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16290,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 16284,
                          "name": "orderId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16271,
                          "src": "916:7:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 16288,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 16285,
                                  "name": "freeOrders",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 16269,
                                  "src": "927:10:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                    "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                  }
                                },
                                "id": 16286,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "firstOrderId",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 16199,
                                "src": "927:23:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 16287,
                                "name": "NUM_ORDERS",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16205,
                                "src": "953:10:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "927:36:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 16289,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "926:38:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "916:48:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16283,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "908:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "908:57:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16292,
                  "nodeType": "ExpressionStatement",
                  "src": "908:57:57"
                },
                {
                  "assignments": [
                    16294
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16294,
                      "name": "orderBitNum",
                      "nodeType": "VariableDeclaration",
                      "scope": 16331,
                      "src": "976:16:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16293,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "976:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16303,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16296,
                          "name": "orderId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16271,
                          "src": "1000:7:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        ],
                        "id": 16295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "995:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 16297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "995:13:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 16299,
                            "name": "freeOrders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16269,
                            "src": "1016:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                              "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                            }
                          },
                          "id": 16300,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "firstOrderId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 16199,
                          "src": "1016:23:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        ],
                        "id": 16298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1011:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 16301,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1011:29:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "995:45:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "976:64:57"
                },
                {
                  "assignments": [
                    16305
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16305,
                      "name": "bitPointer",
                      "nodeType": "VariableDeclaration",
                      "scope": 16331,
                      "src": "1050:15:57",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16304,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1050:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16311,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 16307,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1073:1:57",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 16306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1068:4:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 16308,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1068:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 16309,
                      "name": "orderBitNum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16294,
                      "src": "1079:11:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1068:22:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1050:40:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 16318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 16316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 16313,
                            "name": "bitPointer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16305,
                            "src": "1109:10:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 16314,
                              "name": "freeOrders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16269,
                              "src": "1122:10:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                              }
                            },
                            "id": 16315,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "takenBitmap",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 16201,
                            "src": "1122:22:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1109:35:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 16317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1147:1:57",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "1109:39:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 16312,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "1101:7:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1101:48:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16320,
                  "nodeType": "ExpressionStatement",
                  "src": "1101:48:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16321,
                        "name": "freeOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16269,
                        "src": "1160:10:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16323,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "takenBitmap",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16201,
                      "src": "1160:22:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "&=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "~",
                      "prefix": true,
                      "src": "1186:11:57",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 16324,
                        "name": "bitPointer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16305,
                        "src": "1187:10:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1160:37:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16327,
                  "nodeType": "ExpressionStatement",
                  "src": "1160:37:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 16328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1214:4:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 16275,
                  "id": 16329,
                  "nodeType": "Return",
                  "src": "1207:11:57"
                }
              ]
            },
            "documentation": "@dev mark order as free to use.",
            "id": 16331,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "releaseOrderId",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16269,
                  "name": "freeOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16331,
                  "src": "754:30:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16268,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "754:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16271,
                  "name": "orderId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16331,
                  "src": "786:14:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16270,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "786:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "753:48:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16275,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16274,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16331,
                  "src": "835:4:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16273,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "835:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "834:6:57"
            },
            "scope": 16417,
            "src": "730:495:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16362,
              "nodeType": "Block",
              "src": "1380:200:57",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 16343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16340,
                        "name": "makerOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16333,
                        "src": "1394:11:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16341,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "firstOrderId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16199,
                      "src": "1394:24:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16342,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1421:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1394:28:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 16347,
                  "nodeType": "IfStatement",
                  "src": "1390:71:57",
                  "trueBody": {
                    "id": 16346,
                    "nodeType": "Block",
                    "src": "1424:37:57",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 16344,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1445:5:57",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 16339,
                        "id": 16345,
                        "nodeType": "Return",
                        "src": "1438:12:57"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16348,
                        "name": "makerOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16333,
                        "src": "1471:11:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16350,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "firstOrderId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16199,
                      "src": "1471:24:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16351,
                      "name": "firstAllocatedId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16335,
                      "src": "1498:16:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "1471:43:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "id": 16353,
                  "nodeType": "ExpressionStatement",
                  "src": "1471:43:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16358,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16354,
                        "name": "makerOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16333,
                        "src": "1524:11:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16356,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "takenBitmap",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16201,
                      "src": "1524:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1550:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1524:27:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16359,
                  "nodeType": "ExpressionStatement",
                  "src": "1524:27:57"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 16360,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1569:4:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 16339,
                  "id": 16361,
                  "nodeType": "Return",
                  "src": "1562:11:57"
                }
              ]
            },
            "documentation": null,
            "id": 16363,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "allocateOrderIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16333,
                  "name": "makerOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16363,
                  "src": "1266:31:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16332,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "1266:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16335,
                  "name": "firstAllocatedId",
                  "nodeType": "VariableDeclaration",
                  "scope": 16363,
                  "src": "1307:23:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 16334,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1307:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1256:80:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16338,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16363,
                  "src": "1370:4:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16337,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1370:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1369:6:57"
            },
            "scope": 16417,
            "src": "1231:349:57",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16379,
              "nodeType": "Block",
              "src": "1680:85:57",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 16373,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 16370,
                        "name": "freeOrders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16365,
                        "src": "1695:10:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                          "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                        }
                      },
                      "id": 16371,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "firstOrderId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16199,
                      "src": "1695:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16372,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1722:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1695:28:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 16376,
                  "nodeType": "IfStatement",
                  "src": "1691:45:57",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 16374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1732:4:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 16369,
                    "id": 16375,
                    "nodeType": "Return",
                    "src": "1725:11:57"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 16377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1753:5:57",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 16369,
                  "id": 16378,
                  "nodeType": "Return",
                  "src": "1746:12:57"
                }
              ]
            },
            "documentation": null,
            "id": 16380,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "orderAllocationRequired",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16366,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16365,
                  "name": "freeOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16380,
                  "src": "1619:30:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16364,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "1619:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1618:32:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16368,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16380,
                  "src": "1674:4:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 16367,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1674:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1673:6:57"
            },
            "scope": 16417,
            "src": "1586:179:57",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 16415,
              "nodeType": "Block",
              "src": "1879:148:57",
              "statements": [
                {
                  "body": {
                    "id": 16413,
                    "nodeType": "Block",
                    "src": "1927:94:57",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 16408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 16405,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 16397,
                                    "name": "makerOrders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 16382,
                                    "src": "1946:11:57",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                                      "typeString": "struct OrderIdManager.OrderIdData storage pointer"
                                    }
                                  },
                                  "id": 16398,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "takenBitmap",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 16201,
                                  "src": "1946:23:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "&",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 16403,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "31",
                                            "id": 16400,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "1978:1:57",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            }
                                          ],
                                          "id": 16399,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "1973:4:57",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_uint256_$",
                                            "typeString": "type(uint256)"
                                          },
                                          "typeName": "uint"
                                        },
                                        "id": 16401,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1973:7:57",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "<<",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "id": 16402,
                                        "name": "i",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 16388,
                                        "src": "1984:1:57",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "1973:12:57",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 16404,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "1972:14:57",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1946:40:57",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 16406,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "1945:42:57",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 16407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1990:1:57",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1945:46:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 16412,
                        "nodeType": "IfStatement",
                        "src": "1941:69:57",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 16410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "1993:17:57",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 16409,
                              "name": "numActiveOrders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 16385,
                              "src": "1993:15:57",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 16411,
                          "nodeType": "ExpressionStatement",
                          "src": "1993:17:57"
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 16393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 16391,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16388,
                      "src": "1906:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 16392,
                      "name": "NUM_ORDERS",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16205,
                      "src": "1910:10:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1906:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 16414,
                  "initializationExpression": {
                    "assignments": [
                      16388
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 16388,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 16416,
                        "src": "1894:6:57",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 16387,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1894:4:57",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 16390,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 16389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1903:1:57",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1894:10:57"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 16395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": true,
                      "src": "1922:3:57",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 16394,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16388,
                        "src": "1924:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 16396,
                    "nodeType": "ExpressionStatement",
                    "src": "1922:3:57"
                  },
                  "nodeType": "ForStatement",
                  "src": "1889:132:57"
                }
              ]
            },
            "documentation": null,
            "id": 16416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getNumActiveOrderIds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16382,
                  "name": "makerOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16416,
                  "src": "1801:31:57",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                    "typeString": "struct OrderIdManager.OrderIdData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16381,
                    "name": "OrderIdData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16202,
                    "src": "1801:11:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OrderIdData_$16202_storage_ptr",
                      "typeString": "struct OrderIdManager.OrderIdData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1800:33:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 16386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16385,
                  "name": "numActiveOrders",
                  "nodeType": "VariableDeclaration",
                  "scope": 16416,
                  "src": "1857:20:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16384,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1857:4:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1856:22:57"
            },
            "scope": 16417,
            "src": "1771:256:57",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 16418,
        "src": "27:2002:57"
      }
    ],
    "src": "0:2030:57"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.646Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}