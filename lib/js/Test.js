"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Test = exports.Test = 
{
  "contractName": "Test",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "assetFunded",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "database",
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
          "name": "_database",
          "type": "address"
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
        },
        {
          "indexed": false,
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "logpayment",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_accessLevel",
          "type": "uint256"
        }
      ],
      "name": "burnAccessTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assetID",
          "type": "bytes32"
        },
        {
          "name": "_amountToBeRaised",
          "type": "uint256"
        },
        {
          "name": "_managerPercentage",
          "type": "uint256"
        },
        {
          "name": "_amountToEscrow",
          "type": "uint256"
        },
        {
          "name": "_installerID",
          "type": "bytes32"
        },
        {
          "name": "_assetType",
          "type": "bytes32"
        },
        {
          "name": "_ipfsHash",
          "type": "bytes32"
        }
      ],
      "name": "createAsset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assetID",
          "type": "bytes32"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "fund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
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
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "getAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516020806109fc83398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610979806100836000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312065fe01461014557806340b4ff2514610170578063713b563f146101a3578063bf40fac1146101fa578063c9a82bee146102a3578063d0e30db0146102d0578063e46bbc9e146102da578063e68788fc14610315575b3373ffffffffffffffffffffffffffffffffffffffff16637249fbb66001546040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561010757600080fd5b505af115801561011b573d6000803e3d6000fd5b505050506040513d602081101561013157600080fd5b810190808051906020019092919050505050005b34801561015157600080fd5b5061015a61038e565b6040518082815260200191505060405180910390f35b34801561017c57600080fd5b506101856103ad565b60405180826000191660001916815260200191505060405180910390f35b3480156101af57600080fd5b506101b86103b3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020657600080fd5b50610261600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103d8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102af57600080fd5b506102ce600480360381019080803590602001909291905050506105aa565b005b6102d861069f565b005b3480156102e657600080fd5b50610313600480360381019080803560001916906020019092919080359060200190929190505050610714565b005b34801561032157600080fd5b5061038c6004803603810190808035600019169060200190929190803590602001909291908035906020019092919080359060200190929190803560001916906020019092919080356000191690602001909291908035600019169060200190929190505050610809565b005b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166304f49a3a8360405160200180807f636f6e747261637400000000000000000000000000000000000000000000000081525060080182805190602001908083835b6020831015156104785780518252602082019150602081019050602083039250610453565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b6020831015156104e157805182526020820191506020810190506020830392506104bc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b505050506040513d602081101561059257600080fd5b81019080805190602001909291905050509050919050565b6105e86040805190810160405280600981526020017f546f6b656e4275726e00000000000000000000000000000000000000000000008152506103d8565b73ffffffffffffffffffffffffffffffffffffffff16636d1b229d826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15801561065657600080fd5b505af115801561066a573d6000803e3d6000fd5b505050506040513d602081101561068057600080fd5b8101908080519060200190929190505050151561069c57600080fd5b50565b7faa935ae686fa3223b9a0f240cfc5c389a8309f7c5b44c45e4d1bc0c32c1e1a57333442604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a1565b6107526040805190810160405280600a81526020017f46756e64696e67487562000000000000000000000000000000000000000000008152506103d8565b73ffffffffffffffffffffffffffffffffffffffff1663bf14c11982846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506020604051808303818588803b1580156107c857600080fd5b505af11580156107dc573d6000803e3d6000fd5b50505050506040513d60208110156107f357600080fd5b8101908080519060200190929190505050505050565b6108476040805190810160405280600d81526020017f41737365744372656174696f6e000000000000000000000000000000000000008152506103d8565b73ffffffffffffffffffffffffffffffffffffffff1663310bc5fc878787878743886040518863ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180888152602001878152602001868152602001856000191660001916815260200184600019166000191681526020018381526020018260001916600019168152602001975050505050505050602060405180830381600087803b1580156108fd57600080fd5b505af1158015610911573d6000803e3d6000fd5b505050506040513d602081101561092757600080fd5b8101908080519060200190929190505050508660018160001916905550505050505050505600a165627a7a723058208422408fce936aee456c318ac1b2b45dd829747201ddd90d8bf1c1a85b51ddf70029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312065fe01461014557806340b4ff2514610170578063713b563f146101a3578063bf40fac1146101fa578063c9a82bee146102a3578063d0e30db0146102d0578063e46bbc9e146102da578063e68788fc14610315575b3373ffffffffffffffffffffffffffffffffffffffff16637249fbb66001546040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561010757600080fd5b505af115801561011b573d6000803e3d6000fd5b505050506040513d602081101561013157600080fd5b810190808051906020019092919050505050005b34801561015157600080fd5b5061015a61038e565b6040518082815260200191505060405180910390f35b34801561017c57600080fd5b506101856103ad565b60405180826000191660001916815260200191505060405180910390f35b3480156101af57600080fd5b506101b86103b3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020657600080fd5b50610261600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506103d8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102af57600080fd5b506102ce600480360381019080803590602001909291905050506105aa565b005b6102d861069f565b005b3480156102e657600080fd5b50610313600480360381019080803560001916906020019092919080359060200190929190505050610714565b005b34801561032157600080fd5b5061038c6004803603810190808035600019169060200190929190803590602001909291908035906020019092919080359060200190929190803560001916906020019092919080356000191690602001909291908035600019169060200190929190505050610809565b005b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166304f49a3a8360405160200180807f636f6e747261637400000000000000000000000000000000000000000000000081525060080182805190602001908083835b6020831015156104785780518252602082019150602081019050602083039250610453565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b6020831015156104e157805182526020820191506020810190506020830392506104bc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b505050506040513d602081101561059257600080fd5b81019080805190602001909291905050509050919050565b6105e86040805190810160405280600981526020017f546f6b656e4275726e00000000000000000000000000000000000000000000008152506103d8565b73ffffffffffffffffffffffffffffffffffffffff16636d1b229d826040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15801561065657600080fd5b505af115801561066a573d6000803e3d6000fd5b505050506040513d602081101561068057600080fd5b8101908080519060200190929190505050151561069c57600080fd5b50565b7faa935ae686fa3223b9a0f240cfc5c389a8309f7c5b44c45e4d1bc0c32c1e1a57333442604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a1565b6107526040805190810160405280600a81526020017f46756e64696e67487562000000000000000000000000000000000000000000008152506103d8565b73ffffffffffffffffffffffffffffffffffffffff1663bf14c11982846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506020604051808303818588803b1580156107c857600080fd5b505af11580156107dc573d6000803e3d6000fd5b50505050506040513d60208110156107f357600080fd5b8101908080519060200190929190505050505050565b6108476040805190810160405280600d81526020017f41737365744372656174696f6e000000000000000000000000000000000000008152506103d8565b73ffffffffffffffffffffffffffffffffffffffff1663310bc5fc878787878743886040518863ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180888152602001878152602001868152602001856000191660001916815260200184600019166000191681526020018381526020018260001916600019168152602001975050505050505050602060405180830381600087803b1580156108fd57600080fd5b505af1158015610911573d6000803e3d6000fd5b505050506040513d602081101561092757600080fd5b8101908080519060200190929190505050508660018160001916905550505050505050505600a165627a7a723058208422408fce936aee456c318ac1b2b45dd829747201ddd90d8bf1c1a85b51ddf70029",
  "sourceMap": "424:1421:22:-;;;545:81;8:9:-1;5:2;;;30:1;27;20:12;5:2;545:81:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;611:9;591:8;;:30;;;;;;;;;;;;;;;;;;545:81;424:1421;;;;;;",
  "deployedSourceMap": "424:1421:22:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1737:10;1726:29;;;1756:11;;1726:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1726:42:22;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1726:42:22;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1726:42:22;;;;;;;;;;;;;;;;;424:1421;1402:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1402:94:22;;;;;;;;;;;;;;;;;;;;;;;473:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;473:26:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;444:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;444:24:22;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:159;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1500:159:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;632:135;;8:9:-1;5:2;;;30:1;27;20:12;5:2;632:135:22;;;;;;;;;;;;;;;;;;;;;;;;;;1294:104;;;;;;1155:134;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1155:134:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;771:379;;8:9:-1;5:2;;;30:1;27;20:12;5:2;771:379:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1402:94;1451:4;1478;1470:21;;;1463:28;;1402:94;:::o;473:26::-;;;;:::o;444:24::-;;;;;;;;;;;;;:::o;1500:159::-;1561:7;1583:8;;;;;;;;;;;:23;;;1646:5;1617:35;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1617:35:22;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1617:35:22;;;1607:46;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1607:46:22;;;;;;;;;;;;;;;;1583:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1583:71:22;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1583:71:22;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1583:71:22;;;;;;;;;;;;;;;;1576:78;;1500:159;;;:::o;632:135::-;712:23;;;;;;;;;;;;;;;;;;;:10;:23::i;:::-;702:45;;;748:12;702:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;702:59:22;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;702:59:22;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;702:59:22;;;;;;;;;;;;;;;;694:68;;;;;;;;632:135;:::o;1294:104::-;1343:50;1354:10;1366:9;1377:15;1343:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1294:104::o;1155:134::-;1229:24;;;;;;;;;;;;;;;;;;;:10;:24::i;:::-;1218:41;;;1266:7;1275:8;1218:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1218:66:22;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1218:66:22;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1218:66:22;;;;;;;;;;;;;;;;;1155:134;;:::o;771:379::-;973:27;;;;;;;;;;;;;;;;;;;:10;:27::i;:::-;959:51;;;1011:17;1030:18;1050:15;1067:12;1081:10;1093:12;1107:9;959:158;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;959:158:22;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;959:158:22;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;959:158:22;;;;;;;;;;;;;;;;;1137:8;1123:11;:22;;;;;;;771:379;;;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport './Database.sol';\nimport './Asset.sol';\nimport './AssetCreation.sol';\nimport './ContractManager.sol';\nimport './FundingHub.sol';\nimport './InitialVariables.sol';\nimport './AssetExchange.sol';\nimport './MyBitToken.sol';\nimport './AssetManager.sol';\nimport './Owned.sol';\nimport './TokenBurn.sol';\nimport './TokenFaucet.sol';\nimport './UserAccess.sol';\n\n// TODO: Test Re-entrancy and overflows\ncontract  Test {\n\n  Database public database;\n\n  bytes32 public assetFunded;   // ID of asset funded by this contract\n\n  constructor(address _database)\n  public {\n    database = Database(_database);\n  }\n\n\n\n  function burnAccessTokens(uint _accessLevel)\n  external {\n    require(TokenBurn(getAddress(\"TokenBurn\")).burnTokens(_accessLevel));\n  }\n\n  function createAsset(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, uint _amountToEscrow, bytes32 _installerID, bytes32 _assetType, bytes32 _ipfsHash)\n  external {\n    AssetCreation(getAddress(\"AssetCreation\")).newAsset(_amountToBeRaised, _managerPercentage, _amountToEscrow, _installerID, _assetType, block.number, _ipfsHash);\n    assetFunded = _assetID;\n  }\n\n\n  function fund(bytes32 _assetID, uint _amount)\n  external {\n    FundingHub(getAddress(\"FundingHub\")).fund.value(_amount)(_assetID);\n  }\n\n\n  function deposit()\n  payable\n  public {\n    emit logpayment(msg.sender, msg.value, block.timestamp);\n  }\n\n  function getBalance()\n  public\n  view\n  returns (uint) {\n    return address(this).balance;\n  }\n\n  function getAddress(string _name)\n  public\n  view\n  returns (address) {\n    return database.addressStorage(keccak256(abi.encodePacked(\"contract\", _name)));\n  }\n\n  // Test Re-entrancy here\n  function()\n  public\n  payable {\n    FundingHub(msg.sender).refund(assetFunded);\n  }\n\n\n  event logpayment(address _sender, uint _amount, uint _timestamp);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Test.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Test.sol",
    "exportedSymbols": {
      "Test": [
        10145
      ]
    },
    "id": 10146,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9977,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:22"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Database.sol",
        "file": "./Database.sol",
        "id": 9978,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 6819,
        "src": "25:24:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Asset.sol",
        "file": "./Asset.sol",
        "id": 9979,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 2285,
        "src": "50:21:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/AssetCreation.sol",
        "file": "./AssetCreation.sol",
        "id": 9980,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 3904,
        "src": "72:29:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/ContractManager.sol",
        "file": "./ContractManager.sol",
        "id": 9981,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 6445,
        "src": "102:31:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/FundingHub.sol",
        "file": "./FundingHub.sol",
        "id": 9982,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 7573,
        "src": "134:26:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/InitialVariables.sol",
        "file": "./InitialVariables.sol",
        "id": 9983,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 8441,
        "src": "161:32:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/AssetExchange.sol",
        "file": "./AssetExchange.sol",
        "id": 9984,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 4990,
        "src": "194:29:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/MyBitToken.sol",
        "file": "./MyBitToken.sol",
        "id": 9985,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 9005,
        "src": "224:26:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/AssetManager.sol",
        "file": "./AssetManager.sol",
        "id": 9986,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 5548,
        "src": "251:28:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Owned.sol",
        "file": "./Owned.sol",
        "id": 9987,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 9276,
        "src": "280:21:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/TokenBurn.sol",
        "file": "./TokenBurn.sol",
        "id": 9988,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 10500,
        "src": "302:25:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/TokenFaucet.sol",
        "file": "./TokenFaucet.sol",
        "id": 9989,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 11228,
        "src": "328:27:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/UserAccess.sol",
        "file": "./UserAccess.sol",
        "id": 9990,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 11461,
        "src": "356:26:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10145,
        "linearizedBaseContracts": [
          10145
        ],
        "name": "Test",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9992,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 10145,
            "src": "444:24:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$6818",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 9991,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6818,
              "src": "444:8:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$6818",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9994,
            "name": "assetFunded",
            "nodeType": "VariableDeclaration",
            "scope": 10145,
            "src": "473:26:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 9993,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "473:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10005,
              "nodeType": "Block",
              "src": "585:41:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10003,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9999,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9992,
                      "src": "591:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6818",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10001,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9996,
                          "src": "611:9:22",
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
                        "id": 10000,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6818,
                        "src": "602:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$6818_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 10002,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "602:19:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6818",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "591:30:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$6818",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 10004,
                  "nodeType": "ExpressionStatement",
                  "src": "591:30:22"
                }
              ]
            },
            "documentation": null,
            "id": 10006,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9996,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 10006,
                  "src": "557:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "556:19:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 9998,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "585:0:22"
            },
            "scope": 10145,
            "src": "545:81:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10022,
              "nodeType": "Block",
              "src": "688:79:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 10018,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10008,
                            "src": "748:12:22",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "546f6b656e4275726e",
                                    "id": 10014,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "723:11:22",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_eddbf77829b20ee2c797c2ce235d2d6ef05642e8b5025f302ef0382d5fc723df",
                                      "typeString": "literal_string \"TokenBurn\""
                                    },
                                    "value": "TokenBurn"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_eddbf77829b20ee2c797c2ce235d2d6ef05642e8b5025f302ef0382d5fc723df",
                                      "typeString": "literal_string \"TokenBurn\""
                                    }
                                  ],
                                  "id": 10013,
                                  "name": "getAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10124,
                                  "src": "712:10:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$returns$_t_address_$",
                                    "typeString": "function (string memory) view returns (address)"
                                  }
                                },
                                "id": 10015,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "712:23:22",
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
                              "id": 10012,
                              "name": "TokenBurn",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10499,
                              "src": "702:9:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_TokenBurn_$10499_$",
                                "typeString": "type(contract TokenBurn)"
                              }
                            },
                            "id": 10016,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "702:34:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenBurn_$10499",
                              "typeString": "contract TokenBurn"
                            }
                          },
                          "id": 10017,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burnTokens",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10258,
                          "src": "702:45:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) external returns (bool)"
                          }
                        },
                        "id": 10019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "702:59:22",
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
                      "id": 10011,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "694:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "694:68:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10021,
                  "nodeType": "ExpressionStatement",
                  "src": "694:68:22"
                }
              ]
            },
            "documentation": null,
            "id": 10023,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnAccessTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10009,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10008,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 10023,
                  "src": "658:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10007,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "657:19:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10010,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:0:22"
            },
            "scope": 10145,
            "src": "632:135:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10060,
              "nodeType": "Block",
              "src": "953:197:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10046,
                        "name": "_amountToBeRaised",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10027,
                        "src": "1011:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10047,
                        "name": "_managerPercentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10029,
                        "src": "1030:18:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10048,
                        "name": "_amountToEscrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10031,
                        "src": "1050:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10049,
                        "name": "_installerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10033,
                        "src": "1067:12:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10050,
                        "name": "_assetType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10035,
                        "src": "1081:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10051,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21199,
                          "src": "1093:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 10052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "number",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1093:12:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10053,
                        "name": "_ipfsHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10037,
                        "src": "1107:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "41737365744372656174696f6e",
                                "id": 10042,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "984:15:22",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ffcdf6b768f6be5e80c7163310296ff42b96f635b9edda11bfc77ce9bd8adb75",
                                  "typeString": "literal_string \"AssetCreation\""
                                },
                                "value": "AssetCreation"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ffcdf6b768f6be5e80c7163310296ff42b96f635b9edda11bfc77ce9bd8adb75",
                                  "typeString": "literal_string \"AssetCreation\""
                                }
                              ],
                              "id": 10041,
                              "name": "getAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10124,
                              "src": "973:10:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$returns$_t_address_$",
                                "typeString": "function (string memory) view returns (address)"
                              }
                            },
                            "id": 10043,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "973:27:22",
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
                          "id": 10040,
                          "name": "AssetCreation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3903,
                          "src": "959:13:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_AssetCreation_$3903_$",
                            "typeString": "type(contract AssetCreation)"
                          }
                        },
                        "id": 10044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "959:42:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_AssetCreation_$3903",
                          "typeString": "contract AssetCreation"
                        }
                      },
                      "id": 10045,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "newAsset",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3419,
                      "src": "959:51:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_bytes32_$_t_bytes32_$_t_uint256_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (uint256,uint256,uint256,bytes32,bytes32,uint256,bytes32) external returns (bool)"
                      }
                    },
                    "id": 10054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "959:158:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10055,
                  "nodeType": "ExpressionStatement",
                  "src": "959:158:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10056,
                      "name": "assetFunded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9994,
                      "src": "1123:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10057,
                      "name": "_assetID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10025,
                      "src": "1137:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1123:22:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10059,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:22:22"
                }
              ]
            },
            "documentation": null,
            "id": 10061,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10025,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "792:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10024,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "792:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10027,
                  "name": "_amountToBeRaised",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "810:22:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10026,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:4:22",
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
                  "id": 10029,
                  "name": "_managerPercentage",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "834:23:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10028,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:4:22",
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
                  "id": 10031,
                  "name": "_amountToEscrow",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "859:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10030,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:4:22",
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
                  "id": 10033,
                  "name": "_installerID",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "881:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10032,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10035,
                  "name": "_assetType",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "903:18:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10034,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10037,
                  "name": "_ipfsHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "923:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10036,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "791:150:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10039,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "953:0:22"
            },
            "scope": 10145,
            "src": "771:379:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10080,
              "nodeType": "Block",
              "src": "1212:77:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10077,
                        "name": "_assetID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10063,
                        "src": "1275:8:22",
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
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10075,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10065,
                          "src": "1266:7:22",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "46756e64696e67487562",
                                    "id": 10070,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1240:12:22",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_a73ae0c353907b722a77b00d88cbda721e65682aa4089534decd4d0b9abc6bb0",
                                      "typeString": "literal_string \"FundingHub\""
                                    },
                                    "value": "FundingHub"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_a73ae0c353907b722a77b00d88cbda721e65682aa4089534decd4d0b9abc6bb0",
                                      "typeString": "literal_string \"FundingHub\""
                                    }
                                  ],
                                  "id": 10069,
                                  "name": "getAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10124,
                                  "src": "1229:10:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$returns$_t_address_$",
                                    "typeString": "function (string memory) view returns (address)"
                                  }
                                },
                                "id": 10071,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1229:24:22",
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
                              "id": 10068,
                              "name": "FundingHub",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7572,
                              "src": "1218:10:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FundingHub_$7572_$",
                                "typeString": "type(contract FundingHub)"
                              }
                            },
                            "id": 10072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1218:36:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_FundingHub_$7572",
                              "typeString": "contract FundingHub"
                            }
                          },
                          "id": 10073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "fund",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6948,
                          "src": "1218:41:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_payable$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) payable external returns (bool)"
                          }
                        },
                        "id": 10074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1218:47:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$_t_bytes32_$returns$_t_bool_$value_$",
                          "typeString": "function (uint256) returns (function (bytes32) payable external returns (bool))"
                        }
                      },
                      "id": 10076,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1218:56:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_bytes32_$returns$_t_bool_$value",
                        "typeString": "function (bytes32) payable external returns (bool)"
                      }
                    },
                    "id": 10078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1218:66:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10079,
                  "nodeType": "ExpressionStatement",
                  "src": "1218:66:22"
                }
              ]
            },
            "documentation": null,
            "id": 10081,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "fund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10063,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 10081,
                  "src": "1169:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10062,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1169:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10065,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10081,
                  "src": "1187:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10064,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1187:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1168:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10067,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1212:0:22"
            },
            "scope": 10145,
            "src": "1155:134:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10093,
              "nodeType": "Block",
              "src": "1332:66:22",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10085,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21209,
                          "src": "1354:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10086,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1354:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10087,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21209,
                          "src": "1366:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1366:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10089,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21199,
                          "src": "1377:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 10090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1377:15:22",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10084,
                      "name": "logpayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10144,
                      "src": "1343:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 10091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1343:50:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10092,
                  "nodeType": "EmitStatement",
                  "src": "1338:55:22"
                }
              ]
            },
            "documentation": null,
            "id": 10094,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1310:2:22"
            },
            "payable": true,
            "returnParameters": {
              "id": 10083,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1332:0:22"
            },
            "scope": 10145,
            "src": "1294:104:22",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10104,
              "nodeType": "Block",
              "src": "1457:39:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10100,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21286,
                          "src": "1478:4:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Test_$10145",
                            "typeString": "contract Test"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Test_$10145",
                            "typeString": "contract Test"
                          }
                        ],
                        "id": 10099,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1470:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 10101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1470:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 10102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1470:21:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10098,
                  "id": 10103,
                  "nodeType": "Return",
                  "src": "1463:28:22"
                }
              ]
            },
            "documentation": null,
            "id": 10105,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10095,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1421:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10097,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10105,
                  "src": "1451:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10096,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:6:22"
            },
            "scope": 10145,
            "src": "1402:94:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10123,
              "nodeType": "Block",
              "src": "1570:89:22",
              "statements": [
                {
                  "expression": {
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
                                "hexValue": "636f6e7472616374",
                                "id": 10117,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1634:10:22",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                  "typeString": "literal_string \"contract\""
                                },
                                "value": "contract"
                              },
                              {
                                "argumentTypes": null,
                                "id": 10118,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10107,
                                "src": "1646:5:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                  "typeString": "literal_string \"contract\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 10115,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "1617:3:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 10116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1617:16:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 10119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1617:35:22",
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
                          "id": 10114,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "1607:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 10120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1607:46:22",
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
                        "id": 10112,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9992,
                        "src": "1583:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 10113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6458,
                      "src": "1583:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 10121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1583:71:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 10111,
                  "id": 10122,
                  "nodeType": "Return",
                  "src": "1576:78:22"
                }
              ]
            },
            "documentation": null,
            "id": 10124,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10107,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 10124,
                  "src": "1520:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10106,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1520:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1519:14:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10110,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10124,
                  "src": "1561:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1561:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1560:9:22"
            },
            "scope": 10145,
            "src": "1500:159:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10135,
              "nodeType": "Block",
              "src": "1720:53:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10132,
                        "name": "assetFunded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9994,
                        "src": "1756:11:22",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10128,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21209,
                              "src": "1737:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1737:10:22",
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
                          "id": 10127,
                          "name": "FundingHub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7572,
                          "src": "1726:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FundingHub_$7572_$",
                            "typeString": "type(contract FundingHub)"
                          }
                        },
                        "id": 10130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1726:22:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_FundingHub_$7572",
                          "typeString": "contract FundingHub"
                        }
                      },
                      "id": 10131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "refund",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7200,
                      "src": "1726:29:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32) external returns (bool)"
                      }
                    },
                    "id": 10133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1726:42:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10134,
                  "nodeType": "ExpressionStatement",
                  "src": "1726:42:22"
                }
              ]
            },
            "documentation": null,
            "id": 10136,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10125,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1698:2:22"
            },
            "payable": true,
            "returnParameters": {
              "id": 10126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1720:0:22"
            },
            "scope": 10145,
            "src": "1690:83:22",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10144,
            "name": "logpayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10138,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10144,
                  "src": "1795:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1795:7:22",
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
                  "id": 10140,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10144,
                  "src": "1812:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10139,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1812:4:22",
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
                  "id": 10142,
                  "indexed": false,
                  "name": "_timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 10144,
                  "src": "1826:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1826:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1794:48:22"
            },
            "src": "1778:65:22"
          }
        ],
        "scope": 10146,
        "src": "424:1421:22"
      }
    ],
    "src": "0:1846:22"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Test.sol",
    "exportedSymbols": {
      "Test": [
        10145
      ]
    },
    "id": 10146,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9977,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:22"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Database.sol",
        "file": "./Database.sol",
        "id": 9978,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 6819,
        "src": "25:24:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Asset.sol",
        "file": "./Asset.sol",
        "id": 9979,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 2285,
        "src": "50:21:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/AssetCreation.sol",
        "file": "./AssetCreation.sol",
        "id": 9980,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 3904,
        "src": "72:29:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/ContractManager.sol",
        "file": "./ContractManager.sol",
        "id": 9981,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 6445,
        "src": "102:31:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/FundingHub.sol",
        "file": "./FundingHub.sol",
        "id": 9982,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 7573,
        "src": "134:26:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/InitialVariables.sol",
        "file": "./InitialVariables.sol",
        "id": 9983,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 8441,
        "src": "161:32:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/AssetExchange.sol",
        "file": "./AssetExchange.sol",
        "id": 9984,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 4990,
        "src": "194:29:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/MyBitToken.sol",
        "file": "./MyBitToken.sol",
        "id": 9985,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 9005,
        "src": "224:26:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/AssetManager.sol",
        "file": "./AssetManager.sol",
        "id": 9986,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 5548,
        "src": "251:28:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Owned.sol",
        "file": "./Owned.sol",
        "id": 9987,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 9276,
        "src": "280:21:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/TokenBurn.sol",
        "file": "./TokenBurn.sol",
        "id": 9988,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 10500,
        "src": "302:25:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/TokenFaucet.sol",
        "file": "./TokenFaucet.sol",
        "id": 9989,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 11228,
        "src": "328:27:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/UserAccess.sol",
        "file": "./UserAccess.sol",
        "id": 9990,
        "nodeType": "ImportDirective",
        "scope": 10146,
        "sourceUnit": 11461,
        "src": "356:26:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10145,
        "linearizedBaseContracts": [
          10145
        ],
        "name": "Test",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9992,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 10145,
            "src": "444:24:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$6818",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 9991,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6818,
              "src": "444:8:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$6818",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9994,
            "name": "assetFunded",
            "nodeType": "VariableDeclaration",
            "scope": 10145,
            "src": "473:26:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 9993,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "473:7:22",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10005,
              "nodeType": "Block",
              "src": "585:41:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10003,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9999,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9992,
                      "src": "591:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6818",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10001,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9996,
                          "src": "611:9:22",
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
                        "id": 10000,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6818,
                        "src": "602:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$6818_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 10002,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "602:19:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6818",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "591:30:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$6818",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 10004,
                  "nodeType": "ExpressionStatement",
                  "src": "591:30:22"
                }
              ]
            },
            "documentation": null,
            "id": 10006,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9996,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 10006,
                  "src": "557:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "556:19:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 9998,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "585:0:22"
            },
            "scope": 10145,
            "src": "545:81:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10022,
              "nodeType": "Block",
              "src": "688:79:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 10018,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10008,
                            "src": "748:12:22",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "546f6b656e4275726e",
                                    "id": 10014,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "723:11:22",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_eddbf77829b20ee2c797c2ce235d2d6ef05642e8b5025f302ef0382d5fc723df",
                                      "typeString": "literal_string \"TokenBurn\""
                                    },
                                    "value": "TokenBurn"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_eddbf77829b20ee2c797c2ce235d2d6ef05642e8b5025f302ef0382d5fc723df",
                                      "typeString": "literal_string \"TokenBurn\""
                                    }
                                  ],
                                  "id": 10013,
                                  "name": "getAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10124,
                                  "src": "712:10:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$returns$_t_address_$",
                                    "typeString": "function (string memory) view returns (address)"
                                  }
                                },
                                "id": 10015,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "712:23:22",
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
                              "id": 10012,
                              "name": "TokenBurn",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10499,
                              "src": "702:9:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_TokenBurn_$10499_$",
                                "typeString": "type(contract TokenBurn)"
                              }
                            },
                            "id": 10016,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "702:34:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenBurn_$10499",
                              "typeString": "contract TokenBurn"
                            }
                          },
                          "id": 10017,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burnTokens",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10258,
                          "src": "702:45:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) external returns (bool)"
                          }
                        },
                        "id": 10019,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "702:59:22",
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
                      "id": 10011,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "694:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10020,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "694:68:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10021,
                  "nodeType": "ExpressionStatement",
                  "src": "694:68:22"
                }
              ]
            },
            "documentation": null,
            "id": 10023,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnAccessTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10009,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10008,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 10023,
                  "src": "658:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10007,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "657:19:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10010,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:0:22"
            },
            "scope": 10145,
            "src": "632:135:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10060,
              "nodeType": "Block",
              "src": "953:197:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10046,
                        "name": "_amountToBeRaised",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10027,
                        "src": "1011:17:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10047,
                        "name": "_managerPercentage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10029,
                        "src": "1030:18:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10048,
                        "name": "_amountToEscrow",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10031,
                        "src": "1050:15:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10049,
                        "name": "_installerID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10033,
                        "src": "1067:12:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10050,
                        "name": "_assetType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10035,
                        "src": "1081:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10051,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21199,
                          "src": "1093:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 10052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "number",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1093:12:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10053,
                        "name": "_ipfsHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10037,
                        "src": "1107:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "41737365744372656174696f6e",
                                "id": 10042,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "984:15:22",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ffcdf6b768f6be5e80c7163310296ff42b96f635b9edda11bfc77ce9bd8adb75",
                                  "typeString": "literal_string \"AssetCreation\""
                                },
                                "value": "AssetCreation"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ffcdf6b768f6be5e80c7163310296ff42b96f635b9edda11bfc77ce9bd8adb75",
                                  "typeString": "literal_string \"AssetCreation\""
                                }
                              ],
                              "id": 10041,
                              "name": "getAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10124,
                              "src": "973:10:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$returns$_t_address_$",
                                "typeString": "function (string memory) view returns (address)"
                              }
                            },
                            "id": 10043,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "973:27:22",
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
                          "id": 10040,
                          "name": "AssetCreation",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3903,
                          "src": "959:13:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_AssetCreation_$3903_$",
                            "typeString": "type(contract AssetCreation)"
                          }
                        },
                        "id": 10044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "959:42:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_AssetCreation_$3903",
                          "typeString": "contract AssetCreation"
                        }
                      },
                      "id": 10045,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "newAsset",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3419,
                      "src": "959:51:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_bytes32_$_t_bytes32_$_t_uint256_$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (uint256,uint256,uint256,bytes32,bytes32,uint256,bytes32) external returns (bool)"
                      }
                    },
                    "id": 10054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "959:158:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10055,
                  "nodeType": "ExpressionStatement",
                  "src": "959:158:22"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10056,
                      "name": "assetFunded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9994,
                      "src": "1123:11:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10057,
                      "name": "_assetID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10025,
                      "src": "1137:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1123:22:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10059,
                  "nodeType": "ExpressionStatement",
                  "src": "1123:22:22"
                }
              ]
            },
            "documentation": null,
            "id": 10061,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10025,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "792:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10024,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "792:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10027,
                  "name": "_amountToBeRaised",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "810:22:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10026,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:4:22",
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
                  "id": 10029,
                  "name": "_managerPercentage",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "834:23:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10028,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:4:22",
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
                  "id": 10031,
                  "name": "_amountToEscrow",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "859:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10030,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:4:22",
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
                  "id": 10033,
                  "name": "_installerID",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "881:20:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10032,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "881:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10035,
                  "name": "_assetType",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "903:18:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10034,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "903:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10037,
                  "name": "_ipfsHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 10061,
                  "src": "923:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10036,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "923:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "791:150:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10039,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "953:0:22"
            },
            "scope": 10145,
            "src": "771:379:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10080,
              "nodeType": "Block",
              "src": "1212:77:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10077,
                        "name": "_assetID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10063,
                        "src": "1275:8:22",
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
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10075,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10065,
                          "src": "1266:7:22",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "46756e64696e67487562",
                                    "id": 10070,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1240:12:22",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_a73ae0c353907b722a77b00d88cbda721e65682aa4089534decd4d0b9abc6bb0",
                                      "typeString": "literal_string \"FundingHub\""
                                    },
                                    "value": "FundingHub"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_a73ae0c353907b722a77b00d88cbda721e65682aa4089534decd4d0b9abc6bb0",
                                      "typeString": "literal_string \"FundingHub\""
                                    }
                                  ],
                                  "id": 10069,
                                  "name": "getAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10124,
                                  "src": "1229:10:22",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$returns$_t_address_$",
                                    "typeString": "function (string memory) view returns (address)"
                                  }
                                },
                                "id": 10071,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1229:24:22",
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
                              "id": 10068,
                              "name": "FundingHub",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7572,
                              "src": "1218:10:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_FundingHub_$7572_$",
                                "typeString": "type(contract FundingHub)"
                              }
                            },
                            "id": 10072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1218:36:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_FundingHub_$7572",
                              "typeString": "contract FundingHub"
                            }
                          },
                          "id": 10073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "fund",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6948,
                          "src": "1218:41:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_payable$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) payable external returns (bool)"
                          }
                        },
                        "id": 10074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1218:47:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$_t_bytes32_$returns$_t_bool_$value_$",
                          "typeString": "function (uint256) returns (function (bytes32) payable external returns (bool))"
                        }
                      },
                      "id": 10076,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1218:56:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_bytes32_$returns$_t_bool_$value",
                        "typeString": "function (bytes32) payable external returns (bool)"
                      }
                    },
                    "id": 10078,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1218:66:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10079,
                  "nodeType": "ExpressionStatement",
                  "src": "1218:66:22"
                }
              ]
            },
            "documentation": null,
            "id": 10081,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "fund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10063,
                  "name": "_assetID",
                  "nodeType": "VariableDeclaration",
                  "scope": 10081,
                  "src": "1169:16:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10062,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1169:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10065,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10081,
                  "src": "1187:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10064,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1187:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1168:32:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10067,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1212:0:22"
            },
            "scope": 10145,
            "src": "1155:134:22",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10093,
              "nodeType": "Block",
              "src": "1332:66:22",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10085,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21209,
                          "src": "1354:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10086,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1354:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10087,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21209,
                          "src": "1366:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10088,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1366:9:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10089,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21199,
                          "src": "1377:5:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 10090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1377:15:22",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10084,
                      "name": "logpayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10144,
                      "src": "1343:10:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 10091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1343:50:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10092,
                  "nodeType": "EmitStatement",
                  "src": "1338:55:22"
                }
              ]
            },
            "documentation": null,
            "id": 10094,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1310:2:22"
            },
            "payable": true,
            "returnParameters": {
              "id": 10083,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1332:0:22"
            },
            "scope": 10145,
            "src": "1294:104:22",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10104,
              "nodeType": "Block",
              "src": "1457:39:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10100,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21286,
                          "src": "1478:4:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Test_$10145",
                            "typeString": "contract Test"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Test_$10145",
                            "typeString": "contract Test"
                          }
                        ],
                        "id": 10099,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1470:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 10101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1470:13:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 10102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1470:21:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 10098,
                  "id": 10103,
                  "nodeType": "Return",
                  "src": "1463:28:22"
                }
              ]
            },
            "documentation": null,
            "id": 10105,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10095,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1421:2:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10098,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10097,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10105,
                  "src": "1451:4:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10096,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1450:6:22"
            },
            "scope": 10145,
            "src": "1402:94:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10123,
              "nodeType": "Block",
              "src": "1570:89:22",
              "statements": [
                {
                  "expression": {
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
                                "hexValue": "636f6e7472616374",
                                "id": 10117,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1634:10:22",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                  "typeString": "literal_string \"contract\""
                                },
                                "value": "contract"
                              },
                              {
                                "argumentTypes": null,
                                "id": 10118,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10107,
                                "src": "1646:5:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                  "typeString": "literal_string \"contract\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 10115,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "1617:3:22",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 10116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1617:16:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 10119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1617:35:22",
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
                          "id": 10114,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "1607:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 10120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1607:46:22",
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
                        "id": 10112,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9992,
                        "src": "1583:8:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 10113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6458,
                      "src": "1583:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 10121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1583:71:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 10111,
                  "id": 10122,
                  "nodeType": "Return",
                  "src": "1576:78:22"
                }
              ]
            },
            "documentation": null,
            "id": 10124,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10107,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 10124,
                  "src": "1520:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10106,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1520:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1519:14:22"
            },
            "payable": false,
            "returnParameters": {
              "id": 10111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10110,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10124,
                  "src": "1561:7:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1561:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1560:9:22"
            },
            "scope": 10145,
            "src": "1500:159:22",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10135,
              "nodeType": "Block",
              "src": "1720:53:22",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10132,
                        "name": "assetFunded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9994,
                        "src": "1756:11:22",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10128,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21209,
                              "src": "1737:3:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1737:10:22",
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
                          "id": 10127,
                          "name": "FundingHub",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7572,
                          "src": "1726:10:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_FundingHub_$7572_$",
                            "typeString": "type(contract FundingHub)"
                          }
                        },
                        "id": 10130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1726:22:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_FundingHub_$7572",
                          "typeString": "contract FundingHub"
                        }
                      },
                      "id": 10131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "refund",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7200,
                      "src": "1726:29:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$_t_bool_$",
                        "typeString": "function (bytes32) external returns (bool)"
                      }
                    },
                    "id": 10133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1726:42:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10134,
                  "nodeType": "ExpressionStatement",
                  "src": "1726:42:22"
                }
              ]
            },
            "documentation": null,
            "id": 10136,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10125,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1698:2:22"
            },
            "payable": true,
            "returnParameters": {
              "id": 10126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1720:0:22"
            },
            "scope": 10145,
            "src": "1690:83:22",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10144,
            "name": "logpayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10138,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10144,
                  "src": "1795:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10137,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1795:7:22",
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
                  "id": 10140,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10144,
                  "src": "1812:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10139,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1812:4:22",
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
                  "id": 10142,
                  "indexed": false,
                  "name": "_timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 10144,
                  "src": "1826:15:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1826:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1794:48:22"
            },
            "src": "1778:65:22"
          }
        ],
        "scope": 10146,
        "src": "424:1421:22"
      }
    ],
    "src": "0:1846:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-08T14:16:35.221Z"
}