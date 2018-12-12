"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Logarithm = exports.Logarithm = 
{
  "contractName": "Logarithm",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582071600f59cff46e5a028c9ab13e1b536d9e29d980b005ad11f14cfe15c19096850029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582071600f59cff46e5a028c9ab13e1b536d9e29d980b005ad11f14cfe15c19096850029",
  "sourceMap": "27:1769:69:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "27:1769:69:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n\nlibrary Logarithm {\n\n\n  function logBase2(uint256 x)\n  internal\n  pure\n  returns (uint256 y){\n     assembly {\n          let arg := x\n          x := sub(x,1)\n          x := or(x, div(x, 0x02))\n          x := or(x, div(x, 0x04))\n          x := or(x, div(x, 0x10))\n          x := or(x, div(x, 0x100))\n          x := or(x, div(x, 0x10000))\n          x := or(x, div(x, 0x100000000))\n          x := or(x, div(x, 0x10000000000000000))\n          x := or(x, div(x, 0x100000000000000000000000000000000))\n          x := add(x, 1)\n          let m := mload(0x40)\n          mstore(m,           0xf8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd)\n          mstore(add(m,0x20), 0xf5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe)\n          mstore(add(m,0x40), 0xf6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a8272523616)\n          mstore(add(m,0x60), 0xc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff)\n          mstore(add(m,0x80), 0xf7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e)\n          mstore(add(m,0xa0), 0xe39ed557db96902cd38ed14fad815115c786af479b7e83247363534337271707)\n          mstore(add(m,0xc0), 0xc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d2362422606)\n          mstore(add(m,0xe0), 0x753a6d1b65325d0c552a4d1345224105391a310b29122104190a110309020100)\n          mstore(0x40, add(m, 0x100))\n          let magic := 0x818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff\n          let shift := 0x100000000000000000000000000000000000000000000000000000000000000\n          let a := div(mul(x, magic), shift)\n          y := div(mload(add(m,sub(255,a))), shift)\n          y := add(y, mul(256, gt(arg, 0x8000000000000000000000000000000000000000000000000000000000000000)))\n      }\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/Logarithm.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/Logarithm.sol",
    "exportedSymbols": {
      "Logarithm": [
        17225
      ]
    },
    "id": 17226,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17215,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:69"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17225,
        "linearizedBaseContracts": [
          17225
        ],
        "name": "Logarithm",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 17223,
              "nodeType": "Block",
              "src": "119:1674:69",
              "statements": [
                {
                  "externalReferences": [
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "158:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "202:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "170:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "194:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "179:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "229:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "264:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "335:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "373:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "531:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "209:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "465:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "307:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "314:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "299:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "237:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "244:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "272:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "279:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "540:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "473:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "480:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "343:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "350:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "423:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "415:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "381:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "388:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "430:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "y": {
                        "declaration": 17220,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1631:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "y": {
                        "declaration": 17220,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1692:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1603:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "y": {
                        "declaration": 17220,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1683:1:69",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 17222,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    let arg := x\n    x := sub(x, 1)\n    x := or(x, div(x, 0x02))\n    x := or(x, div(x, 0x04))\n    x := or(x, div(x, 0x10))\n    x := or(x, div(x, 0x100))\n    x := or(x, div(x, 0x10000))\n    x := or(x, div(x, 0x100000000))\n    x := or(x, div(x, 0x10000000000000000))\n    x := or(x, div(x, 0x100000000000000000000000000000000))\n    x := add(x, 1)\n    let m := mload(0x40)\n    mstore(m, 0xf8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd)\n    mstore(add(m, 0x20), 0xf5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe)\n    mstore(add(m, 0x40), 0xf6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a8272523616)\n    mstore(add(m, 0x60), 0xc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff)\n    mstore(add(m, 0x80), 0xf7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e)\n    mstore(add(m, 0xa0), 0xe39ed557db96902cd38ed14fad815115c786af479b7e83247363534337271707)\n    mstore(add(m, 0xc0), 0xc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d2362422606)\n    mstore(add(m, 0xe0), 0x753a6d1b65325d0c552a4d1345224105391a310b29122104190a110309020100)\n    mstore(0x40, add(m, 0x100))\n    let magic := 0x818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff\n    let shift := 0x100000000000000000000000000000000000000000000000000000000000000\n    let a := div(mul(x, magic), shift)\n    y := div(mload(add(m, sub(255, a))), shift)\n    y := add(y, mul(256, gt(arg, 0x8000000000000000000000000000000000000000000000000000000000000000)))\n}",
                  "src": "126:1667:69"
                }
              ]
            },
            "documentation": null,
            "id": 17224,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "logBase2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17217,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 17224,
                  "src": "69:9:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "69:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "68:11:69"
            },
            "payable": false,
            "returnParameters": {
              "id": 17221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17220,
                  "name": "y",
                  "nodeType": "VariableDeclaration",
                  "scope": 17224,
                  "src": "109:9:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17219,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "108:11:69"
            },
            "scope": 17225,
            "src": "51:1742:69",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 17226,
        "src": "27:1769:69"
      }
    ],
    "src": "0:1797:69"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/Logarithm.sol",
    "exportedSymbols": {
      "Logarithm": [
        17225
      ]
    },
    "id": 17226,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17215,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:69"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17225,
        "linearizedBaseContracts": [
          17225
        ],
        "name": "Logarithm",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 17223,
              "nodeType": "Block",
              "src": "119:1674:69",
              "statements": [
                {
                  "externalReferences": [
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "158:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "202:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "170:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "194:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "179:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "229:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "264:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "335:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "373:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "531:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "209:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "465:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "307:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "314:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "299:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "237:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "244:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "272:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "279:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "540:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "473:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "480:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "343:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "350:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "423:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "415:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "381:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "388:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "430:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "y": {
                        "declaration": 17220,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1631:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "y": {
                        "declaration": 17220,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1692:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "x": {
                        "declaration": 17217,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1603:1:69",
                        "valueSize": 1
                      }
                    },
                    {
                      "y": {
                        "declaration": 17220,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1683:1:69",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 17222,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    let arg := x\n    x := sub(x, 1)\n    x := or(x, div(x, 0x02))\n    x := or(x, div(x, 0x04))\n    x := or(x, div(x, 0x10))\n    x := or(x, div(x, 0x100))\n    x := or(x, div(x, 0x10000))\n    x := or(x, div(x, 0x100000000))\n    x := or(x, div(x, 0x10000000000000000))\n    x := or(x, div(x, 0x100000000000000000000000000000000))\n    x := add(x, 1)\n    let m := mload(0x40)\n    mstore(m, 0xf8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd)\n    mstore(add(m, 0x20), 0xf5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe)\n    mstore(add(m, 0x40), 0xf6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a8272523616)\n    mstore(add(m, 0x60), 0xc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff)\n    mstore(add(m, 0x80), 0xf7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e)\n    mstore(add(m, 0xa0), 0xe39ed557db96902cd38ed14fad815115c786af479b7e83247363534337271707)\n    mstore(add(m, 0xc0), 0xc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d2362422606)\n    mstore(add(m, 0xe0), 0x753a6d1b65325d0c552a4d1345224105391a310b29122104190a110309020100)\n    mstore(0x40, add(m, 0x100))\n    let magic := 0x818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff\n    let shift := 0x100000000000000000000000000000000000000000000000000000000000000\n    let a := div(mul(x, magic), shift)\n    y := div(mload(add(m, sub(255, a))), shift)\n    y := add(y, mul(256, gt(arg, 0x8000000000000000000000000000000000000000000000000000000000000000)))\n}",
                  "src": "126:1667:69"
                }
              ]
            },
            "documentation": null,
            "id": 17224,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "logBase2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17217,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 17224,
                  "src": "69:9:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "69:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "68:11:69"
            },
            "payable": false,
            "returnParameters": {
              "id": 17221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17220,
                  "name": "y",
                  "nodeType": "VariableDeclaration",
                  "scope": 17224,
                  "src": "109:9:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17219,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "109:7:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "108:11:69"
            },
            "scope": 17225,
            "src": "51:1742:69",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 17226,
        "src": "27:1769:69"
      }
    ],
    "src": "0:1797:69"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.732Z"
}