"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DBAccess = exports.DBAccess = 
{
  "contractName": "DBAccess",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./DividendTokenERC20.sol\";\nimport \"./BurnableToken.sol\";\nimport \"../../math/SafeMath.sol\";\n\n// @notice give GovernedToken access to view uint and bytes32 storage\ninterface DBAccess {\n  function uintStorage(bytes32 _key) external view returns (uint);\n  function bytes32Storage(bytes32 _key) external view returns (bytes32);\n}\n\n// @title A Dividend token that has governance features and receives ERC20 tokens as payment\n// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes\n// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation\n// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.\ncontract GovernedTokenERC20 is DividendTokenERC20, BurnableToken{\n  DBAccess public database;\n\n\n  // @notice constructor: initializes database and DividendTokenERC20\n  // @param (address) _database = the address of the platform database\n  // @param (string) _tokenURI = The URI where details of the token (asse) can be found\n  // @param (address) _owner = The minting authority for this token\n  // @param (address) _erc20Address = The address of the erc20 token to be sent for dividends\n  constructor(address _database, string _tokenURI, address _owner, address _erc20Address)\n  public\n  DividendTokenERC20(_tokenURI, _owner, _erc20Address){\n    database = DBAccess(_database);\n  }\n\n  // @notice Standard DividendToke transfer function, which checks for locked tokens before sending\n  function transfer(address _to, uint _amount)\n  public\n  returns (bool success) {\n      require(_amount <= getAmountAvailable(msg.sender));\n      super.transfer(_to, _amount);\n      return true;\n  }\n\n  // @notice Standard DividendToke transferFrom function, which checks for locked tokens before sending\n  function transferFrom(address _from, address _to, uint _amount)\n  public\n  returns (bool success) {\n      require(_amount <= getAmountAvailable(_from));\n      super.transferFrom(_from, _to, _amount);\n      return true;\n  }\n\n  // @notice returns the amount of tokens _investor has locked for this asset\n  function getAmountAvailable(address _investor)\n  public\n  view\n  returns (uint) {\n    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked(\"assetTokenID\", address(this))));\n    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked(\"tokensLocked\", assetID, _investor)));\n    uint balance = balances[_investor];\n    uint available = balance.sub(amountLocked);\n    return available;\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
    "exportedSymbols": {
      "DBAccess": [
        27381
      ],
      "GovernedTokenERC20": [
        27521
      ]
    },
    "id": 27522,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27363,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:97"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/DividendTokenERC20.sol",
        "file": "./DividendTokenERC20.sol",
        "id": 27364,
        "nodeType": "ImportDirective",
        "scope": 27522,
        "sourceUnit": 27215,
        "src": "26:34:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 27365,
        "nodeType": "ImportDirective",
        "scope": 27522,
        "sourceUnit": 26424,
        "src": "61:29:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 27366,
        "nodeType": "ImportDirective",
        "scope": 27522,
        "sourceUnit": 17338,
        "src": "91:33:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 27381,
        "linearizedBaseContracts": [
          27381
        ],
        "name": "DBAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 27373,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27368,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27373,
                  "src": "240:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27367,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "239:14:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27371,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27373,
                  "src": "277:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27370,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:6:97"
            },
            "scope": 27381,
            "src": "219:64:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 27380,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27375,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "310:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27374,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "309:14:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27378,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "347:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27377,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "347:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "346:9:97"
            },
            "scope": 27381,
            "src": "286:70:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 27522,
        "src": "196:162:97"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27382,
              "name": "DividendTokenERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27214,
              "src": "807:18:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DividendTokenERC20_$27214",
                "typeString": "contract DividendTokenERC20"
              }
            },
            "id": 27383,
            "nodeType": "InheritanceSpecifier",
            "src": "807:18:97"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27384,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26423,
              "src": "827:13:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$26423",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 27385,
            "nodeType": "InheritanceSpecifier",
            "src": "827:13:97"
          }
        ],
        "contractDependencies": [
          16644,
          17072,
          26423,
          27214,
          27645,
          28023
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 27521,
        "linearizedBaseContracts": [
          27521,
          26423,
          16644,
          27214,
          27645,
          28023,
          17072
        ],
        "name": "GovernedTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 27387,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 27521,
            "src": "844:24:97",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBAccess_$27381",
              "typeString": "contract DBAccess"
            },
            "typeName": {
              "contractScope": null,
              "id": 27386,
              "name": "DBAccess",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27381,
              "src": "844:8:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBAccess_$27381",
                "typeString": "contract DBAccess"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27409,
              "nodeType": "Block",
              "src": "1416:41:97",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27403,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27387,
                      "src": "1422:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27381",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 27405,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27389,
                          "src": "1442:9:97",
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
                        "id": 27404,
                        "name": "DBAccess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27381,
                        "src": "1433:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBAccess_$27381_$",
                          "typeString": "type(contract DBAccess)"
                        }
                      },
                      "id": 27406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1433:19:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27381",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "src": "1422:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBAccess_$27381",
                      "typeString": "contract DBAccess"
                    }
                  },
                  "id": 27408,
                  "nodeType": "ExpressionStatement",
                  "src": "1422:30:97"
                }
              ]
            },
            "documentation": null,
            "id": 27410,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 27398,
                    "name": "_tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27391,
                    "src": "1383:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27399,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27393,
                    "src": "1394:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27400,
                    "name": "_erc20Address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27395,
                    "src": "1402:13:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 27401,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27397,
                  "name": "DividendTokenERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27214,
                  "src": "1364:18:97",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DividendTokenERC20_$27214_$",
                    "typeString": "type(contract DividendTokenERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1364:52:97"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27389,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1277:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1277:7:97",
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
                  "id": 27391,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1296:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27390,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1296:6:97",
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
                  "id": 27393,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1314:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27392,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1314:7:97",
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
                  "id": 27395,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1330:21:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1330:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1276:76:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27402,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1416:0:97"
            },
            "scope": 27521,
            "src": "1265:192:97",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27437,
              "nodeType": "Block",
              "src": "1640:118:97",
              "statements": [
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
                        "id": 27425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27420,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27414,
                          "src": "1656:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 27422,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1686:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 27423,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1686:10:97",
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
                            "id": 27421,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27520,
                            "src": "1667:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1667:30:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1656:41:97",
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
                      "id": 27419,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1648:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1648:50:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27427,
                  "nodeType": "ExpressionStatement",
                  "src": "1648:50:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27431,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27412,
                        "src": "1721:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27432,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27414,
                        "src": "1726:7:97",
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
                        "id": 27428,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28308,
                        "src": "1706:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27521",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26869,
                      "src": "1706:14:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 27433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1706:28:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27434,
                  "nodeType": "ExpressionStatement",
                  "src": "1706:28:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1749:4:97",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27418,
                  "id": 27436,
                  "nodeType": "Return",
                  "src": "1742:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27438,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27412,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27438,
                  "src": "1579:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27411,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1579:7:97",
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
                  "id": 27414,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27438,
                  "src": "1592:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27413,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1592:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1578:27:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27417,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27438,
                  "src": "1626:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27416,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1626:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1625:14:97"
            },
            "scope": 27521,
            "src": "1561:197:97",
            "stateMutability": "nonpayable",
            "superFunction": 26869,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27467,
              "nodeType": "Block",
              "src": "1964:124:97",
              "statements": [
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
                        "id": 27454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27450,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27444,
                          "src": "1980:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 27452,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27440,
                              "src": "2010:5:97",
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
                            "id": 27451,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27520,
                            "src": "1991:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1991:25:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1980:36:97",
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
                      "id": 27449,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1972:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1972:45:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27456,
                  "nodeType": "ExpressionStatement",
                  "src": "1972:45:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27460,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27440,
                        "src": "2044:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27461,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27442,
                        "src": "2051:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27462,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27444,
                        "src": "2056:7:97",
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
                        "id": 27457,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28308,
                        "src": "2025:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27521",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26905,
                      "src": "2025:18:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 27463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2025:39:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27464,
                  "nodeType": "ExpressionStatement",
                  "src": "2025:39:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2079:4:97",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27448,
                  "id": 27466,
                  "nodeType": "Return",
                  "src": "2072:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27468,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27440,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1888:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27439,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1888:7:97",
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
                  "id": 27442,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1903:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27441,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:97",
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
                  "id": 27444,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1916:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27443,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1916:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1887:42:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27447,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1950:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1950:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1949:14:97"
            },
            "scope": 27521,
            "src": "1866:222:97",
            "stateMutability": "nonpayable",
            "superFunction": 26905,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27519,
              "nodeType": "Block",
              "src": "2250:333:97",
              "statements": [
                {
                  "assignments": [
                    27476
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27476,
                      "name": "assetID",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2256:15:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 27475,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2256:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27489,
                  "initialValue": {
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
                                "hexValue": "6173736574546f6b656e4944",
                                "id": 27482,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2325:14:97",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                "value": "assetTokenID"
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 27484,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28307,
                                    "src": "2349:4:97",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27521",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27521",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  ],
                                  "id": 27483,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2341:7:97",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 27485,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2341:13:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 27480,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "2308:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27481,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2308:16:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 27486,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2308:47:97",
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
                          "id": 27479,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "2298:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2298:58:97",
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
                        "id": 27477,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27387,
                        "src": "2274:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27381",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27380,
                      "src": "2274:23:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 27488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:83:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2256:101:97"
                },
                {
                  "assignments": [
                    27491
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27491,
                      "name": "amountLocked",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2363:17:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27490,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2363:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27503,
                  "initialValue": {
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
                                "hexValue": "746f6b656e734c6f636b6564",
                                "id": 27497,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2431:14:97",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
                                "value": "tokensLocked"
                              },
                              {
                                "argumentTypes": null,
                                "id": 27498,
                                "name": "assetID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27476,
                                "src": "2447:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 27499,
                                "name": "_investor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27470,
                                "src": "2456:9:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 27495,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "2414:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2414:16:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 27500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2414:52:97",
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
                          "id": 27494,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "2404:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2404:63:97",
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
                        "id": 27492,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27387,
                        "src": "2383:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27381",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27373,
                      "src": "2383:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 27502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2383:85:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2363:105:97"
                },
                {
                  "assignments": [
                    27505
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27505,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2474:12:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27504,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2474:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27509,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 27506,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27702,
                      "src": "2489:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 27508,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 27507,
                      "name": "_investor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27470,
                      "src": "2498:9:97",
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
                    "src": "2489:19:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2474:34:97"
                },
                {
                  "assignments": [
                    27511
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27511,
                      "name": "available",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2514:14:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27510,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2514:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27516,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27514,
                        "name": "amountLocked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27491,
                        "src": "2543:12:97",
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
                        "id": 27512,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27505,
                        "src": "2531:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 27513,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17294,
                      "src": "2531:11:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2531:25:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2514:42:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27517,
                    "name": "available",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27511,
                    "src": "2569:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27474,
                  "id": 27518,
                  "nodeType": "Return",
                  "src": "2562:16:97"
                }
              ]
            },
            "documentation": null,
            "id": 27520,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountAvailable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27470,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 27520,
                  "src": "2198:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2198:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2197:19:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27473,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27520,
                  "src": "2244:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27472,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2244:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2243:6:97"
            },
            "scope": 27521,
            "src": "2170:413:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 27522,
        "src": "776:1810:97"
      }
    ],
    "src": "0:2587:97"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
    "exportedSymbols": {
      "DBAccess": [
        27381
      ],
      "GovernedTokenERC20": [
        27521
      ]
    },
    "id": 27522,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27363,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:97"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/DividendTokenERC20.sol",
        "file": "./DividendTokenERC20.sol",
        "id": 27364,
        "nodeType": "ImportDirective",
        "scope": 27522,
        "sourceUnit": 27215,
        "src": "26:34:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 27365,
        "nodeType": "ImportDirective",
        "scope": 27522,
        "sourceUnit": 26424,
        "src": "61:29:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 27366,
        "nodeType": "ImportDirective",
        "scope": 27522,
        "sourceUnit": 17338,
        "src": "91:33:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 27381,
        "linearizedBaseContracts": [
          27381
        ],
        "name": "DBAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 27373,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27368,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27373,
                  "src": "240:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27367,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "239:14:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27371,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27373,
                  "src": "277:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27370,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "276:6:97"
            },
            "scope": 27381,
            "src": "219:64:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 27380,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27375,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "310:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27374,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "309:14:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27378,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27380,
                  "src": "347:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27377,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "347:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "346:9:97"
            },
            "scope": 27381,
            "src": "286:70:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 27522,
        "src": "196:162:97"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27382,
              "name": "DividendTokenERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27214,
              "src": "807:18:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DividendTokenERC20_$27214",
                "typeString": "contract DividendTokenERC20"
              }
            },
            "id": 27383,
            "nodeType": "InheritanceSpecifier",
            "src": "807:18:97"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27384,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26423,
              "src": "827:13:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$26423",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 27385,
            "nodeType": "InheritanceSpecifier",
            "src": "827:13:97"
          }
        ],
        "contractDependencies": [
          16644,
          17072,
          26423,
          27214,
          27645,
          28023
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 27521,
        "linearizedBaseContracts": [
          27521,
          26423,
          16644,
          27214,
          27645,
          28023,
          17072
        ],
        "name": "GovernedTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 27387,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 27521,
            "src": "844:24:97",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBAccess_$27381",
              "typeString": "contract DBAccess"
            },
            "typeName": {
              "contractScope": null,
              "id": 27386,
              "name": "DBAccess",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27381,
              "src": "844:8:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBAccess_$27381",
                "typeString": "contract DBAccess"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27409,
              "nodeType": "Block",
              "src": "1416:41:97",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27403,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27387,
                      "src": "1422:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27381",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 27405,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27389,
                          "src": "1442:9:97",
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
                        "id": 27404,
                        "name": "DBAccess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27381,
                        "src": "1433:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBAccess_$27381_$",
                          "typeString": "type(contract DBAccess)"
                        }
                      },
                      "id": 27406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1433:19:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27381",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "src": "1422:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBAccess_$27381",
                      "typeString": "contract DBAccess"
                    }
                  },
                  "id": 27408,
                  "nodeType": "ExpressionStatement",
                  "src": "1422:30:97"
                }
              ]
            },
            "documentation": null,
            "id": 27410,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 27398,
                    "name": "_tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27391,
                    "src": "1383:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27399,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27393,
                    "src": "1394:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27400,
                    "name": "_erc20Address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27395,
                    "src": "1402:13:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 27401,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27397,
                  "name": "DividendTokenERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27214,
                  "src": "1364:18:97",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DividendTokenERC20_$27214_$",
                    "typeString": "type(contract DividendTokenERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1364:52:97"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27389,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1277:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1277:7:97",
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
                  "id": 27391,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1296:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27390,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1296:6:97",
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
                  "id": 27393,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1314:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27392,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1314:7:97",
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
                  "id": 27395,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 27410,
                  "src": "1330:21:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1330:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1276:76:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27402,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1416:0:97"
            },
            "scope": 27521,
            "src": "1265:192:97",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27437,
              "nodeType": "Block",
              "src": "1640:118:97",
              "statements": [
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
                        "id": 27425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27420,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27414,
                          "src": "1656:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 27422,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1686:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 27423,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1686:10:97",
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
                            "id": 27421,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27520,
                            "src": "1667:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1667:30:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1656:41:97",
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
                      "id": 27419,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1648:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1648:50:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27427,
                  "nodeType": "ExpressionStatement",
                  "src": "1648:50:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27431,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27412,
                        "src": "1721:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27432,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27414,
                        "src": "1726:7:97",
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
                        "id": 27428,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28308,
                        "src": "1706:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27521",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26869,
                      "src": "1706:14:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 27433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1706:28:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27434,
                  "nodeType": "ExpressionStatement",
                  "src": "1706:28:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1749:4:97",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27418,
                  "id": 27436,
                  "nodeType": "Return",
                  "src": "1742:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27438,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27412,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27438,
                  "src": "1579:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27411,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1579:7:97",
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
                  "id": 27414,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27438,
                  "src": "1592:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27413,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1592:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1578:27:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27417,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27438,
                  "src": "1626:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27416,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1626:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1625:14:97"
            },
            "scope": 27521,
            "src": "1561:197:97",
            "stateMutability": "nonpayable",
            "superFunction": 26869,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27467,
              "nodeType": "Block",
              "src": "1964:124:97",
              "statements": [
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
                        "id": 27454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27450,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27444,
                          "src": "1980:7:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 27452,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27440,
                              "src": "2010:5:97",
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
                            "id": 27451,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27520,
                            "src": "1991:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1991:25:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1980:36:97",
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
                      "id": 27449,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1972:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1972:45:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 27456,
                  "nodeType": "ExpressionStatement",
                  "src": "1972:45:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27460,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27440,
                        "src": "2044:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27461,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27442,
                        "src": "2051:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27462,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27444,
                        "src": "2056:7:97",
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
                        "id": 27457,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28308,
                        "src": "2025:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27521",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26905,
                      "src": "2025:18:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 27463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2025:39:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 27464,
                  "nodeType": "ExpressionStatement",
                  "src": "2025:39:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27465,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2079:4:97",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 27448,
                  "id": 27466,
                  "nodeType": "Return",
                  "src": "2072:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27468,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27440,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1888:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27439,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1888:7:97",
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
                  "id": 27442,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1903:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27441,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1903:7:97",
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
                  "id": 27444,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1916:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27443,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1916:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1887:42:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27447,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27468,
                  "src": "1950:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1950:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1949:14:97"
            },
            "scope": 27521,
            "src": "1866:222:97",
            "stateMutability": "nonpayable",
            "superFunction": 26905,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27519,
              "nodeType": "Block",
              "src": "2250:333:97",
              "statements": [
                {
                  "assignments": [
                    27476
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27476,
                      "name": "assetID",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2256:15:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 27475,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2256:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27489,
                  "initialValue": {
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
                                "hexValue": "6173736574546f6b656e4944",
                                "id": 27482,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2325:14:97",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                "value": "assetTokenID"
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 27484,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28307,
                                    "src": "2349:4:97",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27521",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27521",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  ],
                                  "id": 27483,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2341:7:97",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 27485,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2341:13:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 27480,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "2308:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27481,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2308:16:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 27486,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2308:47:97",
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
                          "id": 27479,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "2298:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2298:58:97",
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
                        "id": 27477,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27387,
                        "src": "2274:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27381",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27478,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27380,
                      "src": "2274:23:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 27488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2274:83:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2256:101:97"
                },
                {
                  "assignments": [
                    27491
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27491,
                      "name": "amountLocked",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2363:17:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27490,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2363:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27503,
                  "initialValue": {
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
                                "hexValue": "746f6b656e734c6f636b6564",
                                "id": 27497,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2431:14:97",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
                                "value": "tokensLocked"
                              },
                              {
                                "argumentTypes": null,
                                "id": 27498,
                                "name": "assetID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27476,
                                "src": "2447:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 27499,
                                "name": "_investor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27470,
                                "src": "2456:9:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 27495,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "2414:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2414:16:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 27500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2414:52:97",
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
                          "id": 27494,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "2404:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27501,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2404:63:97",
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
                        "id": 27492,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27387,
                        "src": "2383:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27381",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27493,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27373,
                      "src": "2383:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 27502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2383:85:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2363:105:97"
                },
                {
                  "assignments": [
                    27505
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27505,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2474:12:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27504,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2474:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27509,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 27506,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27702,
                      "src": "2489:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 27508,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 27507,
                      "name": "_investor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27470,
                      "src": "2498:9:97",
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
                    "src": "2489:19:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2474:34:97"
                },
                {
                  "assignments": [
                    27511
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27511,
                      "name": "available",
                      "nodeType": "VariableDeclaration",
                      "scope": 27520,
                      "src": "2514:14:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27510,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2514:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 27516,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27514,
                        "name": "amountLocked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27491,
                        "src": "2543:12:97",
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
                        "id": 27512,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27505,
                        "src": "2531:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 27513,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17294,
                      "src": "2531:11:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27515,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2531:25:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2514:42:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27517,
                    "name": "available",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27511,
                    "src": "2569:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27474,
                  "id": 27518,
                  "nodeType": "Return",
                  "src": "2562:16:97"
                }
              ]
            },
            "documentation": null,
            "id": 27520,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountAvailable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27470,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 27520,
                  "src": "2198:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2198:7:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2197:19:97"
            },
            "payable": false,
            "returnParameters": {
              "id": 27474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27473,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27520,
                  "src": "2244:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27472,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2244:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2243:6:97"
            },
            "scope": 27521,
            "src": "2170:413:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 27522,
        "src": "776:1810:97"
      }
    ],
    "src": "0:2587:97"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:53.275Z"
}