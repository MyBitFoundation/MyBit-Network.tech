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
      "constant": true,
      "inputs": [],
      "name": "events",
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
          "name": "_events",
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
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051604080610b0c83398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560018054939092169216919091179055610aa5806100676000396000f3006080604052600436106100535763ffffffff60e060020a6000350416630255a03b8114610058578063713b563f1461007b57806383197ef0146100ac5780638831e9cf146100c1578063b5f8558c146100e2575b600080fd5b34801561006457600080fd5b50610079600160a060020a03600435166100f7565b005b34801561008757600080fd5b50610090610591565b60408051600160a060020a039092168252519081900360200190f35b3480156100b857600080fd5b506100796105a0565b3480156100cd57600080fd5b50610079600160a060020a0360043516610792565b3480156100ee57600080fd5b50610090610a6a565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061018e5780518252601f19909201916020918201910161016f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022657600080fd5b600054604080517f706c6174666f726d4173736574494400000000000000000000000000000000006020808301919091528251808303600f018152602f909201928390528151600160a060020a039094169363ca446dd993918291908401908083835b602083106102a85780518252601f199092019160209182019101610289565b51815160209384036101000a6000190180199092169116179052604080519290940182900382207f746f6b656e41646472657373000000000000000000000000000000000000000083830152602c8084019190915284518084039091018152604c9092019384905281519195509293508392850191508083835b602083106103415780518252601f199092019160209182019101610322565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152600160a060020a0388166024820152915160448084019550600094509092839003019050818387803b1580156103b557600080fd5b505af11580156103c9573d6000803e3d6000fd5b5050600054604080517f706c6174666f726d546f6b656e000000000000000000000000000000000000006020808301919091528251808303600d018152602d909201928390528151600160a060020a03909416955063ca446dd99450909282918401908083835b6020831061044f5780518252601f199092019160209182019101610430565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152600160a060020a0388166024820152915160448084019550600094509092839003019050818387803b1580156104c357600080fd5b505af11580156104d7573d6000803e3d6000fd5b5050600154604080517fbb39cc3c000000000000000000000000000000000000000000000000000000008152600160a060020a03868116602483015260048201839052600e60448301527f506c6174666f726d20746f6b656e0000000000000000000000000000000000006064830152915191909216935063bb39cc3c9250608480830192600092919082900301818387803b15801561057657600080fd5b505af115801561058a573d6000803e3d6000fd5b5050505050565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106106375780518252601f199092019160209182019101610618565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561069857600080fd5b505af11580156106ac573d6000803e3d6000fd5b505050506040513d60208110156106c257600080fd5b505115156106cf57600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601760a48201527f506c6174666f726d46756e64732064657374726f79656400000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b503392505050ff5b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106108295780518252601f19909201916020918201910161080a565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561088a57600080fd5b505af115801561089e573d6000803e3d6000fd5b505050506040513d60208110156108b457600080fd5b505115156108c157600080fd5b600054604080517f706c6174666f726d57616c6c65740000000000000000000000000000000000006020808301919091528251808303600e018152602e909201928390528151600160a060020a039094169363ca446dd993918291908401908083835b602083106109435780518252601f199092019160209182019101610924565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152600160a060020a0388166024820152915160448084019550600094509092839003019050818387803b1580156109b757600080fd5b505af11580156109cb573d6000803e3d6000fd5b5050600154604080517fbb39cc3c000000000000000000000000000000000000000000000000000000008152600160a060020a03868116602483015260048201839052600f60448301527f506c6174666f726d2077616c6c657400000000000000000000000000000000006064830152915191909216935063bb39cc3c9250608480830192600092919082900301818387803b15801561057657600080fd5b600154600160a060020a0316815600a165627a7a72305820acba47e2bf4c2ff78d64fc423bd314694a8b4781d2892f29137f51f6a770466c0029",
  "deployedBytecode": "0x6080604052600436106100535763ffffffff60e060020a6000350416630255a03b8114610058578063713b563f1461007b57806383197ef0146100ac5780638831e9cf146100c1578063b5f8558c146100e2575b600080fd5b34801561006457600080fd5b50610079600160a060020a03600435166100f7565b005b34801561008757600080fd5b50610090610591565b60408051600160a060020a039092168252519081900360200190f35b3480156100b857600080fd5b506100796105a0565b3480156100cd57600080fd5b50610079600160a060020a0360043516610792565b3480156100ee57600080fd5b50610090610a6a565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061018e5780518252601f19909201916020918201910161016f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022657600080fd5b600054604080517f706c6174666f726d4173736574494400000000000000000000000000000000006020808301919091528251808303600f018152602f909201928390528151600160a060020a039094169363ca446dd993918291908401908083835b602083106102a85780518252601f199092019160209182019101610289565b51815160209384036101000a6000190180199092169116179052604080519290940182900382207f746f6b656e41646472657373000000000000000000000000000000000000000083830152602c8084019190915284518084039091018152604c9092019384905281519195509293508392850191508083835b602083106103415780518252601f199092019160209182019101610322565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152600160a060020a0388166024820152915160448084019550600094509092839003019050818387803b1580156103b557600080fd5b505af11580156103c9573d6000803e3d6000fd5b5050600054604080517f706c6174666f726d546f6b656e000000000000000000000000000000000000006020808301919091528251808303600d018152602d909201928390528151600160a060020a03909416955063ca446dd99450909282918401908083835b6020831061044f5780518252601f199092019160209182019101610430565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152600160a060020a0388166024820152915160448084019550600094509092839003019050818387803b1580156104c357600080fd5b505af11580156104d7573d6000803e3d6000fd5b5050600154604080517fbb39cc3c000000000000000000000000000000000000000000000000000000008152600160a060020a03868116602483015260048201839052600e60448301527f506c6174666f726d20746f6b656e0000000000000000000000000000000000006064830152915191909216935063bb39cc3c9250608480830192600092919082900301818387803b15801561057657600080fd5b505af115801561058a573d6000803e3d6000fd5b5050505050565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106106375780518252601f199092019160209182019101610618565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561069857600080fd5b505af11580156106ac573d6000803e3d6000fd5b505050506040513d60208110156106c257600080fd5b505115156106cf57600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601760a48201527f506c6174666f726d46756e64732064657374726f79656400000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b15801561077657600080fd5b505af115801561078a573d6000803e3d6000fd5b503392505050ff5b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106108295780518252601f19909201916020918201910161080a565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561088a57600080fd5b505af115801561089e573d6000803e3d6000fd5b505050506040513d60208110156108b457600080fd5b505115156108c157600080fd5b600054604080517f706c6174666f726d57616c6c65740000000000000000000000000000000000006020808301919091528251808303600e018152602e909201928390528151600160a060020a039094169363ca446dd993918291908401908083835b602083106109435780518252601f199092019160209182019101610924565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152600160a060020a0388166024820152915160448084019550600094509092839003019050818387803b1580156109b757600080fd5b505af11580156109cb573d6000803e3d6000fd5b5050600154604080517fbb39cc3c000000000000000000000000000000000000000000000000000000008152600160a060020a03868116602483015260048201839052600f60448301527f506c6174666f726d2077616c6c657400000000000000000000000000000000006064830152915191909216935063bb39cc3c9250608480830192600092919082900301818387803b15801561057657600080fd5b600154600160a060020a0316815600a165627a7a72305820acba47e2bf4c2ff78d64fc423bd314694a8b4781d2892f29137f51f6a770466c0029",
  "sourceMap": "95:2023:55:-;;;209:128;8:9:-1;5:2;;;30:1;27;20:12;5:2;209:128:55;;;;;;;;;;;;;;;;;;;272:8;:30;;-1:-1:-1;;;;;272:30:55;;;-1:-1:-1;;;;;;272:30:55;;;;;;;;308:24;;;;;;;;;;;;;;95:2023;;;;;;",
  "deployedSourceMap": "95:2023:55:-;;;;;;;;;-1:-1:-1;;;95:2023:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:534;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;768:534:55;-1:-1:-1;;;;;768:534:55;;;;;;;123:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:24:55;;;;;;;;-1:-1:-1;;;;;123:24:55;;;;;;;;;;;;;;1361:182;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1361:182:55;;;;478:273;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;478:273:55;-1:-1:-1;;;;;478:273:55;;;;;151:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;151:20:55;;;;768:534;2027:8;;2058:37;;;;;;;;;;;;;2084:10;2058:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2058:37:55;;;;;;;;2048:48;;-1:-1:-1;;;;;2027:8:55;;;;:20;;2058:37;;;2048:48;;;;;2058:37;2048:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2048:48:55;;;;;;;;;;;;2027:70;;;-1:-1:-1;;;2027:70:55;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2027:70:55;;;;;;;-1:-1:-1;2027:70:55;-1:-1:-1;2027:70:55;;;;5:2:-1;;;;30:1;27;20:12;5:2;2027:70:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2027:70:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2027:70:55;2019:79;;;;;;;;982:8;;1055:35;;;;;;;;;;;;;;26:21:-1;;;1055:35:55;22:32:-1;6:49;;1055:35:55;;;;;;;;1045:46;;-1:-1:-1;;;;;982:8:55;;;;:19;;1055:35;;;1045:46;;;;;1055:35;1045:46;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1045:46:55;;;;;;;;;;;;1012:80;;;;;;;;;;;;;;;26:21:-1;;;22:32;;;6:49;;1012:80:55;;;;;;;;1002:91;;1012:80;;-1:-1:-1;1012:80:55;;-1:-1:-1;1012:80:55;;1002:91;;;-1:-1:-1;1002:91:55;1012:80;1002:91;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1002:91:55;;;;;;;;;;;;982:127;;;-1:-1:-1;;;982:127:55;;;;;;;-1:-1:-1;;;;;982:127:55;;;;;;;;;;;;;-1:-1:-1;;;;982:127:55;;;;;;;-1:-1:-1;982:127:55;-1:-1:-1;982:127:55;;;;5:2:-1;;;;30:1;27;20:12;5:2;982:127:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;1115:8:55;;1145:33;;;;;;;;;;;;;;26:21:-1;;;1145:33:55;22:32:-1;6:49;;1145:33:55;;;;;;;;1135:44;;-1:-1:-1;;;;;1115:8:55;;;;-1:-1:-1;1115:19:55;;-1:-1:-1;1145:33:55;;;;1135:44;;;;1145:33;1135:44;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1135:44:55;;;;;;;;;;;;1115:80;;;-1:-1:-1;;;1115:80:55;;;;;;;-1:-1:-1;;;;;1115:80:55;;;;;;;;;;;;;-1:-1:-1;;;;1115:80:55;;;;;;;-1:-1:-1;1115:80:55;-1:-1:-1;1115:80:55;;;;5:2:-1;;;;30:1;27;20:12;5:2;1115:80:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;1245:6:55;;:52;;;;;;-1:-1:-1;;;;;1245:52:55;;;;;;;;;;;;;;;;;;;;;;;;;:6;;;;;-1:-1:-1;1245:19:55;;-1:-1:-1;1245:52:55;;;;;:6;;:52;;;;;;;:6;;:52;;;5:2:-1;;;;30:1;27;20:12;5:2;1245:52:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1245:52:55;;;;768:534;:::o;123:24::-;;;-1:-1:-1;;;;;123:24:55;;:::o;1361:182::-;2027:8;;2058:37;;;;;;;;;;;;;2084:10;2058:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2058:37:55;;;;;;;;2048:48;;-1:-1:-1;;;;;2027:8:55;;;;:20;;2058:37;;;2048:48;;;;;2058:37;2048:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2048:48:55;;;;;;;;;;;;2027:70;;;-1:-1:-1;;;2027:70:55;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2027:70:55;;;;;;;-1:-1:-1;2027:70:55;-1:-1:-1;2027:70:55;;;;5:2:-1;;;;30:1;27;20:12;5:2;2027:70:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2027:70:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2027:70:55;2019:79;;;;;;;;1409:6;;:99;;;;;;1463:4;1409:99;;;;;;1470:10;1409:99;;;;1482:21;1409:99;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1409:6:55;;;;:18;;:99;;;;;:6;;:99;;;;;;;;:6;;:99;;;5:2:-1;;;;30:1;27;20:12;5:2;1409:99:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1527:10:55;;-1:-1:-1;;;1514:24:55;478:273;2027:8;;2058:37;;;;;;;;;;;;;2084:10;2058:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2058:37:55;;;;;;;;2048:48;;-1:-1:-1;;;;;2027:8:55;;;;:20;;2058:37;;;2048:48;;;;;2058:37;2048:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2048:48:55;;;;;;;;;;;;2027:70;;;-1:-1:-1;;;2027:70:55;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2027:70:55;;;;;;;-1:-1:-1;2027:70:55;-1:-1:-1;2027:70:55;;;;5:2:-1;;;;30:1;27;20:12;5:2;2027:70:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2027:70:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2027:70:55;2019:79;;;;;;;;558:8;;588:34;;;;;;;;;;;;;;26:21:-1;;;588:34:55;22:32:-1;6:49;;588:34:55;;;;;;;;578:45;;-1:-1:-1;;;;;558:8:55;;;;:19;;588:34;;;578:45;;;;;588:34;578:45;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;578:45:55;;;;;;;;;;;;558:82;;;-1:-1:-1;;;558:82:55;;;;;;;-1:-1:-1;;;;;558:82:55;;;;;;;;;;;;;-1:-1:-1;;;;558:82:55;;;;;;;-1:-1:-1;558:82:55;-1:-1:-1;558:82:55;;;;5:2:-1;;;;30:1;27;20:12;5:2;558:82:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;692:6:55;;:54;;;;;;-1:-1:-1;;;;;692:54:55;;;;;;;;;;;;;;;;;;;;;;;;;:6;;;;;-1:-1:-1;692:19:55;;-1:-1:-1;692:54:55;;;;;:6;;:54;;;;;;;:6;;:54;;;5:2:-1;;;;30:1;27;20:12;151:20:55;;;-1:-1:-1;;;;;151:20:55;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../database/Database.sol';\nimport '../database/Events.sol';\n\ncontract PlatformFunds {\n\n  Database public database;\n  Events public events;\n\n  // @notice initialize database\n  constructor(address _database, address _events)\n  public {\n    database = Database(_database);\n    events = Events(_events);\n  }\n\n  // @notice owners must set the wallet to receive payments here before initiating crowdsale\n  // @dev will overwrite old wallet address\n  function setPlatformWallet(address _walletAddress)\n  external\n  onlyOwner {\n    database.setAddress(keccak256(abi.encodePacked(\"platformWallet\")), _walletAddress);\n    //emit LogPlatformWallet(_walletAddress);\n    events.registration('Platform wallet', _walletAddress);\n  }\n\n  // @notice\n  function setPlatformToken(address _tokenAddress)\n  external\n  onlyOwner {\n    //@dev Set the address for the platform token, using keccak256(abi.encodePacked(\"platformAssetID\")) as the assetID for the platform\n    database.setAddress(keccak256(abi.encodePacked(\"tokenAddress\", keccak256(abi.encodePacked(\"platformAssetID\")))), _tokenAddress);\n    database.setAddress(keccak256(abi.encodePacked(\"platformToken\")), _tokenAddress);\n    //emit LogPlatformToken(_tokenAddress);\n    events.registration('Platform token', _tokenAddress);\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('PlatformFunds destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                                Modifiers                                                                     //\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  // @notice Sender must be a registered owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n\n\n\n\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/PlatformFunds.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/PlatformFunds.sol",
    "exportedSymbols": {
      "PlatformFunds": [
        16392
      ]
    },
    "id": 16393,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16248,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:55"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 16249,
        "nodeType": "ImportDirective",
        "scope": 16393,
        "sourceUnit": 14438,
        "src": "26:34:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 16250,
        "nodeType": "ImportDirective",
        "scope": 16393,
        "sourceUnit": 14899,
        "src": "61:32:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16392,
        "linearizedBaseContracts": [
          16392
        ],
        "name": "PlatformFunds",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16252,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 16392,
            "src": "123:24:55",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$14437",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 16251,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14437,
              "src": "123:8:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$14437",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16254,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 16392,
            "src": "151:20:55",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$14898",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 16253,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14898,
              "src": "151:6:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$14898",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16273,
              "nodeType": "Block",
              "src": "266:71:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16261,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16252,
                      "src": "272:8:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14437",
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
                          "id": 16263,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16256,
                          "src": "292:9:55",
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
                        "id": 16262,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14437,
                        "src": "283:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$14437_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 16264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "283:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14437",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "272:30:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$14437",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 16266,
                  "nodeType": "ExpressionStatement",
                  "src": "272:30:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16267,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16254,
                      "src": "308:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14898",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16269,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16258,
                          "src": "324:7:55",
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
                        "id": 16268,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14898,
                        "src": "317:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$14898_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 16270,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "317:15:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14898",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "308:24:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$14898",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 16272,
                  "nodeType": "ExpressionStatement",
                  "src": "308:24:55"
                }
              ]
            },
            "documentation": null,
            "id": 16274,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16256,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 16274,
                  "src": "221:17:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16255,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:55",
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
                  "id": 16258,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 16274,
                  "src": "240:15:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16257,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:55"
            },
            "scope": 16392,
            "src": "209:128:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16300,
              "nodeType": "Block",
              "src": "552:199:55",
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
                                "id": 16287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "605:16:55",
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
                                "id": 16285,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "588:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16286,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "588:16:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16288,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "588:34:55",
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
                          "id": 16284,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "578:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "578:45:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16290,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16276,
                        "src": "625:14:55",
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
                        "id": 16281,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16252,
                        "src": "558:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14437",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14226,
                      "src": "558:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 16291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "558:82:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16292,
                  "nodeType": "ExpressionStatement",
                  "src": "558:82:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d2077616c6c6574",
                        "id": 16296,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "712:17:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f2e6965467cb05312efc263d86aa5e2537c4836d7dd9583f8d10c3b7fef3e05a",
                          "typeString": "literal_string \"Platform wallet\""
                        },
                        "value": "Platform wallet"
                      },
                      {
                        "argumentTypes": null,
                        "id": 16297,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16276,
                        "src": "731:14:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_f2e6965467cb05312efc263d86aa5e2537c4836d7dd9583f8d10c3b7fef3e05a",
                          "typeString": "literal_string \"Platform wallet\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16293,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16254,
                        "src": "692:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14898",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 16295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "registration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14529,
                      "src": "692:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$returns$__$",
                        "typeString": "function (string memory,address) external"
                      }
                    },
                    "id": 16298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "692:54:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16299,
                  "nodeType": "ExpressionStatement",
                  "src": "692:54:55"
                }
              ]
            },
            "documentation": null,
            "id": 16301,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16279,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16278,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16391,
                  "src": "542:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "542:9:55"
              }
            ],
            "name": "setPlatformWallet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16276,
                  "name": "_walletAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "505:22:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16275,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "504:24:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "552:0:55"
            },
            "scope": 16392,
            "src": "478:273:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16345,
              "nodeType": "Block",
              "src": "840:462:55",
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
                                "hexValue": "746f6b656e41646472657373",
                                "id": 16314,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1029:14:55",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_9ee6ac5167541cd26e2ccac032a8a19ef54a7dfb16e33d0e9a7468c56bc3fd11",
                                  "typeString": "literal_string \"tokenAddress\""
                                },
                                "value": "tokenAddress"
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "706c6174666f726d41737365744944",
                                        "id": 16318,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1072:17:55",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_0725c14af2a3293c5c1b4d05326b8320499c429a2c3d8cb9371b9fd4c6fd0e51",
                                          "typeString": "literal_string \"platformAssetID\""
                                        },
                                        "value": "platformAssetID"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_0725c14af2a3293c5c1b4d05326b8320499c429a2c3d8cb9371b9fd4c6fd0e51",
                                          "typeString": "literal_string \"platformAssetID\""
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 16316,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27895,
                                        "src": "1055:3:55",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 16317,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1055:16:55",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 16319,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1055:35:55",
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
                                  "id": 16315,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27902,
                                  "src": "1045:9:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 16320,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1045:46:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_9ee6ac5167541cd26e2ccac032a8a19ef54a7dfb16e33d0e9a7468c56bc3fd11",
                                  "typeString": "literal_string \"tokenAddress\""
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16312,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "1012:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1012:16:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16321,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1012:80:55",
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
                          "id": 16311,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "1002:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1002:91:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16323,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16303,
                        "src": "1095:13:55",
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
                        "id": 16308,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16252,
                        "src": "982:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14437",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14226,
                      "src": "982:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 16324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "982:127:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16325,
                  "nodeType": "ExpressionStatement",
                  "src": "982:127:55"
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
                                "hexValue": "706c6174666f726d546f6b656e",
                                "id": 16332,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1162:15:55",
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
                                "id": 16330,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "1145:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16331,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1145:16:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16333,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1145:33:55",
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
                          "id": 16329,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "1135:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1135:44:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16335,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16303,
                        "src": "1181:13:55",
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
                        "id": 16326,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16252,
                        "src": "1115:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14437",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14226,
                      "src": "1115:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 16336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1115:80:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16337,
                  "nodeType": "ExpressionStatement",
                  "src": "1115:80:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d20746f6b656e",
                        "id": 16341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1265:16:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5956636c62257568b9463f92eaf10915f4ce2cf06cd1dac42e910a0a0f96832",
                          "typeString": "literal_string \"Platform token\""
                        },
                        "value": "Platform token"
                      },
                      {
                        "argumentTypes": null,
                        "id": 16342,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16303,
                        "src": "1283:13:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5956636c62257568b9463f92eaf10915f4ce2cf06cd1dac42e910a0a0f96832",
                          "typeString": "literal_string \"Platform token\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16338,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16254,
                        "src": "1245:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14898",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 16340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "registration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14529,
                      "src": "1245:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$returns$__$",
                        "typeString": "function (string memory,address) external"
                      }
                    },
                    "id": 16343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1245:52:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16344,
                  "nodeType": "ExpressionStatement",
                  "src": "1245:52:55"
                }
              ]
            },
            "documentation": null,
            "id": 16346,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16306,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16305,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16391,
                  "src": "830:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "830:9:55"
              }
            ],
            "name": "setPlatformToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16303,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 16346,
                  "src": "794:21:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "793:23:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "840:0:55"
            },
            "scope": 16392,
            "src": "768:534:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16372,
              "nodeType": "Block",
              "src": "1403:140:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d46756e64732064657374726f796564",
                        "id": 16354,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1428:25:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3d0fea41025a39aa263d003825ecd25f2c6d3feeb56c3200bb9cbe91b596f48b",
                          "typeString": "literal_string \"PlatformFunds destroyed\""
                        },
                        "value": "PlatformFunds destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 16356,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28083,
                            "src": "1463:4:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                              "typeString": "contract PlatformFunds"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                              "typeString": "contract PlatformFunds"
                            }
                          ],
                          "id": 16355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1455:7:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 16357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1455:13:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16358,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1470:3:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1470:10:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16361,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28083,
                              "src": "1490:4:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                                "typeString": "contract PlatformFunds"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                                "typeString": "contract PlatformFunds"
                              }
                            ],
                            "id": 16360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1482:7:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 16362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1482:13:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 16363,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1482:21:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 16364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1505:2:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_3d0fea41025a39aa263d003825ecd25f2c6d3feeb56c3200bb9cbe91b596f48b",
                          "typeString": "literal_string \"PlatformFunds destroyed\""
                        },
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
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16351,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16254,
                        "src": "1409:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14898",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 16353,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14506,
                      "src": "1409:18:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 16365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1409:99:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16366,
                  "nodeType": "ExpressionStatement",
                  "src": "1409:99:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16368,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1527:3:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1527:10:55",
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
                      "id": 16367,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27916,
                      "src": "1514:12:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 16370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1514:24:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16371,
                  "nodeType": "ExpressionStatement",
                  "src": "1514:24:55"
                }
              ]
            },
            "documentation": null,
            "id": 16373,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16349,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16348,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16391,
                  "src": "1382:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1382:9:55"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16347,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1377:2:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1403:0:55"
            },
            "scope": 16392,
            "src": "1361:182:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16390,
              "nodeType": "Block",
              "src": "2013:97:55",
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
                                    "id": 16381,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2075:7:55",
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
                                      "id": 16382,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27908,
                                      "src": "2084:3:55",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 16383,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2084:10:55",
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
                                    "id": 16379,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27895,
                                    "src": "2058:3:55",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 16380,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2058:16:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 16384,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2058:37:55",
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
                              "id": 16378,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27902,
                              "src": "2048:9:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 16385,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2048:48:55",
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
                            "id": 16376,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16252,
                            "src": "2027:8:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$14437",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 16377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14078,
                          "src": "2027:20:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 16386,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2027:70:55",
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
                      "id": 16375,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "2019:7:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2019:79:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16388,
                  "nodeType": "ExpressionStatement",
                  "src": "2019:79:55"
                },
                {
                  "id": 16389,
                  "nodeType": "PlaceholderStatement",
                  "src": "2104:1:55"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 16391,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2013:0:55"
            },
            "src": "1994:116:55",
            "visibility": "internal"
          }
        ],
        "scope": 16393,
        "src": "95:2023:55"
      }
    ],
    "src": "0:2119:55"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/PlatformFunds.sol",
    "exportedSymbols": {
      "PlatformFunds": [
        16392
      ]
    },
    "id": 16393,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16248,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:55"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 16249,
        "nodeType": "ImportDirective",
        "scope": 16393,
        "sourceUnit": 14438,
        "src": "26:34:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 16250,
        "nodeType": "ImportDirective",
        "scope": 16393,
        "sourceUnit": 14899,
        "src": "61:32:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 16392,
        "linearizedBaseContracts": [
          16392
        ],
        "name": "PlatformFunds",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16252,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 16392,
            "src": "123:24:55",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$14437",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 16251,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14437,
              "src": "123:8:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$14437",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16254,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 16392,
            "src": "151:20:55",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$14898",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 16253,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14898,
              "src": "151:6:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$14898",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16273,
              "nodeType": "Block",
              "src": "266:71:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16261,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16252,
                      "src": "272:8:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14437",
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
                          "id": 16263,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16256,
                          "src": "292:9:55",
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
                        "id": 16262,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14437,
                        "src": "283:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$14437_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 16264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "283:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14437",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "272:30:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$14437",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 16266,
                  "nodeType": "ExpressionStatement",
                  "src": "272:30:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16267,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16254,
                      "src": "308:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14898",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16269,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16258,
                          "src": "324:7:55",
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
                        "id": 16268,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14898,
                        "src": "317:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$14898_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 16270,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "317:15:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14898",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "308:24:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$14898",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 16272,
                  "nodeType": "ExpressionStatement",
                  "src": "308:24:55"
                }
              ]
            },
            "documentation": null,
            "id": 16274,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16259,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16256,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 16274,
                  "src": "221:17:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16255,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:55",
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
                  "id": 16258,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 16274,
                  "src": "240:15:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16257,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16260,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:55"
            },
            "scope": 16392,
            "src": "209:128:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16300,
              "nodeType": "Block",
              "src": "552:199:55",
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
                                "id": 16287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "605:16:55",
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
                                "id": 16285,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "588:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16286,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "588:16:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16288,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "588:34:55",
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
                          "id": 16284,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "578:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "578:45:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16290,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16276,
                        "src": "625:14:55",
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
                        "id": 16281,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16252,
                        "src": "558:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14437",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14226,
                      "src": "558:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 16291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "558:82:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16292,
                  "nodeType": "ExpressionStatement",
                  "src": "558:82:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d2077616c6c6574",
                        "id": 16296,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "712:17:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f2e6965467cb05312efc263d86aa5e2537c4836d7dd9583f8d10c3b7fef3e05a",
                          "typeString": "literal_string \"Platform wallet\""
                        },
                        "value": "Platform wallet"
                      },
                      {
                        "argumentTypes": null,
                        "id": 16297,
                        "name": "_walletAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16276,
                        "src": "731:14:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_f2e6965467cb05312efc263d86aa5e2537c4836d7dd9583f8d10c3b7fef3e05a",
                          "typeString": "literal_string \"Platform wallet\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16293,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16254,
                        "src": "692:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14898",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 16295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "registration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14529,
                      "src": "692:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$returns$__$",
                        "typeString": "function (string memory,address) external"
                      }
                    },
                    "id": 16298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "692:54:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16299,
                  "nodeType": "ExpressionStatement",
                  "src": "692:54:55"
                }
              ]
            },
            "documentation": null,
            "id": 16301,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16279,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16278,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16391,
                  "src": "542:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "542:9:55"
              }
            ],
            "name": "setPlatformWallet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16276,
                  "name": "_walletAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 16301,
                  "src": "505:22:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16275,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "504:24:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "552:0:55"
            },
            "scope": 16392,
            "src": "478:273:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16345,
              "nodeType": "Block",
              "src": "840:462:55",
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
                                "hexValue": "746f6b656e41646472657373",
                                "id": 16314,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1029:14:55",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_9ee6ac5167541cd26e2ccac032a8a19ef54a7dfb16e33d0e9a7468c56bc3fd11",
                                  "typeString": "literal_string \"tokenAddress\""
                                },
                                "value": "tokenAddress"
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "hexValue": "706c6174666f726d41737365744944",
                                        "id": 16318,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1072:17:55",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_stringliteral_0725c14af2a3293c5c1b4d05326b8320499c429a2c3d8cb9371b9fd4c6fd0e51",
                                          "typeString": "literal_string \"platformAssetID\""
                                        },
                                        "value": "platformAssetID"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_0725c14af2a3293c5c1b4d05326b8320499c429a2c3d8cb9371b9fd4c6fd0e51",
                                          "typeString": "literal_string \"platformAssetID\""
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 16316,
                                        "name": "abi",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27895,
                                        "src": "1055:3:55",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_abi",
                                          "typeString": "abi"
                                        }
                                      },
                                      "id": 16317,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "memberName": "encodePacked",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1055:16:55",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                        "typeString": "function () pure returns (bytes memory)"
                                      }
                                    },
                                    "id": 16319,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1055:35:55",
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
                                  "id": 16315,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 27902,
                                  "src": "1045:9:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                    "typeString": "function () pure returns (bytes32)"
                                  }
                                },
                                "id": 16320,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1045:46:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_9ee6ac5167541cd26e2ccac032a8a19ef54a7dfb16e33d0e9a7468c56bc3fd11",
                                  "typeString": "literal_string \"tokenAddress\""
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16312,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "1012:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1012:16:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16321,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1012:80:55",
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
                          "id": 16311,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "1002:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1002:91:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16323,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16303,
                        "src": "1095:13:55",
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
                        "id": 16308,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16252,
                        "src": "982:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14437",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14226,
                      "src": "982:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 16324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "982:127:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16325,
                  "nodeType": "ExpressionStatement",
                  "src": "982:127:55"
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
                                "hexValue": "706c6174666f726d546f6b656e",
                                "id": 16332,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1162:15:55",
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
                                "id": 16330,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 27895,
                                "src": "1145:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16331,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1145:16:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16333,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1145:33:55",
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
                          "id": 16329,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27902,
                          "src": "1135:9:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16334,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1135:44:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 16335,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16303,
                        "src": "1181:13:55",
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
                        "id": 16326,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16252,
                        "src": "1115:8:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14437",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16328,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setAddress",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14226,
                      "src": "1115:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address) external"
                      }
                    },
                    "id": 16336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1115:80:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16337,
                  "nodeType": "ExpressionStatement",
                  "src": "1115:80:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d20746f6b656e",
                        "id": 16341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1265:16:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5956636c62257568b9463f92eaf10915f4ce2cf06cd1dac42e910a0a0f96832",
                          "typeString": "literal_string \"Platform token\""
                        },
                        "value": "Platform token"
                      },
                      {
                        "argumentTypes": null,
                        "id": 16342,
                        "name": "_tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16303,
                        "src": "1283:13:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5956636c62257568b9463f92eaf10915f4ce2cf06cd1dac42e910a0a0f96832",
                          "typeString": "literal_string \"Platform token\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16338,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16254,
                        "src": "1245:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14898",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 16340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "registration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14529,
                      "src": "1245:19:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$returns$__$",
                        "typeString": "function (string memory,address) external"
                      }
                    },
                    "id": 16343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1245:52:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16344,
                  "nodeType": "ExpressionStatement",
                  "src": "1245:52:55"
                }
              ]
            },
            "documentation": null,
            "id": 16346,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16306,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16305,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16391,
                  "src": "830:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "830:9:55"
              }
            ],
            "name": "setPlatformToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16303,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 16346,
                  "src": "794:21:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "793:23:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "840:0:55"
            },
            "scope": 16392,
            "src": "768:534:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16372,
              "nodeType": "Block",
              "src": "1403:140:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d46756e64732064657374726f796564",
                        "id": 16354,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1428:25:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3d0fea41025a39aa263d003825ecd25f2c6d3feeb56c3200bb9cbe91b596f48b",
                          "typeString": "literal_string \"PlatformFunds destroyed\""
                        },
                        "value": "PlatformFunds destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 16356,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28083,
                            "src": "1463:4:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                              "typeString": "contract PlatformFunds"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                              "typeString": "contract PlatformFunds"
                            }
                          ],
                          "id": 16355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1455:7:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 16357,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1455:13:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16358,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1470:3:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16359,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1470:10:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 16361,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28083,
                              "src": "1490:4:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                                "typeString": "contract PlatformFunds"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_PlatformFunds_$16392",
                                "typeString": "contract PlatformFunds"
                              }
                            ],
                            "id": 16360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1482:7:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 16362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1482:13:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 16363,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1482:21:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 16364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1505:2:55",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_3d0fea41025a39aa263d003825ecd25f2c6d3feeb56c3200bb9cbe91b596f48b",
                          "typeString": "literal_string \"PlatformFunds destroyed\""
                        },
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
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16351,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16254,
                        "src": "1409:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14898",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 16353,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14506,
                      "src": "1409:18:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 16365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1409:99:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16366,
                  "nodeType": "ExpressionStatement",
                  "src": "1409:99:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16368,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 27908,
                          "src": "1527:3:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 16369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1527:10:55",
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
                      "id": 16367,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27916,
                      "src": "1514:12:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 16370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1514:24:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16371,
                  "nodeType": "ExpressionStatement",
                  "src": "1514:24:55"
                }
              ]
            },
            "documentation": null,
            "id": 16373,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 16349,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 16348,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 16391,
                  "src": "1382:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1382:9:55"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16347,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1377:2:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 16350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1403:0:55"
            },
            "scope": 16392,
            "src": "1361:182:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16390,
              "nodeType": "Block",
              "src": "2013:97:55",
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
                                    "id": 16381,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2075:7:55",
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
                                      "id": 16382,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 27908,
                                      "src": "2084:3:55",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 16383,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2084:10:55",
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
                                    "id": 16379,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 27895,
                                    "src": "2058:3:55",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 16380,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2058:16:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 16384,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2058:37:55",
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
                              "id": 16378,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 27902,
                              "src": "2048:9:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 16385,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2048:48:55",
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
                            "id": 16376,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16252,
                            "src": "2027:8:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$14437",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 16377,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14078,
                          "src": "2027:20:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 16386,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2027:70:55",
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
                      "id": 16375,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        27911,
                        27912
                      ],
                      "referencedDeclaration": 27911,
                      "src": "2019:7:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2019:79:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16388,
                  "nodeType": "ExpressionStatement",
                  "src": "2019:79:55"
                },
                {
                  "id": 16389,
                  "nodeType": "PlaceholderStatement",
                  "src": "2104:1:55"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 16391,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 16374,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2013:0:55"
            },
            "src": "1994:116:55",
            "visibility": "internal"
          }
        ],
        "scope": 16393,
        "src": "95:2023:55"
      }
    ],
    "src": "0:2119:55"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-05T20:40:37.308Z"
}