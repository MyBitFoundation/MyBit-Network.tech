"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MockCentralBank = exports.MockCentralBank = 
{
  "contractName": "MockCentralBank",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "owners",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawEther",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "depositEther",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "addOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000908152602081905260409020805460ff191660011790556102d38061003a6000396000f30060806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663022914a7811461006e5780633bed33ce146100b05780637065cb48146100c857806398ea5fca146100f65780639e281a98146100fe575b005b34801561007a57600080fd5b5061009c73ffffffffffffffffffffffffffffffffffffffff6004351661012f565b604080519115158252519081900360200190f35b3480156100bc57600080fd5b5061006c600435610144565b3480156100d457600080fd5b5061006c73ffffffffffffffffffffffffffffffffffffffff60043516610193565b61006c6101e2565b34801561010a57600080fd5b5061006c73ffffffffffffffffffffffffffffffffffffffff600435166024356101e4565b60006020819052908152604090205460ff1681565b3260009081526020819052604090205460ff16151561016257600080fd5b604051339082156108fc029083906000818181858888f1935050505015801561018f573d6000803e3d6000fd5b5050565b3260009081526020819052604090205460ff1615156101b157600080fd5b73ffffffffffffffffffffffffffffffffffffffff166000908152602081905260409020805460ff19166001179055565b565b3260009081526020819052604090205460ff16151561020257600080fd5b604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101839052905173ffffffffffffffffffffffffffffffffffffffff84169163a9059cbb9160448083019260209291908290030181600087803b15801561027757600080fd5b505af115801561028b573d6000803e3d6000fd5b505050506040513d60208110156102a157600080fd5b505050505600a165627a7a7230582089cb32b320ea35c96c9dce8630b2b5b35304373874eb6cd4b25a1230751d2ca80029",
  "deployedBytecode": "0x60806040526004361061006c5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663022914a7811461006e5780633bed33ce146100b05780637065cb48146100c857806398ea5fca146100f65780639e281a98146100fe575b005b34801561007a57600080fd5b5061009c73ffffffffffffffffffffffffffffffffffffffff6004351661012f565b604080519115158252519081900360200190f35b3480156100bc57600080fd5b5061006c600435610144565b3480156100d457600080fd5b5061006c73ffffffffffffffffffffffffffffffffffffffff60043516610193565b61006c6101e2565b34801561010a57600080fd5b5061006c73ffffffffffffffffffffffffffffffffffffffff600435166024356101e4565b60006020819052908152604090205460ff1681565b3260009081526020819052604090205460ff16151561016257600080fd5b604051339082156108fc029083906000818181858888f1935050505015801561018f573d6000803e3d6000fd5b5050565b3260009081526020819052604090205460ff1615156101b157600080fd5b73ffffffffffffffffffffffffffffffffffffffff166000908152602081905260409020805460ff19166001179055565b565b3260009081526020819052604090205460ff16151561020257600080fd5b604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101839052905173ffffffffffffffffffffffffffffffffffffffff84169163a9059cbb9160448083019260209291908290030181600087803b15801561027757600080fd5b505af115801561028b573d6000803e3d6000fd5b505050506040513d60208110156102a157600080fd5b505050505600a165627a7a7230582089cb32b320ea35c96c9dce8630b2b5b35304373874eb6cd4b25a1230751d2ca80029",
  "sourceMap": "242:701:52:-;;;316:63;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;354:10:52;347:6;:18;;;;;;;;;;:25;;-1:-1:-1;;347:25:52;368:4;347:25;;;242:701;;;;;;",
  "deployedSourceMap": "242:701:52:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;273:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;273:36:52;;;;;;;;;;;;;;;;;;;;;;;;;420:131;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;420:131:52;;;;;817:124;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;817:124:52;;;;;;;712:99;;;;557:149;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;557:149:52;;;;;;;;;273:36;;;;;;;;;;;;;;;;:::o;420:131::-;486:9;479:6;:17;;;;;;;;;;;;;477:19;473:33;;;498:8;;;473:33;517:27;;:10;;:27;;;;;537:6;;517:27;;;;537:6;517:10;:27;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;517:27:52;420:131;:::o;817:124::-;882:9;875:6;:17;;;;;;;;;;;;;873:19;868:35;;;895:8;;;868:35;911:16;;:6;:16;;;;;;;;;;:23;;-1:-1:-1;;911:23:52;930:4;911:23;;;817:124::o;712:99::-;:::o;557:149::-;635:9;628:6;:17;;;;;;;;;;;;;627:18;623:32;;;647:8;;;623:32;666:33;;;;;;681:10;666:33;;;;;;;;;;;;:14;;;;;;:33;;;;;;;;;;;;;;-1:-1:-1;666:14:52;:33;;;5:2:-1;;;;30:1;27;20:12;5:2;666:33:52;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;666:33:52;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;557:149:52:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n\n/// @title Mock Central Bank\n/// @author Yaron Velner\n/// @dev a dummy contract that simulates a bank that holds tokens and ether. centralized exchanges can convert tokens here.\n\n\ncontract MockCentralBank {\n    mapping(address=>bool) public owners;\n\n    constructor() public {\n        owners[msg.sender] = true;\n    }\n\n    function() payable public { }\n\n    function withdrawEther(uint amount) public {\n        if (! owners[tx.origin]) revert();\n\n        msg.sender.transfer(amount);\n    }\n\n    function withdrawToken(ERC20 token, uint amount) public {\n        if (!owners[tx.origin]) revert();\n\n        token.transfer(msg.sender,amount);\n    }\n\n    function depositEther() public payable {\n        // just to simplify interaction with testrpc\n    }\n\n    function addOwner(address newOwner) public {\n      if ( ! owners[tx.origin] ) revert();\n      owners[newOwner] = true;\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
    "exportedSymbols": {
      "MockCentralBank": [
        15770
      ]
    },
    "id": 15771,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15676,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:52"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 15677,
        "nodeType": "ImportDirective",
        "scope": 15771,
        "sourceUnit": 9534,
        "src": "26:33:52",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Mock Central Bank\n @author Yaron Velner\n @dev a dummy contract that simulates a bank that holds tokens and ether. centralized exchanges can convert tokens here.",
        "fullyImplemented": true,
        "id": 15770,
        "linearizedBaseContracts": [
          15770
        ],
        "name": "MockCentralBank",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15681,
            "name": "owners",
            "nodeType": "VariableDeclaration",
            "scope": 15770,
            "src": "273:36:52",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 15680,
              "keyType": {
                "id": 15678,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "281:7:52",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "273:22:52",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 15679,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "290:4:52",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15691,
              "nodeType": "Block",
              "src": "337:42:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15684,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "347:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15687,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15685,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "354:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "354:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "347:18:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 15688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "368:4:52",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "347:25:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15690,
                  "nodeType": "ExpressionStatement",
                  "src": "347:25:52"
                }
              ]
            },
            "documentation": null,
            "id": 15692,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "327:2:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15683,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:52"
            },
            "scope": 15770,
            "src": "316:63:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15695,
              "nodeType": "Block",
              "src": "411:3:52",
              "statements": []
            },
            "documentation": null,
            "id": 15696,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "393:2:52"
            },
            "payable": true,
            "returnParameters": {
              "id": 15694,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "411:0:52"
            },
            "scope": 15770,
            "src": "385:29:52",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15718,
              "nodeType": "Block",
              "src": "463:88:52",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 15705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "477:19:52",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15701,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "479:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15704,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15702,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34935,
                          "src": "486:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 15703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "486:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "479:17:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15709,
                  "nodeType": "IfStatement",
                  "src": "473:33:52",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 15706,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          34928,
                          34929
                        ],
                        "referencedDeclaration": 34928,
                        "src": "498:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 15707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "498:8:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 15708,
                    "nodeType": "ExpressionStatement",
                    "src": "498:8:52"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15715,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15698,
                        "src": "537:6:52",
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
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15710,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "517:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "517:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 15714,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "517:19:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 15716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "517:27:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15717,
                  "nodeType": "ExpressionStatement",
                  "src": "517:27:52"
                }
              ]
            },
            "documentation": null,
            "id": 15719,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15698,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15719,
                  "src": "443:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15697,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "442:13:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15700,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "463:0:52"
            },
            "scope": 15770,
            "src": "420:131:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15743,
              "nodeType": "Block",
              "src": "613:93:52",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 15730,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "627:18:52",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15726,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "628:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15729,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15727,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34935,
                          "src": "635:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 15728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "635:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "628:17:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15734,
                  "nodeType": "IfStatement",
                  "src": "623:32:52",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 15731,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          34928,
                          34929
                        ],
                        "referencedDeclaration": 34928,
                        "src": "647:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 15732,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "647:8:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 15733,
                    "nodeType": "ExpressionStatement",
                    "src": "647:8:52"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15738,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "681:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15739,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "681:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 15740,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15723,
                        "src": "692:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15735,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15721,
                        "src": "666:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 15737,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9496,
                      "src": "666:14:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 15741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "666:33:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15742,
                  "nodeType": "ExpressionStatement",
                  "src": "666:33:52"
                }
              ]
            },
            "documentation": null,
            "id": 15744,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15721,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 15744,
                  "src": "580:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15720,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "580:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15723,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15744,
                  "src": "593:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15722,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "579:26:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15725,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "613:0:52"
            },
            "scope": 15770,
            "src": "557:149:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15747,
              "nodeType": "Block",
              "src": "751:60:52",
              "statements": []
            },
            "documentation": null,
            "id": 15748,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "depositEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15745,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "733:2:52"
            },
            "payable": true,
            "returnParameters": {
              "id": 15746,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "751:0:52"
            },
            "scope": 15770,
            "src": "712:99:52",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15768,
              "nodeType": "Block",
              "src": "860:81:52",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 15757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "873:19:52",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15753,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "875:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15756,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15754,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34935,
                          "src": "882:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 15755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "882:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "875:17:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15761,
                  "nodeType": "IfStatement",
                  "src": "868:35:52",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 15758,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          34928,
                          34929
                        ],
                        "referencedDeclaration": 34928,
                        "src": "895:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 15759,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "895:8:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 15760,
                    "nodeType": "ExpressionStatement",
                    "src": "895:8:52"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15762,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "911:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15764,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 15763,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15750,
                        "src": "918:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "911:16:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 15765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "930:4:52",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "911:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15767,
                  "nodeType": "ExpressionStatement",
                  "src": "911:23:52"
                }
              ]
            },
            "documentation": null,
            "id": 15769,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15750,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15769,
                  "src": "835:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "835:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "834:18:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "860:0:52"
            },
            "scope": 15770,
            "src": "817:124:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 15771,
        "src": "242:701:52"
      }
    ],
    "src": "0:944:52"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
    "exportedSymbols": {
      "MockCentralBank": [
        15770
      ]
    },
    "id": 15771,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15676,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:52"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 15677,
        "nodeType": "ImportDirective",
        "scope": 15771,
        "sourceUnit": 9534,
        "src": "26:33:52",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Mock Central Bank\n @author Yaron Velner\n @dev a dummy contract that simulates a bank that holds tokens and ether. centralized exchanges can convert tokens here.",
        "fullyImplemented": true,
        "id": 15770,
        "linearizedBaseContracts": [
          15770
        ],
        "name": "MockCentralBank",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15681,
            "name": "owners",
            "nodeType": "VariableDeclaration",
            "scope": 15770,
            "src": "273:36:52",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 15680,
              "keyType": {
                "id": 15678,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "281:7:52",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "273:22:52",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 15679,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "290:4:52",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15691,
              "nodeType": "Block",
              "src": "337:42:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15684,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "347:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15687,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15685,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "354:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15686,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "354:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "347:18:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 15688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "368:4:52",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "347:25:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15690,
                  "nodeType": "ExpressionStatement",
                  "src": "347:25:52"
                }
              ]
            },
            "documentation": null,
            "id": 15692,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15682,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "327:2:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15683,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "337:0:52"
            },
            "scope": 15770,
            "src": "316:63:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15695,
              "nodeType": "Block",
              "src": "411:3:52",
              "statements": []
            },
            "documentation": null,
            "id": 15696,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "393:2:52"
            },
            "payable": true,
            "returnParameters": {
              "id": 15694,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "411:0:52"
            },
            "scope": 15770,
            "src": "385:29:52",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15718,
              "nodeType": "Block",
              "src": "463:88:52",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 15705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "477:19:52",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15701,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "479:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15704,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15702,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34935,
                          "src": "486:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 15703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "486:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "479:17:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15709,
                  "nodeType": "IfStatement",
                  "src": "473:33:52",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 15706,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          34928,
                          34929
                        ],
                        "referencedDeclaration": 34928,
                        "src": "498:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 15707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "498:8:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 15708,
                    "nodeType": "ExpressionStatement",
                    "src": "498:8:52"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15715,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15698,
                        "src": "537:6:52",
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
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15710,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "517:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "517:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 15714,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "517:19:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 15716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "517:27:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15717,
                  "nodeType": "ExpressionStatement",
                  "src": "517:27:52"
                }
              ]
            },
            "documentation": null,
            "id": 15719,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15698,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15719,
                  "src": "443:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15697,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "442:13:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15700,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "463:0:52"
            },
            "scope": 15770,
            "src": "420:131:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15743,
              "nodeType": "Block",
              "src": "613:93:52",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 15730,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "627:18:52",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15726,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "628:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15729,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15727,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34935,
                          "src": "635:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 15728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "635:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "628:17:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15734,
                  "nodeType": "IfStatement",
                  "src": "623:32:52",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 15731,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          34928,
                          34929
                        ],
                        "referencedDeclaration": 34928,
                        "src": "647:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 15732,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "647:8:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 15733,
                    "nodeType": "ExpressionStatement",
                    "src": "647:8:52"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15738,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "681:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 15739,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "681:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 15740,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15723,
                        "src": "692:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15735,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15721,
                        "src": "666:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 15737,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9496,
                      "src": "666:14:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 15741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "666:33:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15742,
                  "nodeType": "ExpressionStatement",
                  "src": "666:33:52"
                }
              ]
            },
            "documentation": null,
            "id": 15744,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15721,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 15744,
                  "src": "580:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15720,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "580:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15723,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15744,
                  "src": "593:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15722,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "579:26:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15725,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "613:0:52"
            },
            "scope": 15770,
            "src": "557:149:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15747,
              "nodeType": "Block",
              "src": "751:60:52",
              "statements": []
            },
            "documentation": null,
            "id": 15748,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "depositEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15745,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "733:2:52"
            },
            "payable": true,
            "returnParameters": {
              "id": 15746,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "751:0:52"
            },
            "scope": 15770,
            "src": "712:99:52",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15768,
              "nodeType": "Block",
              "src": "860:81:52",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 15757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "873:19:52",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15753,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "875:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15756,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 15754,
                          "name": "tx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34935,
                          "src": "882:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_transaction",
                            "typeString": "tx"
                          }
                        },
                        "id": 15755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "origin",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "882:9:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "875:17:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15761,
                  "nodeType": "IfStatement",
                  "src": "868:35:52",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 15758,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          34928,
                          34929
                        ],
                        "referencedDeclaration": 34928,
                        "src": "895:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 15759,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "895:8:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 15760,
                    "nodeType": "ExpressionStatement",
                    "src": "895:8:52"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 15762,
                        "name": "owners",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15681,
                        "src": "911:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 15764,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 15763,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15750,
                        "src": "918:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "911:16:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 15765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "930:4:52",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "911:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15767,
                  "nodeType": "ExpressionStatement",
                  "src": "911:23:52"
                }
              ]
            },
            "documentation": null,
            "id": 15769,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15751,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15750,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15769,
                  "src": "835:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "835:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "834:18:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "860:0:52"
            },
            "scope": 15770,
            "src": "817:124:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 15771,
        "src": "242:701:52"
      }
    ],
    "src": "0:944:52"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.644Z",
  "devdoc": {
    "author": "Yaron Velner",
    "methods": {},
    "title": "Mock Central Bank"
  },
  "userdoc": {
    "methods": {}
  }
}