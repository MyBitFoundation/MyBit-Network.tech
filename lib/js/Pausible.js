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
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061098a83398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560018054939092169216919091179055610923806100676000396000f3006080604052600436106100535763ffffffff60e060020a60003504166357b001f98114610058578063713b563f1461007b57806376a67a51146100ac57806383197ef0146100cd578063b5f8558c146100e2575b600080fd5b34801561006457600080fd5b50610079600160a060020a03600435166100f7565b005b34801561008757600080fd5b506100906103f9565b60408051600160a060020a039092168252519081900360200190f35b3480156100b857600080fd5b50610079600160a060020a0360043516610408565b3480156100d957600080fd5b506100796106f6565b3480156100ee57600080fd5b506100906108e8565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061018e5780518252601f19909201916020918201910161016f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022657600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a909301938490528251941693632c62ff2d93918291908401908083835b602083106102be5780518252601f19909201916020918201910161029f565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152601160a48301527f436f6e747261637420756e70617573656400000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b5050505050565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061049f5780518252601f199092019160209182019101610480565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561050057600080fd5b505af1158015610514573d6000803e3d6000fd5b505050506040513d602081101561052a57600080fd5b5051151561053757600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a90930193849052825194169363abfdcced93918291908401908083835b602083106105cf5780518252601f1990920191602091820191016105b0565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b15801561063b57600080fd5b505af115801561064f573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152600f60a48301527f436f6e747261637420706175736564000000000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061078d5780518252601f19909201916020918201910161076e565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156107ee57600080fd5b505af1158015610802573d6000803e3d6000fd5b505050506040513d602081101561081857600080fd5b5051151561082557600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601260a48201527f5061757369626c652064657374726f796564000000000000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b503392505050ff5b600154600160a060020a0316815600a165627a7a723058208528bd2349dc78c4b93331dd016f902c2b6b5894bd245155bd5566eb1003b8bf0029",
  "deployedBytecode": "0x6080604052600436106100535763ffffffff60e060020a60003504166357b001f98114610058578063713b563f1461007b57806376a67a51146100ac57806383197ef0146100cd578063b5f8558c146100e2575b600080fd5b34801561006457600080fd5b50610079600160a060020a03600435166100f7565b005b34801561008757600080fd5b506100906103f9565b60408051600160a060020a039092168252519081900360200190f35b3480156100b857600080fd5b50610079600160a060020a0360043516610408565b3480156100d957600080fd5b506100796106f6565b3480156100ee57600080fd5b506100906108e8565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061018e5780518252601f19909201916020918201910161016f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505050506040513d602081101561021957600080fd5b5051151561022657600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a909301938490528251941693632c62ff2d93918291908401908083835b602083106102be5780518252601f19909201916020918201910161029f565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152601160a48301527f436f6e747261637420756e70617573656400000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b505af11580156103f2573d6000803e3d6000fd5b5050505050565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061049f5780518252601f199092019160209182019101610480565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561050057600080fd5b505af1158015610514573d6000803e3d6000fd5b505050506040513d602081101561052a57600080fd5b5051151561053757600080fd5b600054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152600160a060020a038581166c010000000000000000000000000260268401528351808403601a018152603a90930193849052825194169363abfdcced93918291908401908083835b602083106105cf5780518252601f1990920191602091820191016105b0565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b15801561063b57600080fd5b505af115801561064f573d6000803e3d6000fd5b5050600154604080517f68b9627000000000000000000000000000000000000000000000000000000000815233602482015230604482015260006064820181905260a06004830152600f60a48301527f436f6e747261637420706175736564000000000000000000000000000000000060c48301529151600160a060020a0390931694506368b96270935060e4808201939182900301818387803b1580156103de57600080fd5b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061078d5780518252601f19909201916020918201910161076e565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156107ee57600080fd5b505af1158015610802573d6000803e3d6000fd5b505050506040513d602081101561081857600080fd5b5051151561082557600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601260a48201527f5061757369626c652064657374726f796564000000000000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b503392505050ff5b600154600160a060020a0316815600a165627a7a723058208528bd2349dc78c4b93331dd016f902c2b6b5894bd245155bd5566eb1003b8bf0029",
  "sourceMap": "283:1617:78:-;;;414:128;8:9:-1;5:2;;;30:1;27;20:12;5:2;414:128:78;;;;;;;;;;;;;;;;;;;477:8;:30;;-1:-1:-1;;;;;477:30:78;;;-1:-1:-1;;;;;;477:30:78;;;;;;;;513:24;;;;;;;;;;;;;;283:1617;;;;;;",
  "deployedSourceMap": "283:1617:78:-;;;;;;;;;-1:-1:-1;;;283:1617:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1093:263;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1093:263:78;-1:-1:-1;;;;;1093:263:78;;;;;;;306:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;306:24:78;;;;;;;;-1:-1:-1;;;;;306:24:78;;;;;;;;;;;;;;686:260;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;686:260:78;-1:-1:-1;;;;;686:260:78;;;;;1415:177;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1415:177:78;;;;334:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;334:20:78;;;;1093:263;1679:8;;1710:37;;;;;;;;;;;;;1736:10;1710:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1710:37:78;;;;;;;;1700:48;;-1:-1:-1;;;;;1679:8:78;;;;:20;;1710:37;;;1700:48;;;;;1710:37;1700:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1700:48:78;;;;;;;;;;;;1679:70;;;-1:-1:-1;;;1679:70:78;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1679:70:78;;;;;;;-1:-1:-1;1679:70:78;-1:-1:-1;1679:70:78;;;;5:2:-1;;;;30:1;27;20:12;5:2;1679:70:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1679:70:78;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1679:70:78;1671:79;;;;;;;;1156:8;;1186:37;;;;;;;;;;;;-1:-1:-1;;;;;1186:37:78;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;1186:37:78;;;;;;;;1176:48;;1156:8;;;:19;;1186:37;;;1176:48;;;;;1186:37;1176:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1176:48:78;;;;;;;;;;;;1156:69;;;-1:-1:-1;;;1156:69:78;;;;;;;;;;;;;;-1:-1:-1;;;;1156:69:78;;;;;;;-1:-1:-1;1156:69:78;-1:-1:-1;1156:69:78;;;;5:2:-1;;;;30:1;27;20:12;5:2;1156:69:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;1231:6:78;;:73;;;;;;1271:10;1231:73;;;;1291:4;1231:73;;;;:6;:73;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1231:6:78;;;;-1:-1:-1;1231:18:78;;-1:-1:-1;1231:73:78;;;;;;;;;;;:6;;:73;;;5:2:-1;;;;30:1;27;20:12;5:2;1231:73:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1231:73:78;;;;1093:263;:::o;306:24::-;;;-1:-1:-1;;;;;306:24:78;;:::o;686:260::-;1679:8;;1710:37;;;;;;;;;;;;;1736:10;1710:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1710:37:78;;;;;;;;1700:48;;-1:-1:-1;;;;;1679:8:78;;;;:20;;1710:37;;;1700:48;;;;;1710:37;1700:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1700:48:78;;;;;;;;;;;;1679:70;;;-1:-1:-1;;;1679:70:78;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1679:70:78;;;;;;;-1:-1:-1;1679:70:78;-1:-1:-1;1679:70:78;;;;5:2:-1;;;;30:1;27;20:12;5:2;1679:70:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1679:70:78;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1679:70:78;1671:79;;;;;;;;747:8;;774:37;;;;;;;;;;;;-1:-1:-1;;;;;774:37:78;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;774:37:78;;;;;;;;764:48;;747:8;;;:16;;774:37;;;764:48;;;;;774:37;764:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;764:48:78;;;;;;;;;;;;747:72;;;-1:-1:-1;;;747:72:78;;;;;;;274:1:-1;747:72:78;;;;;;;;;;;-1:-1:-1;;;;747:72:78;;;;;;;-1:-1:-1;747:72:78;-1:-1:-1;747:72:78;;;;5:2:-1;;;;30:1;27;20:12;5:2;747:72:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;825:6:78;;:71;;;;;;863:10;825:71;;;;883:4;825:71;;;;:6;:71;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;825:6:78;;;;-1:-1:-1;825:18:78;;-1:-1:-1;825:71:78;;;;;;;;;;;:6;;:71;;;5:2:-1;;;;30:1;27;20:12;1415:177:78;1679:8;;1710:37;;;;;;;;;;;;;1736:10;1710:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1710:37:78;;;;;;;;1700:48;;-1:-1:-1;;;;;1679:8:78;;;;:20;;1710:37;;;1700:48;;;;;1710:37;1700:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1700:48:78;;;;;;;;;;;;1679:70;;;-1:-1:-1;;;1679:70:78;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1679:70:78;;;;;;;-1:-1:-1;1679:70:78;-1:-1:-1;1679:70:78;;;;5:2:-1;;;;30:1;27;20:12;5:2;1679:70:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1679:70:78;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1679:70:78;1671:79;;;;;;;;1463:6;;:94;;;;;;1512:4;1463:94;;;;;;1519:10;1463:94;;;;1531:21;1463:94;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1463:6:78;;;;:18;;:94;;;;;:6;;:94;;;;;;;;:6;;:94;;;5:2:-1;;;;30:1;27;20:12;5:2;1463:94:78;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1576:10:78;;-1:-1:-1;;;1563:24:78;334:20;;;-1:-1:-1;;;;;334:20:78;;:::o",
  "source": "pragma solidity ^0.4.24;\n\n\nimport '../database/Database.sol';\nimport '../database/Events.sol';\n\n// @title A contract which allows for the freezing of functionality within the platform.\n// @dev only valid with a single owned ownership model\n// @author Kyle Dewhurst, MyBit Foundation\ncontract Pausible {\n\n  Database public database;\n  Events public events;\n\n  // @notice constructor: initialize database instance\n  constructor(address _database, address _events)\n  public {\n    database = Database(_database);\n    events = Events(_events);\n  }\n\n  // @notice This will pause all critical activity for the supplied address\n  // @param: The address of the contract which is to be paused\\\n  function pause(address _contract)\n  onlyOwner\n  public {\n    database.setBool(keccak256(abi.encodePacked(\"paused\", _contract)), true);\n    events.transaction('Contract paused', msg.sender, address(this), 0, '');\n    //emit LogPaused(_contract, msg.sender);\n  }\n\n  // @notice This will unpause all critical activity for the supplied address\n  // @param: The address of the contract which is to be unpaused\n  function unpause(address _contract)\n  onlyOwner\n  public {\n    database.deleteBool(keccak256(abi.encodePacked(\"paused\", _contract)));\n    events.transaction('Contract unpaused', msg.sender, address(this), 0, '');\n    //emit LogUnpaused(_contract, msg.sender);\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('Pausible destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  // @notice reverts if caller is not the owner\n  modifier onlyOwner() {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n  /*\n  event LogPaused(address indexed _contract, address _owner);\n  event LogUnpaused(address indexed _contract, address _owner);\n  */\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/Pausible.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/Pausible.sol",
    "exportedSymbols": {
      "Pausible": [
        24935
      ]
    },
    "id": 24936,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 24796,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:78"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 24797,
        "nodeType": "ImportDirective",
        "scope": 24936,
        "sourceUnit": 6770,
        "src": "27:34:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 24798,
        "nodeType": "ImportDirective",
        "scope": 24936,
        "sourceUnit": 7234,
        "src": "62:32:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 24935,
        "linearizedBaseContracts": [
          24935
        ],
        "name": "Pausible",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 24800,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 24935,
            "src": "306:24:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$6769",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 24799,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6769,
              "src": "306:8:78",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$6769",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 24802,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 24935,
            "src": "334:20:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$7233",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 24801,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7233,
              "src": "334:6:78",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$7233",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24821,
              "nodeType": "Block",
              "src": "471:71:78",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 24813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24809,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24800,
                      "src": "477:8:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6769",
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
                          "id": 24811,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24804,
                          "src": "497:9:78",
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
                        "id": 24810,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6769,
                        "src": "488:8:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$6769_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 24812,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "488:19:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6769",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "477:30:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$6769",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 24814,
                  "nodeType": "ExpressionStatement",
                  "src": "477:30:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 24819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24815,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24802,
                      "src": "513:6:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
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
                          "id": 24817,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24806,
                          "src": "529:7:78",
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
                        "id": 24816,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7233,
                        "src": "522:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$7233_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 24818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "522:15:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "513:24:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$7233",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 24820,
                  "nodeType": "ExpressionStatement",
                  "src": "513:24:78"
                }
              ]
            },
            "documentation": null,
            "id": 24822,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24804,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 24822,
                  "src": "426:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:78",
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
                  "id": 24806,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 24822,
                  "src": "445:15:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "425:36:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "471:0:78"
            },
            "scope": 24935,
            "src": "414:128:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24855,
              "nodeType": "Block",
              "src": "741:205:78",
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
                                "id": 24835,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "791:8:78",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 24836,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24824,
                                "src": "801:9:78",
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
                                "id": 24833,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "774:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 24834,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "774:16:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 24837,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "774:37:78",
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
                          "id": 24832,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "764:9:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 24838,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "764:48:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 24839,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "814:4:78",
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
                        "id": 24829,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24800,
                        "src": "747:8:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6769",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 24831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6638,
                      "src": "747:16:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 24840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "747:72:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24841,
                  "nodeType": "ExpressionStatement",
                  "src": "747:72:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420706175736564",
                        "id": 24845,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "844:17:78",
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
                          "id": 24846,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "863:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "863:10:78",
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
                            "id": 24849,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35156,
                            "src": "883:4:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 24848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "875:7:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 24850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "875:13:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 24851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "890:1:78",
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
                        "id": 24852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "893:2:78",
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
                        "id": 24842,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24802,
                        "src": "825:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 24844,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "825:18:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 24853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:71:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24854,
                  "nodeType": "ExpressionStatement",
                  "src": "825:71:78"
                }
              ]
            },
            "documentation": null,
            "id": 24856,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 24827,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24826,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 24934,
                  "src": "722:9:78",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "722:9:78"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24824,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 24856,
                  "src": "701:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24823,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "701:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "700:19:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "741:0:78"
            },
            "scope": 24935,
            "src": "686:260:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24888,
              "nodeType": "Block",
              "src": "1150:206:78",
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
                                "id": 24869,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1203:8:78",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 24870,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24858,
                                "src": "1213:9:78",
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
                                "id": 24867,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "1186:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 24868,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1186:16:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 24871,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1186:37:78",
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
                          "id": 24866,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "1176:9:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 24872,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1176:48:78",
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
                        "id": 24863,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24800,
                        "src": "1156:8:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6769",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 24865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6732,
                      "src": "1156:19:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 24873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1156:69:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24874,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:69:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420756e706175736564",
                        "id": 24878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1250:19:78",
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
                          "id": 24879,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "1271:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1271:10:78",
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
                            "id": 24882,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35156,
                            "src": "1291:4:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 24881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1283:7:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 24883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1283:13:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 24884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1298:1:78",
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
                        "id": 24885,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1301:2:78",
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
                        "id": 24875,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24802,
                        "src": "1231:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 24877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "1231:18:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 24886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1231:73:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24887,
                  "nodeType": "ExpressionStatement",
                  "src": "1231:73:78"
                }
              ]
            },
            "documentation": null,
            "id": 24889,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 24861,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24860,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 24934,
                  "src": "1131:9:78",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1131:9:78"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24858,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 24889,
                  "src": "1110:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1109:19:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24862,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1150:0:78"
            },
            "scope": 24935,
            "src": "1093:263:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24915,
              "nodeType": "Block",
              "src": "1457:135:78",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "5061757369626c652064657374726f796564",
                        "id": 24897,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1482:20:78",
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
                            "id": 24899,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35156,
                            "src": "1512:4:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 24898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1504:7:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 24900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1504:13:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 24901,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "1519:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24902,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1519:10:78",
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
                              "id": 24904,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 35156,
                              "src": "1539:4:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausible_$24935",
                                "typeString": "contract Pausible"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Pausible_$24935",
                                "typeString": "contract Pausible"
                              }
                            ],
                            "id": 24903,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1531:7:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 24905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1531:13:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 24906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1531:21:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 24907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1554:2:78",
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
                        "id": 24894,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24802,
                        "src": "1463:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 24896,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "1463:18:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 24908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1463:94:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24909,
                  "nodeType": "ExpressionStatement",
                  "src": "1463:94:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 24911,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "1576:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1576:10:78",
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
                      "id": 24910,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34931,
                      "src": "1563:12:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 24913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1563:24:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24914,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:24:78"
                }
              ]
            },
            "documentation": null,
            "id": 24916,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 24892,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24891,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 24934,
                  "src": "1436:9:78",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1436:9:78"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24890,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1431:2:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24893,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:78"
            },
            "scope": 24935,
            "src": "1415:177:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 24933,
              "nodeType": "Block",
              "src": "1665:97:78",
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
                                    "id": 24924,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1727:7:78",
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
                                      "id": 24925,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34923,
                                      "src": "1736:3:78",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 24926,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1736:10:78",
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
                                    "id": 24922,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "1710:3:78",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 24923,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1710:16:78",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 24927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1710:37:78",
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
                              "id": 24921,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "1700:9:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 24928,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1700:48:78",
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
                            "id": 24919,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24800,
                            "src": "1679:8:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$6769",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 24920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6399,
                          "src": "1679:20:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 24929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1679:70:78",
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
                      "id": 24918,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "1671:7:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 24930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1671:79:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24931,
                  "nodeType": "ExpressionStatement",
                  "src": "1671:79:78"
                },
                {
                  "id": 24932,
                  "nodeType": "PlaceholderStatement",
                  "src": "1756:1:78"
                }
              ]
            },
            "documentation": null,
            "id": 24934,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 24917,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1662:2:78"
            },
            "src": "1644:118:78",
            "visibility": "internal"
          }
        ],
        "scope": 24936,
        "src": "283:1617:78"
      }
    ],
    "src": "0:1901:78"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/Pausible.sol",
    "exportedSymbols": {
      "Pausible": [
        24935
      ]
    },
    "id": 24936,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 24796,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:78"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 24797,
        "nodeType": "ImportDirective",
        "scope": 24936,
        "sourceUnit": 6770,
        "src": "27:34:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 24798,
        "nodeType": "ImportDirective",
        "scope": 24936,
        "sourceUnit": 7234,
        "src": "62:32:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 24935,
        "linearizedBaseContracts": [
          24935
        ],
        "name": "Pausible",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 24800,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 24935,
            "src": "306:24:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$6769",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 24799,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6769,
              "src": "306:8:78",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$6769",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 24802,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 24935,
            "src": "334:20:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$7233",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 24801,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7233,
              "src": "334:6:78",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$7233",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24821,
              "nodeType": "Block",
              "src": "471:71:78",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 24813,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24809,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24800,
                      "src": "477:8:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6769",
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
                          "id": 24811,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24804,
                          "src": "497:9:78",
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
                        "id": 24810,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6769,
                        "src": "488:8:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$6769_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 24812,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "488:19:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$6769",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "477:30:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$6769",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 24814,
                  "nodeType": "ExpressionStatement",
                  "src": "477:30:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 24819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24815,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 24802,
                      "src": "513:6:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
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
                          "id": 24817,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 24806,
                          "src": "529:7:78",
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
                        "id": 24816,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7233,
                        "src": "522:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$7233_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 24818,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "522:15:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$7233",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "513:24:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$7233",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 24820,
                  "nodeType": "ExpressionStatement",
                  "src": "513:24:78"
                }
              ]
            },
            "documentation": null,
            "id": 24822,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24804,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 24822,
                  "src": "426:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:7:78",
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
                  "id": 24806,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 24822,
                  "src": "445:15:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "425:36:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "471:0:78"
            },
            "scope": 24935,
            "src": "414:128:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24855,
              "nodeType": "Block",
              "src": "741:205:78",
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
                                "id": 24835,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "791:8:78",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 24836,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24824,
                                "src": "801:9:78",
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
                                "id": 24833,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "774:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 24834,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "774:16:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 24837,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "774:37:78",
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
                          "id": 24832,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "764:9:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 24838,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "764:48:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 24839,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "814:4:78",
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
                        "id": 24829,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24800,
                        "src": "747:8:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6769",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 24831,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6638,
                      "src": "747:16:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 24840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "747:72:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24841,
                  "nodeType": "ExpressionStatement",
                  "src": "747:72:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420706175736564",
                        "id": 24845,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "844:17:78",
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
                          "id": 24846,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "863:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "863:10:78",
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
                            "id": 24849,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35156,
                            "src": "883:4:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 24848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "875:7:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 24850,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "875:13:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 24851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "890:1:78",
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
                        "id": 24852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "893:2:78",
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
                        "id": 24842,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24802,
                        "src": "825:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 24844,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "825:18:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 24853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "825:71:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24854,
                  "nodeType": "ExpressionStatement",
                  "src": "825:71:78"
                }
              ]
            },
            "documentation": null,
            "id": 24856,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 24827,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24826,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 24934,
                  "src": "722:9:78",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "722:9:78"
              }
            ],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24824,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 24856,
                  "src": "701:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24823,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "701:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "700:19:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24828,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "741:0:78"
            },
            "scope": 24935,
            "src": "686:260:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24888,
              "nodeType": "Block",
              "src": "1150:206:78",
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
                                "id": 24869,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1203:8:78",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                  "typeString": "literal_string \"paused\""
                                },
                                "value": "paused"
                              },
                              {
                                "argumentTypes": null,
                                "id": 24870,
                                "name": "_contract",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 24858,
                                "src": "1213:9:78",
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
                                "id": 24867,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34910,
                                "src": "1186:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 24868,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1186:16:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 24871,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1186:37:78",
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
                          "id": 24866,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34917,
                          "src": "1176:9:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 24872,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1176:48:78",
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
                        "id": 24863,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24800,
                        "src": "1156:8:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$6769",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 24865,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6732,
                      "src": "1156:19:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 24873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1156:69:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24874,
                  "nodeType": "ExpressionStatement",
                  "src": "1156:69:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420756e706175736564",
                        "id": 24878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1250:19:78",
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
                          "id": 24879,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "1271:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1271:10:78",
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
                            "id": 24882,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35156,
                            "src": "1291:4:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 24881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1283:7:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 24883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1283:13:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 24884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1298:1:78",
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
                        "id": 24885,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1301:2:78",
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
                        "id": 24875,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24802,
                        "src": "1231:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 24877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "1231:18:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 24886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1231:73:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24887,
                  "nodeType": "ExpressionStatement",
                  "src": "1231:73:78"
                }
              ]
            },
            "documentation": null,
            "id": 24889,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 24861,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24860,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 24934,
                  "src": "1131:9:78",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1131:9:78"
              }
            ],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24858,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 24889,
                  "src": "1110:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1109:19:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24862,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1150:0:78"
            },
            "scope": 24935,
            "src": "1093:263:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24915,
              "nodeType": "Block",
              "src": "1457:135:78",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "5061757369626c652064657374726f796564",
                        "id": 24897,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1482:20:78",
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
                            "id": 24899,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35156,
                            "src": "1512:4:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Pausible_$24935",
                              "typeString": "contract Pausible"
                            }
                          ],
                          "id": 24898,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1504:7:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 24900,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1504:13:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 24901,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "1519:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24902,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1519:10:78",
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
                              "id": 24904,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 35156,
                              "src": "1539:4:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausible_$24935",
                                "typeString": "contract Pausible"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_Pausible_$24935",
                                "typeString": "contract Pausible"
                              }
                            ],
                            "id": 24903,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1531:7:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 24905,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1531:13:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 24906,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1531:21:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 24907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1554:2:78",
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
                        "id": 24894,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 24802,
                        "src": "1463:6:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$7233",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 24896,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6838,
                      "src": "1463:18:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 24908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1463:94:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24909,
                  "nodeType": "ExpressionStatement",
                  "src": "1463:94:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 24911,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "1576:3:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 24912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1576:10:78",
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
                      "id": 24910,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34931,
                      "src": "1563:12:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 24913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1563:24:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24914,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:24:78"
                }
              ]
            },
            "documentation": null,
            "id": 24916,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 24892,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 24891,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 24934,
                  "src": "1436:9:78",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1436:9:78"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 24890,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1431:2:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 24893,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:78"
            },
            "scope": 24935,
            "src": "1415:177:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 24933,
              "nodeType": "Block",
              "src": "1665:97:78",
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
                                    "id": 24924,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1727:7:78",
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
                                      "id": 24925,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 34923,
                                      "src": "1736:3:78",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 24926,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1736:10:78",
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
                                    "id": 24922,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34910,
                                    "src": "1710:3:78",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 24923,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1710:16:78",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 24927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1710:37:78",
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
                              "id": 24921,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34917,
                              "src": "1700:9:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 24928,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1700:48:78",
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
                            "id": 24919,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 24800,
                            "src": "1679:8:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$6769",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 24920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6399,
                          "src": "1679:20:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 24929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1679:70:78",
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
                      "id": 24918,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "1671:7:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 24930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1671:79:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 24931,
                  "nodeType": "ExpressionStatement",
                  "src": "1671:79:78"
                },
                {
                  "id": 24932,
                  "nodeType": "PlaceholderStatement",
                  "src": "1756:1:78"
                }
              ]
            },
            "documentation": null,
            "id": 24934,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 24917,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1662:2:78"
            },
            "src": "1644:118:78",
            "visibility": "internal"
          }
        ],
        "scope": 24936,
        "src": "283:1617:78"
      }
    ],
    "src": "0:1901:78"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.759Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}