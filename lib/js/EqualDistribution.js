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
  "bytecode": "0x608060405234801561001057600080fd5b5060405161051e38038061051e83398101604052805101805160c81161003557600080fd5b805161004890600090602084019061004f565b50506100db565b8280548282559060005260206000209081019282156100a4579160200282015b828111156100a45782518254600160a060020a031916600160a060020a0390911617825560209092019160019091019061006f565b506100b09291506100b4565b5090565b6100d891905b808211156100b0578054600160a060020a03191681556001016100ba565b90565b610434806100ea6000396000f3006080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633ccfd60b81146100b35780636d9c6605146100dc5780639d19b2261461010f578063decebbce14610130578063e33b7de314610151578063efeb5e5814610166575b6040805133815234602082015281517f27a391d95d67e3626574fb5fbe3532bb7366e9254957b1f0e840953c248b2aa8929181900390910190a1005b3480156100bf57600080fd5b506100c861019a565b604080519115158252519081900360200190f35b3480156100e857600080fd5b506100fd600160a060020a03600435166102a0565b60408051918252519081900360200190f35b34801561011b57600080fd5b506100c8600160a060020a03600435166102b2565b34801561013c57600080fd5b506100c8600160a060020a0360043516610310565b34801561015d57600080fd5b506100fd61039d565b34801561017257600080fd5b5061017e6004356103a3565b60408051600160a060020a039092168252519081900360200190f35b33600090815260026020526040812054815460015483926101e69290916101da91906101ce9030319063ffffffff6103cb16565b9063ffffffff6103e116565b9063ffffffff6103f616565b33600090815260026020526040902054909150610209908263ffffffff6103cb16565b3360009081526002602052604090205560015461022c908263ffffffff6103cb16565b600155604051339082156108fc029083906000818181858888f1935050505015801561025c573d6000803e3d6000fd5b50604080513381526020810183905281517f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708929181900390910190a1600191505090565b60026020526000908152604090205481565b6000805b6000548110156103055782600160a060020a03166000828154811015156102d957fe5b600091825260209091200154600160a060020a031614156102fd576001915061030a565b6001016102b6565b600091505b50919050565b600081600160a060020a0316633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561036957600080fd5b505af115801561037d573d6000803e3d6000fd5b505050506040513d602081101561039357600080fd5b5060019392505050565b60015481565b60008054829081106103b157fe5b600091825260209091200154600160a060020a0316905081565b6000828201838110156103da57fe5b9392505050565b600081838115156103ee57fe5b049392505050565b60008282111561040257fe5b509003905600a165627a7a72305820e2710c77b42ec914bf561777ecad05c7d1cb3a21bb7638836accffe185c61ad70029",
  "deployedBytecode": "0x6080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633ccfd60b81146100b35780636d9c6605146100dc5780639d19b2261461010f578063decebbce14610130578063e33b7de314610151578063efeb5e5814610166575b6040805133815234602082015281517f27a391d95d67e3626574fb5fbe3532bb7366e9254957b1f0e840953c248b2aa8929181900390910190a1005b3480156100bf57600080fd5b506100c861019a565b604080519115158252519081900360200190f35b3480156100e857600080fd5b506100fd600160a060020a03600435166102a0565b60408051918252519081900360200190f35b34801561011b57600080fd5b506100c8600160a060020a03600435166102b2565b34801561013c57600080fd5b506100c8600160a060020a0360043516610310565b34801561015d57600080fd5b506100fd61039d565b34801561017257600080fd5b5061017e6004356103a3565b60408051600160a060020a039092168252519081900360200190f35b33600090815260026020526040812054815460015483926101e69290916101da91906101ce9030319063ffffffff6103cb16565b9063ffffffff6103e116565b9063ffffffff6103f616565b33600090815260026020526040902054909150610209908263ffffffff6103cb16565b3360009081526002602052604090205560015461022c908263ffffffff6103cb16565b600155604051339082156108fc029083906000818181858888f1935050505015801561025c573d6000803e3d6000fd5b50604080513381526020810183905281517f4ce7033d118120e254016dccf195288400b28fc8936425acd5f17ce2df3ab708929181900390910190a1600191505090565b60026020526000908152604090205481565b6000805b6000548110156103055782600160a060020a03166000828154811015156102d957fe5b600091825260209091200154600160a060020a031614156102fd576001915061030a565b6001016102b6565b600091505b50919050565b600081600160a060020a0316633ccfd60b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561036957600080fd5b505af115801561037d573d6000803e3d6000fd5b505050506040513d602081101561039357600080fd5b5060019392505050565b60015481565b60008054829081106103b157fe5b600091825260209091200154600160a060020a0316905081565b6000828201838110156103da57fe5b9392505050565b600081838115156103ee57fe5b049392505050565b60008282111561040257fe5b509003905600a165627a7a72305820e2710c77b42ec914bf561777ecad05c7d1cb3a21bb7638836accffe185c61ad70029",
  "sourceMap": "377:2770:89:-;;;950:129;8:9:-1;5:2;;;30:1;27;20:12;5:2;950:129:89;;;;;;;;;;;;;;;;;1010:21;;1034:3;-1:-1:-1;1002:36:89;;;;;;1044:30;;;;:13;;:30;;;;;:::i;:::-;;950:129;377:2770;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;377:2770:89;-1:-1:-1;;;;;377:2770:89;;;;;;;;;;;-1:-1:-1;377:2770:89;;;;;;;-1:-1:-1;377:2770:89;;;-1:-1:-1;377:2770:89;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;;377:2770:89;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "377:2770:89:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2108:33;;;2119:10;2108:33;;2131:9;2108:33;;;;;;;;;;;;;;;;;377:2770;1602:387;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1602:387:89;;;;;;;;;;;;;;;;;;;;;;605:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;605:47:89;-1:-1:-1;;;;;605:47:89;;;;;;;;;;;;;;;;;;;;;2515:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2515:221:89;-1:-1:-1;;;;;2515:221:89;;;;;1387:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1387:140:89;-1:-1:-1;;;;;1387:140:89;;;;;515:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;515:25:89;;;;436:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;436:30:89;;;;;;;;;-1:-1:-1;;;;;436:30:89;;;;;;;;;;;;;;1602:387;1760:10;1644:4;1745:26;;;:14;:26;;;;;;1718:20;;1698:13;;1644:4;;1670:102;;1745:26;;1671:68;;1718:20;1672:40;;1680:4;1672:21;;:40;:25;:40;:::i;:::-;1671:46;:68;:46;:68;:::i;:::-;1670:74;:102;:74;:102;:::i;:::-;1822:10;1807:26;;;;:14;:26;;;;;;1656:116;;-1:-1:-1;1807:38:89;;1656:116;1807:38;:30;:38;:::i;:::-;1793:10;1778:26;;;;:14;:26;;;;;:67;1867:13;;:25;;1885:6;1867:25;:17;:25;:::i;:::-;1851:13;:41;1898:27;;:10;;:27;;;;;1918:6;;1898:27;;;;1918:6;1898:10;:27;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1936:31:89;;;1948:10;1936:31;;;;;;;;;;;;;;;;;;;;;1980:4;1973:11;;1602:387;;:::o;605:47::-;;;;;;;;;;;;;:::o;2515:221::-;2587:4;;2599:115;2620:13;:20;2616:24;;2599:115;;;2678:12;-1:-1:-1;;;;;2658:32:89;:13;2672:1;2658:16;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2658:16:89;:32;2654:54;;;2701:4;2694:11;;;;2654:54;2642:3;;2599:115;;;2726:5;2719:12;;2515:221;;;;;:::o;1387:140::-;1453:4;1477:16;-1:-1:-1;;;;;1465:38:89;;:40;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1465:40:89;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1465:40:89;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1518:4:89;;1387:140;-1:-1:-1;;;1387:140:89:o;515:25::-;;;;:::o;436:30::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;436:30:89;;-1:-1:-1;436:30:89;:::o;1101:129:70:-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:70:o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:70:o;936:110::-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:70;;;936:110::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport '../../interfaces/PullPayment.sol';\n\n// @title A contract made to equally distribute payments amongs a list of beneficiaries\n// @author Kyle Dewhurst & Peter Phillips MyBit Foundation\n// @notice This contract allows someone to leave ETH for a beneficiary\n// @dev assumes each beneficiary receives equal amount\ncontract EqualDistribution {\n  using SafeMath for uint;\n\n  address[] public beneficiaries;             // List of chosen beneficiaries\n\n  uint public totalReleased;               // Total WEI so far released to beneficiaries\n\n  mapping (address => uint) public amountRedeemed;    // Amount of WEI this address has already withdrawn from contract\n\n\n  // @notice constructor. Sets the beneficiaries and where the income to be distributed is coming from\n  // @param (address) _beneficiary = The ETH address of who is to receive the income. Could be a distribution contract.\n  constructor(address[] _beneficiaries)\n  public{\n    require(_beneficiaries.length < 200);\n    beneficiaries = _beneficiaries;\n  }\n\n  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here\n  // @dev can call withdraw() on any address if there are no parameters required. Fallback function will be triggered\n  // @param (address) _contractAddress = The address to call withdraw() on.\n  function getFunds(address _contractAddress)\n  external\n  returns (bool) {\n    PullPayment(_contractAddress).withdraw();\n    return true;\n  }\n\n  // @notice beneficiaries can withdraw their share of the income here\n  function withdraw()\n  external\n  returns (bool) {\n    uint amount = ((address(this).balance.add(totalReleased)).div(beneficiaries.length)).sub(amountRedeemed[msg.sender]);\n    amountRedeemed[msg.sender] = amountRedeemed[msg.sender].add(amount);\n    totalReleased = totalReleased.add(amount);\n    msg.sender.transfer(amount);\n    emit LogWithdraw(msg.sender, amount);\n    return true;\n  }\n\n  // @notice fallback function. Accepts Ether and updates income balance\n  function ()\n  public\n  payable {\n    emit LogPayment(msg.sender, msg.value);\n  }\n\n\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // Constants\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  // @notice check if the address is one of the beneficiaries\n  function isBeneficiary(address _beneficiary)\n  public\n  view\n  returns (bool) {\n    for (uint i = 0; i < beneficiaries.length; i++){\n      if (beneficiaries[i] == _beneficiary) { return true; }\n    }\n    return false;\n  }\n\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  // Events\n  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  event LogPayment(address _sender, uint _amount);\n  event LogWithdraw(address _beneficiary, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
    "exportedSymbols": {
      "EqualDistribution": [
        25871
      ]
    },
    "id": 25872,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25703,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:89"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 25704,
        "nodeType": "ImportDirective",
        "scope": 25872,
        "sourceUnit": 17338,
        "src": "26:33:89",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 25705,
        "nodeType": "ImportDirective",
        "scope": 25872,
        "sourceUnit": 17178,
        "src": "60:42:89",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25871,
        "linearizedBaseContracts": [
          25871
        ],
        "name": "EqualDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25708,
            "libraryName": {
              "contractScope": null,
              "id": 25706,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "414:8:89",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "408:24:89",
            "typeName": {
              "id": 25707,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "427:4:89",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 25711,
            "name": "beneficiaries",
            "nodeType": "VariableDeclaration",
            "scope": 25871,
            "src": "436:30:89",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 25709,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "436:7:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 25710,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "436:9:89",
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
            "id": 25713,
            "name": "totalReleased",
            "nodeType": "VariableDeclaration",
            "scope": 25871,
            "src": "515:25:89",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25712,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "515:4:89",
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
            "id": 25717,
            "name": "amountRedeemed",
            "nodeType": "VariableDeclaration",
            "scope": 25871,
            "src": "605:47:89",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 25716,
              "keyType": {
                "id": 25714,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "614:7:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "605:25:89",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 25715,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "625:4:89",
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
              "id": 25734,
              "nodeType": "Block",
              "src": "996:83:89",
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
                        "id": 25727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 25724,
                            "name": "_beneficiaries",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25720,
                            "src": "1010:14:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 25725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1010:21:89",
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
                          "id": 25726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1034:3:89",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_200_by_1",
                            "typeString": "int_const 200"
                          },
                          "value": "200"
                        },
                        "src": "1010:27:89",
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
                      "id": 25723,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1002:7:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 25728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1002:36:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25729,
                  "nodeType": "ExpressionStatement",
                  "src": "1002:36:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25730,
                      "name": "beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25711,
                      "src": "1044:13:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25731,
                      "name": "_beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25720,
                      "src": "1060:14:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "1044:30:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 25733,
                  "nodeType": "ExpressionStatement",
                  "src": "1044:30:89"
                }
              ]
            },
            "documentation": null,
            "id": 25735,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25720,
                  "name": "_beneficiaries",
                  "nodeType": "VariableDeclaration",
                  "scope": 25735,
                  "src": "962:24:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25718,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "962:7:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25719,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "962:9:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:26:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25722,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "996:0:89"
            },
            "scope": 25871,
            "src": "950:129:89",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25750,
              "nodeType": "Block",
              "src": "1459:68:89",
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
                            "id": 25743,
                            "name": "_contractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25737,
                            "src": "1477:16:89",
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
                          "id": 25742,
                          "name": "PullPayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17177,
                          "src": "1465:11:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PullPayment_$17177_$",
                            "typeString": "type(contract PullPayment)"
                          }
                        },
                        "id": 25744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1465:29:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PullPayment_$17177",
                          "typeString": "contract PullPayment"
                        }
                      },
                      "id": 25745,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17176,
                      "src": "1465:38:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                        "typeString": "function () external returns (bool)"
                      }
                    },
                    "id": 25746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1465:40:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25747,
                  "nodeType": "ExpressionStatement",
                  "src": "1465:40:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 25748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1518:4:89",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 25741,
                  "id": 25749,
                  "nodeType": "Return",
                  "src": "1511:11:89"
                }
              ]
            },
            "documentation": null,
            "id": 25751,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25737,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 25751,
                  "src": "1405:24:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25736,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1404:26:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25751,
                  "src": "1453:4:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25739,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:6:89"
            },
            "scope": 25871,
            "src": "1387:140:89",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25814,
              "nodeType": "Block",
              "src": "1650:339:89",
              "statements": [
                {
                  "assignments": [
                    25757
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25757,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 25815,
                      "src": "1656:11:89",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25756,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1656:4:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 25777,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 25772,
                          "name": "amountRedeemed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25717,
                          "src": "1745:14:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 25775,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 25773,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "1760:3:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 25774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1760:10:89",
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
                        "src": "1745:26:89",
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
                                  "id": 25767,
                                  "name": "beneficiaries",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 25711,
                                  "src": "1718:13:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 25768,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1718:20:89",
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
                                        "id": 25763,
                                        "name": "totalReleased",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25713,
                                        "src": "1698:13:89",
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
                                              "id": 25759,
                                              "name": "this",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 28295,
                                              "src": "1680:4:89",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$25871",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$25871",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            ],
                                            "id": 25758,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1672:7:89",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_address_$",
                                              "typeString": "type(address)"
                                            },
                                            "typeName": "address"
                                          },
                                          "id": 25760,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1672:13:89",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "id": 25761,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1672:21:89",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 25762,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 17318,
                                      "src": "1672:25:89",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 25764,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1672:40:89",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 25765,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1671:42:89",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 25766,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 17274,
                              "src": "1671:46:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 25769,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1671:68:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 25770,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1670:70:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17294,
                      "src": "1670:74:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1670:102:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1656:116:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 25778,
                        "name": "amountRedeemed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25717,
                        "src": "1778:14:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 25781,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25779,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1793:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1793:10:89",
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
                      "src": "1778:26:89",
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
                          "id": 25787,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25757,
                          "src": "1838:6:89",
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
                            "id": 25782,
                            "name": "amountRedeemed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25717,
                            "src": "1807:14:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 25785,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 25783,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "1822:3:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 25784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1822:10:89",
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
                          "src": "1807:26:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25786,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1807:30:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 25788,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1807:38:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1778:67:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25790,
                  "nodeType": "ExpressionStatement",
                  "src": "1778:67:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25791,
                      "name": "totalReleased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25713,
                      "src": "1851:13:89",
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
                          "id": 25794,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25757,
                          "src": "1885:6:89",
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
                          "id": 25792,
                          "name": "totalReleased",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25713,
                          "src": "1867:13:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1867:17:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 25795,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1867:25:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1851:41:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25797,
                  "nodeType": "ExpressionStatement",
                  "src": "1851:41:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25803,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25757,
                        "src": "1918:6:89",
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
                          "id": 25798,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1898:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1898:10:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 25802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1898:19:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 25804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1898:27:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25805,
                  "nodeType": "ExpressionStatement",
                  "src": "1898:27:89"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25807,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1948:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25808,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1948:10:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 25809,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25757,
                        "src": "1960:6:89",
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
                      "id": 25806,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25870,
                      "src": "1936:11:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 25810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:31:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25811,
                  "nodeType": "EmitStatement",
                  "src": "1931:36:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 25812,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1980:4:89",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 25755,
                  "id": 25813,
                  "nodeType": "Return",
                  "src": "1973:11:89"
                }
              ]
            },
            "documentation": null,
            "id": 25815,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1619:2:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25754,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25815,
                  "src": "1644:4:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25753,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1644:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1643:6:89"
            },
            "scope": 25871,
            "src": "1602:387:89",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25825,
              "nodeType": "Block",
              "src": "2097:49:89",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25819,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2119:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25820,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2119:10:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25821,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2131:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2131:9:89",
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
                      "id": 25818,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25864,
                      "src": "2108:10:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 25823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:33:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25824,
                  "nodeType": "EmitStatement",
                  "src": "2103:38:89"
                }
              ]
            },
            "documentation": null,
            "id": 25826,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2075:2:89"
            },
            "payable": true,
            "returnParameters": {
              "id": 25817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2097:0:89"
            },
            "scope": 25871,
            "src": "2066:80:89",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25857,
              "nodeType": "Block",
              "src": "2593:143:89",
              "statements": [
                {
                  "body": {
                    "id": 25853,
                    "nodeType": "Block",
                    "src": "2646:68:89",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 25848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 25844,
                              "name": "beneficiaries",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25711,
                              "src": "2658:13:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 25846,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 25845,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25834,
                              "src": "2672:1:89",
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
                            "src": "2658:16:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 25847,
                            "name": "_beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25828,
                            "src": "2678:12:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2658:32:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 25852,
                        "nodeType": "IfStatement",
                        "src": "2654:54:89",
                        "trueBody": {
                          "id": 25851,
                          "nodeType": "Block",
                          "src": "2692:16:89",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 25849,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2701:4:89",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 25832,
                              "id": 25850,
                              "nodeType": "Return",
                              "src": "2694:11:89"
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
                    "id": 25840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 25837,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25834,
                      "src": "2616:1:89",
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
                        "id": 25838,
                        "name": "beneficiaries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25711,
                        "src": "2620:13:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 25839,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2620:20:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2616:24:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25854,
                  "initializationExpression": {
                    "assignments": [
                      25834
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25834,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 25858,
                        "src": "2604:6:89",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 25833,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2604:4:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 25836,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 25835,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2613:1:89",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2604:10:89"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 25842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2642:3:89",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 25841,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25834,
                        "src": "2642:1:89",
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
                    "id": 25843,
                    "nodeType": "ExpressionStatement",
                    "src": "2642:3:89"
                  },
                  "nodeType": "ForStatement",
                  "src": "2599:115:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 25855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2726:5:89",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 25832,
                  "id": 25856,
                  "nodeType": "Return",
                  "src": "2719:12:89"
                }
              ]
            },
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 25858,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25828,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 25858,
                  "src": "2538:20:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2538:7:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2537:22:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25858,
                  "src": "2587:4:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25830,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:6:89"
            },
            "scope": 25871,
            "src": "2515:221:89",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 25864,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25860,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 25864,
                  "src": "3056:15:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3056:7:89",
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
                  "id": 25862,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25864,
                  "src": "3073:12:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25861,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3073:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3055:31:89"
            },
            "src": "3039:48:89"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 25870,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25866,
                  "indexed": false,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 25870,
                  "src": "3108:20:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3108:7:89",
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
                  "id": 25868,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25870,
                  "src": "3130:12:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25867,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3107:36:89"
            },
            "src": "3090:54:89"
          }
        ],
        "scope": 25872,
        "src": "377:2770:89"
      }
    ],
    "src": "0:3148:89"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/EqualDistribution.sol",
    "exportedSymbols": {
      "EqualDistribution": [
        25871
      ]
    },
    "id": 25872,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 25703,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:89"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 25704,
        "nodeType": "ImportDirective",
        "scope": 25872,
        "sourceUnit": 17338,
        "src": "26:33:89",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 25705,
        "nodeType": "ImportDirective",
        "scope": 25872,
        "sourceUnit": 17178,
        "src": "60:42:89",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 25871,
        "linearizedBaseContracts": [
          25871
        ],
        "name": "EqualDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 25708,
            "libraryName": {
              "contractScope": null,
              "id": 25706,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 17337,
              "src": "414:8:89",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$17337",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "408:24:89",
            "typeName": {
              "id": 25707,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "427:4:89",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 25711,
            "name": "beneficiaries",
            "nodeType": "VariableDeclaration",
            "scope": 25871,
            "src": "436:30:89",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 25709,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "436:7:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 25710,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "436:9:89",
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
            "id": 25713,
            "name": "totalReleased",
            "nodeType": "VariableDeclaration",
            "scope": 25871,
            "src": "515:25:89",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 25712,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "515:4:89",
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
            "id": 25717,
            "name": "amountRedeemed",
            "nodeType": "VariableDeclaration",
            "scope": 25871,
            "src": "605:47:89",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 25716,
              "keyType": {
                "id": 25714,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "614:7:89",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "605:25:89",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 25715,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "625:4:89",
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
              "id": 25734,
              "nodeType": "Block",
              "src": "996:83:89",
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
                        "id": 25727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 25724,
                            "name": "_beneficiaries",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25720,
                            "src": "1010:14:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 25725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1010:21:89",
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
                          "id": 25726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1034:3:89",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_200_by_1",
                            "typeString": "int_const 200"
                          },
                          "value": "200"
                        },
                        "src": "1010:27:89",
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
                      "id": 25723,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1002:7:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 25728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1002:36:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25729,
                  "nodeType": "ExpressionStatement",
                  "src": "1002:36:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25732,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25730,
                      "name": "beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25711,
                      "src": "1044:13:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 25731,
                      "name": "_beneficiaries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25720,
                      "src": "1060:14:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "src": "1044:30:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "id": 25733,
                  "nodeType": "ExpressionStatement",
                  "src": "1044:30:89"
                }
              ]
            },
            "documentation": null,
            "id": 25735,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25720,
                  "name": "_beneficiaries",
                  "nodeType": "VariableDeclaration",
                  "scope": 25735,
                  "src": "962:24:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 25718,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "962:7:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 25719,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "962:9:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "961:26:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25722,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "996:0:89"
            },
            "scope": 25871,
            "src": "950:129:89",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25750,
              "nodeType": "Block",
              "src": "1459:68:89",
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
                            "id": 25743,
                            "name": "_contractAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25737,
                            "src": "1477:16:89",
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
                          "id": 25742,
                          "name": "PullPayment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17177,
                          "src": "1465:11:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PullPayment_$17177_$",
                            "typeString": "type(contract PullPayment)"
                          }
                        },
                        "id": 25744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1465:29:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PullPayment_$17177",
                          "typeString": "contract PullPayment"
                        }
                      },
                      "id": 25745,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17176,
                      "src": "1465:38:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                        "typeString": "function () external returns (bool)"
                      }
                    },
                    "id": 25746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1465:40:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25747,
                  "nodeType": "ExpressionStatement",
                  "src": "1465:40:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 25748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1518:4:89",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 25741,
                  "id": 25749,
                  "nodeType": "Return",
                  "src": "1511:11:89"
                }
              ]
            },
            "documentation": null,
            "id": 25751,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25737,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 25751,
                  "src": "1405:24:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25736,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1404:26:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25751,
                  "src": "1453:4:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25739,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1453:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:6:89"
            },
            "scope": 25871,
            "src": "1387:140:89",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25814,
              "nodeType": "Block",
              "src": "1650:339:89",
              "statements": [
                {
                  "assignments": [
                    25757
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 25757,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 25815,
                      "src": "1656:11:89",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 25756,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1656:4:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 25777,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 25772,
                          "name": "amountRedeemed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25717,
                          "src": "1745:14:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 25775,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 25773,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "1760:3:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 25774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1760:10:89",
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
                        "src": "1745:26:89",
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
                                  "id": 25767,
                                  "name": "beneficiaries",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 25711,
                                  "src": "1718:13:89",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                    "typeString": "address[] storage ref"
                                  }
                                },
                                "id": 25768,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "length",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1718:20:89",
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
                                        "id": 25763,
                                        "name": "totalReleased",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 25713,
                                        "src": "1698:13:89",
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
                                              "id": 25759,
                                              "name": "this",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 28295,
                                              "src": "1680:4:89",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$25871",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_contract$_EqualDistribution_$25871",
                                                "typeString": "contract EqualDistribution"
                                              }
                                            ],
                                            "id": 25758,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "1672:7:89",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_type$_t_address_$",
                                              "typeString": "type(address)"
                                            },
                                            "typeName": "address"
                                          },
                                          "id": 25760,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "typeConversion",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1672:13:89",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "id": 25761,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "balance",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": null,
                                        "src": "1672:21:89",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 25762,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 17318,
                                      "src": "1672:25:89",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 25764,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1672:40:89",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 25765,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1671:42:89",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 25766,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 17274,
                              "src": "1671:46:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 25769,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1671:68:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 25770,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1670:70:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17294,
                      "src": "1670:74:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 25776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1670:102:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1656:116:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 25778,
                        "name": "amountRedeemed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25717,
                        "src": "1778:14:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 25781,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25779,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1793:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1793:10:89",
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
                      "src": "1778:26:89",
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
                          "id": 25787,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25757,
                          "src": "1838:6:89",
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
                            "id": 25782,
                            "name": "amountRedeemed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25717,
                            "src": "1807:14:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 25785,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 25783,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28038,
                              "src": "1822:3:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 25784,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1822:10:89",
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
                          "src": "1807:26:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25786,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1807:30:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 25788,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1807:38:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1778:67:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25790,
                  "nodeType": "ExpressionStatement",
                  "src": "1778:67:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 25796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 25791,
                      "name": "totalReleased",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25713,
                      "src": "1851:13:89",
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
                          "id": 25794,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25757,
                          "src": "1885:6:89",
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
                          "id": 25792,
                          "name": "totalReleased",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 25713,
                          "src": "1867:13:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 25793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17318,
                        "src": "1867:17:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 25795,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1867:25:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1851:41:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 25797,
                  "nodeType": "ExpressionStatement",
                  "src": "1851:41:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 25803,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25757,
                        "src": "1918:6:89",
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
                          "id": 25798,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1898:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25801,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1898:10:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 25802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1898:19:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 25804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1898:27:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25805,
                  "nodeType": "ExpressionStatement",
                  "src": "1898:27:89"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25807,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1948:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25808,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1948:10:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 25809,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25757,
                        "src": "1960:6:89",
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
                      "id": 25806,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25870,
                      "src": "1936:11:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 25810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:31:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25811,
                  "nodeType": "EmitStatement",
                  "src": "1931:36:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 25812,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1980:4:89",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 25755,
                  "id": 25813,
                  "nodeType": "Return",
                  "src": "1973:11:89"
                }
              ]
            },
            "documentation": null,
            "id": 25815,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25752,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1619:2:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25754,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25815,
                  "src": "1644:4:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25753,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1644:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1643:6:89"
            },
            "scope": 25871,
            "src": "1602:387:89",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 25825,
              "nodeType": "Block",
              "src": "2097:49:89",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25819,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2119:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25820,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2119:10:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 25821,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2131:3:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 25822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2131:9:89",
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
                      "id": 25818,
                      "name": "LogPayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25864,
                      "src": "2108:10:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 25823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:33:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 25824,
                  "nodeType": "EmitStatement",
                  "src": "2103:38:89"
                }
              ]
            },
            "documentation": null,
            "id": 25826,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2075:2:89"
            },
            "payable": true,
            "returnParameters": {
              "id": 25817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2097:0:89"
            },
            "scope": 25871,
            "src": "2066:80:89",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 25857,
              "nodeType": "Block",
              "src": "2593:143:89",
              "statements": [
                {
                  "body": {
                    "id": 25853,
                    "nodeType": "Block",
                    "src": "2646:68:89",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 25848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 25844,
                              "name": "beneficiaries",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25711,
                              "src": "2658:13:89",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 25846,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 25845,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 25834,
                              "src": "2672:1:89",
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
                            "src": "2658:16:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 25847,
                            "name": "_beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 25828,
                            "src": "2678:12:89",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "2658:32:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 25852,
                        "nodeType": "IfStatement",
                        "src": "2654:54:89",
                        "trueBody": {
                          "id": 25851,
                          "nodeType": "Block",
                          "src": "2692:16:89",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 25849,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2701:4:89",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "functionReturnParameters": 25832,
                              "id": 25850,
                              "nodeType": "Return",
                              "src": "2694:11:89"
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
                    "id": 25840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 25837,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25834,
                      "src": "2616:1:89",
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
                        "id": 25838,
                        "name": "beneficiaries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25711,
                        "src": "2620:13:89",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 25839,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2620:20:89",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2616:24:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 25854,
                  "initializationExpression": {
                    "assignments": [
                      25834
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 25834,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 25858,
                        "src": "2604:6:89",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 25833,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2604:4:89",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 25836,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 25835,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2613:1:89",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2604:10:89"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 25842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2642:3:89",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 25841,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25834,
                        "src": "2642:1:89",
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
                    "id": 25843,
                    "nodeType": "ExpressionStatement",
                    "src": "2642:3:89"
                  },
                  "nodeType": "ForStatement",
                  "src": "2599:115:89"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 25855,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2726:5:89",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 25832,
                  "id": 25856,
                  "nodeType": "Return",
                  "src": "2719:12:89"
                }
              ]
            },
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 25858,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25828,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 25858,
                  "src": "2538:20:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2538:7:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2537:22:89"
            },
            "payable": false,
            "returnParameters": {
              "id": 25832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 25858,
                  "src": "2587:4:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 25830,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:6:89"
            },
            "scope": 25871,
            "src": "2515:221:89",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 25864,
            "name": "LogPayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25860,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 25864,
                  "src": "3056:15:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3056:7:89",
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
                  "id": 25862,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25864,
                  "src": "3073:12:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25861,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3073:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3055:31:89"
            },
            "src": "3039:48:89"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 25870,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 25869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25866,
                  "indexed": false,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 25870,
                  "src": "3108:20:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25865,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3108:7:89",
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
                  "id": 25868,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 25870,
                  "src": "3130:12:89",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 25867,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:89",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3107:36:89"
            },
            "src": "3090:54:89"
          }
        ],
        "scope": 25872,
        "src": "377:2770:89"
      }
    ],
    "src": "0:3148:89"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:53.268Z"
}