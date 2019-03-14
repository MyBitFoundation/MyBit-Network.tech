"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC721Receiver = exports.IERC721Receiver = 
{
  "contractName": "IERC721Receiver",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        },
        {
          "name": "from",
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
      "name": "onERC721Received",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
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
  "source": "pragma solidity ^0.4.24;\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n * from ERC721 asset contracts.\n */\ncontract IERC721Receiver {\n    /**\n     * @notice Handle the receipt of an NFT\n     * @dev The ERC721 smart contract calls this function on the recipient\n     * after a `safeTransfer`. This function MUST return the function selector,\n     * otherwise the caller will revert the transaction. The selector to be\n     * returned can be obtained as `this.onERC721Received.selector`. This\n     * function MAY throw to revert and reject the transfer.\n     * Note: the ERC721 contract address is always the message sender.\n     * @param operator The address which called `safeTransferFrom` function\n     * @param from The address which previously owned the token\n     * @param tokenId The NFT identifier which is being transferred\n     * @param data Additional data with no specified format\n     * @return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`\n     */\n    function onERC721Received(address operator, address from, uint256 tokenId, bytes data) public returns (bytes4);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Receiver.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        34908
      ]
    },
    "id": 34909,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34894,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:118"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\nfrom ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 34908,
        "linearizedBaseContracts": [
          34908
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\nafter a `safeTransfer`. This function MUST return the function selector,\notherwise the caller will revert the transaction. The selector to be\nreturned can be obtained as `this.onERC721Received.selector`. This\nfunction MAY throw to revert and reject the transfer.\nNote: the ERC721 contract address is always the message sender.\n@param operator The address which called `safeTransferFrom` function\n@param from The address which previously owned the token\n@param tokenId The NFT identifier which is being transferred\n@param data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`",
            "id": 34907,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34896,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1087:16:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34895,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1087:7:118",
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
                  "id": 34898,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1105:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34897,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1105:7:118",
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
                  "id": 34900,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1119:15:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1119:7:118",
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
                  "id": 34902,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1136:10:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34901,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:5:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1086:61:118"
            },
            "payable": false,
            "returnParameters": {
              "id": 34906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34905,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1164:6:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 34904,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1164:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1163:8:118"
            },
            "scope": 34908,
            "src": "1061:111:118",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34909,
        "src": "179:995:118"
      }
    ],
    "src": "0:1175:118"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Receiver.sol",
    "exportedSymbols": {
      "IERC721Receiver": [
        34908
      ]
    },
    "id": 34909,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34894,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:118"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\nfrom ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 34908,
        "linearizedBaseContracts": [
          34908
        ],
        "name": "IERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\nafter a `safeTransfer`. This function MUST return the function selector,\notherwise the caller will revert the transaction. The selector to be\nreturned can be obtained as `this.onERC721Received.selector`. This\nfunction MAY throw to revert and reject the transfer.\nNote: the ERC721 contract address is always the message sender.\n@param operator The address which called `safeTransferFrom` function\n@param from The address which previously owned the token\n@param tokenId The NFT identifier which is being transferred\n@param data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`",
            "id": 34907,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34896,
                  "name": "operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1087:16:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34895,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1087:7:118",
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
                  "id": 34898,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1105:12:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34897,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1105:7:118",
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
                  "id": 34900,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1119:15:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1119:7:118",
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
                  "id": 34902,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1136:10:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34901,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:5:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1086:61:118"
            },
            "payable": false,
            "returnParameters": {
              "id": 34906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34905,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34907,
                  "src": "1164:6:118",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 34904,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1164:6:118",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1163:8:118"
            },
            "scope": 34908,
            "src": "1061:111:118",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34909,
        "src": "179:995:118"
      }
    ],
    "src": "0:1175:118"
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
      "onERC721Received(address,address,uint256,bytes)": {
        "details": "The ERC721 smart contract calls this function on the recipient after a `safeTransfer`. This function MUST return the function selector, otherwise the caller will revert the transaction. The selector to be returned can be obtained as `this.onERC721Received.selector`. This function MAY throw to revert and reject the transfer. Note: the ERC721 contract address is always the message sender.",
        "params": {
          "data": "Additional data with no specified format",
          "from": "The address which previously owned the token",
          "operator": "The address which called `safeTransferFrom` function",
          "tokenId": "The NFT identifier which is being transferred"
        },
        "return": "`bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`"
      }
    },
    "title": "ERC721 token receiver interface"
  },
  "userdoc": {
    "methods": {
      "onERC721Received(address,address,uint256,bytes)": {
        "notice": "Handle the receipt of an NFT"
      }
    }
  }
}