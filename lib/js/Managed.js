"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Managed = exports.Managed = 
{
  "contractName": "Managed",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "newManager",
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
      "name": "manager",
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
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
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
          "name": "_prevManager",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_newManager",
          "type": "address"
        }
      ],
      "name": "ManagerUpdate",
      "type": "event"
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
          "name": "_newManager",
          "type": "address"
        }
      ],
      "name": "transferManagement",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptManagement",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506000805433600160a060020a031991821681178355600280549092161790556103c390819061004090396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663429060298114610092578063481c6a75146100c357806379ba5097146100d85780638da5cb5b146100ef578063c8c2fe6c14610104578063d4ee1d9014610119578063e4edf8521461012e578063f2fde38b1461014f575b600080fd5b34801561009e57600080fd5b506100a7610170565b60408051600160a060020a039092168252519081900360200190f35b3480156100cf57600080fd5b506100a761017f565b3480156100e457600080fd5b506100ed61018e565b005b3480156100fb57600080fd5b506100a7610216565b34801561011057600080fd5b506100ed610225565b34801561012557600080fd5b506100a76102af565b34801561013a57600080fd5b506100ed600160a060020a03600435166102be565b34801561015b57600080fd5b506100ed600160a060020a0360043516610336565b600354600160a060020a031681565b600254600160a060020a031681565b600154600160a060020a031633146101a557600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600354600160a060020a0316331461023c57600080fd5b600354600254604051600160a060020a0392831692909116907fbe4cc281795971a471c980e842627a7f1ea3892ddfce8c5b6357cd2611c1973290600090a3600380546002805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600154600160a060020a031681565b600054600160a060020a03163314806102e15750600254600160a060020a031633145b15156102ec57600080fd5b600254600160a060020a038281169116141561030757600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600054600160a060020a0316331461034d57600080fd5b600054600160a060020a038281169116141561036857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820b5292bb33b404585ce2794ffdda6660a84261c2f3ecdda4e2bd2cfc167cf7f9b0029",
  "deployedBytecode": "0x60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663429060298114610092578063481c6a75146100c357806379ba5097146100d85780638da5cb5b146100ef578063c8c2fe6c14610104578063d4ee1d9014610119578063e4edf8521461012e578063f2fde38b1461014f575b600080fd5b34801561009e57600080fd5b506100a7610170565b60408051600160a060020a039092168252519081900360200190f35b3480156100cf57600080fd5b506100a761017f565b3480156100e457600080fd5b506100ed61018e565b005b3480156100fb57600080fd5b506100a7610216565b34801561011057600080fd5b506100ed610225565b34801561012557600080fd5b506100a76102af565b34801561013a57600080fd5b506100ed600160a060020a03600435166102be565b34801561015b57600080fd5b506100ed600160a060020a0360043516610336565b600354600160a060020a031681565b600254600160a060020a031681565b600154600160a060020a031633146101a557600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600354600160a060020a0316331461023c57600080fd5b600354600254604051600160a060020a0392831692909116907fbe4cc281795971a471c980e842627a7f1ea3892ddfce8c5b6357cd2611c1973290600090a3600380546002805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600154600160a060020a031681565b600054600160a060020a03163314806102e15750600254600160a060020a031633145b15156102ec57600080fd5b600254600160a060020a038281169116141561030757600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600054600160a060020a0316331461034d57600080fd5b600054600160a060020a038281169116141561036857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820b5292bb33b404585ce2794ffdda6660a84261c2f3ecdda4e2bd2cfc167cf7f9b0029",
  "sourceMap": "170:1266:34:-;;;387:58;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;361:5:35;:18;;369:10;-1:-1:-1;;;;;;361:18:35;;;;;;;418:7:34;:20;;;;;;;;170:1266;;;;;;;;",
  "deployedSourceMap": "170:1266:34:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;230:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;230:25:34;;;;;;;;-1:-1:-1;;;;;230:25:34;;;;;;;;;;;;;;202:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;202:22:34;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;;;155:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;1237:197:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1237:197:34;;;;181:23:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;992:157:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;992:157:34;-1:-1:-1;;;;;992:157:34;;;;;740:137:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;230:25:34;;;-1:-1:-1;;;;;230:25:34;;:::o;202:22::-;;;-1:-1:-1;;;;;202:22:34;;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;155:20::-;;;-1:-1:-1;;;;;155:20:35;;:::o;1237:197:34:-;1304:10;;-1:-1:-1;;;;;1304:10:34;1290;:24;1282:33;;;;;;1353:10;;1344:7;;1330:34;;-1:-1:-1;;;;;1353:10:34;;;;1344:7;;;;1330:34;;1353:10;;1330:34;1384:10;;;1374:7;:20;;-1:-1:-1;;1374:20:34;;;-1:-1:-1;;;;;1384:10:34;;1374:20;;;;1404:23;;;1237:197::o;181:23:35:-;;;-1:-1:-1;;;;;181:23:35;;:::o;992:157:34:-;703:5;;-1:-1:-1;;;;;703:5:34;689:10;:19;;:44;;-1:-1:-1;726:7:34;;-1:-1:-1;;;;;726:7:34;712:10;:21;689:44;681:53;;;;;;;;1100:7;;-1:-1:-1;;;;;1085:22:34;;;1100:7;;1085:22;;1077:31;;;;;;1118:10;:24;;-1:-1:-1;;1118:24:34;-1:-1:-1;;;;;1118:24:34;;;;;;;;;;992:157::o;740:137:35:-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o",
  "source": "pragma solidity ^0.4.24;\nimport './Owned.sol';\n\n/*\n    Provides support and utilities for contract management\n    Note that a managed contract must also have an owner\n*/\ncontract Managed is Owned {\n    address public manager;\n    address public newManager;\n\n    event ManagerUpdate(address indexed _prevManager, address indexed _newManager);\n\n    /**\n        @dev constructor\n    */\n    constructor() public {\n        manager = msg.sender;\n    }\n\n    // allows execution by the manager only\n    modifier managerOnly {\n        assert(msg.sender == manager);\n        _;\n    }\n\n    // allows execution by either the owner or the manager only\n    modifier ownerOrManagerOnly {\n        require(msg.sender == owner || msg.sender == manager);\n        _;\n    }\n\n    /**\n        @dev allows transferring the contract management\n        the new manager still needs to accept the transfer\n        can only be called by the contract manager\n\n        @param _newManager    new contract manager\n    */\n    function transferManagement(address _newManager) public ownerOrManagerOnly {\n        require(_newManager != manager);\n        newManager = _newManager;\n    }\n\n    /**\n        @dev used by a new manager to accept a management transfer\n    */\n    function acceptManagement() public {\n        require(msg.sender == newManager);\n        emit ManagerUpdate(manager, newManager);\n        manager = newManager;\n        newManager = address(0);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Managed.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Managed.sol",
    "exportedSymbols": {
      "Managed": [
        9434
      ]
    },
    "id": 9435,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9340,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9341,
        "nodeType": "ImportDirective",
        "scope": 9435,
        "sourceUnit": 9515,
        "src": "25:21:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9342,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "190:5:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9343,
            "nodeType": "InheritanceSpecifier",
            "src": "190:5:34"
          }
        ],
        "contractDependencies": [
          9514,
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9434,
        "linearizedBaseContracts": [
          9434,
          9514,
          9887
        ],
        "name": "Managed",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9345,
            "name": "manager",
            "nodeType": "VariableDeclaration",
            "scope": 9434,
            "src": "202:22:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9344,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "202:7:34",
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
            "id": 9347,
            "name": "newManager",
            "nodeType": "VariableDeclaration",
            "scope": 9434,
            "src": "230:25:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9346,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "230:7:34",
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
            "id": 9353,
            "name": "ManagerUpdate",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9349,
                  "indexed": true,
                  "name": "_prevManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9353,
                  "src": "282:28:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "282:7:34",
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
                  "id": 9351,
                  "indexed": true,
                  "name": "_newManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9353,
                  "src": "312:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9350,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "281:59:34"
            },
            "src": "262:79:34"
          },
          {
            "body": {
              "id": 9361,
              "nodeType": "Block",
              "src": "408:37:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9356,
                      "name": "manager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9345,
                      "src": "418:7:34",
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
                        "id": 9357,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28038,
                        "src": "428:3:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "428:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "418:20:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9360,
                  "nodeType": "ExpressionStatement",
                  "src": "418:20:34"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 9362,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9354,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 9355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "408:0:34"
            },
            "scope": 9434,
            "src": "387:58:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9372,
              "nodeType": "Block",
              "src": "516:57:34",
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
                        "id": 9368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9365,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "533:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "533:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9367,
                          "name": "manager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9345,
                          "src": "547:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "533:21:34",
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
                      "id": 9364,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28027,
                      "src": "526:6:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:29:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9370,
                  "nodeType": "ExpressionStatement",
                  "src": "526:29:34"
                },
                {
                  "id": 9371,
                  "nodeType": "PlaceholderStatement",
                  "src": "565:1:34"
                }
              ]
            },
            "documentation": null,
            "id": 9373,
            "name": "managerOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9363,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "516:0:34"
            },
            "src": "495:78:34",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9388,
              "nodeType": "Block",
              "src": "671:81:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 9384,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9376,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "689:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "689:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 9378,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              9441
                            ],
                            "referencedDeclaration": 9441,
                            "src": "703:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "689:19:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9380,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "712:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9381,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "712:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 9382,
                            "name": "manager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9345,
                            "src": "726:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "712:21:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "689:44:34",
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
                      "id": 9375,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "681:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "681:53:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9386,
                  "nodeType": "ExpressionStatement",
                  "src": "681:53:34"
                },
                {
                  "id": 9387,
                  "nodeType": "PlaceholderStatement",
                  "src": "744:1:34"
                }
              ]
            },
            "documentation": null,
            "id": 9389,
            "name": "ownerOrManagerOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "671:0:34"
            },
            "src": "643:109:34",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9406,
              "nodeType": "Block",
              "src": "1067:82:34",
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
                        "id": 9399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 9397,
                          "name": "_newManager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9391,
                          "src": "1085:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9398,
                          "name": "manager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9345,
                          "src": "1100:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1085:22:34",
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
                      "id": 9396,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1077:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1077:31:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9401,
                  "nodeType": "ExpressionStatement",
                  "src": "1077:31:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9402,
                      "name": "newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9347,
                      "src": "1118:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9403,
                      "name": "_newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9391,
                      "src": "1131:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1118:24:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9405,
                  "nodeType": "ExpressionStatement",
                  "src": "1118:24:34"
                }
              ]
            },
            "documentation": "@dev allows transferring the contract management\nthe new manager still needs to accept the transfer\ncan only be called by the contract manager\n@param _newManager    new contract manager",
            "id": 9407,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9394,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9393,
                  "name": "ownerOrManagerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9389,
                  "src": "1048:18:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1048:18:34"
              }
            ],
            "name": "transferManagement",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9391,
                  "name": "_newManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9407,
                  "src": "1020:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:21:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 9395,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1067:0:34"
            },
            "scope": 9434,
            "src": "992:157:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9432,
              "nodeType": "Block",
              "src": "1272:162:34",
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
                        "id": 9414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9411,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "1290:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1290:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9413,
                          "name": "newManager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9347,
                          "src": "1304:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1290:24:34",
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
                      "id": 9410,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1282:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1282:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9416,
                  "nodeType": "ExpressionStatement",
                  "src": "1282:33:34"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9418,
                        "name": "manager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9345,
                        "src": "1344:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9419,
                        "name": "newManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9347,
                        "src": "1353:10:34",
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
                      "id": 9417,
                      "name": "ManagerUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9353,
                      "src": "1330:13:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 9420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1330:34:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9421,
                  "nodeType": "EmitStatement",
                  "src": "1325:39:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9422,
                      "name": "manager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9345,
                      "src": "1374:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9423,
                      "name": "newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9347,
                      "src": "1384:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1374:20:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9425,
                  "nodeType": "ExpressionStatement",
                  "src": "1374:20:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9426,
                      "name": "newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9347,
                      "src": "1404:10:34",
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
                          "id": 9428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1425:1:34",
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
                        "id": 9427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1417:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 9429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1417:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1404:23:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9431,
                  "nodeType": "ExpressionStatement",
                  "src": "1404:23:34"
                }
              ]
            },
            "documentation": "@dev used by a new manager to accept a management transfer",
            "id": 9433,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptManagement",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1262:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 9409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1272:0:34"
            },
            "scope": 9434,
            "src": "1237:197:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9435,
        "src": "170:1266:34"
      }
    ],
    "src": "0:1437:34"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Managed.sol",
    "exportedSymbols": {
      "Managed": [
        9434
      ]
    },
    "id": 9435,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9340,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9341,
        "nodeType": "ImportDirective",
        "scope": 9435,
        "sourceUnit": 9515,
        "src": "25:21:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9342,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "190:5:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9343,
            "nodeType": "InheritanceSpecifier",
            "src": "190:5:34"
          }
        ],
        "contractDependencies": [
          9514,
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9434,
        "linearizedBaseContracts": [
          9434,
          9514,
          9887
        ],
        "name": "Managed",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9345,
            "name": "manager",
            "nodeType": "VariableDeclaration",
            "scope": 9434,
            "src": "202:22:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9344,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "202:7:34",
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
            "id": 9347,
            "name": "newManager",
            "nodeType": "VariableDeclaration",
            "scope": 9434,
            "src": "230:25:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9346,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "230:7:34",
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
            "id": 9353,
            "name": "ManagerUpdate",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9349,
                  "indexed": true,
                  "name": "_prevManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9353,
                  "src": "282:28:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "282:7:34",
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
                  "id": 9351,
                  "indexed": true,
                  "name": "_newManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9353,
                  "src": "312:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9350,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "281:59:34"
            },
            "src": "262:79:34"
          },
          {
            "body": {
              "id": 9361,
              "nodeType": "Block",
              "src": "408:37:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9356,
                      "name": "manager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9345,
                      "src": "418:7:34",
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
                        "id": 9357,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28038,
                        "src": "428:3:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "428:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "418:20:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9360,
                  "nodeType": "ExpressionStatement",
                  "src": "418:20:34"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 9362,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9354,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 9355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "408:0:34"
            },
            "scope": 9434,
            "src": "387:58:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9372,
              "nodeType": "Block",
              "src": "516:57:34",
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
                        "id": 9368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9365,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "533:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "533:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9367,
                          "name": "manager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9345,
                          "src": "547:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "533:21:34",
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
                      "id": 9364,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28027,
                      "src": "526:6:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:29:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9370,
                  "nodeType": "ExpressionStatement",
                  "src": "526:29:34"
                },
                {
                  "id": 9371,
                  "nodeType": "PlaceholderStatement",
                  "src": "565:1:34"
                }
              ]
            },
            "documentation": null,
            "id": 9373,
            "name": "managerOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9363,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "516:0:34"
            },
            "src": "495:78:34",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9388,
              "nodeType": "Block",
              "src": "671:81:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 9384,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9376,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "689:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "689:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 9378,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              9441
                            ],
                            "referencedDeclaration": 9441,
                            "src": "703:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "689:19:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9380,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "712:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9381,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "712:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 9382,
                            "name": "manager",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9345,
                            "src": "726:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "712:21:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "689:44:34",
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
                      "id": 9375,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "681:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9385,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "681:53:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9386,
                  "nodeType": "ExpressionStatement",
                  "src": "681:53:34"
                },
                {
                  "id": 9387,
                  "nodeType": "PlaceholderStatement",
                  "src": "744:1:34"
                }
              ]
            },
            "documentation": null,
            "id": 9389,
            "name": "ownerOrManagerOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "671:0:34"
            },
            "src": "643:109:34",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9406,
              "nodeType": "Block",
              "src": "1067:82:34",
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
                        "id": 9399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 9397,
                          "name": "_newManager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9391,
                          "src": "1085:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9398,
                          "name": "manager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9345,
                          "src": "1100:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1085:22:34",
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
                      "id": 9396,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1077:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1077:31:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9401,
                  "nodeType": "ExpressionStatement",
                  "src": "1077:31:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9402,
                      "name": "newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9347,
                      "src": "1118:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9403,
                      "name": "_newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9391,
                      "src": "1131:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1118:24:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9405,
                  "nodeType": "ExpressionStatement",
                  "src": "1118:24:34"
                }
              ]
            },
            "documentation": "@dev allows transferring the contract management\nthe new manager still needs to accept the transfer\ncan only be called by the contract manager\n@param _newManager    new contract manager",
            "id": 9407,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9394,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9393,
                  "name": "ownerOrManagerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9389,
                  "src": "1048:18:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1048:18:34"
              }
            ],
            "name": "transferManagement",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9391,
                  "name": "_newManager",
                  "nodeType": "VariableDeclaration",
                  "scope": 9407,
                  "src": "1020:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9390,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1019:21:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 9395,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1067:0:34"
            },
            "scope": 9434,
            "src": "992:157:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9432,
              "nodeType": "Block",
              "src": "1272:162:34",
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
                        "id": 9414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9411,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "1290:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1290:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 9413,
                          "name": "newManager",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9347,
                          "src": "1304:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1290:24:34",
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
                      "id": 9410,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1282:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9415,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1282:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9416,
                  "nodeType": "ExpressionStatement",
                  "src": "1282:33:34"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9418,
                        "name": "manager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9345,
                        "src": "1344:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 9419,
                        "name": "newManager",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9347,
                        "src": "1353:10:34",
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
                      "id": 9417,
                      "name": "ManagerUpdate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9353,
                      "src": "1330:13:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 9420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1330:34:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9421,
                  "nodeType": "EmitStatement",
                  "src": "1325:39:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9422,
                      "name": "manager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9345,
                      "src": "1374:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9423,
                      "name": "newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9347,
                      "src": "1384:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1374:20:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9425,
                  "nodeType": "ExpressionStatement",
                  "src": "1374:20:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9426,
                      "name": "newManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9347,
                      "src": "1404:10:34",
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
                          "id": 9428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1425:1:34",
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
                        "id": 9427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1417:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 9429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1417:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1404:23:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9431,
                  "nodeType": "ExpressionStatement",
                  "src": "1404:23:34"
                }
              ]
            },
            "documentation": "@dev used by a new manager to accept a management transfer",
            "id": 9433,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptManagement",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1262:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 9409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1272:0:34"
            },
            "scope": 9434,
            "src": "1237:197:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9435,
        "src": "170:1266:34"
      }
    ],
    "src": "0:1437:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:52.898Z"
}