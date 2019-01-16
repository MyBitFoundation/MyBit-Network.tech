"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenConverter = exports.TokenConverter = 
{
  "contractName": "TokenConverter",
  "abi": [
    {
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_bancorNetwork",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minimumReturn",
          "type": "uint256"
        }
      ],
      "name": "convertTokenToMyBit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "_newPath",
          "type": "address[]"
        }
      ],
      "name": "addPath",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061083483398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560038054821633179055600180549390921692169190911790556107c3806100716000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631f0a3da68114610050578063b1b20d271461006c575b600080fd5b61006a600160a060020a03600435166024356044356100e3565b005b34801561007857600080fd5b506040805160206004602480358281013584810280870186019097528086526100cf968435600160a060020a0316963696604495919490910192918291850190849080828437509497506106a49650505050505050565b604080519115158252519081900360200190f35b60008034151561023257600154604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152600160a060020a039283166024820152604481018790529051879450918416916323b872dd916064808201926020929091908290030181600087803b15801561016557600080fd5b505af1158015610179573d6000803e3d6000fd5b505050506040513d602081101561018f57600080fd5b5050600154604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810187905290519184169163095ea7b3916044808201926020929091908290030181600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b505050506040513d602081101561022a57600080fd5b506102429050565b34841461023e57600080fd5b8491505b600154600160a060020a038381166000908152600260205260409081902090517ff3898a970000000000000000000000000000000000000000000000000000000081526024810188905260448101879052606060048201908152825460648301819052939094169363f3898a97938992899291829160840190869080156102f257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116102d4575b5050945050505050602060405180830381600087803b15801561031457600080fd5b505af1158015610328573d6000803e3d6000fd5b505050506040513d602081101561033e57600080fd5b50519050828110156103b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e206661696c65642e00000000000000000000000000604482015290519081900360640190fd5b60008054604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518493600160a060020a03909316926370a0823192602480820193602093909283900390910190829087803b15801561041b57600080fd5b505af115801561042f573d6000803e3d6000fd5b505050506040513d602081101561044557600080fd5b5051146104d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5472616e73616374696f6e206661696c6564207769746820646966666572656e60448201527f742072657475726e207468616e20657870656374656400000000000000000000606482015290519081900360840190fd5b60008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018590529051600160a060020a039092169263a9059cbb926044808401936020939083900390910190829087803b15801561054757600080fd5b505af115801561055b573d6000803e3d6000fd5b505050506040513d602081101561057157600080fd5b5050604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a0384169163a9059cbb91339184916370a08231916024808201926020929091908290030181600087803b1580156105df57600080fd5b505af11580156105f3573d6000803e3d6000fd5b505050506040513d602081101561060957600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561067157600080fd5b505af1158015610685573d6000803e3d6000fd5b505050506040513d602081101561069b57600080fd5b50505050505050565b600354600090600160a060020a031633146106be57600080fd5b600160a060020a038316600090815260026020908152604090912083516106e7928501906106f1565b5060019392505050565b828054828255906000526020600020908101928215610753579160200282015b82811115610753578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610711565b5061075f929150610763565b5090565b61079491905b8082111561075f57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610769565b905600a165627a7a723058207671d7ca626549ecd44cb71634549bc68b8a9f04cb347c1b7d6cdd63fdb79c830029",
  "deployedBytecode": "0x60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631f0a3da68114610050578063b1b20d271461006c575b600080fd5b61006a600160a060020a03600435166024356044356100e3565b005b34801561007857600080fd5b506040805160206004602480358281013584810280870186019097528086526100cf968435600160a060020a0316963696604495919490910192918291850190849080828437509497506106a49650505050505050565b604080519115158252519081900360200190f35b60008034151561023257600154604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152600160a060020a039283166024820152604481018790529051879450918416916323b872dd916064808201926020929091908290030181600087803b15801561016557600080fd5b505af1158015610179573d6000803e3d6000fd5b505050506040513d602081101561018f57600080fd5b5050600154604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810187905290519184169163095ea7b3916044808201926020929091908290030181600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b505050506040513d602081101561022a57600080fd5b506102429050565b34841461023e57600080fd5b8491505b600154600160a060020a038381166000908152600260205260409081902090517ff3898a970000000000000000000000000000000000000000000000000000000081526024810188905260448101879052606060048201908152825460648301819052939094169363f3898a97938992899291829160840190869080156102f257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116102d4575b5050945050505050602060405180830381600087803b15801561031457600080fd5b505af1158015610328573d6000803e3d6000fd5b505050506040513d602081101561033e57600080fd5b50519050828110156103b157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e206661696c65642e00000000000000000000000000604482015290519081900360640190fd5b60008054604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518493600160a060020a03909316926370a0823192602480820193602093909283900390910190829087803b15801561041b57600080fd5b505af115801561042f573d6000803e3d6000fd5b505050506040513d602081101561044557600080fd5b5051146104d957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5472616e73616374696f6e206661696c6564207769746820646966666572656e60448201527f742072657475726e207468616e20657870656374656400000000000000000000606482015290519081900360840190fd5b60008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018590529051600160a060020a039092169263a9059cbb926044808401936020939083900390910190829087803b15801561054757600080fd5b505af115801561055b573d6000803e3d6000fd5b505050506040513d602081101561057157600080fd5b5050604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a0384169163a9059cbb91339184916370a08231916024808201926020929091908290030181600087803b1580156105df57600080fd5b505af11580156105f3573d6000803e3d6000fd5b505050506040513d602081101561060957600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561067157600080fd5b505af1158015610685573d6000803e3d6000fd5b505050506040513d602081101561069b57600080fd5b50505050505050565b600354600090600160a060020a031633146106be57600080fd5b600160a060020a038316600090815260026020908152604090912083516106e7928501906106f1565b5060019392505050565b828054828255906000526020600020908101928215610753579160200282015b82811115610753578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610711565b5061075f929150610763565b5090565b61079491905b8082111561075f57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610769565b905600a165627a7a723058207671d7ca626549ecd44cb71634549bc68b8a9f04cb347c1b7d6cdd63fdb79c830029",
  "sourceMap": "372:2064:28:-;;;647:210;8:9:-1;5:2;;;30:1;27;20:12;5:2;647:210:28;;;;;;;;;;;;;;;;;;;767:10;:19;;-1:-1:-1;;;;;767:19:28;;;-1:-1:-1;;;;;;767:19:28;;;;;;;794:5;:18;;;;802:10;794:18;;;767:19;820:30;;;;;;;;;;;;;;372:2064;;;;;;",
  "deployedSourceMap": "372:2064:28:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;1140:966;;-1:-1:-1;;;;;1140:966:28;;;;;;;;;;;2112:155;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2112:155:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2112:155:28;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2112:155:28;;-1:-1:-1;2112:155:28;;-1:-1:-1;;;;;;;2112:155:28;;;;;;;;;;;;;;;;;;;1140:966;1253:17;;1282:9;:14;1278:365;;;1467:13;;1436:54;;;;;;1455:10;1436:54;;;;-1:-1:-1;;;;;1467:13:28;;;1436:54;;;;;;;;;;;;1417:6;;-1:-1:-1;1436:18:28;;;;;;:54;;;;;;;;;;;;;;;1467:13;1436:18;:54;;;5:2:-1;;;;30:1;27;20:12;5:2;1436:54:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1436:54:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;1516:13:28;;1502:37;;;;;;-1:-1:-1;;;;;1516:13:28;;;1502:37;;;;;;;;;;;;:13;;;;;;:37;;;;;1436:54;;1502:37;;;;;;;;1516:13;1502;:37;;;5:2:-1;;;;30:1;27;20:12;5:2;1502:37:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1502:37:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1278:365:28;;-1:-1:-1;1278:365:28;;1585:9;1574:20;;1566:29;;;;;;1627:6;1607:27;;1278:365;1687:13;;-1:-1:-1;;;;;1721:20:28;;;1687:13;1721:20;;;:4;:20;;;;;;;1672:122;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1687:13;;;;;1672:37;;1753:7;;1772:14;;1672:122;;;;;;1721:20;;1672:122;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1672:122:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1672:122:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1672:122:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1672:122:28;;-1:-1:-1;1811:32:28;;;;1802:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1884:10;;;:26;;;;;;1905:4;1884:26;;;;;;1914:14;;-1:-1:-1;;;;;1884:10:28;;;;:20;;:26;;;;;;;;;;;;;;;;;;:10;:26;;;5:2:-1;;;;30:1;27;20:12;5:2;1884:26:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1884:26:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1884:26:28;:44;1875:112;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1995:10;;;:47;;;;;;2015:10;1995:47;;;;;;;;;;;;-1:-1:-1;;;;;1995:10:28;;;;:19;;:47;;;;;;;;;;;;;;;;;:10;:47;;;5:2:-1;;;;30:1;27;20:12;5:2;1995:47:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1995:47:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;2077:21:28;;;;;;2093:4;2077:21;;;;;;-1:-1:-1;;;;;2050:14:28;;;;;2065:10;;2050:14;;2077:15;;:21;;;;;1995:47;;2077:21;;;;;;;;-1:-1:-1;2050:14:28;2077:21;;;5:2:-1;;;;30:1;27;20:12;5:2;2077:21:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2077:21:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2077:21:28;2050:49;;;;;;;;;;-1:-1:-1;;;;;2050:49:28;;;;;;;;;;;;;;;;;;;;2077:21;;2050:49;;;;;;;-1:-1:-1;2050:49:28;;;;5:2:-1;;;;30:1;27;20:12;5:2;2050:49:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2050:49:28;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;;1140:966:28:o;2112:155::-;2397:5;;2206:4;;-1:-1:-1;;;;;2397:5:28;2406:10;2397:19;2389:28;;;;;;-1:-1:-1;;;;;2219:11:28;;;;;;:4;:11;;;;;;;;:22;;;;;;;;:::i;:::-;-1:-1:-1;2256:4:28;;2112:155;-1:-1:-1;;;2112:155:28:o;372:2064::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;372:2064:28;-1:-1:-1;;;;;372:2064:28;;;;;;;;;;;-1:-1:-1;372:2064:28;;;;;;;-1:-1:-1;372:2064:28;;;-1:-1:-1;372:2064:28;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;372:2064:28;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../bancor/IBancorNetwork.sol\";\nimport \"../bancor/token/interfaces/IERC20Token.sol\";\nimport \"../bancor/token/interfaces/ISmartToken.sol\";\nimport \"../bancor/token/interfaces/IEtherToken.sol\";\nimport \"../interfaces/DBInterface.sol\";\n\n\n///@title A contract for converting any token into MYB (using Bancor's API)\n///@author Vlad Silviu Farcas\ncontract TokenConverter {\n    //DBInterface private database;\n    IERC20Token private myBitToken;\n    IBancorNetwork private bancorNetwork;\n    mapping(address => IERC20Token[]) private path;\n\n    address owner;\n\n    ///@notice initialise addresses needed for conversion\n    constructor(IERC20Token _token, IBancorNetwork _bancorNetwork) public{\n      //database = DBInterface(_database);\n      myBitToken = _token;\n      owner = msg.sender;\n      bancorNetwork = _bancorNetwork;\n    }\n\n    ///@notice convert some tokens\n    ///@param _token the contract of the token that is about to be converted\n    ///@param _amount the amount of _token that is about to be converted\n    ///@param _minimumReturn the minimum return of MyBit token that is about to be received\n    function convertTokenToMyBit(address _token, uint _amount, uint _minimumReturn)\n    external\n    payable {\n      IERC20Token token;\n      if (msg.value == 0){\n          // require(bancorNetwork.etherTokens(_token) == true, \"Token not supported\");\n          token = ISmartToken(_token);\n          token.transferFrom(msg.sender, bancorNetwork, _amount);\n          token.approve(bancorNetwork, _amount);\n      } else {\n          require(_amount == msg.value);\n          token = IEtherToken(_token);\n      }\n      uint convertedValue = IBancorNetwork(bancorNetwork).convert(\n          path[address(token)],\n          _amount,\n          _minimumReturn\n      );\n      require (convertedValue >= _minimumReturn, \"Transaction failed.\");\n      require (myBitToken.balanceOf(this) == convertedValue, \"Transaction failed with different return than expected\");\n      myBitToken.transfer(msg.sender, convertedValue);\n      token.transfer(msg.sender, token.balanceOf(this));\n    }\n\n    function addPath(address token, IERC20Token[] _newPath)\n    public\n    onlyOwner\n    returns (bool){\n      path[token] = _newPath;\n      return true;\n    }\n\n    modifier onlyOwner {\n      //require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n      require(owner == msg.sender);\n      _;\n    }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/TokenConverter.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/TokenConverter.sol",
    "exportedSymbols": {
      "TokenConverter": [
        8131
      ]
    },
    "id": 8132,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7955,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
        "file": "../bancor/IBancorNetwork.sol",
        "id": 7956,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1019,
        "src": "26:38:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../bancor/token/interfaces/IERC20Token.sol",
        "id": 7957,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1099,
        "src": "65:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../bancor/token/interfaces/ISmartToken.sol",
        "id": 7958,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1151,
        "src": "118:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
        "file": "../bancor/token/interfaces/IEtherToken.sol",
        "id": 7959,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1123,
        "src": "171:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 7960,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 8403,
        "src": "224:39:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title A contract for converting any token into MYB (using Bancor's API)\n@author Vlad Silviu Farcas",
        "fullyImplemented": true,
        "id": 8131,
        "linearizedBaseContracts": [
          8131
        ],
        "name": "TokenConverter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7962,
            "name": "myBitToken",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "438:30:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20Token_$1098",
              "typeString": "contract IERC20Token"
            },
            "typeName": {
              "contractScope": null,
              "id": 7961,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1098,
              "src": "438:11:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                "typeString": "contract IERC20Token"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7964,
            "name": "bancorNetwork",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "474:36:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
              "typeString": "contract IBancorNetwork"
            },
            "typeName": {
              "contractScope": null,
              "id": 7963,
              "name": "IBancorNetwork",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1018,
              "src": "474:14:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                "typeString": "contract IBancorNetwork"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7969,
            "name": "path",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "516:46:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
              "typeString": "mapping(address => contract IERC20Token[])"
            },
            "typeName": {
              "id": 7968,
              "keyType": {
                "id": 7965,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "524:7:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "516:33:28",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
                "typeString": "mapping(address => contract IERC20Token[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 7966,
                  "name": "IERC20Token",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1098,
                  "src": "535:11:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$1098",
                    "typeString": "contract IERC20Token"
                  }
                },
                "id": 7967,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "535:13:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                  "typeString": "contract IERC20Token[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7971,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "569:13:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 7970,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "569:7:28",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7991,
              "nodeType": "Block",
              "src": "716:141:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7978,
                      "name": "myBitToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7962,
                      "src": "767:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7979,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7973,
                      "src": "780:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "src": "767:19:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$1098",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "id": 7981,
                  "nodeType": "ExpressionStatement",
                  "src": "767:19:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7982,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7971,
                      "src": "794:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 7983,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20967,
                        "src": "802:3:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 7984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "802:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "794:18:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7986,
                  "nodeType": "ExpressionStatement",
                  "src": "794:18:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7987,
                      "name": "bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7964,
                      "src": "820:13:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7988,
                      "name": "_bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7975,
                      "src": "836:14:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "src": "820:30:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "id": 7990,
                  "nodeType": "ExpressionStatement",
                  "src": "820:30:28"
                }
              ]
            },
            "documentation": "@notice initialise addresses needed for conversion",
            "id": 7992,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7973,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7992,
                  "src": "659:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$1098",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7972,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1098,
                    "src": "659:11:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$1098",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7975,
                  "name": "_bancorNetwork",
                  "nodeType": "VariableDeclaration",
                  "scope": 7992,
                  "src": "679:29:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                    "typeString": "contract IBancorNetwork"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7974,
                    "name": "IBancorNetwork",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1018,
                    "src": "679:14:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "658:51:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 7977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "716:0:28"
            },
            "scope": 8131,
            "src": "647:210:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8097,
              "nodeType": "Block",
              "src": "1245:861:28",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8002,
                      "name": "token",
                      "nodeType": "VariableDeclaration",
                      "scope": 8098,
                      "src": "1253:17:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 8001,
                        "name": "IERC20Token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1098,
                        "src": "1253:11:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$1098",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8003,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1253:17:28"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 8004,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20967,
                        "src": "1282:3:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 8005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1282:9:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 8006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1295:1:28",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1282:14:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 8044,
                    "nodeType": "Block",
                    "src": "1554:89:28",
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
                              "id": 8035,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 8032,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7996,
                                "src": "1574:7:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 8033,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20967,
                                  "src": "1585:3:28",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 8034,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1585:9:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1574:20:28",
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
                            "id": 8031,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20970,
                            "src": "1566:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 8036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1566:29:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 8037,
                        "nodeType": "ExpressionStatement",
                        "src": "1566:29:28"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 8042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 8038,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8002,
                            "src": "1607:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$1098",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 8040,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7994,
                                "src": "1627:6:28",
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
                              "id": 8039,
                              "name": "IEtherToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1122,
                              "src": "1615:11:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IEtherToken_$1122_$",
                                "typeString": "type(contract IEtherToken)"
                              }
                            },
                            "id": 8041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1615:19:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IEtherToken_$1122",
                              "typeString": "contract IEtherToken"
                            }
                          },
                          "src": "1607:27:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$1098",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 8043,
                        "nodeType": "ExpressionStatement",
                        "src": "1607:27:28"
                      }
                    ]
                  },
                  "id": 8045,
                  "nodeType": "IfStatement",
                  "src": "1278:365:28",
                  "trueBody": {
                    "id": 8030,
                    "nodeType": "Block",
                    "src": "1297:251:28",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 8012,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 8008,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8002,
                            "src": "1397:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$1098",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 8010,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7994,
                                "src": "1417:6:28",
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
                              "id": 8009,
                              "name": "ISmartToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1150,
                              "src": "1405:11:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ISmartToken_$1150_$",
                                "typeString": "type(contract ISmartToken)"
                              }
                            },
                            "id": 8011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1405:19:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$1150",
                              "typeString": "contract ISmartToken"
                            }
                          },
                          "src": "1397:27:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$1098",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 8013,
                        "nodeType": "ExpressionStatement",
                        "src": "1397:27:28"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 8017,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20967,
                                "src": "1455:3:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 8018,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1455:10:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 8019,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7964,
                              "src": "1467:13:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 8020,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7996,
                              "src": "1482:7:28",
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
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8014,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8002,
                              "src": "1436:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 8016,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1088,
                            "src": "1436:18:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 8021,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1436:54:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8022,
                        "nodeType": "ExpressionStatement",
                        "src": "1436:54:28"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8026,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7964,
                              "src": "1516:13:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 8027,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7996,
                              "src": "1531:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8023,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8002,
                              "src": "1502:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 8025,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "approve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1097,
                            "src": "1502:13:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 8028,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1502:37:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8029,
                        "nodeType": "ExpressionStatement",
                        "src": "1502:37:28"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    8047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8047,
                      "name": "convertedValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 8098,
                      "src": "1650:19:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8046,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1650:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8060,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 8052,
                          "name": "path",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7969,
                          "src": "1721:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
                            "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                          }
                        },
                        "id": 8056,
                        "indexExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8054,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8002,
                              "src": "1734:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            ],
                            "id": 8053,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1726:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 8055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1726:14:28",
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
                        "src": "1721:20:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8057,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7996,
                        "src": "1753:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8058,
                        "name": "_minimumReturn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7998,
                        "src": "1772:14:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 8049,
                            "name": "bancorNetwork",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7964,
                            "src": "1687:13:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                              "typeString": "contract IBancorNetwork"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                              "typeString": "contract IBancorNetwork"
                            }
                          ],
                          "id": 8048,
                          "name": "IBancorNetwork",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1018,
                          "src": "1672:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IBancorNetwork_$1018_$",
                            "typeString": "type(contract IBancorNetwork)"
                          }
                        },
                        "id": 8050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1672:29:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                          "typeString": "contract IBancorNetwork"
                        }
                      },
                      "id": 8051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "convert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 957,
                      "src": "1672:37:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IERC20Token[] memory,uint256,uint256) payable external returns (uint256)"
                      }
                    },
                    "id": 8059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1672:122:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1650:144:28"
                },
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
                        "id": 8064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8062,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8047,
                          "src": "1811:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 8063,
                          "name": "_minimumReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7998,
                          "src": "1829:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1811:32:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c65642e",
                        "id": 8065,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1845:21:28",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        },
                        "value": "Transaction failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        }
                      ],
                      "id": 8061,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "1802:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 8066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1802:65:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8067,
                  "nodeType": "ExpressionStatement",
                  "src": "1802:65:28"
                },
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
                        "id": 8074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8071,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21090,
                              "src": "1905:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TokenConverter_$8131",
                                "typeString": "contract TokenConverter"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TokenConverter_$8131",
                                "typeString": "contract TokenConverter"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8069,
                              "name": "myBitToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7962,
                              "src": "1884:10:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 8070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1054,
                            "src": "1884:20:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) pure external returns (uint256)"
                            }
                          },
                          "id": 8072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1884:26:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 8073,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8047,
                          "src": "1914:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1884:44:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c6564207769746820646966666572656e742072657475726e207468616e206578706563746564",
                        "id": 8075,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1930:56:28",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        },
                        "value": "Transaction failed with different return than expected"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        }
                      ],
                      "id": 8068,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "1875:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 8076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1875:112:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8077,
                  "nodeType": "ExpressionStatement",
                  "src": "1875:112:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8081,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2015:3:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2015:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8083,
                        "name": "convertedValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8047,
                        "src": "2027:14:28",
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
                        "id": 8078,
                        "name": "myBitToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7962,
                        "src": "1995:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$1098",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 8080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1077,
                      "src": "1995:19:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 8084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1995:47:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8085,
                  "nodeType": "ExpressionStatement",
                  "src": "1995:47:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8089,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2065:3:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2065:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 8093,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21090,
                            "src": "2093:4:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenConverter_$8131",
                              "typeString": "contract TokenConverter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TokenConverter_$8131",
                              "typeString": "contract TokenConverter"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 8091,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8002,
                            "src": "2077:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$1098",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "id": 8092,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1054,
                          "src": "2077:15:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) pure external returns (uint256)"
                          }
                        },
                        "id": 8094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2077:21:28",
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
                        "id": 8086,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8002,
                        "src": "2050:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$1098",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 8088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1077,
                      "src": "2050:14:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 8095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2050:49:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8096,
                  "nodeType": "ExpressionStatement",
                  "src": "2050:49:28"
                }
              ]
            },
            "documentation": "@notice convert some tokens\n@param _token the contract of the token that is about to be converted\n@param _amount the amount of _token that is about to be converted\n@param _minimumReturn the minimum return of MyBit token that is about to be received",
            "id": 8098,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertTokenToMyBit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7994,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8098,
                  "src": "1169:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7993,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1169:7:28",
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
                  "id": 7996,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8098,
                  "src": "1185:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7995,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:4:28",
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
                  "id": 7998,
                  "name": "_minimumReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 8098,
                  "src": "1199:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7997,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1199:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1168:51:28"
            },
            "payable": true,
            "returnParameters": {
              "id": 8000,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1245:0:28"
            },
            "scope": 8131,
            "src": "1140:966:28",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 8118,
              "nodeType": "Block",
              "src": "2211:56:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 8110,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7969,
                        "src": "2219:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
                          "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                        }
                      },
                      "id": 8112,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 8111,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8100,
                        "src": "2224:5:28",
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
                      "src": "2219:11:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                        "typeString": "contract IERC20Token[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 8113,
                      "name": "_newPath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8103,
                      "src": "2233:8:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                        "typeString": "contract IERC20Token[] memory"
                      }
                    },
                    "src": "2219:22:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                      "typeString": "contract IERC20Token[] storage ref"
                    }
                  },
                  "id": 8115,
                  "nodeType": "ExpressionStatement",
                  "src": "2219:22:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 8116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2256:4:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 8109,
                  "id": 8117,
                  "nodeType": "Return",
                  "src": "2249:11:28"
                }
              ]
            },
            "documentation": null,
            "id": 8119,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8106,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8105,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 8130,
                  "src": "2183:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2183:9:28"
              }
            ],
            "name": "addPath",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8100,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8119,
                  "src": "2129:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2129:7:28",
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
                  "id": 8103,
                  "name": "_newPath",
                  "nodeType": "VariableDeclaration",
                  "scope": 8119,
                  "src": "2144:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 8101,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "2144:11:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 8102,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2144:13:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2128:39:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8108,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8119,
                  "src": "2206:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8107,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2206:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2205:6:28"
            },
            "scope": 8131,
            "src": "2112:155:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8129,
              "nodeType": "Block",
              "src": "2292:141:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 8125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8122,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7971,
                          "src": "2397:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 8123,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "2406:3:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 8124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2406:10:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2397:19:28",
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
                      "id": 8121,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2389:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2389:28:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8127,
                  "nodeType": "ExpressionStatement",
                  "src": "2389:28:28"
                },
                {
                  "id": 8128,
                  "nodeType": "PlaceholderStatement",
                  "src": "2425:1:28"
                }
              ]
            },
            "documentation": null,
            "id": 8130,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 8120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2292:0:28"
            },
            "src": "2273:160:28",
            "visibility": "internal"
          }
        ],
        "scope": 8132,
        "src": "372:2064:28"
      }
    ],
    "src": "0:2437:28"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/TokenConverter.sol",
    "exportedSymbols": {
      "TokenConverter": [
        8131
      ]
    },
    "id": 8132,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7955,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
        "file": "../bancor/IBancorNetwork.sol",
        "id": 7956,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1019,
        "src": "26:38:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "../bancor/token/interfaces/IERC20Token.sol",
        "id": 7957,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1099,
        "src": "65:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "../bancor/token/interfaces/ISmartToken.sol",
        "id": 7958,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1151,
        "src": "118:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
        "file": "../bancor/token/interfaces/IEtherToken.sol",
        "id": 7959,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 1123,
        "src": "171:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DBInterface.sol",
        "file": "../interfaces/DBInterface.sol",
        "id": 7960,
        "nodeType": "ImportDirective",
        "scope": 8132,
        "sourceUnit": 8403,
        "src": "224:39:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title A contract for converting any token into MYB (using Bancor's API)\n@author Vlad Silviu Farcas",
        "fullyImplemented": true,
        "id": 8131,
        "linearizedBaseContracts": [
          8131
        ],
        "name": "TokenConverter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7962,
            "name": "myBitToken",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "438:30:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20Token_$1098",
              "typeString": "contract IERC20Token"
            },
            "typeName": {
              "contractScope": null,
              "id": 7961,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1098,
              "src": "438:11:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                "typeString": "contract IERC20Token"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7964,
            "name": "bancorNetwork",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "474:36:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
              "typeString": "contract IBancorNetwork"
            },
            "typeName": {
              "contractScope": null,
              "id": 7963,
              "name": "IBancorNetwork",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1018,
              "src": "474:14:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                "typeString": "contract IBancorNetwork"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7969,
            "name": "path",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "516:46:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
              "typeString": "mapping(address => contract IERC20Token[])"
            },
            "typeName": {
              "id": 7968,
              "keyType": {
                "id": 7965,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "524:7:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "516:33:28",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
                "typeString": "mapping(address => contract IERC20Token[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 7966,
                  "name": "IERC20Token",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1098,
                  "src": "535:11:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$1098",
                    "typeString": "contract IERC20Token"
                  }
                },
                "id": 7967,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "535:13:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                  "typeString": "contract IERC20Token[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7971,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 8131,
            "src": "569:13:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 7970,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "569:7:28",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7991,
              "nodeType": "Block",
              "src": "716:141:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7980,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7978,
                      "name": "myBitToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7962,
                      "src": "767:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7979,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7973,
                      "src": "780:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "src": "767:19:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$1098",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "id": 7981,
                  "nodeType": "ExpressionStatement",
                  "src": "767:19:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7982,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7971,
                      "src": "794:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 7983,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20967,
                        "src": "802:3:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 7984,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "802:10:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "794:18:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 7986,
                  "nodeType": "ExpressionStatement",
                  "src": "794:18:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7987,
                      "name": "bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7964,
                      "src": "820:13:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7988,
                      "name": "_bancorNetwork",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7975,
                      "src": "836:14:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                        "typeString": "contract IBancorNetwork"
                      }
                    },
                    "src": "820:30:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "id": 7990,
                  "nodeType": "ExpressionStatement",
                  "src": "820:30:28"
                }
              ]
            },
            "documentation": "@notice initialise addresses needed for conversion",
            "id": 7992,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7973,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7992,
                  "src": "659:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$1098",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7972,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1098,
                    "src": "659:11:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$1098",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7975,
                  "name": "_bancorNetwork",
                  "nodeType": "VariableDeclaration",
                  "scope": 7992,
                  "src": "679:29:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                    "typeString": "contract IBancorNetwork"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 7974,
                    "name": "IBancorNetwork",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 1018,
                    "src": "679:14:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                      "typeString": "contract IBancorNetwork"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "658:51:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 7977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "716:0:28"
            },
            "scope": 8131,
            "src": "647:210:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8097,
              "nodeType": "Block",
              "src": "1245:861:28",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8002,
                      "name": "token",
                      "nodeType": "VariableDeclaration",
                      "scope": 8098,
                      "src": "1253:17:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 8001,
                        "name": "IERC20Token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1098,
                        "src": "1253:11:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$1098",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8003,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1253:17:28"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 8004,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20967,
                        "src": "1282:3:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 8005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1282:9:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 8006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1295:1:28",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1282:14:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 8044,
                    "nodeType": "Block",
                    "src": "1554:89:28",
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
                              "id": 8035,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 8032,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7996,
                                "src": "1574:7:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 8033,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20967,
                                  "src": "1585:3:28",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 8034,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1585:9:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1574:20:28",
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
                            "id": 8031,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20970,
                            "src": "1566:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 8036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1566:29:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 8037,
                        "nodeType": "ExpressionStatement",
                        "src": "1566:29:28"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 8042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 8038,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8002,
                            "src": "1607:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$1098",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 8040,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7994,
                                "src": "1627:6:28",
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
                              "id": 8039,
                              "name": "IEtherToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1122,
                              "src": "1615:11:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IEtherToken_$1122_$",
                                "typeString": "type(contract IEtherToken)"
                              }
                            },
                            "id": 8041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1615:19:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IEtherToken_$1122",
                              "typeString": "contract IEtherToken"
                            }
                          },
                          "src": "1607:27:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$1098",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 8043,
                        "nodeType": "ExpressionStatement",
                        "src": "1607:27:28"
                      }
                    ]
                  },
                  "id": 8045,
                  "nodeType": "IfStatement",
                  "src": "1278:365:28",
                  "trueBody": {
                    "id": 8030,
                    "nodeType": "Block",
                    "src": "1297:251:28",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 8012,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 8008,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8002,
                            "src": "1397:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$1098",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 8010,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 7994,
                                "src": "1417:6:28",
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
                              "id": 8009,
                              "name": "ISmartToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1150,
                              "src": "1405:11:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ISmartToken_$1150_$",
                                "typeString": "type(contract ISmartToken)"
                              }
                            },
                            "id": 8011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1405:19:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$1150",
                              "typeString": "contract ISmartToken"
                            }
                          },
                          "src": "1397:27:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20Token_$1098",
                            "typeString": "contract IERC20Token"
                          }
                        },
                        "id": 8013,
                        "nodeType": "ExpressionStatement",
                        "src": "1397:27:28"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 8017,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20967,
                                "src": "1455:3:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 8018,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1455:10:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 8019,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7964,
                              "src": "1467:13:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 8020,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7996,
                              "src": "1482:7:28",
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
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8014,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8002,
                              "src": "1436:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 8016,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1088,
                            "src": "1436:18:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,address,uint256) external returns (bool)"
                            }
                          },
                          "id": 8021,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1436:54:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8022,
                        "nodeType": "ExpressionStatement",
                        "src": "1436:54:28"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8026,
                              "name": "bancorNetwork",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7964,
                              "src": "1516:13:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 8027,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7996,
                              "src": "1531:7:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                                "typeString": "contract IBancorNetwork"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8023,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8002,
                              "src": "1502:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 8025,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "approve",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1097,
                            "src": "1502:13:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 8028,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1502:37:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8029,
                        "nodeType": "ExpressionStatement",
                        "src": "1502:37:28"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    8047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8047,
                      "name": "convertedValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 8098,
                      "src": "1650:19:28",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8046,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1650:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8060,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 8052,
                          "name": "path",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7969,
                          "src": "1721:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
                            "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                          }
                        },
                        "id": 8056,
                        "indexExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8054,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8002,
                              "src": "1734:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            ],
                            "id": 8053,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1726:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 8055,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1726:14:28",
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
                        "src": "1721:20:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8057,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7996,
                        "src": "1753:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8058,
                        "name": "_minimumReturn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7998,
                        "src": "1772:14:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                          "typeString": "contract IERC20Token[] storage ref"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 8049,
                            "name": "bancorNetwork",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7964,
                            "src": "1687:13:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                              "typeString": "contract IBancorNetwork"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                              "typeString": "contract IBancorNetwork"
                            }
                          ],
                          "id": 8048,
                          "name": "IBancorNetwork",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1018,
                          "src": "1672:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IBancorNetwork_$1018_$",
                            "typeString": "type(contract IBancorNetwork)"
                          }
                        },
                        "id": 8050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1672:29:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IBancorNetwork_$1018",
                          "typeString": "contract IBancorNetwork"
                        }
                      },
                      "id": 8051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "convert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 957,
                      "src": "1672:37:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (contract IERC20Token[] memory,uint256,uint256) payable external returns (uint256)"
                      }
                    },
                    "id": 8059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1672:122:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1650:144:28"
                },
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
                        "id": 8064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8062,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8047,
                          "src": "1811:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 8063,
                          "name": "_minimumReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7998,
                          "src": "1829:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1811:32:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c65642e",
                        "id": 8065,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1845:21:28",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        },
                        "value": "Transaction failed."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0df21c1444bed3105ecc1c180b20dafa486ac9f53345f3bae26e00c5e7407402",
                          "typeString": "literal_string \"Transaction failed.\""
                        }
                      ],
                      "id": 8061,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "1802:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 8066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1802:65:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8067,
                  "nodeType": "ExpressionStatement",
                  "src": "1802:65:28"
                },
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
                        "id": 8074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8071,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21090,
                              "src": "1905:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_TokenConverter_$8131",
                                "typeString": "contract TokenConverter"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_TokenConverter_$8131",
                                "typeString": "contract TokenConverter"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8069,
                              "name": "myBitToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7962,
                              "src": "1884:10:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                                "typeString": "contract IERC20Token"
                              }
                            },
                            "id": 8070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1054,
                            "src": "1884:20:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) pure external returns (uint256)"
                            }
                          },
                          "id": 8072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1884:26:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 8073,
                          "name": "convertedValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8047,
                          "src": "1914:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1884:44:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5472616e73616374696f6e206661696c6564207769746820646966666572656e742072657475726e207468616e206578706563746564",
                        "id": 8075,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1930:56:28",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        },
                        "value": "Transaction failed with different return than expected"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f3a3ea629e30aea7a506f3ecfd17dde4101bc5f1d8cd547496eaa25bd08b5618",
                          "typeString": "literal_string \"Transaction failed with different return than expected\""
                        }
                      ],
                      "id": 8068,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "1875:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 8076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1875:112:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8077,
                  "nodeType": "ExpressionStatement",
                  "src": "1875:112:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8081,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2015:3:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8082,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2015:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8083,
                        "name": "convertedValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8047,
                        "src": "2027:14:28",
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
                        "id": 8078,
                        "name": "myBitToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7962,
                        "src": "1995:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$1098",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 8080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1077,
                      "src": "1995:19:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 8084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1995:47:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8085,
                  "nodeType": "ExpressionStatement",
                  "src": "1995:47:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 8089,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2065:3:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 8090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2065:10:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 8093,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21090,
                            "src": "2093:4:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenConverter_$8131",
                              "typeString": "contract TokenConverter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TokenConverter_$8131",
                              "typeString": "contract TokenConverter"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 8091,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8002,
                            "src": "2077:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20Token_$1098",
                              "typeString": "contract IERC20Token"
                            }
                          },
                          "id": 8092,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1054,
                          "src": "2077:15:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_pure$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) pure external returns (uint256)"
                          }
                        },
                        "id": 8094,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2077:21:28",
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
                        "id": 8086,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8002,
                        "src": "2050:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$1098",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      "id": 8088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1077,
                      "src": "2050:14:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 8095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2050:49:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8096,
                  "nodeType": "ExpressionStatement",
                  "src": "2050:49:28"
                }
              ]
            },
            "documentation": "@notice convert some tokens\n@param _token the contract of the token that is about to be converted\n@param _amount the amount of _token that is about to be converted\n@param _minimumReturn the minimum return of MyBit token that is about to be received",
            "id": 8098,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertTokenToMyBit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7994,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8098,
                  "src": "1169:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7993,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1169:7:28",
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
                  "id": 7996,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8098,
                  "src": "1185:12:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7995,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:4:28",
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
                  "id": 7998,
                  "name": "_minimumReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 8098,
                  "src": "1199:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7997,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1199:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1168:51:28"
            },
            "payable": true,
            "returnParameters": {
              "id": 8000,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1245:0:28"
            },
            "scope": 8131,
            "src": "1140:966:28",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 8118,
              "nodeType": "Block",
              "src": "2211:56:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 8110,
                        "name": "path",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7969,
                        "src": "2219:4:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_$",
                          "typeString": "mapping(address => contract IERC20Token[] storage ref)"
                        }
                      },
                      "id": 8112,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 8111,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8100,
                        "src": "2224:5:28",
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
                      "src": "2219:11:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                        "typeString": "contract IERC20Token[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 8113,
                      "name": "_newPath",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8103,
                      "src": "2233:8:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                        "typeString": "contract IERC20Token[] memory"
                      }
                    },
                    "src": "2219:22:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage",
                      "typeString": "contract IERC20Token[] storage ref"
                    }
                  },
                  "id": 8115,
                  "nodeType": "ExpressionStatement",
                  "src": "2219:22:28"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 8116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2256:4:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 8109,
                  "id": 8117,
                  "nodeType": "Return",
                  "src": "2249:11:28"
                }
              ]
            },
            "documentation": null,
            "id": 8119,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8106,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8105,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 8130,
                  "src": "2183:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2183:9:28"
              }
            ],
            "name": "addPath",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8100,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8119,
                  "src": "2129:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8099,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2129:7:28",
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
                  "id": 8103,
                  "name": "_newPath",
                  "nodeType": "VariableDeclaration",
                  "scope": 8119,
                  "src": "2144:22:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 8101,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "2144:11:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 8102,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2144:13:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2128:39:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8108,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8119,
                  "src": "2206:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8107,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2206:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2205:6:28"
            },
            "scope": 8131,
            "src": "2112:155:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8129,
              "nodeType": "Block",
              "src": "2292:141:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 8125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8122,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7971,
                          "src": "2397:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 8123,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "2406:3:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 8124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2406:10:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2397:19:28",
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
                      "id": 8121,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2389:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2389:28:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8127,
                  "nodeType": "ExpressionStatement",
                  "src": "2389:28:28"
                },
                {
                  "id": 8128,
                  "nodeType": "PlaceholderStatement",
                  "src": "2425:1:28"
                }
              ]
            },
            "documentation": null,
            "id": 8130,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 8120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2292:0:28"
            },
            "src": "2273:160:28",
            "visibility": "internal"
          }
        ],
        "scope": 8132,
        "src": "372:2064:28"
      }
    ],
    "src": "0:2437:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2019-01-15T20:50:39.213Z"
}