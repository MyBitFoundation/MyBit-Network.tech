"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Pausible = exports.Pausible = 
{
  "contractName": "Pausible",
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
          "name": "_contract",
          "type": "address"
        }
      ],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_contract",
          "type": "address"
        }
      ],
      "name": "unpause",
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
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061098a83398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560018054939092169216919091179055610923806100676000396000f3006080604052600436106100535763ffffffff60e060020a60003504166357b001f98114610058578063713b563f1461007b57806376a67a51146100ac57806383197ef0146100cd578063b5f8558c146100e2575b600080fd5b34801561006457600080fd5b50610079600160a060020a03600435166100f7565b005b34801561008757600080fd5b506100906103f9565b60408051600160a060020a039092168252519081900360200190f35b3480156100b857600080fd5b50610079600160a060020a0360043516610408565b3480156100d957600080fd5b506100796106f6565b3480156100ee57600080fd5b506100906108e8565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061018e5780518252601f19909201916020918201910161016f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022657600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a909301938490528251941693632c62ff2d93918291908401908083835b602083106102be5780518252601f19909201916020918201910161029f565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152601160a48301527f436f6e747261637420756e70617573656400000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b5050505050565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061049f5780518252601f199092019160209182019101610480565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561050057600080fd5b505af1158015610514573d6000803e3d6000fd5b505050506040513d602081101561052a57600080fd5b5051151561053757600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a90930193849052825194169363abfdcced93918291908401908083835b602083106105cf5780518252601f1990920191602091820191016105b0565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b15801561063b57600080fd5b505af115801561064f573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152600f60a48301527f436f6e747261637420706175736564000000000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061078d5780518252601f19909201916020918201910161076e565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156107ee57600080fd5b505af1158015610802573d6000803e3d6000fd5b505050506040513d602081101561081857600080fd5b5051151561082557600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601260a48201527f5061757369626c652064657374726f796564000000000000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b503392505050ff5b600154600160a060020a0316815600a165627a7a72305820c158acb5ee33ee32e6fe693d383e855896e7a1ef2b06f239c6ed62dc9b1f88330029",
  "deployedBytecode": "0x6080604052600436106100535763ffffffff60e060020a60003504166357b001f98114610058578063713b563f1461007b57806376a67a51146100ac57806383197ef0146100cd578063b5f8558c146100e2575b600080fd5b34801561006457600080fd5b50610079600160a060020a03600435166100f7565b005b34801561008757600080fd5b506100906103f9565b60408051600160a060020a039092168252519081900360200190f35b3480156100b857600080fd5b50610079600160a060020a0360043516610408565b3480156100d957600080fd5b506100796106f6565b3480156100ee57600080fd5b506100906108e8565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061018e5780518252601f19909201916020918201910161016f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022657600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a909301938490528251941693632c62ff2d93918291908401908083835b602083106102be5780518252601f19909201916020918201910161029f565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152601160a48301527f436f6e747261637420756e70617573656400000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b5050505050565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061049f5780518252601f199092019160209182019101610480565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561050057600080fd5b505af1158015610514573d6000803e3d6000fd5b505050506040513d602081101561052a57600080fd5b5051151561053757600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a90930193849052825194169363abfdcced93918291908401908083835b602083106105cf5780518252601f1990920191602091820191016105b0565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b15801561063b57600080fd5b505af115801561064f573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152600f60a48301527f436f6e747261637420706175736564000000000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061078d5780518252601f19909201916020918201910161076e565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156107ee57600080fd5b505af1158015610802573d6000803e3d6000fd5b505050506040513d602081101561081857600080fd5b5051151561082557600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601260a48201527f5061757369626c652064657374726f796564000000000000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b503392505050ff5b600154600160a060020a0316815600a165627a7a72305820c158acb5ee33ee32e6fe693d383e855896e7a1ef2b06f239c6ed62dc9b1f88330029",
  "sourceMap": "283:1617:75:-;;;414:128;8:9:-1;5:2;;;30:1;27;20:12;5:2;414:128:75;;;;;;;;;;;;;;;;;;;477:8;:30;;-1:-1:-1;;;;;477:30:75;;;-1:-1:-1;;;;;;477:30:75;;;;;;;;513:24;;;;;;;;;;;;;;283:1617;;;;;;",
  "deployedSourceMap": "283:1617:75:-;;;;;;;;;-1:-1:-1;;;283:1617:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1093:263;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1093:263:75;-1:-1:-1;;;;;1093:263:75;;;;;;;306:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;306:24:75;;;;;;;;-1:-1:-1;;;;;306:24:75;;;;;;;;;;;;;;686:260;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;686:260:75;-1:-1:-1;;;;;686:260:75;;;;;1415:177;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1415:177:75;;;;334:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;334:20:75;;;;1093:263;1679:8;;1710:37;;;;;;;;;;;;;1736:10;1710:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1710:37:75;;;;;;;;1700:48;;-1:-1:-1;;;;;1679:8:75;;;;:20;;1710:37;;;1700:48;;;;;1710:37;1700:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1700:48:75;;;;;;;;;;;;1679:70;;;-1:-1:-1;;;1679:70:75;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1679:70:75;;;;;;;-1:-1:-1;1679:70:75;-1:-1:-1;1679:70:75;;;;5:2:-1;;;;30:1;27;20:12;5:2;1679:70:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1679:70:75;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1679:70:75;1671:79;;;;;;;;1156:8;;1186:37;;;;;;;;;;;;-1:-1:-1;;;;;1186:37:75;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;1186:37:75;;;;;;;;1176:48;;1156:8;;;:19;;1186:37;;;1176:48;;;;;1186:37;1176:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1176:48:75;;;;;;;;;;;;1156:69;;;-1:-1:-1;;;1156:69:75;;;;;;;;;;;;;;-1:-1:-1;;;;1156:69:75;;;;;;;-1:-1:-1;1156:69:75;-1:-1:-1;1156:69:75;;;;5:2:-1;;;;30:1;27;20:12;5:2;1156:69:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;1231:6:75;;:73;;;;;;1271:10;1231:73;;;;1291:4;1231:73;;;;:6;:73;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1231:6:75;;;;-1:-1:-1;1231:18:75;;-1:-1:-1;1231:73:75;;;;;;;;;;;:6;;:73;;;5:2:-1;;;;30:1;27;20:12;5:2;1231:73:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1231:73:75;;;;1093:263;:::o;306:24::-;;;-1:-1:-1;;;;;306:24:75;;:::o;686:260::-;1679:8;;1710:37;;;;;;;;;;;;;1736:10;1710:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1710:37:75;;;;;;;;1700:48;;-1:-1:-1;;;;;1679:8:75;;;;:20;;1710:37;;;1700:48;;;;;1710:37;1700:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1700:48:75;;;;;;;;;;;;1679:70;;;-1:-1:-1;;;1679:70:75;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1679:70:75;;;;;;;-1:-1:-1;1679:70:75;-1:-1:-1;1679:70:75;;;;5:2:-1;;;;30:1;27;20:12;5:2;1679:70:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1679:70:75;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1679:70:75;1671:79;;;;;;;;747:8;;774:37;;;;;;;;;;;;-1:-1:-1;;;;;774:37:75;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;774:37:75;;;;;;;;764:48;;747:8;;;:16;;774:37;;;764:48;;;;;774:37;764:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;764:48:75;;;;;;;;;;;;747:72;;;-1:-1:-1;;;747:72:75;;;;;;;274:1:-1;747:72:75;;;;;;;;;;;-1:-1:-1;;;;747:72:75;;;;;;;-1:-1:-1;747:72:75;-1:-1:-1;747:72:75;;;;5:2:-1;;;;30:1;27;20:12;5:2;747:72:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;825:6:75;;:71;;;;;;863:10;825:71;;;;883:4;825:71;;;;:6;:71;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;825:6:75;;;;-1:-1:-1;825:18:75;;-1:-1:-1;825:71:75;;;;;;;;;;;:6;;:71;;;5:2:-1;;;;30:1;27;20:12;1415:177:75;1679:8;;1710:37;;;;;;;;;;;;;1736:10;1710:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1710:37:75;;;;;;;;1700:48;;-1:-1:-1;;;;;1679:8:75;;;;:20;;1710:37;;;1700:48;;;;;1710:37;1700:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1700:48:75;;;;;;;;;;;;1679:70;;;-1:-1:-1;;;1679:70:75;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1679:70:75;;;;;;;-1:-1:-1;1679:70:75;-1:-1:-1;1679:70:75;;;;5:2:-1;;;;30:1;27;20:12;5:2;1679:70:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1679:70:75;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1679:70:75;1671:79;;;;;;;;1463:6;;:94;;;;;;1512:4;1463:94;;;;;;1519:10;1463:94;;;;1531:21;1463:94;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1463:6:75;;;;:18;;:94;;;;;:6;;:94;;;;;;;;:6;;:94;;;5:2:-1;;;;30:1;27;20:12;5:2;1463:94:75;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1576:10:75;;-1:-1:-1;;;1563:24:75;334:20;;;-1:-1:-1;;;;;334:20:75;;:::o",
  "source": "pragma solidity ^0.4.24;\n\n\nimport '../database/Database.sol';\nimport '../database/Events.sol';\n\n// @title A contract which allows for the freezing of functionality within the platform.\n// @dev only valid with a single owned ownership model\n// @author Kyle Dewhurst, MyBit Foundation\ncontract Pausible {\n\n  Database public database;\n  Events public events;\n\n  // @notice constructor: initialize database instance\n  constructor(address _database, address _events)\n  public {\n    database = Database(_database);\n    events = Events(_events);\n  }\n\n  // @notice This will pause all critical activity for the supplied address\n  // @param: The address of the contract which is to be paused\\\n  function pause(address _contract)\n  onlyOwner\n  public {\n    database.setBool(keccak256(abi.encodePacked(\"paused\", _contract)), true);\n    events.transaction('Contract paused', msg.sender, address(this), 0, '');\n    //emit LogPaused(_contract, msg.sender);\n  }\n\n  // @notice This will unpause all critical activity for the supplied address\n  // @param: The address of the contract which is to be unpaused\n  function unpause(address _contract)\n  onlyOwner\n  public {\n    database.deleteBool(keccak256(abi.encodePacked(\"paused\", _contract)));\n    events.transaction('Contract unpaused', msg.sender, address(this), 0, '');\n    //emit LogUnpaused(_contract, msg.sender);\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('Pausible destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  // @notice reverts if caller is not the owner\n  modifier onlyOwner() {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n  /*\n  event LogPaused(address indexed _contract, address _owner);\n  event LogUnpaused(address indexed _contract, address _owner);\n  */\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/Pausible.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/Pausible.sol",
    "exportedSymbols": {
      "Pausible": [
        20046
      ]
    },
    "id": 20047,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 19907,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:75"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 19908,
        "nodeType": "ImportDirective",
        "scope": 20047,
        "sourceUnit": 14441,
        "src": "27:34:75",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 19909,
        "nodeType": "ImportDirective",
        "scope": 20047,
        "sourceUnit": 14902,
        "src": "62:32:75",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 20046,
        "linearizedBaseContracts": [
          20046
        ],
        "name": "Pausible",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 19911,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 20046,
            "src": "306:24:75",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$14440",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 19910,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14440,
              "src": "306:8:75",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$14440",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19913,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 20046,
            "src": "334:20:75",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$14901",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 19912,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14901,
              "src": "334:6:75",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$14901",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 19932,
              "nodeType": "Block",
              "src": "471:71:75",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 19920,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19911,
                      "src": "477:8:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
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
                          "id": 19922,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19915,
                          "src": "497:9:75",
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
                        "id": 19921,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14440,
                        "src": "488:8:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$14440_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 19923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "488:19:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "477:30:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$14440",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 19925,
                  "nodeType": "ExpressionStatement",
                  "src": "477:30:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 19926,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19913,
                      "src": "513:6:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
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
                          "id": 19928,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19917,
                          "src": "529:7:75",
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
                        "id": 19927,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14901,
                        "src": "522:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$14901_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 19929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "522:15:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "513:24:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$14901",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 19931,
                  "nodeType": "ExpressionStatement",
                  "src": "513:24:75"
                }
              ]
            },
            "documentation": null,
            "id": 19933,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19915,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 19933,
                  "src": "426:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19914,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:75",
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
                  "id": 19917,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 19933,
                  "src": "445:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "425:36:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 19919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "471:0:75"
            },
            "scope": 20046,
            "src": "414:128:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 19966,
              "nodeType": "Block",
              "src": "741:205:75",
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
                                "hexValue": "706175736564",
                                "id": 19946,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "791:8:75",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 19947,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19935,
                                "src": "801:9:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 19944,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "774:3:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19945,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "774:16:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "774:37:75",
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
                          "id": 19943,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "764:9:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 19949,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "764:48:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 19950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "814:4:75",
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
                        "id": 19940,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19911,
                        "src": "747:8:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14440",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 19942,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14309,
                      "src": "747:16:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 19951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "747:72:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19952,
                  "nodeType": "ExpressionStatement",
                  "src": "747:72:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420706175736564",
                        "id": 19956,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "844:17:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
                        },
                        "value": "Contract paused"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 19957,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "863:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 19958,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "863:10:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 19960,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28249,
                            "src": "883:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 19959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "875:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 19961,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "875:13:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 19962,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "890:1:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 19963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "893:2:75",
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
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
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
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 19953,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19913,
                        "src": "825:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14901",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 19955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14509,
                      "src": "825:18:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 19964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:71:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19965,
                  "nodeType": "ExpressionStatement",
                  "src": "825:71:75"
                }
              ]
            },
            "documentation": null,
            "id": 19967,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 19938,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 19937,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 20045,
                  "src": "722:9:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "722:9:75"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19935,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 19967,
                  "src": "701:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "701:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "700:19:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 19939,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "741:0:75"
            },
            "scope": 20046,
            "src": "686:260:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 19999,
              "nodeType": "Block",
              "src": "1150:206:75",
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
                                "hexValue": "706175736564",
                                "id": 19980,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1203:8:75",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 19981,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19969,
                                "src": "1213:9:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 19978,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "1186:3:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19979,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1186:16:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19982,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1186:37:75",
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
                          "id": 19977,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "1176:9:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 19983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1176:48:75",
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
                        "id": 19974,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19911,
                        "src": "1156:8:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14440",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 19976,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14403,
                      "src": "1156:19:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 19984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1156:69:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19985,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:69:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420756e706175736564",
                        "id": 19989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1250:19:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b4015086b3cd35ea115df5f4ae6f15c93dfead1dcbb94f6dd9768bf0c8d889ca",
                          "typeString": "literal_string \"Contract unpaused\""
                        },
                        "value": "Contract unpaused"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 19990,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1271:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 19991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1271:10:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 19993,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28249,
                            "src": "1291:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 19992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1283:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 19994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1283:13:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 19995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1298:1:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 19996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1301:2:75",
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
                          "typeIdentifier": "t_stringliteral_b4015086b3cd35ea115df5f4ae6f15c93dfead1dcbb94f6dd9768bf0c8d889ca",
                          "typeString": "literal_string \"Contract unpaused\""
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
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 19986,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19913,
                        "src": "1231:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14901",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 19988,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14509,
                      "src": "1231:18:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 19997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1231:73:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19998,
                  "nodeType": "ExpressionStatement",
                  "src": "1231:73:75"
                }
              ]
            },
            "documentation": null,
            "id": 20000,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 19972,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 19971,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 20045,
                  "src": "1131:9:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1131:9:75"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19969,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 20000,
                  "src": "1110:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1109:19:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 19973,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1150:0:75"
            },
            "scope": 20046,
            "src": "1093:263:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20026,
              "nodeType": "Block",
              "src": "1457:135:75",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "5061757369626c652064657374726f796564",
                        "id": 20008,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1482:20:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_35e899248a435a7472b1b8c42af0d4098655bc2a04754f7cb95e630a4d7ebe0b",
                          "typeString": "literal_string \"Pausible destroyed\""
                        },
                        "value": "Pausible destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20010,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28249,
                            "src": "1512:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 20009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1504:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 20011,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1504:13:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 20012,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1519:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 20013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1519:10:75",
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
                              "id": 20015,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28249,
                              "src": "1539:4:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausible_$20046",
                                "typeString": "contract Pausible"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Pausible_$20046",
                                "typeString": "contract Pausible"
                              }
                            ],
                            "id": 20014,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1531:7:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 20016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1531:13:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 20017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1531:21:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 20018,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1554:2:75",
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
                          "typeIdentifier": "t_stringliteral_35e899248a435a7472b1b8c42af0d4098655bc2a04754f7cb95e630a4d7ebe0b",
                          "typeString": "literal_string \"Pausible destroyed\""
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
                        "id": 20005,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19913,
                        "src": "1463:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14901",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 20007,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14509,
                      "src": "1463:18:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 20019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1463:94:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20020,
                  "nodeType": "ExpressionStatement",
                  "src": "1463:94:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 20022,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1576:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 20023,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1576:10:75",
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
                      "id": 20021,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28046,
                      "src": "1563:12:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 20024,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1563:24:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20025,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:24:75"
                }
              ]
            },
            "documentation": null,
            "id": 20027,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 20003,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20002,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 20045,
                  "src": "1436:9:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1436:9:75"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1431:2:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 20004,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:75"
            },
            "scope": 20046,
            "src": "1415:177:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 20044,
              "nodeType": "Block",
              "src": "1665:97:75",
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
                                    "id": 20035,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1727:7:75",
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
                                      "id": 20036,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28038,
                                      "src": "1736:3:75",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 20037,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1736:10:75",
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
                                    "id": 20033,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28025,
                                    "src": "1710:3:75",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 20034,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1710:16:75",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 20038,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1710:37:75",
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
                              "id": 20032,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28032,
                              "src": "1700:9:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 20039,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1700:48:75",
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
                            "id": 20030,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19911,
                            "src": "1679:8:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$14440",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 20031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14081,
                          "src": "1679:20:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 20040,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1679:70:75",
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
                      "id": 20029,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1671:7:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20041,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1671:79:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20042,
                  "nodeType": "ExpressionStatement",
                  "src": "1671:79:75"
                },
                {
                  "id": 20043,
                  "nodeType": "PlaceholderStatement",
                  "src": "1756:1:75"
                }
              ]
            },
            "documentation": null,
            "id": 20045,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 20028,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1662:2:75"
            },
            "src": "1644:118:75",
            "visibility": "internal"
          }
        ],
        "scope": 20047,
        "src": "283:1617:75"
      }
    ],
    "src": "0:1901:75"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/Pausible.sol",
    "exportedSymbols": {
      "Pausible": [
        20046
      ]
    },
    "id": 20047,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 19907,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:75"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 19908,
        "nodeType": "ImportDirective",
        "scope": 20047,
        "sourceUnit": 14441,
        "src": "27:34:75",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 19909,
        "nodeType": "ImportDirective",
        "scope": 20047,
        "sourceUnit": 14902,
        "src": "62:32:75",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 20046,
        "linearizedBaseContracts": [
          20046
        ],
        "name": "Pausible",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 19911,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 20046,
            "src": "306:24:75",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$14440",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 19910,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14440,
              "src": "306:8:75",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$14440",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 19913,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 20046,
            "src": "334:20:75",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$14901",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 19912,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14901,
              "src": "334:6:75",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$14901",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 19932,
              "nodeType": "Block",
              "src": "471:71:75",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 19920,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19911,
                      "src": "477:8:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
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
                          "id": 19922,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19915,
                          "src": "497:9:75",
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
                        "id": 19921,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14440,
                        "src": "488:8:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$14440_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 19923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "488:19:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$14440",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "477:30:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$14440",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 19925,
                  "nodeType": "ExpressionStatement",
                  "src": "477:30:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 19930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 19926,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19913,
                      "src": "513:6:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
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
                          "id": 19928,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19917,
                          "src": "529:7:75",
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
                        "id": 19927,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14901,
                        "src": "522:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$14901_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 19929,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "522:15:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$14901",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "513:24:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$14901",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 19931,
                  "nodeType": "ExpressionStatement",
                  "src": "513:24:75"
                }
              ]
            },
            "documentation": null,
            "id": 19933,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19915,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 19933,
                  "src": "426:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19914,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:75",
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
                  "id": 19917,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 19933,
                  "src": "445:15:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "425:36:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 19919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "471:0:75"
            },
            "scope": 20046,
            "src": "414:128:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 19966,
              "nodeType": "Block",
              "src": "741:205:75",
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
                                "hexValue": "706175736564",
                                "id": 19946,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "791:8:75",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 19947,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19935,
                                "src": "801:9:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 19944,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "774:3:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19945,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "774:16:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "774:37:75",
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
                          "id": 19943,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "764:9:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 19949,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "764:48:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 19950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "814:4:75",
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
                        "id": 19940,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19911,
                        "src": "747:8:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14440",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 19942,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14309,
                      "src": "747:16:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 19951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "747:72:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19952,
                  "nodeType": "ExpressionStatement",
                  "src": "747:72:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420706175736564",
                        "id": 19956,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "844:17:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
                        },
                        "value": "Contract paused"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 19957,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "863:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 19958,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "863:10:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 19960,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28249,
                            "src": "883:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 19959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "875:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 19961,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "875:13:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 19962,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "890:1:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 19963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "893:2:75",
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
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
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
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 19953,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19913,
                        "src": "825:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14901",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 19955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14509,
                      "src": "825:18:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 19964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:71:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19965,
                  "nodeType": "ExpressionStatement",
                  "src": "825:71:75"
                }
              ]
            },
            "documentation": null,
            "id": 19967,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 19938,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 19937,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 20045,
                  "src": "722:9:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "722:9:75"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19935,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 19967,
                  "src": "701:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "701:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "700:19:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 19939,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "741:0:75"
            },
            "scope": 20046,
            "src": "686:260:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 19999,
              "nodeType": "Block",
              "src": "1150:206:75",
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
                                "hexValue": "706175736564",
                                "id": 19980,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1203:8:75",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 19981,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 19969,
                                "src": "1213:9:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 19978,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "1186:3:75",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 19979,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1186:16:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 19982,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1186:37:75",
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
                          "id": 19977,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "1176:9:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 19983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1176:48:75",
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
                        "id": 19974,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19911,
                        "src": "1156:8:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$14440",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 19976,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14403,
                      "src": "1156:19:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 19984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1156:69:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19985,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:69:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420756e706175736564",
                        "id": 19989,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1250:19:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b4015086b3cd35ea115df5f4ae6f15c93dfead1dcbb94f6dd9768bf0c8d889ca",
                          "typeString": "literal_string \"Contract unpaused\""
                        },
                        "value": "Contract unpaused"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 19990,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1271:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 19991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1271:10:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 19993,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28249,
                            "src": "1291:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 19992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1283:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 19994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1283:13:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 19995,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1298:1:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 19996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1301:2:75",
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
                          "typeIdentifier": "t_stringliteral_b4015086b3cd35ea115df5f4ae6f15c93dfead1dcbb94f6dd9768bf0c8d889ca",
                          "typeString": "literal_string \"Contract unpaused\""
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
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 19986,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19913,
                        "src": "1231:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14901",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 19988,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14509,
                      "src": "1231:18:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 19997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1231:73:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 19998,
                  "nodeType": "ExpressionStatement",
                  "src": "1231:73:75"
                }
              ]
            },
            "documentation": null,
            "id": 20000,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 19972,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 19971,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 20045,
                  "src": "1131:9:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1131:9:75"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19969,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 20000,
                  "src": "1110:17:75",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 19968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:7:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1109:19:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 19973,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1150:0:75"
            },
            "scope": 20046,
            "src": "1093:263:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20026,
              "nodeType": "Block",
              "src": "1457:135:75",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "5061757369626c652064657374726f796564",
                        "id": 20008,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1482:20:75",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_35e899248a435a7472b1b8c42af0d4098655bc2a04754f7cb95e630a4d7ebe0b",
                          "typeString": "literal_string \"Pausible destroyed\""
                        },
                        "value": "Pausible destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 20010,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28249,
                            "src": "1512:4:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$20046",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 20009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1504:7:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 20011,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1504:13:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 20012,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1519:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 20013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1519:10:75",
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
                              "id": 20015,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28249,
                              "src": "1539:4:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausible_$20046",
                                "typeString": "contract Pausible"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Pausible_$20046",
                                "typeString": "contract Pausible"
                              }
                            ],
                            "id": 20014,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1531:7:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 20016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1531:13:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 20017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1531:21:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 20018,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1554:2:75",
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
                          "typeIdentifier": "t_stringliteral_35e899248a435a7472b1b8c42af0d4098655bc2a04754f7cb95e630a4d7ebe0b",
                          "typeString": "literal_string \"Pausible destroyed\""
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
                        "id": 20005,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19913,
                        "src": "1463:6:75",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$14901",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 20007,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14509,
                      "src": "1463:18:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 20019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1463:94:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20020,
                  "nodeType": "ExpressionStatement",
                  "src": "1463:94:75"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 20022,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "1576:3:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 20023,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1576:10:75",
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
                      "id": 20021,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28046,
                      "src": "1563:12:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 20024,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1563:24:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20025,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:24:75"
                }
              ]
            },
            "documentation": null,
            "id": 20027,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 20003,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20002,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 20045,
                  "src": "1436:9:75",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1436:9:75"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20001,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1431:2:75"
            },
            "payable": false,
            "returnParameters": {
              "id": 20004,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:75"
            },
            "scope": 20046,
            "src": "1415:177:75",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 20044,
              "nodeType": "Block",
              "src": "1665:97:75",
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
                                    "id": 20035,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1727:7:75",
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
                                      "id": 20036,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28038,
                                      "src": "1736:3:75",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 20037,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1736:10:75",
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
                                    "id": 20033,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28025,
                                    "src": "1710:3:75",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 20034,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1710:16:75",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 20038,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1710:37:75",
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
                              "id": 20032,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28032,
                              "src": "1700:9:75",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 20039,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1700:48:75",
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
                            "id": 20030,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19911,
                            "src": "1679:8:75",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$14440",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 20031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 14081,
                          "src": "1679:20:75",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 20040,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1679:70:75",
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
                      "id": 20029,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1671:7:75",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20041,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1671:79:75",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20042,
                  "nodeType": "ExpressionStatement",
                  "src": "1671:79:75"
                },
                {
                  "id": 20043,
                  "nodeType": "PlaceholderStatement",
                  "src": "1756:1:75"
                }
              ]
            },
            "documentation": null,
            "id": 20045,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 20028,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1662:2:75"
            },
            "src": "1644:118:75",
            "visibility": "internal"
          }
        ],
        "scope": 20047,
        "src": "283:1617:75"
      }
    ],
    "src": "0:1901:75"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.783Z"
}