"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var GovernedTokenERC20 = exports.GovernedTokenERC20 = 
{
  "contractName": "GovernedTokenERC20",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
      "inputs": [],
      "name": "totalSupply",
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
      "name": "assetIncome",
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
      "name": "assetIncomeIssued",
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
      "constant": false,
      "inputs": [],
      "name": "checkForTransfers",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_investor",
          "type": "address"
        }
      ],
      "name": "getAmountOwed",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
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
      "inputs": [],
      "name": "getERC20",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "issueDividends",
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
          "name": "_investor",
          "type": "address"
        }
      ],
      "name": "collectLatestPayments",
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "name": "erc20",
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
      "inputs": [],
      "name": "finishMinting",
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
      "inputs": [],
      "name": "valuePerToken",
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
          "type": "address"
        }
      ],
      "name": "incomeClaimed",
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "type": "address"
        }
      ],
      "name": "previousValuePerToken",
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
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_erc20Address",
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
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_difference",
          "type": "uint256"
        }
      ],
      "name": "LogCheckBalance",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
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
          "name": "_investor",
          "type": "address"
        }
      ],
      "name": "getAmountAvailable",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620031dd380380620031dd8339810180604052810190808051906020019092919080518201929190602001805190602001909291908051906020019092919050505082828282828160049080519060200190620000749291906200014f565b5080600360016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600281905550505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505083600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620001fe565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019257805160ff1916838001178555620001c3565b82800160010185558215620001c3579182015b82811115620001c2578251825591602001919060010190620001a5565b5b509050620001d29190620001d6565b5090565b620001fb91905b80821115620001f7576000816000905550600101620001dd565b5090565b90565b612fcf806200020e6000396000f300608060405260043610610154576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b3146101595780630f9f57eb146101be57806318160ddd1461021557806323b872dd146102405780632ba1b3a1146102c55780632da208e5146102f057806330d0e75f1461031b5780633bdfa920146103325780633ccfd60b1461038957806340c10f19146103b85780634ece90a81461041d57806352ff7fa91461047457806355ed47c9146104b9578063661884631461051057806370a0823114610575578063713b563f146105cc578063785e9e86146106235780637d64bcb41461067a578063a8fa8e52146106a9578063a9059cbb146106d4578063b8c8e1e614610739578063cae9ca5114610790578063d4a191161461083b578063d73dd623146108cb578063dd62ed3e14610930578063efcb5dea146109a7575b600080fd5b34801561016557600080fd5b506101a4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109fe565b604051808215151515815260200191505060405180910390f35b3480156101ca57600080fd5b506101ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610af0565b6040518082815260200191505060405180910390f35b34801561022157600080fd5b5061022a610ede565b6040518082815260200191505060405180910390f35b34801561024c57600080fd5b506102ab600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ee8565b604051808215151515815260200191505060405180910390f35b3480156102d157600080fd5b506102da610f18565b6040518082815260200191505060405180910390f35b3480156102fc57600080fd5b50610305610f1e565b6040518082815260200191505060405180910390f35b34801561032757600080fd5b50610330610f24565b005b34801561033e57600080fd5b50610373600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611101565b6040518082815260200191505060405180910390f35b34801561039557600080fd5b5061039e611184565b604051808215151515815260200191505060405180910390f35b3480156103c457600080fd5b50610403600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114aa565b604051808215151515815260200191505060405180910390f35b34801561042957600080fd5b5061043261168d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048057600080fd5b5061049f600480360381019080803590602001909291905050506116b7565b604051808215151515815260200191505060405180910390f35b3480156104c557600080fd5b506104fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118c7565b6040518082815260200191505060405180910390f35b34801561051c57600080fd5b5061055b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611979565b604051808215151515815260200191505060405180910390f35b34801561058157600080fd5b506105b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c0b565b6040518082815260200191505060405180910390f35b3480156105d857600080fd5b506105e1611c53565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561062f57600080fd5b50610638611c79565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561068657600080fd5b5061068f611c9f565b604051808215151515815260200191505060405180910390f35b3480156106b557600080fd5b506106be611d64565b6040518082815260200191505060405180910390f35b3480156106e057600080fd5b5061071f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d6a565b604051808215151515815260200191505060405180910390f35b34801561074557600080fd5b5061077a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d98565b6040518082815260200191505060405180910390f35b34801561079c57600080fd5b50610821600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611db0565b604051808215151515815260200191505060405180910390f35b34801561084757600080fd5b506108506121c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610890578082015181840152602081019050610875565b50505050905090810190601f1680156108bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108d757600080fd5b50610916600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061226b565b604051808215151515815260200191505060405180910390f35b34801561093c57600080fd5b50610991600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612467565b6040518082815260200191505060405180910390f35b3480156109b357600080fd5b506109e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124ee565b6040518082815260200191505060405180910390f35b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000806000806000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663031578af3060405160200180807f6173736574546f6b656e49440000000000000000000000000000000000000000815250600c018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610bee5780518252602082019150602081019050602083039250610bc9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610c7557600080fd5b505af1158015610c89573d6000803e3d6000fd5b505050506040513d6020811015610c9f57600080fd5b81019080805190602001909291905050509350600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce858860405160200180807f746f6b656e734c6f636b65640000000000000000000000000000000000000000815250600c0183600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b602083101515610db85780518252602082019150602081019050602083039250610d93565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610e3f57600080fd5b505af1158015610e53573d6000803e3d6000fd5b505050506040513d6020811015610e6957600080fd5b810190808051906020019092919050505092506000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150610ed0838361250690919063ffffffff16565b905080945050505050919050565b6000600254905090565b6000610ef384610af0565b8211151515610f0157600080fd5b610f0c84848461251f565b50600190509392505050565b60065481565b60075481565b6000806000610f4060075460065461250690919063ffffffff16565b9250600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610fff57600080fd5b505af1158015611013573d6000803e3d6000fd5b505050506040513d602081101561102957600080fd5b8101908080519060200190929190505050915061104f838361250690919063ffffffff16565b905060008111156110c5576110a36110926002546110846d04ee2d6d415b85acef81000000008561273d90919063ffffffff16565b61277890919063ffffffff16565b60085461278e90919063ffffffff16565b6008819055506110be8160065461278e90919063ffffffff16565b6006819055505b7f0d7ab7150531466ac81cc2479d86788246bab0e9cc606a06ec6af5c8ab0d6f8e816040518082815260200191505060405180910390a1505050565b600061117d6d04ee2d6d415b85acef810000000061116f600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611161866118c7565b61278e90919063ffffffff16565b61277890919063ffffffff16565b9050919050565b600080336111e2611194826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112cb6d04ee2d6d415b85acef8100000000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461277890919063ffffffff16565b9150600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556113258260075461278e90919063ffffffff16565b600781905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156113f057600080fd5b505af1158015611404573d6000803e3d6000fd5b505050506040513d602081101561141a57600080fd5b8101908080519060200190929190505050151561143657600080fd5b7ff5b510c554f6c572235f7e531ec8f287b350b15c212250b993180473a6aeb7d13383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160019250505090565b6000600360009054906101000a900460ff161580156115165750600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561152157600080fd5b6115368260025461278e90919063ffffffff16565b60028190555061158d826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080821115156116c757600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156117c057600080fd5b505af11580156117d4573d6000803e3d6000fd5b505050506040513d60208110156117ea57600080fd5b8101908080519060200190929190505050151561180657600080fd5b61184f61183e6002546118306d04ee2d6d415b85acef81000000008661273d90919063ffffffff16565b61277890919063ffffffff16565b60085461278e90919063ffffffff16565b60088190555061186a8260065461278e90919063ffffffff16565b6006819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe836040518082815260200191505060405180910390a260019050919050565b60008061191e600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460085461250690919063ffffffff16565b90506119716000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261273d90919063ffffffff16565b915050919050565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515611a8b576000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611b1f565b611a9e838261250690919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360009054906101000a900460ff16158015611d0b5750600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515611d1657600080fd5b6001600360006101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b60085481565b6000611d7533610af0565b8211151515611d8357600080fd5b611d8d83836127ac565b506001905092915050565b60096020528060005260406000206000915090505481565b600033611e0d611dbf826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084611ef1611ea3826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925876040518082815260200191505060405180910390a38573ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338730886040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561215557808201518184015260208101905061213a565b50505050905090810190601f1680156121825780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156121a457600080fd5b505af11580156121b8573d6000803e3d6000fd5b505050506001925050509392505050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156122615780601f1061223657610100808354040283529160200191612261565b820191906000526020600020905b81548152906001019060200180831161224457829003601f168201915b5050505050905090565b60006122fc82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600a6020528060005260406000206000915090505481565b600082821115151561251457fe5b818303905092915050565b60008361257c61252e826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083612660612612826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415151561272457600080fd5b61272f8686866129c8565b506001925050509392505050565b60008060008414156127525760009150612771565b828402905082848281151561276357fe5b0414151561276d57fe5b8091505b5092915050565b6000818381151561278557fe5b04905092915050565b60008082840190508381101515156127a257fe5b8091505092915050565b6000336128096127bb826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836128ed61289f826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141515156129b157600080fd5b6129bb8585612d83565b5060019250505092915050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515612a1757600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515612aa257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515612ade57600080fd5b612b2f826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461250690919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612bc2826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612c9382600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461250690919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515612dd257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515612e0e57600080fd5b612e5f826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461250690919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612ef2826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050929150505600a165627a7a72305820db3b46f903cba591af5bd7295eb4fbcad470e048cd990ff89497b8c4e05bf6200029",
  "deployedBytecode": "0x608060405260043610610154576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b3146101595780630f9f57eb146101be57806318160ddd1461021557806323b872dd146102405780632ba1b3a1146102c55780632da208e5146102f057806330d0e75f1461031b5780633bdfa920146103325780633ccfd60b1461038957806340c10f19146103b85780634ece90a81461041d57806352ff7fa91461047457806355ed47c9146104b9578063661884631461051057806370a0823114610575578063713b563f146105cc578063785e9e86146106235780637d64bcb41461067a578063a8fa8e52146106a9578063a9059cbb146106d4578063b8c8e1e614610739578063cae9ca5114610790578063d4a191161461083b578063d73dd623146108cb578063dd62ed3e14610930578063efcb5dea146109a7575b600080fd5b34801561016557600080fd5b506101a4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109fe565b604051808215151515815260200191505060405180910390f35b3480156101ca57600080fd5b506101ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610af0565b6040518082815260200191505060405180910390f35b34801561022157600080fd5b5061022a610ede565b6040518082815260200191505060405180910390f35b34801561024c57600080fd5b506102ab600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ee8565b604051808215151515815260200191505060405180910390f35b3480156102d157600080fd5b506102da610f18565b6040518082815260200191505060405180910390f35b3480156102fc57600080fd5b50610305610f1e565b6040518082815260200191505060405180910390f35b34801561032757600080fd5b50610330610f24565b005b34801561033e57600080fd5b50610373600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611101565b6040518082815260200191505060405180910390f35b34801561039557600080fd5b5061039e611184565b604051808215151515815260200191505060405180910390f35b3480156103c457600080fd5b50610403600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114aa565b604051808215151515815260200191505060405180910390f35b34801561042957600080fd5b5061043261168d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048057600080fd5b5061049f600480360381019080803590602001909291905050506116b7565b604051808215151515815260200191505060405180910390f35b3480156104c557600080fd5b506104fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118c7565b6040518082815260200191505060405180910390f35b34801561051c57600080fd5b5061055b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611979565b604051808215151515815260200191505060405180910390f35b34801561058157600080fd5b506105b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c0b565b6040518082815260200191505060405180910390f35b3480156105d857600080fd5b506105e1611c53565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561062f57600080fd5b50610638611c79565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561068657600080fd5b5061068f611c9f565b604051808215151515815260200191505060405180910390f35b3480156106b557600080fd5b506106be611d64565b6040518082815260200191505060405180910390f35b3480156106e057600080fd5b5061071f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611d6a565b604051808215151515815260200191505060405180910390f35b34801561074557600080fd5b5061077a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d98565b6040518082815260200191505060405180910390f35b34801561079c57600080fd5b50610821600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611db0565b604051808215151515815260200191505060405180910390f35b34801561084757600080fd5b506108506121c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610890578082015181840152602081019050610875565b50505050905090810190601f1680156108bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108d757600080fd5b50610916600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061226b565b604051808215151515815260200191505060405180910390f35b34801561093c57600080fd5b50610991600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612467565b6040518082815260200191505060405180910390f35b3480156109b357600080fd5b506109e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124ee565b6040518082815260200191505060405180910390f35b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000806000806000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663031578af3060405160200180807f6173736574546f6b656e49440000000000000000000000000000000000000000815250600c018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b602083101515610bee5780518252602082019150602081019050602083039250610bc9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610c7557600080fd5b505af1158015610c89573d6000803e3d6000fd5b505050506040513d6020811015610c9f57600080fd5b81019080805190602001909291905050509350600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a855d4ce858860405160200180807f746f6b656e734c6f636b65640000000000000000000000000000000000000000815250600c0183600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b602083101515610db85780518252602082019150602081019050602083039250610d93565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610e3f57600080fd5b505af1158015610e53573d6000803e3d6000fd5b505050506040513d6020811015610e6957600080fd5b810190808051906020019092919050505092506000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549150610ed0838361250690919063ffffffff16565b905080945050505050919050565b6000600254905090565b6000610ef384610af0565b8211151515610f0157600080fd5b610f0c84848461251f565b50600190509392505050565b60065481565b60075481565b6000806000610f4060075460065461250690919063ffffffff16565b9250600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610fff57600080fd5b505af1158015611013573d6000803e3d6000fd5b505050506040513d602081101561102957600080fd5b8101908080519060200190929190505050915061104f838361250690919063ffffffff16565b905060008111156110c5576110a36110926002546110846d04ee2d6d415b85acef81000000008561273d90919063ffffffff16565b61277890919063ffffffff16565b60085461278e90919063ffffffff16565b6008819055506110be8160065461278e90919063ffffffff16565b6006819055505b7f0d7ab7150531466ac81cc2479d86788246bab0e9cc606a06ec6af5c8ab0d6f8e816040518082815260200191505060405180910390a1505050565b600061117d6d04ee2d6d415b85acef810000000061116f600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611161866118c7565b61278e90919063ffffffff16565b61277890919063ffffffff16565b9050919050565b600080336111e2611194826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506112cb6d04ee2d6d415b85acef8100000000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461277890919063ffffffff16565b9150600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556113258260075461278e90919063ffffffff16565b600781905550600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156113f057600080fd5b505af1158015611404573d6000803e3d6000fd5b505050506040513d602081101561141a57600080fd5b8101908080519060200190929190505050151561143657600080fd5b7ff5b510c554f6c572235f7e531ec8f287b350b15c212250b993180473a6aeb7d13383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a160019250505090565b6000600360009054906101000a900460ff161580156115165750600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561152157600080fd5b6115368260025461278e90919063ffffffff16565b60028190555061158d826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080821115156116c757600080fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156117c057600080fd5b505af11580156117d4573d6000803e3d6000fd5b505050506040513d60208110156117ea57600080fd5b8101908080519060200190929190505050151561180657600080fd5b61184f61183e6002546118306d04ee2d6d415b85acef81000000008661273d90919063ffffffff16565b61277890919063ffffffff16565b60085461278e90919063ffffffff16565b60088190555061186a8260065461278e90919063ffffffff16565b6006819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe836040518082815260200191505060405180910390a260019050919050565b60008061191e600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460085461250690919063ffffffff16565b90506119716000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548261273d90919063ffffffff16565b915050919050565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515611a8b576000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611b1f565b611a9e838261250690919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360009054906101000a900460ff16158015611d0b5750600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515611d1657600080fd5b6001600360006101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b60085481565b6000611d7533610af0565b8211151515611d8357600080fd5b611d8d83836127ac565b506001905092915050565b60096020528060005260406000206000915090505481565b600033611e0d611dbf826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084611ef1611ea3826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925876040518082815260200191505060405180910390a38573ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338730886040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561215557808201518184015260208101905061213a565b50505050905090810190601f1680156121825780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156121a457600080fd5b505af11580156121b8573d6000803e3d6000fd5b505050506001925050509392505050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156122615780601f1061223657610100808354040283529160200191612261565b820191906000526020600020905b81548152906001019060200180831161224457829003601f168201915b5050505050905090565b60006122fc82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600a6020528060005260406000206000915090505481565b600082821115151561251457fe5b818303905092915050565b60008361257c61252e826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555083612660612612826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415151561272457600080fd5b61272f8686866129c8565b506001925050509392505050565b60008060008414156127525760009150612771565b828402905082848281151561276357fe5b0414151561276d57fe5b8091505b5092915050565b6000818381151561278557fe5b04905092915050565b60008082840190508381101515156127a257fe5b8091505092915050565b6000336128096127bb826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836128ed61289f826118c7565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600854600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141515156129b157600080fd5b6129bb8585612d83565b5060019250505092915050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515612a1757600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515612aa257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515612ade57600080fd5b612b2f826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461250690919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612bc2826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612c9382600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461250690919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515612dd257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515612e0e57600080fd5b612e5f826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461250690919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612ef2826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278e90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050929150505600a165627a7a72305820db3b46f903cba591af5bd7295eb4fbcad470e048cd990ff89497b8c4e05bf6200029",
  "sourceMap": "745:1795:51:-;;;1219:192;8:9:-1;5:2;;;30:1;27;20:12;5:2;1219:192:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1337:9;1348:6;1356:13;1113:9:49;1124:6;594:9:52;583:8;:20;;;;;;;;;;;;:::i;:::-;;672:7;663:6;;:16;;;;;;;;;;;;;;;;;;696:1;687:6;:10;;;;519:183;;1155:13:49;1141:5;;:28;;;;;;;;;;;;;;;;;;1018:228;;;1396:9:51;1376:8;;:30;;;;;;;;;;;;;;;;;;1219:192;;;;745:1795;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "745:1795:51:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2111:188:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2111:188:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2124:413:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2124:413:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4705:77:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4705:77:53;;;;;;;;;;;;;;;;;;;;;;;1820:222:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1820:222:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;767:23:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;767:23:49;;;;;;;;;;;;;;;;;;;;;;;796:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;796:29:49;;;;;;;;;;;;;;;;;;;;;;;3567:474;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3567:474:49;;;;;;4664:188;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4664:188:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2988:389;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2988:389:49;;;;;;;;;;;;;;;;;;;;;;;;;;;856:258:52;;8:9:-1;5:2;;;30:1;27;20:12;5:2;856:258:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:98:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4858:98:49;;;;;;;;;;;;;;;;;;;;;;;;;;;2528:382;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2528:382:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4314:253;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4314:253:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4226:418:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4226:418:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4984:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4984:99:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;798:24:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;798:24:51;;;;;;;;;;;;;;;;;;;;;;;;;;;661:18:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;661:18:49;;;;;;;;;;;;;;;;;;;;;;;;;;;1165:136:52;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1165:136:52;;;;;;;;;;;;;;;;;;;;;;;;;;;831:25:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;831:25:49;;;;;;;;;;;;;;;;;;;;;;;1515:197:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1515:197:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;864:46:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;864:46:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2113:409;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2113:409:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1305:88:52;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1305:88:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1305:88:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3473:296:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3473:296:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;887:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;887:132:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;916:54:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;916:54:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2111:188:53;2178:4;2222:6;2190:7;:19;2198:10;2190:19;;;;;;;;;;;;;;;:29;2210:8;2190:29;;;;;;;;;;;;;;;:38;;;;2260:8;2239:38;;2248:10;2239:38;;;2270:6;2239:38;;;;;;;;;;;;;;;;;;2290:4;2283:11;;2111:188;;;;:::o;2124:413:51:-;2198:4;2210:15;2317:17;2428:12;2468:14;2228:8;;;;;;;;;;;:23;;;2303:4;2262:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2262:47:51;;;2252:58;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2252:58:51;;;;;;;;;;;;;;;;2228:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2228:83:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2228:83:51;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2228:83:51;;;;;;;;;;;;;;;;2210:101;;2337:8;;;;;;;;;;;:20;;;2401:7;2410:9;2368:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2368:52:51;;;2358:63;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2358:63:51;;;;;;;;;;;;;;;;2337:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2337:85:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2337:85:51;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2337:85:51;;;;;;;;;;;;;;;;2317:105;;2443:8;:19;2452:9;2443:19;;;;;;;;;;;;;;;;2428:34;;2485:25;2497:12;2485:7;:11;;:25;;;;:::i;:::-;2468:42;;2523:9;2516:16;;2124:413;;;;;;;:::o;4705:77:53:-;4749:7;4771:6;;4764:13;;4705:77;:::o;1820:222:51:-;1904:12;1945:25;1964:5;1945:18;:25::i;:::-;1934:7;:36;;1926:45;;;;;;;;1979:39;1998:5;2005:3;2010:7;1979:18;:39::i;:::-;;2033:4;2026:11;;1820:222;;;;;:::o;767:23:49:-;;;;:::o;796:29::-;;;;:::o;3567:474::-;3617:16;3678:18;3737:16;3636:34;3652:17;;3636:11;;:15;;:34;;;;:::i;:::-;3617:53;;3699:5;;;;;;;;;;;:15;;;3723:4;3699:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3699:30:49;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3699:30:49;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3699:30:49;;;;;;;;;;;;;;;;3678:51;;3756:30;3774:11;3756:13;:17;;:30;;;;:::i;:::-;3737:49;;3811:1;3797:11;:15;3794:200;;;3872:61;3890:42;3925:6;;3890:30;756:4;3890:11;:15;;:30;;;;:::i;:::-;:34;;:42;;;;:::i;:::-;3872:13;;:17;;:61;;;;:::i;:::-;3856:13;:77;;;;3957:28;3973:11;3957;;:15;;:28;;;;:::i;:::-;3943:11;:42;;;;3794:200;4006:28;4022:11;4006:28;;;;;;;;;;;;;;;;;;3567:474;;;:::o;4664:188::-;4739:4;4763:81;756:4;4763:62;4800:13;:24;4814:9;4800:24;;;;;;;;;;;;;;;;4763:32;4785:9;4763:21;:32::i;:::-;:36;;:62;;;;:::i;:::-;:66;;:81;;;;:::i;:::-;4755:90;;4664:188;;;:::o;2988:389::-;3068:4;3084:11;3043:10;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;3098:44;756:4;3098:13;:25;3112:10;3098:25;;;;;;;;;;;;;;;;:29;;:44;;;;:::i;:::-;3084:58;;3159:13;:25;3173:10;3159:25;;;;;;;;;;;;;;;3152:32;;;3214:29;3236:6;3214:17;;:21;;:29;;;;:::i;:::-;3194:17;:49;;;;3261:5;;;;;;;;;;;:14;;;3276:10;3288:6;3261:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3261:34:49;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3261:34:49;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3261:34:49;;;;;;;;;;;;;;;;3253:43;;;;;;;;3311:38;3330:10;3342:6;3311:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;3366:4;3359:11;;2988:389;;;:::o;856:258:52:-;930:4;1492:15;;;;;;;;;;;1491:16;:40;;;;;1525:6;;;;;;;;;;;1511:20;;:10;:20;;;1491:40;1483:49;;;;;;;;951:19;962:7;951:6;;:10;;:19;;;;:::i;:::-;942:6;:28;;;;992:26;1010:7;992:8;:13;1001:3;992:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;976:8;:13;985:3;976:13;;;;;;;;;;;;;;;:42;;;;1034:3;1029:18;;;1039:7;1029:18;;;;;;;;;;;;;;;;;;1079:3;1058:34;;1075:1;1058:34;;;1084:7;1058:34;;;;;;;;;;;;;;;;;;1105:4;1098:11;;856:258;;;;:::o;4858:98:49:-;4912:7;4943:5;;;;;;;;;;;4928:21;;4858:98;:::o;2528:382::-;2590:4;2623:1;2613:7;:11;2605:20;;;;;;;;2643:5;;;;;;;;;;;:18;;;2662:10;2682:4;2689:7;2643:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2643:54:49;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2643:54:49;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2643:54:49;;;;;;;;;;;;;;;;2635:63;;;;;;;;2724:57;2742:38;2773:6;;2742:26;756:4;2742:7;:11;;:26;;;;:::i;:::-;:30;;:38;;;;:::i;:::-;2724:13;;:17;;:57;;;;:::i;:::-;2708:13;:73;;;;2805:24;2821:7;2805:11;;:15;;:24;;;;:::i;:::-;2791:11;:38;;;;2862:10;2844:38;;;2874:7;2844:38;;;;;;;;;;;;;;;;;;2899:4;2892:11;;2528:382;;;:::o;4314:253::-;4397:4;4413:28;4444:51;4462:21;:32;4484:9;4462:32;;;;;;;;;;;;;;;;4444:13;;:17;;:51;;;;:::i;:::-;4413:82;;4512:48;4540:8;:19;4549:9;4540:19;;;;;;;;;;;;;;;;4512:23;:27;;:48;;;;:::i;:::-;4505:55;;4314:253;;;;:::o;4226:418:53:-;4316:4;4328:16;4347:7;:19;4355:10;4347:19;;;;;;;;;;;;;;;:29;4367:8;4347:29;;;;;;;;;;;;;;;;4328:48;;4406:8;4386:16;:28;;4382:169;;;4456:1;4424:7;:19;4432:10;4424:19;;;;;;;;;;;;;;;:29;4444:8;4424:29;;;;;;;;;;;;;;;:33;;;;4382:169;;;4514:30;4527:16;4514:8;:12;;:30;;;;:::i;:::-;4482:7;:19;4490:10;4482:19;;;;;;;;;;;;;;;:29;4502:8;4482:29;;;;;;;;;;;;;;;:62;;;;4382:169;4582:8;4561:61;;4570:10;4561:61;;;4592:7;:19;4600:10;4592:19;;;;;;;;;;;;;;;:29;4612:8;4592:29;;;;;;;;;;;;;;;;4561:61;;;;;;;;;;;;;;;;;;4635:4;4628:11;;4226:418;;;;;:::o;4984:99::-;5040:7;5062:8;:16;5071:6;5062:16;;;;;;;;;;;;;;;;5055:23;;4984:99;;;:::o;798:24:51:-;;;;;;;;;;;;;:::o;661:18:49:-;;;;;;;;;;;;;:::o;1165:136:52:-;1220:4;1492:15;;;;;;;;;;;1491:16;:40;;;;;1525:6;;;;;;;;;;;1511:20;;:10;:20;;;1491:40;1483:49;;;;;;;;1250:4;1232:15;;:22;;;;;;;;;;;;;;;;;;1265:14;;;;;;;;;;1292:4;1285:11;;1165:136;:::o;831:25:49:-;;;;:::o;1515:197:51:-;1580:12;1621:30;1640:10;1621:18;:30::i;:::-;1610:7;:41;;1602:50;;;;;;;;1660:28;1675:3;1680:7;1660:14;:28::i;:::-;;1703:4;1696:11;;1515:197;;;;:::o;864:46:49:-;;;;;;;;;;;;;;;;;:::o;2113:409::-;2276:12;2217:10;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;2253:8;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;2332:7;2300;:19;2308:10;2300:19;;;;;;;;;;;;;;;:29;2320:8;2300:29;;;;;;;;;;;;;;;:39;;;;2375:8;2354:39;;2363:10;2354:39;;;2385:7;2354:39;;;;;;;;;;;;;;;;;;2426:8;2403:48;;;2452:10;2464:7;2481:4;2488:5;2403:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2403:91:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2403:91:49;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2403:91:49;;;;2511:4;2504:11;;5504:1;2113:409;;;;;;:::o;1305:88:52:-;1357:6;1380:8;1373:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1305:88;:::o;3473:296:53:-;3574:4;3628:46;3662:11;3628:7;:19;3636:10;3628:19;;;;;;;;;;;;;;;:29;3648:8;3628:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3588:7;:19;3596:10;3588:19;;;;;;;;;;;;;;;:29;3608:8;3588:29;;;;;;;;;;;;;;;:87;;;;3707:8;3686:61;;3695:10;3686:61;;;3717:7;:19;3725:10;3717:19;;;;;;;;;;;;;;;:29;3737:8;3717:29;;;;;;;;;;;;;;;;3686:61;;;;;;;;;;;;;;;;;;3760:4;3753:11;;3473:296;;;;:::o;887:132::-;967:7;989;:15;997:6;989:15;;;;;;;;;;;;;;;:25;1005:8;989:25;;;;;;;;;;;;;;;;982:32;;887:132;;;;:::o;916:54:49:-;;;;;;;;;;;;;;;;;:::o;935:110:29:-;993:7;1020:1;1015;:6;;1008:14;;;;;;1039:1;1035;:5;1028:12;;935:110;;;;:::o;1513:278:49:-;1661:12;1612:5;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;1643:3;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;1708:4;1693:20;;:3;:20;;;;1685:29;;;;;;;;1724:39;1743:5;1750:3;1755:7;1724:18;:39::i;:::-;;1780:4;1773:11;;5504:1;1513:278;;;;;;:::o;310:173:29:-;368:7;423:9;392:1;387;:6;383:35;;;410:1;403:8;;;;383:35;439:1;435;:5;423:17;;462:1;457;453;:5;;;;;;;;:10;446:18;;;;;;477:1;470:8;;310:173;;;;;;:::o;558:272::-;616:7;824:1;820;:5;;;;;;;;813:12;;558:272;;;;:::o;1100:129::-;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;1253:253:49:-;1387:12;1333:10;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;1369:3;5374:62;5403:32;5425:9;5403:21;:32::i;:::-;5374:13;:24;5388:9;5374:24;;;;;;;;;;;;;;;;:28;;:62;;;;:::i;:::-;5347:13;:24;5361:9;5347:24;;;;;;;;;;;;;;;:89;;;;5481:13;;5446:21;:32;5468:9;5446:32;;;;;;;;;;;;;;;:48;;;;1434:4;1419:20;;:3;:20;;;;1411:29;;;;;;;;1450:28;1465:3;1470:7;1450:14;:28::i;:::-;;1495:4;1488:11;;5504:1;1253:253;;;;;:::o;2574:447:53:-;2660:4;2690:8;:15;2699:5;2690:15;;;;;;;;;;;;;;;;2680:6;:25;;2672:34;;;;;;;;2730:7;:14;2738:5;2730:14;;;;;;;;;;;;;;;:26;2745:10;2730:26;;;;;;;;;;;;;;;;2720:6;:36;;2712:45;;;;;;;;2786:1;2771:17;;:3;:17;;;;2763:26;;;;;;;;2813:27;2833:6;2813:8;:15;2822:5;2813:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;2795:8;:15;2804:5;2795:15;;;;;;;;;;;;;;;:45;;;;2862:25;2880:6;2862:8;:13;2871:3;2862:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;2846:8;:13;2855:3;2846:13;;;;;;;;;;;;;;;:41;;;;2922:38;2953:6;2922:7;:14;2930:5;2922:14;;;;;;;;;;;;;;;:26;2937:10;2922:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;2893:7;:14;2901:5;2893:14;;;;;;;;;;;;;;;:26;2908:10;2893:26;;;;;;;;;;;;;;;:67;;;;2987:3;2971:28;;2980:5;2971:28;;;2992:6;2971:28;;;;;;;;;;;;;;;;;;3012:4;3005:11;;2574:447;;;;;:::o;1173:320::-;1236:4;1266:8;:20;1275:10;1266:20;;;;;;;;;;;;;;;;1256:6;:30;;1248:39;;;;;;;;1316:1;1301:17;;:3;:17;;;;1293:26;;;;;;;;1348:32;1373:6;1348:8;:20;1357:10;1348:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;1325:8;:20;1334:10;1325:20;;;;;;;;;;;;;;;:55;;;;1402:25;1420:6;1402:8;:13;1411:3;1402:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1386:8;:13;1395:3;1386:13;;;;;;;;;;;;;;;:41;;;;1459:3;1438:33;;1447:10;1438:33;;;1464:6;1438:33;;;;;;;;;;;;;;;;;;1484:4;1477:11;;1173:320;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"./DividendTokenERC20.sol\";\nimport \"../../math/SafeMath.sol\";\n\n// @notice give GovernedToken access to view uint and bytes32 storage\ninterface DBAccess {\n  function uintStorage(bytes32 _key) external view returns (uint);\n  function bytes32Storage(bytes32 _key) external view returns (bytes32);\n}\n\n// @title A Dividend token that has governance features and receives ERC20 tokens as payment\n// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes\n// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation\n// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.\ncontract GovernedTokenERC20 is DividendTokenERC20{\n  DBAccess public database;\n\n\n  // @notice constructor: initializes database and DividendTokenERC20\n  // @param (address) _database = the address of the platform database\n  // @param (string) _tokenURI = The URI where details of the token (asse) can be found\n  // @param (address) _owner = The minting authority for this token\n  // @param (address) _erc20Address = The address of the erc20 token to be sent for dividends\n  constructor(address _database, string _tokenURI, address _owner, address _erc20Address)\n  public\n  DividendTokenERC20(_tokenURI, _owner, _erc20Address){\n    database = DBAccess(_database);\n  }\n\n  // @notice Standard DividendToke transfer function, which checks for locked tokens before sending\n  function transfer(address _to, uint _amount)\n  public\n  returns (bool success) {\n      require(_amount <= getAmountAvailable(msg.sender));\n      super.transfer(_to, _amount);\n      return true;\n  }\n\n  // @notice Standard DividendToke transferFrom function, which checks for locked tokens before sending\n  function transferFrom(address _from, address _to, uint _amount)\n  public\n  returns (bool success) {\n      require(_amount <= getAmountAvailable(_from));\n      super.transferFrom(_from, _to, _amount);\n      return true;\n  }\n\n  // @notice returns the amount of tokens _investor has locked for this asset\n  function getAmountAvailable(address _investor)\n  public\n  view\n  returns (uint) {\n    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked(\"assetTokenID\", address(this))));\n    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked(\"tokensLocked\", assetID, _investor)));\n    uint balance = balances[_investor];\n    uint available = balance.sub(amountLocked);\n    return available;\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
    "exportedSymbols": {
      "DBAccess": [
        12657
      ],
      "GovernedTokenERC20": [
        12795
      ]
    },
    "id": 12796,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 12640,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:51"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/DividendTokenERC20.sol",
        "file": "./DividendTokenERC20.sol",
        "id": 12641,
        "nodeType": "ImportDirective",
        "scope": 12796,
        "sourceUnit": 12482,
        "src": "25:34:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 12642,
        "nodeType": "ImportDirective",
        "scope": 12796,
        "sourceUnit": 6934,
        "src": "60:33:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 12657,
        "linearizedBaseContracts": [
          12657
        ],
        "name": "DBAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 12649,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12644,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 12649,
                  "src": "209:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12643,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "209:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "208:14:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12647,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12649,
                  "src": "246:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12646,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "245:6:51"
            },
            "scope": 12657,
            "src": "188:64:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 12656,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12651,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 12656,
                  "src": "279:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "278:14:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12654,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12656,
                  "src": "316:7:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12653,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "316:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "315:9:51"
            },
            "scope": 12657,
            "src": "255:70:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 12796,
        "src": "165:162:51"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 12658,
              "name": "DividendTokenERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12481,
              "src": "776:18:51",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DividendTokenERC20_$12481",
                "typeString": "contract DividendTokenERC20"
              }
            },
            "id": 12659,
            "nodeType": "InheritanceSpecifier",
            "src": "776:18:51"
          }
        ],
        "contractDependencies": [
          6697,
          12481,
          12919,
          13253
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 12795,
        "linearizedBaseContracts": [
          12795,
          12481,
          12919,
          13253,
          6697
        ],
        "name": "GovernedTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 12661,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 12795,
            "src": "798:24:51",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBAccess_$12657",
              "typeString": "contract DBAccess"
            },
            "typeName": {
              "contractScope": null,
              "id": 12660,
              "name": "DBAccess",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12657,
              "src": "798:8:51",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBAccess_$12657",
                "typeString": "contract DBAccess"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12683,
              "nodeType": "Block",
              "src": "1370:41:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 12681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 12677,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12661,
                      "src": "1376:8:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$12657",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 12679,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12663,
                          "src": "1396:9:51",
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
                        "id": 12678,
                        "name": "DBAccess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12657,
                        "src": "1387:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBAccess_$12657_$",
                          "typeString": "type(contract DBAccess)"
                        }
                      },
                      "id": 12680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1387:19:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$12657",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "src": "1376:30:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBAccess_$12657",
                      "typeString": "contract DBAccess"
                    }
                  },
                  "id": 12682,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:30:51"
                }
              ]
            },
            "documentation": null,
            "id": 12684,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 12672,
                    "name": "_tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12665,
                    "src": "1337:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 12673,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12667,
                    "src": "1348:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 12674,
                    "name": "_erc20Address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12669,
                    "src": "1356:13:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 12675,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 12671,
                  "name": "DividendTokenERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 12481,
                  "src": "1318:18:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DividendTokenERC20_$12481_$",
                    "typeString": "type(contract DividendTokenERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1318:52:51"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12663,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1231:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12662,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:7:51",
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
                  "id": 12665,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1250:16:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12664,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12667,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1268:14:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1268:7:51",
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
                  "id": 12669,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1284:21:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1284:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:76:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12676,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1370:0:51"
            },
            "scope": 12795,
            "src": "1219:192:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12711,
              "nodeType": "Block",
              "src": "1594:118:51",
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
                        "id": 12699,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 12694,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12688,
                          "src": "1610:7:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 12696,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13268,
                                "src": "1640:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 12697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1640:10:51",
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
                            "id": 12695,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12794,
                            "src": "1621:18:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 12698,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1621:30:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1610:41:51",
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
                      "id": 12693,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1602:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 12700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1602:50:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12701,
                  "nodeType": "ExpressionStatement",
                  "src": "1602:50:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 12705,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12686,
                        "src": "1675:3:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 12706,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12688,
                        "src": "1680:7:51",
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
                        "id": 12702,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13408,
                        "src": "1660:5:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$12795",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 12704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12138,
                      "src": "1660:14:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 12707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1660:28:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 12708,
                  "nodeType": "ExpressionStatement",
                  "src": "1660:28:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 12709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1703:4:51",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 12692,
                  "id": 12710,
                  "nodeType": "Return",
                  "src": "1696:11:51"
                }
              ]
            },
            "documentation": null,
            "id": 12712,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12686,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 12712,
                  "src": "1533:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1533:7:51",
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
                  "id": 12688,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12712,
                  "src": "1546:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12687,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1546:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1532:27:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12691,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12712,
                  "src": "1580:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12690,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1579:14:51"
            },
            "scope": 12795,
            "src": "1515:197:51",
            "stateMutability": "nonpayable",
            "superFunction": 12138,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12741,
              "nodeType": "Block",
              "src": "1918:124:51",
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
                        "id": 12728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 12724,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12718,
                          "src": "1934:7:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 12726,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12714,
                              "src": "1964:5:51",
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
                            "id": 12725,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12794,
                            "src": "1945:18:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 12727,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1945:25:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1934:36:51",
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
                      "id": 12723,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1926:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 12729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1926:45:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12730,
                  "nodeType": "ExpressionStatement",
                  "src": "1926:45:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 12734,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12714,
                        "src": "1998:5:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 12735,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12716,
                        "src": "2005:3:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 12736,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12718,
                        "src": "2010:7:51",
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
                        "id": 12731,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13408,
                        "src": "1979:5:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$12795",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 12733,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12174,
                      "src": "1979:18:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 12737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1979:39:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 12738,
                  "nodeType": "ExpressionStatement",
                  "src": "1979:39:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 12739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2033:4:51",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 12722,
                  "id": 12740,
                  "nodeType": "Return",
                  "src": "2026:11:51"
                }
              ]
            },
            "documentation": null,
            "id": 12742,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12714,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1842:13:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:7:51",
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
                  "id": 12716,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1857:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1857:7:51",
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
                  "id": 12718,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1870:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12717,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1870:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1841:42:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12721,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1904:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12720,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1904:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1903:14:51"
            },
            "scope": 12795,
            "src": "1820:222:51",
            "stateMutability": "nonpayable",
            "superFunction": 12174,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12793,
              "nodeType": "Block",
              "src": "2204:333:51",
              "statements": [
                {
                  "assignments": [
                    12750
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12750,
                      "name": "assetID",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2210:15:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 12749,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2210:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12763,
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
                                "hexValue": "6173736574546f6b656e4944",
                                "id": 12756,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2279:14:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                "value": "assetTokenID"
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 12758,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13407,
                                    "src": "2303:4:51",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$12795",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$12795",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  ],
                                  "id": 12757,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2295:7:51",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 12759,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2295:13:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 12754,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "2262:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 12755,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2262:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 12760,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2262:47:51",
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
                          "id": 12753,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "2252:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 12761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2252:58:51",
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
                        "id": 12751,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12661,
                        "src": "2228:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$12657",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 12752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12656,
                      "src": "2228:23:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 12762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2228:83:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2210:101:51"
                },
                {
                  "assignments": [
                    12765
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12765,
                      "name": "amountLocked",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2317:17:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12764,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2317:4:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12777,
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
                                "hexValue": "746f6b656e734c6f636b6564",
                                "id": 12771,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2385:14:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
                                "value": "tokensLocked"
                              },
                              {
                                "argumentTypes": null,
                                "id": 12772,
                                "name": "assetID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12750,
                                "src": "2401:7:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 12773,
                                "name": "_investor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12744,
                                "src": "2410:9:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
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
                                "id": 12769,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "2368:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 12770,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2368:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 12774,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2368:52:51",
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
                          "id": 12768,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "2358:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 12775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2358:63:51",
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
                        "id": 12766,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12661,
                        "src": "2337:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$12657",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 12767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12649,
                      "src": "2337:20:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 12776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2337:85:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2317:105:51"
                },
                {
                  "assignments": [
                    12779
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12779,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2428:12:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12778,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2428:4:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12783,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 12780,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12932,
                      "src": "2443:8:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 12782,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 12781,
                      "name": "_investor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12744,
                      "src": "2452:9:51",
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
                    "src": "2443:19:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2428:34:51"
                },
                {
                  "assignments": [
                    12785
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12785,
                      "name": "available",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2468:14:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12784,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2468:4:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12790,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 12788,
                        "name": "amountLocked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12765,
                        "src": "2497:12:51",
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
                        "id": 12786,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12779,
                        "src": "2485:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 12787,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6890,
                      "src": "2485:11:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 12789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2485:25:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2468:42:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 12791,
                    "name": "available",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12785,
                    "src": "2523:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 12748,
                  "id": 12792,
                  "nodeType": "Return",
                  "src": "2516:16:51"
                }
              ]
            },
            "documentation": null,
            "id": 12794,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountAvailable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12744,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 12794,
                  "src": "2152:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2152:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2151:19:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12747,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12794,
                  "src": "2198:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12746,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2198:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2197:6:51"
            },
            "scope": 12795,
            "src": "2124:413:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 12796,
        "src": "745:1795:51"
      }
    ],
    "src": "0:2541:51"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/GovernedTokenERC20.sol",
    "exportedSymbols": {
      "DBAccess": [
        12657
      ],
      "GovernedTokenERC20": [
        12795
      ]
    },
    "id": 12796,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 12640,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:51"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/DividendTokenERC20.sol",
        "file": "./DividendTokenERC20.sol",
        "id": 12641,
        "nodeType": "ImportDirective",
        "scope": 12796,
        "sourceUnit": 12482,
        "src": "25:34:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 12642,
        "nodeType": "ImportDirective",
        "scope": 12796,
        "sourceUnit": 6934,
        "src": "60:33:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 12657,
        "linearizedBaseContracts": [
          12657
        ],
        "name": "DBAccess",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 12649,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12644,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 12649,
                  "src": "209:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12643,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "209:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "208:14:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12647,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12649,
                  "src": "246:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12646,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "246:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "245:6:51"
            },
            "scope": 12657,
            "src": "188:64:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 12656,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12651,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 12656,
                  "src": "279:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "278:14:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12654,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12656,
                  "src": "316:7:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12653,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "316:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "315:9:51"
            },
            "scope": 12657,
            "src": "255:70:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 12796,
        "src": "165:162:51"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 12658,
              "name": "DividendTokenERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12481,
              "src": "776:18:51",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DividendTokenERC20_$12481",
                "typeString": "contract DividendTokenERC20"
              }
            },
            "id": 12659,
            "nodeType": "InheritanceSpecifier",
            "src": "776:18:51"
          }
        ],
        "contractDependencies": [
          6697,
          12481,
          12919,
          13253
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 12795,
        "linearizedBaseContracts": [
          12795,
          12481,
          12919,
          13253,
          6697
        ],
        "name": "GovernedTokenERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 12661,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 12795,
            "src": "798:24:51",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DBAccess_$12657",
              "typeString": "contract DBAccess"
            },
            "typeName": {
              "contractScope": null,
              "id": 12660,
              "name": "DBAccess",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12657,
              "src": "798:8:51",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DBAccess_$12657",
                "typeString": "contract DBAccess"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12683,
              "nodeType": "Block",
              "src": "1370:41:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 12681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 12677,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12661,
                      "src": "1376:8:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$12657",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 12679,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12663,
                          "src": "1396:9:51",
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
                        "id": 12678,
                        "name": "DBAccess",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12657,
                        "src": "1387:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DBAccess_$12657_$",
                          "typeString": "type(contract DBAccess)"
                        }
                      },
                      "id": 12680,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1387:19:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DBAccess_$12657",
                        "typeString": "contract DBAccess"
                      }
                    },
                    "src": "1376:30:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DBAccess_$12657",
                      "typeString": "contract DBAccess"
                    }
                  },
                  "id": 12682,
                  "nodeType": "ExpressionStatement",
                  "src": "1376:30:51"
                }
              ]
            },
            "documentation": null,
            "id": 12684,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 12672,
                    "name": "_tokenURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12665,
                    "src": "1337:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 12673,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12667,
                    "src": "1348:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 12674,
                    "name": "_erc20Address",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12669,
                    "src": "1356:13:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 12675,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 12671,
                  "name": "DividendTokenERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 12481,
                  "src": "1318:18:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_DividendTokenERC20_$12481_$",
                    "typeString": "type(contract DividendTokenERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1318:52:51"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12663,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1231:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12662,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:7:51",
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
                  "id": 12665,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1250:16:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12664,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12667,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1268:14:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1268:7:51",
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
                  "id": 12669,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 12684,
                  "src": "1284:21:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1284:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:76:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12676,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1370:0:51"
            },
            "scope": 12795,
            "src": "1219:192:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12711,
              "nodeType": "Block",
              "src": "1594:118:51",
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
                        "id": 12699,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 12694,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12688,
                          "src": "1610:7:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 12696,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13268,
                                "src": "1640:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 12697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1640:10:51",
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
                            "id": 12695,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12794,
                            "src": "1621:18:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 12698,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1621:30:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1610:41:51",
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
                      "id": 12693,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1602:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 12700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1602:50:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12701,
                  "nodeType": "ExpressionStatement",
                  "src": "1602:50:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 12705,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12686,
                        "src": "1675:3:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 12706,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12688,
                        "src": "1680:7:51",
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
                        "id": 12702,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13408,
                        "src": "1660:5:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$12795",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 12704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12138,
                      "src": "1660:14:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 12707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1660:28:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 12708,
                  "nodeType": "ExpressionStatement",
                  "src": "1660:28:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 12709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1703:4:51",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 12692,
                  "id": 12710,
                  "nodeType": "Return",
                  "src": "1696:11:51"
                }
              ]
            },
            "documentation": null,
            "id": 12712,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12686,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 12712,
                  "src": "1533:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1533:7:51",
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
                  "id": 12688,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12712,
                  "src": "1546:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12687,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1546:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1532:27:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12691,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12712,
                  "src": "1580:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12690,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1579:14:51"
            },
            "scope": 12795,
            "src": "1515:197:51",
            "stateMutability": "nonpayable",
            "superFunction": 12138,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12741,
              "nodeType": "Block",
              "src": "1918:124:51",
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
                        "id": 12728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 12724,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 12718,
                          "src": "1934:7:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 12726,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12714,
                              "src": "1964:5:51",
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
                            "id": 12725,
                            "name": "getAmountAvailable",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12794,
                            "src": "1945:18:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 12727,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1945:25:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1934:36:51",
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
                      "id": 12723,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        13271,
                        13272
                      ],
                      "referencedDeclaration": 13271,
                      "src": "1926:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 12729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1926:45:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 12730,
                  "nodeType": "ExpressionStatement",
                  "src": "1926:45:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 12734,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12714,
                        "src": "1998:5:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 12735,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12716,
                        "src": "2005:3:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 12736,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12718,
                        "src": "2010:7:51",
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
                        "id": 12731,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13408,
                        "src": "1979:5:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_GovernedTokenERC20_$12795",
                          "typeString": "contract super GovernedTokenERC20"
                        }
                      },
                      "id": 12733,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12174,
                      "src": "1979:18:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 12737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1979:39:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 12738,
                  "nodeType": "ExpressionStatement",
                  "src": "1979:39:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 12739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2033:4:51",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 12722,
                  "id": 12740,
                  "nodeType": "Return",
                  "src": "2026:11:51"
                }
              ]
            },
            "documentation": null,
            "id": 12742,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12714,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1842:13:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12713,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:7:51",
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
                  "id": 12716,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1857:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1857:7:51",
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
                  "id": 12718,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1870:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12717,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1870:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1841:42:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12721,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12742,
                  "src": "1904:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12720,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1904:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1903:14:51"
            },
            "scope": 12795,
            "src": "1820:222:51",
            "stateMutability": "nonpayable",
            "superFunction": 12174,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12793,
              "nodeType": "Block",
              "src": "2204:333:51",
              "statements": [
                {
                  "assignments": [
                    12750
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12750,
                      "name": "assetID",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2210:15:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 12749,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2210:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12763,
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
                                "hexValue": "6173736574546f6b656e4944",
                                "id": 12756,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2279:14:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                "value": "assetTokenID"
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 12758,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13407,
                                    "src": "2303:4:51",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$12795",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_GovernedTokenERC20_$12795",
                                      "typeString": "contract GovernedTokenERC20"
                                    }
                                  ],
                                  "id": 12757,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2295:7:51",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 12759,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2295:13:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_6e7347ae91e982f6828e6671c073b61daa7b40a6a6db0e9510c5732b555b0ef8",
                                  "typeString": "literal_string \"assetTokenID\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 12754,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "2262:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 12755,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2262:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 12760,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2262:47:51",
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
                          "id": 12753,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "2252:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 12761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2252:58:51",
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
                        "id": 12751,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12661,
                        "src": "2228:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$12657",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 12752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12656,
                      "src": "2228:23:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 12762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2228:83:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2210:101:51"
                },
                {
                  "assignments": [
                    12765
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12765,
                      "name": "amountLocked",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2317:17:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12764,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2317:4:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12777,
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
                                "hexValue": "746f6b656e734c6f636b6564",
                                "id": 12771,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2385:14:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
                                "value": "tokensLocked"
                              },
                              {
                                "argumentTypes": null,
                                "id": 12772,
                                "name": "assetID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12750,
                                "src": "2401:7:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 12773,
                                "name": "_investor",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12744,
                                "src": "2410:9:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c6660bc030d5e557ee51d9255fa1bdee790a37ada066b4d5fbabaecd33bb4dd0",
                                  "typeString": "literal_string \"tokensLocked\""
                                },
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
                                "id": 12769,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13255,
                                "src": "2368:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 12770,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2368:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 12774,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2368:52:51",
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
                          "id": 12768,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13262,
                          "src": "2358:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 12775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2358:63:51",
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
                        "id": 12766,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12661,
                        "src": "2337:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DBAccess_$12657",
                          "typeString": "contract DBAccess"
                        }
                      },
                      "id": 12767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 12649,
                      "src": "2337:20:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 12776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2337:85:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2317:105:51"
                },
                {
                  "assignments": [
                    12779
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12779,
                      "name": "balance",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2428:12:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12778,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2428:4:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12783,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 12780,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12932,
                      "src": "2443:8:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 12782,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 12781,
                      "name": "_investor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12744,
                      "src": "2452:9:51",
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
                    "src": "2443:19:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2428:34:51"
                },
                {
                  "assignments": [
                    12785
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 12785,
                      "name": "available",
                      "nodeType": "VariableDeclaration",
                      "scope": 12794,
                      "src": "2468:14:51",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 12784,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2468:4:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 12790,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 12788,
                        "name": "amountLocked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12765,
                        "src": "2497:12:51",
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
                        "id": 12786,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12779,
                        "src": "2485:7:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 12787,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6890,
                      "src": "2485:11:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 12789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2485:25:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2468:42:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 12791,
                    "name": "available",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12785,
                    "src": "2523:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 12748,
                  "id": 12792,
                  "nodeType": "Return",
                  "src": "2516:16:51"
                }
              ]
            },
            "documentation": null,
            "id": 12794,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountAvailable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12745,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12744,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 12794,
                  "src": "2152:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2152:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2151:19:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 12748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12747,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12794,
                  "src": "2198:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12746,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2198:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2197:6:51"
            },
            "scope": 12795,
            "src": "2124:413:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 12796,
        "src": "745:1795:51"
      }
    ],
    "src": "0:2541:51"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T18:28:17.972Z"
}