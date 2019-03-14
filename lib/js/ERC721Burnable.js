"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC721Burnable = exports.ERC721Burnable = 
{
  "contractName": "ERC721Burnable",
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
      "constant": false,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526100367f01ffc9a70000000000000000000000000000000000000000000000000000000064010000000061006d810204565b6100687f80ac58cd0000000000000000000000000000000000000000000000000000000064010000000061006d810204565b6100d9565b7fffffffff00000000000000000000000000000000000000000000000000000000808216141561009c57600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b610a38806100e86000396000f3006080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a781146100b3578063081812fc146100fe578063095ea7b31461013257806323b872dd1461015857806342842e0e1461018257806342966c68146101ac5780636352211e146101c457806370a08231146101dc578063a22cb4651461020f578063b88d4fde14610235578063e985e9c5146102a4575b600080fd5b3480156100bf57600080fd5b506100ea7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19600435166102cb565b604080519115158252519081900360200190f35b34801561010a57600080fd5b506101166004356102ff565b60408051600160a060020a039092168252519081900360200190f35b34801561013e57600080fd5b50610156600160a060020a0360043516602435610331565b005b34801561016457600080fd5b50610156600160a060020a03600435811690602435166044356103e7565b34801561018e57600080fd5b50610156600160a060020a0360043581169060243516604435610475565b3480156101b857600080fd5b50610156600435610496565b3480156101d057600080fd5b506101166004356104c0565b3480156101e857600080fd5b506101fd600160a060020a03600435166104ea565b60408051918252519081900360200190f35b34801561021b57600080fd5b50610156600160a060020a0360043516602435151561051d565b34801561024157600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261015694600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506105a19650505050505050565b3480156102b057600080fd5b506100ea600160a060020a03600435811690602435166105c9565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b600061030a826105f7565b151561031557600080fd5b50600090815260026020526040902054600160a060020a031690565b600061033c826104c0565b9050600160a060020a03838116908216141561035757600080fd5b33600160a060020a0382161480610373575061037381336105c9565b151561037e57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6103f13382610614565b15156103fc57600080fd5b600160a060020a038216151561041157600080fd5b61041b8382610673565b61042583826106e4565b61042f828261077a565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b61049183838360206040519081016040528060008152506105a1565b505050565b6104a03382610614565b15156104ab57600080fd5b6104bd6104b7826104c0565b8261080a565b50565b600081815260016020526040812054600160a060020a03168015156104e457600080fd5b92915050565b6000600160a060020a038216151561050157600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a03821633141561053357600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6105ac8484846103e7565b6105b88484848461085a565b15156105c357600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b600080610620836104c0565b905080600160a060020a031684600160a060020a0316148061065b575083600160a060020a0316610650846102ff565b600160a060020a0316145b8061066b575061066b81856105c9565b949350505050565b81600160a060020a0316610686826104c0565b600160a060020a03161461069957600080fd5b600081815260026020526040902054600160a060020a0316156106e0576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b81600160a060020a03166106f7826104c0565b600160a060020a03161461070a57600080fd5b600160a060020a03821660009081526003602052604090205461073490600163ffffffff6109dc16565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600081815260016020526040902054600160a060020a03161561079c57600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03881690811790915584526003909152909120546107ea916109ee565b600160a060020a0390921660009081526003602052604090209190915550565b6108148282610673565b61081e82826106e4565b6040518190600090600160a060020a038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008061086f85600160a060020a0316610a04565b151561087e57600191506109d3565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b838110156109115781810151838201526020016108f9565b50505050905090810190601f16801561093e5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561096057600080fd5b505af1158015610974573d6000803e3d6000fd5b505050506040513d602081101561098a57600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b6000828211156109e857fe5b50900390565b6000828201838110156109fd57fe5b9392505050565b6000903b11905600a165627a7a72305820a92a3330476c87057afc29a2df5d1ba71fab7fbfa97f005d83688481b5a709400029",
  "deployedBytecode": "0x6080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a781146100b3578063081812fc146100fe578063095ea7b31461013257806323b872dd1461015857806342842e0e1461018257806342966c68146101ac5780636352211e146101c457806370a08231146101dc578063a22cb4651461020f578063b88d4fde14610235578063e985e9c5146102a4575b600080fd5b3480156100bf57600080fd5b506100ea7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19600435166102cb565b604080519115158252519081900360200190f35b34801561010a57600080fd5b506101166004356102ff565b60408051600160a060020a039092168252519081900360200190f35b34801561013e57600080fd5b50610156600160a060020a0360043516602435610331565b005b34801561016457600080fd5b50610156600160a060020a03600435811690602435166044356103e7565b34801561018e57600080fd5b50610156600160a060020a0360043581169060243516604435610475565b3480156101b857600080fd5b50610156600435610496565b3480156101d057600080fd5b506101166004356104c0565b3480156101e857600080fd5b506101fd600160a060020a03600435166104ea565b60408051918252519081900360200190f35b34801561021b57600080fd5b50610156600160a060020a0360043516602435151561051d565b34801561024157600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261015694600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506105a19650505050505050565b3480156102b057600080fd5b506100ea600160a060020a03600435811690602435166105c9565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b600061030a826105f7565b151561031557600080fd5b50600090815260026020526040902054600160a060020a031690565b600061033c826104c0565b9050600160a060020a03838116908216141561035757600080fd5b33600160a060020a0382161480610373575061037381336105c9565b151561037e57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6103f13382610614565b15156103fc57600080fd5b600160a060020a038216151561041157600080fd5b61041b8382610673565b61042583826106e4565b61042f828261077a565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b61049183838360206040519081016040528060008152506105a1565b505050565b6104a03382610614565b15156104ab57600080fd5b6104bd6104b7826104c0565b8261080a565b50565b600081815260016020526040812054600160a060020a03168015156104e457600080fd5b92915050565b6000600160a060020a038216151561050157600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a03821633141561053357600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6105ac8484846103e7565b6105b88484848461085a565b15156105c357600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b600080610620836104c0565b905080600160a060020a031684600160a060020a0316148061065b575083600160a060020a0316610650846102ff565b600160a060020a0316145b8061066b575061066b81856105c9565b949350505050565b81600160a060020a0316610686826104c0565b600160a060020a03161461069957600080fd5b600081815260026020526040902054600160a060020a0316156106e0576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b81600160a060020a03166106f7826104c0565b600160a060020a03161461070a57600080fd5b600160a060020a03821660009081526003602052604090205461073490600163ffffffff6109dc16565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600081815260016020526040902054600160a060020a03161561079c57600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03881690811790915584526003909152909120546107ea916109ee565b600160a060020a0390921660009081526003602052604090209190915550565b6108148282610673565b61081e82826106e4565b6040518190600090600160a060020a038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008061086f85600160a060020a0316610a04565b151561087e57600191506109d3565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b838110156109115781810151838201526020016108f9565b50505050905090810190601f16801561093e5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561096057600080fd5b505af1158015610974573d6000803e3d6000fd5b505050506040513d602081101561098a57600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b6000828211156109e857fe5b50900390565b6000828201838110156109fd57fe5b9392505050565b6000903b11905600a165627a7a72305820a92a3330476c87057afc29a2df5d1ba71fab7fbfa97f005d83688481b5a709400029",
  "sourceMap": "156:313:108:-;;;640:39:24;659:19;640:18;;;;:39;:::i;:::-;1906::107;1925:19;1906:18;;;;:39;:::i;:::-;156:313:108;;989:158:24;1064:25;;;;;;1056:34;;;;;;1100:33;;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1100:40:24;1136:4;1100:40;;;989:158::o;156:313:108:-;;;;;;;",
  "deployedSourceMap": "156:313:108:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;777:133:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;777:133:24;-1:-1:-1;;777:133:24;;;;;;;;;;;;;;;;;;;;;;;3704:151:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3704:151:107;;;;;;;;;-1:-1:-1;;;;;3704:151:107;;;;;;;;;;;;;;3127:292;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3127:292:107;-1:-1:-1;;;;;3127:292:107;;;;;;;;;5259:330;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;5259:330:107;-1:-1:-1;;;;;5259:330:107;;;;;;;;;;;;6228:181;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;6228:181:107;-1:-1:-1;;;;;6228:181:107;;;;;;;;;;;;322:145:108;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;322:145:108;;;;;2529:177:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2529:177:107;;;;;2155:150;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2155:150:107;-1:-1:-1;;;;;2155:150:107;;;;;;;;;;;;;;;;;;;;;4147:213;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4147:213:107;-1:-1:-1;;;;;4147:213:107;;;;;;;;;7114:253;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;7114:253:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7114:253:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7114:253:107;;-1:-1:-1;7114:253:107;;-1:-1:-1;;;;;;;7114:253:107;4681:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4681:145:107;-1:-1:-1;;;;;4681:145:107;;;;;;;;;;777:133:24;-1:-1:-1;;870:33:24;847:4;870:33;;;;;;;;;;;;;;777:133::o;3704:151:107:-;3763:7;3790:16;3798:7;3790;:16::i;:::-;3782:25;;;;;;;;-1:-1:-1;3824:24:107;;;;:15;:24;;;;;;-1:-1:-1;;;;;3824:24:107;;3704:151::o;3127:292::-;3190:13;3206:16;3214:7;3206;:16::i;:::-;3190:32;-1:-1:-1;;;;;;3240:11:107;;;;;;;;3232:20;;;;;;3270:10;-1:-1:-1;;;;;3270:19:107;;;;:58;;;3293:35;3310:5;3317:10;3293:16;:35::i;:::-;3262:67;;;;;;;;3340:24;;;;:15;:24;;;;;;:29;;-1:-1:-1;;3340:29:107;-1:-1:-1;;;;;3340:29:107;;;;;;;;;3384:28;;3340:24;;3384:28;;;;;;;3127:292;;;:::o;5259:330::-;5349:39;5368:10;5380:7;5349:18;:39::i;:::-;5341:48;;;;;;;;-1:-1:-1;;;;;5407:16:107;;;;5399:25;;;;;;5435:29;5450:4;5456:7;5435:14;:29::i;:::-;5474:31;5491:4;5497:7;5474:16;:31::i;:::-;5515:24;5527:2;5531:7;5515:11;:24::i;:::-;5574:7;5570:2;-1:-1:-1;;;;;5555:27:107;5564:4;-1:-1:-1;;;;;5555:27:107;;;;;;;;;;;5259:330;;;:::o;6228:181::-;6363:39;6380:4;6386:2;6390:7;6363:39;;;;;;;;;;;;;:16;:39::i;:::-;6228:181;;;:::o;322:145:108:-;378:39;397:10;409:7;378:18;:39::i;:::-;370:48;;;;;;;;428:32;434:16;442:7;434;:16::i;:::-;452:7;428:5;:32::i;:::-;322:145;:::o;2529:177:107:-;2584:7;2619:20;;;:11;:20;;;;;;-1:-1:-1;;;;;2619:20:107;2657:19;;;2649:28;;;;;;2694:5;2529:177;-1:-1:-1;;2529:177:107:o;2155:150::-;2210:7;-1:-1:-1;;;;;2237:19:107;;;;2229:28;;;;;;-1:-1:-1;;;;;;2274:24:107;;;;;:17;:24;;;;;;;2155:150::o;4147:213::-;-1:-1:-1;;;;;4226:16:107;;4232:10;4226:16;;4218:25;;;;;;4272:10;4253:30;;;;:18;:30;;;;;;;;-1:-1:-1;;;;;4253:34:107;;;;;;;;;;;;:45;;-1:-1:-1;;4253:45:107;;;;;;;;;;4313:40;;;;;;;4253:34;;4272:10;4313:40;;;;;;;;;;;4147:213;;:::o;7114:253::-;7213:31;7226:4;7232:2;7236:7;7213:12;:31::i;:::-;7311:48;7334:4;7340:2;7344:7;7353:5;7311:22;:48::i;:::-;7303:57;;;;;;;;7114:253;;;;:::o;4681:145::-;-1:-1:-1;;;;;4784:25:107;;;4761:4;4784:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4681:145::o;7556:152::-;7613:4;7645:20;;;:11;:20;;;;;;-1:-1:-1;;;;;7645:20:107;7682:19;;;7556:152::o;8071:404::-;8156:4;8172:13;8188:16;8196:7;8188;:16::i;:::-;8172:32;;8391:5;-1:-1:-1;;;;;8380:16:107;:7;-1:-1:-1;;;;;8380:16:107;;:51;;;;8424:7;-1:-1:-1;;;;;8400:31:107;:20;8412:7;8400:11;:20::i;:::-;-1:-1:-1;;;;;8400:31:107;;8380:51;:87;;;;8435:32;8452:5;8459:7;8435:16;:32::i;:::-;8372:96;8071:404;-1:-1:-1;;;;8071:404:107:o;11859:230::-;11961:5;-1:-1:-1;;;;;11941:25:107;:16;11949:7;11941;:16::i;:::-;-1:-1:-1;;;;;11941:25:107;;11933:34;;;;;;12017:1;11981:24;;;:15;:24;;;;;;-1:-1:-1;;;;;11981:24:107;:38;11977:106;;12070:1;12035:24;;;:15;:24;;;;;:37;;-1:-1:-1;;12035:37:107;;;11977:106;11859:230;;:::o;10510:225::-;10614:4;-1:-1:-1;;;;;10594:24:107;:16;10602:7;10594;:16::i;:::-;-1:-1:-1;;;;;10594:24:107;;10586:33;;;;;;-1:-1:-1;;;;;10655:23:107;;;;;;:17;:23;;;;;;:30;;10683:1;10655:30;:27;:30;:::i;:::-;-1:-1:-1;;;;;10629:23:107;;;;;;;:17;:23;;;;;;;;:56;;;;10695:20;;;:11;:20;;;;:33;;-1:-1:-1;;10695:33:107;;;10510:225::o;9774:216::-;9883:1;9851:20;;;:11;:20;;;;;;-1:-1:-1;;;;;9851:20:107;:34;9843:43;;;;;;9896:20;;;;:11;:20;;;;;;;;:25;;-1:-1:-1;;9896:25:107;-1:-1:-1;;;;;9896:25:107;;;;;;;;9955:21;;:17;:21;;;;;;;:28;;:25;:28::i;:::-;-1:-1:-1;;;;;9931:21:107;;;;;;;:17;:21;;;;;:52;;;;-1:-1:-1;9774:216:107:o;9110:196::-;9176:30;9191:5;9198:7;9176:14;:30::i;:::-;9216:32;9233:5;9240:7;9216:16;:32::i;:::-;9263:36;;9291:7;;9287:1;;-1:-1:-1;;;;;9263:36:107;;;;;9287:1;;9263:36;9110:196;;:::o;11258:328::-;11364:4;11448:13;11385:15;:2;-1:-1:-1;;;;;11385:13:107;;:15::i;:::-;11384:16;11380:58;;;11423:4;11416:11;;;;11380:58;11464:70;;;;;11501:10;11464:70;;;;;;-1:-1:-1;;;;;11464:70:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;:36;;;;;;11501:10;11513:4;;11519:7;;11528:5;;11464:70;;;;;;;;;;;;;;-1:-1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;11464:70:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11464:70:107;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11464:70:107;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;11464:70:107;-1:-1:-1;;11552:26:107;;11562:16;11552:26;;-1:-1:-1;11464:70:107;-1:-1:-1;11258:328:107;;;;;;;;:::o;936:110:73:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:73;;;936:110::o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:73:o;464:624:21:-;524:4;1035:20;;1073:8;;464:624::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./ERC721.sol\";\n\n/**\n * @title ERC721 Burnable Token\n * @dev ERC721 Token that can be irreversibly burned (destroyed).\n */\ncontract ERC721Burnable is ERC721 {\n    /**\n     * @dev Burns a specific ERC721 token.\n     * @param tokenId uint256 id of the ERC721 token to be burned.\n     */\n    function burn(uint256 tokenId) public {\n        require(_isApprovedOrOwner(msg.sender, tokenId));\n        _burn(ownerOf(tokenId), tokenId);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Burnable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Burnable.sol",
    "exportedSymbols": {
      "ERC721Burnable": [
        34113
      ]
    },
    "id": 34114,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34088,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:108"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 34089,
        "nodeType": "ImportDirective",
        "scope": 34114,
        "sourceUnit": 34087,
        "src": "26:22:108",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34090,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "183:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34091,
            "nodeType": "InheritanceSpecifier",
            "src": "183:6:108"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Burnable Token\n@dev ERC721 Token that can be irreversibly burned (destroyed).",
        "fullyImplemented": true,
        "id": 34113,
        "linearizedBaseContracts": [
          34113,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721Burnable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 34111,
              "nodeType": "Block",
              "src": "360:107:108",
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
                              "id": 34098,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "397:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "397:10:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 34100,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34093,
                            "src": "409:7:108",
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
                          "id": 34097,
                          "name": "_isApprovedOrOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33887,
                          "src": "378:18:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) view returns (bool)"
                          }
                        },
                        "id": 34101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "378:39:108",
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
                      "id": 34096,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "370:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "370:48:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34103,
                  "nodeType": "ExpressionStatement",
                  "src": "370:48:108"
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
                            "id": 34106,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34093,
                            "src": "442:7:108",
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
                          "id": 34105,
                          "name": "ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            33634
                          ],
                          "referencedDeclaration": 33634,
                          "src": "434:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 34107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "434:16:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34108,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34093,
                        "src": "452:7:108",
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
                      "id": 34104,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33942,
                      "src": "428:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "428:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34110,
                  "nodeType": "ExpressionStatement",
                  "src": "428:32:108"
                }
              ]
            },
            "documentation": "@dev Burns a specific ERC721 token.\n@param tokenId uint256 id of the ERC721 token to be burned.",
            "id": 34112,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34093,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34112,
                  "src": "336:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34092,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "336:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "335:17:108"
            },
            "payable": false,
            "returnParameters": {
              "id": 34095,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "360:0:108"
            },
            "scope": 34113,
            "src": "322:145:108",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34114,
        "src": "156:313:108"
      }
    ],
    "src": "0:470:108"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Burnable.sol",
    "exportedSymbols": {
      "ERC721Burnable": [
        34113
      ]
    },
    "id": 34114,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34088,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:108"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 34089,
        "nodeType": "ImportDirective",
        "scope": 34114,
        "sourceUnit": 34087,
        "src": "26:22:108",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34090,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "183:6:108",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34091,
            "nodeType": "InheritanceSpecifier",
            "src": "183:6:108"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721 Burnable Token\n@dev ERC721 Token that can be irreversibly burned (destroyed).",
        "fullyImplemented": true,
        "id": 34113,
        "linearizedBaseContracts": [
          34113,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721Burnable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 34111,
              "nodeType": "Block",
              "src": "360:107:108",
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
                              "id": 34098,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "397:3:108",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "397:10:108",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 34100,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34093,
                            "src": "409:7:108",
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
                          "id": 34097,
                          "name": "_isApprovedOrOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33887,
                          "src": "378:18:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) view returns (bool)"
                          }
                        },
                        "id": 34101,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "378:39:108",
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
                      "id": 34096,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "370:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "370:48:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34103,
                  "nodeType": "ExpressionStatement",
                  "src": "370:48:108"
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
                            "id": 34106,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34093,
                            "src": "442:7:108",
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
                          "id": 34105,
                          "name": "ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            33634
                          ],
                          "referencedDeclaration": 33634,
                          "src": "434:7:108",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 34107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "434:16:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34108,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34093,
                        "src": "452:7:108",
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
                      "id": 34104,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33942,
                      "src": "428:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "428:32:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34110,
                  "nodeType": "ExpressionStatement",
                  "src": "428:32:108"
                }
              ]
            },
            "documentation": "@dev Burns a specific ERC721 token.\n@param tokenId uint256 id of the ERC721 token to be burned.",
            "id": 34112,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34093,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34112,
                  "src": "336:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34092,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "336:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "335:17:108"
            },
            "payable": false,
            "returnParameters": {
              "id": 34095,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "360:0:108"
            },
            "scope": 34113,
            "src": "322:145:108",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34114,
        "src": "156:313:108"
      }
    ],
    "src": "0:470:108"
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
      "burn(uint256)": {
        "details": "Burns a specific ERC721 token.",
        "params": {
          "tokenId": "uint256 id of the ERC721 token to be burned."
        }
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
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address Usage of this method is discouraged, use `safeTransferFrom` whenever possible Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    },
    "title": "ERC721 Burnable Token"
  },
  "userdoc": {
    "methods": {}
  }
}