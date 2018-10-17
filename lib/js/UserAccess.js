"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var UserAccess = exports.UserAccess = 
{
  "contractName": "UserAccess",
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
      "name": "oneYear",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "LogKYCApproved",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "approveKYC",
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
  "bytecode": "0x60806040526301e1338060015534801561001857600080fd5b5060405160208061121083398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506111858061008b6000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630e27324d146100725780634248083b146100cd578063713b563f146101325780639857518814610189578063f27c3bf6146101e4575b600080fd5b34801561007e57600080fd5b506100b3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061020f565b604051808215151515815260200191505060405180910390f35b3480156100d957600080fd5b50610118600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610610565b604051808215151515815260200191505060405180910390f35b34801561013e57600080fd5b50610147610a3a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019557600080fd5b506101ca600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a5f565b604051808215151515815260200191505060405180910390f35b3480156101f057600080fd5b506101f9611153565b6040518082815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561030657805182526020820191506020810190506020830392506102e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561038d57600080fd5b505af11580156103a1573d6000803e3d6000fd5b505050506040513d60208110156103b757600080fd5b810190808051906020019092919050505015156103d357600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663abfdcced3360405160200180807f6b7963417070726f766564000000000000000000000000000000000000000000815250600b018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156104c857805182526020820191506020810190506020830392506104a3565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060016040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018215151515815260200192505050600060405180830381600087803b15801561055c57600080fd5b505af1158015610570573d6000803e3d6000fd5b505050507f6709f695535b29c69497babb1fecfdeb52bdf0ba3c8453ab9b2607d1b501a7403383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1919050565b60008083600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561065057600080fd5b600484108015610661575060008414155b151561066c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2a4853a8660405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610761578051825260208201915060208101905060208303925061073c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020866040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b1580156107f057600080fd5b505af1158015610804573d6000803e3d6000fd5b5050505060015442019150428211801561081f575060015482115b151561082757fe5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2a4853a8660405160200180807f7573657241636365737345787069726174696f6e0000000000000000000000008152506014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561091c57805182526020820191506020810190506020830392506108f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020846040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b1580156109ab57600080fd5b505af11580156109bf573d6000803e3d6000fd5b505050507fe8b0d2948bfc19ce9cb6dd3be73adffa387a1c6f662adc9c5b8ebeede21deb688585604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160019250505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610b575780518252602082019150602081019050602083039250610b32565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610bde57600080fd5b505af1158015610bf2573d6000803e3d6000fd5b505050506040513d6020811015610c0857600080fd5b81019080805190602001909291905050501515610c2457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610d195780518252602082019150602081019050602083039250610cf4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610da057600080fd5b505af1158015610db4573d6000803e3d6000fd5b505050506040513d6020811015610dca57600080fd5b810190808051906020019092919050505090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2b202bf8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610ed25780518252602082019150602081019050602083039250610ead565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b158015610f5957600080fd5b505af1158015610f6d573d6000803e3d6000fd5b505050506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2b202bf8460405160200180807f7573657241636365737345787069726174696f6e0000000000000000000000008152506014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156110665780518252602082019150602081019050602083039250611041565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b1580156110ed57600080fd5b505af1158015611101573d6000803e3d6000fd5b50505050808373ffffffffffffffffffffffffffffffffffffffff167fe8bca18329debfd209083cfd37b3dbfaa9318ae7bf4dcb40f63ca7be92c26acc60405160405180910390a36001915050919050565b600154815600a165627a7a72305820c44dbad5ef5c06f6965aec5fd263c1ec2b37221c6b4ba9c4bee284fca687ac5e0029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630e27324d146100725780634248083b146100cd578063713b563f146101325780639857518814610189578063f27c3bf6146101e4575b600080fd5b34801561007e57600080fd5b506100b3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061020f565b604051808215151515815260200191505060405180910390f35b3480156100d957600080fd5b50610118600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610610565b604051808215151515815260200191505060405180910390f35b34801561013e57600080fd5b50610147610a3a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019557600080fd5b506101ca600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a5f565b604051808215151515815260200191505060405180910390f35b3480156101f057600080fd5b506101f9611153565b6040518082815260200191505060405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561030657805182526020820191506020810190506020830392506102e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561038d57600080fd5b505af11580156103a1573d6000803e3d6000fd5b505050506040513d60208110156103b757600080fd5b810190808051906020019092919050505015156103d357600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663abfdcced3360405160200180807f6b7963417070726f766564000000000000000000000000000000000000000000815250600b018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156104c857805182526020820191506020810190506020830392506104a3565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060016040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018215151515815260200192505050600060405180830381600087803b15801561055c57600080fd5b505af1158015610570573d6000803e3d6000fd5b505050507f6709f695535b29c69497babb1fecfdeb52bdf0ba3c8453ab9b2607d1b501a7403383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1919050565b60008083600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561065057600080fd5b600484108015610661575060008414155b151561066c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2a4853a8660405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610761578051825260208201915060208101905060208303925061073c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020866040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b1580156107f057600080fd5b505af1158015610804573d6000803e3d6000fd5b5050505060015442019150428211801561081f575060015482115b151561082757fe5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2a4853a8660405160200180807f7573657241636365737345787069726174696f6e0000000000000000000000008152506014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310151561091c57805182526020820191506020810190506020830392506108f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020846040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b1580156109ab57600080fd5b505af11580156109bf573d6000803e3d6000fd5b505050507fe8b0d2948bfc19ce9cb6dd3be73adffa387a1c6f662adc9c5b8ebeede21deb688585604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160019250505092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610b575780518252602082019150602081019050602083039250610b32565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610bde57600080fd5b505af1158015610bf2573d6000803e3d6000fd5b505050506040513d6020811015610c0857600080fd5b81019080805190602001909291905050501515610c2457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610d195780518252602082019150602081019050602083039250610cf4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610da057600080fd5b505af1158015610db4573d6000803e3d6000fd5b505050506040513d6020811015610dca57600080fd5b810190808051906020019092919050505090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2b202bf8460405160200180807f7573657241636365737300000000000000000000000000000000000000000000815250600a018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610ed25780518252602082019150602081019050602083039250610ead565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b158015610f5957600080fd5b505af1158015610f6d573d6000803e3d6000fd5b505050506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2b202bf8460405160200180807f7573657241636365737345787069726174696f6e0000000000000000000000008152506014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156110665780518252602082019150602081019050602083039250611041565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b1580156110ed57600080fd5b505af1158015611101573d6000803e3d6000fd5b50505050808373ffffffffffffffffffffffffffffffffffffffff167fe8bca18329debfd209083cfd37b3dbfaa9318ae7bf4dcb40f63ca7be92c26acc60405160405180910390a36001915050919050565b600154815600a165627a7a72305820c44dbad5ef5c06f6965aec5fd263c1ec2b37221c6b4ba9c4bee284fca687ac5e0029",
  "sourceMap": "592:4095:26:-;;;671:8;644:36;;988:82;8:9:-1;5:2;;;30:1;27;20:12;5:2;988:82:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1055:9;1035:8;;:30;;;;;;;;;;;;;;;;;;988:82;592:4095;;;;;;",
  "deployedSourceMap": "592:4095:26:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3235:207;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3235:207:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1651:549;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1651:549:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;616:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;616:24:26;;;;;;;;;;;;;;;;;;;;;;;;;;;2561:396;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2561:396:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;644:36:26;;;;;;;;;;;;;;;;;;;;;;;3235:207;3303:4;4122:8;;;;;;;;;;;:20;;;4179:10;4153:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;4153:37:26;;;4143:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;4143:48:26;;;;;;;;;;;;;;;;4122:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4122:70:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4122:70:26;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4122:70:26;;;;;;;;;;;;;;;;4114:79;;;;;;;;3315:8;;;;;;;;;;;:16;;;3374:10;3342:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3342:43:26;;;3332:54;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3332:54:26;;;;;;;;;;;;;;;;3388:4;3315:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3315:78:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3315:78:26;;;;3404:33;3419:10;3431:5;3404:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3235:207;;;:::o;1651:549::-;1772:4;1937:11;1740:8;3791:1;3773:20;;:6;:20;;;;3765:29;;;;;;;;1812:1;1792:12;:22;:49;;;;;1839:1;1818:12;:23;;1792:49;1784:58;;;;;;;;1848:8;;;;;;;;;;;:16;;;1906:8;1875:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1875:40:26;;;1865:51;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1865:51:26;;;;;;;;;;;;;;;;1918:12;1848:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1848:83:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1848:83:26;;;;1957:7;;1951:3;:13;1937:27;;1987:3;1978:6;:12;:32;;;;;2003:7;;1994:6;:16;1978:32;1970:41;;;;;;2041:8;;;;;;;;;;;:16;;;2109:8;2068:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2068:50:26;;;2058:61;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2058:61:26;;;;;;;;;;;;;;;;2121:6;2041:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2041:87:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2041:87:26;;;;2139:39;2155:8;2165:12;2139:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;2191:4;2184:11;;1651:549;;;;;;:::o;616:24::-;;;;;;;;;;;;;:::o;2561:396::-;2629:4;2641:16;4122:8;;;;;;;;;;;:20;;;4179:10;4153:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;4153:37:26;;;4143:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;4143:48:26;;;;;;;;;;;;;;;;4122:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4122:70:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;4122:70:26;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4122:70:26;;;;;;;;;;;;;;;;4114:79;;;;;;;;2660:8;;;;;;;;;;;:20;;;2722:5;2691:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2691:37:26;;;2681:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2681:48:26;;;;;;;;;;;;;;;;2660:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2660:70:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2660:70:26;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2660:70:26;;;;;;;;;;;;;;;;2641:89;;2736:8;;;;;;;;;;;:19;;;2797:5;2766:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2766:37:26;;;2756:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2756:48:26;;;;;;;;;;;;;;;;2736:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2736:69:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2736:69:26;;;;2811:8;;;;;;;;;;;:19;;;2882:5;2841:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2841:47:26;;;2831:58;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2831:58:26;;;;;;;;;;;;;;;;2811:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2811:79:26;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2811:79:26;;;;2923:11;2916:5;2901:34;;;;;;;;;;;;2948:4;2941:11;;2561:396;;;;:::o;644:36::-;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport './Database.sol';\n\n//------------------------------------------------------------------------------------------------------------------\n// This contract controls users access to the MyBit platform. TokenBurn will call this contract to add new users, once MyBit tokens have been burnt\n// There are 3 levels of access on the platform. First is basic access (creating/funding assets), Second is ability to stake, Third is ability to trade assets\n//------------------------------------------------------------------------------------------------------------------\ncontract UserAccess{\n\n  Database public database;\n  uint public oneYear = uint(31536000);    // 365 days in seconds\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Constructor: Inititalize Database\n  //------------------------------------------------------------------------------------------------------------------\n  constructor(address _database)\n  public  {\n    database = Database(_database);\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Owner can manually grant access to a user here. WIll be used for KYC approval\n  // Invariants: Only called by Token Burning contract or Owner. Access level must be between 1-4\n  // @Param: Address of new user.\n  // @Param: The level of access granted by owner/burningcontract\n  // TODO: owner requirement is removed for alpha testing\n  //------------------------------------------------------------------------------------------------------------------\n  function approveUser(address _newUser, uint _accessLevel)\n  // anyOwner\n  noEmptyAddress(_newUser)\n  external\n  returns (bool) {\n    require(_accessLevel < uint(4) && _accessLevel != uint(0));\n    database.setUint(keccak256(abi.encodePacked(\"userAccess\", _newUser)), _accessLevel);\n    uint expiry = now + oneYear;\n    assert (expiry > now && expiry > oneYear);   // Check for overflow\n    database.setUint(keccak256(abi.encodePacked(\"userAccessExpiration\", _newUser)), expiry);\n    emit LogUserApproved(_newUser, _accessLevel);\n    return true;\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Owner can remove access for users if needed\n  // Invariants: Only owner can call.\n  // @Param: User to be removed\n  //------------------------------------------------------------------------------------------------------------------\n  function removeUser(address _user)\n  anyOwner\n  external\n  returns (bool) {\n    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked(\"userAccess\", _user)));\n    database.deleteUint(keccak256(abi.encodePacked(\"userAccess\", _user)));\n    database.deleteUint(keccak256(abi.encodePacked(\"userAccessExpiration\", _user)));\n    emit LogUserRemoved(_user, accessLevel);\n    return true;\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Owner can approve KYC for user\n  //------------------------------------------------------------------------------------------------------------------\n  function approveKYC(address _user)\n  anyOwner\n  external\n  returns (bool) {\n    database.setBool(keccak256(abi.encodePacked(\"kycApproved\", msg.sender)), true);\n    emit LogKYCApproved(msg.sender, _user);\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Deny empty address parameters\n  //------------------------------------------------------------------------------------------------------------------\n  modifier noEmptyAddress(address _param) {\n    require(_param != address(0));\n    _;\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Only owners can call these functions\n  //------------------------------------------------------------------------------------------------------------------\n  modifier anyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  //                                        Events\n  //------------------------------------------------------------------------------------------------------------------\n  event LogUserApproved(address _user, uint _approvalLevel);\n  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);\n  event LogKYCApproved(address _owner, address _user);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/UserAccess.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/UserAccess.sol",
    "exportedSymbols": {
      "UserAccess": [
        11460
      ]
    },
    "id": 11461,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11229,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:26"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Database.sol",
        "file": "./Database.sol",
        "id": 11230,
        "nodeType": "ImportDirective",
        "scope": 11461,
        "sourceUnit": 6819,
        "src": "25:24:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 11460,
        "linearizedBaseContracts": [
          11460
        ],
        "name": "UserAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 11232,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 11460,
            "src": "616:24:26",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$6818",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 11231,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6818,
              "src": "616:8:26",
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
            "id": 11237,
            "name": "oneYear",
            "nodeType": "VariableDeclaration",
            "scope": 11460,
            "src": "644:36:26",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 11233,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "644:4:26",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "3331353336303030",
                  "id": 11235,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "671:8:26",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_31536000_by_1",
                    "typeString": "int_const 31536000"
                  },
                  "value": "31536000"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_31536000_by_1",
                    "typeString": "int_const 31536000"
                  }
                ],
                "id": 11234,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "666:4:26",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": "uint"
              },
              "id": 11236,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "666:14:26",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 11248,
              "nodeType": "Block",
              "src": "1029:41:26",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 11246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 11242,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11232,
                      "src": "1035:8:26",
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
                          "id": 11244,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11239,
                          "src": "1055:9:26",
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
                        "id": 11243,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6818,
                        "src": "1046:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$6818_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 11245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1046:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6818",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "1035:30:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$6818",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 11247,
                  "nodeType": "ExpressionStatement",
                  "src": "1035:30:26"
                }
              ]
            },
            "documentation": null,
            "id": 11249,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11239,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 11249,
                  "src": "1000:17:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1000:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "999:19:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11241,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1029:0:26"
            },
            "scope": 11460,
            "src": "988:82:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11324,
              "nodeType": "Block",
              "src": "1778:422:26",
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
                        "id": 11272,
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
                          "id": 11266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11262,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11253,
                            "src": "1792:12:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "34",
                                "id": 11264,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1812:1:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                }
                              ],
                              "id": 11263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1807:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 11265,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1807:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1792:22:26",
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
                          "id": 11271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11267,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11253,
                            "src": "1818:12:26",
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
                                "id": 11269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1839:1:26",
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
                              "id": 11268,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1834:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 11270,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1834:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1818:23:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1792:49:26",
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
                      "id": 11261,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "1784:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1784:58:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11274,
                  "nodeType": "ExpressionStatement",
                  "src": "1784:58:26"
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
                                "id": 11281,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1892:12:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11282,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11251,
                                "src": "1906:8:26",
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
                                "id": 11279,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "1875:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11280,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1875:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1875:40:26",
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
                          "id": 11278,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "1865:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1865:51:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11285,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11253,
                        "src": "1918:12:26",
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
                        "id": 11275,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "1848:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6615,
                      "src": "1848:16:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 11286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1848:83:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11287,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:83:26"
                },
                {
                  "assignments": [
                    11289
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11289,
                      "name": "expiry",
                      "nodeType": "VariableDeclaration",
                      "scope": 11325,
                      "src": "1937:11:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11288,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1937:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 11293,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 11290,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21211,
                      "src": "1951:3:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 11291,
                      "name": "oneYear",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11237,
                      "src": "1957:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1951:13:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1937:27:26"
                },
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
                        "id": 11301,
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
                          "id": 11297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11295,
                            "name": "expiry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11289,
                            "src": "1978:6:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 11296,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21211,
                            "src": "1987:3:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1978:12:26",
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
                          "id": 11300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11298,
                            "name": "expiry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11289,
                            "src": "1994:6:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 11299,
                            "name": "oneYear",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11237,
                            "src": "2003:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1994:16:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1978:32:26",
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
                      "id": 11294,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21198,
                      "src": "1970:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1970:41:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11303,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:41:26"
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
                                "hexValue": "7573657241636365737345787069726174696f6e",
                                "id": 11310,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2085:22:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                "value": "userAccessExpiration"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11311,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11251,
                                "src": "2109:8:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 11308,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2068:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11309,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2068:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2068:50:26",
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
                          "id": 11307,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2058:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11313,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2058:61:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11314,
                        "name": "expiry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11289,
                        "src": "2121:6:26",
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
                        "id": 11304,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2041:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6615,
                      "src": "2041:16:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 11315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2041:87:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11316,
                  "nodeType": "ExpressionStatement",
                  "src": "2041:87:26"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 11318,
                        "name": "_newUser",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11251,
                        "src": "2155:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11319,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11253,
                        "src": "2165:12:26",
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
                      "id": 11317,
                      "name": "LogUserApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11447,
                      "src": "2139:15:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2139:39:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11321,
                  "nodeType": "EmitStatement",
                  "src": "2134:44:26"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 11322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2191:4:26",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 11260,
                  "id": 11323,
                  "nodeType": "Return",
                  "src": "2184:11:26"
                }
              ]
            },
            "documentation": null,
            "id": 11325,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 11256,
                    "name": "_newUser",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11251,
                    "src": "1740:8:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 11257,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 11255,
                  "name": "noEmptyAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11423,
                  "src": "1725:14:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1725:24:26"
              }
            ],
            "name": "approveUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11251,
                  "name": "_newUser",
                  "nodeType": "VariableDeclaration",
                  "scope": 11325,
                  "src": "1672:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11250,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1672:7:26",
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
                  "id": 11253,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 11325,
                  "src": "1690:17:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11252,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1690:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1671:37:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11259,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11325,
                  "src": "1772:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11258,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1771:6:26"
            },
            "scope": 11460,
            "src": "1651:549:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11378,
              "nodeType": "Block",
              "src": "2635:322:26",
              "statements": [
                {
                  "assignments": [
                    11335
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11335,
                      "name": "accessLevel",
                      "nodeType": "VariableDeclaration",
                      "scope": 11379,
                      "src": "2641:16:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11334,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2641:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 11346,
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
                                "id": 11341,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2708:12:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11342,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11327,
                                "src": "2722:5:26",
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
                                "id": 11339,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2691:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2691:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11343,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2691:37:26",
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
                          "id": 11338,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2681:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2681:48:26",
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
                        "id": 11336,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2660:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6450,
                      "src": "2660:20:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 11345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2660:70:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2641:89:26"
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
                                "id": 11353,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2783:12:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11354,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11327,
                                "src": "2797:5:26",
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
                                "id": 11351,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2766:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2766:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11355,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2766:37:26",
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
                          "id": 11350,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2756:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2756:48:26",
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
                        "id": 11347,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2736:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6721,
                      "src": "2736:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 11357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2736:69:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11358,
                  "nodeType": "ExpressionStatement",
                  "src": "2736:69:26"
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
                                "hexValue": "7573657241636365737345787069726174696f6e",
                                "id": 11365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2858:22:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                "value": "userAccessExpiration"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11366,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11327,
                                "src": "2882:5:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 11363,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2841:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11364,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2841:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11367,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2841:47:26",
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
                          "id": 11362,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2831:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2831:58:26",
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
                        "id": 11359,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2811:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6721,
                      "src": "2811:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 11369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2811:79:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11370,
                  "nodeType": "ExpressionStatement",
                  "src": "2811:79:26"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 11372,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11327,
                        "src": "2916:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11373,
                        "name": "accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11335,
                        "src": "2923:11:26",
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
                      "id": 11371,
                      "name": "LogUserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11453,
                      "src": "2901:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2901:34:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11375,
                  "nodeType": "EmitStatement",
                  "src": "2896:39:26"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 11376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2948:4:26",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 11333,
                  "id": 11377,
                  "nodeType": "Return",
                  "src": "2941:11:26"
                }
              ]
            },
            "documentation": null,
            "id": 11379,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 11330,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 11329,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11441,
                  "src": "2598:8:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2598:8:26"
              }
            ],
            "name": "removeUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11327,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11379,
                  "src": "2581:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11326,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2580:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11332,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11379,
                  "src": "2629:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11331,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2629:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2628:6:26"
            },
            "scope": 11460,
            "src": "2561:396:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11408,
              "nodeType": "Block",
              "src": "3309:133:26",
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
                                "hexValue": "6b7963417070726f766564",
                                "id": 11394,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3359:13:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a30fe3fb7cebcbac131a2bc4300f77485d7dfb5057bb2aa0f2d26d32b68d7c9d",
                                  "typeString": "literal_string \"kycApproved\""
                                },
                                "value": "kycApproved"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 11395,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21209,
                                  "src": "3374:3:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 11396,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3374:10:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_a30fe3fb7cebcbac131a2bc4300f77485d7dfb5057bb2aa0f2d26d32b68d7c9d",
                                  "typeString": "literal_string \"kycApproved\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 11392,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "3342:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11393,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3342:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11397,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3342:43:26",
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
                          "id": 11391,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "3332:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3332:54:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 11399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3388:4:26",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 11388,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "3315:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6679,
                      "src": "3315:16:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 11400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3315:78:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11401,
                  "nodeType": "ExpressionStatement",
                  "src": "3315:78:26"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 11403,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21209,
                          "src": "3419:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3419:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11405,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11381,
                        "src": "3431:5:26",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 11402,
                      "name": "LogKYCApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11459,
                      "src": "3404:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 11406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3404:33:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11407,
                  "nodeType": "EmitStatement",
                  "src": "3399:38:26"
                }
              ]
            },
            "documentation": null,
            "id": 11409,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 11384,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 11383,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11441,
                  "src": "3272:8:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3272:8:26"
              }
            ],
            "name": "approveKYC",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11381,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11409,
                  "src": "3255:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11380,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3254:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11386,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11409,
                  "src": "3303:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11385,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3303:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3302:6:26"
            },
            "scope": 11460,
            "src": "3235:207:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11422,
              "nodeType": "Block",
              "src": "3759:47:26",
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
                        "id": 11418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 11414,
                          "name": "_param",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11411,
                          "src": "3773:6:26",
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
                              "id": 11416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3791:1:26",
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
                            "id": 11415,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3783:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 11417,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3783:10:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3773:20:26",
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
                      "id": 11413,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "3765:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3765:29:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11420,
                  "nodeType": "ExpressionStatement",
                  "src": "3765:29:26"
                },
                {
                  "id": 11421,
                  "nodeType": "PlaceholderStatement",
                  "src": "3800:1:26"
                }
              ]
            },
            "documentation": null,
            "id": 11423,
            "name": "noEmptyAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 11412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11411,
                  "name": "_param",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "3743:14:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11410,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3742:16:26"
            },
            "src": "3719:87:26",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 11440,
              "nodeType": "Block",
              "src": "4108:97:26",
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
                                    "id": 11431,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4170:7:26",
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
                                      "id": 11432,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21209,
                                      "src": "4179:3:26",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 11433,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4179:10:26",
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
                                    "id": 11429,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21196,
                                    "src": "4153:3:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 11430,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4153:16:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 11434,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4153:37:26",
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
                              "id": 11428,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21203,
                              "src": "4143:9:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 11435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4143:48:26",
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
                            "id": 11426,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11232,
                            "src": "4122:8:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$6818",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 11427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6470,
                          "src": "4122:20:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 11436,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4122:70:26",
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
                      "id": 11425,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "4114:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4114:79:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11438,
                  "nodeType": "ExpressionStatement",
                  "src": "4114:79:26"
                },
                {
                  "id": 11439,
                  "nodeType": "PlaceholderStatement",
                  "src": "4199:1:26"
                }
              ]
            },
            "documentation": null,
            "id": 11441,
            "name": "anyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 11424,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4108:0:26"
            },
            "src": "4090:115:26",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11447,
            "name": "LogUserApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11446,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11443,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11447,
                  "src": "4520:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11442,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4520:7:26",
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
                  "id": 11445,
                  "indexed": false,
                  "name": "_approvalLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 11447,
                  "src": "4535:19:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11444,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4535:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4519:36:26"
            },
            "src": "4498:58:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11453,
            "name": "LogUserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11449,
                  "indexed": true,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11453,
                  "src": "4580:21:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11448,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4580:7:26",
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
                  "id": 11451,
                  "indexed": true,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 11453,
                  "src": "4603:25:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11450,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4603:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4579:50:26"
            },
            "src": "4559:71:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11459,
            "name": "LogKYCApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11455,
                  "indexed": false,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 11459,
                  "src": "4654:14:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11454,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4654:7:26",
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
                  "id": 11457,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11459,
                  "src": "4670:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11456,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4670:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4653:31:26"
            },
            "src": "4633:52:26"
          }
        ],
        "scope": 11461,
        "src": "592:4095:26"
      }
    ],
    "src": "0:4688:26"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/UserAccess.sol",
    "exportedSymbols": {
      "UserAccess": [
        11460
      ]
    },
    "id": 11461,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11229,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:26"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/alphacontracts/contracts/Database.sol",
        "file": "./Database.sol",
        "id": 11230,
        "nodeType": "ImportDirective",
        "scope": 11461,
        "sourceUnit": 6819,
        "src": "25:24:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 11460,
        "linearizedBaseContracts": [
          11460
        ],
        "name": "UserAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 11232,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 11460,
            "src": "616:24:26",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$6818",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 11231,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6818,
              "src": "616:8:26",
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
            "id": 11237,
            "name": "oneYear",
            "nodeType": "VariableDeclaration",
            "scope": 11460,
            "src": "644:36:26",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 11233,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "644:4:26",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "3331353336303030",
                  "id": 11235,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "671:8:26",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_31536000_by_1",
                    "typeString": "int_const 31536000"
                  },
                  "value": "31536000"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_31536000_by_1",
                    "typeString": "int_const 31536000"
                  }
                ],
                "id": 11234,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "666:4:26",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": "uint"
              },
              "id": 11236,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "666:14:26",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 11248,
              "nodeType": "Block",
              "src": "1029:41:26",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 11246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 11242,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11232,
                      "src": "1035:8:26",
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
                          "id": 11244,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11239,
                          "src": "1055:9:26",
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
                        "id": 11243,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6818,
                        "src": "1046:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$6818_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 11245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1046:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6818",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "1035:30:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$6818",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 11247,
                  "nodeType": "ExpressionStatement",
                  "src": "1035:30:26"
                }
              ]
            },
            "documentation": null,
            "id": 11249,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11239,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 11249,
                  "src": "1000:17:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1000:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "999:19:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11241,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1029:0:26"
            },
            "scope": 11460,
            "src": "988:82:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11324,
              "nodeType": "Block",
              "src": "1778:422:26",
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
                        "id": 11272,
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
                          "id": 11266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11262,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11253,
                            "src": "1792:12:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "34",
                                "id": 11264,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1812:1:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                }
                              ],
                              "id": 11263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1807:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 11265,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1807:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1792:22:26",
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
                          "id": 11271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11267,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11253,
                            "src": "1818:12:26",
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
                                "id": 11269,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1839:1:26",
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
                              "id": 11268,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1834:4:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 11270,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1834:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1818:23:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1792:49:26",
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
                      "id": 11261,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "1784:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1784:58:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11274,
                  "nodeType": "ExpressionStatement",
                  "src": "1784:58:26"
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
                                "id": 11281,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1892:12:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11282,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11251,
                                "src": "1906:8:26",
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
                                "id": 11279,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "1875:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11280,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1875:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1875:40:26",
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
                          "id": 11278,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "1865:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1865:51:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11285,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11253,
                        "src": "1918:12:26",
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
                        "id": 11275,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "1848:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11277,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6615,
                      "src": "1848:16:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 11286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1848:83:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11287,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:83:26"
                },
                {
                  "assignments": [
                    11289
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11289,
                      "name": "expiry",
                      "nodeType": "VariableDeclaration",
                      "scope": 11325,
                      "src": "1937:11:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11288,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1937:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 11293,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 11290,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21211,
                      "src": "1951:3:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 11291,
                      "name": "oneYear",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11237,
                      "src": "1957:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1951:13:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1937:27:26"
                },
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
                        "id": 11301,
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
                          "id": 11297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11295,
                            "name": "expiry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11289,
                            "src": "1978:6:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 11296,
                            "name": "now",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21211,
                            "src": "1987:3:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1978:12:26",
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
                          "id": 11300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 11298,
                            "name": "expiry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11289,
                            "src": "1994:6:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 11299,
                            "name": "oneYear",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11237,
                            "src": "2003:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1994:16:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1978:32:26",
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
                      "id": 11294,
                      "name": "assert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21198,
                      "src": "1970:6:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_assert_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1970:41:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11303,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:41:26"
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
                                "hexValue": "7573657241636365737345787069726174696f6e",
                                "id": 11310,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2085:22:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                "value": "userAccessExpiration"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11311,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11251,
                                "src": "2109:8:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 11308,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2068:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11309,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2068:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11312,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2068:50:26",
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
                          "id": 11307,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2058:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11313,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2058:61:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11314,
                        "name": "expiry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11289,
                        "src": "2121:6:26",
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
                        "id": 11304,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2041:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11306,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6615,
                      "src": "2041:16:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 11315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2041:87:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11316,
                  "nodeType": "ExpressionStatement",
                  "src": "2041:87:26"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 11318,
                        "name": "_newUser",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11251,
                        "src": "2155:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11319,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11253,
                        "src": "2165:12:26",
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
                      "id": 11317,
                      "name": "LogUserApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11447,
                      "src": "2139:15:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2139:39:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11321,
                  "nodeType": "EmitStatement",
                  "src": "2134:44:26"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 11322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2191:4:26",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 11260,
                  "id": 11323,
                  "nodeType": "Return",
                  "src": "2184:11:26"
                }
              ]
            },
            "documentation": null,
            "id": 11325,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 11256,
                    "name": "_newUser",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11251,
                    "src": "1740:8:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 11257,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 11255,
                  "name": "noEmptyAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11423,
                  "src": "1725:14:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1725:24:26"
              }
            ],
            "name": "approveUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11251,
                  "name": "_newUser",
                  "nodeType": "VariableDeclaration",
                  "scope": 11325,
                  "src": "1672:16:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11250,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1672:7:26",
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
                  "id": 11253,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 11325,
                  "src": "1690:17:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11252,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1690:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1671:37:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11259,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11325,
                  "src": "1772:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11258,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1772:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1771:6:26"
            },
            "scope": 11460,
            "src": "1651:549:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11378,
              "nodeType": "Block",
              "src": "2635:322:26",
              "statements": [
                {
                  "assignments": [
                    11335
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11335,
                      "name": "accessLevel",
                      "nodeType": "VariableDeclaration",
                      "scope": 11379,
                      "src": "2641:16:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11334,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2641:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 11346,
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
                                "id": 11341,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2708:12:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11342,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11327,
                                "src": "2722:5:26",
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
                                "id": 11339,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2691:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2691:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11343,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2691:37:26",
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
                          "id": 11338,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2681:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11344,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2681:48:26",
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
                        "id": 11336,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2660:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6450,
                      "src": "2660:20:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 11345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2660:70:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2641:89:26"
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
                                "id": 11353,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2783:12:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11354,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11327,
                                "src": "2797:5:26",
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
                                "id": 11351,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2766:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2766:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11355,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2766:37:26",
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
                          "id": 11350,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2756:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2756:48:26",
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
                        "id": 11347,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2736:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6721,
                      "src": "2736:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 11357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2736:69:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11358,
                  "nodeType": "ExpressionStatement",
                  "src": "2736:69:26"
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
                                "hexValue": "7573657241636365737345787069726174696f6e",
                                "id": 11365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2858:22:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                "value": "userAccessExpiration"
                              },
                              {
                                "argumentTypes": null,
                                "id": 11366,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11327,
                                "src": "2882:5:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_bb843e11d8adbcac014d8c301699b22be6e4845967d798d86d405a3cf6fb4f37",
                                  "typeString": "literal_string \"userAccessExpiration\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 11363,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "2841:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11364,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2841:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11367,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2841:47:26",
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
                          "id": 11362,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "2831:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11368,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2831:58:26",
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
                        "id": 11359,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "2811:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6721,
                      "src": "2811:19:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 11369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2811:79:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11370,
                  "nodeType": "ExpressionStatement",
                  "src": "2811:79:26"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 11372,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11327,
                        "src": "2916:5:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11373,
                        "name": "accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11335,
                        "src": "2923:11:26",
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
                      "id": 11371,
                      "name": "LogUserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11453,
                      "src": "2901:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 11374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2901:34:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11375,
                  "nodeType": "EmitStatement",
                  "src": "2896:39:26"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 11376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2948:4:26",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 11333,
                  "id": 11377,
                  "nodeType": "Return",
                  "src": "2941:11:26"
                }
              ]
            },
            "documentation": null,
            "id": 11379,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 11330,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 11329,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11441,
                  "src": "2598:8:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2598:8:26"
              }
            ],
            "name": "removeUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11327,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11379,
                  "src": "2581:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11326,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2581:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2580:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11332,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11379,
                  "src": "2629:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11331,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2629:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2628:6:26"
            },
            "scope": 11460,
            "src": "2561:396:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11408,
              "nodeType": "Block",
              "src": "3309:133:26",
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
                                "hexValue": "6b7963417070726f766564",
                                "id": 11394,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3359:13:26",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a30fe3fb7cebcbac131a2bc4300f77485d7dfb5057bb2aa0f2d26d32b68d7c9d",
                                  "typeString": "literal_string \"kycApproved\""
                                },
                                "value": "kycApproved"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 11395,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21209,
                                  "src": "3374:3:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 11396,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3374:10:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_a30fe3fb7cebcbac131a2bc4300f77485d7dfb5057bb2aa0f2d26d32b68d7c9d",
                                  "typeString": "literal_string \"kycApproved\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 11392,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21196,
                                "src": "3342:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 11393,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3342:16:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 11397,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3342:43:26",
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
                          "id": 11391,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21203,
                          "src": "3332:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 11398,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3332:54:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 11399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3388:4:26",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 11388,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11232,
                        "src": "3315:8:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6818",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 11390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6679,
                      "src": "3315:16:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 11400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3315:78:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11401,
                  "nodeType": "ExpressionStatement",
                  "src": "3315:78:26"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 11403,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21209,
                          "src": "3419:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3419:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 11405,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11381,
                        "src": "3431:5:26",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 11402,
                      "name": "LogKYCApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11459,
                      "src": "3404:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 11406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3404:33:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11407,
                  "nodeType": "EmitStatement",
                  "src": "3399:38:26"
                }
              ]
            },
            "documentation": null,
            "id": 11409,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 11384,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 11383,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11441,
                  "src": "3272:8:26",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3272:8:26"
              }
            ],
            "name": "approveKYC",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11381,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11409,
                  "src": "3255:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11380,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3254:15:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 11387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11386,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11409,
                  "src": "3303:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 11385,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3303:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3302:6:26"
            },
            "scope": 11460,
            "src": "3235:207:26",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 11422,
              "nodeType": "Block",
              "src": "3759:47:26",
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
                        "id": 11418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 11414,
                          "name": "_param",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11411,
                          "src": "3773:6:26",
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
                              "id": 11416,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3791:1:26",
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
                            "id": 11415,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3783:7:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 11417,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3783:10:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3773:20:26",
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
                      "id": 11413,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "3765:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3765:29:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11420,
                  "nodeType": "ExpressionStatement",
                  "src": "3765:29:26"
                },
                {
                  "id": 11421,
                  "nodeType": "PlaceholderStatement",
                  "src": "3800:1:26"
                }
              ]
            },
            "documentation": null,
            "id": 11423,
            "name": "noEmptyAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 11412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11411,
                  "name": "_param",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "3743:14:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11410,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3742:16:26"
            },
            "src": "3719:87:26",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 11440,
              "nodeType": "Block",
              "src": "4108:97:26",
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
                                    "id": 11431,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4170:7:26",
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
                                      "id": 11432,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21209,
                                      "src": "4179:3:26",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 11433,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4179:10:26",
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
                                    "id": 11429,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21196,
                                    "src": "4153:3:26",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 11430,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4153:16:26",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 11434,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4153:37:26",
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
                              "id": 11428,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21203,
                              "src": "4143:9:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 11435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4143:48:26",
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
                            "id": 11426,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11232,
                            "src": "4122:8:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$6818",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 11427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6470,
                          "src": "4122:20:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 11436,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4122:70:26",
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
                      "id": 11425,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        21212,
                        21213
                      ],
                      "referencedDeclaration": 21212,
                      "src": "4114:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 11437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4114:79:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11438,
                  "nodeType": "ExpressionStatement",
                  "src": "4114:79:26"
                },
                {
                  "id": 11439,
                  "nodeType": "PlaceholderStatement",
                  "src": "4199:1:26"
                }
              ]
            },
            "documentation": null,
            "id": 11441,
            "name": "anyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 11424,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4108:0:26"
            },
            "src": "4090:115:26",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11447,
            "name": "LogUserApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11446,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11443,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11447,
                  "src": "4520:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11442,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4520:7:26",
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
                  "id": 11445,
                  "indexed": false,
                  "name": "_approvalLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 11447,
                  "src": "4535:19:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11444,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4535:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4519:36:26"
            },
            "src": "4498:58:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11453,
            "name": "LogUserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11452,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11449,
                  "indexed": true,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11453,
                  "src": "4580:21:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11448,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4580:7:26",
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
                  "id": 11451,
                  "indexed": true,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 11453,
                  "src": "4603:25:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11450,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4603:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4579:50:26"
            },
            "src": "4559:71:26"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 11459,
            "name": "LogKYCApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 11458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11455,
                  "indexed": false,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 11459,
                  "src": "4654:14:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11454,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4654:7:26",
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
                  "id": 11457,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 11459,
                  "src": "4670:13:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11456,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4670:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4653:31:26"
            },
            "src": "4633:52:26"
          }
        ],
        "scope": 11461,
        "src": "592:4095:26"
      }
    ],
    "src": "0:4688:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-08T14:16:35.238Z"
}