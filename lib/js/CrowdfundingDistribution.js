"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var CrowdfundingDistribution = exports.CrowdfundingDistribution = 
{
  "contractName": "CrowdfundingDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "database",
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
          "name": "_database",
          "type": "address"
        }
      ],
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
          "name": "assetID",
          "type": "bytes32"
        }
      ],
      "name": "receivePayment",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516020806101d483398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610151806100836000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633ccfd60b1461005c57806364fd5b4814610073578063713b563f146100a4575b600080fd5b34801561006857600080fd5b506100716100fb565b005b34801561007f57600080fd5b506100a260048036038101908080356000191690602001909291905050506100fd565b005b3480156100b057600080fd5b506100b9610100565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582024beac0042eb6cbba77bfab43a77cd69db7cc8ca2591ba016f4798629169d3920029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633ccfd60b1461005c57806364fd5b4814610073578063713b563f146100a4575b600080fd5b34801561006857600080fd5b506100716100fb565b005b34801561007f57600080fd5b506100a260048036038101908080356000191690602001909291905050506100fd565b005b3480156100b057600080fd5b506100b9610100565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582024beac0042eb6cbba77bfab43a77cd69db7cc8ca2591ba016f4798629169d3920029",
  "sourceMap": "100:420:35:-;;;171:84;8:9:-1;5:2;;;30:1;27;20:12;5:2;171:84:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:9;218:8;;:30;;;;;;;;;;;;;;;;;;171:84;100:420;;;;;;",
  "deployedSourceMap": "100:420:35:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;503:8;;;380:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;380:36:35;;;;;;259:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;259:117:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;139:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;139:24:35;;;;;;;;;;;;;;;;;;;;;;;;;;;380:36;:::o;259:117::-;;:::o;139:24::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../database/Database.sol'; \n\n// @notice every operator on the plat\ncontract CrowdfundingDistribution {\n\n  Database public database; \n \n\n  constructor(address _database)\n  public { \n    database = Database(_database);  \n  }\n\n  function receivePayment(bytes32 assetID)\n  external { \n    // TODO: give 1% to platformOwners and 99% to operator\n  }\n\n  function withdraw()\n  external {\n  }\n\n\n  // @notice Fallback function accepts ether\n  function()\n  public \n  payable {\n    revert(); \n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/distribution/CrowdfundingDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/distribution/CrowdfundingDistribution.sol",
    "exportedSymbols": {
      "CrowdfundingDistribution": [
        18294
      ]
    },
    "id": 18295,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 18261,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:35"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 18262,
        "nodeType": "ImportDirective",
        "scope": 18295,
        "sourceUnit": 18215,
        "src": "25:34:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 18294,
        "linearizedBaseContracts": [
          18294
        ],
        "name": "CrowdfundingDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 18264,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 18294,
            "src": "139:24:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$18214",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 18263,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 18214,
              "src": "139:8:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$18214",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 18275,
              "nodeType": "Block",
              "src": "211:44:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 18273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 18269,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18264,
                      "src": "218:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$18214",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 18271,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18266,
                          "src": "238:9:35",
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
                        "id": 18270,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18214,
                        "src": "229:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$18214_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 18272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "229:19:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$18214",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "218:30:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$18214",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 18274,
                  "nodeType": "ExpressionStatement",
                  "src": "218:30:35"
                }
              ]
            },
            "documentation": null,
            "id": 18276,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18266,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 18276,
                  "src": "183:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 18265,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "182:19:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 18268,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "211:0:35"
            },
            "scope": 18294,
            "src": "171:84:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 18281,
              "nodeType": "Block",
              "src": "311:65:35",
              "statements": []
            },
            "documentation": null,
            "id": 18282,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receivePayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18278,
                  "name": "assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 18282,
                  "src": "283:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 18277,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:17:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 18280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "311:0:35"
            },
            "scope": 18294,
            "src": "259:117:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 18285,
              "nodeType": "Block",
              "src": "411:5:35",
              "statements": []
            },
            "documentation": null,
            "id": 18286,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18283,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "397:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 18284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "411:0:35"
            },
            "scope": 18294,
            "src": "380:36:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 18292,
              "nodeType": "Block",
              "src": "497:20:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 18289,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21214,
                        21215
                      ],
                      "referencedDeclaration": 21214,
                      "src": "503:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 18290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "503:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18291,
                  "nodeType": "ExpressionStatement",
                  "src": "503:8:35"
                }
              ]
            },
            "documentation": null,
            "id": 18293,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18287,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "474:2:35"
            },
            "payable": true,
            "returnParameters": {
              "id": 18288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "497:0:35"
            },
            "scope": 18294,
            "src": "466:51:35",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 18295,
        "src": "100:420:35"
      }
    ],
    "src": "0:521:35"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/distribution/CrowdfundingDistribution.sol",
    "exportedSymbols": {
      "CrowdfundingDistribution": [
        18294
      ]
    },
    "id": 18295,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 18261,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:35"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 18262,
        "nodeType": "ImportDirective",
        "scope": 18295,
        "sourceUnit": 18215,
        "src": "25:34:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 18294,
        "linearizedBaseContracts": [
          18294
        ],
        "name": "CrowdfundingDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 18264,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 18294,
            "src": "139:24:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$18214",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 18263,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 18214,
              "src": "139:8:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$18214",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 18275,
              "nodeType": "Block",
              "src": "211:44:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 18273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 18269,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18264,
                      "src": "218:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$18214",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 18271,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18266,
                          "src": "238:9:35",
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
                        "id": 18270,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18214,
                        "src": "229:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$18214_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 18272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "229:19:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$18214",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "218:30:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$18214",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 18274,
                  "nodeType": "ExpressionStatement",
                  "src": "218:30:35"
                }
              ]
            },
            "documentation": null,
            "id": 18276,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18266,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 18276,
                  "src": "183:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 18265,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "183:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "182:19:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 18268,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "211:0:35"
            },
            "scope": 18294,
            "src": "171:84:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 18281,
              "nodeType": "Block",
              "src": "311:65:35",
              "statements": []
            },
            "documentation": null,
            "id": 18282,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receivePayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18278,
                  "name": "assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 18282,
                  "src": "283:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 18277,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:17:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 18280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "311:0:35"
            },
            "scope": 18294,
            "src": "259:117:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 18285,
              "nodeType": "Block",
              "src": "411:5:35",
              "statements": []
            },
            "documentation": null,
            "id": 18286,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18283,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "397:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 18284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "411:0:35"
            },
            "scope": 18294,
            "src": "380:36:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 18292,
              "nodeType": "Block",
              "src": "497:20:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 18289,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21214,
                        21215
                      ],
                      "referencedDeclaration": 21214,
                      "src": "503:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 18290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "503:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 18291,
                  "nodeType": "ExpressionStatement",
                  "src": "503:8:35"
                }
              ]
            },
            "documentation": null,
            "id": 18293,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 18287,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "474:2:35"
            },
            "payable": true,
            "returnParameters": {
              "id": 18288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "497:0:35"
            },
            "scope": 18294,
            "src": "466:51:35",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 18295,
        "src": "100:420:35"
      }
    ],
    "src": "0:521:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-08T14:16:35.340Z"
}