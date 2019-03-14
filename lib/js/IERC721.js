"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC721 = exports.IERC721 = 
{
  "contractName": "IERC721",
  "abi": [
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "operator",
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
          "name": "operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../../ecosystem/IERC165.sol\";\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721 is IERC165 {\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\n\n    function balanceOf(address owner) public view returns (uint256 balance);\n    function ownerOf(uint256 tokenId) public view returns (address owner);\n\n    function approve(address to, uint256 tokenId) public;\n    function getApproved(uint256 tokenId) public view returns (address operator);\n\n    function setApprovalForAll(address operator, bool _approved) public;\n    function isApprovedForAll(address owner, address operator) public view returns (bool);\n\n    function transferFrom(address from, address to, uint256 tokenId) public;\n    function safeTransferFrom(address from, address to, uint256 tokenId) public;\n\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
    "exportedSymbols": {
      "IERC721": [
        34830
      ]
    },
    "id": 34831,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34729,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:114"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
        "file": "../../ecosystem/IERC165.sol",
        "id": 34730,
        "nodeType": "ImportDirective",
        "scope": 34831,
        "sourceUnit": 8726,
        "src": "26:37:114",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34731,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8725,
              "src": "227:7:114",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$8725",
                "typeString": "contract IERC165"
              }
            },
            "id": 34732,
            "nodeType": "InheritanceSpecifier",
            "src": "227:7:114"
          }
        ],
        "contractDependencies": [
          8725
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34830,
        "linearizedBaseContracts": [
          34830,
          8725
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 34740,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34734,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34740,
                  "src": "256:20:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34733,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:114",
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
                  "id": 34736,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34740,
                  "src": "278:18:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34735,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "278:7:114",
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
                  "id": 34738,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34740,
                  "src": "298:23:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:67:114"
            },
            "src": "241:82:114"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34748,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34742,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34748,
                  "src": "343:21:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34741,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:114",
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
                  "id": 34744,
                  "indexed": true,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 34748,
                  "src": "366:24:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:114",
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
                  "id": 34746,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34748,
                  "src": "392:23:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:74:114"
            },
            "src": "328:89:114"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34756,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34750,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34756,
                  "src": "443:21:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:7:114",
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
                  "id": 34752,
                  "indexed": true,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34756,
                  "src": "466:24:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34751,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "466:7:114",
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
                  "id": 34754,
                  "indexed": false,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 34756,
                  "src": "492:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34753,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:4:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "442:64:114"
            },
            "src": "422:85:114"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34763,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34758,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34763,
                  "src": "532:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "531:15:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34761,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 34763,
                  "src": "568:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "568:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "567:17:114"
            },
            "scope": 34830,
            "src": "513:72:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34770,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34765,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34770,
                  "src": "607:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "607:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "606:17:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34768,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34770,
                  "src": "645:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34767,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "644:15:114"
            },
            "scope": 34830,
            "src": "590:70:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34777,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34772,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34777,
                  "src": "683:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "683:7:114",
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
                  "id": 34774,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34777,
                  "src": "695:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "682:29:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34776,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "718:0:114"
            },
            "scope": 34830,
            "src": "666:53:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34784,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34779,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34784,
                  "src": "745:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34778,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "744:17:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34782,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34784,
                  "src": "783:16:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34781,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "783:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "782:18:114"
            },
            "scope": 34830,
            "src": "724:77:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34791,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34786,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34791,
                  "src": "834:16:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34785,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:7:114",
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
                  "id": 34788,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 34791,
                  "src": "852:14:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34787,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "852:4:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "833:34:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34790,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "874:0:114"
            },
            "scope": 34830,
            "src": "807:68:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34800,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34793,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "906:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34792,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:114",
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
                  "id": 34795,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "921:16:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34794,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "905:33:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34798,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "960:4:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34797,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "960:4:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "959:6:114"
            },
            "scope": 34830,
            "src": "880:86:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34809,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34802,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34809,
                  "src": "994:12:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "994:7:114",
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
                  "id": 34804,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34809,
                  "src": "1008:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:7:114",
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
                  "id": 34806,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34809,
                  "src": "1020:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "993:43:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1043:0:114"
            },
            "scope": 34830,
            "src": "972:72:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34811,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34818,
                  "src": "1075:12:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34810,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:7:114",
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
                  "id": 34813,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34818,
                  "src": "1089:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:114",
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
                  "id": 34815,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34818,
                  "src": "1101:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1101:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1074:43:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1124:0:114"
            },
            "scope": 34830,
            "src": "1049:76:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34829,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34820,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1157:12:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34819,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:114",
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
                  "id": 34822,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1171:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34821,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1171:7:114",
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
                  "id": 34824,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1183:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1183:7:114",
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
                  "id": 34826,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1200:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34825,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1200:5:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1156:55:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1218:0:114"
            },
            "scope": 34830,
            "src": "1131:88:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34831,
        "src": "207:1014:114"
      }
    ],
    "src": "0:1222:114"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
    "exportedSymbols": {
      "IERC721": [
        34830
      ]
    },
    "id": 34831,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34729,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:114"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
        "file": "../../ecosystem/IERC165.sol",
        "id": 34730,
        "nodeType": "ImportDirective",
        "scope": 34831,
        "sourceUnit": 8726,
        "src": "26:37:114",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34731,
              "name": "IERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8725,
              "src": "227:7:114",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC165_$8725",
                "typeString": "contract IERC165"
              }
            },
            "id": 34732,
            "nodeType": "InheritanceSpecifier",
            "src": "227:7:114"
          }
        ],
        "contractDependencies": [
          8725
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34830,
        "linearizedBaseContracts": [
          34830,
          8725
        ],
        "name": "IERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 34740,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34734,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34740,
                  "src": "256:20:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34733,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:114",
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
                  "id": 34736,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34740,
                  "src": "278:18:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34735,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "278:7:114",
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
                  "id": 34738,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34740,
                  "src": "298:23:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:67:114"
            },
            "src": "241:82:114"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34748,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34742,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34748,
                  "src": "343:21:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34741,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:114",
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
                  "id": 34744,
                  "indexed": true,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 34748,
                  "src": "366:24:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:114",
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
                  "id": 34746,
                  "indexed": true,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34748,
                  "src": "392:23:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34745,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:74:114"
            },
            "src": "328:89:114"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 34756,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34750,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34756,
                  "src": "443:21:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34749,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:7:114",
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
                  "id": 34752,
                  "indexed": true,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34756,
                  "src": "466:24:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34751,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "466:7:114",
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
                  "id": 34754,
                  "indexed": false,
                  "name": "approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 34756,
                  "src": "492:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34753,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "492:4:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "442:64:114"
            },
            "src": "422:85:114"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34763,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34758,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34763,
                  "src": "532:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "531:15:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34761,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 34763,
                  "src": "568:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "568:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "567:17:114"
            },
            "scope": 34830,
            "src": "513:72:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34770,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34765,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34770,
                  "src": "607:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "607:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "606:17:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34768,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34770,
                  "src": "645:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34767,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "644:15:114"
            },
            "scope": 34830,
            "src": "590:70:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34777,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34772,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34777,
                  "src": "683:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "683:7:114",
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
                  "id": 34774,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34777,
                  "src": "695:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "682:29:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34776,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "718:0:114"
            },
            "scope": 34830,
            "src": "666:53:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34784,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34779,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34784,
                  "src": "745:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34778,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "744:17:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34782,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34784,
                  "src": "783:16:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34781,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "783:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "782:18:114"
            },
            "scope": 34830,
            "src": "724:77:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34791,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34789,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34786,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34791,
                  "src": "834:16:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34785,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:7:114",
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
                  "id": 34788,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 34791,
                  "src": "852:14:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34787,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "852:4:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "833:34:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34790,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "874:0:114"
            },
            "scope": 34830,
            "src": "807:68:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34800,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34793,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "906:13:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34792,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:114",
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
                  "id": 34795,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "921:16:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34794,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "921:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "905:33:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34798,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "960:4:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34797,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "960:4:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "959:6:114"
            },
            "scope": 34830,
            "src": "880:86:114",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34809,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34802,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34809,
                  "src": "994:12:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34801,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "994:7:114",
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
                  "id": 34804,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34809,
                  "src": "1008:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1008:7:114",
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
                  "id": 34806,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34809,
                  "src": "1020:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34805,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "993:43:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1043:0:114"
            },
            "scope": 34830,
            "src": "972:72:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34811,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34818,
                  "src": "1075:12:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34810,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:7:114",
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
                  "id": 34813,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34818,
                  "src": "1089:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:114",
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
                  "id": 34815,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34818,
                  "src": "1101:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1101:7:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1074:43:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1124:0:114"
            },
            "scope": 34830,
            "src": "1049:76:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34829,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34820,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1157:12:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34819,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:114",
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
                  "id": 34822,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1171:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34821,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1171:7:114",
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
                  "id": 34824,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1183:15:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1183:7:114",
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
                  "id": 34826,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 34829,
                  "src": "1200:10:114",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34825,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1200:5:114",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1156:55:114"
            },
            "payable": false,
            "returnParameters": {
              "id": 34828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1218:0:114"
            },
            "scope": 34830,
            "src": "1131:88:114",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34831,
        "src": "207:1014:114"
      }
    ],
    "src": "0:1222:114"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.876Z",
  "devdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "Interface identification is specified in ERC-165. This function uses less than 30,000 gas.",
        "params": {
          "interfaceId": "The interface identifier, as specified in ERC-165"
        }
      }
    },
    "title": "ERC721 Non-Fungible Token Standard basic interface"
  },
  "userdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "notice": "Query if a contract implements an interface"
      }
    }
  }
}