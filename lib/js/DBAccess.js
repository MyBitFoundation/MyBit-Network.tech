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
        27251
      ],
      "GovernedTokenERC20": [
        27391
      ]
    },
    "id": 27392,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27233,
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
        "id": 27234,
        "nodeType": "ImportDirective",
        "scope": 27392,
        "sourceUnit": 27085,
        "src": "26:34:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 27235,
        "nodeType": "ImportDirective",
        "scope": 27392,
        "sourceUnit": 26294,
        "src": "61:29:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 27236,
        "nodeType": "ImportDirective",
        "scope": 27392,
        "sourceUnit": 17305,
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
        "id": 27251,
        "linearizedBaseContracts": [
          27251
        ],
        "name": "DBAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 27243,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27238,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27243,
                  "src": "240:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27237,
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
              "id": 27242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27241,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27243,
                  "src": "277:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27240,
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
            "scope": 27251,
            "src": "219:64:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 27250,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27245,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27250,
                  "src": "310:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27244,
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
              "id": 27249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27248,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27250,
                  "src": "347:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27247,
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
            "scope": 27251,
            "src": "286:70:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 27392,
        "src": "196:162:97"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27252,
              "name": "DividendTokenERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27084,
              "src": "807:18:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DividendTokenERC20_$27084",
                "typeString": "contract DividendTokenERC20"
              }
            },
            "id": 27253,
            "nodeType": "InheritanceSpecifier",
            "src": "807:18:97"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27254,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26293,
              "src": "827:13:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$26293",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 27255,
            "nodeType": "InheritanceSpecifier",
            "src": "827:13:97"
          }
        ],
        "contractDependencies": [
          16611,
          17039,
          26293,
          27084,
          27515,
          27893
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 27391,
        "linearizedBaseContracts": [
          27391,
          26293,
          16611,
          27084,
          27515,
          27893,
          17039
        ],
        "name": "GovernedTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 27257,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 27391,
            "src": "844:24:97",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBAccess_$27251",
              "typeString": "contract DBAccess"
            },
            "typeName": {
              "contractScope": null,
              "id": 27256,
              "name": "DBAccess",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27251,
              "src": "844:8:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBAccess_$27251",
                "typeString": "contract DBAccess"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27279,
              "nodeType": "Block",
              "src": "1416:41:97",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27273,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27257,
                      "src": "1422:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27251",
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
                          "id": 27275,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27259,
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
                        "id": 27274,
                        "name": "DBAccess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27251,
                        "src": "1433:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBAccess_$27251_$",
                          "typeString": "type(contract DBAccess)"
                        }
                      },
                      "id": 27276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1433:19:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27251",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "src": "1422:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBAccess_$27251",
                      "typeString": "contract DBAccess"
                    }
                  },
                  "id": 27278,
                  "nodeType": "ExpressionStatement",
                  "src": "1422:30:97"
                }
              ]
            },
            "documentation": null,
            "id": 27280,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 27268,
                    "name": "_tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27261,
                    "src": "1383:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27269,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27263,
                    "src": "1394:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27270,
                    "name": "_erc20Address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27265,
                    "src": "1402:13:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 27271,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27267,
                  "name": "DividendTokenERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27084,
                  "src": "1364:18:97",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DividendTokenERC20_$27084_$",
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
              "id": 27266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27259,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1277:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27258,
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
                  "id": 27261,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1296:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27260,
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
                  "id": 27263,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1314:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27262,
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
                  "id": 27265,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1330:21:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27264,
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
              "id": 27272,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1416:0:97"
            },
            "scope": 27391,
            "src": "1265:192:97",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27307,
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
                        "id": 27295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27290,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27284,
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
                                "id": 27292,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27908,
                                "src": "1686:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 27293,
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
                            "id": 27291,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27390,
                            "src": "1667:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27294,
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
                      "id": 27289,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1648:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27296,
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
                  "id": 27297,
                  "nodeType": "ExpressionStatement",
                  "src": "1648:50:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27301,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27282,
                        "src": "1721:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27302,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27284,
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
                        "id": 27298,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28178,
                        "src": "1706:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27391",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26739,
                      "src": "1706:14:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 27303,
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
                  "id": 27304,
                  "nodeType": "ExpressionStatement",
                  "src": "1706:28:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27305,
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
                  "functionReturnParameters": 27288,
                  "id": 27306,
                  "nodeType": "Return",
                  "src": "1742:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27308,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27282,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "1579:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27281,
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
                  "id": 27284,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "1592:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27283,
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
              "id": 27288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27287,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "1626:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27286,
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
            "scope": 27391,
            "src": "1561:197:97",
            "stateMutability": "nonpayable",
            "superFunction": 26739,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27337,
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
                        "id": 27324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27320,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27314,
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
                              "id": 27322,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27310,
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
                            "id": 27321,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27390,
                            "src": "1991:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27323,
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
                      "id": 27319,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1972:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27325,
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
                  "id": 27326,
                  "nodeType": "ExpressionStatement",
                  "src": "1972:45:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27330,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27310,
                        "src": "2044:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27331,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27312,
                        "src": "2051:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27332,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27314,
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
                        "id": 27327,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28178,
                        "src": "2025:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27391",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26775,
                      "src": "2025:18:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 27333,
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
                  "id": 27334,
                  "nodeType": "ExpressionStatement",
                  "src": "2025:39:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27335,
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
                  "functionReturnParameters": 27318,
                  "id": 27336,
                  "nodeType": "Return",
                  "src": "2072:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27338,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27310,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1888:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27309,
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
                  "id": 27312,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1903:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27311,
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
                  "id": 27314,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1916:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27313,
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
              "id": 27318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27317,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1950:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27316,
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
            "scope": 27391,
            "src": "1866:222:97",
            "stateMutability": "nonpayable",
            "superFunction": 26775,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27389,
              "nodeType": "Block",
              "src": "2250:333:97",
              "statements": [
                {
                  "assignments": [
                    27346
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27346,
                      "name": "assetID",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2256:15:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 27345,
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
                  "id": 27359,
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
                                "id": 27352,
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
                                    "id": 27354,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28177,
                                    "src": "2349:4:97",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27391",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27391",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  ],
                                  "id": 27353,
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
                                "id": 27355,
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
                                "id": 27350,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "2308:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27351,
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
                            "id": 27356,
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
                          "id": 27349,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "2298:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27357,
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
                        "id": 27347,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27257,
                        "src": "2274:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27251",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27348,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27250,
                      "src": "2274:23:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 27358,
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
                    27361
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27361,
                      "name": "amountLocked",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2363:17:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27360,
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
                  "id": 27373,
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
                                "id": 27367,
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
                                "id": 27368,
                                "name": "assetID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27346,
                                "src": "2447:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 27369,
                                "name": "_investor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27340,
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
                                "id": 27365,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "2414:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27366,
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
                            "id": 27370,
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
                          "id": 27364,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "2404:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27371,
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
                        "id": 27362,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27257,
                        "src": "2383:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27251",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27243,
                      "src": "2383:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 27372,
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
                    27375
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27375,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2474:12:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27374,
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
                  "id": 27379,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 27376,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27572,
                      "src": "2489:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 27378,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 27377,
                      "name": "_investor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27340,
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
                    27381
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27381,
                      "name": "available",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2514:14:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27380,
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
                  "id": 27386,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27384,
                        "name": "amountLocked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27361,
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
                        "id": 27382,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27375,
                        "src": "2531:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 27383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17261,
                      "src": "2531:11:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27385,
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
                    "id": 27387,
                    "name": "available",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27381,
                    "src": "2569:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27344,
                  "id": 27388,
                  "nodeType": "Return",
                  "src": "2562:16:97"
                }
              ]
            },
            "documentation": null,
            "id": 27390,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountAvailable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27340,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 27390,
                  "src": "2198:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27339,
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
              "id": 27344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27343,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27390,
                  "src": "2244:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27342,
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
            "scope": 27391,
            "src": "2170:413:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 27392,
        "src": "776:1810:97"
      }
    ],
    "src": "0:2587:97"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
    "exportedSymbols": {
      "DBAccess": [
        27251
      ],
      "GovernedTokenERC20": [
        27391
      ]
    },
    "id": 27392,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 27233,
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
        "id": 27234,
        "nodeType": "ImportDirective",
        "scope": 27392,
        "sourceUnit": 27085,
        "src": "26:34:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 27235,
        "nodeType": "ImportDirective",
        "scope": 27392,
        "sourceUnit": 26294,
        "src": "61:29:97",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 27236,
        "nodeType": "ImportDirective",
        "scope": 27392,
        "sourceUnit": 17305,
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
        "id": 27251,
        "linearizedBaseContracts": [
          27251
        ],
        "name": "DBAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 27243,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27238,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27243,
                  "src": "240:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27237,
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
              "id": 27242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27241,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27243,
                  "src": "277:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27240,
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
            "scope": 27251,
            "src": "219:64:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 27250,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27245,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 27250,
                  "src": "310:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27244,
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
              "id": 27249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27248,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27250,
                  "src": "347:7:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 27247,
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
            "scope": 27251,
            "src": "286:70:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 27392,
        "src": "196:162:97"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27252,
              "name": "DividendTokenERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27084,
              "src": "807:18:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DividendTokenERC20_$27084",
                "typeString": "contract DividendTokenERC20"
              }
            },
            "id": 27253,
            "nodeType": "InheritanceSpecifier",
            "src": "807:18:97"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 27254,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 26293,
              "src": "827:13:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$26293",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 27255,
            "nodeType": "InheritanceSpecifier",
            "src": "827:13:97"
          }
        ],
        "contractDependencies": [
          16611,
          17039,
          26293,
          27084,
          27515,
          27893
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 27391,
        "linearizedBaseContracts": [
          27391,
          26293,
          16611,
          27084,
          27515,
          27893,
          17039
        ],
        "name": "GovernedTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 27257,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 27391,
            "src": "844:24:97",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBAccess_$27251",
              "typeString": "contract DBAccess"
            },
            "typeName": {
              "contractScope": null,
              "id": 27256,
              "name": "DBAccess",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 27251,
              "src": "844:8:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBAccess_$27251",
                "typeString": "contract DBAccess"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27279,
              "nodeType": "Block",
              "src": "1416:41:97",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 27273,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27257,
                      "src": "1422:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27251",
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
                          "id": 27275,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27259,
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
                        "id": 27274,
                        "name": "DBAccess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27251,
                        "src": "1433:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBAccess_$27251_$",
                          "typeString": "type(contract DBAccess)"
                        }
                      },
                      "id": 27276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1433:19:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$27251",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "src": "1422:30:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBAccess_$27251",
                      "typeString": "contract DBAccess"
                    }
                  },
                  "id": 27278,
                  "nodeType": "ExpressionStatement",
                  "src": "1422:30:97"
                }
              ]
            },
            "documentation": null,
            "id": 27280,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 27268,
                    "name": "_tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27261,
                    "src": "1383:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27269,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27263,
                    "src": "1394:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 27270,
                    "name": "_erc20Address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27265,
                    "src": "1402:13:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 27271,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 27267,
                  "name": "DividendTokenERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 27084,
                  "src": "1364:18:97",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DividendTokenERC20_$27084_$",
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
              "id": 27266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27259,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1277:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27258,
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
                  "id": 27261,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1296:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 27260,
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
                  "id": 27263,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1314:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27262,
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
                  "id": 27265,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 27280,
                  "src": "1330:21:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27264,
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
              "id": 27272,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1416:0:97"
            },
            "scope": 27391,
            "src": "1265:192:97",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27307,
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
                        "id": 27295,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27290,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27284,
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
                                "id": 27292,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27908,
                                "src": "1686:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 27293,
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
                            "id": 27291,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27390,
                            "src": "1667:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27294,
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
                      "id": 27289,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1648:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27296,
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
                  "id": 27297,
                  "nodeType": "ExpressionStatement",
                  "src": "1648:50:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27301,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27282,
                        "src": "1721:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27302,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27284,
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
                        "id": 27298,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28178,
                        "src": "1706:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27391",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26739,
                      "src": "1706:14:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 27303,
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
                  "id": 27304,
                  "nodeType": "ExpressionStatement",
                  "src": "1706:28:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27305,
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
                  "functionReturnParameters": 27288,
                  "id": 27306,
                  "nodeType": "Return",
                  "src": "1742:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27308,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27282,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "1579:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27281,
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
                  "id": 27284,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "1592:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27283,
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
              "id": 27288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27287,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27308,
                  "src": "1626:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27286,
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
            "scope": 27391,
            "src": "1561:197:97",
            "stateMutability": "nonpayable",
            "superFunction": 26739,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27337,
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
                        "id": 27324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 27320,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27314,
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
                              "id": 27322,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27310,
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
                            "id": 27321,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 27390,
                            "src": "1991:18:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 27323,
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
                      "id": 27319,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "1972:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 27325,
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
                  "id": 27326,
                  "nodeType": "ExpressionStatement",
                  "src": "1972:45:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27330,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27310,
                        "src": "2044:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27331,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27312,
                        "src": "2051:3:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 27332,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27314,
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
                        "id": 27327,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28178,
                        "src": "2025:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$27391",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 27329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 26775,
                      "src": "2025:18:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 27333,
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
                  "id": 27334,
                  "nodeType": "ExpressionStatement",
                  "src": "2025:39:97"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 27335,
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
                  "functionReturnParameters": 27318,
                  "id": 27336,
                  "nodeType": "Return",
                  "src": "2072:11:97"
                }
              ]
            },
            "documentation": null,
            "id": 27338,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27310,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1888:13:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27309,
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
                  "id": 27312,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1903:11:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27311,
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
                  "id": 27314,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1916:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27313,
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
              "id": 27318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27317,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 27338,
                  "src": "1950:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 27316,
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
            "scope": 27391,
            "src": "1866:222:97",
            "stateMutability": "nonpayable",
            "superFunction": 26775,
            "visibility": "public"
          },
          {
            "body": {
              "id": 27389,
              "nodeType": "Block",
              "src": "2250:333:97",
              "statements": [
                {
                  "assignments": [
                    27346
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27346,
                      "name": "assetID",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2256:15:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 27345,
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
                  "id": 27359,
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
                                "id": 27352,
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
                                    "id": 27354,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28177,
                                    "src": "2349:4:97",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27391",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$27391",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  ],
                                  "id": 27353,
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
                                "id": 27355,
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
                                "id": 27350,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "2308:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27351,
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
                            "id": 27356,
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
                          "id": 27349,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "2298:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27357,
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
                        "id": 27347,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27257,
                        "src": "2274:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27251",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27348,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27250,
                      "src": "2274:23:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 27358,
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
                    27361
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27361,
                      "name": "amountLocked",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2363:17:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27360,
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
                  "id": 27373,
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
                                "id": 27367,
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
                                "id": 27368,
                                "name": "assetID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27346,
                                "src": "2447:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 27369,
                                "name": "_investor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27340,
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
                                "id": 27365,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "2414:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 27366,
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
                            "id": 27370,
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
                          "id": 27364,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "2404:9:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 27371,
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
                        "id": 27362,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27257,
                        "src": "2383:8:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$27251",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 27363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 27243,
                      "src": "2383:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 27372,
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
                    27375
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27375,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2474:12:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27374,
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
                  "id": 27379,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 27376,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27572,
                      "src": "2489:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 27378,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 27377,
                      "name": "_investor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27340,
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
                    27381
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 27381,
                      "name": "available",
                      "nodeType": "VariableDeclaration",
                      "scope": 27390,
                      "src": "2514:14:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 27380,
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
                  "id": 27386,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 27384,
                        "name": "amountLocked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27361,
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
                        "id": 27382,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 27375,
                        "src": "2531:7:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 27383,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17261,
                      "src": "2531:11:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27385,
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
                    "id": 27387,
                    "name": "available",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27381,
                    "src": "2569:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 27344,
                  "id": 27388,
                  "nodeType": "Return",
                  "src": "2562:16:97"
                }
              ]
            },
            "documentation": null,
            "id": 27390,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountAvailable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 27341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27340,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 27390,
                  "src": "2198:17:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27339,
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
              "id": 27344,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27343,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 27390,
                  "src": "2244:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27342,
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
            "scope": 27391,
            "src": "2170:413:97",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 27392,
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
  "updatedAt": "2018-12-03T18:35:12.315Z"
}