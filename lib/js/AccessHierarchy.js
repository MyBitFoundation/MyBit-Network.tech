"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var AccessHierarchy = exports.AccessHierarchy = 
{
  "contractName": "AccessHierarchy",
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
      "constant": true,
      "inputs": [],
      "name": "upperAccessLevel",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approvalLevel",
          "type": "uint256"
        }
      ],
      "name": "LogUserApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_accessLevel",
          "type": "uint256"
        }
      ],
      "name": "LogUserRemoved",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newUser",
          "type": "address"
        },
        {
          "name": "_accessLevel",
          "type": "uint256"
        }
      ],
      "name": "approveUser",
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
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "removeUser",
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
      "inputs": [
        {
          "name": "_newUpperLimit",
          "type": "uint8"
        }
      ],
      "name": "setUpperAccessLevel",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051602080610e6983398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610de6806100836000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634248083b1461007257806344190a87146100d7578063713b563f14610107578063985751881461015e578063df392874146101b9575b600080fd5b34801561007e57600080fd5b506100bd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101ea565b604051808215151515815260200191505060405180910390f35b3480156100e357600080fd5b50610105600480360381019080803560ff16906020019092919050505061062d565b005b34801561011357600080fd5b5061011c610822565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016a57600080fd5b5061019f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610847565b604051808215151515815260200191505060405180910390f35b3480156101c557600080fd5b506101ce610da7565b604051808260ff1660ff16815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f636f6e74726163740000000000000000000000000000000000000000000000008152506008018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156102e157805182526020820191506020810190506020830392506102bc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561036857600080fd5b505af115801561037c573d6000803e3d6000fd5b505050506040513d602081101561039257600080fd5b810190808051906020019092919050505015156103ae57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103eb57600080fd5b600060149054906101000a900460ff1660ff16831080156104105750600060ff168314155b151561041b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2a4853a8560405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561051057805182526020820191506020810190506020830392506104eb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020856040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b15801561059f57600080fd5b505af11580156105b3573d6000803e3d6000fd5b505050507fe8b0d2948bfc19ce9cb6dd3be73adffa387a1c6f662adc9c5b8ebeede21deb688484604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1600191505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561072257805182526020820191506020810190506020830392506106fd565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156107a957600080fd5b505af11580156107bd573d6000803e3d6000fd5b505050506040513d60208110156107d357600080fd5b810190808051906020019092919050505015156107ef57600080fd5b600060ff168160ff1611151561080457600080fd5b80600060146101000a81548160ff021916908360ff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561093f578051825260208201915060208101905060208303925061091a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156109c657600080fd5b505af11580156109da573d6000803e3d6000fd5b505050506040513d60208110156109f057600080fd5b81019080805190602001909291905050501515610a0c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610b015780518252602082019150602081019050602083039250610adc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610b8857600080fd5b505af1158015610b9c573d6000803e3d6000fd5b505050506040513d6020811015610bb257600080fd5b810190808051906020019092919050505090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2b202bf8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610cba5780518252602082019150602081019050602083039250610c95565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b158015610d4157600080fd5b505af1158015610d55573d6000803e3d6000fd5b50505050808373ffffffffffffffffffffffffffffffffffffffff167fe8bca18329debfd209083cfd37b3dbfaa9318ae7bf4dcb40f63ca7be92c26acc60405160405180910390a36001915050919050565b600060149054906101000a900460ff16815600a165627a7a72305820dfb86c8f10742de00c81de553d6c3b3975507f128a2a6c6fbee3601ae2efd4700029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634248083b1461007257806344190a87146100d7578063713b563f14610107578063985751881461015e578063df392874146101b9575b600080fd5b34801561007e57600080fd5b506100bd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101ea565b604051808215151515815260200191505060405180910390f35b3480156100e357600080fd5b50610105600480360381019080803560ff16906020019092919050505061062d565b005b34801561011357600080fd5b5061011c610822565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016a57600080fd5b5061019f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610847565b604051808215151515815260200191505060405180910390f35b3480156101c557600080fd5b506101ce610da7565b604051808260ff1660ff16815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f636f6e74726163740000000000000000000000000000000000000000000000008152506008018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156102e157805182526020820191506020810190506020830392506102bc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561036857600080fd5b505af115801561037c573d6000803e3d6000fd5b505050506040513d602081101561039257600080fd5b810190808051906020019092919050505015156103ae57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156103eb57600080fd5b600060149054906101000a900460ff1660ff16831080156104105750600060ff168314155b151561041b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2a4853a8560405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561051057805182526020820191506020810190506020830392506104eb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020856040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b15801561059f57600080fd5b505af11580156105b3573d6000803e3d6000fd5b505050507fe8b0d2948bfc19ce9cb6dd3be73adffa387a1c6f662adc9c5b8ebeede21deb688484604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1600191505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561072257805182526020820191506020810190506020830392506106fd565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156107a957600080fd5b505af11580156107bd573d6000803e3d6000fd5b505050506040513d60208110156107d357600080fd5b810190808051906020019092919050505015156107ef57600080fd5b600060ff168160ff1611151561080457600080fd5b80600060146101000a81548160ff021916908360ff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561093f578051825260208201915060208101905060208303925061091a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156109c657600080fd5b505af11580156109da573d6000803e3d6000fd5b505050506040513d60208110156109f057600080fd5b81019080805190602001909291905050501515610a0c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610b015780518252602082019150602081019050602083039250610adc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610b8857600080fd5b505af1158015610b9c573d6000803e3d6000fd5b505050506040513d6020811015610bb257600080fd5b810190808051906020019092919050505090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2b202bf8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610cba5780518252602082019150602081019050602083039250610c95565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b158015610d4157600080fd5b505af1158015610d55573d6000803e3d6000fd5b50505050808373ffffffffffffffffffffffffffffffffffffffff167fe8bca18329debfd209083cfd37b3dbfaa9318ae7bf4dcb40f63ca7be92c26acc60405160405180910390a36001915050919050565b600060149054906101000a900460ff16815600a165627a7a72305820dfb86c8f10742de00c81de553d6c3b3975507f128a2a6c6fbee3601ae2efd4700029",
  "sourceMap": "260:2369:1:-;;;399:82;8:9:-1;5:2;;;30:1;27;20:12;5:2;399:82:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;466:9;446:8;;:30;;;;;;;;;;;;;;;;;;399:82;260:2369;;;;;;",
  "deployedSourceMap": "260:2369:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;674:361;;8:9:-1;5:2;;;30:1;27;20:12;5:2;674:361:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1569:156;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1569:156:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;290:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;290:24:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1117:310;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1117:310:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;318:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;318:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;674:361;794:4;2116:8;;;;;;;;;;;:20;;;2176:10;2147:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2147:40:1;;;2137:51;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2137:51:1;;;;;;;;;;;;;;;;2116:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2116:73:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2116:73:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2116:73:1;;;;;;;;;;;;;;;;2108:82;;;;;;;;764:8;1844:1;1826:20;;:6;:20;;;;1818:29;;;;;;;;829:16;;;;;;;;;;;814:31;;:12;:31;:59;;;;;871:1;849:24;;:12;:24;;814:59;806:68;;;;;;;;880:8;;;;;;;;;;;:16;;;938:8;907:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;907:40:1;;;897:51;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;897:51:1;;;;;;;;;;;;;;;;950:12;880:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;880:83:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;880:83:1;;;;974:39;990:8;1000:12;974:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;1026:4;1019:11;;2196:1;674:361;;;;:::o;1569:156::-;1939:8;;;;;;;;;;;:20;;;1996:10;1970:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1970:37:1;;;1960:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1960:48:1;;;;;;;;;;;;;;;;1939:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1939:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1939:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1939:70:1;;;;;;;;;;;;;;;;1931:79;;;;;;;;1678:1;1655:25;;:14;:25;;;1647:34;;;;;;;;1706:14;1687:16;;:33;;;;;;;;;;;;;;;;;;1569:156;:::o;290:24::-;;;;;;;;;;;;;:::o;1117:310::-;1184:4;1196:16;1939:8;;;;;;;;;;;:20;;;1996:10;1970:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1970:37:1;;;1960:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1960:48:1;;;;;;;;;;;;;;;;1939:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1939:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1939:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1939:70:1;;;;;;;;;;;;;;;;1931:79;;;;;;;;1215:8;;;;;;;;;;;:20;;;1277:5;1246:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1246:37:1;;;1236:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1236:48:1;;;;;;;;;;;;;;;;1215:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1215:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1215:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1215:70:1;;;;;;;;;;;;;;;;1196:89;;1291:8;;;;;;;;;;;:19;;;1352:5;1321:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1321:37:1;;;1311:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1311:48:1;;;;;;;;;;;;;;;;1291:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1291:69:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1291:69:1;;;;1393:11;1386:5;1371:34;;;;;;;;;;;;1418:4;1411:11;;1117:310;;;;:::o;318:29::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../database/Database.sol';\n\n// @title A contract for granting and revoking access levels to different users\n// @author Kyle Dewhurst, MyBit Foundation\n// @notice Made for platforms that require hierarchical access restrictions\ncontract AccessHierarchy {\n\n  Database public database;\n  uint8 public upperAccessLevel;\n\n  // @notice Constructor: Inititalize Database\n  constructor(address _database)\n  public  {\n    database = Database(_database);\n  }\n\n  // @notice Owner can manually grant access to a user here. WIll be used for KYC approval\n  // @param Address of new user.\n  // @param The level of access granted by owner/burningcontract\n  function approveUser(address _newUser, uint _accessLevel)\n  onlyPlatform\n  noEmptyAddress(_newUser)\n  public\n  returns (bool) {\n    require(_accessLevel < upperAccessLevel && _accessLevel != uint8(0));\n    database.setUint(keccak256(abi.encodePacked(\"userAccess\", _newUser)), _accessLevel);\n    emit LogUserApproved(_newUser, _accessLevel);\n    return true;\n  }\n\n  // @notice Owner can remove access for users\n  // @param User to be removed\n  function removeUser(address _user)\n  onlyOwner\n  public\n  returns (bool) {\n    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked(\"userAccess\", _user)));\n    database.deleteUint(keccak256(abi.encodePacked(\"userAccess\", _user)));\n    emit LogUserRemoved(_user, accessLevel);\n    return true;\n  }\n\n  // @notice Owner can set the upper bound on access levels\n  // @param (uint8) _newUpperLimit = The highest access level on the platform\n  function setUpperAccessLevel(uint8 _newUpperLimit)\n  public\n  onlyOwner {\n    require(_newUpperLimit > uint8(0));\n    upperAccessLevel = _newUpperLimit;\n  }\n\n  // @notice Deny empty address parameters\n  modifier noEmptyAddress(address _param) {\n    require(_param != address(0));\n    _;\n  }\n\n  // @notice Deny all callers except owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  // @notice only contracts on the platform can call.\n  modifier onlyPlatform {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"contract\", msg.sender))));\n    _;\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  //                                        Events\n  //------------------------------------------------------------------------------------------------------------------\n  event LogUserApproved(address _user, uint _approvalLevel);\n  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/AccessHierarchy.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/AccessHierarchy.sol",
    "exportedSymbols": {
      "AccessHierarchy": [
        247
      ]
    },
    "id": 248,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 248,
        "sourceUnit": 4581,
        "src": "25:34:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 247,
        "linearizedBaseContracts": [
          247
        ],
        "name": "AccessHierarchy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 61,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 247,
            "src": "290:24:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4580",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 60,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4580,
              "src": "290:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4580",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 63,
            "name": "upperAccessLevel",
            "nodeType": "VariableDeclaration",
            "scope": 247,
            "src": "318:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 62,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "318:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 74,
              "nodeType": "Block",
              "src": "440:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 68,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61,
                      "src": "446:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4580",
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
                          "id": 70,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "466:9:1",
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
                        "id": 69,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4580,
                        "src": "457:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$4580_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 71,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "457:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4580",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "446:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$4580",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 73,
                  "nodeType": "ExpressionStatement",
                  "src": "446:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 75,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 75,
                  "src": "411:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "411:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:19:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "440:0:1"
            },
            "scope": 247,
            "src": "399:82:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 121,
              "nodeType": "Block",
              "src": "800:235:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 90,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "814:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 91,
                            "name": "upperAccessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63,
                            "src": "829:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "814:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 97,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "849:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 95,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "871:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 94,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "865:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint8_$",
                                "typeString": "type(uint8)"
                              },
                              "typeName": "uint8"
                            },
                            "id": 96,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "865:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "849:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "814:59:1",
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
                      "id": 89,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "806:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "806:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "806:68:1"
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "75736572416363657373",
                                "id": 107,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "924:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 108,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "938:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 105,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "907:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 106,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "907:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "907:40:1",
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
                          "id": 104,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "897:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "897:51:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 111,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "950:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 101,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "880:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4580",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4385,
                      "src": "880:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:83:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 113,
                  "nodeType": "ExpressionStatement",
                  "src": "880:83:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 115,
                        "name": "_newUser",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77,
                        "src": "990:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "1000:12:1",
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
                      "id": 114,
                      "name": "LogUserApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 240,
                      "src": "974:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "974:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 118,
                  "nodeType": "EmitStatement",
                  "src": "969:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1026:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 88,
                  "id": 120,
                  "nodeType": "Return",
                  "src": "1019:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 122,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 82,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 81,
                  "name": "onlyPlatform",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 234,
                  "src": "734:12:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "734:12:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 84,
                    "name": "_newUser",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77,
                    "src": "764:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 85,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 83,
                  "name": "noEmptyAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 198,
                  "src": "749:14:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "749:24:1"
              }
            ],
            "name": "approveUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "name": "_newUser",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "695:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:1",
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
                  "id": 79,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "713:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "713:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:37:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 87,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "794:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 86,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "793:6:1"
            },
            "scope": 247,
            "src": "674:361:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 163,
              "nodeType": "Block",
              "src": "1190:237:1",
              "statements": [
                {
                  "assignments": [
                    132
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 132,
                      "name": "accessLevel",
                      "nodeType": "VariableDeclaration",
                      "scope": 164,
                      "src": "1196:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 131,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1196:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 143,
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
                                "hexValue": "75736572416363657373",
                                "id": 138,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1263:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 139,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 124,
                                "src": "1277:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 136,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "1246:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 137,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1246:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1246:37:1",
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
                          "id": 135,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "1236:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1236:48:1",
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
                        "id": 133,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "1215:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4580",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4200,
                      "src": "1215:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1215:70:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1196:89:1"
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "75736572416363657373",
                                "id": 150,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1338:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 151,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 124,
                                "src": "1352:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 148,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "1321:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 149,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1321:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1321:37:1",
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
                          "id": 147,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "1311:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1311:48:1",
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
                        "id": 144,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "1291:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4580",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 146,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4491,
                      "src": "1291:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1291:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "1291:69:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 157,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "1386:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 158,
                        "name": "accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 132,
                        "src": "1393:11:1",
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
                      "id": 156,
                      "name": "LogUserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 246,
                      "src": "1371:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1371:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 160,
                  "nodeType": "EmitStatement",
                  "src": "1366:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1418:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 130,
                  "id": 162,
                  "nodeType": "Return",
                  "src": "1411:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 164,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 127,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 126,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 216,
                  "src": "1154:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1154:9:1"
              }
            ],
            "name": "removeUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "1137:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1136:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 129,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "1184:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1183:6:1"
            },
            "scope": 247,
            "src": "1117:310:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 183,
              "nodeType": "Block",
              "src": "1641:84:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 172,
                          "name": "_newUpperLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 166,
                          "src": "1655:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 174,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1678:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1672:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": "uint8"
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1672:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "1655:25:1",
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
                      "id": 171,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1647:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1647:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 178,
                  "nodeType": "ExpressionStatement",
                  "src": "1647:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "upperAccessLevel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63,
                      "src": "1687:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "_newUpperLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 166,
                      "src": "1706:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "1687:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 182,
                  "nodeType": "ExpressionStatement",
                  "src": "1687:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 169,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 168,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 216,
                  "src": "1631:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1631:9:1"
              }
            ],
            "name": "setUpperAccessLevel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 166,
                  "name": "_newUpperLimit",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1598:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1598:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1597:22:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 170,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1641:0:1"
            },
            "scope": 247,
            "src": "1569:156:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 197,
              "nodeType": "Block",
              "src": "1812:47:1",
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
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 189,
                          "name": "_param",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "1826:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 191,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1844:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1836:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1836:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1826:20:1",
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
                      "id": 188,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1818:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1818:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 195,
                  "nodeType": "ExpressionStatement",
                  "src": "1818:29:1"
                },
                {
                  "id": 196,
                  "nodeType": "PlaceholderStatement",
                  "src": "1853:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 198,
            "name": "noEmptyAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 186,
                  "name": "_param",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "1796:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1796:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1795:16:1"
            },
            "src": "1772:87:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 215,
              "nodeType": "Block",
              "src": "1925:97:1",
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
                                    "id": 206,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1987:7:1",
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
                                      "id": 207,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13268,
                                      "src": "1996:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 208,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1996:10:1",
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
                                    "id": 204,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13255,
                                    "src": "1970:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 205,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1970:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 209,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1970:37:1",
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
                              "id": 203,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13262,
                              "src": "1960:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 210,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1960:48:1",
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
                            "id": 201,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61,
                            "src": "1939:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4580",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4220,
                          "src": "1939:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1939:70:1",
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
                      "id": 200,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1931:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1931:79:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 213,
                  "nodeType": "ExpressionStatement",
                  "src": "1931:79:1"
                },
                {
                  "id": 214,
                  "nodeType": "PlaceholderStatement",
                  "src": "2016:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 216,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 199,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1925:0:1"
            },
            "src": "1906:116:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "2102:100:1",
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
                                    "hexValue": "636f6e7472616374",
                                    "id": 224,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2164:10:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 225,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13268,
                                      "src": "2176:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 226,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2176:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
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
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 222,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13255,
                                    "src": "2147:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 223,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2147:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 227,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2147:40:1",
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
                              "id": 221,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13262,
                              "src": "2137:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2137:51:1",
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
                            "id": 219,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61,
                            "src": "2116:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4580",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4220,
                          "src": "2116:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2116:73:1",
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
                      "id": 218,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "2108:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:82:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 231,
                  "nodeType": "ExpressionStatement",
                  "src": "2108:82:1"
                },
                {
                  "id": 232,
                  "nodeType": "PlaceholderStatement",
                  "src": "2196:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 234,
            "name": "onlyPlatform",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 217,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2102:0:1"
            },
            "src": "2080:122:1",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 240,
            "name": "LogUserApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 236,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 240,
                  "src": "2517:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2517:7:1",
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
                  "id": 238,
                  "indexed": false,
                  "name": "_approvalLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 240,
                  "src": "2532:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 237,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2532:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2516:36:1"
            },
            "src": "2495:58:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 246,
            "name": "LogUserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 242,
                  "indexed": true,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 246,
                  "src": "2577:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2577:7:1",
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
                  "id": 244,
                  "indexed": true,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 246,
                  "src": "2600:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 243,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2600:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2576:50:1"
            },
            "src": "2556:71:1"
          }
        ],
        "scope": 248,
        "src": "260:2369:1"
      }
    ],
    "src": "0:2630:1"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/AccessHierarchy.sol",
    "exportedSymbols": {
      "AccessHierarchy": [
        247
      ]
    },
    "id": 248,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 248,
        "sourceUnit": 4581,
        "src": "25:34:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 247,
        "linearizedBaseContracts": [
          247
        ],
        "name": "AccessHierarchy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 61,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 247,
            "src": "290:24:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4580",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 60,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4580,
              "src": "290:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4580",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 63,
            "name": "upperAccessLevel",
            "nodeType": "VariableDeclaration",
            "scope": 247,
            "src": "318:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 62,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "318:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 74,
              "nodeType": "Block",
              "src": "440:41:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 68,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61,
                      "src": "446:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4580",
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
                          "id": 70,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "466:9:1",
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
                        "id": 69,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4580,
                        "src": "457:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$4580_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 71,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "457:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$4580",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "446:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$4580",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 73,
                  "nodeType": "ExpressionStatement",
                  "src": "446:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 75,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 75,
                  "src": "411:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "411:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:19:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "440:0:1"
            },
            "scope": 247,
            "src": "399:82:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 121,
              "nodeType": "Block",
              "src": "800:235:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 92,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 90,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "814:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 91,
                            "name": "upperAccessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63,
                            "src": "829:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "814:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 97,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 79,
                            "src": "849:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 95,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "871:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 94,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "865:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint8_$",
                                "typeString": "type(uint8)"
                              },
                              "typeName": "uint8"
                            },
                            "id": 96,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "865:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "849:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "814:59:1",
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
                      "id": 89,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "806:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 99,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "806:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 100,
                  "nodeType": "ExpressionStatement",
                  "src": "806:68:1"
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "75736572416363657373",
                                "id": 107,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "924:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 108,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 77,
                                "src": "938:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 105,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "907:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 106,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "907:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "907:40:1",
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
                          "id": 104,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "897:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "897:51:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 111,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "950:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 101,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "880:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4580",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 103,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4385,
                      "src": "880:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:83:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 113,
                  "nodeType": "ExpressionStatement",
                  "src": "880:83:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 115,
                        "name": "_newUser",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 77,
                        "src": "990:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 116,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 79,
                        "src": "1000:12:1",
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
                      "id": 114,
                      "name": "LogUserApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 240,
                      "src": "974:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "974:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 118,
                  "nodeType": "EmitStatement",
                  "src": "969:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1026:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 88,
                  "id": 120,
                  "nodeType": "Return",
                  "src": "1019:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 122,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 82,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 81,
                  "name": "onlyPlatform",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 234,
                  "src": "734:12:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "734:12:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 84,
                    "name": "_newUser",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 77,
                    "src": "764:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 85,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 83,
                  "name": "noEmptyAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 198,
                  "src": "749:14:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "749:24:1"
              }
            ],
            "name": "approveUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "name": "_newUser",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "695:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:1",
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
                  "id": 79,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "713:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 78,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "713:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:37:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 87,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "794:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 86,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "793:6:1"
            },
            "scope": 247,
            "src": "674:361:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 163,
              "nodeType": "Block",
              "src": "1190:237:1",
              "statements": [
                {
                  "assignments": [
                    132
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 132,
                      "name": "accessLevel",
                      "nodeType": "VariableDeclaration",
                      "scope": 164,
                      "src": "1196:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 131,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1196:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 143,
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
                                "hexValue": "75736572416363657373",
                                "id": 138,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1263:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 139,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 124,
                                "src": "1277:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 136,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "1246:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 137,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1246:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1246:37:1",
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
                          "id": 135,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "1236:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1236:48:1",
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
                        "id": 133,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "1215:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4580",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4200,
                      "src": "1215:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1215:70:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1196:89:1"
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "75736572416363657373",
                                "id": 150,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1338:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 151,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 124,
                                "src": "1352:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 148,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "1321:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 149,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1321:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1321:37:1",
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
                          "id": 147,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "1311:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1311:48:1",
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
                        "id": 144,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61,
                        "src": "1291:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$4580",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 146,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4491,
                      "src": "1291:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1291:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "1291:69:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 157,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 124,
                        "src": "1386:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 158,
                        "name": "accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 132,
                        "src": "1393:11:1",
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
                      "id": 156,
                      "name": "LogUserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 246,
                      "src": "1371:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1371:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 160,
                  "nodeType": "EmitStatement",
                  "src": "1366:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1418:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 130,
                  "id": 162,
                  "nodeType": "Return",
                  "src": "1411:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 164,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 127,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 126,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 216,
                  "src": "1154:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1154:9:1"
              }
            ],
            "name": "removeUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "1137:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1137:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1136:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 129,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 164,
                  "src": "1184:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1183:6:1"
            },
            "scope": 247,
            "src": "1117:310:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 183,
              "nodeType": "Block",
              "src": "1641:84:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 176,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 172,
                          "name": "_newUpperLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 166,
                          "src": "1655:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 174,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1678:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 173,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1672:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": "uint8"
                          },
                          "id": 175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1672:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "1655:25:1",
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
                      "id": 171,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1647:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1647:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 178,
                  "nodeType": "ExpressionStatement",
                  "src": "1647:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "upperAccessLevel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63,
                      "src": "1687:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 180,
                      "name": "_newUpperLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 166,
                      "src": "1706:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "1687:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 182,
                  "nodeType": "ExpressionStatement",
                  "src": "1687:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 169,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 168,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 216,
                  "src": "1631:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1631:9:1"
              }
            ],
            "name": "setUpperAccessLevel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 166,
                  "name": "_newUpperLimit",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1598:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 165,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1598:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1597:22:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 170,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1641:0:1"
            },
            "scope": 247,
            "src": "1569:156:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 197,
              "nodeType": "Block",
              "src": "1812:47:1",
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
                        "id": 193,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 189,
                          "name": "_param",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 186,
                          "src": "1826:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 191,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1844:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1836:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 192,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1836:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1826:20:1",
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
                      "id": 188,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1818:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1818:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 195,
                  "nodeType": "ExpressionStatement",
                  "src": "1818:29:1"
                },
                {
                  "id": 196,
                  "nodeType": "PlaceholderStatement",
                  "src": "1853:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 198,
            "name": "noEmptyAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 186,
                  "name": "_param",
                  "nodeType": "VariableDeclaration",
                  "scope": 198,
                  "src": "1796:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1796:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1795:16:1"
            },
            "src": "1772:87:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 215,
              "nodeType": "Block",
              "src": "1925:97:1",
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
                                    "id": 206,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1987:7:1",
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
                                      "id": 207,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13268,
                                      "src": "1996:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 208,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1996:10:1",
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
                                    "id": 204,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13255,
                                    "src": "1970:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 205,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1970:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 209,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1970:37:1",
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
                              "id": 203,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13262,
                              "src": "1960:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 210,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1960:48:1",
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
                            "id": 201,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61,
                            "src": "1939:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4580",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 202,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4220,
                          "src": "1939:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 211,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1939:70:1",
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
                      "id": 200,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1931:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1931:79:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 213,
                  "nodeType": "ExpressionStatement",
                  "src": "1931:79:1"
                },
                {
                  "id": 214,
                  "nodeType": "PlaceholderStatement",
                  "src": "2016:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 216,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 199,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1925:0:1"
            },
            "src": "1906:116:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "2102:100:1",
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
                                    "hexValue": "636f6e7472616374",
                                    "id": 224,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2164:10:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 225,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13268,
                                      "src": "2176:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 226,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2176:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
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
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 222,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13255,
                                    "src": "2147:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 223,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2147:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 227,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2147:40:1",
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
                              "id": 221,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13262,
                              "src": "2137:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2137:51:1",
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
                            "id": 219,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61,
                            "src": "2116:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4580",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4220,
                          "src": "2116:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2116:73:1",
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
                      "id": 218,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "2108:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 230,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:82:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 231,
                  "nodeType": "ExpressionStatement",
                  "src": "2108:82:1"
                },
                {
                  "id": 232,
                  "nodeType": "PlaceholderStatement",
                  "src": "2196:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 234,
            "name": "onlyPlatform",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 217,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2102:0:1"
            },
            "src": "2080:122:1",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 240,
            "name": "LogUserApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 236,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 240,
                  "src": "2517:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2517:7:1",
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
                  "id": 238,
                  "indexed": false,
                  "name": "_approvalLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 240,
                  "src": "2532:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 237,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2532:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2516:36:1"
            },
            "src": "2495:58:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 246,
            "name": "LogUserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 242,
                  "indexed": true,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 246,
                  "src": "2577:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 241,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2577:7:1",
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
                  "id": 244,
                  "indexed": true,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 246,
                  "src": "2600:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 243,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2600:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2576:50:1"
            },
            "src": "2556:71:1"
          }
        ],
        "scope": 248,
        "src": "260:2369:1"
      }
    ],
    "src": "0:2630:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.690Z"
}