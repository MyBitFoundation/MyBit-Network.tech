"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var EqualDistribution = exports.EqualDistribution = 
{
  "contractName": "EqualDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "amountRedeemed",
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
      "inputs": [],
      "name": "totalReleased",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "beneficiaries",
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
          "name": "_beneficiaries",
          "type": "address[]"
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogPayment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogWithdraw",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contractAddress",
          "type": "address"
        }
      ],
      "name": "getFunds",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "isBeneficiary",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060405161051e38038061051e83398101604052805101805160c81161003557600080fd5b805161004890600090602084019061004f565b50506100db565b8280548282559060005260206000209081019282156100a4579160200282015b828111156100a45782518254600160a060020a031916600160a060020a0390911617825560209092019160019091019061006f565b506100b09291506100b4565b5090565b6100d891905b808211156100b0578054600160a060020a03191681556001016100ba565b90565b610434806100ea6000396000f3006080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633ccfd60b81146100b35780636d9c6605146100dc5780639d19b2261461010f578063decebbce14610130578063e33b7de314610151578063efeb5e5814610166575b6040805133815234602082015281517f27a391d95d67e3626574fb5fbe3532bb7366e9254957b1f0e840953c248b2aa8929181900390910190a1005b3480156100bf57600080fd5b506100c861019a565b604080519115158252519081900360200190f35b3480156100e857600080fd5b506100fd600160a060020a03600435166102a0565b60408051918252519081900360200190f35b34801561011b57600080fd5b506100c8600160a060020a03600435166102b2565b34801561013c57600080fd5b506100c8600160a060020a0360043516610310565b34801561015d57600080fd5b506100fd61039d565b34801561017257600080fd5b5061017e6004356103a3565b60408051600160a060020a039092168252519081900360200190f35b33600090815260026020526040812054815460015483926101e69290916101da91906101ce9030319063ffffffff6103cb16565b9063ffffffff6103e116565b9063ffffffff6103f616565b33600090815260026020526040902054909150610209908263ffffffff6103cb16565b3360009081526002602052604090205560015461022c908263ffffffff6103cb16565b600155604051339082156108fc029083906000818181858888f1935050505015801561025c573d6000803e3d6000fd5b50604080513381526020810183905281517f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708929181900390910190a1600191505090565b60026020526000908152604090205481565b6000805b6000548110156103055782600160a060020a03166000828154811015156102d957fe5b600091825260209091200154600160a060020a031614156102fd576001915061030a565b6001016102b6565b600091505b50919050565b600081600160a060020a0316633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561036957600080fd5b505af115801561037d573d6000803e3d6000fd5b505050506040513d602081101561039357600080fd5b5060019392505050565b60015481565b60008054829081106103b157fe5b600091825260209091200154600160a060020a0316905081565b6000828201838110156103da57fe5b9392505050565b600081838115156103ee57fe5b049392505050565b60008282111561040257fe5b509003905600a165627a7a723058204e3544cc0bde80f828f0f6c4e7159c1d28b0ec8c16be7d434c8cb39effe24eae0029",
  "deployedBytecode": "0x6080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633ccfd60b81146100b35780636d9c6605146100dc5780639d19b2261461010f578063decebbce14610130578063e33b7de314610151578063efeb5e5814610166575b6040805133815234602082015281517f27a391d95d67e3626574fb5fbe3532bb7366e9254957b1f0e840953c248b2aa8929181900390910190a1005b3480156100bf57600080fd5b506100c861019a565b604080519115158252519081900360200190f35b3480156100e857600080fd5b506100fd600160a060020a03600435166102a0565b60408051918252519081900360200190f35b34801561011b57600080fd5b506100c8600160a060020a03600435166102b2565b34801561013c57600080fd5b506100c8600160a060020a0360043516610310565b34801561015d57600080fd5b506100fd61039d565b34801561017257600080fd5b5061017e6004356103a3565b60408051600160a060020a039092168252519081900360200190f35b33600090815260026020526040812054815460015483926101e69290916101da91906101ce9030319063ffffffff6103cb16565b9063ffffffff6103e116565b9063ffffffff6103f616565b33600090815260026020526040902054909150610209908263ffffffff6103cb16565b3360009081526002602052604090205560015461022c908263ffffffff6103cb16565b600155604051339082156108fc029083906000818181858888f1935050505015801561025c573d6000803e3d6000fd5b50604080513381526020810183905281517f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708929181900390910190a1600191505090565b60026020526000908152604090205481565b6000805b6000548110156103055782600160a060020a03166000828154811015156102d957fe5b600091825260209091200154600160a060020a031614156102fd576001915061030a565b6001016102b6565b600091505b50919050565b600081600160a060020a0316633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561036957600080fd5b505af115801561037d573d6000803e3d6000fd5b505050506040513d602081101561039357600080fd5b5060019392505050565b60015481565b60008054829081106103b157fe5b600091825260209091200154600160a060020a0316905081565b6000828201838110156103da57fe5b9392505050565b600081838115156103ee57fe5b049392505050565b60008282111561040257fe5b509003905600a165627a7a723058204e3544cc0bde80f828f0f6c4e7159c1d28b0ec8c16be7d434c8cb39effe24eae0029",
  "sourceMap": "377:2770:62:-;;;950:129;8:9:-1;5:2;;;30:1;27;20:12;5:2;950:129:62;;;;;;;;;;;;;;;;;1010:21;;1034:3;-1:-1:-1;1002:36:62;;;;;;1044:30;;;;:13;;:30;;;;;:::i;:::-;;950:129;377:2770;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;377:2770:62;-1:-1:-1;;;;;377:2770:62;;;;;;;;;;;-1:-1:-1;377:2770:62;;;;;;;-1:-1:-1;377:2770:62;;;-1:-1:-1;377:2770:62;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;;377:2770:62;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "377:2770:62:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2108:33;;;2119:10;2108:33;;2131:9;2108:33;;;;;;;;;;;;;;;;;377:2770;1602:387;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1602:387:62;;;;;;;;;;;;;;;;;;;;;;605:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;605:47:62;-1:-1:-1;;;;;605:47:62;;;;;;;;;;;;;;;;;;;;;2515:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2515:221:62;-1:-1:-1;;;;;2515:221:62;;;;;1387:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1387:140:62;-1:-1:-1;;;;;1387:140:62;;;;;515:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;515:25:62;;;;436:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;436:30:62;;;;;;;;;-1:-1:-1;;;;;436:30:62;;;;;;;;;;;;;;1602:387;1760:10;1644:4;1745:26;;;:14;:26;;;;;;1718:20;;1698:13;;1644:4;;1670:102;;1745:26;;1671:68;;1718:20;1672:40;;1680:4;1672:21;;:40;:25;:40;:::i;:::-;1671:46;:68;:46;:68;:::i;:::-;1670:74;:102;:74;:102;:::i;:::-;1822:10;1807:26;;;;:14;:26;;;;;;1656:116;;-1:-1:-1;1807:38:62;;1656:116;1807:38;:30;:38;:::i;:::-;1793:10;1778:26;;;;:14;:26;;;;;:67;1867:13;;:25;;1885:6;1867:25;:17;:25;:::i;:::-;1851:13;:41;1898:27;;:10;;:27;;;;;1918:6;;1898:27;;;;1918:6;1898:10;:27;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1936:31:62;;;1948:10;1936:31;;;;;;;;;;;;;;;;;;;;;1980:4;1973:11;;1602:387;;:::o;605:47::-;;;;;;;;;;;;;:::o;2515:221::-;2587:4;;2599:115;2620:13;:20;2616:24;;2599:115;;;2678:12;-1:-1:-1;;;;;2658:32:62;:13;2672:1;2658:16;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2658:16:62;:32;2654:54;;;2701:4;2694:11;;;;2654:54;2642:3;;2599:115;;;2726:5;2719:12;;2515:221;;;;;:::o;1387:140::-;1453:4;1477:16;-1:-1:-1;;;;;1465:38:62;;:40;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1465:40:62;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1465:40:62;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1518:4:62;;1387:140;-1:-1:-1;;;1387:140:62:o;515:25::-;;;;:::o;436:30::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;436:30:62;;-1:-1:-1;436:30:62;:::o;1101:129:42:-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:42:o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:42:o;936:110::-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:42;;;936:110::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport '../../interfaces/PullPayment.sol';\n\n// @title A contract made to equally distribute payments amongs a list of beneficiaries\n// @author Kyle Dewhurst & Peter Phillips MyBit Foundation\n// @notice This contract allows someone to leave ETH for a beneficiary\n// @dev assumes each beneficiary receives equal amount\ncontract EqualDistribution {\n  using SafeMath for uint;\n\n  address[] public beneficiaries;             // List of chosen beneficiaries\n\n  uint public totalReleased;               // Total WEI so far released to beneficiaries\n\n  mapping (address => uint) public amountRedeemed;    // Amount of WEI this address has already withdrawn from contract\n\n\n  // @notice constructor. Sets the beneficiaries and where the income to be distributed is coming from\n  // @param (address) _beneficiary = The ETH address of who is to receive the income. Could be a distribution contract.\n  constructor(address[] _beneficiaries)\n  public{\n    require(_beneficiaries.length < 200);\n    beneficiaries = _beneficiaries;\n  }\n\n  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here\n  // @dev can call withdraw() on any address if there are no parameters required. Fallback function will be triggered\n  // @param (address) _contractAddress = The address to call withdraw() on.\n  function getFunds(address _contractAddress)\n  external\n  returns (bool) {\n    PullPayment(_contractAddress).withdraw();\n    return true;\n  }\n\n  // @notice beneficiaries can withdraw their share of the income here\n  function withdraw()\n  external\n  returns (bool) {\n    uint amount = ((address(this).balance.add(totalReleased)).div(beneficiaries.length)).sub(amountRedeemed[msg.sender]);\n    amountRedeemed[msg.sender] = amountRedeemed[msg.sender].add(amount);\n    totalReleased = totalReleased.add(amount);\n    msg.sender.transfer(amount);\n    emit LogWithdraw(msg.sender, amount);\n    return true;\n  }\n\n  // @notice fallback function. Accepts Ether and updates income balance\n  function ()\n  public\n  payable {\n    emit LogPayment(msg.sender, msg.value);\n  }\n\n\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // Constants\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  // @notice check if the address is one of the beneficiaries\n  function isBeneficiary(address _beneficiary)\n  public\n  view\n  returns (bool) {\n    for (uint i = 0; i < beneficiaries.length; i++){\n      if (beneficiaries[i] == _beneficiary) { return true; }\n    }\n    return false;\n  }\n\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // Events\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  event LogPayment(address _sender, uint _amount);\n  event LogWithdraw(address _beneficiary, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
    "exportedSymbols": {
      "EqualDistribution": [
        17248
      ]
    },
    "id": 17249,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17080,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:62"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 17081,
        "nodeType": "ImportDirective",
        "scope": 17249,
        "sourceUnit": 8864,
        "src": "26:33:62",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 17082,
        "nodeType": "ImportDirective",
        "scope": 17249,
        "sourceUnit": 8704,
        "src": "60:42:62",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17248,
        "linearizedBaseContracts": [
          17248
        ],
        "name": "EqualDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 17085,
            "libraryName": {
              "contractScope": null,
              "id": 17083,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "414:8:62",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "408:24:62",
            "typeName": {
              "id": 17084,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "427:4:62",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 17088,
            "name": "beneficiaries",
            "nodeType": "VariableDeclaration",
            "scope": 17248,
            "src": "436:30:62",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 17086,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "436:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 17087,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "436:9:62",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17090,
            "name": "totalReleased",
            "nodeType": "VariableDeclaration",
            "scope": 17248,
            "src": "515:25:62",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17089,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "515:4:62",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17094,
            "name": "amountRedeemed",
            "nodeType": "VariableDeclaration",
            "scope": 17248,
            "src": "605:47:62",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17093,
              "keyType": {
                "id": 17091,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "614:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "605:25:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17092,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "625:4:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17111,
              "nodeType": "Block",
              "src": "996:83:62",
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
                        "id": 17104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17101,
                            "name": "_beneficiaries",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17097,
                            "src": "1010:14:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 17102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1010:21:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "323030",
                          "id": 17103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1034:3:62",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_200_by_1",
                            "typeString": "int_const 200"
                          },
                          "value": "200"
                        },
                        "src": "1010:27:62",
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
                      "id": 17100,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1002:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 17105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1002:36:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17106,
                  "nodeType": "ExpressionStatement",
                  "src": "1002:36:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17107,
                      "name": "beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17088,
                      "src": "1044:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 17108,
                      "name": "_beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17097,
                      "src": "1060:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "1044:30:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 17110,
                  "nodeType": "ExpressionStatement",
                  "src": "1044:30:62"
                }
              ]
            },
            "documentation": null,
            "id": 17112,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17097,
                  "name": "_beneficiaries",
                  "nodeType": "VariableDeclaration",
                  "scope": 17112,
                  "src": "962:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17095,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "962:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 17096,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "962:9:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:26:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17099,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "996:0:62"
            },
            "scope": 17248,
            "src": "950:129:62",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17127,
              "nodeType": "Block",
              "src": "1459:68:62",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 17120,
                            "name": "_contractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17114,
                            "src": "1477:16:62",
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
                          "id": 17119,
                          "name": "PullPayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8703,
                          "src": "1465:11:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PullPayment_$8703_$",
                            "typeString": "type(contract PullPayment)"
                          }
                        },
                        "id": 17121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1465:29:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PullPayment_$8703",
                          "typeString": "contract PullPayment"
                        }
                      },
                      "id": 17122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8702,
                      "src": "1465:38:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                        "typeString": "function () external returns (bool)"
                      }
                    },
                    "id": 17123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1465:40:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17124,
                  "nodeType": "ExpressionStatement",
                  "src": "1465:40:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1518:4:62",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17118,
                  "id": 17126,
                  "nodeType": "Return",
                  "src": "1511:11:62"
                }
              ]
            },
            "documentation": null,
            "id": 17128,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17114,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 17128,
                  "src": "1405:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17113,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1404:26:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17117,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17128,
                  "src": "1453:4:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17116,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:6:62"
            },
            "scope": 17248,
            "src": "1387:140:62",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 17191,
              "nodeType": "Block",
              "src": "1650:339:62",
              "statements": [
                {
                  "assignments": [
                    17134
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17134,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 17192,
                      "src": "1656:11:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17133,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1656:4:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 17154,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 17149,
                          "name": "amountRedeemed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17094,
                          "src": "1745:14:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 17152,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17150,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "1760:3:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 17151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1760:10:62",
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
                        "src": "1745:26:62",
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
                        "components": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 17144,
                                  "name": "beneficiaries",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17088,
                                  "src": "1718:13:62",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 17145,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1718:20:62",
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
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 17140,
                                        "name": "totalReleased",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 17090,
                                        "src": "1698:13:62",
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
                                        "expression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 17136,
                                              "name": "this",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 21176,
                                              "src": "1680:4:62",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$17248",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$17248",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            ],
                                            "id": 17135,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1672:7:62",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_address_$",
                                              "typeString": "type(address)"
                                            },
                                            "typeName": "address"
                                          },
                                          "id": 17137,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1672:13:62",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "id": 17138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1672:21:62",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 17139,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 8844,
                                      "src": "1672:25:62",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 17141,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1672:40:62",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 17142,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1671:42:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17143,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8800,
                              "src": "1671:46:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1671:68:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 17147,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1670:70:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "1670:74:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1670:102:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1656:116:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17155,
                        "name": "amountRedeemed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17094,
                        "src": "1778:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17158,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17156,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1793:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1793:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1778:26:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 17164,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17134,
                          "src": "1838:6:62",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 17159,
                            "name": "amountRedeemed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17094,
                            "src": "1807:14:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17162,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17160,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1822:3:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1822:10:62",
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
                          "src": "1807:26:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17163,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1807:30:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1807:38:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1778:67:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17167,
                  "nodeType": "ExpressionStatement",
                  "src": "1778:67:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17168,
                      "name": "totalReleased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17090,
                      "src": "1851:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 17171,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17134,
                          "src": "1885:6:62",
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
                          "id": 17169,
                          "name": "totalReleased",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17090,
                          "src": "1867:13:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1867:17:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1867:25:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1851:41:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17174,
                  "nodeType": "ExpressionStatement",
                  "src": "1851:41:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17180,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17134,
                        "src": "1918:6:62",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 17175,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1898:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1898:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 17179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1898:19:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 17181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1898:27:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17182,
                  "nodeType": "ExpressionStatement",
                  "src": "1898:27:62"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17184,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1948:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1948:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17186,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17134,
                        "src": "1960:6:62",
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
                      "id": 17183,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17247,
                      "src": "1936:11:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:31:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17188,
                  "nodeType": "EmitStatement",
                  "src": "1931:36:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17189,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1980:4:62",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17132,
                  "id": 17190,
                  "nodeType": "Return",
                  "src": "1973:11:62"
                }
              ]
            },
            "documentation": null,
            "id": 17192,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1619:2:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17131,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17192,
                  "src": "1644:4:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17130,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1644:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1643:6:62"
            },
            "scope": 17248,
            "src": "1602:387:62",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 17202,
              "nodeType": "Block",
              "src": "2097:49:62",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17196,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2119:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2119:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17198,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2131:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2131:9:62",
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
                      "id": 17195,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17241,
                      "src": "2108:10:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:33:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17201,
                  "nodeType": "EmitStatement",
                  "src": "2103:38:62"
                }
              ]
            },
            "documentation": null,
            "id": 17203,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2075:2:62"
            },
            "payable": true,
            "returnParameters": {
              "id": 17194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2097:0:62"
            },
            "scope": 17248,
            "src": "2066:80:62",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17234,
              "nodeType": "Block",
              "src": "2593:143:62",
              "statements": [
                {
                  "body": {
                    "id": 17230,
                    "nodeType": "Block",
                    "src": "2646:68:62",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 17225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 17221,
                              "name": "beneficiaries",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17088,
                              "src": "2658:13:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 17223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 17222,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17211,
                              "src": "2672:1:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2658:16:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 17224,
                            "name": "_beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17205,
                            "src": "2678:12:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2658:32:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 17229,
                        "nodeType": "IfStatement",
                        "src": "2654:54:62",
                        "trueBody": {
                          "id": 17228,
                          "nodeType": "Block",
                          "src": "2692:16:62",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 17226,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2701:4:62",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 17209,
                              "id": 17227,
                              "nodeType": "Return",
                              "src": "2694:11:62"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 17214,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17211,
                      "src": "2616:1:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 17215,
                        "name": "beneficiaries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17088,
                        "src": "2620:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 17216,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2620:20:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2616:24:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17231,
                  "initializationExpression": {
                    "assignments": [
                      17211
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 17211,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 17235,
                        "src": "2604:6:62",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 17210,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2604:4:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 17213,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 17212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2613:1:62",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2604:10:62"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 17219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2642:3:62",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 17218,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17211,
                        "src": "2642:1:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 17220,
                    "nodeType": "ExpressionStatement",
                    "src": "2642:3:62"
                  },
                  "nodeType": "ForStatement",
                  "src": "2599:115:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 17232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2726:5:62",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 17209,
                  "id": 17233,
                  "nodeType": "Return",
                  "src": "2719:12:62"
                }
              ]
            },
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 17235,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17205,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 17235,
                  "src": "2538:20:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17204,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2538:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2537:22:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17208,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17235,
                  "src": "2587:4:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17207,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:6:62"
            },
            "scope": 17248,
            "src": "2515:221:62",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 17241,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17237,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 17241,
                  "src": "3056:15:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17236,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3056:7:62",
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
                  "id": 17239,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17241,
                  "src": "3073:12:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17238,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3073:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3055:31:62"
            },
            "src": "3039:48:62"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17247,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17243,
                  "indexed": false,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 17247,
                  "src": "3108:20:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17242,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3108:7:62",
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
                  "id": 17245,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17247,
                  "src": "3130:12:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17244,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3107:36:62"
            },
            "src": "3090:54:62"
          }
        ],
        "scope": 17249,
        "src": "377:2770:62"
      }
    ],
    "src": "0:3148:62"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
    "exportedSymbols": {
      "EqualDistribution": [
        17248
      ]
    },
    "id": 17249,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17080,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:62"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 17081,
        "nodeType": "ImportDirective",
        "scope": 17249,
        "sourceUnit": 8864,
        "src": "26:33:62",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 17082,
        "nodeType": "ImportDirective",
        "scope": 17249,
        "sourceUnit": 8704,
        "src": "60:42:62",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17248,
        "linearizedBaseContracts": [
          17248
        ],
        "name": "EqualDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 17085,
            "libraryName": {
              "contractScope": null,
              "id": 17083,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "414:8:62",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "408:24:62",
            "typeName": {
              "id": 17084,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "427:4:62",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 17088,
            "name": "beneficiaries",
            "nodeType": "VariableDeclaration",
            "scope": 17248,
            "src": "436:30:62",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 17086,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "436:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 17087,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "436:9:62",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17090,
            "name": "totalReleased",
            "nodeType": "VariableDeclaration",
            "scope": 17248,
            "src": "515:25:62",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17089,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "515:4:62",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17094,
            "name": "amountRedeemed",
            "nodeType": "VariableDeclaration",
            "scope": 17248,
            "src": "605:47:62",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17093,
              "keyType": {
                "id": 17091,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "614:7:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "605:25:62",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17092,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "625:4:62",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17111,
              "nodeType": "Block",
              "src": "996:83:62",
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
                        "id": 17104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17101,
                            "name": "_beneficiaries",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17097,
                            "src": "1010:14:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 17102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1010:21:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "323030",
                          "id": 17103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1034:3:62",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_200_by_1",
                            "typeString": "int_const 200"
                          },
                          "value": "200"
                        },
                        "src": "1010:27:62",
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
                      "id": 17100,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1002:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 17105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1002:36:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17106,
                  "nodeType": "ExpressionStatement",
                  "src": "1002:36:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17107,
                      "name": "beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17088,
                      "src": "1044:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 17108,
                      "name": "_beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17097,
                      "src": "1060:14:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "1044:30:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 17110,
                  "nodeType": "ExpressionStatement",
                  "src": "1044:30:62"
                }
              ]
            },
            "documentation": null,
            "id": 17112,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17097,
                  "name": "_beneficiaries",
                  "nodeType": "VariableDeclaration",
                  "scope": 17112,
                  "src": "962:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17095,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "962:7:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 17096,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "962:9:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:26:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17099,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "996:0:62"
            },
            "scope": 17248,
            "src": "950:129:62",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17127,
              "nodeType": "Block",
              "src": "1459:68:62",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 17120,
                            "name": "_contractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17114,
                            "src": "1477:16:62",
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
                          "id": 17119,
                          "name": "PullPayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8703,
                          "src": "1465:11:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PullPayment_$8703_$",
                            "typeString": "type(contract PullPayment)"
                          }
                        },
                        "id": 17121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1465:29:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PullPayment_$8703",
                          "typeString": "contract PullPayment"
                        }
                      },
                      "id": 17122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8702,
                      "src": "1465:38:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                        "typeString": "function () external returns (bool)"
                      }
                    },
                    "id": 17123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1465:40:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17124,
                  "nodeType": "ExpressionStatement",
                  "src": "1465:40:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1518:4:62",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17118,
                  "id": 17126,
                  "nodeType": "Return",
                  "src": "1511:11:62"
                }
              ]
            },
            "documentation": null,
            "id": 17128,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17114,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 17128,
                  "src": "1405:24:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17113,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1404:26:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17117,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17128,
                  "src": "1453:4:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17116,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:6:62"
            },
            "scope": 17248,
            "src": "1387:140:62",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 17191,
              "nodeType": "Block",
              "src": "1650:339:62",
              "statements": [
                {
                  "assignments": [
                    17134
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17134,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 17192,
                      "src": "1656:11:62",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17133,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1656:4:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 17154,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 17149,
                          "name": "amountRedeemed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17094,
                          "src": "1745:14:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 17152,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17150,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "1760:3:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 17151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1760:10:62",
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
                        "src": "1745:26:62",
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
                        "components": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 17144,
                                  "name": "beneficiaries",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17088,
                                  "src": "1718:13:62",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 17145,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1718:20:62",
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
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 17140,
                                        "name": "totalReleased",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 17090,
                                        "src": "1698:13:62",
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
                                        "expression": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "id": 17136,
                                              "name": "this",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 21176,
                                              "src": "1680:4:62",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$17248",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$17248",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            ],
                                            "id": 17135,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1672:7:62",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_address_$",
                                              "typeString": "type(address)"
                                            },
                                            "typeName": "address"
                                          },
                                          "id": 17137,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1672:13:62",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "id": 17138,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1672:21:62",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 17139,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 8844,
                                      "src": "1672:25:62",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 17141,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1672:40:62",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 17142,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1671:42:62",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17143,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8800,
                              "src": "1671:46:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1671:68:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 17147,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1670:70:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17148,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "1670:74:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1670:102:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1656:116:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17155,
                        "name": "amountRedeemed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17094,
                        "src": "1778:14:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17158,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17156,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1793:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1793:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1778:26:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 17164,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17134,
                          "src": "1838:6:62",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 17159,
                            "name": "amountRedeemed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17094,
                            "src": "1807:14:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17162,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17160,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1822:3:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1822:10:62",
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
                          "src": "1807:26:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17163,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1807:30:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1807:38:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1778:67:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17167,
                  "nodeType": "ExpressionStatement",
                  "src": "1778:67:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17168,
                      "name": "totalReleased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17090,
                      "src": "1851:13:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 17171,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17134,
                          "src": "1885:6:62",
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
                          "id": 17169,
                          "name": "totalReleased",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17090,
                          "src": "1867:13:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1867:17:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1867:25:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1851:41:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17174,
                  "nodeType": "ExpressionStatement",
                  "src": "1851:41:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17180,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17134,
                        "src": "1918:6:62",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 17175,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1898:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1898:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 17179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1898:19:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 17181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1898:27:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17182,
                  "nodeType": "ExpressionStatement",
                  "src": "1898:27:62"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17184,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1948:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1948:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17186,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17134,
                        "src": "1960:6:62",
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
                      "id": 17183,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17247,
                      "src": "1936:11:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:31:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17188,
                  "nodeType": "EmitStatement",
                  "src": "1931:36:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17189,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1980:4:62",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17132,
                  "id": 17190,
                  "nodeType": "Return",
                  "src": "1973:11:62"
                }
              ]
            },
            "documentation": null,
            "id": 17192,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1619:2:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17131,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17192,
                  "src": "1644:4:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17130,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1644:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1643:6:62"
            },
            "scope": 17248,
            "src": "1602:387:62",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 17202,
              "nodeType": "Block",
              "src": "2097:49:62",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17196,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2119:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17197,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2119:10:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17198,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2131:3:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2131:9:62",
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
                      "id": 17195,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17241,
                      "src": "2108:10:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17200,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:33:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17201,
                  "nodeType": "EmitStatement",
                  "src": "2103:38:62"
                }
              ]
            },
            "documentation": null,
            "id": 17203,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2075:2:62"
            },
            "payable": true,
            "returnParameters": {
              "id": 17194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2097:0:62"
            },
            "scope": 17248,
            "src": "2066:80:62",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17234,
              "nodeType": "Block",
              "src": "2593:143:62",
              "statements": [
                {
                  "body": {
                    "id": 17230,
                    "nodeType": "Block",
                    "src": "2646:68:62",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 17225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 17221,
                              "name": "beneficiaries",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17088,
                              "src": "2658:13:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 17223,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 17222,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17211,
                              "src": "2672:1:62",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2658:16:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 17224,
                            "name": "_beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17205,
                            "src": "2678:12:62",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2658:32:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 17229,
                        "nodeType": "IfStatement",
                        "src": "2654:54:62",
                        "trueBody": {
                          "id": 17228,
                          "nodeType": "Block",
                          "src": "2692:16:62",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 17226,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2701:4:62",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 17209,
                              "id": 17227,
                              "nodeType": "Return",
                              "src": "2694:11:62"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 17217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 17214,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17211,
                      "src": "2616:1:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 17215,
                        "name": "beneficiaries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17088,
                        "src": "2620:13:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 17216,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2620:20:62",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2616:24:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 17231,
                  "initializationExpression": {
                    "assignments": [
                      17211
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 17211,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 17235,
                        "src": "2604:6:62",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 17210,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2604:4:62",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 17213,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 17212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2613:1:62",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2604:10:62"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 17219,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2642:3:62",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 17218,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17211,
                        "src": "2642:1:62",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 17220,
                    "nodeType": "ExpressionStatement",
                    "src": "2642:3:62"
                  },
                  "nodeType": "ForStatement",
                  "src": "2599:115:62"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 17232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2726:5:62",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 17209,
                  "id": 17233,
                  "nodeType": "Return",
                  "src": "2719:12:62"
                }
              ]
            },
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 17235,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17205,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 17235,
                  "src": "2538:20:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17204,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2538:7:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2537:22:62"
            },
            "payable": false,
            "returnParameters": {
              "id": 17209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17208,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17235,
                  "src": "2587:4:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17207,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:6:62"
            },
            "scope": 17248,
            "src": "2515:221:62",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 17241,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17237,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 17241,
                  "src": "3056:15:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17236,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3056:7:62",
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
                  "id": 17239,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17241,
                  "src": "3073:12:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17238,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3073:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3055:31:62"
            },
            "src": "3039:48:62"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17247,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17246,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17243,
                  "indexed": false,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 17247,
                  "src": "3108:20:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17242,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3108:7:62",
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
                  "id": 17245,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17247,
                  "src": "3130:12:62",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17244,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:62",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3107:36:62"
            },
            "src": "3090:54:62"
          }
        ],
        "scope": 17249,
        "src": "377:2770:62"
      }
    ],
    "src": "0:3148:62"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.820Z"
}