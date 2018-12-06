"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var HashEncode = exports.HashEncode = 
{
  "contractName": "HashEncode",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bytes32"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bool"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "uint256"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "address"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bytes32"
        },
        {
          "name": "_arg2",
          "type": "bytes32"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bytes32"
        },
        {
          "name": "_arg2",
          "type": "uint256"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x610563610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f300730000000000000000000000000000000000000000301460806040526004361061008e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304503ff481146100935780630a9320a0146100f35780633c1c8e4914610093578063af491f3014610143578063c42ff019146101a7578063efab5a5b146101a7575b600080fd5b6040805160206004803580820135601f81018490048402850184019095528484526100e194369492936024939284019190819084018382808284375094975050933594506101fc9350505050565b60408051918252519081900360200190f35b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050509135151592506102c5915050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050923573ffffffffffffffffffffffffffffffffffffffff16935061038a92505050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505084359550505060209092013591506104649050565b600082826040516020018083805190602001908083835b602083106102325780518252601f199092019160209182019101610213565b51815160209384036101000a600019018019909216911617905292019384525060408051808503815293820190819052835193945092839250908401908083835b602083106102925780518252601f199092019160209182019101610273565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209695505050505050565b600082826040516020018083805190602001908083835b602083106102fb5780518252601f1990920191602091820191016102dc565b6001836020036101000a03801982511681845116808217855250505050505090500182151515157f010000000000000000000000000000000000000000000000000000000000000002815260010192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b600082826040516020018083805190602001908083835b602083106103c05780518252601f1990920191602091820191016103a1565b6001836020036101000a0380198251168184511680821785525050505050509050018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b60008383836040516020018084805190602001908083835b6020831061049b5780518252601f19909201916020918201910161047c565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181529281019081905282519293509182918401908083835b602083106105035780518252601f1990920191602091820191016104e4565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209796505050505050505600a165627a7a72305820f8776d996dffac5ed8f3f704a9000b15b21dc081144151f7447d00f64fc1f2540029",
  "deployedBytecode": "0x730000000000000000000000000000000000000000301460806040526004361061008e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304503ff481146100935780630a9320a0146100f35780633c1c8e4914610093578063af491f3014610143578063c42ff019146101a7578063efab5a5b146101a7575b600080fd5b6040805160206004803580820135601f81018490048402850184019095528484526100e194369492936024939284019190819084018382808284375094975050933594506101fc9350505050565b60408051918252519081900360200190f35b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050509135151592506102c5915050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050923573ffffffffffffffffffffffffffffffffffffffff16935061038a92505050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505084359550505060209092013591506104649050565b600082826040516020018083805190602001908083835b602083106102325780518252601f199092019160209182019101610213565b51815160209384036101000a600019018019909216911617905292019384525060408051808503815293820190819052835193945092839250908401908083835b602083106102925780518252601f199092019160209182019101610273565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209695505050505050565b600082826040516020018083805190602001908083835b602083106102fb5780518252601f1990920191602091820191016102dc565b6001836020036101000a03801982511681845116808217855250505050505090500182151515157f010000000000000000000000000000000000000000000000000000000000000002815260010192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b600082826040516020018083805190602001908083835b602083106103c05780518252601f1990920191602091820191016103a1565b6001836020036101000a0380198251168184511680821785525050505050509050018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b60008383836040516020018084805190602001908083835b6020831061049b5780518252601f19909201916020918201910161047c565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181529281019081905282519293509182918401908083835b602083106105035780518252601f1990920191602091820191016104e4565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209796505050505050505600a165627a7a72305820f8776d996dffac5ed8f3f704a9000b15b21dc081144151f7447d00f64fc1f2540029",
  "sourceMap": "25:904:52:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "25:904:52:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;73:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;73:134:52;;-1:-1:-1;;73:134:52;;;-1:-1:-1;73:134:52;;-1:-1:-1;;;;73:134:52;;;;;;;;;;;;;;;;;796:131;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;796:131:52;;-1:-1:-1;;;;796:131:52;;;;;-1:-1:-1;796:131:52;;-1:-1:-1;;796:131:52;525:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;525:134:52;;-1:-1:-1;;;525:134:52;;;;;-1:-1:-1;525:134:52;;-1:-1:-1;;;525:134:52;210:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;210:156:52;;-1:-1:-1;;210:156:52;;;-1:-1:-1;;;210:156:52;;;;;;-1:-1:-1;210:156:52;;-1:-1:-1;210:156:52;73:134;139:7;187:6;195:5;170:31;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;170:31:52;;;;;-1:-1:-1;170:31:52;;;26:21:-1;;;6:49;;170:31:52;;;;;;;160:42;;170:31;;-1:-1:-1;170:31:52;;;-1:-1:-1;160:42:52;;;;;170:31;160:42;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;160:42:52;;;;;;;;;;;;-1:-1:-1;;;;;;73:134:52:o;796:131::-;859:7;907:6;915:5;890:31;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;890:31:52;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;890:31:52;;;880:42;;;;;;;;;;;;;66:2:-1;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;525:134:52;591:7;639:6;647:5;622:31;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;622:31:52;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;622:31:52;;;612:42;;;;;;;;;;;;;66:2:-1;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;210:156:52;291:7;339:6;347:5;354;322:38;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;322:38:52;;;;;-1:-1:-1;322:38:52;;;;;;;-1:-1:-1;322:38:52;;;26:21:-1;;;22:32;;6:49;;322:38:52;;;;;;;312:49;;322:38;;-1:-1:-1;322:38:52;;;312:49;;;;322:38;312:49;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;312:49:52;;;;;;;;;;;;-1:-1:-1;;;;;;;210:156:52:o",
  "source": "pragma solidity ^0.4.24;\nlibrary HashEncode {\n  //Overloaded functions\n  function encode(string _label, bytes32 _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n  function encode(string _label, bytes32 _arg1, bytes32 _arg2) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1, _arg2));\n  }\n  function encode(string _label, bytes32 _arg1, uint _arg2) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1, _arg2));\n  }\n  function encode(string _label, address _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n  function encode(string _label, uint _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n  function encode(string _label, bool _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/HashEncode.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/HashEncode.sol",
    "exportedSymbols": {
      "HashEncode": [
        15018
      ]
    },
    "id": 15019,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14903,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 15018,
        "linearizedBaseContracts": [
          15018
        ],
        "name": "HashEncode",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 14920,
              "nodeType": "Block",
              "src": "147:60:52",
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
                            "id": 14915,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14905,
                            "src": "187:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14916,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14907,
                            "src": "195:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14913,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "170:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "170:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "170:31:52",
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
                      "id": 14912,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "160:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "160:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14911,
                  "id": 14919,
                  "nodeType": "Return",
                  "src": "153:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 14921,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14905,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14921,
                  "src": "89:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14904,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "89:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14907,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14921,
                  "src": "104:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14906,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "104:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "88:30:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14921,
                  "src": "139:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14909,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "139:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "138:9:52"
            },
            "scope": 15018,
            "src": "73:134:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14941,
              "nodeType": "Block",
              "src": "299:67:52",
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
                            "id": 14935,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14923,
                            "src": "339:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14936,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14925,
                            "src": "347:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14937,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14927,
                            "src": "354:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14933,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "322:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "322:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "322:38:52",
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
                      "id": 14932,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "312:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "312:49:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14931,
                  "id": 14940,
                  "nodeType": "Return",
                  "src": "305:56:52"
                }
              ]
            },
            "documentation": null,
            "id": 14942,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14923,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "226:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14922,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14925,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "241:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14924,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:7:52",
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
                  "id": 14927,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "256:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14926,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:45:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14930,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "291:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14929,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:9:52"
            },
            "scope": 15018,
            "src": "210:156:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14962,
              "nodeType": "Block",
              "src": "455:67:52",
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
                            "id": 14956,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14944,
                            "src": "495:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14957,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14946,
                            "src": "503:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14958,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14948,
                            "src": "510:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14954,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "478:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "478:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "478:38:52",
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
                      "id": 14953,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "468:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14960,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:49:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14952,
                  "id": 14961,
                  "nodeType": "Return",
                  "src": "461:56:52"
                }
              ]
            },
            "documentation": null,
            "id": 14963,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14944,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "385:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14943,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14946,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "400:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14945,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:52",
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
                  "id": 14948,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "415:10:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14947,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:42:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14951,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "447:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14950,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:9:52"
            },
            "scope": 15018,
            "src": "369:153:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14980,
              "nodeType": "Block",
              "src": "599:60:52",
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
                            "id": 14975,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14965,
                            "src": "639:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14976,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14967,
                            "src": "647:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14973,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "622:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14974,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "622:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "622:31:52",
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
                      "id": 14972,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "612:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "612:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14971,
                  "id": 14979,
                  "nodeType": "Return",
                  "src": "605:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 14981,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14965,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14981,
                  "src": "541:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14964,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "541:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14967,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14981,
                  "src": "556:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "556:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "540:30:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14970,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14981,
                  "src": "591:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14969,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:9:52"
            },
            "scope": 15018,
            "src": "525:134:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14998,
              "nodeType": "Block",
              "src": "733:60:52",
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
                            "id": 14993,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14983,
                            "src": "773:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14994,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14985,
                            "src": "781:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14991,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "756:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "756:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "756:31:52",
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
                      "id": 14990,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "746:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "746:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14989,
                  "id": 14997,
                  "nodeType": "Return",
                  "src": "739:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 14999,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14983,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14999,
                  "src": "678:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14982,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "678:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14985,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14999,
                  "src": "693:10:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14984,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "677:27:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14988,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14999,
                  "src": "725:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14987,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:9:52"
            },
            "scope": 15018,
            "src": "662:131:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15016,
              "nodeType": "Block",
              "src": "867:60:52",
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
                            "id": 15011,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15001,
                            "src": "907:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 15012,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15003,
                            "src": "915:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 15009,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "890:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 15010,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "890:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 15013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "890:31:52",
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
                      "id": 15008,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "880:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 15014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 15007,
                  "id": 15015,
                  "nodeType": "Return",
                  "src": "873:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 15017,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15001,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 15017,
                  "src": "812:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 15000,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "812:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15003,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15017,
                  "src": "827:10:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 15002,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "811:27:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15006,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15017,
                  "src": "859:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 15005,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:9:52"
            },
            "scope": 15018,
            "src": "796:131:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 15019,
        "src": "25:904:52"
      }
    ],
    "src": "0:930:52"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/HashEncode.sol",
    "exportedSymbols": {
      "HashEncode": [
        15018
      ]
    },
    "id": 15019,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14903,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 15018,
        "linearizedBaseContracts": [
          15018
        ],
        "name": "HashEncode",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 14920,
              "nodeType": "Block",
              "src": "147:60:52",
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
                            "id": 14915,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14905,
                            "src": "187:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14916,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14907,
                            "src": "195:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14913,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "170:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "170:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14917,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "170:31:52",
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
                      "id": 14912,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "160:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "160:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14911,
                  "id": 14919,
                  "nodeType": "Return",
                  "src": "153:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 14921,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14905,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14921,
                  "src": "89:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14904,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "89:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14907,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14921,
                  "src": "104:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14906,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "104:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "88:30:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14921,
                  "src": "139:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14909,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "139:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "138:9:52"
            },
            "scope": 15018,
            "src": "73:134:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14941,
              "nodeType": "Block",
              "src": "299:67:52",
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
                            "id": 14935,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14923,
                            "src": "339:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14936,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14925,
                            "src": "347:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14937,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14927,
                            "src": "354:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14933,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "322:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "322:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "322:38:52",
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
                      "id": 14932,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "312:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "312:49:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14931,
                  "id": 14940,
                  "nodeType": "Return",
                  "src": "305:56:52"
                }
              ]
            },
            "documentation": null,
            "id": 14942,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14923,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "226:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14922,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14925,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "241:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14924,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:7:52",
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
                  "id": 14927,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "256:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14926,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:45:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14930,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14942,
                  "src": "291:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14929,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:9:52"
            },
            "scope": 15018,
            "src": "210:156:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14962,
              "nodeType": "Block",
              "src": "455:67:52",
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
                            "id": 14956,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14944,
                            "src": "495:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14957,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14946,
                            "src": "503:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14958,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14948,
                            "src": "510:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14954,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "478:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "478:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "478:38:52",
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
                      "id": 14953,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "468:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14960,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:49:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14952,
                  "id": 14961,
                  "nodeType": "Return",
                  "src": "461:56:52"
                }
              ]
            },
            "documentation": null,
            "id": 14963,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14944,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "385:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14943,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14946,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "400:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14945,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:52",
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
                  "id": 14948,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "415:10:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14947,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:42:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14951,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14963,
                  "src": "447:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14950,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:9:52"
            },
            "scope": 15018,
            "src": "369:153:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14980,
              "nodeType": "Block",
              "src": "599:60:52",
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
                            "id": 14975,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14965,
                            "src": "639:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14976,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14967,
                            "src": "647:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14973,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "622:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14974,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "622:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "622:31:52",
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
                      "id": 14972,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "612:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "612:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14971,
                  "id": 14979,
                  "nodeType": "Return",
                  "src": "605:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 14981,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14965,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14981,
                  "src": "541:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14964,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "541:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14967,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14981,
                  "src": "556:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14966,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "556:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "540:30:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14970,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14981,
                  "src": "591:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14969,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:9:52"
            },
            "scope": 15018,
            "src": "525:134:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 14998,
              "nodeType": "Block",
              "src": "733:60:52",
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
                            "id": 14993,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14983,
                            "src": "773:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 14994,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14985,
                            "src": "781:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 14991,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "756:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 14992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "756:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 14995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "756:31:52",
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
                      "id": 14990,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "746:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 14996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "746:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 14989,
                  "id": 14997,
                  "nodeType": "Return",
                  "src": "739:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 14999,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14983,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 14999,
                  "src": "678:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14982,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "678:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14985,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14999,
                  "src": "693:10:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14984,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "677:27:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 14989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14988,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14999,
                  "src": "725:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14987,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:9:52"
            },
            "scope": 15018,
            "src": "662:131:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15016,
              "nodeType": "Block",
              "src": "867:60:52",
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
                            "id": 15011,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15001,
                            "src": "907:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 15012,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15003,
                            "src": "915:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 15009,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28025,
                            "src": "890:3:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 15010,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "890:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 15013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "890:31:52",
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
                      "id": 15008,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28032,
                      "src": "880:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 15014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 15007,
                  "id": 15015,
                  "nodeType": "Return",
                  "src": "873:49:52"
                }
              ]
            },
            "documentation": null,
            "id": 15017,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15004,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15001,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 15017,
                  "src": "812:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 15000,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "812:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15003,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15017,
                  "src": "827:10:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 15002,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "811:27:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 15007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15006,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15017,
                  "src": "859:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 15005,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:9:52"
            },
            "scope": 15018,
            "src": "796:131:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 15019,
        "src": "25:904:52"
      }
    ],
    "src": "0:930:52"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:53.021Z"
}