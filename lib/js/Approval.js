"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Approval = exports.Approval = 
{
  "contractName": "Approval",
  "abi": [
    {
      "inputs": [
        {
          "name": "_database",
          "type": "address"
        },
        {
          "name": "_events",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_account",
          "type": "address"
        },
        {
          "name": "_contract",
          "type": "address"
        },
        {
          "name": "_function",
          "type": "bytes4"
        }
      ],
      "name": "approve",
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
          "name": "_account",
          "type": "address"
        },
        {
          "name": "_contract",
          "type": "address"
        },
        {
          "name": "_function",
          "type": "bytes4"
        }
      ],
      "name": "revoke",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516040806103e783398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560018054939092169216919091179055610380806100676000396000f3006080604052600436106100325763ffffffff60e060020a6000350416635cf3693c8114610037578063c26840781461008c575b600080fd5b34801561004357600080fd5b5061007873ffffffffffffffffffffffffffffffffffffffff60043581169060243516600160e060020a0319604435166100cd565b604080519115158252519081900360200190f35b34801561009857600080fd5b5061007873ffffffffffffffffffffffffffffffffffffffff60043581169060243516600160e060020a03196044351661021e565b60008054604080517f617070726f76616c0000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000338102602884015273ffffffffffffffffffffffffffffffffffffffff8981168202603c8501528881169091026050840152600160e060020a031987166064840152835160488185030181526068909301938490528251941693632c62ff2d93918291908401908083835b602083106101975780518252601f199092019160209182019101610178565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b1580156101fc57600080fd5b505af1158015610210573d6000803e3d6000fd5b506001979650505050505050565b60008054604080517f617070726f76616c0000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000338102602884015273ffffffffffffffffffffffffffffffffffffffff8981168202603c8501528881169091026050840152600160e060020a03198716606484015283516048818503018152606890930193849052825194169363abfdcced93918291908401908083835b602083106102e85780518252601f1990920191602091820191016102c9565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b1580156101fc57600080fd00a165627a7a72305820107b737122a43b19a3ec22ce1a99b0d4d19ddce489ce80cbff3bfbca81b08ab50029",
  "deployedBytecode": "0x6080604052600436106100325763ffffffff60e060020a6000350416635cf3693c8114610037578063c26840781461008c575b600080fd5b34801561004357600080fd5b5061007873ffffffffffffffffffffffffffffffffffffffff60043581169060243516600160e060020a0319604435166100cd565b604080519115158252519081900360200190f35b34801561009857600080fd5b5061007873ffffffffffffffffffffffffffffffffffffffff60043581169060243516600160e060020a03196044351661021e565b60008054604080517f617070726f76616c0000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000338102602884015273ffffffffffffffffffffffffffffffffffffffff8981168202603c8501528881169091026050840152600160e060020a031987166064840152835160488185030181526068909301938490528251941693632c62ff2d93918291908401908083835b602083106101975780518252601f199092019160209182019101610178565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b1580156101fc57600080fd5b505af1158015610210573d6000803e3d6000fd5b506001979650505050505050565b60008054604080517f617070726f76616c0000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000338102602884015273ffffffffffffffffffffffffffffffffffffffff8981168202603c8501528881169091026050840152600160e060020a03198716606484015283516048818503018152606890930193849052825194169363abfdcced93918291908401908083835b602083106102e85780518252601f1990920191602091820191016102c9565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b1580156101fc57600080fd00a165627a7a72305820107b737122a43b19a3ec22ce1a99b0d4d19ddce489ce80cbff3bfbca81b08ab50029",
  "sourceMap": "100:877:2:-;;;179:128;8:9:-1;5:2;;;30:1;27;20:12;5:2;179:128:2;;;;;;;;;;;;;;;;;;;239:8;:33;;-1:-1:-1;;;;;239:33:2;;;-1:-1:-1;;;;;;239:33:2;;;;;;;;278:24;;;;;;;;;;;;;;100:877;;;;;;",
  "deployedSourceMap": "100:877:2:-;;;;;;;;;-1:-1:-1;;;100:877:2;;;;;;;;;;;;;;;;;;746:229;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;746:229:2;;;;;;;;;;-1:-1:-1;;;;;;746:229:2;;;;;;;;;;;;;;;;;;;;;;;414:233;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;414:233:2;;;;;;;;;;-1:-1:-1;;;;;;414:233:2;;;;;746:229;838:4;849:8;;879:72;;;;;;;;;;;;;908:10;879:72;;;;;;849:8;879:72;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;879:72:2;;;;;;;;22:32:-1;26:21;;;22:32;6:49;;879:72:2;;;;;;;;869:83;;849:8;;;:19;;879:72;;;869:83;;;;;879:72;869:83;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;869:83:2;;;;;;;;;;;;849:104;;;-1:-1:-1;;;849:104:2;;;;;;;;;;;;;;-1:-1:-1;;;;849:104:2;;;;;;;-1:-1:-1;849:104:2;-1:-1:-1;849:104:2;;;;5:2:-1;;;;30:1;27;20:12;5:2;849:104:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;966:4:2;;746:229;-1:-1:-1;;;;;;;746:229:2:o;414:233::-;507:4;518:8;;545:72;;;;;;;;;;;;;574:10;545:72;;;;;;518:8;545:72;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;545:72:2;;;;;;;;22:32:-1;26:21;;;22:32;6:49;;545:72:2;;;;;;;;535:83;;518:8;;;:16;;545:72;;;535:83;;;;;545:72;535:83;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;535:83:2;;;;;;;;;;;;518:107;;;-1:-1:-1;;;518:107:2;;;;;;;274:1:-1;518:107:2;;;;;;;;;;;-1:-1:-1;;;;518:107:2;;;;;;;-1:-1:-1;518:107:2;-1:-1:-1;518:107:2;;;;5:2:-1;;;;30:1;27;20:12",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/DBInterface.sol\";\nimport \"../database/Events.sol\";\n\ncontract Approval{\n  DBInterface private database;\n  Events private events;\n\n  constructor(address _database, address _events) public{\n    database = DBInterface(_database);\n    events = Events(_events);\n  }\n\n  // @notice A function to approve a user or contract to call functions on another msg.sender's behalf\n  function approve(address _account, address _contract, bytes4 _function)\n  external\n  returns(bool){\n    database.setBool(keccak256(abi.encodePacked(\"approval\", msg.sender, _account, _contract, _function)), true);\n    return true;\n  }\n\n  // @notice The function to revoke approval for another user to call functions for msg.sender\n  function revoke(address _account, address _contract, bytes4 _function)\n  external\n  returns(bool){\n    database.deleteBool(keccak256(abi.encodePacked(\"approval\", msg.sender, _account, _contract, _function)));\n    return true;\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/Approval.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/Approval.sol",
    "exportedSymbols": {
      "Approval": [
        426
      ]
    },
    "id": 427,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 338,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 339,
        "nodeType": "ImportDirective",
        "scope": 427,
        "sourceUnit": 16877,
        "src": "26:39:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 340,
        "nodeType": "ImportDirective",
        "scope": 427,
        "sourceUnit": 14902,
        "src": "66:32:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 426,
        "linearizedBaseContracts": [
          426
        ],
        "name": "Approval",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 342,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "121:28:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBInterface_$16876",
              "typeString": "contract DBInterface"
            },
            "typeName": {
              "contractScope": null,
              "id": 341,
              "name": "DBInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 16876,
              "src": "121:11:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBInterface_$16876",
                "typeString": "contract DBInterface"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 344,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "153:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$14901",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 343,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14901,
              "src": "153:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$14901",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 363,
              "nodeType": "Block",
              "src": "233:74:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 351,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 342,
                      "src": "239:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$16876",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 353,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 346,
                          "src": "262:9:2",
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
                          }
                        ],
                        "id": 352,
                        "name": "DBInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16876,
                        "src": "250:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBInterface_$16876_$",
                          "typeString": "type(contract DBInterface)"
                        }
                      },
                      "id": 354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "250:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$16876",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "src": "239:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBInterface_$16876",
                      "typeString": "contract DBInterface"
                    }
                  },
                  "id": 356,
                  "nodeType": "ExpressionStatement",
                  "src": "239:33:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 357,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 344,
                      "src": "278:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 359,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "294:7:2",
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
                          }
                        ],
                        "id": 358,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14901,
                        "src": "287:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$14901_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "287:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "278:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$14901",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 362,
                  "nodeType": "ExpressionStatement",
                  "src": "278:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 364,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 346,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 364,
                  "src": "191:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:2",
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
                  "id": 348,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 364,
                  "src": "210:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 347,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "210:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "190:36:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "233:0:2"
            },
            "scope": 426,
            "src": "179:128:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 394,
              "nodeType": "Block",
              "src": "512:135:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "617070726f76616c",
                                "id": 381,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "562:10:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                "value": "approval"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 382,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "574:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "574:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 384,
                                "name": "_account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 366,
                                "src": "586:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 385,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 368,
                                "src": "596:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 386,
                                "name": "_function",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 370,
                                "src": "607:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 379,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "545:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 380,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "545:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "545:72:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 378,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "535:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "535:83:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "620:4:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 375,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "518:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$16876",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16784,
                      "src": "518:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "518:107:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 391,
                  "nodeType": "ExpressionStatement",
                  "src": "518:107:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "638:4:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 374,
                  "id": 393,
                  "nodeType": "Return",
                  "src": "631:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 395,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 366,
                  "name": "_account",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "431:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 365,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:7:2",
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
                  "id": 368,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "449:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:2",
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
                  "id": 370,
                  "name": "_function",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "468:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "430:55:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 373,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "507:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 372,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:6:2"
            },
            "scope": 426,
            "src": "414:233:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 424,
              "nodeType": "Block",
              "src": "843:132:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "617070726f76616c",
                                "id": 412,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "896:10:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                "value": "approval"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 413,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "908:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 414,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "908:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 415,
                                "name": "_account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 397,
                                "src": "920:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 416,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 399,
                                "src": "930:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 417,
                                "name": "_function",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 401,
                                "src": "941:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 410,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "879:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 411,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "879:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 418,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "879:72:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 409,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "869:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "869:83:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 406,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "849:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$16876",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 408,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16821,
                      "src": "849:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "849:104:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 421,
                  "nodeType": "ExpressionStatement",
                  "src": "849:104:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "966:4:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 405,
                  "id": 423,
                  "nodeType": "Return",
                  "src": "959:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 425,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revoke",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 397,
                  "name": "_account",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "762:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "762:7:2",
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
                  "id": 399,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "780:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "780:7:2",
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
                  "id": 401,
                  "name": "_function",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "799:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 400,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "761:55:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 404,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "838:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 403,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "837:6:2"
            },
            "scope": 426,
            "src": "746:229:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 427,
        "src": "100:877:2"
      }
    ],
    "src": "0:978:2"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/Approval.sol",
    "exportedSymbols": {
      "Approval": [
        426
      ]
    },
    "id": 427,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 338,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 339,
        "nodeType": "ImportDirective",
        "scope": 427,
        "sourceUnit": 16877,
        "src": "26:39:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 340,
        "nodeType": "ImportDirective",
        "scope": 427,
        "sourceUnit": 14902,
        "src": "66:32:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 426,
        "linearizedBaseContracts": [
          426
        ],
        "name": "Approval",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 342,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "121:28:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBInterface_$16876",
              "typeString": "contract DBInterface"
            },
            "typeName": {
              "contractScope": null,
              "id": 341,
              "name": "DBInterface",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 16876,
              "src": "121:11:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBInterface_$16876",
                "typeString": "contract DBInterface"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 344,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "153:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$14901",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 343,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14901,
              "src": "153:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$14901",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 363,
              "nodeType": "Block",
              "src": "233:74:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 355,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 351,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 342,
                      "src": "239:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$16876",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 353,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 346,
                          "src": "262:9:2",
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
                          }
                        ],
                        "id": 352,
                        "name": "DBInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16876,
                        "src": "250:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBInterface_$16876_$",
                          "typeString": "type(contract DBInterface)"
                        }
                      },
                      "id": 354,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "250:22:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBInterface_$16876",
                        "typeString": "contract DBInterface"
                      }
                    },
                    "src": "239:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBInterface_$16876",
                      "typeString": "contract DBInterface"
                    }
                  },
                  "id": 356,
                  "nodeType": "ExpressionStatement",
                  "src": "239:33:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 357,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 344,
                      "src": "278:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 359,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 348,
                          "src": "294:7:2",
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
                          }
                        ],
                        "id": 358,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14901,
                        "src": "287:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$14901_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "287:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "278:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$14901",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 362,
                  "nodeType": "ExpressionStatement",
                  "src": "278:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 364,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 346,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 364,
                  "src": "191:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 345,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:2",
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
                  "id": 348,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 364,
                  "src": "210:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 347,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "210:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "190:36:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "233:0:2"
            },
            "scope": 426,
            "src": "179:128:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 394,
              "nodeType": "Block",
              "src": "512:135:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "617070726f76616c",
                                "id": 381,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "562:10:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                "value": "approval"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 382,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "574:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "574:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 384,
                                "name": "_account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 366,
                                "src": "586:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 385,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 368,
                                "src": "596:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 386,
                                "name": "_function",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 370,
                                "src": "607:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 379,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "545:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 380,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "545:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "545:72:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 378,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "535:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 388,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "535:83:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 389,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "620:4:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 375,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "518:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$16876",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16784,
                      "src": "518:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "518:107:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 391,
                  "nodeType": "ExpressionStatement",
                  "src": "518:107:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "638:4:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 374,
                  "id": 393,
                  "nodeType": "Return",
                  "src": "631:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 395,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 371,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 366,
                  "name": "_account",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "431:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 365,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:7:2",
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
                  "id": 368,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "449:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 367,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:2",
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
                  "id": 370,
                  "name": "_function",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "468:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 369,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "430:55:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 373,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 395,
                  "src": "507:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 372,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "506:6:2"
            },
            "scope": 426,
            "src": "414:233:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 424,
              "nodeType": "Block",
              "src": "843:132:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "617070726f76616c",
                                "id": 412,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "896:10:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                "value": "approval"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 413,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "908:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 414,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "908:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 415,
                                "name": "_account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 397,
                                "src": "920:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 416,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 399,
                                "src": "930:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 417,
                                "name": "_function",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 401,
                                "src": "941:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                  "typeString": "literal_string \"approval\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 410,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "879:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 411,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "879:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 418,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "879:72:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 409,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "869:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "869:83:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 406,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 342,
                        "src": "849:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBInterface_$16876",
                          "typeString": "contract DBInterface"
                        }
                      },
                      "id": 408,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 16821,
                      "src": "849:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "849:104:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 421,
                  "nodeType": "ExpressionStatement",
                  "src": "849:104:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 422,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "966:4:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 405,
                  "id": 423,
                  "nodeType": "Return",
                  "src": "959:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 425,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revoke",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 397,
                  "name": "_account",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "762:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "762:7:2",
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
                  "id": 399,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "780:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 398,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "780:7:2",
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
                  "id": 401,
                  "name": "_function",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "799:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 400,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "761:55:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 404,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "838:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 403,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "837:6:2"
            },
            "scope": 426,
            "src": "746:229:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 427,
        "src": "100:877:2"
      }
    ],
    "src": "0:978:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.417Z"
}