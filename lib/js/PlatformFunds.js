"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var PlatformFunds = exports.PlatformFunds = 
{
  "contractName": "PlatformFunds",
  "abi": [
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_platformWallet",
          "type": "address"
        }
      ],
      "name": "LogPlatformWallet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_platformToken",
          "type": "address"
        }
      ],
      "name": "LogPlatformToken",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_walletAddress",
          "type": "address"
        }
      ],
      "name": "setPlatformWallet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "setPlatformToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160208061096783398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506108e4806100836000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630255a03b1461005c578063713b563f1461009f5780638831e9cf146100f6575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610139565b005b3480156100ab57600080fd5b506100b46104e6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010257600080fd5b50610137600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061050b565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561022e5780518252602082019150602081019050602083039250610209565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156102b557600080fd5b505af11580156102c9573d6000803e3d6000fd5b505050506040513d60208110156102df57600080fd5b810190808051906020019092919050505015156102fb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca446dd960405160200180807f706c6174666f726d546f6b656e00000000000000000000000000000000000000815250600d0190506040516020818303038152906040526040518082805190602001908083835b6020831015156103ad5780518252602082019150602081019050602083039250610388565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15801561046857600080fd5b505af115801561047c573d6000803e3d6000fd5b505050507fb73618106854bdec9267c932f32172eea0a851bd78628694c8873e06e0416a1a81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561060057805182526020820191506020810190506020830392506105db565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561068757600080fd5b505af115801561069b573d6000803e3d6000fd5b505050506040513d60208110156106b157600080fd5b810190808051906020019092919050505015156106cd57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca446dd960405160200180807f706c6174666f726d57616c6c6574000000000000000000000000000000000000815250600e0190506040516020818303038152906040526040518082805190602001908083835b60208310151561077f578051825260208201915060208101905060208303925061075a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15801561083a57600080fd5b505af115801561084e573d6000803e3d6000fd5b505050507f2cf7d2fa38a1b102a5fdbf80574da0b82226b31fec01f9675edaf4756a8db24781604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505600a165627a7a72305820524fece9ede4d6d5e5cbc4e0e444681bce3042024fc3aee9b35f3316865440480029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630255a03b1461005c578063713b563f1461009f5780638831e9cf146100f6575b600080fd5b34801561006857600080fd5b5061009d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610139565b005b3480156100ab57600080fd5b506100b46104e6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010257600080fd5b50610137600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061050b565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561022e5780518252602082019150602081019050602083039250610209565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156102b557600080fd5b505af11580156102c9573d6000803e3d6000fd5b505050506040513d60208110156102df57600080fd5b810190808051906020019092919050505015156102fb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca446dd960405160200180807f706c6174666f726d546f6b656e00000000000000000000000000000000000000815250600d0190506040516020818303038152906040526040518082805190602001908083835b6020831015156103ad5780518252602082019150602081019050602083039250610388565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15801561046857600080fd5b505af115801561047c573d6000803e3d6000fd5b505050507fb73618106854bdec9267c932f32172eea0a851bd78628694c8873e06e0416a1a81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561060057805182526020820191506020810190506020830392506105db565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561068757600080fd5b505af115801561069b573d6000803e3d6000fd5b505050506040513d60208110156106b157600080fd5b810190808051906020019092919050505015156106cd57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca446dd960405160200180807f706c6174666f726d57616c6c6574000000000000000000000000000000000000815250600e0190506040516020818303038152906040526040518082805190602001908083835b60208310151561077f578051825260208201915060208101905060208303925061075a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15801561083a57600080fd5b505af115801561084e573d6000803e3d6000fd5b505050507f2cf7d2fa38a1b102a5fdbf80574da0b82226b31fec01f9675edaf4756a8db24781604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505600a165627a7a72305820524fece9ede4d6d5e5cbc4e0e444681bce3042024fc3aee9b35f3316865440480029",
  "sourceMap": "61:1824:14:-;;;151:81;8:9:-1;5:2;;;30:1;27;20:12;5:2;151:81:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;217:9;197:8;;:30;;;;;;;;;;;;;;;;;;151:81;61:1824;;;;;;",
  "deployedSourceMap": "61:1824:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;601:205;;8:9:-1;5:2;;;30:1;27;20:12;5:2;601:205:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;89:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;89:24:14;;;;;;;;;;;;;;;;;;;;;;;;;;;373:211;;8:9:-1;5:2;;;30:1;27;20:12;5:2;373:211:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;601:205;1290:8;;;;;;;;;;;:20;;;1347:10;1321:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1321:37:14;;;1311:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1311:48:14;;;;;;;;;;;;;;;;1290:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1290:70:14;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1290:70:14;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1290:70:14;;;;;;;;;;;;;;;;1282:79;;;;;;;;679:8;;;;;;;;;;;:19;;;709:33;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;709:33:14;;;699:44;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;699:44:14;;;;;;;;;;;;;;;;745:13;679:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;679:80:14;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;679:80:14;;;;770:31;787:13;770:31;;;;;;;;;;;;;;;;;;;;;;601:205;:::o;89:24::-;;;;;;;;;;;;;:::o;373:211::-;1290:8;;;;;;;;;;;:20;;;1347:10;1321:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1321:37:14;;;1311:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1311:48:14;;;;;;;;;;;;;;;;1290:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1290:70:14;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1290:70:14;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1290:70:14;;;;;;;;;;;;;;;;1282:79;;;;;;;;453:8;;;;;;;;;;;:19;;;483:34;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;483:34:14;;;473:45;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;473:45:14;;;;;;;;;;;;;;;;520:14;453:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;453:82:14;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;453:82:14;;;;546:33;564:14;546:33;;;;;;;;;;;;;;;;;;;;;;373:211;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../database/Database.sol';\n\ncontract PlatformFunds {\n\n  Database public database;\n\n  // @notice initialize database\n  constructor(address _database)\n  public {\n    database = Database(_database);\n  }\n\n  // @notice owners must set the wallet to receive payments here before initiating crowdsale\n  // @dev will overwrite old wallet address\n  function setPlatformWallet(address _walletAddress)\n  external\n  onlyOwner {\n    database.setAddress(keccak256(abi.encodePacked(\"platformWallet\")), _walletAddress);\n    emit LogPlatformWallet(_walletAddress);\n  }\n\n  // @notice\n  function setPlatformToken(address _tokenAddress)\n  external\n  onlyOwner {\n    database.setAddress(keccak256(abi.encodePacked(\"platformToken\")), _tokenAddress);\n    emit LogPlatformToken(_tokenAddress);\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                                Modifiers                                                                     //\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  // @notice Sender must be a registered owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                                Events                                                                        //\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n\n  event LogPlatformWallet(address _platformWallet);\n  event LogPlatformToken(address _platformToken);\n\n\n\n\n\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/PlatformFunds.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/PlatformFunds.sol",
    "exportedSymbols": {
      "PlatformFunds": [
        5468
      ]
    },
    "id": 5469,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5378,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:14"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 5379,
        "nodeType": "ImportDirective",
        "scope": 5469,
        "sourceUnit": 4022,
        "src": "25:34:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5468,
        "linearizedBaseContracts": [
          5468
        ],
        "name": "PlatformFunds",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5381,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 5468,
            "src": "89:24:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4021",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 5380,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4021,
              "src": "89:8:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4021",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5392,
              "nodeType": "Block",
              "src": "191:41:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5386,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5381,
                      "src": "197:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4021",
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
                          "id": 5388,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5383,
                          "src": "217:9:14",
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
                        "id": 5387,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4021,
                        "src": "208:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$4021_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 5389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "208:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4021",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "197:30:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$4021",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 5391,
                  "nodeType": "ExpressionStatement",
                  "src": "197:30:14"
                }
              ]
            },
            "documentation": null,
            "id": 5393,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5383,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 5393,
                  "src": "163:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5382,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "163:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "162:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5385,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "191:0:14"
            },
            "scope": 5468,
            "src": "151:81:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5416,
              "nodeType": "Block",
              "src": "447:137:14",
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
                                "hexValue": "706c6174666f726d57616c6c6574",
                                "id": 5406,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "500:16:14",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_eedee2ac00ffb6669070d748c5b9ac59b5d647f8d61b17c0e8b07efca76fb88a",
                                  "typeString": "literal_string \"platformWallet\""
                                },
                                "value": "platformWallet"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_eedee2ac00ffb6669070d748c5b9ac59b5d647f8d61b17c0e8b07efca76fb88a",
                                  "typeString": "literal_string \"platformWallet\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5404,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "483:3:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 5405,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "483:16:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 5407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "483:34:14",
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
                          "id": 5403,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "473:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 5408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "473:45:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5409,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5395,
                        "src": "520:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5400,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5381,
                        "src": "453:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4021",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 5402,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3810,
                      "src": "453:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 5410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "453:82:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5411,
                  "nodeType": "ExpressionStatement",
                  "src": "453:82:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5413,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5395,
                        "src": "564:14:14",
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
                      "id": 5412,
                      "name": "LogPlatformWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5463,
                      "src": "546:17:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "546:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5415,
                  "nodeType": "EmitStatement",
                  "src": "541:38:14"
                }
              ]
            },
            "documentation": null,
            "id": 5417,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5398,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5397,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5459,
                  "src": "437:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "437:9:14"
              }
            ],
            "name": "setPlatformWallet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5395,
                  "name": "_walletAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5417,
                  "src": "400:22:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "399:24:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "447:0:14"
            },
            "scope": 5468,
            "src": "373:211:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 5440,
              "nodeType": "Block",
              "src": "673:133:14",
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
                                "hexValue": "706c6174666f726d546f6b656e",
                                "id": 5430,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "726:15:14",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                  "typeString": "literal_string \"platformToken\""
                                },
                                "value": "platformToken"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                  "typeString": "literal_string \"platformToken\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5428,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "709:3:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 5429,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "709:16:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 5431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "709:33:14",
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
                          "id": 5427,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "699:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 5432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "699:44:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5433,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5419,
                        "src": "745:13:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5424,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5381,
                        "src": "679:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4021",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 5426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3810,
                      "src": "679:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 5434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "679:80:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5435,
                  "nodeType": "ExpressionStatement",
                  "src": "679:80:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5437,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5419,
                        "src": "787:13:14",
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
                      "id": 5436,
                      "name": "LogPlatformToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5467,
                      "src": "770:16:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "770:31:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5439,
                  "nodeType": "EmitStatement",
                  "src": "765:36:14"
                }
              ]
            },
            "documentation": null,
            "id": 5441,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5422,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5421,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5459,
                  "src": "663:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "663:9:14"
              }
            ],
            "name": "setPlatformToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5419,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5441,
                  "src": "627:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5418,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "627:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "626:23:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5423,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "673:0:14"
            },
            "scope": 5468,
            "src": "601:205:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 5458,
              "nodeType": "Block",
              "src": "1276:97:14",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 5449,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1338:7:14",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 5450,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 12464,
                                      "src": "1347:3:14",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 5451,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1347:10:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5447,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12451,
                                    "src": "1321:3:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 5448,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1321:16:14",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 5452,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1321:37:14",
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
                              "id": 5446,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12458,
                              "src": "1311:9:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 5453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1311:48:14",
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
                            "id": 5444,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5381,
                            "src": "1290:8:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4021",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 5445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3661,
                          "src": "1290:20:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 5454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1290:70:14",
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
                      "id": 5443,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "1282:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1282:79:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5456,
                  "nodeType": "ExpressionStatement",
                  "src": "1282:79:14"
                },
                {
                  "id": 5457,
                  "nodeType": "PlaceholderStatement",
                  "src": "1367:1:14"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 5459,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 5442,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1276:0:14"
            },
            "src": "1257:116:14",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 5463,
            "name": "LogPlatformWallet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5461,
                  "indexed": false,
                  "name": "_platformWallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 5463,
                  "src": "1802:23:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5460,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1802:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1801:25:14"
            },
            "src": "1778:49:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5467,
            "name": "LogPlatformToken",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5465,
                  "indexed": false,
                  "name": "_platformToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 5467,
                  "src": "1853:22:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1852:24:14"
            },
            "src": "1830:47:14"
          }
        ],
        "scope": 5469,
        "src": "61:1824:14"
      }
    ],
    "src": "0:1886:14"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/PlatformFunds.sol",
    "exportedSymbols": {
      "PlatformFunds": [
        5468
      ]
    },
    "id": 5469,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5378,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:14"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 5379,
        "nodeType": "ImportDirective",
        "scope": 5469,
        "sourceUnit": 4022,
        "src": "25:34:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5468,
        "linearizedBaseContracts": [
          5468
        ],
        "name": "PlatformFunds",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5381,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 5468,
            "src": "89:24:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4021",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 5380,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4021,
              "src": "89:8:14",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4021",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5392,
              "nodeType": "Block",
              "src": "191:41:14",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5390,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5386,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5381,
                      "src": "197:8:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4021",
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
                          "id": 5388,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5383,
                          "src": "217:9:14",
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
                        "id": 5387,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4021,
                        "src": "208:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$4021_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 5389,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "208:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4021",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "197:30:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$4021",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 5391,
                  "nodeType": "ExpressionStatement",
                  "src": "197:30:14"
                }
              ]
            },
            "documentation": null,
            "id": 5393,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5383,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 5393,
                  "src": "163:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5382,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "163:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "162:19:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5385,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "191:0:14"
            },
            "scope": 5468,
            "src": "151:81:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5416,
              "nodeType": "Block",
              "src": "447:137:14",
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
                                "hexValue": "706c6174666f726d57616c6c6574",
                                "id": 5406,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "500:16:14",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_eedee2ac00ffb6669070d748c5b9ac59b5d647f8d61b17c0e8b07efca76fb88a",
                                  "typeString": "literal_string \"platformWallet\""
                                },
                                "value": "platformWallet"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_eedee2ac00ffb6669070d748c5b9ac59b5d647f8d61b17c0e8b07efca76fb88a",
                                  "typeString": "literal_string \"platformWallet\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5404,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "483:3:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 5405,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "483:16:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 5407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "483:34:14",
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
                          "id": 5403,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "473:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 5408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "473:45:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5409,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5395,
                        "src": "520:14:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5400,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5381,
                        "src": "453:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4021",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 5402,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3810,
                      "src": "453:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 5410,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "453:82:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5411,
                  "nodeType": "ExpressionStatement",
                  "src": "453:82:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5413,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5395,
                        "src": "564:14:14",
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
                      "id": 5412,
                      "name": "LogPlatformWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5463,
                      "src": "546:17:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5414,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "546:33:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5415,
                  "nodeType": "EmitStatement",
                  "src": "541:38:14"
                }
              ]
            },
            "documentation": null,
            "id": 5417,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5398,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5397,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5459,
                  "src": "437:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "437:9:14"
              }
            ],
            "name": "setPlatformWallet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5395,
                  "name": "_walletAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5417,
                  "src": "400:22:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "399:24:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5399,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "447:0:14"
            },
            "scope": 5468,
            "src": "373:211:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 5440,
              "nodeType": "Block",
              "src": "673:133:14",
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
                                "hexValue": "706c6174666f726d546f6b656e",
                                "id": 5430,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "726:15:14",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                  "typeString": "literal_string \"platformToken\""
                                },
                                "value": "platformToken"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                  "typeString": "literal_string \"platformToken\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5428,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "709:3:14",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 5429,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "709:16:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 5431,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "709:33:14",
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
                          "id": 5427,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "699:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 5432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "699:44:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5433,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5419,
                        "src": "745:13:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5424,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5381,
                        "src": "679:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4021",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 5426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3810,
                      "src": "679:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 5434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "679:80:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5435,
                  "nodeType": "ExpressionStatement",
                  "src": "679:80:14"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5437,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5419,
                        "src": "787:13:14",
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
                      "id": 5436,
                      "name": "LogPlatformToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5467,
                      "src": "770:16:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "770:31:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5439,
                  "nodeType": "EmitStatement",
                  "src": "765:36:14"
                }
              ]
            },
            "documentation": null,
            "id": 5441,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5422,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5421,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5459,
                  "src": "663:9:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "663:9:14"
              }
            ],
            "name": "setPlatformToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5419,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5441,
                  "src": "627:21:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5418,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "627:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "626:23:14"
            },
            "payable": false,
            "returnParameters": {
              "id": 5423,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "673:0:14"
            },
            "scope": 5468,
            "src": "601:205:14",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 5458,
              "nodeType": "Block",
              "src": "1276:97:14",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 5449,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1338:7:14",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 5450,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 12464,
                                      "src": "1347:3:14",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 5451,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1347:10:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5447,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12451,
                                    "src": "1321:3:14",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 5448,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1321:16:14",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 5452,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1321:37:14",
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
                              "id": 5446,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12458,
                              "src": "1311:9:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 5453,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1311:48:14",
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
                            "id": 5444,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5381,
                            "src": "1290:8:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4021",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 5445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3661,
                          "src": "1290:20:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 5454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1290:70:14",
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
                      "id": 5443,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "1282:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1282:79:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5456,
                  "nodeType": "ExpressionStatement",
                  "src": "1282:79:14"
                },
                {
                  "id": 5457,
                  "nodeType": "PlaceholderStatement",
                  "src": "1367:1:14"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 5459,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 5442,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1276:0:14"
            },
            "src": "1257:116:14",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 5463,
            "name": "LogPlatformWallet",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5461,
                  "indexed": false,
                  "name": "_platformWallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 5463,
                  "src": "1802:23:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5460,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1802:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1801:25:14"
            },
            "src": "1778:49:14"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5467,
            "name": "LogPlatformToken",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5465,
                  "indexed": false,
                  "name": "_platformToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 5467,
                  "src": "1853:22:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5464,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1852:24:14"
            },
            "src": "1830:47:14"
          }
        ],
        "scope": 5469,
        "src": "61:1824:14"
      }
    ],
    "src": "0:1886:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T02:00:48.030Z"
}