"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC721Enumerable = exports.ERC721Enumerable = 
{
  "contractName": "ERC721Enumerable",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
      "inputs": [
        {
          "name": "owner",
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
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
          "indexed": true,
          "name": "tokenId",
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
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
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
  "bytecode": "0x608060405234801561001057600080fd5b506100437f01ffc9a7000000000000000000000000000000000000000000000000000000006401000000006100ac810204565b6100757f80ac58cd000000000000000000000000000000000000000000000000000000006401000000006100ac810204565b6100a77f780e9d63000000000000000000000000000000000000000000000000000000006401000000006100ac810204565b610118565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100db57600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b610c23806101276000396000f3006080604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a781146100c9578063081812fc14610114578063095ea7b31461014857806318160ddd1461016e57806323b872dd146101955780632f745c59146101bf57806342842e0e146101e35780634f6ccce71461020d5780636352211e1461022557806370a082311461023d578063a22cb4651461025e578063b88d4fde14610284578063e985e9c5146102f3575b600080fd5b3480156100d557600080fd5b506101007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff196004351661031a565b604080519115158252519081900360200190f35b34801561012057600080fd5b5061012c60043561034e565b60408051600160a060020a039092168252519081900360200190f35b34801561015457600080fd5b5061016c600160a060020a0360043516602435610380565b005b34801561017a57600080fd5b50610183610436565b60408051918252519081900360200190f35b3480156101a157600080fd5b5061016c600160a060020a036004358116906024351660443561043d565b3480156101cb57600080fd5b50610183600160a060020a03600435166024356104cb565b3480156101ef57600080fd5b5061016c600160a060020a0360043581169060243516604435610518565b34801561021957600080fd5b50610183600435610539565b34801561023157600080fd5b5061012c60043561056e565b34801561024957600080fd5b50610183600160a060020a0360043516610598565b34801561026a57600080fd5b5061016c600160a060020a036004351660243515156105cb565b34801561029057600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261016c94600160a060020a03813581169560248035909216956044359536956084940191819084018382808284375094975061064f9650505050505050565b3480156102ff57600080fd5b50610100600160a060020a0360043581169060243516610677565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b6000610359826106a5565b151561036457600080fd5b50600090815260026020526040902054600160a060020a031690565b600061038b8261056e565b9050600160a060020a0383811690821614156103a657600080fd5b33600160a060020a03821614806103c257506103c28133610677565b15156103cd57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6007545b90565b61044733826106c2565b151561045257600080fd5b600160a060020a038216151561046757600080fd5b6104718382610721565b61047b8382610792565b6104858282610899565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006104d683610598565b82106104e157600080fd5b600160a060020a038316600090815260056020526040902080548390811061050557fe5b9060005260206000200154905092915050565b610534838383602060405190810160405280600081525061064f565b505050565b6000610543610436565b821061054e57600080fd5b600780548390811061055c57fe5b90600052602060002001549050919050565b600081815260016020526040812054600160a060020a031680151561059257600080fd5b92915050565b6000600160a060020a03821615156105af57600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a0382163314156105e157600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61065a84848461043d565b610666848484846108e2565b151561067157600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b6000806106ce8361056e565b905080600160a060020a031684600160a060020a03161480610709575083600160a060020a03166106fe8461034e565b600160a060020a0316145b8061071957506107198185610677565b949350505050565b81600160a060020a03166107348261056e565b600160a060020a03161461074757600080fd5b600081815260026020526040902054600160a060020a03161561078e576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b60008060006107a18585610a64565b600084815260066020908152604080832054600160a060020a03891684526005909252909120549093506107dc90600163ffffffff610afa16565b600160a060020a03861660009081526005602052604090208054919350908390811061080457fe5b90600052602060002001549050806005600087600160a060020a0316600160a060020a031681526020019081526020016000208481548110151561084457fe5b6000918252602080832090910192909255600160a060020a038716815260059091526040902080549061087b906000198301610bba565b50600093845260066020526040808520859055908452909220555050565b60006108a58383610b0c565b50600160a060020a039091166000908152600560209081526040808320805460018101825590845282842081018590559383526006909152902055565b6000806108f785600160a060020a0316610b9c565b15156109065760019150610a5b565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610999578181015183820152602001610981565b50505050905090810190601f1680156109c65780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156109e857600080fd5b505af11580156109fc573d6000803e3d6000fd5b505050506040513d6020811015610a1257600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b81600160a060020a0316610a778261056e565b600160a060020a031614610a8a57600080fd5b600160a060020a038216600090815260036020526040902054610ab490600163ffffffff610afa16565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600082821115610b0657fe5b50900390565b600081815260016020526040902054600160a060020a031615610b2e57600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610b7c91610ba4565b600160a060020a0390921660009081526003602052604090209190915550565b6000903b1190565b600082820183811015610bb357fe5b9392505050565b8154818355818111156105345760008381526020902061053491810190830161043a91905b80821115610bf35760008155600101610bdf565b50905600a165627a7a7230582080c17e204a2c21a0041c1ce477f9a350818f5fc545794aeee4aaac28b09536b30029",
  "deployedBytecode": "0x6080604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a781146100c9578063081812fc14610114578063095ea7b31461014857806318160ddd1461016e57806323b872dd146101955780632f745c59146101bf57806342842e0e146101e35780634f6ccce71461020d5780636352211e1461022557806370a082311461023d578063a22cb4651461025e578063b88d4fde14610284578063e985e9c5146102f3575b600080fd5b3480156100d557600080fd5b506101007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff196004351661031a565b604080519115158252519081900360200190f35b34801561012057600080fd5b5061012c60043561034e565b60408051600160a060020a039092168252519081900360200190f35b34801561015457600080fd5b5061016c600160a060020a0360043516602435610380565b005b34801561017a57600080fd5b50610183610436565b60408051918252519081900360200190f35b3480156101a157600080fd5b5061016c600160a060020a036004358116906024351660443561043d565b3480156101cb57600080fd5b50610183600160a060020a03600435166024356104cb565b3480156101ef57600080fd5b5061016c600160a060020a0360043581169060243516604435610518565b34801561021957600080fd5b50610183600435610539565b34801561023157600080fd5b5061012c60043561056e565b34801561024957600080fd5b50610183600160a060020a0360043516610598565b34801561026a57600080fd5b5061016c600160a060020a036004351660243515156105cb565b34801561029057600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261016c94600160a060020a03813581169560248035909216956044359536956084940191819084018382808284375094975061064f9650505050505050565b3480156102ff57600080fd5b50610100600160a060020a0360043581169060243516610677565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b6000610359826106a5565b151561036457600080fd5b50600090815260026020526040902054600160a060020a031690565b600061038b8261056e565b9050600160a060020a0383811690821614156103a657600080fd5b33600160a060020a03821614806103c257506103c28133610677565b15156103cd57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6007545b90565b61044733826106c2565b151561045257600080fd5b600160a060020a038216151561046757600080fd5b6104718382610721565b61047b8382610792565b6104858282610899565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006104d683610598565b82106104e157600080fd5b600160a060020a038316600090815260056020526040902080548390811061050557fe5b9060005260206000200154905092915050565b610534838383602060405190810160405280600081525061064f565b505050565b6000610543610436565b821061054e57600080fd5b600780548390811061055c57fe5b90600052602060002001549050919050565b600081815260016020526040812054600160a060020a031680151561059257600080fd5b92915050565b6000600160a060020a03821615156105af57600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a0382163314156105e157600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61065a84848461043d565b610666848484846108e2565b151561067157600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b6000806106ce8361056e565b905080600160a060020a031684600160a060020a03161480610709575083600160a060020a03166106fe8461034e565b600160a060020a0316145b8061071957506107198185610677565b949350505050565b81600160a060020a03166107348261056e565b600160a060020a03161461074757600080fd5b600081815260026020526040902054600160a060020a03161561078e576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b60008060006107a18585610a64565b600084815260066020908152604080832054600160a060020a03891684526005909252909120549093506107dc90600163ffffffff610afa16565b600160a060020a03861660009081526005602052604090208054919350908390811061080457fe5b90600052602060002001549050806005600087600160a060020a0316600160a060020a031681526020019081526020016000208481548110151561084457fe5b6000918252602080832090910192909255600160a060020a038716815260059091526040902080549061087b906000198301610bba565b50600093845260066020526040808520859055908452909220555050565b60006108a58383610b0c565b50600160a060020a039091166000908152600560209081526040808320805460018101825590845282842081018590559383526006909152902055565b6000806108f785600160a060020a0316610b9c565b15156109065760019150610a5b565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610999578181015183820152602001610981565b50505050905090810190601f1680156109c65780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156109e857600080fd5b505af11580156109fc573d6000803e3d6000fd5b505050506040513d6020811015610a1257600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b81600160a060020a0316610a778261056e565b600160a060020a031614610a8a57600080fd5b600160a060020a038216600090815260036020526040902054610ab490600163ffffffff610afa16565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600082821115610b0657fe5b50900390565b600081815260016020526040902054600160a060020a031615610b2e57600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610b7c91610ba4565b600160a060020a0390921660009081526003602052604090209190915550565b6000903b1190565b600082820183811015610bb357fe5b9392505050565b8154818355818111156105345760008381526020902061053491810190830161043a91905b80821115610bf35760008155600101610bdf565b50905600a165627a7a7230582080c17e204a2c21a0041c1ce477f9a350818f5fc545794aeee4aaac28b09536b30029",
  "sourceMap": "281:6152:109:-;;;1127:164;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;640:39:24;659:19;640:18;;;;:39;:::i;:::-;1906::107;1925:19;1906:18;;;;:39;:::i;:::-;1235:49:109;1254:29;1235:18;;;;:49;:::i;:::-;281:6152;;989:158:24;1064:25;;;;;;1056:34;;;;;;1100:33;;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1100:40:24;1136:4;1100:40;;;989:158::o;281:6152:109:-;;;;;;;",
  "deployedSourceMap": "281:6152:109:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;777:133:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;777:133:24;-1:-1:-1;;777:133:24;;;;;;;;;;;;;;;;;;;;;;;3704:151:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3704:151:107;;;;;;;;;-1:-1:-1;;;;;3704:151:107;;;;;;;;;;;;;;3127:292;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3127:292:107;-1:-1:-1;;;;;3127:292:107;;;;;;;;;1998:94:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1998:94:109;;;;;;;;;;;;;;;;;;;;5259:330:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;5259:330:107;-1:-1:-1;;;;;5259:330:107;;;;;;;;;;;;1664:182:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1664:182:109;-1:-1:-1;;;;;1664:182:109;;;;;;;6228:181:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;6228:181:107;-1:-1:-1;;;;;6228:181:107;;;;;;;;;;;;2429:148:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2429:148:109;;;;;2529:177:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2529:177:107;;;;;2155:150;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2155:150:107;-1:-1:-1;;;;;2155:150:107;;;;;4147:213;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4147:213:107;-1:-1:-1;;;;;4147:213:107;;;;;;;;;7114:253;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;7114:253:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7114:253:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7114:253:107;;-1:-1:-1;7114:253:107;;-1:-1:-1;;;;;;;7114:253:107;4681:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4681:145:107;-1:-1:-1;;;;;4681:145:107;;;;;;;;;;777:133:24;-1:-1:-1;;870:33:24;847:4;870:33;;;;;;;;;;;;;;777:133::o;3704:151:107:-;3763:7;3790:16;3798:7;3790;:16::i;:::-;3782:25;;;;;;;;-1:-1:-1;3824:24:107;;;;:15;:24;;;;;;-1:-1:-1;;;;;3824:24:107;;3704:151::o;3127:292::-;3190:13;3206:16;3214:7;3206;:16::i;:::-;3190:32;-1:-1:-1;;;;;;3240:11:107;;;;;;;;3232:20;;;;;;3270:10;-1:-1:-1;;;;;3270:19:107;;;;:58;;;3293:35;3310:5;3317:10;3293:16;:35::i;:::-;3262:67;;;;;;;;3340:24;;;;:15;:24;;;;;;:29;;-1:-1:-1;;3340:29:107;-1:-1:-1;;;;;3340:29:107;;;;;;;;;3384:28;;3340:24;;3384:28;;;;;;;3127:292;;;:::o;1998:94:109:-;2068:10;:17;1998:94;;:::o;5259:330:107:-;5349:39;5368:10;5380:7;5349:18;:39::i;:::-;5341:48;;;;;;;;-1:-1:-1;;;;;5407:16:107;;;;5399:25;;;;;;5435:29;5450:4;5456:7;5435:14;:29::i;:::-;5474:31;5491:4;5497:7;5474:16;:31::i;:::-;5515:24;5527:2;5531:7;5515:11;:24::i;:::-;5574:7;5570:2;-1:-1:-1;;;;;5555:27:107;5564:4;-1:-1:-1;;;;;5555:27:107;;;;;;;;;;;5259:330;;;:::o;1664:182:109:-;1744:7;1779:16;1789:5;1779:9;:16::i;:::-;1771:24;;1763:33;;;;;;-1:-1:-1;;;;;1813:19:109;;;;;;:12;:19;;;;;:26;;1833:5;;1813:26;;;;;;;;;;;;;;1806:33;;1664:182;;;;:::o;6228:181:107:-;6363:39;6380:4;6386:2;6390:7;6363:39;;;;;;;;;;;;;:16;:39::i;:::-;6228:181;;;:::o;2429:148:109:-;2487:7;2522:13;:11;:13::i;:::-;2514:21;;2506:30;;;;;;2553:10;:17;;2564:5;;2553:17;;;;;;;;;;;;;;2546:24;;2429:148;;;:::o;2529:177:107:-;2584:7;2619:20;;;:11;:20;;;;;;-1:-1:-1;;;;;2619:20:107;2657:19;;;2649:28;;;;;;2694:5;2529:177;-1:-1:-1;;2529:177:107:o;2155:150::-;2210:7;-1:-1:-1;;;;;2237:19:107;;;;2229:28;;;;;;-1:-1:-1;;;;;;2274:24:107;;;;;:17;:24;;;;;;;2155:150::o;4147:213::-;-1:-1:-1;;;;;4226:16:107;;4232:10;4226:16;;4218:25;;;;;;4272:10;4253:30;;;;:18;:30;;;;;;;;-1:-1:-1;;;;;4253:34:107;;;;;;;;;;;;:45;;-1:-1:-1;;4253:45:107;;;;;;;;;;4313:40;;;;;;;4253:34;;4272:10;4313:40;;;;;;;;;;;4147:213;;:::o;7114:253::-;7213:31;7226:4;7232:2;7236:7;7213:12;:31::i;:::-;7311:48;7334:4;7340:2;7344:7;7353:5;7311:22;:48::i;:::-;7303:57;;;;;;;;7114:253;;;;:::o;4681:145::-;-1:-1:-1;;;;;4784:25:107;;;4761:4;4784:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4681:145::o;7556:152::-;7613:4;7645:20;;;:11;:20;;;;;;-1:-1:-1;;;;;7645:20:107;7682:19;;;7556:152::o;8071:404::-;8156:4;8172:13;8188:16;8196:7;8188;:16::i;:::-;8172:32;;8391:5;-1:-1:-1;;;;;8380:16:107;:7;-1:-1:-1;;;;;8380:16:107;;:51;;;;8424:7;-1:-1:-1;;;;;8400:31:107;:20;8412:7;8400:11;:20::i;:::-;-1:-1:-1;;;;;8400:31:107;;8380:51;:87;;;;8435:32;8452:5;8459:7;8435:16;:32::i;:::-;8372:96;8071:404;-1:-1:-1;;;;8071:404:107:o;11859:230::-;11961:5;-1:-1:-1;;;;;11941:25:107;:16;11949:7;11941;:16::i;:::-;-1:-1:-1;;;;;11941:25:107;;11933:34;;;;;;12017:1;11981:24;;;:15;:24;;;;;;-1:-1:-1;;;;;11981:24:107;:38;11977:106;;12070:1;12035:24;;;:15;:24;;;;;:37;;-1:-1:-1;;12035:37:107;;;11977:106;11859:230;;:::o;3818:1078:109:-;4087:18;4144:22;4211:17;3894:37;3917:4;3923:7;3894:22;:37::i;:::-;4108:26;;;;:17;:26;;;;;;;;;-1:-1:-1;;;;;4169:18:109;;;;:12;:18;;;;;;:25;4108:26;;-1:-1:-1;4169:32:109;;4199:1;4169:32;:29;:32;:::i;:::-;-1:-1:-1;;;;;4231:18:109;;;;;;:12;:18;;;;;:34;;4144:57;;-1:-1:-1;4231:18:109;4144:57;;4231:34;;;;;;;;;;;;;;4211:54;;4309:9;4276:12;:18;4289:4;-1:-1:-1;;;;;4276:18:109;-1:-1:-1;;;;;4276:18:109;;;;;;;;;;;;4295:10;4276:30;;;;;;;;;;;;;;;;;;;;;:42;;;;-1:-1:-1;;;;;4404:18:109;;;;:12;:18;;;;;;:27;;;;;-1:-1:-1;;4404:27:109;;;:::i;:::-;-1:-1:-1;4837:1:109;4808:26;;;:17;:26;;;;;;:30;;;4848:28;;;;;;:41;-1:-1:-1;;3818:1078:109:o;3051:241::-;3160:14;3120:30;3138:2;3142:7;3120:17;:30::i;:::-;-1:-1:-1;;;;;;3177:16:109;;;;;;;:12;:16;;;;;;;;:23;;39:1:-1;23:18;;45:23;;3210:30:109;;;;;;;;;;;3250:26;;;:17;:26;;;;;:35;3051:241::o;11258:328:107:-;11364:4;11448:13;11385:15;:2;-1:-1:-1;;;;;11385:13:107;;:15::i;:::-;11384:16;11380:58;;;11423:4;11416:11;;;;11380:58;11464:70;;;;;11501:10;11464:70;;;;;;-1:-1:-1;;;;;11464:70:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;:36;;;;;;11501:10;11513:4;;11519:7;;11528:5;;11464:70;;;;;;;;;;;;;;-1:-1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;11464:70:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11464:70:107;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11464:70:107;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;11464:70:107;-1:-1:-1;;11552:26:107;;11562:16;11552:26;;-1:-1:-1;11464:70:107;-1:-1:-1;11258:328:107;;;;;;;;:::o;10510:225::-;10614:4;-1:-1:-1;;;;;10594:24:107;:16;10602:7;10594;:16::i;:::-;-1:-1:-1;;;;;10594:24:107;;10586:33;;;;;;-1:-1:-1;;;;;10655:23:107;;;;;;:17;:23;;;;;;:30;;10683:1;10655:30;:27;:30;:::i;:::-;-1:-1:-1;;;;;10629:23:107;;;;;;;:17;:23;;;;;;;;:56;;;;10695:20;;;:11;:20;;;;:33;;-1:-1:-1;;10695:33:107;;;10510:225::o;936:110:73:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:73;;;936:110::o;9774:216:107:-;9883:1;9851:20;;;:11;:20;;;;;;-1:-1:-1;;;;;9851:20:107;:34;9843:43;;;;;;9896:20;;;;:11;:20;;;;;;;;:25;;-1:-1:-1;;9896:25:107;-1:-1:-1;;;;;9896:25:107;;;;;;;;9955:21;;:17;:21;;;;;;;:28;;:25;:28::i;:::-;-1:-1:-1;;;;;9931:21:107;;;;;;;:17;:21;;;;;:52;;;;-1:-1:-1;9774:216:107:o;464:624:21:-;524:4;1035:20;;1073:8;;464:624::o;1101:129:73:-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:73:o;281:6152:109:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721Enumerable.sol\";\nimport \"./ERC721.sol\";\nimport \"../../ecosystem/ERC165.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token with optional enumeration extension logic\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Enumerable is ERC165, ERC721, IERC721Enumerable {\n    // Mapping from owner to list of owned token IDs\n    mapping(address => uint256[]) private _ownedTokens;\n\n    // Mapping from token ID to index of the owner tokens list\n    mapping(uint256 => uint256) private _ownedTokensIndex;\n\n    // Array with all token ids, used for enumeration\n    uint256[] private _allTokens;\n\n    // Mapping from token id to position in the allTokens array\n    mapping(uint256 => uint256) private _allTokensIndex;\n\n    bytes4 private constant _InterfaceId_ERC721Enumerable = 0x780e9d63;\n    /**\n     * 0x780e9d63 ===\n     *     bytes4(keccak256('totalSupply()')) ^\n     *     bytes4(keccak256('tokenOfOwnerByIndex(address,uint256)')) ^\n     *     bytes4(keccak256('tokenByIndex(uint256)'))\n     */\n\n    /**\n     * @dev Constructor function\n     */\n    constructor () public {\n        // register the supported interface to conform to ERC721 via ERC165\n        _registerInterface(_InterfaceId_ERC721Enumerable);\n    }\n\n    /**\n     * @dev Gets the token ID at a given index of the tokens list of the requested owner\n     * @param owner address owning the tokens list to be accessed\n     * @param index uint256 representing the index to be accessed of the requested tokens list\n     * @return uint256 token ID at the given index of the tokens list owned by the requested address\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256) {\n        require(index < balanceOf(owner));\n        return _ownedTokens[owner][index];\n    }\n\n    /**\n     * @dev Gets the total amount of tokens stored by the contract\n     * @return uint256 representing the total amount of tokens\n     */\n    function totalSupply() public view returns (uint256) {\n        return _allTokens.length;\n    }\n\n    /**\n     * @dev Gets the token ID at a given index of all the tokens in this contract\n     * Reverts if the index is greater or equal to the total number of tokens\n     * @param index uint256 representing the index to be accessed of the tokens list\n     * @return uint256 token ID at the given index of the tokens list\n     */\n    function tokenByIndex(uint256 index) public view returns (uint256) {\n        require(index < totalSupply());\n        return _allTokens[index];\n    }\n\n    /**\n     * @dev Internal function to add a token ID to the list of a given address\n     * This function is internal due to language limitations, see the note in ERC721.sol.\n     * It is not intended to be called by custom derived contracts: in particular, it emits no Transfer event.\n     * @param to address representing the new owner of the given token ID\n     * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n     */\n    function _addTokenTo(address to, uint256 tokenId) internal {\n        super._addTokenTo(to, tokenId);\n        uint256 length = _ownedTokens[to].length;\n        _ownedTokens[to].push(tokenId);\n        _ownedTokensIndex[tokenId] = length;\n    }\n\n    /**\n     * @dev Internal function to remove a token ID from the list of a given address\n     * This function is internal due to language limitations, see the note in ERC721.sol.\n     * It is not intended to be called by custom derived contracts: in particular, it emits no Transfer event,\n     * and doesn't clear approvals.\n     * @param from address representing the previous owner of the given token ID\n     * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n     */\n    function _removeTokenFrom(address from, uint256 tokenId) internal {\n        super._removeTokenFrom(from, tokenId);\n\n        // To prevent a gap in the array, we store the last token in the index of the token to delete, and\n        // then delete the last slot.\n        uint256 tokenIndex = _ownedTokensIndex[tokenId];\n        uint256 lastTokenIndex = _ownedTokens[from].length.sub(1);\n        uint256 lastToken = _ownedTokens[from][lastTokenIndex];\n\n        _ownedTokens[from][tokenIndex] = lastToken;\n        // This also deletes the contents at the last position of the array\n        _ownedTokens[from].length--;\n\n        // Note that this will handle single-element arrays. In that case, both tokenIndex and lastTokenIndex are going to\n        // be zero. Then we can make sure that we will remove tokenId from the ownedTokens list since we are first swapping\n        // the lastToken to the first position, and then dropping the element placed in the last position of the list\n\n        _ownedTokensIndex[tokenId] = 0;\n        _ownedTokensIndex[lastToken] = tokenIndex;\n    }\n\n    /**\n     * @dev Internal function to mint a new token\n     * Reverts if the given token ID already exists\n     * @param to address the beneficiary that will own the minted token\n     * @param tokenId uint256 ID of the token to be minted by the msg.sender\n     */\n    function _mint(address to, uint256 tokenId) internal {\n        super._mint(to, tokenId);\n\n        _allTokensIndex[tokenId] = _allTokens.length;\n        _allTokens.push(tokenId);\n    }\n\n    /**\n     * @dev Internal function to burn a specific token\n     * Reverts if the token does not exist\n     * @param owner owner of the token to burn\n     * @param tokenId uint256 ID of the token being burned by the msg.sender\n     */\n    function _burn(address owner, uint256 tokenId) internal {\n        super._burn(owner, tokenId);\n\n        // Reorg all tokens array\n        uint256 tokenIndex = _allTokensIndex[tokenId];\n        uint256 lastTokenIndex = _allTokens.length.sub(1);\n        uint256 lastToken = _allTokens[lastTokenIndex];\n\n        _allTokens[tokenIndex] = lastToken;\n        _allTokens[lastTokenIndex] = 0;\n\n        _allTokens.length--;\n        _allTokensIndex[tokenId] = 0;\n        _allTokensIndex[lastToken] = tokenIndex;\n    }\n\n    /**\n     * @dev Gets the list of token IDs of the requested owner\n     * @param owner address owning the tokens\n     * @return uint256[] List of token IDs owned by the requested address\n     */\n    function _tokensOfOwner(address owner) internal view returns (uint256[] storage) {\n        return _ownedTokens[owner];\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Enumerable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Enumerable.sol",
    "exportedSymbols": {
      "ERC721Enumerable": [
        34409
      ]
    },
    "id": 34410,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34115,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:109"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
        "file": "./IERC721Enumerable.sol",
        "id": 34116,
        "nodeType": "ImportDirective",
        "scope": 34410,
        "sourceUnit": 34858,
        "src": "26:33:109",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 34117,
        "nodeType": "ImportDirective",
        "scope": 34410,
        "sourceUnit": 34087,
        "src": "60:22:109",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165.sol",
        "file": "../../ecosystem/ERC165.sol",
        "id": 34118,
        "nodeType": "ImportDirective",
        "scope": 34410,
        "sourceUnit": 8579,
        "src": "83:36:109",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34119,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8578,
              "src": "310:6:109",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$8578",
                "typeString": "contract ERC165"
              }
            },
            "id": 34120,
            "nodeType": "InheritanceSpecifier",
            "src": "310:6:109"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34121,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "318:6:109",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34122,
            "nodeType": "InheritanceSpecifier",
            "src": "318:6:109"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34123,
              "name": "IERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34857,
              "src": "326:17:109",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Enumerable_$34857",
                "typeString": "contract IERC721Enumerable"
              }
            },
            "id": 34124,
            "nodeType": "InheritanceSpecifier",
            "src": "326:17:109"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34830,
          34857
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token with optional enumeration extension logic\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": true,
        "id": 34409,
        "linearizedBaseContracts": [
          34409,
          34857,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34129,
            "name": "_ownedTokens",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "403:50:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 34128,
              "keyType": {
                "id": 34125,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "411:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "403:29:109",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 34126,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "422:7:109",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 34127,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "422:9:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34133,
            "name": "_ownedTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "523:53:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 34132,
              "keyType": {
                "id": 34130,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "531:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "523:27:109",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 34131,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "542:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34136,
            "name": "_allTokens",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "637:28:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 34134,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "637:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 34135,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "637:9:109",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34140,
            "name": "_allTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "736:51:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 34139,
              "keyType": {
                "id": 34137,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "744:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "736:27:109",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 34138,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "755:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 34143,
            "name": "_InterfaceId_ERC721Enumerable",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "794:66:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 34141,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "794:6:109",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783738306539643633",
              "id": 34142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "850:10:109",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2014223715_by_1",
                "typeString": "int_const 2014223715"
              },
              "value": "0x780e9d63"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 34150,
              "nodeType": "Block",
              "src": "1149:142:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34147,
                        "name": "_InterfaceId_ERC721Enumerable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34143,
                        "src": "1254:29:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 34146,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8577,
                      "src": "1235:18:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 34148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1235:49:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34149,
                  "nodeType": "ExpressionStatement",
                  "src": "1235:49:109"
                }
              ]
            },
            "documentation": "@dev Constructor function",
            "id": 34151,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1139:2:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1149:0:109"
            },
            "scope": 34409,
            "src": "1127:164:109",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34174,
              "nodeType": "Block",
              "src": "1753:93:109",
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
                        "id": 34165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34161,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34155,
                          "src": "1771:5:109",
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
                              "id": 34163,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34153,
                              "src": "1789:5:109",
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
                            "id": 34162,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              33610
                            ],
                            "referencedDeclaration": 33610,
                            "src": "1779:9:109",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 34164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1779:16:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1771:24:109",
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
                      "id": 34160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "1763:7:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1763:33:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34167,
                  "nodeType": "ExpressionStatement",
                  "src": "1763:33:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34168,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34129,
                        "src": "1813:12:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 34170,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34169,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34153,
                        "src": "1826:5:109",
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
                      "src": "1813:19:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34172,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34171,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34155,
                      "src": "1833:5:109",
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
                    "src": "1813:26:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34159,
                  "id": 34173,
                  "nodeType": "Return",
                  "src": "1806:33:109"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of the tokens list of the requested owner\n@param owner address owning the tokens list to be accessed\n@param index uint256 representing the index to be accessed of the requested tokens list\n@return uint256 token ID at the given index of the tokens list owned by the requested address",
            "id": 34175,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34153,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34175,
                  "src": "1693:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:109",
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
                  "id": 34155,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34175,
                  "src": "1708:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34154,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1708:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1692:30:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34158,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34175,
                  "src": "1744:7:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1743:9:109"
            },
            "scope": 34409,
            "src": "1664:182:109",
            "stateMutability": "view",
            "superFunction": 34849,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34183,
              "nodeType": "Block",
              "src": "2051:41:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 34180,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34136,
                      "src": "2068:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34181,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2068:17:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34179,
                  "id": 34182,
                  "nodeType": "Return",
                  "src": "2061:24:109"
                }
              ]
            },
            "documentation": "@dev Gets the total amount of tokens stored by the contract\n@return uint256 representing the total amount of tokens",
            "id": 34184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34176,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2018:2:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34178,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34184,
                  "src": "2042:7:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2042:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2041:9:109"
            },
            "scope": 34409,
            "src": "1998:94:109",
            "stateMutability": "view",
            "superFunction": 34840,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34202,
              "nodeType": "Block",
              "src": "2496:81:109",
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
                        "id": 34195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34192,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34186,
                          "src": "2514:5:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 34193,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34184
                            ],
                            "referencedDeclaration": 34184,
                            "src": "2522:11:109",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 34194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2522:13:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2514:21:109",
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
                      "id": 34191,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "2506:7:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2506:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34197,
                  "nodeType": "ExpressionStatement",
                  "src": "2506:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34198,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34136,
                      "src": "2553:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34200,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34199,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34186,
                      "src": "2564:5:109",
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
                    "src": "2553:17:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34190,
                  "id": 34201,
                  "nodeType": "Return",
                  "src": "2546:24:109"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of all the tokens in this contract\nReverts if the index is greater or equal to the total number of tokens\n@param index uint256 representing the index to be accessed of the tokens list\n@return uint256 token ID at the given index of the tokens list",
            "id": 34203,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34186,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34203,
                  "src": "2451:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2450:15:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34203,
                  "src": "2487:7:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2487:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2486:9:109"
            },
            "scope": 34409,
            "src": "2429:148:109",
            "stateMutability": "view",
            "superFunction": 34856,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34237,
              "nodeType": "Block",
              "src": "3110:182:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34213,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34205,
                        "src": "3138:2:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34214,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34207,
                        "src": "3142:7:109",
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
                        "id": 34210,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "3120:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_addTokenTo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33977,
                      "src": "3120:17:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3120:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34216,
                  "nodeType": "ExpressionStatement",
                  "src": "3120:30:109"
                },
                {
                  "assignments": [
                    34218
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34218,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 34238,
                      "src": "3160:14:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34217,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3160:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34223,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34219,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34129,
                        "src": "3177:12:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 34221,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34220,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34205,
                        "src": "3190:2:109",
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
                      "src": "3177:16:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34222,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "3177:23:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3160:40:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34228,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34207,
                        "src": "3232:7:109",
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
                          "id": 34224,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34129,
                          "src": "3210:12:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 34226,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34225,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34205,
                          "src": "3223:2:109",
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
                        "src": "3210:16:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3210:21:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 34229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3210:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34230,
                  "nodeType": "ExpressionStatement",
                  "src": "3210:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34231,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34133,
                        "src": "3250:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34233,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34232,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34207,
                        "src": "3268:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3250:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34234,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34218,
                      "src": "3279:6:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3250:35:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34236,
                  "nodeType": "ExpressionStatement",
                  "src": "3250:35:109"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\nThis function is internal due to language limitations, see the note in ERC721.sol.\nIt is not intended to be called by custom derived contracts: in particular, it emits no Transfer event.\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 34238,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34205,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34238,
                  "src": "3072:10:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34204,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3072:7:109",
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
                  "id": 34207,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34238,
                  "src": "3084:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34206,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3084:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3071:29:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34209,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3110:0:109"
            },
            "scope": 34409,
            "src": "3051:241:109",
            "stateMutability": "nonpayable",
            "superFunction": 33977,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34302,
              "nodeType": "Block",
              "src": "3884:1012:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34248,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34240,
                        "src": "3917:4:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34249,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34242,
                        "src": "3923:7:109",
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
                        "id": 34245,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "3894:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34247,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_removeTokenFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 34012,
                      "src": "3894:22:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3894:37:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34251,
                  "nodeType": "ExpressionStatement",
                  "src": "3894:37:109"
                },
                {
                  "assignments": [
                    34253
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34253,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34303,
                      "src": "4087:18:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34252,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4087:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34257,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34254,
                      "name": "_ownedTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34133,
                      "src": "4108:17:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 34256,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34255,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34242,
                      "src": "4126:7:109",
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
                    "src": "4108:26:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4087:47:109"
                },
                {
                  "assignments": [
                    34259
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34259,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34303,
                      "src": "4144:22:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34258,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4144:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34267,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 34265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4199:1:109",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 34260,
                            "name": "_ownedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34129,
                            "src": "4169:12:109",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                              "typeString": "mapping(address => uint256[] storage ref)"
                            }
                          },
                          "id": 34262,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 34261,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34240,
                            "src": "4182:4:109",
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
                          "src": "4169:18:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 34263,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4169:25:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 34264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22667,
                      "src": "4169:29:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 34266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4169:32:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4144:57:109"
                },
                {
                  "assignments": [
                    34269
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34269,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 34303,
                      "src": "4211:17:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34268,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4211:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34275,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34270,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34129,
                        "src": "4231:12:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 34272,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34271,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34240,
                        "src": "4244:4:109",
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
                      "src": "4231:18:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34274,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34273,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34259,
                      "src": "4250:14:109",
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
                    "src": "4231:34:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4211:54:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 34276,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34129,
                          "src": "4276:12:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 34279,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34277,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34240,
                          "src": "4289:4:109",
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
                        "src": "4276:18:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34280,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34278,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34253,
                        "src": "4295:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4276:30:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34281,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34269,
                      "src": "4309:9:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4276:42:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34283,
                  "nodeType": "ExpressionStatement",
                  "src": "4276:42:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "4404:27:109",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 34284,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34129,
                          "src": "4404:12:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 34286,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34285,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34240,
                          "src": "4417:4:109",
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
                        "src": "4404:18:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34287,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4404:25:109",
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
                  "id": 34289,
                  "nodeType": "ExpressionStatement",
                  "src": "4404:27:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34290,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34133,
                        "src": "4808:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34292,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34291,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34242,
                        "src": "4826:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4808:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4837:1:109",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4808:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34295,
                  "nodeType": "ExpressionStatement",
                  "src": "4808:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34296,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34133,
                        "src": "4848:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34298,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34297,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34269,
                        "src": "4866:9:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4848:28:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34299,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34253,
                      "src": "4879:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4848:41:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34301,
                  "nodeType": "ExpressionStatement",
                  "src": "4848:41:109"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\nThis function is internal due to language limitations, see the note in ERC721.sol.\nIt is not intended to be called by custom derived contracts: in particular, it emits no Transfer event,\nand doesn't clear approvals.\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 34303,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34240,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34303,
                  "src": "3844:12:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3844:7:109",
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
                  "id": 34242,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34303,
                  "src": "3858:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3858:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3843:31:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34244,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3884:0:109"
            },
            "scope": 34409,
            "src": "3818:1078:109",
            "stateMutability": "nonpayable",
            "superFunction": 34012,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34330,
              "nodeType": "Block",
              "src": "5222:130:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34313,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34305,
                        "src": "5244:2:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34314,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34307,
                        "src": "5248:7:109",
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
                        "id": 34310,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "5232:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33916,
                      "src": "5232:11:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5232:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34316,
                  "nodeType": "ExpressionStatement",
                  "src": "5232:24:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34317,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34140,
                        "src": "5267:15:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34319,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34318,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34307,
                        "src": "5283:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5267:24:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 34320,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5294:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34321,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5294:17:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5267:44:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34323,
                  "nodeType": "ExpressionStatement",
                  "src": "5267:44:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34327,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34307,
                        "src": "5337:7:109",
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
                        "id": 34324,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5321:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34326,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5321:15:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 34328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5321:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34329,
                  "nodeType": "ExpressionStatement",
                  "src": "5321:24:109"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to address the beneficiary that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 34331,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34305,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34331,
                  "src": "5184:10:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34304,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5184:7:109",
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
                  "id": 34307,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34331,
                  "src": "5196:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5196:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5183:29:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5222:0:109"
            },
            "scope": 34409,
            "src": "5169:183:109",
            "stateMutability": "nonpayable",
            "superFunction": 33916,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34394,
              "nodeType": "Block",
              "src": "5652:451:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34341,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34333,
                        "src": "5674:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34342,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34335,
                        "src": "5681:7:109",
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
                        "id": 34338,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "5662:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33942,
                      "src": "5662:11:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5662:27:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34344,
                  "nodeType": "ExpressionStatement",
                  "src": "5662:27:109"
                },
                {
                  "assignments": [
                    34346
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34346,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34395,
                      "src": "5734:18:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34345,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5734:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34350,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34347,
                      "name": "_allTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34140,
                      "src": "5755:15:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 34349,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34348,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34335,
                      "src": "5771:7:109",
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
                    "src": "5755:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5734:45:109"
                },
                {
                  "assignments": [
                    34352
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34352,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34395,
                      "src": "5789:22:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34351,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5789:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34358,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 34356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5836:1:109",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 34353,
                          "name": "_allTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34136,
                          "src": "5814:10:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 34354,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5814:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 34355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22667,
                      "src": "5814:21:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 34357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5814:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5789:49:109"
                },
                {
                  "assignments": [
                    34360
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34360,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 34395,
                      "src": "5848:17:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34359,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5848:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34364,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34361,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34136,
                      "src": "5868:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34363,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34362,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34352,
                      "src": "5879:14:109",
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
                    "src": "5868:26:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5848:46:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34365,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5905:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34367,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34366,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34346,
                        "src": "5916:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5905:22:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34368,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34360,
                      "src": "5930:9:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5905:34:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34370,
                  "nodeType": "ExpressionStatement",
                  "src": "5905:34:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34371,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5949:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34373,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34372,
                        "name": "lastTokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34352,
                        "src": "5960:14:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5949:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5978:1:109",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5949:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34376,
                  "nodeType": "ExpressionStatement",
                  "src": "5949:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "5990:19:109",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 34377,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5990:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34379,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5990:17:109",
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
                  "id": 34381,
                  "nodeType": "ExpressionStatement",
                  "src": "5990:19:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34382,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34140,
                        "src": "6019:15:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34384,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34383,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34335,
                        "src": "6035:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6019:24:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6046:1:109",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6019:28:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34387,
                  "nodeType": "ExpressionStatement",
                  "src": "6019:28:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34388,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34140,
                        "src": "6057:15:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34390,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34389,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34360,
                        "src": "6073:9:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6057:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34391,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34346,
                      "src": "6086:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6057:39:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34393,
                  "nodeType": "ExpressionStatement",
                  "src": "6057:39:109"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param owner owner of the token to burn\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 34395,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34333,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34395,
                  "src": "5611:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5611:7:109",
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
                  "id": 34335,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34395,
                  "src": "5626:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5626:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5610:32:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34337,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5652:0:109"
            },
            "scope": 34409,
            "src": "5596:507:109",
            "stateMutability": "nonpayable",
            "superFunction": 33942,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34407,
              "nodeType": "Block",
              "src": "6388:43:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34403,
                      "name": "_ownedTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34129,
                      "src": "6405:12:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 34405,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34404,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34397,
                      "src": "6418:5:109",
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
                    "src": "6405:19:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 34402,
                  "id": 34406,
                  "nodeType": "Return",
                  "src": "6398:26:109"
                }
              ]
            },
            "documentation": "@dev Gets the list of token IDs of the requested owner\n@param owner address owning the tokens\n@return uint256[] List of token IDs owned by the requested address",
            "id": 34408,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_tokensOfOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34397,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34408,
                  "src": "6331:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6331:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6330:15:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34401,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34408,
                  "src": "6369:9:109",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34399,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6369:7:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 34400,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6369:9:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6368:19:109"
            },
            "scope": 34409,
            "src": "6307:124:109",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 34410,
        "src": "281:6152:109"
      }
    ],
    "src": "0:6434:109"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Enumerable.sol",
    "exportedSymbols": {
      "ERC721Enumerable": [
        34409
      ]
    },
    "id": 34410,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34115,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:109"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
        "file": "./IERC721Enumerable.sol",
        "id": 34116,
        "nodeType": "ImportDirective",
        "scope": 34410,
        "sourceUnit": 34858,
        "src": "26:33:109",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 34117,
        "nodeType": "ImportDirective",
        "scope": 34410,
        "sourceUnit": 34087,
        "src": "60:22:109",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165.sol",
        "file": "../../ecosystem/ERC165.sol",
        "id": 34118,
        "nodeType": "ImportDirective",
        "scope": 34410,
        "sourceUnit": 8579,
        "src": "83:36:109",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34119,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8578,
              "src": "310:6:109",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$8578",
                "typeString": "contract ERC165"
              }
            },
            "id": 34120,
            "nodeType": "InheritanceSpecifier",
            "src": "310:6:109"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34121,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "318:6:109",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34122,
            "nodeType": "InheritanceSpecifier",
            "src": "318:6:109"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34123,
              "name": "IERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34857,
              "src": "326:17:109",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Enumerable_$34857",
                "typeString": "contract IERC721Enumerable"
              }
            },
            "id": 34124,
            "nodeType": "InheritanceSpecifier",
            "src": "326:17:109"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34830,
          34857
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token with optional enumeration extension logic\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": true,
        "id": 34409,
        "linearizedBaseContracts": [
          34409,
          34857,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34129,
            "name": "_ownedTokens",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "403:50:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
              "typeString": "mapping(address => uint256[])"
            },
            "typeName": {
              "id": 34128,
              "keyType": {
                "id": 34125,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "411:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "403:29:109",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                "typeString": "mapping(address => uint256[])"
              },
              "valueType": {
                "baseType": {
                  "id": 34126,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "422:7:109",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 34127,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "422:9:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34133,
            "name": "_ownedTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "523:53:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 34132,
              "keyType": {
                "id": 34130,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "531:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "523:27:109",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 34131,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "542:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34136,
            "name": "_allTokens",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "637:28:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 34134,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "637:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 34135,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "637:9:109",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34140,
            "name": "_allTokensIndex",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "736:51:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 34139,
              "keyType": {
                "id": 34137,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "744:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "736:27:109",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 34138,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "755:7:109",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 34143,
            "name": "_InterfaceId_ERC721Enumerable",
            "nodeType": "VariableDeclaration",
            "scope": 34409,
            "src": "794:66:109",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 34141,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "794:6:109",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783738306539643633",
              "id": 34142,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "850:10:109",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2014223715_by_1",
                "typeString": "int_const 2014223715"
              },
              "value": "0x780e9d63"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 34150,
              "nodeType": "Block",
              "src": "1149:142:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34147,
                        "name": "_InterfaceId_ERC721Enumerable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34143,
                        "src": "1254:29:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 34146,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8577,
                      "src": "1235:18:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 34148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1235:49:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34149,
                  "nodeType": "ExpressionStatement",
                  "src": "1235:49:109"
                }
              ]
            },
            "documentation": "@dev Constructor function",
            "id": 34151,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34144,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1139:2:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1149:0:109"
            },
            "scope": 34409,
            "src": "1127:164:109",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34174,
              "nodeType": "Block",
              "src": "1753:93:109",
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
                        "id": 34165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34161,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34155,
                          "src": "1771:5:109",
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
                              "id": 34163,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34153,
                              "src": "1789:5:109",
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
                            "id": 34162,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              33610
                            ],
                            "referencedDeclaration": 33610,
                            "src": "1779:9:109",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 34164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1779:16:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1771:24:109",
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
                      "id": 34160,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "1763:7:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1763:33:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34167,
                  "nodeType": "ExpressionStatement",
                  "src": "1763:33:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34168,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34129,
                        "src": "1813:12:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 34170,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34169,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34153,
                        "src": "1826:5:109",
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
                      "src": "1813:19:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34172,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34171,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34155,
                      "src": "1833:5:109",
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
                    "src": "1813:26:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34159,
                  "id": 34173,
                  "nodeType": "Return",
                  "src": "1806:33:109"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of the tokens list of the requested owner\n@param owner address owning the tokens list to be accessed\n@param index uint256 representing the index to be accessed of the requested tokens list\n@return uint256 token ID at the given index of the tokens list owned by the requested address",
            "id": 34175,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34153,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34175,
                  "src": "1693:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:109",
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
                  "id": 34155,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34175,
                  "src": "1708:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34154,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1708:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1692:30:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34158,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34175,
                  "src": "1744:7:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1744:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1743:9:109"
            },
            "scope": 34409,
            "src": "1664:182:109",
            "stateMutability": "view",
            "superFunction": 34849,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34183,
              "nodeType": "Block",
              "src": "2051:41:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 34180,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34136,
                      "src": "2068:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34181,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2068:17:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34179,
                  "id": 34182,
                  "nodeType": "Return",
                  "src": "2061:24:109"
                }
              ]
            },
            "documentation": "@dev Gets the total amount of tokens stored by the contract\n@return uint256 representing the total amount of tokens",
            "id": 34184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34176,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2018:2:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34178,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34184,
                  "src": "2042:7:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2042:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2041:9:109"
            },
            "scope": 34409,
            "src": "1998:94:109",
            "stateMutability": "view",
            "superFunction": 34840,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34202,
              "nodeType": "Block",
              "src": "2496:81:109",
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
                        "id": 34195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34192,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34186,
                          "src": "2514:5:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 34193,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              34184
                            ],
                            "referencedDeclaration": 34184,
                            "src": "2522:11:109",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 34194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2522:13:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2514:21:109",
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
                      "id": 34191,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "2506:7:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2506:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34197,
                  "nodeType": "ExpressionStatement",
                  "src": "2506:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34198,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34136,
                      "src": "2553:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34200,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34199,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34186,
                      "src": "2564:5:109",
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
                    "src": "2553:17:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34190,
                  "id": 34201,
                  "nodeType": "Return",
                  "src": "2546:24:109"
                }
              ]
            },
            "documentation": "@dev Gets the token ID at a given index of all the tokens in this contract\nReverts if the index is greater or equal to the total number of tokens\n@param index uint256 representing the index to be accessed of the tokens list\n@return uint256 token ID at the given index of the tokens list",
            "id": 34203,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34186,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34203,
                  "src": "2451:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2450:15:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34189,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34203,
                  "src": "2487:7:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2487:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2486:9:109"
            },
            "scope": 34409,
            "src": "2429:148:109",
            "stateMutability": "view",
            "superFunction": 34856,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34237,
              "nodeType": "Block",
              "src": "3110:182:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34213,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34205,
                        "src": "3138:2:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34214,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34207,
                        "src": "3142:7:109",
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
                        "id": 34210,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "3120:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_addTokenTo",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33977,
                      "src": "3120:17:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3120:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34216,
                  "nodeType": "ExpressionStatement",
                  "src": "3120:30:109"
                },
                {
                  "assignments": [
                    34218
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34218,
                      "name": "length",
                      "nodeType": "VariableDeclaration",
                      "scope": 34238,
                      "src": "3160:14:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34217,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3160:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34223,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34219,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34129,
                        "src": "3177:12:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 34221,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34220,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34205,
                        "src": "3190:2:109",
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
                      "src": "3177:16:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34222,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "3177:23:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3160:40:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34228,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34207,
                        "src": "3232:7:109",
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
                          "id": 34224,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34129,
                          "src": "3210:12:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 34226,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34225,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34205,
                          "src": "3223:2:109",
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
                        "src": "3210:16:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3210:21:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 34229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3210:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34230,
                  "nodeType": "ExpressionStatement",
                  "src": "3210:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34231,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34133,
                        "src": "3250:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34233,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34232,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34207,
                        "src": "3268:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3250:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34234,
                      "name": "length",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34218,
                      "src": "3279:6:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3250:35:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34236,
                  "nodeType": "ExpressionStatement",
                  "src": "3250:35:109"
                }
              ]
            },
            "documentation": "@dev Internal function to add a token ID to the list of a given address\nThis function is internal due to language limitations, see the note in ERC721.sol.\nIt is not intended to be called by custom derived contracts: in particular, it emits no Transfer event.\n@param to address representing the new owner of the given token ID\n@param tokenId uint256 ID of the token to be added to the tokens list of the given address",
            "id": 34238,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_addTokenTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34208,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34205,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34238,
                  "src": "3072:10:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34204,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3072:7:109",
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
                  "id": 34207,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34238,
                  "src": "3084:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34206,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3084:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3071:29:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34209,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3110:0:109"
            },
            "scope": 34409,
            "src": "3051:241:109",
            "stateMutability": "nonpayable",
            "superFunction": 33977,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34302,
              "nodeType": "Block",
              "src": "3884:1012:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34248,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34240,
                        "src": "3917:4:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34249,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34242,
                        "src": "3923:7:109",
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
                        "id": 34245,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "3894:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34247,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_removeTokenFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 34012,
                      "src": "3894:22:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3894:37:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34251,
                  "nodeType": "ExpressionStatement",
                  "src": "3894:37:109"
                },
                {
                  "assignments": [
                    34253
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34253,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34303,
                      "src": "4087:18:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34252,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4087:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34257,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34254,
                      "name": "_ownedTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34133,
                      "src": "4108:17:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 34256,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34255,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34242,
                      "src": "4126:7:109",
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
                    "src": "4108:26:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4087:47:109"
                },
                {
                  "assignments": [
                    34259
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34259,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34303,
                      "src": "4144:22:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34258,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4144:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34267,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 34265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4199:1:109",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 34260,
                            "name": "_ownedTokens",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34129,
                            "src": "4169:12:109",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                              "typeString": "mapping(address => uint256[] storage ref)"
                            }
                          },
                          "id": 34262,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 34261,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34240,
                            "src": "4182:4:109",
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
                          "src": "4169:18:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 34263,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4169:25:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 34264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22667,
                      "src": "4169:29:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 34266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4169:32:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4144:57:109"
                },
                {
                  "assignments": [
                    34269
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34269,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 34303,
                      "src": "4211:17:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34268,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4211:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34275,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34270,
                        "name": "_ownedTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34129,
                        "src": "4231:12:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                          "typeString": "mapping(address => uint256[] storage ref)"
                        }
                      },
                      "id": 34272,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34271,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34240,
                        "src": "4244:4:109",
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
                      "src": "4231:18:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34274,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34273,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34259,
                      "src": "4250:14:109",
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
                    "src": "4231:34:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4211:54:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 34276,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34129,
                          "src": "4276:12:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 34279,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34277,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34240,
                          "src": "4289:4:109",
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
                        "src": "4276:18:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34280,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34278,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34253,
                        "src": "4295:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4276:30:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34281,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34269,
                      "src": "4309:9:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4276:42:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34283,
                  "nodeType": "ExpressionStatement",
                  "src": "4276:42:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "4404:27:109",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 34284,
                          "name": "_ownedTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34129,
                          "src": "4404:12:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                            "typeString": "mapping(address => uint256[] storage ref)"
                          }
                        },
                        "id": 34286,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 34285,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34240,
                          "src": "4417:4:109",
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
                        "src": "4404:18:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34287,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4404:25:109",
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
                  "id": 34289,
                  "nodeType": "ExpressionStatement",
                  "src": "4404:27:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34294,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34290,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34133,
                        "src": "4808:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34292,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34291,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34242,
                        "src": "4826:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4808:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34293,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4837:1:109",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4808:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34295,
                  "nodeType": "ExpressionStatement",
                  "src": "4808:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34296,
                        "name": "_ownedTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34133,
                        "src": "4848:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34298,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34297,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34269,
                        "src": "4866:9:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4848:28:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34299,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34253,
                      "src": "4879:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4848:41:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34301,
                  "nodeType": "ExpressionStatement",
                  "src": "4848:41:109"
                }
              ]
            },
            "documentation": "@dev Internal function to remove a token ID from the list of a given address\nThis function is internal due to language limitations, see the note in ERC721.sol.\nIt is not intended to be called by custom derived contracts: in particular, it emits no Transfer event,\nand doesn't clear approvals.\n@param from address representing the previous owner of the given token ID\n@param tokenId uint256 ID of the token to be removed from the tokens list of the given address",
            "id": 34303,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_removeTokenFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34240,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 34303,
                  "src": "3844:12:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34239,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3844:7:109",
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
                  "id": 34242,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34303,
                  "src": "3858:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3858:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3843:31:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34244,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3884:0:109"
            },
            "scope": 34409,
            "src": "3818:1078:109",
            "stateMutability": "nonpayable",
            "superFunction": 34012,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34330,
              "nodeType": "Block",
              "src": "5222:130:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34313,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34305,
                        "src": "5244:2:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34314,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34307,
                        "src": "5248:7:109",
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
                        "id": 34310,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "5232:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33916,
                      "src": "5232:11:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5232:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34316,
                  "nodeType": "ExpressionStatement",
                  "src": "5232:24:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34317,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34140,
                        "src": "5267:15:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34319,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34318,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34307,
                        "src": "5283:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5267:24:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 34320,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5294:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34321,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5294:17:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5267:44:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34323,
                  "nodeType": "ExpressionStatement",
                  "src": "5267:44:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34327,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34307,
                        "src": "5337:7:109",
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
                        "id": 34324,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5321:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34326,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5321:15:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256)"
                      }
                    },
                    "id": 34328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5321:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34329,
                  "nodeType": "ExpressionStatement",
                  "src": "5321:24:109"
                }
              ]
            },
            "documentation": "@dev Internal function to mint a new token\nReverts if the given token ID already exists\n@param to address the beneficiary that will own the minted token\n@param tokenId uint256 ID of the token to be minted by the msg.sender",
            "id": 34331,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34305,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34331,
                  "src": "5184:10:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34304,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5184:7:109",
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
                  "id": 34307,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34331,
                  "src": "5196:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5196:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5183:29:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34309,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5222:0:109"
            },
            "scope": 34409,
            "src": "5169:183:109",
            "stateMutability": "nonpayable",
            "superFunction": 33916,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34394,
              "nodeType": "Block",
              "src": "5652:451:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34341,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34333,
                        "src": "5674:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34342,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34335,
                        "src": "5681:7:109",
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
                        "id": 34338,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35241,
                        "src": "5662:5:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC721Enumerable_$34409",
                          "typeString": "contract super ERC721Enumerable"
                        }
                      },
                      "id": 34340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33942,
                      "src": "5662:11:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5662:27:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34344,
                  "nodeType": "ExpressionStatement",
                  "src": "5662:27:109"
                },
                {
                  "assignments": [
                    34346
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34346,
                      "name": "tokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34395,
                      "src": "5734:18:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34345,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5734:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34350,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34347,
                      "name": "_allTokensIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34140,
                      "src": "5755:15:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 34349,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34348,
                      "name": "tokenId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34335,
                      "src": "5771:7:109",
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
                    "src": "5755:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5734:45:109"
                },
                {
                  "assignments": [
                    34352
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34352,
                      "name": "lastTokenIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 34395,
                      "src": "5789:22:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34351,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5789:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34358,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 34356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5836:1:109",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 34353,
                          "name": "_allTokens",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34136,
                          "src": "5814:10:109",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 34354,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5814:17:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 34355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22667,
                      "src": "5814:21:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 34357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5814:24:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5789:49:109"
                },
                {
                  "assignments": [
                    34360
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34360,
                      "name": "lastToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 34395,
                      "src": "5848:17:109",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34359,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5848:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 34364,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34361,
                      "name": "_allTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34136,
                      "src": "5868:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34363,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34362,
                      "name": "lastTokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34352,
                      "src": "5879:14:109",
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
                    "src": "5868:26:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5848:46:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34369,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34365,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5905:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34367,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34366,
                        "name": "tokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34346,
                        "src": "5916:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5905:22:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34368,
                      "name": "lastToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34360,
                      "src": "5930:9:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5905:34:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34370,
                  "nodeType": "ExpressionStatement",
                  "src": "5905:34:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34375,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34371,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5949:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34373,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34372,
                        "name": "lastTokenIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34352,
                        "src": "5960:14:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5949:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5978:1:109",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5949:30:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34376,
                  "nodeType": "ExpressionStatement",
                  "src": "5949:30:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "5990:19:109",
                    "subExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 34377,
                        "name": "_allTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34136,
                        "src": "5990:10:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34379,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5990:17:109",
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
                  "id": 34381,
                  "nodeType": "ExpressionStatement",
                  "src": "5990:19:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34382,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34140,
                        "src": "6019:15:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34384,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34383,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34335,
                        "src": "6035:7:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6019:24:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6046:1:109",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6019:28:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34387,
                  "nodeType": "ExpressionStatement",
                  "src": "6019:28:109"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 34388,
                        "name": "_allTokensIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34140,
                        "src": "6057:15:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 34390,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 34389,
                        "name": "lastToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34360,
                        "src": "6073:9:109",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "6057:26:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34391,
                      "name": "tokenIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34346,
                      "src": "6086:10:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6057:39:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34393,
                  "nodeType": "ExpressionStatement",
                  "src": "6057:39:109"
                }
              ]
            },
            "documentation": "@dev Internal function to burn a specific token\nReverts if the token does not exist\n@param owner owner of the token to burn\n@param tokenId uint256 ID of the token being burned by the msg.sender",
            "id": 34395,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34333,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34395,
                  "src": "5611:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5611:7:109",
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
                  "id": 34335,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34395,
                  "src": "5626:15:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5626:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5610:32:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34337,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5652:0:109"
            },
            "scope": 34409,
            "src": "5596:507:109",
            "stateMutability": "nonpayable",
            "superFunction": 33942,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 34407,
              "nodeType": "Block",
              "src": "6388:43:109",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 34403,
                      "name": "_ownedTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34129,
                      "src": "6405:12:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$dyn_storage_$",
                        "typeString": "mapping(address => uint256[] storage ref)"
                      }
                    },
                    "id": 34405,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 34404,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34397,
                      "src": "6418:5:109",
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
                    "src": "6405:19:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 34402,
                  "id": 34406,
                  "nodeType": "Return",
                  "src": "6398:26:109"
                }
              ]
            },
            "documentation": "@dev Gets the list of token IDs of the requested owner\n@param owner address owning the tokens\n@return uint256[] List of token IDs owned by the requested address",
            "id": 34408,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_tokensOfOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34397,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34408,
                  "src": "6331:13:109",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34396,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6331:7:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6330:15:109"
            },
            "payable": false,
            "returnParameters": {
              "id": 34402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34401,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34408,
                  "src": "6369:9:109",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34399,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6369:7:109",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 34400,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "6369:9:109",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6368:19:109"
            },
            "scope": 34409,
            "src": "6307:124:109",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 34410,
        "src": "281:6152:109"
      }
    ],
    "src": "0:6434:109"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.873Z",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address",
        "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "owner address currently marked as the owner of the given token ID"
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted.     * Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "implement supportsInterface(bytes4) using a lookup table"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract",
        "return": "uint256 representing the total amount of tokens"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address Usage of this method is discouraged, use `safeTransferFrom` whenever possible Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    },
    "title": "ERC-721 Non-Fungible Token with optional enumeration extension logic"
  },
  "userdoc": {
    "methods": {}
  }
}