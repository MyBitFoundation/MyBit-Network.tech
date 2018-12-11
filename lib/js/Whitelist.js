"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Whitelist = exports.Whitelist = 
{
  "contractName": "Whitelist",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
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
      "constant": true,
      "inputs": [],
      "name": "newOwner",
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
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "AddressAddition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "AddressRemoval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdate",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isWhitelisted",
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
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addresses",
          "type": "address[]"
        }
      ],
      "name": "addAddresses",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "removeAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addresses",
          "type": "address[]"
        }
      ],
      "name": "removeAddresses",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a0319163317905561053f806100326000396000f3006080604052600436106100985763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633628731c811461009d57806338eada1c146100f45780633af32abf146101155780634ba79dfe1461014a57806379ba50971461016b5780638da5cb5b14610180578063a84eb999146101b1578063d4ee1d9014610206578063f2fde38b1461021b575b600080fd5b3480156100a957600080fd5b50604080516020600480358082013583810280860185019096528085526100f29536959394602494938501929182918501908490808284375094975061023c9650505050505050565b005b34801561010057600080fd5b506100f2600160a060020a0360043516610274565b34801561012157600080fd5b50610136600160a060020a0360043516610323565b604080519115158252519081900360200190f35b34801561015657600080fd5b506100f2600160a060020a0360043516610341565b34801561017757600080fd5b506100f26103d8565b34801561018c57600080fd5b50610195610460565b60408051600160a060020a039092168252519081900360200190f35b3480156101bd57600080fd5b50604080516020600480358082013583810280860185019096528085526100f29536959394602494938501929182918501908490808284375094975061046f9650505050505050565b34801561021257600080fd5b506101956104a3565b34801561022757600080fd5b506100f2600160a060020a03600435166104b2565b60005b815181101561027057610268828281518110151561025957fe5b90602001906020020151610274565b60010161023f565b5050565b600054600160a060020a0316331461028b57600080fd5b80600160a060020a03811615156102a157600080fd5b600160a060020a03821660009081526002602052604090205460ff16156102c757610270565b600160a060020a038216600081815260026020908152604091829020805460ff19166001179055815192835290517f2c51f80053e9ee7518567e43b2f8e8b48f50cf10daede6d11893df9ad49e4a8a9281900390910190a15050565b600160a060020a031660009081526002602052604090205460ff1690565b600054600160a060020a0316331461035857600080fd5b600160a060020a03811660009081526002602052604090205460ff16151561037f576103d5565b600160a060020a038116600081815260026020908152604091829020805460ff19169055815192835290517f7ec2df28665f8610f9b1d2f74faae35dbc6bd58684a1194a6dfc31584953f03b9281900390910190a15b50565b600154600160a060020a031633146103ef57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b60005b81518110156102705761049b828281518110151561048c57fe5b90602001906020020151610341565b600101610472565b600154600160a060020a031681565b600054600160a060020a031633146104c957600080fd5b600054600160a060020a03828116911614156104e457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820d57e12d777c6a83b884617aaea149db3a0fc80c7de4d8ea4eabc57bbd0115ab90029",
  "deployedBytecode": "0x6080604052600436106100985763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633628731c811461009d57806338eada1c146100f45780633af32abf146101155780634ba79dfe1461014a57806379ba50971461016b5780638da5cb5b14610180578063a84eb999146101b1578063d4ee1d9014610206578063f2fde38b1461021b575b600080fd5b3480156100a957600080fd5b50604080516020600480358082013583810280860185019096528085526100f29536959394602494938501929182918501908490808284375094975061023c9650505050505050565b005b34801561010057600080fd5b506100f2600160a060020a0360043516610274565b34801561012157600080fd5b50610136600160a060020a0360043516610323565b604080519115158252519081900360200190f35b34801561015657600080fd5b506100f2600160a060020a0360043516610341565b34801561017757600080fd5b506100f26103d8565b34801561018c57600080fd5b50610195610460565b60408051600160a060020a039092168252519081900360200190f35b3480156101bd57600080fd5b50604080516020600480358082013583810280860185019096528085526100f29536959394602494938501929182918501908490808284375094975061046f9650505050505050565b34801561021257600080fd5b506101956104a3565b34801561022757600080fd5b506100f2600160a060020a03600435166104b2565b60005b815181101561027057610268828281518110151561025957fe5b90602001906020020151610274565b60010161023f565b5050565b600054600160a060020a0316331461028b57600080fd5b80600160a060020a03811615156102a157600080fd5b600160a060020a03821660009081526002602052604090205460ff16156102c757610270565b600160a060020a038216600081815260026020908152604091829020805460ff19166001179055815192835290517f2c51f80053e9ee7518567e43b2f8e8b48f50cf10daede6d11893df9ad49e4a8a9281900390910190a15050565b600160a060020a031660009081526002602052604090205460ff1690565b600054600160a060020a0316331461035857600080fd5b600160a060020a03811660009081526002602052604090205460ff16151561037f576103d5565b600160a060020a038116600081815260026020908152604091829020805460ff19169055815192835290517f7ec2df28665f8610f9b1d2f74faae35dbc6bd58684a1194a6dfc31584953f03b9281900390910190a15b50565b600154600160a060020a031633146103ef57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b60005b81518110156102705761049b828281518110151561048c57fe5b90602001906020020151610341565b600101610472565b600154600160a060020a031681565b600054600160a060020a031633146104c957600080fd5b600054600160a060020a03828116911614156104e457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820d57e12d777c6a83b884617aaea149db3a0fc80c7de4d8ea4eabc57bbd0115ab90029",
  "sourceMap": "187:2075:38:-;;;420:28;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;187:2075:38;;;;;;",
  "deployedSourceMap": "187:2075:38:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1431:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1431:165:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1431:165:38;;-1:-1:-1;1431:165:38;;-1:-1:-1;;;;;;;1431:165:38;;;1019:292;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1019:292:38;-1:-1:-1;;;;;1019:292:38;;;;;796:111;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;796:111:38;-1:-1:-1;;;;;796:111:38;;;;;;;;;;;;;;;;;;;;;;;1716:245;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1716:245:38;-1:-1:-1;;;;;1716:245:38;;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;155:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;;;;;-1:-1:-1;;;;;155:20:35;;;;;;;;;;;;;;2089:171:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2089:171:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2089:171:38;;-1:-1:-1;2089:171:38;;-1:-1:-1;;;;;;;2089:171:38;181:23:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;1431:165:38;1497:9;1492:98;1516:10;:17;1512:1;:21;1492:98;;;1554:25;1565:10;1576:1;1565:13;;;;;;;;;;;;;;;;;;1554:10;:25::i;:::-;1535:3;;1492:98;;;1431:165;;:::o;1019:292::-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1096:8:38;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;-1:-1:-1;;;;;1140:19:38;;;;;;:9;:19;;;;;;;;1136:92;;;1221:7;;1136:92;-1:-1:-1;;;;;1238:19:38;;;;;;:9;:19;;;;;;;;;:26;;-1:-1:-1;;1238:26:38;1260:4;1238:26;;;1279:25;;;;;;;;;;;;;;;;;501:1:35;1019:292:38;:::o;796:111::-;-1:-1:-1;;;;;881:19:38;858:4;881:19;;;:9;:19;;;;;;;;;796:111::o;1716:245::-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;-1:-1:-1;;;;;1789:19:38;;;;;;:9;:19;;;;;;;;1788:20;1784:94;;;1871:7;;1784:94;-1:-1:-1;;;;;1888:19:38;;1910:5;1888:19;;;:9;:19;;;;;;;;;:27;;-1:-1:-1;;1888:27:38;;;1930:24;;;;;;;;;;;;;;;;;501:1:35;1716:245:38;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;155:20::-;;;-1:-1:-1;;;;;155:20:35;;:::o;2089:171:38:-;2158:9;2153:101;2177:10;:17;2173:1;:21;2153:101;;;2215:28;2229:10;2240:1;2229:13;;;;;;;;;;;;;;;;;;2215;:28::i;:::-;2196:3;;2153:101;;181:23:35;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o",
  "source": "pragma solidity ^0.4.24;\nimport './Owned.sol';\nimport './Utils.sol';\nimport './interfaces/IWhitelist.sol';\n\n/**\n    Whitelist\n\n    The contract manages a list of whitelisted addresses\n*/\ncontract Whitelist is IWhitelist, Owned, Utils {\n    mapping (address => bool) private whitelist;\n\n    event AddressAddition(address _address);\n    event AddressRemoval(address _address);\n\n    /**\n        @dev constructor\n    */\n    constructor() public {\n    }\n\n    // allows execution by a whitelisted address only\n    modifier whitelistedOnly() {\n        require(whitelist[msg.sender]);\n        _;\n    }\n\n    /**\n        @dev returns true if a given address is whitelisted, false if not\n\n        @param _address address to check\n\n        @return true if the address is whitelisted, false if not\n    */\n    function isWhitelisted(address _address) public view returns (bool) {\n        return whitelist[_address];\n    }\n\n    /**\n        @dev adds a given address to the whitelist\n\n        @param _address address to add\n    */\n    function addAddress(address _address)\n        ownerOnly\n        validAddress(_address)\n        public \n    {\n        if (whitelist[_address]) // checks if the address is already whitelisted\n            return;\n\n        whitelist[_address] = true;\n        emit AddressAddition(_address);\n    }\n\n    /**\n        @dev adds a list of addresses to the whitelist\n\n        @param _addresses addresses to add\n    */\n    function addAddresses(address[] _addresses) public {\n        for (uint256 i = 0; i < _addresses.length; i++) {\n            addAddress(_addresses[i]);\n        }\n    }\n\n    /**\n        @dev removes a given address from the whitelist\n\n        @param _address address to remove\n    */\n    function removeAddress(address _address) ownerOnly public {\n        if (!whitelist[_address]) // checks if the address is actually whitelisted\n            return;\n\n        whitelist[_address] = false;\n        emit AddressRemoval(_address);\n    }\n\n    /**\n        @dev removes a list of addresses from the whitelist\n\n        @param _addresses addresses to remove\n    */\n    function removeAddresses(address[] _addresses) public {\n        for (uint256 i = 0; i < _addresses.length; i++) {\n            removeAddress(_addresses[i]);\n        }\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Whitelist.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Whitelist.sol",
    "exportedSymbols": {
      "Whitelist": [
        9834
      ]
    },
    "id": 9835,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9683,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9684,
        "nodeType": "ImportDirective",
        "scope": 9835,
        "sourceUnit": 9515,
        "src": "25:21:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "./Utils.sol",
        "id": 9685,
        "nodeType": "ImportDirective",
        "scope": 9835,
        "sourceUnit": 9682,
        "src": "47:21:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
        "file": "./interfaces/IWhitelist.sol",
        "id": 9686,
        "nodeType": "ImportDirective",
        "scope": 9835,
        "sourceUnit": 9914,
        "src": "69:37:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9687,
              "name": "IWhitelist",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9913,
              "src": "209:10:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IWhitelist_$9913",
                "typeString": "contract IWhitelist"
              }
            },
            "id": 9688,
            "nodeType": "InheritanceSpecifier",
            "src": "209:10:38"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9689,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "221:5:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9690,
            "nodeType": "InheritanceSpecifier",
            "src": "221:5:38"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9691,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "228:5:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 9692,
            "nodeType": "InheritanceSpecifier",
            "src": "228:5:38"
          }
        ],
        "contractDependencies": [
          9514,
          9681,
          9887,
          9913
        ],
        "contractKind": "contract",
        "documentation": "Whitelist\nThe contract manages a list of whitelisted addresses",
        "fullyImplemented": true,
        "id": 9834,
        "linearizedBaseContracts": [
          9834,
          9681,
          9514,
          9887,
          9913
        ],
        "name": "Whitelist",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9696,
            "name": "whitelist",
            "nodeType": "VariableDeclaration",
            "scope": 9834,
            "src": "240:43:38",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 9695,
              "keyType": {
                "id": 9693,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "249:7:38",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "240:25:38",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 9694,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "260:4:38",
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
            "anonymous": false,
            "documentation": null,
            "id": 9700,
            "name": "AddressAddition",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9698,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9700,
                  "src": "312:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "311:18:38"
            },
            "src": "290:40:38"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9704,
            "name": "AddressRemoval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9702,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9704,
                  "src": "356:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "355:18:38"
            },
            "src": "335:39:38"
          },
          {
            "body": {
              "id": 9707,
              "nodeType": "Block",
              "src": "441:7:38",
              "statements": []
            },
            "documentation": "@dev constructor",
            "id": 9708,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9705,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "431:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "441:0:38"
            },
            "scope": 9834,
            "src": "420:28:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9718,
              "nodeType": "Block",
              "src": "535:58:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9711,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9696,
                          "src": "553:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 9714,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9712,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "563:3:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "563:10:38",
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
                        "src": "553:21:38",
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
                      "id": 9710,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "545:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "545:30:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9716,
                  "nodeType": "ExpressionStatement",
                  "src": "545:30:38"
                },
                {
                  "id": 9717,
                  "nodeType": "PlaceholderStatement",
                  "src": "585:1:38"
                }
              ]
            },
            "documentation": null,
            "id": 9719,
            "name": "whitelistedOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9709,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "532:2:38"
            },
            "src": "508:85:38",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9730,
              "nodeType": "Block",
              "src": "864:43:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9726,
                      "name": "whitelist",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9696,
                      "src": "881:9:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 9728,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9727,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9721,
                      "src": "891:8:38",
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
                    "src": "881:19:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 9725,
                  "id": 9729,
                  "nodeType": "Return",
                  "src": "874:26:38"
                }
              ]
            },
            "documentation": "@dev returns true if a given address is whitelisted, false if not\n@param _address address to check\n@return true if the address is whitelisted, false if not",
            "id": 9731,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isWhitelisted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9721,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9731,
                  "src": "819:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9724,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9731,
                  "src": "858:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9723,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:6:38"
            },
            "scope": 9834,
            "src": "796:111:38",
            "stateMutability": "view",
            "superFunction": 9912,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9756,
              "nodeType": "Block",
              "src": "1126:185:38",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9741,
                      "name": "whitelist",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9696,
                      "src": "1140:9:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 9743,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9742,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9733,
                      "src": "1150:8:38",
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
                    "src": "1140:19:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9745,
                  "nodeType": "IfStatement",
                  "src": "1136:92:38",
                  "trueBody": {
                    "expression": null,
                    "functionReturnParameters": 9740,
                    "id": 9744,
                    "nodeType": "Return",
                    "src": "1221:7:38"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9746,
                        "name": "whitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9696,
                        "src": "1238:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 9748,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9747,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9733,
                        "src": "1248:8:38",
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
                      "src": "1238:19:38",
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
                      "id": 9749,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1260:4:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1238:26:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9751,
                  "nodeType": "ExpressionStatement",
                  "src": "1238:26:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9753,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9733,
                        "src": "1295:8:38",
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
                      "id": 9752,
                      "name": "AddressAddition",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9700,
                      "src": "1279:15:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 9754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1279:25:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9755,
                  "nodeType": "EmitStatement",
                  "src": "1274:30:38"
                }
              ]
            },
            "documentation": "@dev adds a given address to the whitelist\n@param _address address to add",
            "id": 9757,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9736,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9735,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1065:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1065:9:38"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9738,
                    "name": "_address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9733,
                    "src": "1096:8:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9739,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9737,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1083:12:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1083:22:38"
              }
            ],
            "name": "addAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9733,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9757,
                  "src": "1039:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9732,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1039:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1038:18:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9740,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1126:0:38"
            },
            "scope": 9834,
            "src": "1019:292:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9782,
              "nodeType": "Block",
              "src": "1482:114:38",
              "statements": [
                {
                  "body": {
                    "id": 9780,
                    "nodeType": "Block",
                    "src": "1540:50:38",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9775,
                                "name": "_addresses",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9760,
                                "src": "1565:10:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 9777,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9776,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9764,
                                "src": "1576:1:38",
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
                              "src": "1565:13:38",
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
                            "id": 9774,
                            "name": "addAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9757,
                            "src": "1554:10:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 9778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1554:25:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9779,
                        "nodeType": "ExpressionStatement",
                        "src": "1554:25:38"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9767,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9764,
                      "src": "1512:1:38",
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
                        "id": 9768,
                        "name": "_addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9760,
                        "src": "1516:10:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 9769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1516:17:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1512:21:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9781,
                  "initializationExpression": {
                    "assignments": [
                      9764
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9764,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9783,
                        "src": "1497:9:38",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9763,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1497:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9766,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1509:1:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1497:13:38"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9772,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1535:3:38",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9771,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9764,
                        "src": "1535:1:38",
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
                    "id": 9773,
                    "nodeType": "ExpressionStatement",
                    "src": "1535:3:38"
                  },
                  "nodeType": "ForStatement",
                  "src": "1492:98:38"
                }
              ]
            },
            "documentation": "@dev adds a list of addresses to the whitelist\n@param _addresses addresses to add",
            "id": 9783,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addAddresses",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9760,
                  "name": "_addresses",
                  "nodeType": "VariableDeclaration",
                  "scope": 9783,
                  "src": "1453:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 9758,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1453:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9759,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1453:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:22:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9762,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1482:0:38"
            },
            "scope": 9834,
            "src": "1431:165:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9806,
              "nodeType": "Block",
              "src": "1774:187:38",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 9793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1788:20:38",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9790,
                        "name": "whitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9696,
                        "src": "1789:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 9792,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9791,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "1799:8:38",
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
                      "src": "1789:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9795,
                  "nodeType": "IfStatement",
                  "src": "1784:94:38",
                  "trueBody": {
                    "expression": null,
                    "functionReturnParameters": 9789,
                    "id": 9794,
                    "nodeType": "Return",
                    "src": "1871:7:38"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9796,
                        "name": "whitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9696,
                        "src": "1888:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 9798,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9797,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "1898:8:38",
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
                      "src": "1888:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 9799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1910:5:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1888:27:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9801,
                  "nodeType": "ExpressionStatement",
                  "src": "1888:27:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9803,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "1945:8:38",
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
                      "id": 9802,
                      "name": "AddressRemoval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9704,
                      "src": "1930:14:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 9804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1930:24:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9805,
                  "nodeType": "EmitStatement",
                  "src": "1925:29:38"
                }
              ]
            },
            "documentation": "@dev removes a given address from the whitelist\n@param _address address to remove",
            "id": 9807,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9788,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9787,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1757:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1757:9:38"
              }
            ],
            "name": "removeAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9785,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9807,
                  "src": "1739:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9784,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1739:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1738:18:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1774:0:38"
            },
            "scope": 9834,
            "src": "1716:245:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9832,
              "nodeType": "Block",
              "src": "2143:117:38",
              "statements": [
                {
                  "body": {
                    "id": 9830,
                    "nodeType": "Block",
                    "src": "2201:53:38",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9825,
                                "name": "_addresses",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9810,
                                "src": "2229:10:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 9827,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9826,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9814,
                                "src": "2240:1:38",
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
                              "src": "2229:13:38",
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
                            "id": 9824,
                            "name": "removeAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9807,
                            "src": "2215:13:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 9828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2215:28:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9829,
                        "nodeType": "ExpressionStatement",
                        "src": "2215:28:38"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9817,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9814,
                      "src": "2173:1:38",
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
                        "id": 9818,
                        "name": "_addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9810,
                        "src": "2177:10:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 9819,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2177:17:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2173:21:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9831,
                  "initializationExpression": {
                    "assignments": [
                      9814
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9814,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9833,
                        "src": "2158:9:38",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9813,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2158:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9816,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9815,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2170:1:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2158:13:38"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2196:3:38",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9821,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9814,
                        "src": "2196:1:38",
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
                    "id": 9823,
                    "nodeType": "ExpressionStatement",
                    "src": "2196:3:38"
                  },
                  "nodeType": "ForStatement",
                  "src": "2153:101:38"
                }
              ]
            },
            "documentation": "@dev removes a list of addresses from the whitelist\n@param _addresses addresses to remove",
            "id": 9833,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "removeAddresses",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9810,
                  "name": "_addresses",
                  "nodeType": "VariableDeclaration",
                  "scope": 9833,
                  "src": "2114:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 9808,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2114:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9809,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2114:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2113:22:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2143:0:38"
            },
            "scope": 9834,
            "src": "2089:171:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9835,
        "src": "187:2075:38"
      }
    ],
    "src": "0:2263:38"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Whitelist.sol",
    "exportedSymbols": {
      "Whitelist": [
        9834
      ]
    },
    "id": 9835,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9683,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Owned.sol",
        "file": "./Owned.sol",
        "id": 9684,
        "nodeType": "ImportDirective",
        "scope": 9835,
        "sourceUnit": 9515,
        "src": "25:21:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/Utils.sol",
        "file": "./Utils.sol",
        "id": 9685,
        "nodeType": "ImportDirective",
        "scope": 9835,
        "sourceUnit": 9682,
        "src": "47:21:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IWhitelist.sol",
        "file": "./interfaces/IWhitelist.sol",
        "id": 9686,
        "nodeType": "ImportDirective",
        "scope": 9835,
        "sourceUnit": 9914,
        "src": "69:37:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9687,
              "name": "IWhitelist",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9913,
              "src": "209:10:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IWhitelist_$9913",
                "typeString": "contract IWhitelist"
              }
            },
            "id": 9688,
            "nodeType": "InheritanceSpecifier",
            "src": "209:10:38"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9689,
              "name": "Owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9514,
              "src": "221:5:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Owned_$9514",
                "typeString": "contract Owned"
              }
            },
            "id": 9690,
            "nodeType": "InheritanceSpecifier",
            "src": "221:5:38"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9691,
              "name": "Utils",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9681,
              "src": "228:5:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Utils_$9681",
                "typeString": "contract Utils"
              }
            },
            "id": 9692,
            "nodeType": "InheritanceSpecifier",
            "src": "228:5:38"
          }
        ],
        "contractDependencies": [
          9514,
          9681,
          9887,
          9913
        ],
        "contractKind": "contract",
        "documentation": "Whitelist\nThe contract manages a list of whitelisted addresses",
        "fullyImplemented": true,
        "id": 9834,
        "linearizedBaseContracts": [
          9834,
          9681,
          9514,
          9887,
          9913
        ],
        "name": "Whitelist",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9696,
            "name": "whitelist",
            "nodeType": "VariableDeclaration",
            "scope": 9834,
            "src": "240:43:38",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 9695,
              "keyType": {
                "id": 9693,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "249:7:38",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "240:25:38",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 9694,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "260:4:38",
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
            "anonymous": false,
            "documentation": null,
            "id": 9700,
            "name": "AddressAddition",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9698,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9700,
                  "src": "312:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "311:18:38"
            },
            "src": "290:40:38"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 9704,
            "name": "AddressRemoval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9702,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9704,
                  "src": "356:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "355:18:38"
            },
            "src": "335:39:38"
          },
          {
            "body": {
              "id": 9707,
              "nodeType": "Block",
              "src": "441:7:38",
              "statements": []
            },
            "documentation": "@dev constructor",
            "id": 9708,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9705,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "431:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "441:0:38"
            },
            "scope": 9834,
            "src": "420:28:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9718,
              "nodeType": "Block",
              "src": "535:58:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 9711,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9696,
                          "src": "553:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 9714,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 9712,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28038,
                            "src": "563:3:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "563:10:38",
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
                        "src": "553:21:38",
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
                      "id": 9710,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "545:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "545:30:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9716,
                  "nodeType": "ExpressionStatement",
                  "src": "545:30:38"
                },
                {
                  "id": 9717,
                  "nodeType": "PlaceholderStatement",
                  "src": "585:1:38"
                }
              ]
            },
            "documentation": null,
            "id": 9719,
            "name": "whitelistedOnly",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9709,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "532:2:38"
            },
            "src": "508:85:38",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9730,
              "nodeType": "Block",
              "src": "864:43:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9726,
                      "name": "whitelist",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9696,
                      "src": "881:9:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 9728,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9727,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9721,
                      "src": "891:8:38",
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
                    "src": "881:19:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 9725,
                  "id": 9729,
                  "nodeType": "Return",
                  "src": "874:26:38"
                }
              ]
            },
            "documentation": "@dev returns true if a given address is whitelisted, false if not\n@param _address address to check\n@return true if the address is whitelisted, false if not",
            "id": 9731,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isWhitelisted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9721,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9731,
                  "src": "819:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9724,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9731,
                  "src": "858:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9723,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:6:38"
            },
            "scope": 9834,
            "src": "796:111:38",
            "stateMutability": "view",
            "superFunction": 9912,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9756,
              "nodeType": "Block",
              "src": "1126:185:38",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 9741,
                      "name": "whitelist",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9696,
                      "src": "1140:9:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 9743,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 9742,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9733,
                      "src": "1150:8:38",
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
                    "src": "1140:19:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9745,
                  "nodeType": "IfStatement",
                  "src": "1136:92:38",
                  "trueBody": {
                    "expression": null,
                    "functionReturnParameters": 9740,
                    "id": 9744,
                    "nodeType": "Return",
                    "src": "1221:7:38"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9746,
                        "name": "whitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9696,
                        "src": "1238:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 9748,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9747,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9733,
                        "src": "1248:8:38",
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
                      "src": "1238:19:38",
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
                      "id": 9749,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1260:4:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1238:26:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9751,
                  "nodeType": "ExpressionStatement",
                  "src": "1238:26:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9753,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9733,
                        "src": "1295:8:38",
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
                      "id": 9752,
                      "name": "AddressAddition",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9700,
                      "src": "1279:15:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 9754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1279:25:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9755,
                  "nodeType": "EmitStatement",
                  "src": "1274:30:38"
                }
              ]
            },
            "documentation": "@dev adds a given address to the whitelist\n@param _address address to add",
            "id": 9757,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9736,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9735,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1065:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1065:9:38"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 9738,
                    "name": "_address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9733,
                    "src": "1096:8:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 9739,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9737,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1083:12:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1083:22:38"
              }
            ],
            "name": "addAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9733,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9757,
                  "src": "1039:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9732,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1039:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1038:18:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9740,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1126:0:38"
            },
            "scope": 9834,
            "src": "1019:292:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9782,
              "nodeType": "Block",
              "src": "1482:114:38",
              "statements": [
                {
                  "body": {
                    "id": 9780,
                    "nodeType": "Block",
                    "src": "1540:50:38",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9775,
                                "name": "_addresses",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9760,
                                "src": "1565:10:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 9777,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9776,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9764,
                                "src": "1576:1:38",
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
                              "src": "1565:13:38",
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
                            "id": 9774,
                            "name": "addAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9757,
                            "src": "1554:10:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 9778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1554:25:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9779,
                        "nodeType": "ExpressionStatement",
                        "src": "1554:25:38"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9767,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9764,
                      "src": "1512:1:38",
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
                        "id": 9768,
                        "name": "_addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9760,
                        "src": "1516:10:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 9769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1516:17:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1512:21:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9781,
                  "initializationExpression": {
                    "assignments": [
                      9764
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9764,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9783,
                        "src": "1497:9:38",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9763,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1497:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9766,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1509:1:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1497:13:38"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9772,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1535:3:38",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9771,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9764,
                        "src": "1535:1:38",
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
                    "id": 9773,
                    "nodeType": "ExpressionStatement",
                    "src": "1535:3:38"
                  },
                  "nodeType": "ForStatement",
                  "src": "1492:98:38"
                }
              ]
            },
            "documentation": "@dev adds a list of addresses to the whitelist\n@param _addresses addresses to add",
            "id": 9783,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addAddresses",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9760,
                  "name": "_addresses",
                  "nodeType": "VariableDeclaration",
                  "scope": 9783,
                  "src": "1453:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 9758,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1453:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9759,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1453:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1452:22:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9762,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1482:0:38"
            },
            "scope": 9834,
            "src": "1431:165:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9806,
              "nodeType": "Block",
              "src": "1774:187:38",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 9793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1788:20:38",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9790,
                        "name": "whitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9696,
                        "src": "1789:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 9792,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9791,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "1799:8:38",
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
                      "src": "1789:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 9795,
                  "nodeType": "IfStatement",
                  "src": "1784:94:38",
                  "trueBody": {
                    "expression": null,
                    "functionReturnParameters": 9789,
                    "id": 9794,
                    "nodeType": "Return",
                    "src": "1871:7:38"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 9796,
                        "name": "whitelist",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9696,
                        "src": "1888:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 9798,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 9797,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "1898:8:38",
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
                      "src": "1888:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 9799,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1910:5:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1888:27:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9801,
                  "nodeType": "ExpressionStatement",
                  "src": "1888:27:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 9803,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "1945:8:38",
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
                      "id": 9802,
                      "name": "AddressRemoval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9704,
                      "src": "1930:14:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 9804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1930:24:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9805,
                  "nodeType": "EmitStatement",
                  "src": "1925:29:38"
                }
              ]
            },
            "documentation": "@dev removes a given address from the whitelist\n@param _address address to remove",
            "id": 9807,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 9788,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9787,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1757:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1757:9:38"
              }
            ],
            "name": "removeAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9785,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 9807,
                  "src": "1739:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9784,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1739:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1738:18:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1774:0:38"
            },
            "scope": 9834,
            "src": "1716:245:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9832,
              "nodeType": "Block",
              "src": "2143:117:38",
              "statements": [
                {
                  "body": {
                    "id": 9830,
                    "nodeType": "Block",
                    "src": "2201:53:38",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 9825,
                                "name": "_addresses",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9810,
                                "src": "2229:10:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 9827,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 9826,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9814,
                                "src": "2240:1:38",
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
                              "src": "2229:13:38",
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
                            "id": 9824,
                            "name": "removeAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9807,
                            "src": "2215:13:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                              "typeString": "function (address)"
                            }
                          },
                          "id": 9828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2215:28:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9829,
                        "nodeType": "ExpressionStatement",
                        "src": "2215:28:38"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 9817,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9814,
                      "src": "2173:1:38",
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
                        "id": 9818,
                        "name": "_addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9810,
                        "src": "2177:10:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      "id": 9819,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2177:17:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2173:21:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9831,
                  "initializationExpression": {
                    "assignments": [
                      9814
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9814,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 9833,
                        "src": "2158:9:38",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9813,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2158:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 9816,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 9815,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2170:1:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2158:13:38"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 9822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2196:3:38",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 9821,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9814,
                        "src": "2196:1:38",
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
                    "id": 9823,
                    "nodeType": "ExpressionStatement",
                    "src": "2196:3:38"
                  },
                  "nodeType": "ForStatement",
                  "src": "2153:101:38"
                }
              ]
            },
            "documentation": "@dev removes a list of addresses from the whitelist\n@param _addresses addresses to remove",
            "id": 9833,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "removeAddresses",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9810,
                  "name": "_addresses",
                  "nodeType": "VariableDeclaration",
                  "scope": 9833,
                  "src": "2114:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 9808,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2114:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9809,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2114:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2113:22:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 9812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2143:0:38"
            },
            "scope": 9834,
            "src": "2089:171:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9835,
        "src": "187:2075:38"
      }
    ],
    "src": "0:2263:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.563Z"
}