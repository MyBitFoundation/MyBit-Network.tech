"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ConsensusTest = exports.ConsensusTest = 
{
  "contractName": "ConsensusTest",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "api",
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
      "inputs": [
        {
          "name": "_api",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "checkConsensus",
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
          "name": "user",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_tokens",
          "type": "uint256"
        }
      ],
      "name": "consensusTestParameterHash",
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
  "bytecode": "0x608060405234801561001057600080fd5b50604051602080610542833981016040525160008054600160a060020a03909216600160a060020a03199092169190911790556104f0806100526000396000f3006080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663822b8d69811461005b5780639bace5fc14610097578063d2c18e0b146100d5575b600080fd5b34801561006757600080fd5b50610085600160a060020a0360043581169060243516604435610106565b60408051918252519081900360200190f35b3480156100a357600080fd5b506100c1600160a060020a03600435811690602435166044356101dd565b604080519115158252519081900360200190f35b3480156100e157600080fd5b506100ea6104b5565b60408051600160a060020a039092168252519081900360200190f35b60008383836040516020018084600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140183600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106101a95780518252601f19909201916020918201910161018a565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120979650505050505050565b6000806000808686866040516020018084600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140183600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106102845780518252601f199092019160209182019101610265565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600080547f8969e756000000000000000000000000000000000000000000000000000000008552600160a060020a038f811660048701529651929b50959095169650638969e756955060248084019592945090928390030190829087803b15801561031557600080fd5b505af1158015610329573d6000803e3d6000fd5b505050506040513d602081101561033f57600080fd5b505160408051600160a060020a038981166c010000000000000000000000009081026020808501919091529185160260348301526000357fffffffff00000000000000000000000000000000000000000000000000000000166048830152604c80830188905283518084039091018152606c909201928390528151939550909282918401908083835b602083106103e75780518252601f1990920191602091820191016103c8565b51815160209384036101000a6000190180199092169116179052604080519290940182900382207f1c597c83000000000000000000000000000000000000000000000000000000008352600483018190529351939650600160a060020a0388169550631c597c83945060248083019491935090918290030181600087803b15801561047157600080fd5b505af1158015610485573d6000803e3d6000fd5b505050506040513d602081101561049b57600080fd5b505115156104a857600080fd5b5060019695505050505050565b600054600160a060020a0316815600a165627a7a72305820e5c15ae162f6751489d62398d7e45d1de38219f2e1f53d3529170dd51f27bab90029",
  "deployedBytecode": "0x6080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663822b8d69811461005b5780639bace5fc14610097578063d2c18e0b146100d5575b600080fd5b34801561006757600080fd5b50610085600160a060020a0360043581169060243516604435610106565b60408051918252519081900360200190f35b3480156100a357600080fd5b506100c1600160a060020a03600435811690602435166044356101dd565b604080519115158252519081900360200190f35b3480156100e157600080fd5b506100ea6104b5565b60408051600160a060020a039092168252519081900360200190f35b60008383836040516020018084600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140183600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106101a95780518252601f19909201916020918201910161018a565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120979650505050505050565b6000806000808686866040516020018084600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140183600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106102845780518252601f199092019160209182019101610265565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600080547f8969e756000000000000000000000000000000000000000000000000000000008552600160a060020a038f811660048701529651929b50959095169650638969e756955060248084019592945090928390030190829087803b15801561031557600080fd5b505af1158015610329573d6000803e3d6000fd5b505050506040513d602081101561033f57600080fd5b505160408051600160a060020a038981166c010000000000000000000000009081026020808501919091529185160260348301526000357fffffffff00000000000000000000000000000000000000000000000000000000166048830152604c80830188905283518084039091018152606c909201928390528151939550909282918401908083835b602083106103e75780518252601f1990920191602091820191016103c8565b51815160209384036101000a6000190180199092169116179052604080519290940182900382207f1c597c83000000000000000000000000000000000000000000000000000000008352600483018190529351939650600160a060020a0388169550631c597c83945060248083019491935090918290030181600087803b15801561047157600080fd5b505af1158015610485573d6000803e3d6000fd5b505050506040513d602081101561049b57600080fd5b505115156104a857600080fd5b5060019695505050505050565b600054600160a060020a0316815600a165627a7a72305820e5c15ae162f6751489d62398d7e45d1de38219f2e1f53d3529170dd51f27bab90029",
  "sourceMap": "227:736:88:-;;;274:61;8:9:-1;5:2;;;30:1;27;20:12;5:2;274:61:88;;;;;;;;;;;;;315:3;:15;;-1:-1:-1;;;;;315:15:88;;;-1:-1:-1;;;;;;315:15:88;;;;;;;;;227:736;;;;;;",
  "deployedSourceMap": "227:736:88:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;777:183;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;777:183:88;-1:-1:-1;;;;;777:183:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;339:433;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;339:433:88;-1:-1:-1;;;;;339:433:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;255:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;255:14:88;;;;;;;;-1:-1:-1;;;;;255:14:88;;;;;;;;;;;;;;777:183;884:7;932:4;938:6;946:7;915:39;;;;;;-1:-1:-1;;;;;915:39:88;-1:-1:-1;;;;;915:39:88;;;;;;;;-1:-1:-1;;;;;915:39:88;-1:-1:-1;;;;;915:39:88;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;915:39:88;;;905:50;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;905:50:88;;;;;;;;;;;;-1:-1:-1;;;;;;;777:183:88:o;339:433::-;432:4;443:21;521:26;582:18;494:4;500:5;507:6;477:37;;;;;;-1:-1:-1;;;;;477:37:88;-1:-1:-1;;;;;477:37:88;;;;;;;;-1:-1:-1;;;;;477:37:88;-1:-1:-1;;;;;477:37:88;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;477:37:88;;;467:48;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;467:48:88;;;;;;;;;;;;-1:-1:-1;550:3:88;;:26;;;-1:-1:-1;;;;;550:26:88;;;;;;;;;467:48;;-1:-1:-1;550:3:88;;;;;-1:-1:-1;550:19:88;;-1:-1:-1;550:26:88;;;;;263:2:-1;;-1:-1;550:26:88;;;;;;;;;:3;:26;;;5:2:-1;;;;30:1;27;20:12;5:2;550:26:88;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;550:26:88;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;550:26:88;613:67;;;-1:-1:-1;;;;;613:67:88;;;;;;;550:26;613:67;;;;;;;;;;;;;;;-1:-1:-1;657:7:88;;;613:67;;;;;;;;;;;;;26:21:-1;;;22:32;;;6:49;;613:67:88;;;;;;;;603:78;;550:26;;-1:-1:-1;613:67:88;;;;603:78;;;;613:67;603:78;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;603:78:88;;;;;;;;;;;;695:54;;;;;;;;;;;603:78;;-1:-1:-1;;;;;;695:42:88;;;-1:-1:-1;695:42:88;;-1:-1:-1;695:54:88;;;;;263:2:-1;;-1:-1;695:54:88;;;;;;;-1:-1:-1;695:42:88;:54;;;5:2:-1;;;;30:1;27;20:12;5:2;695:54:88;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;695:54:88;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;695:54:88;687:63;;;;;;;;-1:-1:-1;763:4:88;;339:433;-1:-1:-1;;;;;;339:433:88:o;255:14::-;;;-1:-1:-1;;;;;255:14:88;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../database/API.sol';\n\ninterface Token { function totalSupply() external view returns (uint); }\ninterface Consensus { function hasConsensus(bytes32 proposalID) external view returns (bool); }\n\ncontract ConsensusTest {\n\n  API public api;\n\n  constructor(address _api)\n  public {\n    api = API(_api);\n  }\n\n  function checkConsensus(address user, address token, uint tokens)\n  public\n  view\n  returns (bool){\n    bytes32 parameterHash = keccak256(abi.encodePacked(user, token, tokens));\n    address governanceContract = api.assetGovernance(token);\n    bytes32 proposalID = keccak256(abi.encodePacked(token, governanceContract, msg.sig, parameterHash));\n    require(Consensus(governanceContract).hasConsensus(proposalID));\n    return true;\n  }\n\n\n  function consensusTestParameterHash(address user, address _token, uint _tokens)\n  public\n  pure\n  returns (bytes32){\n    return keccak256(abi.encodePacked(user, _token, _tokens));\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
    "exportedSymbols": {
      "Consensus": [
        30070
      ],
      "ConsensusTest": [
        30160
      ],
      "Token": [
        30062
      ]
    },
    "id": 30161,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30055,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:88"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/API.sol",
        "file": "../database/API.sol",
        "id": 30056,
        "nodeType": "ImportDirective",
        "scope": 30161,
        "sourceUnit": 5693,
        "src": "26:29:88",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30062,
        "linearizedBaseContracts": [
          30062
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30061,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "95:2:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30059,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30061,
                  "src": "121:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30058,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:6:88"
            },
            "scope": 30062,
            "src": "75:52:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "57:72:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30070,
        "linearizedBaseContracts": [
          30070
        ],
        "name": "Consensus",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30069,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "hasConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30064,
                  "name": "proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "174:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30063,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "173:20:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30067,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "217:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30066,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:6:88"
            },
            "scope": 30070,
            "src": "152:71:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "130:95:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30160,
        "linearizedBaseContracts": [
          30160
        ],
        "name": "ConsensusTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 30072,
            "name": "api",
            "nodeType": "VariableDeclaration",
            "scope": 30160,
            "src": "255:14:88",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_API_$5692",
              "typeString": "contract API"
            },
            "typeName": {
              "contractScope": null,
              "id": 30071,
              "name": "API",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5692,
              "src": "255:3:88",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_API_$5692",
                "typeString": "contract API"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30083,
              "nodeType": "Block",
              "src": "309:26:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30077,
                      "name": "api",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30072,
                      "src": "315:3:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 30079,
                          "name": "_api",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30074,
                          "src": "325:4:88",
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
                        "id": 30078,
                        "name": "API",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5692,
                        "src": "321:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_API_$5692_$",
                          "typeString": "type(contract API)"
                        }
                      },
                      "id": 30080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "321:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "src": "315:15:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_API_$5692",
                      "typeString": "contract API"
                    }
                  },
                  "id": 30082,
                  "nodeType": "ExpressionStatement",
                  "src": "315:15:88"
                }
              ]
            },
            "documentation": null,
            "id": 30084,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30074,
                  "name": "_api",
                  "nodeType": "VariableDeclaration",
                  "scope": 30084,
                  "src": "286:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30073,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "285:14:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:88"
            },
            "scope": 30160,
            "src": "274:61:88",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30137,
              "nodeType": "Block",
              "src": "437:335:88",
              "statements": [
                {
                  "assignments": [
                    30096
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30096,
                      "name": "parameterHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "443:21:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30095,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "443:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30105,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30100,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30086,
                            "src": "494:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30101,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "500:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30102,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30090,
                            "src": "507:6:88",
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
                            "id": 30098,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "477:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "477:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:37:88",
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
                      "id": 30097,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "467:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "467:48:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "443:72:88"
                },
                {
                  "assignments": [
                    30107
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30107,
                      "name": "governanceContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "521:26:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 30106,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "521:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30112,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30110,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30088,
                        "src": "570:5:88",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 30108,
                        "name": "api",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30072,
                        "src": "550:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_API_$5692",
                          "typeString": "contract API"
                        }
                      },
                      "id": 30109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4594,
                      "src": "550:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view external returns (address)"
                      }
                    },
                    "id": 30111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "550:26:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "521:55:88"
                },
                {
                  "assignments": [
                    30114
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30114,
                      "name": "proposalID",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "582:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30113,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "582:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30125,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30118,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "630:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30119,
                            "name": "governanceContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30107,
                            "src": "637:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 30120,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34827,
                              "src": "657:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 30121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "657:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30122,
                            "name": "parameterHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30096,
                            "src": "666:13:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                            },
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30116,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "613:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "613:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "613:67:88",
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
                      "id": 30115,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "603:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "603:78:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "582:99:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30131,
                            "name": "proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30114,
                            "src": "738:10:88",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 30128,
                                "name": "governanceContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30107,
                                "src": "705:18:88",
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
                              "id": 30127,
                              "name": "Consensus",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30070,
                              "src": "695:9:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Consensus_$30070_$",
                                "typeString": "type(contract Consensus)"
                              }
                            },
                            "id": 30129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "695:29:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Consensus_$30070",
                              "typeString": "contract Consensus"
                            }
                          },
                          "id": 30130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hasConsensus",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30069,
                          "src": "695:42:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 30132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "695:54:88",
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
                      "id": 30126,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34830,
                        34831
                      ],
                      "referencedDeclaration": 34830,
                      "src": "687:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 30133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "687:63:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30134,
                  "nodeType": "ExpressionStatement",
                  "src": "687:63:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 30135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "763:4:88",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 30094,
                  "id": 30136,
                  "nodeType": "Return",
                  "src": "756:11:88"
                }
              ]
            },
            "documentation": null,
            "id": 30138,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30086,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "363:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:88",
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
                  "id": 30088,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "377:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30087,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:88",
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
                  "id": 30090,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "392:11:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30089,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:42:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30093,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "432:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30092,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "431:6:88"
            },
            "scope": 30160,
            "src": "339:433:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30158,
              "nodeType": "Block",
              "src": "892:68:88",
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
                            "id": 30152,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30140,
                            "src": "932:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30153,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30142,
                            "src": "938:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30154,
                            "name": "_tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30144,
                            "src": "946:7:88",
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
                            "id": 30150,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "915:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "915:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "915:39:88",
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
                      "id": 30149,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "905:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:50:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 30148,
                  "id": 30157,
                  "nodeType": "Return",
                  "src": "898:57:88"
                }
              ]
            },
            "documentation": null,
            "id": 30159,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "consensusTestParameterHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30140,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "813:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:88",
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
                  "id": 30142,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "827:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:88",
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
                  "id": 30144,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "843:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30143,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "812:44:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30147,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "884:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30146,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:9:88"
            },
            "scope": 30160,
            "src": "777:183:88",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 30161,
        "src": "227:736:88"
      }
    ],
    "src": "0:964:88"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/ConsensusTest.sol",
    "exportedSymbols": {
      "Consensus": [
        30070
      ],
      "ConsensusTest": [
        30160
      ],
      "Token": [
        30062
      ]
    },
    "id": 30161,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 30055,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:88"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/API.sol",
        "file": "../database/API.sol",
        "id": 30056,
        "nodeType": "ImportDirective",
        "scope": 30161,
        "sourceUnit": 5693,
        "src": "26:29:88",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30062,
        "linearizedBaseContracts": [
          30062
        ],
        "name": "Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30061,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30057,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "95:2:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30059,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30061,
                  "src": "121:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30058,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:6:88"
            },
            "scope": 30062,
            "src": "75:52:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "57:72:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 30070,
        "linearizedBaseContracts": [
          30070
        ],
        "name": "Consensus",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 30069,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "hasConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30064,
                  "name": "proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "174:18:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30063,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "173:20:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30067,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30069,
                  "src": "217:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30066,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:6:88"
            },
            "scope": 30070,
            "src": "152:71:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 30161,
        "src": "130:95:88"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 30160,
        "linearizedBaseContracts": [
          30160
        ],
        "name": "ConsensusTest",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 30072,
            "name": "api",
            "nodeType": "VariableDeclaration",
            "scope": 30160,
            "src": "255:14:88",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_API_$5692",
              "typeString": "contract API"
            },
            "typeName": {
              "contractScope": null,
              "id": 30071,
              "name": "API",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5692,
              "src": "255:3:88",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_API_$5692",
                "typeString": "contract API"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30083,
              "nodeType": "Block",
              "src": "309:26:88",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30077,
                      "name": "api",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30072,
                      "src": "315:3:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 30079,
                          "name": "_api",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30074,
                          "src": "325:4:88",
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
                        "id": 30078,
                        "name": "API",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5692,
                        "src": "321:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_API_$5692_$",
                          "typeString": "type(contract API)"
                        }
                      },
                      "id": 30080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "321:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_API_$5692",
                        "typeString": "contract API"
                      }
                    },
                    "src": "315:15:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_API_$5692",
                      "typeString": "contract API"
                    }
                  },
                  "id": 30082,
                  "nodeType": "ExpressionStatement",
                  "src": "315:15:88"
                }
              ]
            },
            "documentation": null,
            "id": 30084,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30074,
                  "name": "_api",
                  "nodeType": "VariableDeclaration",
                  "scope": 30084,
                  "src": "286:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30073,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "286:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "285:14:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30076,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "309:0:88"
            },
            "scope": 30160,
            "src": "274:61:88",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30137,
              "nodeType": "Block",
              "src": "437:335:88",
              "statements": [
                {
                  "assignments": [
                    30096
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30096,
                      "name": "parameterHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "443:21:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30095,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "443:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30105,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30100,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30086,
                            "src": "494:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30101,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "500:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30102,
                            "name": "tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30090,
                            "src": "507:6:88",
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
                            "id": 30098,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "477:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30099,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "477:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "477:37:88",
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
                      "id": 30097,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "467:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30104,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "467:48:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "443:72:88"
                },
                {
                  "assignments": [
                    30107
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30107,
                      "name": "governanceContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "521:26:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 30106,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "521:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30112,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30110,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30088,
                        "src": "570:5:88",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 30108,
                        "name": "api",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30072,
                        "src": "550:3:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_API_$5692",
                          "typeString": "contract API"
                        }
                      },
                      "id": 30109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "assetGovernance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4594,
                      "src": "550:19:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_address_$",
                        "typeString": "function (address) view external returns (address)"
                      }
                    },
                    "id": 30111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "550:26:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "521:55:88"
                },
                {
                  "assignments": [
                    30114
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 30114,
                      "name": "proposalID",
                      "nodeType": "VariableDeclaration",
                      "scope": 30138,
                      "src": "582:18:88",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 30113,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "582:7:88",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 30125,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30118,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30088,
                            "src": "630:5:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30119,
                            "name": "governanceContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30107,
                            "src": "637:18:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 30120,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34827,
                              "src": "657:3:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 30121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "657:7:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30122,
                            "name": "parameterHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30096,
                            "src": "666:13:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
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
                            },
                            {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 30116,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "613:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "613:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "613:67:88",
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
                      "id": 30115,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "603:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "603:78:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "582:99:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 30131,
                            "name": "proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30114,
                            "src": "738:10:88",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 30128,
                                "name": "governanceContract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 30107,
                                "src": "705:18:88",
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
                              "id": 30127,
                              "name": "Consensus",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 30070,
                              "src": "695:9:88",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Consensus_$30070_$",
                                "typeString": "type(contract Consensus)"
                              }
                            },
                            "id": 30129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "695:29:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Consensus_$30070",
                              "typeString": "contract Consensus"
                            }
                          },
                          "id": 30130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "hasConsensus",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 30069,
                          "src": "695:42:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 30132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "695:54:88",
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
                      "id": 30126,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34830,
                        34831
                      ],
                      "referencedDeclaration": 34830,
                      "src": "687:7:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 30133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "687:63:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30134,
                  "nodeType": "ExpressionStatement",
                  "src": "687:63:88"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 30135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "763:4:88",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 30094,
                  "id": 30136,
                  "nodeType": "Return",
                  "src": "756:11:88"
                }
              ]
            },
            "documentation": null,
            "id": 30138,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkConsensus",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30091,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30086,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "363:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30085,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "363:7:88",
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
                  "id": 30088,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "377:13:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30087,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "377:7:88",
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
                  "id": 30090,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "392:11:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30089,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "362:42:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30093,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30138,
                  "src": "432:4:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30092,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "431:6:88"
            },
            "scope": 30160,
            "src": "339:433:88",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 30158,
              "nodeType": "Block",
              "src": "892:68:88",
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
                            "id": 30152,
                            "name": "user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30140,
                            "src": "932:4:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30153,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30142,
                            "src": "938:6:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 30154,
                            "name": "_tokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30144,
                            "src": "946:7:88",
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
                            "id": 30150,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34814,
                            "src": "915:3:88",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 30151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "915:16:88",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 30155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "915:39:88",
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
                      "id": 30149,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34821,
                      "src": "905:9:88",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 30156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "905:50:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 30148,
                  "id": 30157,
                  "nodeType": "Return",
                  "src": "898:57:88"
                }
              ]
            },
            "documentation": null,
            "id": 30159,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "consensusTestParameterHash",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 30145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30140,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "813:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "813:7:88",
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
                  "id": 30142,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "827:14:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30141,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:7:88",
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
                  "id": 30144,
                  "name": "_tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "843:12:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30143,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:4:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "812:44:88"
            },
            "payable": false,
            "returnParameters": {
              "id": 30148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30147,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 30159,
                  "src": "884:7:88",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 30146,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:88",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:9:88"
            },
            "scope": 30160,
            "src": "777:183:88",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 30161,
        "src": "227:736:88"
      }
    ],
    "src": "0:964:88"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-13T22:36:34.903Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}