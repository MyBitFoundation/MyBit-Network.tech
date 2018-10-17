"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenFaucet = exports.TokenFaucet = 
{
  "contractName": "TokenFaucet",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "balanceWEI",
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
      "name": "dripAmountWEI",
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
      "name": "tokensInFaucet",
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
      "name": "dripAmountToken",
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
      "constant": true,
      "inputs": [],
      "name": "token",
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
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_accessPass",
          "type": "bytes32"
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
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amountToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_amountWEI",
          "type": "uint256"
        }
      ],
      "name": "LogWithdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_depositer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "LogTokenDeposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_depositer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amountWEI",
          "type": "uint256"
        }
      ],
      "name": "LogEthDeposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_withdrawer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amountWEI",
          "type": "uint256"
        }
      ],
      "name": "LogEthWithdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "LogNewUser",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "receiveApproval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "depositWEI",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_pass",
          "type": "string"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newPass",
          "type": "bytes32"
        }
      ],
      "name": "changePass",
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
          "name": "_newAmountWEI",
          "type": "uint256"
        },
        {
          "name": "_newAmountMYB",
          "type": "uint256"
        }
      ],
      "name": "changeDripAmounts",
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
  "bytecode": "0x608060405269021e19e0c9bab24000006004556706f05b59d3b200006005556301e1338060075534801561003257600080fd5b5060405160608061112d83398101806040528101908080519060200190929190805190602001909291908051906020019092919050505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060068160001916905550505050611026806101076000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630efec2c8146100bf57806331fb67c2146100ea578063443ea6a21461012557806369b384f114610150578063713b563f1461017b5780638f4ffcb1146101d25780639d7a63e914610257578063a707ce55146102a6578063c10726fb146102ef578063c3c5026c1461031a578063f27c3bf614610324578063fc0c546a1461034f575b600080fd5b3480156100cb57600080fd5b506100d46103a6565b6040518082815260200191505060405180910390f35b3480156100f657600080fd5b506101236004803603810190808035906020019082018035906020019190919293919293905050506103ac565b005b34801561013157600080fd5b5061013a6108a3565b6040518082815260200191505060405180910390f35b34801561015c57600080fd5b506101656108a9565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b506101906108af565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101de57600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019082018035906020019190919293919293905050506108d5565b005b34801561026357600080fd5b5061028c6004803603810190808035906020019092919080359060200190929190505050610b54565b604051808215151515815260200191505060405180910390f35b3480156102b257600080fd5b506102d56004803603810190808035600019169060200190929190505050610d31565b604051808215151515815260200191505060405180910390f35b3480156102fb57600080fd5b50610304610f0a565b6040518082815260200191505060405180910390f35b610322610f10565b005b34801561033057600080fd5b50610339610f98565b6040518082815260200191505060405180910390f35b34801561035b57600080fd5b50610364610f9e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60035481565b600080600654600019168484604051602001808383808284378201915050925050506040516020818303038152906040526040518082805190602001908083835b60208310151561041257805182526020820191506020810190506020830392506103ed565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614151561044f57600080fd5b6004546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561050e57600080fd5b505af1158015610522573d6000803e3d6000fd5b505050506040513d602081101561053857600080fd5b810190808051906020019092919050505010156107785761065a6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561060e57600080fd5b505af1158015610622573d6000803e3d6000fd5b505050506040513d602081101561063857600080fd5b8101908080519060200190929190505050600454610fc390919063ffffffff16565b915061067182600254610fc390919063ffffffff16565b6002819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b505050506040513d602081101561076557600080fd5b8101908080519060200190929190505050505b6005543373ffffffffffffffffffffffffffffffffffffffff1631101561082a576107c53373ffffffffffffffffffffffffffffffffffffffff1631600554610fc390919063ffffffff16565b90506107dc81600354610fc390919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610828573d6000803e3d6000fd5b505b7fda9a10d7b992511ddadbfc7ff712c1424ce2058bbcdac8c9876d6f8de590d43f338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a150505050565b60055481565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561095c57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b151561096757600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8630876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610a5f57600080fd5b505af1158015610a73573d6000803e3d6000fd5b505050506040513d6020811015610a8957600080fd5b81019080805190602001909291905050501515610aa557600080fd5b610aba84600254610fdc90919063ffffffff16565b6002819055507f2e5b2de4d94f60cc34fd1409c5b8eee3113137a5a40956b4197ff214e9ece3f985858484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001828103825284848281815260200192508082843782019150509550505050505060405180910390a15050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610c4c5780518252602082019150602081019050602083039250610c27565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610cd357600080fd5b505af1158015610ce7573d6000803e3d6000fd5b505050506040513d6020811015610cfd57600080fd5b81019080805190602001909291905050501515610d1957600080fd5b82600581905550816004819055506001905092915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610e295780518252602082019150602081019050602083039250610e04565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610eb057600080fd5b505af1158015610ec4573d6000803e3d6000fd5b505050506040513d6020811015610eda57600080fd5b81019080805190602001909291905050501515610ef657600080fd5b816006816000191690555060019050919050565b60045481565b610f2534600354610fdc90919063ffffffff16565b6003819055507f512feffb6d2e29aab74dc85ee1ad4f85dfc554a45da6e26d59639451afce59c53334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60075481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000828211151515610fd157fe5b818303905092915050565b6000808284019050838110151515610ff057fe5b80915050929150505600a165627a7a7230582070f4ce441b53570503c4db07a53c8ddef7dab009e790a9b341371e7fc1df73810029",
  "deployedBytecode": "0x6080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630efec2c8146100bf57806331fb67c2146100ea578063443ea6a21461012557806369b384f114610150578063713b563f1461017b5780638f4ffcb1146101d25780639d7a63e914610257578063a707ce55146102a6578063c10726fb146102ef578063c3c5026c1461031a578063f27c3bf614610324578063fc0c546a1461034f575b600080fd5b3480156100cb57600080fd5b506100d46103a6565b6040518082815260200191505060405180910390f35b3480156100f657600080fd5b506101236004803603810190808035906020019082018035906020019190919293919293905050506103ac565b005b34801561013157600080fd5b5061013a6108a3565b6040518082815260200191505060405180910390f35b34801561015c57600080fd5b506101656108a9565b6040518082815260200191505060405180910390f35b34801561018757600080fd5b506101906108af565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101de57600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019082018035906020019190919293919293905050506108d5565b005b34801561026357600080fd5b5061028c6004803603810190808035906020019092919080359060200190929190505050610b54565b604051808215151515815260200191505060405180910390f35b3480156102b257600080fd5b506102d56004803603810190808035600019169060200190929190505050610d31565b604051808215151515815260200191505060405180910390f35b3480156102fb57600080fd5b50610304610f0a565b6040518082815260200191505060405180910390f35b610322610f10565b005b34801561033057600080fd5b50610339610f98565b6040518082815260200191505060405180910390f35b34801561035b57600080fd5b50610364610f9e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60035481565b600080600654600019168484604051602001808383808284378201915050925050506040516020818303038152906040526040518082805190602001908083835b60208310151561041257805182526020820191506020810190506020830392506103ed565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614151561044f57600080fd5b6004546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561050e57600080fd5b505af1158015610522573d6000803e3d6000fd5b505050506040513d602081101561053857600080fd5b810190808051906020019092919050505010156107785761065a6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561060e57600080fd5b505af1158015610622573d6000803e3d6000fd5b505050506040513d602081101561063857600080fd5b8101908080519060200190929190505050600454610fc390919063ffffffff16565b915061067182600254610fc390919063ffffffff16565b6002819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b505050506040513d602081101561076557600080fd5b8101908080519060200190929190505050505b6005543373ffffffffffffffffffffffffffffffffffffffff1631101561082a576107c53373ffffffffffffffffffffffffffffffffffffffff1631600554610fc390919063ffffffff16565b90506107dc81600354610fc390919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610828573d6000803e3d6000fd5b505b7fda9a10d7b992511ddadbfc7ff712c1424ce2058bbcdac8c9876d6f8de590d43f338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a150505050565b60055481565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614801561095c57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b151561096757600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8630876040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610a5f57600080fd5b505af1158015610a73573d6000803e3d6000fd5b505050506040513d6020811015610a8957600080fd5b81019080805190602001909291905050501515610aa557600080fd5b610aba84600254610fdc90919063ffffffff16565b6002819055507f2e5b2de4d94f60cc34fd1409c5b8eee3113137a5a40956b4197ff214e9ece3f985858484604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001828103825284848281815260200192508082843782019150509550505050505060405180910390a15050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610c4c5780518252602082019150602081019050602083039250610c27565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610cd357600080fd5b505af1158015610ce7573d6000803e3d6000fd5b505050506040513d6020811015610cfd57600080fd5b81019080805190602001909291905050501515610d1957600080fd5b82600581905550816004819055506001905092915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f6f776e65720000000000000000000000000000000000000000000000000000008152506005018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610e295780518252602082019150602081019050602083039250610e04565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610eb057600080fd5b505af1158015610ec4573d6000803e3d6000fd5b505050506040513d6020811015610eda57600080fd5b81019080805190602001909291905050501515610ef657600080fd5b816006816000191690555060019050919050565b60045481565b610f2534600354610fdc90919063ffffffff16565b6003819055507f512feffb6d2e29aab74dc85ee1ad4f85dfc554a45da6e26d59639451afce59c53334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60075481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000828211151515610fd157fe5b818303905092915050565b6000808284019050838110151515610ff057fe5b80915050929150505600a165627a7a7230582070f4ce441b53570503c4db07a53c8ddef7dab009e790a9b341371e7fc1df73810029",
  "sourceMap": "346:3035:44:-;;;547:5;512:41;;629:10;601:38;;745:8;718:36;;786:194;8:9:-1;5:2;;;30:1;27;20:12;5:2;786:194:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;891:9;877:8;;:24;;;;;;;;;;;;;;;;;;930:13;908:5;;:36;;;;;;;;;;;;;;;;;;963:11;950:10;:24;;;;;;;786:194;;;346:3035;;;;;;",
  "deployedSourceMap": "346:3035:44:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;484:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;484:22:44;;;;;;;;;;;;;;;;;;;;;;;1710:608;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1710:608:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;601:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;601:38:44;;;;;;;;;;;;;;;;;;;;;;;454:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;454:26:44;;;;;;;;;;;;;;;;;;;;;;;430:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;430:18:44;;;;;;;;;;;;;;;;;;;;;;;;;;;1142:318;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1142:318:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:205;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2456:205:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2322:130;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2322:130:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;512:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;512:41:44;;;;;;;;;;;;;;;;;;;;;;;1498:145;;;;;;718:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;718:36:44;;;;;;;;;;;;;;;;;;;;;;;400:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;400:26:44;;;;;;;;;;;;;;;;;;;;;;;;;;;484:22;;;;:::o;1710:608::-;1884:14;2111;1806:10;;1768:48;;;1795:5;;1778:23;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1778:23:44;;;1768:34;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1768:34:44;;;;;;;;;;;;;;;;:48;;;;1759:58;;;;;;;;1858:15;;1828:5;;;;;;;;;;;:15;;;1844:10;1828:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1828:27:44;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1828:27:44;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1828:27:44;;;;;;;;;;;;;;;;:45;1824:233;;;1901:48;1921:5;;;;;;;;;;;:15;;;1937:10;1921:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1921:27:44;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1921:27:44;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1921:27:44;;;;;;;;;;;;;;;;1901:15;;:19;;:48;;;;:::i;:::-;1884:65;;1975:29;1994:9;1975:14;;:18;;:29;;;;:::i;:::-;1958:14;:46;;;;2012:5;;;;;;;;;;;:14;;;2027:10;2039:9;2012:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2012:37:44;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2012:37:44;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2012:37:44;;;;;;;;;;;;;;;;;1824:233;2087:13;;2066:10;:18;;;:34;2062:196;;;2128:37;2146:10;:18;;;2128:13;;:17;;:37;;;;:::i;:::-;2111:54;;2187:25;2202:9;2187:10;;:14;;:25;;;;:::i;:::-;2174:10;:38;;;;2221:10;:19;;:30;2241:9;2221:30;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2221:30:44;2062:196;2268:45;2280:10;2292:9;2303;2268:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1710:608;;;;:::o;601:38::-;;;;:::o;454:26::-;;;;:::o;430:18::-;;;;;;;;;;;;;:::o;1142:318::-;1260:10;1250:20;;:6;:20;;;:48;;;;;1292:5;;;;;;;;;;;1274:24;;:6;:24;;;1250:48;1242:57;;;;;;;;1313:5;;;;;;;;;;;:18;;;1332:5;1339:4;1345:7;1313:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1313:40:44;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1313:40:44;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1313:40:44;;;;;;;;;;;;;;;;1305:49;;;;;;;;1377:27;1396:7;1377:14;;:18;;:27;;;;:::i;:::-;1360:14;:44;;;;1415:40;1433:5;1440:7;1449:5;;1415:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1142:318;;;;;:::o;2456:205::-;2557:4;2985:8;;;;;;;;;;;:20;;;3042:10;3016:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3016:37:44;;;3006:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3006:48:44;;;;;;;;;;;;;;;;2985:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2985:70:44;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2985:70:44;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2985:70:44;;;;;;;;;;;;;;;;2977:79;;;;;;;;2586:13;2570;:29;;;;2624:13;2606:15;:31;;;;2651:4;2644:11;;2456:205;;;;:::o;2322:130::-;2394:4;2985:8;;;;;;;;;;;:20;;;3042:10;3016:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3016:37:44;;;3006:48;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3006:48:44;;;;;;;;;;;;;;;;2985:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2985:70:44;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2985:70:44;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2985:70:44;;;;;;;;;;;;;;;;2977:79;;;;;;;;2420:8;2407:10;:21;;;;;;;2442:4;2435:11;;2322:130;;;:::o;512:41::-;;;;:::o;1498:145::-;1562:25;1577:9;1562:10;;:14;;:25;;;;:::i;:::-;1549:10;:38;;;;1599;1615:10;1627:9;1599:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;1498:145::o;718:36::-;;;;:::o;400:26::-;;;;;;;;;;;;;:::o;1684:110:33:-;1742:7;1769:1;1764;:6;;1757:14;;;;;;1788:1;1784;:5;1777:12;;1684:110;;;;:::o;2047:129::-;2105:7;2120:9;2136:1;2132;:5;2120:17;;2155:1;2150;:6;;2143:14;;;;;;2170:1;2163:8;;2047:129;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"./erc20/StandardToken.sol\";\nimport \"../interfaces/BurnableERC20.sol\";\nimport \"../math/SafeMath.sol\";\n\ninterface DB { function boolStorage(bytes32 _key) external view returns (bool); }\n\n// @notice Registers users and provides them with a minimum amount of MYB and Ether\n// Note: Not secure. Use for test-net only.\ncontract TokenFaucet {\n  using SafeMath for uint; \n\n  StandardToken public token;\n  DB public database; \n\n  uint public tokensInFaucet;\n  uint public balanceWEI; \n\n  uint public dripAmountToken = uint(10e21);     // User should have at least 10,000 MYB\n  uint public dripAmountWEI = 500 finney;    // User should have at least .5 Ether \n\n  bytes32 private accessPass; \n\n  uint public oneYear = uint(31536000);    // 365 days in seconds\n\n\n  constructor(address _database, address _tokenAddress, bytes32 _accessPass)\n  public  {\n    database = DB(_database); \n    token = StandardToken(_tokenAddress);\n    accessPass = _accessPass; \n  }\n\n  // For owner to deposit tokens easier\n  // @dev call StandardToken.receiveAndCall(_spender=mybFaucet.address, _amount * 10^18, StandardToken.address, 0x0) \n  function receiveApproval(address _from, uint _amount, address _token, bytes _data)\n  external {\n    require(_token == msg.sender && _token == address(token));\n    require(token.transferFrom(_from, this, _amount));\n    tokensInFaucet = tokensInFaucet.add(_amount);\n    emit LogTokenDeposited(_from, _amount, _data);\n  }\n\n  // Can deposit more WEI in here\n  function depositWEI()\n  external \n  payable { \n    balanceWEI = balanceWEI.add(msg.value); \n    emit LogEthDeposited(msg.sender, msg.value); \n  }\n\n    // Lazy defence. accessPass is mild deterent, not secure. \n  function withdraw(string _pass)\n  external {\n    require (keccak256(abi.encodePacked(_pass)) == accessPass); \n    if (token.balanceOf(msg.sender) < dripAmountToken) { \n      uint amountMYB = dripAmountToken.sub(token.balanceOf(msg.sender)); \n      tokensInFaucet = tokensInFaucet.sub(amountMYB);\n      token.transfer(msg.sender, amountMYB); \n    }\n    if (msg.sender.balance < dripAmountWEI) { \n      uint amountWEI = dripAmountWEI.sub(msg.sender.balance); \n      balanceWEI = balanceWEI.sub(amountWEI); \n      msg.sender.transfer(amountWEI);\n    }\n    emit LogWithdraw(msg.sender, amountMYB, amountWEI);\n  }\n\n  function changePass(bytes32 _newPass)\n  external \n  anyOwner\n  returns (bool) { \n    accessPass = _newPass; \n    return true; \n  }\n\n  function changeDripAmounts(uint _newAmountWEI, uint _newAmountMYB)\n  external \n  anyOwner\n  returns (bool) { \n    dripAmountWEI = _newAmountWEI; \n    dripAmountToken = _newAmountMYB; \n    return true; \n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  // Verify that the sender is a registered owner\n  //------------------------------------------------------------------------------------------------------------------\n  modifier anyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  event LogWithdraw(address _sender, uint _amountToken, uint _amountWEI);\n  event LogTokenDeposited(address _depositer, uint _amount, bytes _data);\n  event LogEthDeposited(address _depositer, uint _amountWEI); \n  event LogEthWithdraw(address _withdrawer, uint _amountWEI); \n  event LogNewUser(address _user); \n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/TokenFaucet.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/TokenFaucet.sol",
    "exportedSymbols": {
      "DB": [
        10653
      ],
      "TokenFaucet": [
        10950
      ]
    },
    "id": 10951,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10642,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:44"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/StandardToken.sol",
        "file": "./erc20/StandardToken.sol",
        "id": 10643,
        "nodeType": "ImportDirective",
        "scope": 10951,
        "sourceUnit": 13383,
        "src": "25:35:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
        "file": "../interfaces/BurnableERC20.sol",
        "id": 10644,
        "nodeType": "ImportDirective",
        "scope": 10951,
        "sourceUnit": 8032,
        "src": "61:41:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 10645,
        "nodeType": "ImportDirective",
        "scope": 10951,
        "sourceUnit": 8663,
        "src": "103:30:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 10653,
        "linearizedBaseContracts": [
          10653
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10652,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10647,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 10652,
                  "src": "171:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10646,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "170:14:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10650,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10652,
                  "src": "208:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10649,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:6:44"
            },
            "scope": 10653,
            "src": "150:64:44",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 10951,
        "src": "135:81:44"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10950,
        "linearizedBaseContracts": [
          10950
        ],
        "name": "TokenFaucet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10656,
            "libraryName": {
              "contractScope": null,
              "id": 10654,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8662,
              "src": "377:8:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8662",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "371:24:44",
            "typeName": {
              "id": 10655,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "390:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 10658,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "400:26:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_StandardToken_$13382",
              "typeString": "contract StandardToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 10657,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13382,
              "src": "400:13:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$13382",
                "typeString": "contract StandardToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10660,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "430:18:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$10653",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 10659,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10653,
              "src": "430:2:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$10653",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10662,
            "name": "tokensInFaucet",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "454:26:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10661,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "454:4:44",
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
            "id": 10664,
            "name": "balanceWEI",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "484:22:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10663,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "484:4:44",
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
            "id": 10669,
            "name": "dripAmountToken",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "512:41:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10665,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "512:4:44",
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
                  "hexValue": "3130653231",
                  "id": 10667,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "547:5:44",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10000000000000000000000_by_1",
                    "typeString": "int_const 10000000000000000000000"
                  },
                  "value": "10e21"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_10000000000000000000000_by_1",
                    "typeString": "int_const 10000000000000000000000"
                  }
                ],
                "id": 10666,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "542:4:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": "uint"
              },
              "id": 10668,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "542:11:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10672,
            "name": "dripAmountWEI",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "601:38:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10670,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "601:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "353030",
              "id": 10671,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "629:10:44",
              "subdenomination": "finney",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_500000000000000000_by_1",
                "typeString": "int_const 500000000000000000"
              },
              "value": "500"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10674,
            "name": "accessPass",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "686:26:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 10673,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "686:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10679,
            "name": "oneYear",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "718:36:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10675,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "718:4:44",
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
                  "id": 10677,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "745:8:44",
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
                "id": 10676,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "740:4:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": "uint"
              },
              "id": 10678,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "740:14:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 10704,
              "nodeType": "Block",
              "src": "871:109:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10692,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10688,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10660,
                      "src": "877:8:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$10653",
                        "typeString": "contract DB"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10690,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10681,
                          "src": "891:9:44",
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
                        "id": 10689,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10653,
                        "src": "888:2:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$10653_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 10691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "888:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$10653",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "877:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$10653",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 10693,
                  "nodeType": "ExpressionStatement",
                  "src": "877:24:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10694,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10658,
                      "src": "908:5:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_StandardToken_$13382",
                        "typeString": "contract StandardToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10696,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10683,
                          "src": "930:13:44",
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
                        "id": 10695,
                        "name": "StandardToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13382,
                        "src": "916:13:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_StandardToken_$13382_$",
                          "typeString": "type(contract StandardToken)"
                        }
                      },
                      "id": 10697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "916:28:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_StandardToken_$13382",
                        "typeString": "contract StandardToken"
                      }
                    },
                    "src": "908:36:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_StandardToken_$13382",
                      "typeString": "contract StandardToken"
                    }
                  },
                  "id": 10699,
                  "nodeType": "ExpressionStatement",
                  "src": "908:36:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10700,
                      "name": "accessPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10674,
                      "src": "950:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10701,
                      "name": "_accessPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10685,
                      "src": "963:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "950:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10703,
                  "nodeType": "ExpressionStatement",
                  "src": "950:24:44"
                }
              ]
            },
            "documentation": null,
            "id": 10705,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10681,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 10705,
                  "src": "798:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "798:7:44",
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
                  "id": 10683,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 10705,
                  "src": "817:21:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:7:44",
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
                  "id": 10685,
                  "name": "_accessPass",
                  "nodeType": "VariableDeclaration",
                  "scope": 10705,
                  "src": "840:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10684,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "840:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "797:63:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "871:0:44"
            },
            "scope": 10950,
            "src": "786:194:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10751,
              "nodeType": "Block",
              "src": "1236:224:44",
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
                        "id": 10726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 10720,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 10717,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10711,
                            "src": "1250:6:44",
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
                              "id": 10718,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13397,
                              "src": "1260:3:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1260:10:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1250:20:44",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 10725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 10721,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10711,
                            "src": "1274:6:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 10723,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10658,
                                "src": "1292:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_StandardToken_$13382",
                                  "typeString": "contract StandardToken"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_StandardToken_$13382",
                                  "typeString": "contract StandardToken"
                                }
                              ],
                              "id": 10722,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1284:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 10724,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1284:14:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1274:24:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1250:48:44",
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
                      "id": 10716,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "1242:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1242:57:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10728,
                  "nodeType": "ExpressionStatement",
                  "src": "1242:57:44"
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
                            "id": 10732,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10707,
                            "src": "1332:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 10733,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13526,
                            "src": "1339:4:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenFaucet_$10950",
                              "typeString": "contract TokenFaucet"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 10734,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10709,
                            "src": "1345:7:44",
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
                              "typeIdentifier": "t_contract$_TokenFaucet_$10950",
                              "typeString": "contract TokenFaucet"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 10730,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10658,
                            "src": "1313:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_StandardToken_$13382",
                              "typeString": "contract StandardToken"
                            }
                          },
                          "id": 10731,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13259,
                          "src": "1313:18:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 10735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1313:40:44",
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
                      "id": 10729,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "1305:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1305:49:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10737,
                  "nodeType": "ExpressionStatement",
                  "src": "1305:49:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10738,
                      "name": "tokensInFaucet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10662,
                      "src": "1360:14:44",
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
                          "id": 10741,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10709,
                          "src": "1396:7:44",
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
                          "id": 10739,
                          "name": "tokensInFaucet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10662,
                          "src": "1377:14:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10740,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8592,
                        "src": "1377:18:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10742,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1377:27:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1360:44:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10744,
                  "nodeType": "ExpressionStatement",
                  "src": "1360:44:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10746,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10707,
                        "src": "1433:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10747,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10709,
                        "src": "1440:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10748,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10713,
                        "src": "1449:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
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
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 10745,
                      "name": "LogTokenDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10933,
                      "src": "1415:17:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 10749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1415:40:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10750,
                  "nodeType": "EmitStatement",
                  "src": "1410:45:44"
                }
              ]
            },
            "documentation": null,
            "id": 10752,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10707,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1167:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10706,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1167:7:44",
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
                  "id": 10709,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1182:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10708,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:4:44",
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
                  "id": 10711,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1196:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10710,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1196:7:44",
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
                  "id": 10713,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1212:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10712,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1212:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1166:58:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1236:0:44"
            },
            "scope": 10950,
            "src": "1142:318:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10770,
              "nodeType": "Block",
              "src": "1542:101:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10755,
                      "name": "balanceWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10664,
                      "src": "1549:10:44",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 10758,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13397,
                            "src": "1577:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1577:9:44",
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
                          "id": 10756,
                          "name": "balanceWEI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10664,
                          "src": "1562:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10757,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8592,
                        "src": "1562:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10760,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1562:25:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1549:38:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10762,
                  "nodeType": "ExpressionStatement",
                  "src": "1549:38:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10764,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "1615:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1615:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10766,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "1627:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10767,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1627:9:44",
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
                      "id": 10763,
                      "name": "LogEthDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10939,
                      "src": "1599:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1599:38:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10769,
                  "nodeType": "EmitStatement",
                  "src": "1594:43:44"
                }
              ]
            },
            "documentation": null,
            "id": 10771,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "depositWEI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1517:2:44"
            },
            "payable": true,
            "returnParameters": {
              "id": 10754,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1542:0:44"
            },
            "scope": 10950,
            "src": "1498:145:44",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10860,
              "nodeType": "Block",
              "src": "1753:565:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 10784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10780,
                                  "name": "_pass",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10773,
                                  "src": "1795:5:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_calldata_ptr",
                                    "typeString": "string calldata"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_calldata_ptr",
                                    "typeString": "string calldata"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10778,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13384,
                                  "src": "1778:3:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 10779,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1778:16:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 10781,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1778:23:44",
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
                            "id": 10777,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13391,
                            "src": "1768:9:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                              "typeString": "function () pure returns (bytes32)"
                            }
                          },
                          "id": 10782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1768:34:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 10783,
                          "name": "accessPass",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10674,
                          "src": "1806:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "1768:48:44",
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
                      "id": 10776,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "1759:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1759:58:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10786,
                  "nodeType": "ExpressionStatement",
                  "src": "1759:58:44"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10789,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13397,
                            "src": "1844:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10790,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1844:10:44",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 10787,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10658,
                          "src": "1828:5:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_StandardToken_$13382",
                            "typeString": "contract StandardToken"
                          }
                        },
                        "id": 10788,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13381,
                        "src": "1828:15:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 10791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1828:27:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 10792,
                      "name": "dripAmountToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10669,
                      "src": "1858:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1828:45:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 10821,
                  "nodeType": "IfStatement",
                  "src": "1824:233:44",
                  "trueBody": {
                    "id": 10820,
                    "nodeType": "Block",
                    "src": "1875:182:44",
                    "statements": [
                      {
                        "assignments": [
                          10795
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10795,
                            "name": "amountMYB",
                            "nodeType": "VariableDeclaration",
                            "scope": 10861,
                            "src": "1884:14:44",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10794,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "1884:4:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 10804,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 10800,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13397,
                                    "src": "1937:3:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 10801,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1937:10:44",
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
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10798,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10658,
                                  "src": "1921:5:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_StandardToken_$13382",
                                    "typeString": "contract StandardToken"
                                  }
                                },
                                "id": 10799,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "balanceOf",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13381,
                                "src": "1921:15:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) view external returns (uint256)"
                                }
                              },
                              "id": 10802,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1921:27:44",
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
                              "id": 10796,
                              "name": "dripAmountToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10669,
                              "src": "1901:15:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10797,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8568,
                            "src": "1901:19:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10803,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1901:48:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1884:65:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 10805,
                            "name": "tokensInFaucet",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10662,
                            "src": "1958:14:44",
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
                                "id": 10808,
                                "name": "amountMYB",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10795,
                                "src": "1994:9:44",
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
                                "id": 10806,
                                "name": "tokensInFaucet",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10662,
                                "src": "1975:14:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10807,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8568,
                              "src": "1975:18:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1975:29:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1958:46:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10811,
                        "nodeType": "ExpressionStatement",
                        "src": "1958:46:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 10815,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13397,
                                "src": "2027:3:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10816,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2027:10:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 10817,
                              "name": "amountMYB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10795,
                              "src": "2039:9:44",
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
                              "id": 10812,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10658,
                              "src": "2012:5:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_StandardToken_$13382",
                                "typeString": "contract StandardToken"
                              }
                            },
                            "id": 10814,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13145,
                            "src": "2012:14:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 10818,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2012:37:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 10819,
                        "nodeType": "ExpressionStatement",
                        "src": "2012:37:44"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10822,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "2066:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2066:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 10824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2066:18:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 10825,
                      "name": "dripAmountWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10672,
                      "src": "2087:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2066:34:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 10852,
                  "nodeType": "IfStatement",
                  "src": "2062:196:44",
                  "trueBody": {
                    "id": 10851,
                    "nodeType": "Block",
                    "src": "2102:156:44",
                    "statements": [
                      {
                        "assignments": [
                          10828
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10828,
                            "name": "amountWEI",
                            "nodeType": "VariableDeclaration",
                            "scope": 10861,
                            "src": "2111:14:44",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10827,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "2111:4:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 10835,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10831,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13397,
                                  "src": "2146:3:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 10832,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2146:10:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 10833,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "balance",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2146:18:44",
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
                              "id": 10829,
                              "name": "dripAmountWEI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10672,
                              "src": "2128:13:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8568,
                            "src": "2128:17:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2128:37:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2111:54:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10841,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 10836,
                            "name": "balanceWEI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10664,
                            "src": "2174:10:44",
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
                                "id": 10839,
                                "name": "amountWEI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10828,
                                "src": "2202:9:44",
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
                                "id": 10837,
                                "name": "balanceWEI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10664,
                                "src": "2187:10:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10838,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8568,
                              "src": "2187:14:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10840,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2187:25:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2174:38:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10842,
                        "nodeType": "ExpressionStatement",
                        "src": "2174:38:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10848,
                              "name": "amountWEI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10828,
                              "src": "2241:9:44",
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
                                "id": 10843,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13397,
                                "src": "2221:3:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10846,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2221:10:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 10847,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2221:19:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 10849,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2221:30:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10850,
                        "nodeType": "ExpressionStatement",
                        "src": "2221:30:44"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10854,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "2280:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2280:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10856,
                        "name": "amountMYB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10795,
                        "src": "2292:9:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10857,
                        "name": "amountWEI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10828,
                        "src": "2303:9:44",
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
                      "id": 10853,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10925,
                      "src": "2268:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 10858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2268:45:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10859,
                  "nodeType": "EmitStatement",
                  "src": "2263:50:44"
                }
              ]
            },
            "documentation": null,
            "id": 10861,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10773,
                  "name": "_pass",
                  "nodeType": "VariableDeclaration",
                  "scope": 10861,
                  "src": "1728:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10772,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1728:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1727:14:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1753:0:44"
            },
            "scope": 10950,
            "src": "1710:608:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10876,
              "nodeType": "Block",
              "src": "2400:52:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10872,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10870,
                      "name": "accessPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10674,
                      "src": "2407:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10871,
                      "name": "_newPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10863,
                      "src": "2420:8:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2407:21:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10873,
                  "nodeType": "ExpressionStatement",
                  "src": "2407:21:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2442:4:44",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10869,
                  "id": 10875,
                  "nodeType": "Return",
                  "src": "2435:11:44"
                }
              ]
            },
            "documentation": null,
            "id": 10877,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10866,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10865,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10917,
                  "src": "2374:8:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2374:8:44"
              }
            ],
            "name": "changePass",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10863,
                  "name": "_newPass",
                  "nodeType": "VariableDeclaration",
                  "scope": 10877,
                  "src": "2342:16:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10862,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2341:18:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10868,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10877,
                  "src": "2394:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10867,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2394:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2393:6:44"
            },
            "scope": 10950,
            "src": "2322:130:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10898,
              "nodeType": "Block",
              "src": "2563:98:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10888,
                      "name": "dripAmountWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10672,
                      "src": "2570:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10889,
                      "name": "_newAmountWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10879,
                      "src": "2586:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2570:29:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10891,
                  "nodeType": "ExpressionStatement",
                  "src": "2570:29:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10892,
                      "name": "dripAmountToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10669,
                      "src": "2606:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10893,
                      "name": "_newAmountMYB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10881,
                      "src": "2624:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2606:31:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10895,
                  "nodeType": "ExpressionStatement",
                  "src": "2606:31:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2651:4:44",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10887,
                  "id": 10897,
                  "nodeType": "Return",
                  "src": "2644:11:44"
                }
              ]
            },
            "documentation": null,
            "id": 10899,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10884,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10883,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10917,
                  "src": "2537:8:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2537:8:44"
              }
            ],
            "name": "changeDripAmounts",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10879,
                  "name": "_newAmountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10899,
                  "src": "2483:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10878,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2483:4:44",
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
                  "id": 10881,
                  "name": "_newAmountMYB",
                  "nodeType": "VariableDeclaration",
                  "scope": 10899,
                  "src": "2503:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10880,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2503:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2482:40:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10899,
                  "src": "2557:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10885,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2557:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2556:6:44"
            },
            "scope": 10950,
            "src": "2456:205:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10916,
              "nodeType": "Block",
              "src": "2971:97:44",
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
                                    "id": 10907,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3033:7:44",
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
                                      "id": 10908,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13397,
                                      "src": "3042:3:44",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 10909,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3042:10:44",
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
                                    "id": 10905,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13384,
                                    "src": "3016:3:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 10906,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3016:16:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 10910,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3016:37:44",
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
                              "id": 10904,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13391,
                              "src": "3006:9:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 10911,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3006:48:44",
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
                            "id": 10902,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10660,
                            "src": "2985:8:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$10653",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 10903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10652,
                          "src": "2985:20:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 10912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2985:70:44",
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
                      "id": 10901,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "2977:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2977:79:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10914,
                  "nodeType": "ExpressionStatement",
                  "src": "2977:79:44"
                },
                {
                  "id": 10915,
                  "nodeType": "PlaceholderStatement",
                  "src": "3062:1:44"
                }
              ]
            },
            "documentation": null,
            "id": 10917,
            "name": "anyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10900,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2971:0:44"
            },
            "src": "2953:115:44",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10925,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10919,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10925,
                  "src": "3090:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3090:7:44",
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
                  "id": 10921,
                  "indexed": false,
                  "name": "_amountToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 10925,
                  "src": "3107:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10920,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3107:4:44",
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
                  "id": 10923,
                  "indexed": false,
                  "name": "_amountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10925,
                  "src": "3126:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10922,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3126:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3089:53:44"
            },
            "src": "3072:71:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10933,
            "name": "LogTokenDeposited",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10927,
                  "indexed": false,
                  "name": "_depositer",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "3170:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3170:7:44",
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
                  "id": 10929,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "3190:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10928,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3190:4:44",
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
                  "id": 10931,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "3204:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10930,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3204:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3169:47:44"
            },
            "src": "3146:71:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10939,
            "name": "LogEthDeposited",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10935,
                  "indexed": false,
                  "name": "_depositer",
                  "nodeType": "VariableDeclaration",
                  "scope": 10939,
                  "src": "3242:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:44",
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
                  "id": 10937,
                  "indexed": false,
                  "name": "_amountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10939,
                  "src": "3262:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10936,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3262:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:37:44"
            },
            "src": "3220:59:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10945,
            "name": "LogEthWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10941,
                  "indexed": false,
                  "name": "_withdrawer",
                  "nodeType": "VariableDeclaration",
                  "scope": 10945,
                  "src": "3304:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3304:7:44",
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
                  "id": 10943,
                  "indexed": false,
                  "name": "_amountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10945,
                  "src": "3325:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10942,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3325:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3303:38:44"
            },
            "src": "3283:59:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10949,
            "name": "LogNewUser",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10947,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10949,
                  "src": "3363:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3363:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3362:15:44"
            },
            "src": "3346:32:44"
          }
        ],
        "scope": 10951,
        "src": "346:3035:44"
      }
    ],
    "src": "0:3382:44"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/TokenFaucet.sol",
    "exportedSymbols": {
      "DB": [
        10653
      ],
      "TokenFaucet": [
        10950
      ]
    },
    "id": 10951,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10642,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:44"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/StandardToken.sol",
        "file": "./erc20/StandardToken.sol",
        "id": 10643,
        "nodeType": "ImportDirective",
        "scope": 10951,
        "sourceUnit": 13383,
        "src": "25:35:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
        "file": "../interfaces/BurnableERC20.sol",
        "id": 10644,
        "nodeType": "ImportDirective",
        "scope": 10951,
        "sourceUnit": 8032,
        "src": "61:41:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 10645,
        "nodeType": "ImportDirective",
        "scope": 10951,
        "sourceUnit": 8663,
        "src": "103:30:44",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 10653,
        "linearizedBaseContracts": [
          10653
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10652,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10647,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 10652,
                  "src": "171:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10646,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "170:14:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10651,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10650,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10652,
                  "src": "208:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10649,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:6:44"
            },
            "scope": 10653,
            "src": "150:64:44",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 10951,
        "src": "135:81:44"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10950,
        "linearizedBaseContracts": [
          10950
        ],
        "name": "TokenFaucet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10656,
            "libraryName": {
              "contractScope": null,
              "id": 10654,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8662,
              "src": "377:8:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8662",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "371:24:44",
            "typeName": {
              "id": 10655,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "390:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 10658,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "400:26:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_StandardToken_$13382",
              "typeString": "contract StandardToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 10657,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13382,
              "src": "400:13:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$13382",
                "typeString": "contract StandardToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10660,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "430:18:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$10653",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 10659,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10653,
              "src": "430:2:44",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$10653",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10662,
            "name": "tokensInFaucet",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "454:26:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10661,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "454:4:44",
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
            "id": 10664,
            "name": "balanceWEI",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "484:22:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10663,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "484:4:44",
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
            "id": 10669,
            "name": "dripAmountToken",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "512:41:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10665,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "512:4:44",
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
                  "hexValue": "3130653231",
                  "id": 10667,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "547:5:44",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10000000000000000000000_by_1",
                    "typeString": "int_const 10000000000000000000000"
                  },
                  "value": "10e21"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_10000000000000000000000_by_1",
                    "typeString": "int_const 10000000000000000000000"
                  }
                ],
                "id": 10666,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "542:4:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": "uint"
              },
              "id": 10668,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "542:11:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10672,
            "name": "dripAmountWEI",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "601:38:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10670,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "601:4:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "353030",
              "id": 10671,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "629:10:44",
              "subdenomination": "finney",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_500000000000000000_by_1",
                "typeString": "int_const 500000000000000000"
              },
              "value": "500"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10674,
            "name": "accessPass",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "686:26:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 10673,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "686:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10679,
            "name": "oneYear",
            "nodeType": "VariableDeclaration",
            "scope": 10950,
            "src": "718:36:44",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10675,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "718:4:44",
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
                  "id": 10677,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "745:8:44",
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
                "id": 10676,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "740:4:44",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_uint256_$",
                  "typeString": "type(uint256)"
                },
                "typeName": "uint"
              },
              "id": 10678,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "740:14:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 10704,
              "nodeType": "Block",
              "src": "871:109:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10692,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10688,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10660,
                      "src": "877:8:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$10653",
                        "typeString": "contract DB"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10690,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10681,
                          "src": "891:9:44",
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
                        "id": 10689,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10653,
                        "src": "888:2:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$10653_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 10691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "888:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$10653",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "877:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$10653",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 10693,
                  "nodeType": "ExpressionStatement",
                  "src": "877:24:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10694,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10658,
                      "src": "908:5:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_StandardToken_$13382",
                        "typeString": "contract StandardToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10696,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10683,
                          "src": "930:13:44",
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
                        "id": 10695,
                        "name": "StandardToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13382,
                        "src": "916:13:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_StandardToken_$13382_$",
                          "typeString": "type(contract StandardToken)"
                        }
                      },
                      "id": 10697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "916:28:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_StandardToken_$13382",
                        "typeString": "contract StandardToken"
                      }
                    },
                    "src": "908:36:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_StandardToken_$13382",
                      "typeString": "contract StandardToken"
                    }
                  },
                  "id": 10699,
                  "nodeType": "ExpressionStatement",
                  "src": "908:36:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10702,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10700,
                      "name": "accessPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10674,
                      "src": "950:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10701,
                      "name": "_accessPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10685,
                      "src": "963:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "950:24:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10703,
                  "nodeType": "ExpressionStatement",
                  "src": "950:24:44"
                }
              ]
            },
            "documentation": null,
            "id": 10705,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10681,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 10705,
                  "src": "798:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "798:7:44",
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
                  "id": 10683,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 10705,
                  "src": "817:21:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:7:44",
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
                  "id": 10685,
                  "name": "_accessPass",
                  "nodeType": "VariableDeclaration",
                  "scope": 10705,
                  "src": "840:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10684,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "840:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "797:63:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "871:0:44"
            },
            "scope": 10950,
            "src": "786:194:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10751,
              "nodeType": "Block",
              "src": "1236:224:44",
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
                        "id": 10726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 10720,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 10717,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10711,
                            "src": "1250:6:44",
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
                              "id": 10718,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13397,
                              "src": "1260:3:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10719,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1260:10:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1250:20:44",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 10725,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 10721,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10711,
                            "src": "1274:6:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 10723,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10658,
                                "src": "1292:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_StandardToken_$13382",
                                  "typeString": "contract StandardToken"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_StandardToken_$13382",
                                  "typeString": "contract StandardToken"
                                }
                              ],
                              "id": 10722,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1284:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 10724,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1284:14:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1274:24:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1250:48:44",
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
                      "id": 10716,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "1242:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1242:57:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10728,
                  "nodeType": "ExpressionStatement",
                  "src": "1242:57:44"
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
                            "id": 10732,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10707,
                            "src": "1332:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 10733,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13526,
                            "src": "1339:4:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenFaucet_$10950",
                              "typeString": "contract TokenFaucet"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 10734,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10709,
                            "src": "1345:7:44",
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
                              "typeIdentifier": "t_contract$_TokenFaucet_$10950",
                              "typeString": "contract TokenFaucet"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 10730,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10658,
                            "src": "1313:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_StandardToken_$13382",
                              "typeString": "contract StandardToken"
                            }
                          },
                          "id": 10731,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13259,
                          "src": "1313:18:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 10735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1313:40:44",
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
                      "id": 10729,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "1305:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1305:49:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10737,
                  "nodeType": "ExpressionStatement",
                  "src": "1305:49:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10743,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10738,
                      "name": "tokensInFaucet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10662,
                      "src": "1360:14:44",
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
                          "id": 10741,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10709,
                          "src": "1396:7:44",
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
                          "id": 10739,
                          "name": "tokensInFaucet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10662,
                          "src": "1377:14:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10740,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8592,
                        "src": "1377:18:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10742,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1377:27:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1360:44:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10744,
                  "nodeType": "ExpressionStatement",
                  "src": "1360:44:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10746,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10707,
                        "src": "1433:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10747,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10709,
                        "src": "1440:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10748,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10713,
                        "src": "1449:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
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
                          "typeIdentifier": "t_bytes_calldata_ptr",
                          "typeString": "bytes calldata"
                        }
                      ],
                      "id": 10745,
                      "name": "LogTokenDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10933,
                      "src": "1415:17:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 10749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1415:40:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10750,
                  "nodeType": "EmitStatement",
                  "src": "1410:45:44"
                }
              ]
            },
            "documentation": null,
            "id": 10752,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10707,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1167:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10706,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1167:7:44",
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
                  "id": 10709,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1182:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10708,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1182:4:44",
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
                  "id": 10711,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1196:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10710,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1196:7:44",
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
                  "id": 10713,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10752,
                  "src": "1212:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10712,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1212:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1166:58:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1236:0:44"
            },
            "scope": 10950,
            "src": "1142:318:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10770,
              "nodeType": "Block",
              "src": "1542:101:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10755,
                      "name": "balanceWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10664,
                      "src": "1549:10:44",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 10758,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13397,
                            "src": "1577:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1577:9:44",
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
                          "id": 10756,
                          "name": "balanceWEI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10664,
                          "src": "1562:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10757,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8592,
                        "src": "1562:14:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10760,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1562:25:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1549:38:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10762,
                  "nodeType": "ExpressionStatement",
                  "src": "1549:38:44"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10764,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "1615:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1615:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10766,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "1627:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10767,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1627:9:44",
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
                      "id": 10763,
                      "name": "LogEthDeposited",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10939,
                      "src": "1599:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1599:38:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10769,
                  "nodeType": "EmitStatement",
                  "src": "1594:43:44"
                }
              ]
            },
            "documentation": null,
            "id": 10771,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "depositWEI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1517:2:44"
            },
            "payable": true,
            "returnParameters": {
              "id": 10754,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1542:0:44"
            },
            "scope": 10950,
            "src": "1498:145:44",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10860,
              "nodeType": "Block",
              "src": "1753:565:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 10784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10780,
                                  "name": "_pass",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10773,
                                  "src": "1795:5:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_calldata_ptr",
                                    "typeString": "string calldata"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_calldata_ptr",
                                    "typeString": "string calldata"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10778,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13384,
                                  "src": "1778:3:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 10779,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1778:16:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 10781,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1778:23:44",
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
                            "id": 10777,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13391,
                            "src": "1768:9:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                              "typeString": "function () pure returns (bytes32)"
                            }
                          },
                          "id": 10782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1768:34:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 10783,
                          "name": "accessPass",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10674,
                          "src": "1806:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "1768:48:44",
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
                      "id": 10776,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "1759:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1759:58:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10786,
                  "nodeType": "ExpressionStatement",
                  "src": "1759:58:44"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 10789,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13397,
                            "src": "1844:3:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10790,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1844:10:44",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 10787,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10658,
                          "src": "1828:5:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_StandardToken_$13382",
                            "typeString": "contract StandardToken"
                          }
                        },
                        "id": 10788,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13381,
                        "src": "1828:15:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 10791,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1828:27:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 10792,
                      "name": "dripAmountToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10669,
                      "src": "1858:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1828:45:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 10821,
                  "nodeType": "IfStatement",
                  "src": "1824:233:44",
                  "trueBody": {
                    "id": 10820,
                    "nodeType": "Block",
                    "src": "1875:182:44",
                    "statements": [
                      {
                        "assignments": [
                          10795
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10795,
                            "name": "amountMYB",
                            "nodeType": "VariableDeclaration",
                            "scope": 10861,
                            "src": "1884:14:44",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10794,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "1884:4:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 10804,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 10800,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13397,
                                    "src": "1937:3:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 10801,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1937:10:44",
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
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10798,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10658,
                                  "src": "1921:5:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_StandardToken_$13382",
                                    "typeString": "contract StandardToken"
                                  }
                                },
                                "id": 10799,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "balanceOf",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13381,
                                "src": "1921:15:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) view external returns (uint256)"
                                }
                              },
                              "id": 10802,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1921:27:44",
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
                              "id": 10796,
                              "name": "dripAmountToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10669,
                              "src": "1901:15:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10797,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8568,
                            "src": "1901:19:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10803,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1901:48:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1884:65:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 10805,
                            "name": "tokensInFaucet",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10662,
                            "src": "1958:14:44",
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
                                "id": 10808,
                                "name": "amountMYB",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10795,
                                "src": "1994:9:44",
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
                                "id": 10806,
                                "name": "tokensInFaucet",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10662,
                                "src": "1975:14:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10807,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8568,
                              "src": "1975:18:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10809,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1975:29:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1958:46:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10811,
                        "nodeType": "ExpressionStatement",
                        "src": "1958:46:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 10815,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13397,
                                "src": "2027:3:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10816,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2027:10:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 10817,
                              "name": "amountMYB",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10795,
                              "src": "2039:9:44",
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
                              "id": 10812,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10658,
                              "src": "2012:5:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_StandardToken_$13382",
                                "typeString": "contract StandardToken"
                              }
                            },
                            "id": 10814,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13145,
                            "src": "2012:14:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 10818,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2012:37:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 10819,
                        "nodeType": "ExpressionStatement",
                        "src": "2012:37:44"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10822,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "2066:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2066:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 10824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2066:18:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 10825,
                      "name": "dripAmountWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10672,
                      "src": "2087:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2066:34:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 10852,
                  "nodeType": "IfStatement",
                  "src": "2062:196:44",
                  "trueBody": {
                    "id": 10851,
                    "nodeType": "Block",
                    "src": "2102:156:44",
                    "statements": [
                      {
                        "assignments": [
                          10828
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10828,
                            "name": "amountWEI",
                            "nodeType": "VariableDeclaration",
                            "scope": 10861,
                            "src": "2111:14:44",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10827,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "2111:4:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 10835,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10831,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13397,
                                  "src": "2146:3:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 10832,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2146:10:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 10833,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "balance",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2146:18:44",
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
                              "id": 10829,
                              "name": "dripAmountWEI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10672,
                              "src": "2128:13:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 10830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sub",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8568,
                            "src": "2128:17:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 10834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2128:37:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2111:54:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 10841,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 10836,
                            "name": "balanceWEI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10664,
                            "src": "2174:10:44",
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
                                "id": 10839,
                                "name": "amountWEI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10828,
                                "src": "2202:9:44",
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
                                "id": 10837,
                                "name": "balanceWEI",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10664,
                                "src": "2187:10:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 10838,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8568,
                              "src": "2187:14:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 10840,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2187:25:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2174:38:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10842,
                        "nodeType": "ExpressionStatement",
                        "src": "2174:38:44"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 10848,
                              "name": "amountWEI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10828,
                              "src": "2241:9:44",
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
                                "id": 10843,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13397,
                                "src": "2221:3:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10846,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2221:10:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 10847,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2221:19:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 10849,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2221:30:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10850,
                        "nodeType": "ExpressionStatement",
                        "src": "2221:30:44"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 10854,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13397,
                          "src": "2280:3:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2280:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10856,
                        "name": "amountMYB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10795,
                        "src": "2292:9:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10857,
                        "name": "amountWEI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10828,
                        "src": "2303:9:44",
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
                      "id": 10853,
                      "name": "LogWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10925,
                      "src": "2268:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256,uint256)"
                      }
                    },
                    "id": 10858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2268:45:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10859,
                  "nodeType": "EmitStatement",
                  "src": "2263:50:44"
                }
              ]
            },
            "documentation": null,
            "id": 10861,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10773,
                  "name": "_pass",
                  "nodeType": "VariableDeclaration",
                  "scope": 10861,
                  "src": "1728:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10772,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1728:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1727:14:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1753:0:44"
            },
            "scope": 10950,
            "src": "1710:608:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10876,
              "nodeType": "Block",
              "src": "2400:52:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10872,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10870,
                      "name": "accessPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10674,
                      "src": "2407:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10871,
                      "name": "_newPass",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10863,
                      "src": "2420:8:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "2407:21:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10873,
                  "nodeType": "ExpressionStatement",
                  "src": "2407:21:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10874,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2442:4:44",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10869,
                  "id": 10875,
                  "nodeType": "Return",
                  "src": "2435:11:44"
                }
              ]
            },
            "documentation": null,
            "id": 10877,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10866,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10865,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10917,
                  "src": "2374:8:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2374:8:44"
              }
            ],
            "name": "changePass",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10863,
                  "name": "_newPass",
                  "nodeType": "VariableDeclaration",
                  "scope": 10877,
                  "src": "2342:16:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10862,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2342:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2341:18:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10868,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10877,
                  "src": "2394:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10867,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2394:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2393:6:44"
            },
            "scope": 10950,
            "src": "2322:130:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10898,
              "nodeType": "Block",
              "src": "2563:98:44",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10888,
                      "name": "dripAmountWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10672,
                      "src": "2570:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10889,
                      "name": "_newAmountWEI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10879,
                      "src": "2586:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2570:29:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10891,
                  "nodeType": "ExpressionStatement",
                  "src": "2570:29:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10894,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10892,
                      "name": "dripAmountToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10669,
                      "src": "2606:15:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10893,
                      "name": "_newAmountMYB",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10881,
                      "src": "2624:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2606:31:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10895,
                  "nodeType": "ExpressionStatement",
                  "src": "2606:31:44"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2651:4:44",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10887,
                  "id": 10897,
                  "nodeType": "Return",
                  "src": "2644:11:44"
                }
              ]
            },
            "documentation": null,
            "id": 10899,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10884,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10883,
                  "name": "anyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10917,
                  "src": "2537:8:44",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2537:8:44"
              }
            ],
            "name": "changeDripAmounts",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10879,
                  "name": "_newAmountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10899,
                  "src": "2483:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10878,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2483:4:44",
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
                  "id": 10881,
                  "name": "_newAmountMYB",
                  "nodeType": "VariableDeclaration",
                  "scope": 10899,
                  "src": "2503:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10880,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2503:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2482:40:44"
            },
            "payable": false,
            "returnParameters": {
              "id": 10887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10899,
                  "src": "2557:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10885,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2557:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2556:6:44"
            },
            "scope": 10950,
            "src": "2456:205:44",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10916,
              "nodeType": "Block",
              "src": "2971:97:44",
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
                                    "id": 10907,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3033:7:44",
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
                                      "id": 10908,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13397,
                                      "src": "3042:3:44",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 10909,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3042:10:44",
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
                                    "id": 10905,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13384,
                                    "src": "3016:3:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 10906,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3016:16:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 10910,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3016:37:44",
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
                              "id": 10904,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13391,
                              "src": "3006:9:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 10911,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3006:48:44",
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
                            "id": 10902,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10660,
                            "src": "2985:8:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$10653",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 10903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10652,
                          "src": "2985:20:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 10912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2985:70:44",
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
                      "id": 10901,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13400,
                        13401
                      ],
                      "referencedDeclaration": 13400,
                      "src": "2977:7:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2977:79:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10914,
                  "nodeType": "ExpressionStatement",
                  "src": "2977:79:44"
                },
                {
                  "id": 10915,
                  "nodeType": "PlaceholderStatement",
                  "src": "3062:1:44"
                }
              ]
            },
            "documentation": null,
            "id": 10917,
            "name": "anyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10900,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2971:0:44"
            },
            "src": "2953:115:44",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10925,
            "name": "LogWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10919,
                  "indexed": false,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10925,
                  "src": "3090:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10918,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3090:7:44",
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
                  "id": 10921,
                  "indexed": false,
                  "name": "_amountToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 10925,
                  "src": "3107:17:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10920,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3107:4:44",
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
                  "id": 10923,
                  "indexed": false,
                  "name": "_amountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10925,
                  "src": "3126:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10922,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3126:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3089:53:44"
            },
            "src": "3072:71:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10933,
            "name": "LogTokenDeposited",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10932,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10927,
                  "indexed": false,
                  "name": "_depositer",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "3170:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10926,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3170:7:44",
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
                  "id": 10929,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "3190:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10928,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3190:4:44",
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
                  "id": 10931,
                  "indexed": false,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "3204:11:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10930,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3204:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3169:47:44"
            },
            "src": "3146:71:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10939,
            "name": "LogEthDeposited",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10935,
                  "indexed": false,
                  "name": "_depositer",
                  "nodeType": "VariableDeclaration",
                  "scope": 10939,
                  "src": "3242:18:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:44",
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
                  "id": 10937,
                  "indexed": false,
                  "name": "_amountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10939,
                  "src": "3262:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10936,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3262:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:37:44"
            },
            "src": "3220:59:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10945,
            "name": "LogEthWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10941,
                  "indexed": false,
                  "name": "_withdrawer",
                  "nodeType": "VariableDeclaration",
                  "scope": 10945,
                  "src": "3304:19:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3304:7:44",
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
                  "id": 10943,
                  "indexed": false,
                  "name": "_amountWEI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10945,
                  "src": "3325:15:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10942,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3325:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3303:38:44"
            },
            "src": "3283:59:44"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10949,
            "name": "LogNewUser",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10947,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 10949,
                  "src": "3363:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3363:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3362:15:44"
            },
            "src": "3346:32:44"
          }
        ],
        "scope": 10951,
        "src": "346:3035:44"
      }
    ],
    "src": "0:3382:44"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-11T19:26:29.625Z"
}