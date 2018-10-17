"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TestBurner = exports.TestBurner = 
{
  "contractName": "TestBurner",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "burner",
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
      "constant": true,
      "inputs": [],
      "name": "amountBurnt",
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
      "inputs": [
        {
          "name": "_database",
          "type": "address"
        },
        {
          "name": "_burner",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnTokensManualFee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "burnTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMethodID",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516040806108a28339810180604052810190808051906020019092919080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506107d3806100cf6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308003f781461007d57806327810b6e146100945780635935914b146100eb57806366369c4014610118578063713b563f146101815780639b51d0a9146101d8575b600080fd5b34801561008957600080fd5b50610092610203565b005b3480156100a057600080fd5b506100a96105a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f757600080fd5b50610116600480360381019080803590602001909291905050506105c5565b005b34801561012457600080fd5b5061012d6106d2565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b34801561018d57600080fd5b5061019661077b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101e457600080fd5b506101ed6107a1565b6040518082815260200191505060405180910390f35b60008060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b60208310151561027b5780518252602082019150602081019050602083039250610256565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce833060405160200180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526004018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b6020831015156103be5780518252602082019150602081019050602083039250610399565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561044557600080fd5b505af1158015610459573d6000803e3d6000fd5b505050506040513d602081101561046f57600080fd5b810190808051906020019092919050505090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561054657600080fd5b505af115801561055a573d6000803e3d6000fd5b505050506040513d602081101561057057600080fd5b8101908080519060200190929190505050151561058c57600080fd5b806002600082825401925050819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561068957600080fd5b505af115801561069d573d6000803e3d6000fd5b505050506040513d60208110156106b357600080fd5b810190808051906020019092919050505015156106cf57600080fd5b50565b600060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b6020831015156107495780518252602082019150602081019050602083039250610724565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a723058205764386d999875c37ef03ef4546fc5a99d7e74d776a577fad24363d87a0290690029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308003f781461007d57806327810b6e146100945780635935914b146100eb57806366369c4014610118578063713b563f146101815780639b51d0a9146101d8575b600080fd5b34801561008957600080fd5b50610092610203565b005b3480156100a057600080fd5b506100a96105a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f757600080fd5b50610116600480360381019080803590602001909291905050506105c5565b005b34801561012457600080fd5b5061012d6106d2565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b34801561018d57600080fd5b5061019661077b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101e457600080fd5b506101ed6107a1565b6040518082815260200191505060405180910390f35b60008060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b60208310151561027b5780518252602082019150602081019050602083039250610256565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce833060405160200180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526004018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b6020831015156103be5780518252602082019150602081019050602083039250610399565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561044557600080fd5b505af1158015610459573d6000803e3d6000fd5b505050506040513d602081101561046f57600080fd5b810190808051906020019092919050505090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561054657600080fd5b505af115801561055a573d6000803e3d6000fd5b505050506040513d602081101561057057600080fd5b8101908080519060200190929190505050151561058c57600080fd5b806002600082825401925050819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac33836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561068957600080fd5b505af115801561069d573d6000803e3d6000fd5b505050506040513d60208110156106b357600080fd5b810190808051906020019092919050505015156106cf57600080fd5b50565b600060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b6020831015156107495780518252602082019150602081019050602083039250610724565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a723058205764386d999875c37ef03ef4546fc5a99d7e74d776a577fad24363d87a0290690029",
  "sourceMap": "98:831:35:-;;;209:133;8:9:-1;5:2;;;30:1;27;20:12;5:2;209:133:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;293:7;272:6;;:29;;;;;;;;;;;;;;;;;;327:9;307:8;;:30;;;;;;;;;;;;;;;;;;209:133;;98:831;;;;;;",
  "deployedSourceMap": "98:831:35:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;495:298;;8:9:-1;5:2;;;30:1;27;20:12;5:2;495:298:35;;;;;;123:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:25:35;;;;;;;;;;;;;;;;;;;;;;;;;;;346:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;346:106:35;;;;;;;;;;;;;;;;;;;;;;;;;;797:129;;8:9:-1;5:2;;;30:1;27;20:12;5:2;797:129:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;152:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;152:24:35;;;;;;;;;;;;;;;;;;;;;;;;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;;;;;;;;;;;;;;;;;;;;495:298;534:15;609:17;569:32;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;569:32:35;;;559:43;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;559:43:35;;;;;;;;;;;;;;;;534:69;;629:8;;;;;;;;;;;:20;;;677:8;695:4;660:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;660:41:35;;;650:52;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;650:52:35;;;;;;;;;;;;;;;;629:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;629:74:35;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;629:74:35;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;629:74:35;;;;;;;;;;;;;;;;609:94;;717:6;;;;;;;;;;;:11;;;729:10;741:12;717:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;717:37:35;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;717:37:35;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;717:37:35;;;;;;;;;;;;;;;;709:46;;;;;;;;776:12;761:11;;:27;;;;;;;;;;;495:298;;:::o;123:25::-;;;;;;;;;;;;;:::o;346:106::-;414:6;;;;;;;;;;;:11;;;426:10;438:7;414:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;414:32:35;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;414:32:35;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;414:32:35;;;;;;;;;;;;;;;;406:41;;;;;;;;346:106;:::o;797:129::-;849:6;887:32;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;887:32:35;;;877:43;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;877:43:35;;;;;;;;;;;;;;;;863:58;;797:129;:::o;152:24::-;;;;;;;;;;;;;:::o;181:23::-;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../access/ERC20Burner.sol'; \nimport '../database/Database.sol';\n\ncontract TestBurner {\n\n  ERC20Burner public burner;\n  Database public database;\n\n  uint public amountBurnt;\n\n  constructor(address _database, address _burner)\n  public {\n    burner = ERC20Burner(_burner);\n    database = Database(_database);\n  }\n\n  function burnTokensManualFee(uint _amount)\n  external {\n    require(burner.burn(msg.sender, _amount));\n  }\n\n  // Must set fee in ERC20Burner first\n  function burnTokens()\n  external {\n    bytes4 methodID = bytes4(keccak256(abi.encodePacked(\"burnTokens()\")));\n    uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked(methodID, address(this))));\n    require(burner.burn(msg.sender, amountToBurn));\n    amountBurnt += amountToBurn;\n  }\n\n  function getMethodID()\n  external\n  pure\n  returns (bytes4) {\n    return bytes4(keccak256(abi.encodePacked(\"burnTokens()\")));\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
    "exportedSymbols": {
      "TestBurner": [
        9836
      ]
    },
    "id": 9837,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9734,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:35"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
        "file": "../access/ERC20Burner.sol",
        "id": 9735,
        "nodeType": "ImportDirective",
        "scope": 9837,
        "sourceUnit": 407,
        "src": "25:35:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 9736,
        "nodeType": "ImportDirective",
        "scope": 9837,
        "sourceUnit": 4022,
        "src": "62:34:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9836,
        "linearizedBaseContracts": [
          9836
        ],
        "name": "TestBurner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9738,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 9836,
            "src": "123:25:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20Burner_$406",
              "typeString": "contract ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 9737,
              "name": "ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 406,
              "src": "123:11:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burner_$406",
                "typeString": "contract ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9740,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 9836,
            "src": "152:24:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4021",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 9739,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4021,
              "src": "152:8:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4021",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9742,
            "name": "amountBurnt",
            "nodeType": "VariableDeclaration",
            "scope": 9836,
            "src": "181:23:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9741,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9761,
              "nodeType": "Block",
              "src": "266:76:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9749,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9738,
                      "src": "272:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$406",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 9751,
                          "name": "_burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9746,
                          "src": "293:7:35",
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
                        "id": 9750,
                        "name": "ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 406,
                        "src": "281:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Burner_$406_$",
                          "typeString": "type(contract ERC20Burner)"
                        }
                      },
                      "id": 9752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "281:20:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$406",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "src": "272:29:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Burner_$406",
                      "typeString": "contract ERC20Burner"
                    }
                  },
                  "id": 9754,
                  "nodeType": "ExpressionStatement",
                  "src": "272:29:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9755,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9740,
                      "src": "307:8:35",
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
                          "id": 9757,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9744,
                          "src": "327:9:35",
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
                        "id": 9756,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4021,
                        "src": "318:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$4021_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 9758,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "318:19:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4021",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "307:30:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$4021",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 9760,
                  "nodeType": "ExpressionStatement",
                  "src": "307:30:35"
                }
              ]
            },
            "documentation": null,
            "id": 9762,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9744,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 9762,
                  "src": "221:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:35",
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
                  "id": 9746,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9762,
                  "src": "240:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:35"
            },
            "scope": 9836,
            "src": "209:133:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9776,
              "nodeType": "Block",
              "src": "400:52:35",
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 9770,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "426:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "426:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 9772,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9764,
                            "src": "438:7:35",
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
                            "id": 9768,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9738,
                            "src": "414:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$406",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 9769,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 268,
                          "src": "414:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 9773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "414:32:35",
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
                      "id": 9767,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "406:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "406:41:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9775,
                  "nodeType": "ExpressionStatement",
                  "src": "406:41:35"
                }
              ]
            },
            "documentation": null,
            "id": 9777,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokensManualFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9764,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9777,
                  "src": "375:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9763,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:14:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "400:0:35"
            },
            "scope": 9836,
            "src": "346:106:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9819,
              "nodeType": "Block",
              "src": "528:265:35",
              "statements": [
                {
                  "assignments": [
                    9781
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9781,
                      "name": "methodID",
                      "nodeType": "VariableDeclaration",
                      "scope": 9820,
                      "src": "534:15:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 9780,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "534:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9790,
                  "initialValue": {
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 9786,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "586:14:35",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 9784,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "569:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 9785,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "569:16:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 9787,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "569:32:35",
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
                          "id": 9783,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "559:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 9788,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "559:43:35",
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
                      "id": 9782,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "552:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 9789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "552:51:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "534:69:35"
                },
                {
                  "assignments": [
                    9792
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9792,
                      "name": "amountToBurn",
                      "nodeType": "VariableDeclaration",
                      "scope": 9820,
                      "src": "609:17:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9791,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "609:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9805,
                  "initialValue": {
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
                                "id": 9798,
                                "name": "methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9781,
                                "src": "677:8:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 9800,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12577,
                                    "src": "695:4:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TestBurner_$9836",
                                      "typeString": "contract TestBurner"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TestBurner_$9836",
                                      "typeString": "contract TestBurner"
                                    }
                                  ],
                                  "id": 9799,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "687:7:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 9801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "687:13:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 9796,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "660:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 9797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:16:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 9802,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "660:41:35",
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
                          "id": 9795,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "650:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 9803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "650:52:35",
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
                        "id": 9793,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9740,
                        "src": "629:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4021",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 9794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3641,
                      "src": "629:20:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
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
                    "src": "629:74:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "609:94:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9809,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "729:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9810,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 9811,
                            "name": "amountToBurn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9792,
                            "src": "741:12:35",
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
                            "id": 9807,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9738,
                            "src": "717:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$406",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 9808,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 268,
                          "src": "717:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 9812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "717:37:35",
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
                      "id": 9806,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "709:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:46:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9814,
                  "nodeType": "ExpressionStatement",
                  "src": "709:46:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9815,
                      "name": "amountBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9742,
                      "src": "761:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9816,
                      "name": "amountToBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9792,
                      "src": "776:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "761:27:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9818,
                  "nodeType": "ExpressionStatement",
                  "src": "761:27:35"
                }
              ]
            },
            "documentation": null,
            "id": 9820,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9778,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "514:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:35"
            },
            "scope": 9836,
            "src": "495:298:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9834,
              "nodeType": "Block",
              "src": "857:69:35",
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 9829,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "904:14:35",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 9827,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "887:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 9828,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "887:16:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 9830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "887:32:35",
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
                          "id": 9826,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "877:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 9831,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "877:43:35",
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
                      "id": 9825,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "870:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 9832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "870:51:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 9824,
                  "id": 9833,
                  "nodeType": "Return",
                  "src": "863:58:35"
                }
              ]
            },
            "documentation": null,
            "id": 9835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMethodID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9821,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "817:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9823,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9835,
                  "src": "849:6:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 9822,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:8:35"
            },
            "scope": 9836,
            "src": "797:129:35",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9837,
        "src": "98:831:35"
      }
    ],
    "src": "0:930:35"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
    "exportedSymbols": {
      "TestBurner": [
        9836
      ]
    },
    "id": 9837,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9734,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:35"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
        "file": "../access/ERC20Burner.sol",
        "id": 9735,
        "nodeType": "ImportDirective",
        "scope": 9837,
        "sourceUnit": 407,
        "src": "25:35:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 9736,
        "nodeType": "ImportDirective",
        "scope": 9837,
        "sourceUnit": 4022,
        "src": "62:34:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 9836,
        "linearizedBaseContracts": [
          9836
        ],
        "name": "TestBurner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 9738,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 9836,
            "src": "123:25:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20Burner_$406",
              "typeString": "contract ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 9737,
              "name": "ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 406,
              "src": "123:11:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burner_$406",
                "typeString": "contract ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9740,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 9836,
            "src": "152:24:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4021",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 9739,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4021,
              "src": "152:8:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4021",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9742,
            "name": "amountBurnt",
            "nodeType": "VariableDeclaration",
            "scope": 9836,
            "src": "181:23:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9741,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9761,
              "nodeType": "Block",
              "src": "266:76:35",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9749,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9738,
                      "src": "272:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$406",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 9751,
                          "name": "_burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9746,
                          "src": "293:7:35",
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
                        "id": 9750,
                        "name": "ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 406,
                        "src": "281:11:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Burner_$406_$",
                          "typeString": "type(contract ERC20Burner)"
                        }
                      },
                      "id": 9752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "281:20:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$406",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "src": "272:29:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Burner_$406",
                      "typeString": "contract ERC20Burner"
                    }
                  },
                  "id": 9754,
                  "nodeType": "ExpressionStatement",
                  "src": "272:29:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9755,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9740,
                      "src": "307:8:35",
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
                          "id": 9757,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9744,
                          "src": "327:9:35",
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
                        "id": 9756,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4021,
                        "src": "318:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$4021_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 9758,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "318:19:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4021",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "307:30:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$4021",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 9760,
                  "nodeType": "ExpressionStatement",
                  "src": "307:30:35"
                }
              ]
            },
            "documentation": null,
            "id": 9762,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9744,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 9762,
                  "src": "221:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:35",
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
                  "id": 9746,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 9762,
                  "src": "240:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:35"
            },
            "scope": 9836,
            "src": "209:133:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9776,
              "nodeType": "Block",
              "src": "400:52:35",
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
                            "expression": {
                              "argumentTypes": null,
                              "id": 9770,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "426:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "426:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 9772,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9764,
                            "src": "438:7:35",
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
                            "id": 9768,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9738,
                            "src": "414:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$406",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 9769,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 268,
                          "src": "414:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 9773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "414:32:35",
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
                      "id": 9767,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "406:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "406:41:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9775,
                  "nodeType": "ExpressionStatement",
                  "src": "406:41:35"
                }
              ]
            },
            "documentation": null,
            "id": 9777,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokensManualFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9764,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 9777,
                  "src": "375:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9763,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:14:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "400:0:35"
            },
            "scope": 9836,
            "src": "346:106:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9819,
              "nodeType": "Block",
              "src": "528:265:35",
              "statements": [
                {
                  "assignments": [
                    9781
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9781,
                      "name": "methodID",
                      "nodeType": "VariableDeclaration",
                      "scope": 9820,
                      "src": "534:15:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 9780,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "534:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9790,
                  "initialValue": {
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 9786,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "586:14:35",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 9784,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "569:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 9785,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "569:16:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 9787,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "569:32:35",
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
                          "id": 9783,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "559:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 9788,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "559:43:35",
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
                      "id": 9782,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "552:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 9789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "552:51:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "534:69:35"
                },
                {
                  "assignments": [
                    9792
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9792,
                      "name": "amountToBurn",
                      "nodeType": "VariableDeclaration",
                      "scope": 9820,
                      "src": "609:17:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9791,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "609:4:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 9805,
                  "initialValue": {
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
                                "id": 9798,
                                "name": "methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9781,
                                "src": "677:8:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 9800,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12577,
                                    "src": "695:4:35",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TestBurner_$9836",
                                      "typeString": "contract TestBurner"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TestBurner_$9836",
                                      "typeString": "contract TestBurner"
                                    }
                                  ],
                                  "id": 9799,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "687:7:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 9801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "687:13:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 9796,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "660:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 9797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:16:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 9802,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "660:41:35",
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
                          "id": 9795,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "650:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 9803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "650:52:35",
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
                        "id": 9793,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9740,
                        "src": "629:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4021",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 9794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3641,
                      "src": "629:20:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
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
                    "src": "629:74:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "609:94:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 9809,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "729:3:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 9810,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:10:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 9811,
                            "name": "amountToBurn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9792,
                            "src": "741:12:35",
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
                            "id": 9807,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9738,
                            "src": "717:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$406",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 9808,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 268,
                          "src": "717:11:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 9812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "717:37:35",
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
                      "id": 9806,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "709:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:46:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9814,
                  "nodeType": "ExpressionStatement",
                  "src": "709:46:35"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 9817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 9815,
                      "name": "amountBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9742,
                      "src": "761:11:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 9816,
                      "name": "amountToBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9792,
                      "src": "776:12:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "761:27:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9818,
                  "nodeType": "ExpressionStatement",
                  "src": "761:27:35"
                }
              ]
            },
            "documentation": null,
            "id": 9820,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9778,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "514:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:35"
            },
            "scope": 9836,
            "src": "495:298:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9834,
              "nodeType": "Block",
              "src": "857:69:35",
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
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 9829,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "904:14:35",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 9827,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12451,
                                "src": "887:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 9828,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "887:16:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 9830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "887:32:35",
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
                          "id": 9826,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12458,
                          "src": "877:9:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 9831,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "877:43:35",
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
                      "id": 9825,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "870:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 9832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "870:51:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 9824,
                  "id": 9833,
                  "nodeType": "Return",
                  "src": "863:58:35"
                }
              ]
            },
            "documentation": null,
            "id": 9835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMethodID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9821,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "817:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 9824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9823,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9835,
                  "src": "849:6:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 9822,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:8:35"
            },
            "scope": 9836,
            "src": "797:129:35",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 9837,
        "src": "98:831:35"
      }
    ],
    "src": "0:930:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.512Z"
}