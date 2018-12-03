"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorConverter = exports.IBancorConverter = 
{
  "contractName": "IBancorConverter",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_fromToken",
          "type": "address"
        },
        {
          "name": "_toToken",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "getReturn",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
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
      "constant": false,
      "inputs": [
        {
          "name": "_fromToken",
          "type": "address"
        },
        {
          "name": "_toToken",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        }
      ],
      "name": "convert",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "conversionWhitelist",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "conversionFee",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
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
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "connectors",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint32"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "bool"
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
          "name": "_connectorToken",
          "type": "address"
        }
      ],
      "name": "getConnectorBalance",
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
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "claimTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_fromToken",
          "type": "address"
        },
        {
          "name": "_toToken",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        }
      ],
      "name": "change",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\nimport '../../token/interfaces/IERC20Token.sol';\nimport '../../utility/interfaces/IWhitelist.sol';\n\n/*\n    Bancor Converter interface\n*/\ncontract IBancorConverter {\n    function getReturn(IERC20Token _fromToken, IERC20Token _toToken, uint256 _amount) public view returns (uint256, uint256);\n    function convert(IERC20Token _fromToken, IERC20Token _toToken, uint256 _amount, uint256 _minReturn) public returns (uint256);\n    function conversionWhitelist() public pure returns (IWhitelist) {}\n    function conversionFee() public pure returns (uint32) {}\n    function connectors(address _address) public pure returns (uint256, uint32, bool, bool, bool) { _address; }\n    function getConnectorBalance(IERC20Token _connectorToken) public view returns (uint256);\n    function claimTokens(address _from, uint256 _amount) public;\n    // deprecated, backward compatibility\n    function change(IERC20Token _fromToken, IERC20Token _toToken, uint256 _amount, uint256 _minReturn) public returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverter.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverter.sol",
    "exportedSymbols": {
      "IBancorConverter": [
        7642
      ]
    },
    "id": 7643,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7556,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 7557,
        "nodeType": "ImportDirective",
        "scope": 7643,
        "sourceUnit": 8902,
        "src": "25:48:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
        "file": "../../utility/interfaces/IWhitelist.sol",
        "id": 7558,
        "nodeType": "ImportDirective",
        "scope": 7643,
        "sourceUnit": 9914,
        "src": "74:49:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7642,
        "linearizedBaseContracts": [
          7642
        ],
        "name": "IBancorConverter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7571,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7560,
                  "name": "_fromToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "213:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7559,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "213:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7562,
                  "name": "_toToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "237:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7561,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "237:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7564,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "259:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:63:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7567,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "297:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7566,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7569,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "306:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "296:18:15"
            },
            "scope": 7642,
            "src": "194:121:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7584,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7573,
                  "name": "_fromToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "337:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7572,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "337:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7575,
                  "name": "_toToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "361:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7574,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "361:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7577,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "383:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7576,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7579,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "400:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:83:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "436:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "435:9:15"
            },
            "scope": 7642,
            "src": "320:125:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7589,
              "nodeType": "Block",
              "src": "514:2:15",
              "statements": []
            },
            "documentation": null,
            "id": 7590,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "conversionWhitelist",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "478:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7590,
                  "src": "502:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IWhitelist_$9913",
                    "typeString": "contract IWhitelist"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7586,
                    "name": "IWhitelist",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9913,
                    "src": "502:10:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IWhitelist_$9913",
                      "typeString": "contract IWhitelist"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "501:12:15"
            },
            "scope": 7642,
            "src": "450:66:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7595,
              "nodeType": "Block",
              "src": "575:2:15",
              "statements": []
            },
            "documentation": null,
            "id": 7596,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "conversionFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7591,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "543:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7593,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7596,
                  "src": "567:6:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7592,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "566:8:15"
            },
            "scope": 7642,
            "src": "521:56:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7613,
              "nodeType": "Block",
              "src": "676:13:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7611,
                    "name": "_address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7598,
                    "src": "678:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7612,
                  "nodeType": "ExpressionStatement",
                  "src": "678:8:15"
                }
              ]
            },
            "documentation": null,
            "id": 7614,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "connectors",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7598,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "602:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "602:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "601:18:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7601,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "641:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7600,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7603,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "650:6:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7602,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7605,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "658:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7604,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7607,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "664:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7606,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7609,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "670:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7608,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "670:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "640:35:15"
            },
            "scope": 7642,
            "src": "582:107:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7621,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getConnectorBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7616,
                  "name": "_connectorToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7621,
                  "src": "723:27:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7615,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "723:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "722:29:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7619,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7621,
                  "src": "773:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "773:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "772:9:15"
            },
            "scope": 7642,
            "src": "694:88:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7628,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "claimTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7623,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 7628,
                  "src": "808:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:15",
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
                  "id": 7625,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7628,
                  "src": "823:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:32:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:0:15"
            },
            "scope": 7642,
            "src": "787:60:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7641,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "change",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7630,
                  "name": "_fromToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "910:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7629,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "910:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7632,
                  "name": "_toToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "934:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7631,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "934:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7634,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "956:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7636,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "973:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7635,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "909:83:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7640,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7639,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "1009:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1009:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1008:9:15"
            },
            "scope": 7642,
            "src": "894:124:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7643,
        "src": "162:858:15"
      }
    ],
    "src": "0:1021:15"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/converter/interfaces/IBancorConverter.sol",
    "exportedSymbols": {
      "IBancorConverter": [
        7642
      ]
    },
    "id": 7643,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7556,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../../token/interfaces/IERC20Token.sol",
        "id": 7557,
        "nodeType": "ImportDirective",
        "scope": 7643,
        "sourceUnit": 8902,
        "src": "25:48:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
        "file": "../../utility/interfaces/IWhitelist.sol",
        "id": 7558,
        "nodeType": "ImportDirective",
        "scope": 7643,
        "sourceUnit": 9914,
        "src": "74:49:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7642,
        "linearizedBaseContracts": [
          7642
        ],
        "name": "IBancorConverter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7571,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getReturn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7560,
                  "name": "_fromToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "213:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7559,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "213:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7562,
                  "name": "_toToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "237:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7561,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "237:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7564,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "259:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:63:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7567,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "297:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7566,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7569,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7571,
                  "src": "306:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7568,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "296:18:15"
            },
            "scope": 7642,
            "src": "194:121:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7584,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7573,
                  "name": "_fromToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "337:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7572,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "337:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7575,
                  "name": "_toToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "361:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7574,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "361:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7577,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "383:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7576,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7579,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "400:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7578,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "336:83:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7584,
                  "src": "436:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "435:9:15"
            },
            "scope": 7642,
            "src": "320:125:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7589,
              "nodeType": "Block",
              "src": "514:2:15",
              "statements": []
            },
            "documentation": null,
            "id": 7590,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "conversionWhitelist",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "478:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7590,
                  "src": "502:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IWhitelist_$9913",
                    "typeString": "contract IWhitelist"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7586,
                    "name": "IWhitelist",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9913,
                    "src": "502:10:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IWhitelist_$9913",
                      "typeString": "contract IWhitelist"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "501:12:15"
            },
            "scope": 7642,
            "src": "450:66:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7595,
              "nodeType": "Block",
              "src": "575:2:15",
              "statements": []
            },
            "documentation": null,
            "id": 7596,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "conversionFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7591,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "543:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7593,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7596,
                  "src": "567:6:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7592,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "566:8:15"
            },
            "scope": 7642,
            "src": "521:56:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7613,
              "nodeType": "Block",
              "src": "676:13:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7611,
                    "name": "_address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7598,
                    "src": "678:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7612,
                  "nodeType": "ExpressionStatement",
                  "src": "678:8:15"
                }
              ]
            },
            "documentation": null,
            "id": 7614,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "connectors",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7598,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "602:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7597,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "602:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "601:18:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7601,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "641:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7600,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7603,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "650:6:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 7602,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7605,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "658:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7604,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7607,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "664:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7606,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "664:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7609,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7614,
                  "src": "670:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7608,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "670:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "640:35:15"
            },
            "scope": 7642,
            "src": "582:107:15",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7621,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getConnectorBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7616,
                  "name": "_connectorToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7621,
                  "src": "723:27:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7615,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "723:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "722:29:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7619,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7621,
                  "src": "773:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7618,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "773:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "772:9:15"
            },
            "scope": 7642,
            "src": "694:88:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7628,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "claimTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7623,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 7628,
                  "src": "808:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7622,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "808:7:15",
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
                  "id": 7625,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7628,
                  "src": "823:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "807:32:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:0:15"
            },
            "scope": 7642,
            "src": "787:60:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 7641,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "change",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7630,
                  "name": "_fromToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "910:22:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7629,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "910:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7632,
                  "name": "_toToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "934:20:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7631,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "934:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7634,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "956:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7633,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "956:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7636,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "973:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7635,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "909:83:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 7640,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7639,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7641,
                  "src": "1009:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7638,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1009:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1008:9:15"
            },
            "scope": 7642,
            "src": "894:124:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7643,
        "src": "162:858:15"
      }
    ],
    "src": "0:1021:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-03T18:35:11.903Z"
}