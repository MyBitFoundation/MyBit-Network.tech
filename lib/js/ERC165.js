"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC165 = exports.ERC165 = 
{
  "contractName": "ERC165",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC165.sol\";\n\n/**\n * @title ERC165\n * @author Matt Condon (@shrugs)\n * @dev Implements ERC165 using a lookup table.\n */\ncontract ERC165 is IERC165 {\n    bytes4 private constant _InterfaceId_ERC165 = 0x01ffc9a7;\n    /**\n     * 0x01ffc9a7 ===\n     *     bytes4(keccak256('supportsInterface(bytes4)'))\n     */\n\n    /**\n     * @dev a mapping of interface id to whether or not it's supported\n     */\n    mapping(bytes4 => bool) private _supportedInterfaces;\n\n    /**\n     * @dev A contract implementing SupportsInterfaceWithLookup\n     * implement ERC165 itself\n     */\n    constructor () internal {\n        _registerInterface(_InterfaceId_ERC165);\n    }\n\n    /**\n     * @dev implement supportsInterface(bytes4) using a lookup table\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool) {\n        return _supportedInterfaces[interfaceId];\n    }\n\n    /**\n     * @dev internal method for registering an interface\n     */\n    function _registerInterface(bytes4 interfaceId) internal {\n        require(interfaceId != 0xffffffff);\n        _supportedInterfaces[interfaceId] = true;\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165.sol",
    "exportedSymbols": {
      "ERC165": [
        8482
      ]
    },
    "id": 8483,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8433,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
        "file": "./IERC165.sol",
        "id": 8434,
        "nodeType": "ImportDirective",
        "scope": 8483,
        "sourceUnit": 8630,
        "src": "26:23:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8435,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8629,
              "src": "176:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$8629",
                "typeString": "contract IERC165"
              }
            },
            "id": 8436,
            "nodeType": "InheritanceSpecifier",
            "src": "176:7:24"
          }
        ],
        "contractDependencies": [
          8629
        ],
        "contractKind": "contract",
        "documentation": "@title ERC165\n@author Matt Condon (@shrugs)\n@dev Implements ERC165 using a lookup table.",
        "fullyImplemented": true,
        "id": 8482,
        "linearizedBaseContracts": [
          8482,
          8629
        ],
        "name": "ERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 8439,
            "name": "_InterfaceId_ERC165",
            "nodeType": "VariableDeclaration",
            "scope": 8482,
            "src": "190:56:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 8437,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "190:6:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783031666663396137",
              "id": 8438,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "236:10:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33540519_by_1",
                "typeString": "int_const 33540519"
              },
              "value": "0x01ffc9a7"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 8443,
            "name": "_supportedInterfaces",
            "nodeType": "VariableDeclaration",
            "scope": 8482,
            "src": "436:52:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 8442,
              "keyType": {
                "id": 8440,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "444:6:24",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "436:23:24",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueType": {
                "id": 8441,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "454:4:24",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 8450,
              "nodeType": "Block",
              "src": "630:56:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8447,
                        "name": "_InterfaceId_ERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8439,
                        "src": "659:19:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 8446,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8481,
                      "src": "640:18:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 8448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "640:39:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8449,
                  "nodeType": "ExpressionStatement",
                  "src": "640:39:24"
                }
              ]
            },
            "documentation": "@dev A contract implementing SupportsInterfaceWithLookup\nimplement ERC165 itself",
            "id": 8451,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8444,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "630:0:24"
            },
            "scope": 8482,
            "src": "606:80:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8462,
              "nodeType": "Block",
              "src": "853:57:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 8458,
                      "name": "_supportedInterfaces",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8443,
                      "src": "870:20:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                        "typeString": "mapping(bytes4 => bool)"
                      }
                    },
                    "id": 8460,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 8459,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8453,
                      "src": "891:11:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "870:33:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8457,
                  "id": 8461,
                  "nodeType": "Return",
                  "src": "863:40:24"
                }
              ]
            },
            "documentation": "@dev implement supportsInterface(bytes4) using a lookup table",
            "id": 8463,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8453,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "804:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8452,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "803:20:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8456,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "847:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8455,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "847:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "846:6:24"
            },
            "scope": 8482,
            "src": "777:133:24",
            "stateMutability": "view",
            "superFunction": 8628,
            "visibility": "external"
          },
          {
            "body": {
              "id": 8480,
              "nodeType": "Block",
              "src": "1046:101:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 8471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8469,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8465,
                          "src": "1064:11:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30786666666666666666",
                          "id": 8470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1079:10:24",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4294967295_by_1",
                            "typeString": "int_const 4294967295"
                          },
                          "value": "0xffffffff"
                        },
                        "src": "1064:25:24",
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
                      "id": 8468,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34830,
                        34831
                      ],
                      "referencedDeclaration": 34830,
                      "src": "1056:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1056:34:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8473,
                  "nodeType": "ExpressionStatement",
                  "src": "1056:34:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8478,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 8474,
                        "name": "_supportedInterfaces",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8443,
                        "src": "1100:20:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 8476,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 8475,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8465,
                        "src": "1121:11:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1100:33:24",
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
                      "id": 8477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1136:4:24",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1100:40:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8479,
                  "nodeType": "ExpressionStatement",
                  "src": "1100:40:24"
                }
              ]
            },
            "documentation": "@dev internal method for registering an interface",
            "id": 8481,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_registerInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8465,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8481,
                  "src": "1017:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8464,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1016:20:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8467,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1046:0:24"
            },
            "scope": 8482,
            "src": "989:158:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 8483,
        "src": "157:992:24"
      }
    ],
    "src": "0:1150:24"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165.sol",
    "exportedSymbols": {
      "ERC165": [
        8482
      ]
    },
    "id": 8483,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8433,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
        "file": "./IERC165.sol",
        "id": 8434,
        "nodeType": "ImportDirective",
        "scope": 8483,
        "sourceUnit": 8630,
        "src": "26:23:24",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8435,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8629,
              "src": "176:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$8629",
                "typeString": "contract IERC165"
              }
            },
            "id": 8436,
            "nodeType": "InheritanceSpecifier",
            "src": "176:7:24"
          }
        ],
        "contractDependencies": [
          8629
        ],
        "contractKind": "contract",
        "documentation": "@title ERC165\n@author Matt Condon (@shrugs)\n@dev Implements ERC165 using a lookup table.",
        "fullyImplemented": true,
        "id": 8482,
        "linearizedBaseContracts": [
          8482,
          8629
        ],
        "name": "ERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 8439,
            "name": "_InterfaceId_ERC165",
            "nodeType": "VariableDeclaration",
            "scope": 8482,
            "src": "190:56:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 8437,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "190:6:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783031666663396137",
              "id": 8438,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "236:10:24",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33540519_by_1",
                "typeString": "int_const 33540519"
              },
              "value": "0x01ffc9a7"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 8443,
            "name": "_supportedInterfaces",
            "nodeType": "VariableDeclaration",
            "scope": 8482,
            "src": "436:52:24",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
              "typeString": "mapping(bytes4 => bool)"
            },
            "typeName": {
              "id": 8442,
              "keyType": {
                "id": 8440,
                "name": "bytes4",
                "nodeType": "ElementaryTypeName",
                "src": "444:6:24",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes4",
                  "typeString": "bytes4"
                }
              },
              "nodeType": "Mapping",
              "src": "436:23:24",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                "typeString": "mapping(bytes4 => bool)"
              },
              "valueType": {
                "id": 8441,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "454:4:24",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 8450,
              "nodeType": "Block",
              "src": "630:56:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8447,
                        "name": "_InterfaceId_ERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8439,
                        "src": "659:19:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 8446,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8481,
                      "src": "640:18:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 8448,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "640:39:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8449,
                  "nodeType": "ExpressionStatement",
                  "src": "640:39:24"
                }
              ]
            },
            "documentation": "@dev A contract implementing SupportsInterfaceWithLookup\nimplement ERC165 itself",
            "id": 8451,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8444,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "618:2:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "630:0:24"
            },
            "scope": 8482,
            "src": "606:80:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8462,
              "nodeType": "Block",
              "src": "853:57:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 8458,
                      "name": "_supportedInterfaces",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8443,
                      "src": "870:20:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                        "typeString": "mapping(bytes4 => bool)"
                      }
                    },
                    "id": 8460,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 8459,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8453,
                      "src": "891:11:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "870:33:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8457,
                  "id": 8461,
                  "nodeType": "Return",
                  "src": "863:40:24"
                }
              ]
            },
            "documentation": "@dev implement supportsInterface(bytes4) using a lookup table",
            "id": 8463,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8453,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "804:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8452,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "803:20:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8456,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "847:4:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8455,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "847:4:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "846:6:24"
            },
            "scope": 8482,
            "src": "777:133:24",
            "stateMutability": "view",
            "superFunction": 8628,
            "visibility": "external"
          },
          {
            "body": {
              "id": 8480,
              "nodeType": "Block",
              "src": "1046:101:24",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 8471,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8469,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8465,
                          "src": "1064:11:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30786666666666666666",
                          "id": 8470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1079:10:24",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_4294967295_by_1",
                            "typeString": "int_const 4294967295"
                          },
                          "value": "0xffffffff"
                        },
                        "src": "1064:25:24",
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
                      "id": 8468,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34830,
                        34831
                      ],
                      "referencedDeclaration": 34830,
                      "src": "1056:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8472,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1056:34:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8473,
                  "nodeType": "ExpressionStatement",
                  "src": "1056:34:24"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8478,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 8474,
                        "name": "_supportedInterfaces",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8443,
                        "src": "1100:20:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes4_$_t_bool_$",
                          "typeString": "mapping(bytes4 => bool)"
                        }
                      },
                      "id": 8476,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 8475,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8465,
                        "src": "1121:11:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1100:33:24",
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
                      "id": 8477,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1136:4:24",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1100:40:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8479,
                  "nodeType": "ExpressionStatement",
                  "src": "1100:40:24"
                }
              ]
            },
            "documentation": "@dev internal method for registering an interface",
            "id": 8481,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_registerInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8465,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8481,
                  "src": "1017:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8464,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1016:20:24"
            },
            "payable": false,
            "returnParameters": {
              "id": 8467,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1046:0:24"
            },
            "scope": 8482,
            "src": "989:158:24",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 8483,
        "src": "157:992:24"
      }
    ],
    "src": "0:1150:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-03-13T22:36:34.178Z",
  "devdoc": {
    "author": "Matt Condon (@shrugs)",
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "implement supportsInterface(bytes4) using a lookup table"
      }
    },
    "title": "ERC165"
  },
  "userdoc": {
    "methods": {}
  }
}