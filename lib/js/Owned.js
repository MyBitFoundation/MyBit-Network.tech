"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Owned = exports.Owned = 
{
  "contractName": "Owned",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
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
      "inputs": [],
      "name": "newOwner",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdate",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a03191633179055610217806100326000396000f3006080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100665780638da5cb5b1461007d578063d4ee1d90146100ae578063f2fde38b146100c3575b600080fd5b34801561007257600080fd5b5061007b6100e4565b005b34801561008957600080fd5b5061009261016c565b60408051600160a060020a039092168252519081900360200190f35b3480156100ba57600080fd5b5061009261017b565b3480156100cf57600080fd5b5061007b600160a060020a036004351661018a565b600154600160a060020a031633146100fb57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146101a157600080fd5b600054600160a060020a03828116911614156101bc57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582057fe2ec7dcf02da13a4b6f54d515f3c8de17fad898f36355e554e1915773c6cc0029",
  "deployedBytecode": "0x6080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100665780638da5cb5b1461007d578063d4ee1d90146100ae578063f2fde38b146100c3575b600080fd5b34801561007257600080fd5b5061007b6100e4565b005b34801561008957600080fd5b5061009261016c565b60408051600160a060020a039092168252519081900360200190f35b3480156100ba57600080fd5b5061009261017b565b3480156100cf57600080fd5b5061007b600160a060020a036004351661018a565b600154600160a060020a031633146100fb57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146101a157600080fd5b600054600160a060020a03828116911614156101bc57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582057fe2ec7dcf02da13a4b6f54d515f3c8de17fad898f36355e554e1915773c6cc0029",
  "sourceMap": "124:1023:35:-;;;330:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;124:1023;;;;;;",
  "deployedSourceMap": "124:1023:35:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;963:182;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;;;155:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;;;;;-1:-1:-1;;;;;155:20:35;;;;;;;;;;;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;963:182;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;155:20::-;;;-1:-1:-1;;;;;155:20:35;;:::o;181:23::-;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o",
  "source": "pragma solidity ^0.4.24;\nimport './interfaces/IOwned.sol';\n\n/*\n    Provides support and utilities for contract ownership\n*/\ncontract Owned is IOwned {\n    address public owner;\n    address public newOwner;\n\n    event OwnerUpdate(address indexed _prevOwner, address indexed _newOwner);\n\n    /**\n        @dev constructor\n    */\n    constructor() public {\n        owner = msg.sender;\n    }\n\n    // allows execution by the owner only\n    modifier ownerOnly {\n        require(msg.sender == owner);\n        _;\n    }\n\n    /**\n        @dev allows transferring the contract ownership\n        the new owner still needs to accept the transfer\n        can only be called by the contract owner\n\n        @param _newOwner    new contract owner\n    */\n    function transferOwnership(address _newOwner) public ownerOnly {\n        require(_newOwner != owner);\n        newOwner = _newOwner;\n    }\n\n    /**\n        @dev used by a new owner to accept an ownership transfer\n    */\n    function acceptOwnership() public {\n        require(msg.sender == newOwner);\n        emit OwnerUpdate(owner, newOwner);\n        owner = newOwner;\n        newOwner = address(0);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
    "exportedSymbols": {
      "Owned": [
        9514
      ]
    },
    "id": 9515,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9436,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "./interfaces/IOwned.sol",
        "id": 9437,
        "nodeType": "ImportDirective",
        "scope": 9515,
        "sourceUnit": 9888,
        "src": "25:33:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9438,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9887,
              "src": "142:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$9887",
                "typeString": "contract IOwned"
              }
            },
            "id": 9439,
            "nodeType": "InheritanceSpecifier",
            "src": "142:6:35"
          }
        ],
        "contractDependencies": [
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9514,
        "linearizedBaseContracts": [
          9514,
          9887
        ],
        "name": "Owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9441,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 9514,
            "src": "155:20:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9440,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "155:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9443,
            "name": "newOwner",
            "nodeType": "VariableDeclaration",
            "scope": 9514,
            "src": "181:23:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9442,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "181:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9449,
            "name": "OwnerUpdate",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9445,
                  "indexed": true,
                  "name": "_prevOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9449,
                  "src": "229:26:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:7:35",
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
                  "id": 9447,
                  "indexed": true,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9449,
                  "src": "257:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9446,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "228:55:35"
            },
            "src": "211:73:35"
          },
          {
            "body": {
              "id": 9457,
              "nodeType": "Block",
              "src": "351:35:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9452,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9441
                      ],
                      "referencedDeclaration": 9441,
                      "src": "361:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9453,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27908,
                        "src": "369:3:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "369:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "361:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9456,
                  "nodeType": "ExpressionStatement",
                  "src": "361:18:35"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 9458,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "341:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:35"
            },
            "scope": 9514,
            "src": "330:56:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9468,
              "nodeType": "Block",
              "src": "453:56:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9461,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27908,
                            "src": "471:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "471:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9463,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9441
                          ],
                          "referencedDeclaration": 9441,
                          "src": "485:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "471:19:35",
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
                      "id": 9460,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "463:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "463:28:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9466,
                  "nodeType": "ExpressionStatement",
                  "src": "463:28:35"
                },
                {
                  "id": 9467,
                  "nodeType": "PlaceholderStatement",
                  "src": "501:1:35"
                }
              ]
            },
            "documentation": null,
            "id": 9469,
            "name": "ownerOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:35"
            },
            "src": "434:75:35",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9486,
              "nodeType": "Block",
              "src": "803:74:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9479,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 9477,
                          "name": "_newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9471,
                          "src": "821:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9478,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9441
                          ],
                          "referencedDeclaration": 9441,
                          "src": "834:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "821:18:35",
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
                      "id": 9476,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "813:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "813:27:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9481,
                  "nodeType": "ExpressionStatement",
                  "src": "813:27:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9482,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "850:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9483,
                      "name": "_newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9471,
                      "src": "861:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "850:20:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9485,
                  "nodeType": "ExpressionStatement",
                  "src": "850:20:35"
                }
              ]
            },
            "documentation": "@dev allows transferring the contract ownership\nthe new owner still needs to accept the transfer\ncan only be called by the contract owner\n@param _newOwner    new contract owner",
            "id": 9487,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9474,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9473,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "793:9:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "793:9:35"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9471,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9487,
                  "src": "767:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9470,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "766:19:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9475,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "803:0:35"
            },
            "scope": 9514,
            "src": "740:137:35",
            "stateMutability": "nonpayable",
            "superFunction": 9883,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9512,
              "nodeType": "Block",
              "src": "997:148:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9491,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27908,
                            "src": "1015:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1015:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9493,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9443,
                          "src": "1029:8:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1015:22:35",
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
                      "id": 9490,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1007:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1007:31:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9496,
                  "nodeType": "ExpressionStatement",
                  "src": "1007:31:35"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9498,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          9441
                        ],
                        "referencedDeclaration": 9441,
                        "src": "1065:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9499,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9443,
                        "src": "1072:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9497,
                      "name": "OwnerUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9449,
                      "src": "1053:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 9500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1053:28:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9501,
                  "nodeType": "EmitStatement",
                  "src": "1048:33:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9502,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9441
                      ],
                      "referencedDeclaration": 9441,
                      "src": "1091:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9503,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "1099:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1091:16:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9505,
                  "nodeType": "ExpressionStatement",
                  "src": "1091:16:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9506,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "1117:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9508,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1136:1:35",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 9507,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1128:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 9509,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1128:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1117:21:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9511,
                  "nodeType": "ExpressionStatement",
                  "src": "1117:21:35"
                }
              ]
            },
            "documentation": "@dev used by a new owner to accept an ownership transfer",
            "id": 9513,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9488,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "987:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9489,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "997:0:35"
            },
            "scope": 9514,
            "src": "963:182:35",
            "stateMutability": "nonpayable",
            "superFunction": 9886,
            "visibility": "public"
          }
        ],
        "scope": 9515,
        "src": "124:1023:35"
      }
    ],
    "src": "0:1148:35"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
    "exportedSymbols": {
      "Owned": [
        9514
      ]
    },
    "id": 9515,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9436,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "./interfaces/IOwned.sol",
        "id": 9437,
        "nodeType": "ImportDirective",
        "scope": 9515,
        "sourceUnit": 9888,
        "src": "25:33:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9438,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9887,
              "src": "142:6:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$9887",
                "typeString": "contract IOwned"
              }
            },
            "id": 9439,
            "nodeType": "InheritanceSpecifier",
            "src": "142:6:35"
          }
        ],
        "contractDependencies": [
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9514,
        "linearizedBaseContracts": [
          9514,
          9887
        ],
        "name": "Owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9441,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 9514,
            "src": "155:20:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9440,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "155:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9443,
            "name": "newOwner",
            "nodeType": "VariableDeclaration",
            "scope": 9514,
            "src": "181:23:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9442,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "181:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9449,
            "name": "OwnerUpdate",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9445,
                  "indexed": true,
                  "name": "_prevOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9449,
                  "src": "229:26:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9444,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "229:7:35",
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
                  "id": 9447,
                  "indexed": true,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9449,
                  "src": "257:25:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9446,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "228:55:35"
            },
            "src": "211:73:35"
          },
          {
            "body": {
              "id": 9457,
              "nodeType": "Block",
              "src": "351:35:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9452,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9441
                      ],
                      "referencedDeclaration": 9441,
                      "src": "361:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 9453,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27908,
                        "src": "369:3:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "369:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "361:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9456,
                  "nodeType": "ExpressionStatement",
                  "src": "361:18:35"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 9458,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "341:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:35"
            },
            "scope": 9514,
            "src": "330:56:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9468,
              "nodeType": "Block",
              "src": "453:56:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9461,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27908,
                            "src": "471:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "471:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9463,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9441
                          ],
                          "referencedDeclaration": 9441,
                          "src": "485:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "471:19:35",
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
                      "id": 9460,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "463:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "463:28:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9466,
                  "nodeType": "ExpressionStatement",
                  "src": "463:28:35"
                },
                {
                  "id": 9467,
                  "nodeType": "PlaceholderStatement",
                  "src": "501:1:35"
                }
              ]
            },
            "documentation": null,
            "id": 9469,
            "name": "ownerOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9459,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:35"
            },
            "src": "434:75:35",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9486,
              "nodeType": "Block",
              "src": "803:74:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9479,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 9477,
                          "name": "_newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9471,
                          "src": "821:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9478,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9441
                          ],
                          "referencedDeclaration": 9441,
                          "src": "834:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "821:18:35",
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
                      "id": 9476,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "813:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "813:27:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9481,
                  "nodeType": "ExpressionStatement",
                  "src": "813:27:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9482,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "850:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9483,
                      "name": "_newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9471,
                      "src": "861:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "850:20:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9485,
                  "nodeType": "ExpressionStatement",
                  "src": "850:20:35"
                }
              ]
            },
            "documentation": "@dev allows transferring the contract ownership\nthe new owner still needs to accept the transfer\ncan only be called by the contract owner\n@param _newOwner    new contract owner",
            "id": 9487,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9474,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9473,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "793:9:35",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "793:9:35"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9471,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9487,
                  "src": "767:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9470,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "766:19:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9475,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "803:0:35"
            },
            "scope": 9514,
            "src": "740:137:35",
            "stateMutability": "nonpayable",
            "superFunction": 9883,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9512,
              "nodeType": "Block",
              "src": "997:148:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9491,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27908,
                            "src": "1015:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1015:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9493,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9443,
                          "src": "1029:8:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1015:22:35",
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
                      "id": 9490,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1007:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1007:31:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9496,
                  "nodeType": "ExpressionStatement",
                  "src": "1007:31:35"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9498,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          9441
                        ],
                        "referencedDeclaration": 9441,
                        "src": "1065:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9499,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9443,
                        "src": "1072:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9497,
                      "name": "OwnerUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9449,
                      "src": "1053:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 9500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1053:28:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9501,
                  "nodeType": "EmitStatement",
                  "src": "1048:33:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9502,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9441
                      ],
                      "referencedDeclaration": 9441,
                      "src": "1091:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9503,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "1099:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1091:16:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9505,
                  "nodeType": "ExpressionStatement",
                  "src": "1091:16:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9510,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9506,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9443,
                      "src": "1117:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 9508,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1136:1:35",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 9507,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1128:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 9509,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1128:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1117:21:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9511,
                  "nodeType": "ExpressionStatement",
                  "src": "1117:21:35"
                }
              ]
            },
            "documentation": "@dev used by a new owner to accept an ownership transfer",
            "id": 9513,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9488,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "987:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9489,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "997:0:35"
            },
            "scope": 9514,
            "src": "963:182:35",
            "stateMutability": "nonpayable",
            "superFunction": 9886,
            "visibility": "public"
          }
        ],
        "scope": 9515,
        "src": "124:1023:35"
      }
    ],
    "src": "0:1148:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-05T20:40:37.188Z"
}