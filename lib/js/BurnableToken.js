"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnableToken = exports.BurnableToken = 
{
  "contractName": "BurnableToken",
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
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506108be806100206000396000f3006080604052600436106100a35763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100a857806318160ddd146100e057806323b872dd1461010757806342966c6814610131578063661884631461014957806370a082311461016d57806379cc67901461018e578063a9059cbb146101b2578063d73dd623146101d6578063dd62ed3e146101fa575b600080fd5b3480156100b457600080fd5b506100cc600160a060020a0360043516602435610221565b604080519115158252519081900360200190f35b3480156100ec57600080fd5b506100f5610287565b60408051918252519081900360200190f35b34801561011357600080fd5b506100cc600160a060020a036004358116906024351660443561028d565b34801561013d57600080fd5b506100cc6004356103f0565b34801561015557600080fd5b506100cc600160a060020a036004351660243561049a565b34801561017957600080fd5b506100f5600160a060020a0360043516610589565b34801561019a57600080fd5b506100cc600160a060020a03600435166024356105a4565b3480156101be57600080fd5b506100cc600160a060020a03600435166024356106b9565b3480156101e257600080fd5b506100cc600160a060020a0360043516602435610786565b34801561020657600080fd5b506100f5600160a060020a036004358116906024351661081f565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a0383166000908152602081905260408120548211156102b257600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020548211156102e257600080fd5b600160a060020a03831615156102f757600080fd5b600160a060020a038416600090815260208190526040902054610320908363ffffffff61084a16565b600160a060020a038086166000908152602081905260408082209390935590851681522054610355908363ffffffff61085c16565b600160a060020a03808516600090815260208181526040808320949094559187168152600182528281203382529091522054610397908363ffffffff61084a16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610873833981519152929181900390910190a35060019392505050565b33600090815260208190526040812054610410908363ffffffff61084a16565b33600090815260208190526040902055600254610433908363ffffffff61084a16565b60025560408051838152905133917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a260408051838152905160009133916000805160206108738339815191529181900360200190a3506001919050565b336000908152600160209081526040808320600160a060020a03861684529091528120548083106104ee57336000908152600160209081526040808320600160a060020a0388168452909152812055610523565b6104fe818463ffffffff61084a16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600160a060020a0382166000908152602081905260408120546105cd908363ffffffff61084a16565b600160a060020a038416600090815260208181526040808320939093556001815282822033835290522054610608908363ffffffff61084a16565b600160a060020a038416600090815260016020908152604080832033845290915290205560025461063f908363ffffffff61084a16565b600255604080518381529051600160a060020a038516917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a2604080518381529051600091600160a060020a038616916000805160206108738339815191529181900360200190a350600192915050565b336000908152602081905260408120548211156106d557600080fd5b600160a060020a03831615156106ea57600080fd5b3360009081526020819052604090205461070a908363ffffffff61084a16565b3360009081526020819052604080822092909255600160a060020a0385168152205461073c908363ffffffff61085c16565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233926000805160206108738339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a03861684529091528120546107ba908363ffffffff61085c16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561085657fe5b50900390565b60008282018381101561086b57fe5b93925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a7230582015a42ddb3ac914af883b66862736e8445a4492cc9bbdd1c6cb076ffc4f038ac20029",
  "deployedBytecode": "0x6080604052600436106100a35763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b381146100a857806318160ddd146100e057806323b872dd1461010757806342966c6814610131578063661884631461014957806370a082311461016d57806379cc67901461018e578063a9059cbb146101b2578063d73dd623146101d6578063dd62ed3e146101fa575b600080fd5b3480156100b457600080fd5b506100cc600160a060020a0360043516602435610221565b604080519115158252519081900360200190f35b3480156100ec57600080fd5b506100f5610287565b60408051918252519081900360200190f35b34801561011357600080fd5b506100cc600160a060020a036004358116906024351660443561028d565b34801561013d57600080fd5b506100cc6004356103f0565b34801561015557600080fd5b506100cc600160a060020a036004351660243561049a565b34801561017957600080fd5b506100f5600160a060020a0360043516610589565b34801561019a57600080fd5b506100cc600160a060020a03600435166024356105a4565b3480156101be57600080fd5b506100cc600160a060020a03600435166024356106b9565b3480156101e257600080fd5b506100cc600160a060020a0360043516602435610786565b34801561020657600080fd5b506100f5600160a060020a036004358116906024351661081f565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a0383166000908152602081905260408120548211156102b257600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020548211156102e257600080fd5b600160a060020a03831615156102f757600080fd5b600160a060020a038416600090815260208190526040902054610320908363ffffffff61084a16565b600160a060020a038086166000908152602081905260408082209390935590851681522054610355908363ffffffff61085c16565b600160a060020a03808516600090815260208181526040808320949094559187168152600182528281203382529091522054610397908363ffffffff61084a16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610873833981519152929181900390910190a35060019392505050565b33600090815260208190526040812054610410908363ffffffff61084a16565b33600090815260208190526040902055600254610433908363ffffffff61084a16565b60025560408051838152905133917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a260408051838152905160009133916000805160206108738339815191529181900360200190a3506001919050565b336000908152600160209081526040808320600160a060020a03861684529091528120548083106104ee57336000908152600160209081526040808320600160a060020a0388168452909152812055610523565b6104fe818463ffffffff61084a16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600160a060020a0382166000908152602081905260408120546105cd908363ffffffff61084a16565b600160a060020a038416600090815260208181526040808320939093556001815282822033835290522054610608908363ffffffff61084a16565b600160a060020a038416600090815260016020908152604080832033845290915290205560025461063f908363ffffffff61084a16565b600255604080518381529051600160a060020a038516917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a2604080518381529051600091600160a060020a038616916000805160206108738339815191529181900360200190a350600192915050565b336000908152602081905260408120548211156106d557600080fd5b600160a060020a03831615156106ea57600080fd5b3360009081526020819052604090205461070a908363ffffffff61084a16565b3360009081526020819052604080822092909255600160a060020a0385168152205461073c908363ffffffff61085c16565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233926000805160206108738339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a03861684529091528120546107ba908363ffffffff61085c16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561085657fe5b50900390565b60008282018381101561086b57fe5b93925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a7230582015a42ddb3ac914af883b66862736e8445a4492cc9bbdd1c6cb076ffc4f038ac20029",
  "sourceMap": "252:1393:66:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;252:1393:66;;;;;;;",
  "deployedSourceMap": "252:1393:66:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2112:188:74;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2112:188:74;-1:-1:-1;;;;;2112:188:74;;;;;;;;;;;;;;;;;;;;;;;;;4706:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4706:77:74;;;;;;;;;;;;;;;;;;;;2575:447;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2575:447:74;-1:-1:-1;;;;;2575:447:74;;;;;;;;;;;;591:271:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;591:271:66;;;;;4227:418:74;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4227:418:74;-1:-1:-1;;;;;4227:418:74;;;;;;;4985:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4985:99:74;-1:-1:-1;;;;;4985:99:74;;;;;1139:504:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1139:504:66;-1:-1:-1;;;;;1139:504:66;;;;;;;1174:320:74;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1174:320:74;-1:-1:-1;;;;;1174:320:74;;;;;;;3474:296;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3474:296:74;-1:-1:-1;;;;;3474:296:74;;;;;;;888:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;888:132:74;-1:-1:-1;;;;;888:132:74;;;;;;;;;;2112:188;2199:10;2179:4;2191:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;2191:29:74;;;;;;;;;;;:38;;;2240;;;;;;;2179:4;;2191:29;;2199:10;;2240:38;;;;;;;;-1:-1:-1;2291:4:74;2112:188;;;;:::o;4706:77::-;4772:6;;4706:77;:::o;2575:447::-;-1:-1:-1;;;;;2691:15:74;;2661:4;2691:15;;;;;;;;;;;2681:25;;;2673:34;;;;;;-1:-1:-1;;;;;2731:14:74;;;;;;:7;:14;;;;;;;;2746:10;2731:26;;;;;;;;2721:36;;;2713:45;;;;;;-1:-1:-1;;;;;2772:17:74;;;;2764:26;;;;;;-1:-1:-1;;;;;2814:15:74;;:8;:15;;;;;;;;;;;:27;;2834:6;2814:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;2796:15:74;;;:8;:15;;;;;;;;;;;:45;;;;2863:13;;;;;;;:25;;2881:6;2863:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;2847:13:74;;;:8;:13;;;;;;;;;;;:41;;;;2923:14;;;;;:7;:14;;;;;2938:10;2923:26;;;;;;;:38;;2954:6;2923:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;2894:14:74;;;;;;;:7;:14;;;;;;;;2909:10;2894:26;;;;;;;;:67;;;;2972:28;;;;;;;;;;;2894:14;;-1:-1:-1;;;;;;;;;;;2972:28:74;;;;;;;;;;-1:-1:-1;3013:4:74;2575:447;;;;;:::o;591:271:66:-;691:10;639:12;682:20;;;;;;;;;;;:33;;707:7;682:33;:24;:33;:::i;:::-;668:10;659:8;:20;;;;;;;;;;:56;730:6;;:19;;741:7;730:19;:10;:19;:::i;:::-;721:6;:28;760;;;;;;;;768:10;;760:28;;;;;;;;;;799:41;;;;;;;;828:1;;808:10;;-1:-1:-1;;;;;;;;;;;799:41:66;;;;;;;;-1:-1:-1;853:4:66;591:271;;;:::o;4227:418:74:-;4356:10;4317:4;4348:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4348:29:74;;;;;;;;;;4387:28;;;4383:169;;4433:10;4457:1;4425:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4425:29:74;;;;;;;;;:33;4383:169;;;4515:30;:8;4528:16;4515:30;:12;:30;:::i;:::-;4491:10;4483:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4483:29:74;;;;;;;;;:62;4383:169;4571:10;4593:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4562:61:74;;4593:29;;;;;;;;;;;4562:61;;;;;;;;;4571:10;4562:61;;;;;;;;;;;-1:-1:-1;4636:4:74;;4227:418;-1:-1:-1;;;4227:418:74:o;4985:99::-;-1:-1:-1;;;;;5063:16:74;5041:7;5063:16;;;;;;;;;;;;4985:99::o;1139:504:66:-;-1:-1:-1;;;;;1244:15:66;;1206:12;1244:15;;;;;;;;;;;:28;;1264:7;1244:28;:19;:28;:::i;:::-;-1:-1:-1;;;;;1226:15:66;;:8;:15;;;;;;;;;;;:46;;;;1369:7;:14;;;;;1384:10;1369:26;;;;;;:39;;1400:7;1369:39;:30;:39;:::i;:::-;-1:-1:-1;;;;;1340:14:66;;;;;;:7;:14;;;;;;;;1355:10;1340:26;;;;;;;:68;1475:6;;:19;;1486:7;1475:19;:10;:19;:::i;:::-;1466:6;:28;1551:23;;;;;;;;-1:-1:-1;;;;;1551:23:66;;;;;;;;;;;;;1585:36;;;;;;;;1609:1;;-1:-1:-1;;;;;1585:36:66;;;-1:-1:-1;;;;;;;;;;;1585:36:66;;;;;;;;-1:-1:-1;1634:4:66;1139:504;;;;:::o;1174:320:74:-;1276:10;1237:4;1267:20;;;;;;;;;;;1257:30;;;1249:39;;;;;;-1:-1:-1;;;;;1302:17:74;;;;1294:26;;;;;;1358:10;1349:8;:20;;;;;;;;;;;:32;;1374:6;1349:32;:24;:32;:::i;:::-;1335:10;1326:8;:20;;;;;;;;;;;:55;;;;-1:-1:-1;;;;;1403:13:74;;;;;;:25;;1421:6;1403:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1387:13:74;;:8;:13;;;;;;;;;;;;:41;;;;1439:33;;;;;;;1387:13;;1448:10;;-1:-1:-1;;;;;;;;;;;1439:33:74;;;;;;;;;-1:-1:-1;1485:4:74;1174:320;;;;:::o;3474:296::-;3637:10;3575:4;3629:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3629:29:74;;;;;;;;;;:46;;3663:11;3629:46;:33;:46;:::i;:::-;3597:10;3589:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3589:29:74;;;;;;;;;;;;:87;;;3687:61;;;;;;3589:29;;3687:61;;;;;;;;;;;-1:-1:-1;3761:4:74;3474:296;;;;:::o;888:132::-;-1:-1:-1;;;;;990:15:74;;;968:7;990:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;888:132::o;936:110:42:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:42;;;936:110::o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:42:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./StandardToken.sol\";\nimport \"../../interfaces/BurnERC20.sol\";\nimport \"../../math/SafeMath.sol\";\n\n// @title ERC20 token contract with burning capabilities\n// @notice Standard ERC20 contract with a deflationary supply.\ncontract BurnableToken is StandardToken, BurnERC20 {\n  using SafeMath for uint256;\n\n  // ------------------------------------------------------------------------\n  // Removes senders tokens from supply.\n  // Lowers investor balance and totalSupply by _amount\n  // ------------------------------------------------------------------------\n  function burn(uint _amount)\n  public\n  returns (bool success) {\n    balances[msg.sender] = balances[msg.sender].sub(_amount);\n    supply = supply.sub(_amount);\n    emit LogBurn(msg.sender, _amount);\n    emit Transfer(msg.sender, address(0), _amount);\n    return true;\n  }\n\n  // ------------------------------------------------------------------------\n  // An approved sender can burn _amount tokens of investor _from\n  // Lowers investor balance and supply by _amount\n  // ------------------------------------------------------------------------\n  function burnFrom(address _from, uint _amount)\n  public\n  returns (bool success) {\n    balances[_from] = balances[_from].sub(_amount);                         // Subtract from the targeted balance\n    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_amount);             // Subtract from the sender's allowance\n    supply = supply.sub(_amount);                              // Update supply\n    emit LogBurn(_from, _amount);\n    emit Transfer(_from, address(0), _amount);\n    return true;\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
    "exportedSymbols": {
      "BurnableToken": [
        17800
      ]
    },
    "id": 17801,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17684,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:66"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/StandardToken.sol",
        "file": "./StandardToken.sol",
        "id": 17685,
        "nodeType": "ImportDirective",
        "scope": 17801,
        "sourceUnit": 19586,
        "src": "26:29:66",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
        "file": "../../interfaces/BurnERC20.sol",
        "id": 17686,
        "nodeType": "ImportDirective",
        "scope": 17801,
        "sourceUnit": 8171,
        "src": "56:40:66",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 17687,
        "nodeType": "ImportDirective",
        "scope": 17801,
        "sourceUnit": 8864,
        "src": "97:33:66",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 17688,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 19585,
              "src": "278:13:66",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$19585",
                "typeString": "contract StandardToken"
              }
            },
            "id": 17689,
            "nodeType": "InheritanceSpecifier",
            "src": "278:13:66"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 17690,
              "name": "BurnERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8170,
              "src": "293:9:66",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnERC20_$8170",
                "typeString": "contract BurnERC20"
              }
            },
            "id": 17691,
            "nodeType": "InheritanceSpecifier",
            "src": "293:9:66"
          }
        ],
        "contractDependencies": [
          8170,
          8598,
          19585
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17800,
        "linearizedBaseContracts": [
          17800,
          8170,
          19585,
          8598
        ],
        "name": "BurnableToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 17694,
            "libraryName": {
              "contractScope": null,
              "id": 17692,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "313:8:66",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "307:27:66",
            "typeName": {
              "id": 17693,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "326:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 17738,
              "nodeType": "Block",
              "src": "653:209:66",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17701,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19264,
                        "src": "659:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17704,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17702,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "668:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "668:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "659:20:66",
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
                          "id": 17710,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17696,
                          "src": "707:7:66",
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
                            "id": 17705,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19264,
                            "src": "682:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17708,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17706,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "691:3:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17707,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "691:10:66",
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
                          "src": "682:20:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "682:24:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "682:33:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "659:56:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17713,
                  "nodeType": "ExpressionStatement",
                  "src": "659:56:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17714,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19272,
                      "src": "721:6:66",
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
                          "id": 17717,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17696,
                          "src": "741:7:66",
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
                          "id": 17715,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19272,
                          "src": "730:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17716,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "730:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17718,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "730:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "721:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17720,
                  "nodeType": "ExpressionStatement",
                  "src": "721:28:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17722,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "768:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "768:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17724,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17696,
                        "src": "780:7:66",
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
                      "id": 17721,
                      "name": "LogBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8169,
                      "src": "760:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "760:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17726,
                  "nodeType": "EmitStatement",
                  "src": "755:33:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17728,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "808:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17729,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "808:10:66",
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
                            "hexValue": "30",
                            "id": 17731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "828:1:66",
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
                          "id": 17730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "820:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 17732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "820:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17733,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17696,
                        "src": "832:7:66",
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
                      "id": 17727,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8589,
                      "src": "799:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 17734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:41:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17735,
                  "nodeType": "EmitStatement",
                  "src": "794:46:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "853:4:66",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17700,
                  "id": 17737,
                  "nodeType": "Return",
                  "src": "846:11:66"
                }
              ]
            },
            "documentation": null,
            "id": 17739,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17696,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17739,
                  "src": "605:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17695,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "605:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "604:14:66"
            },
            "payable": false,
            "returnParameters": {
              "id": 17700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17699,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 17739,
                  "src": "639:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17698,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "639:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "638:14:66"
            },
            "scope": 17800,
            "src": "591:271:66",
            "stateMutability": "nonpayable",
            "superFunction": 8163,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17798,
              "nodeType": "Block",
              "src": "1220:423:66",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17748,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19264,
                        "src": "1226:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17750,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 17749,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17741,
                        "src": "1235:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1226:15:66",
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
                          "id": 17755,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17743,
                          "src": "1264:7:66",
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
                            "id": 17751,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19264,
                            "src": "1244:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17753,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 17752,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17741,
                            "src": "1253:5:66",
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
                          "src": "1244:15:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17754,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "1244:19:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17756,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1244:28:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1226:46:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17758,
                  "nodeType": "ExpressionStatement",
                  "src": "1226:46:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17774,
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
                          "id": 17759,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19270,
                          "src": "1340:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 17763,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 17760,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17741,
                          "src": "1348:5:66",
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
                        "src": "1340:14:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17764,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17761,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1355:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1355:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1340:26:66",
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
                          "id": 17772,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17743,
                          "src": "1400:7:66",
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
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 17765,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19270,
                              "src": "1369:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 17767,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 17766,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17741,
                              "src": "1377:5:66",
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
                            "src": "1369:14:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17770,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17768,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1384:3:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17769,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1384:10:66",
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
                          "src": "1369:26:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "1369:30:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1369:39:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1340:68:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17775,
                  "nodeType": "ExpressionStatement",
                  "src": "1340:68:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17776,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19272,
                      "src": "1466:6:66",
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
                          "id": 17779,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17743,
                          "src": "1486:7:66",
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
                          "id": 17777,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19272,
                          "src": "1475:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17778,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "1475:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17780,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1475:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1466:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17782,
                  "nodeType": "ExpressionStatement",
                  "src": "1466:28:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17784,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17741,
                        "src": "1559:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17785,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17743,
                        "src": "1566:7:66",
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
                      "id": 17783,
                      "name": "LogBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8169,
                      "src": "1551:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1551:23:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17787,
                  "nodeType": "EmitStatement",
                  "src": "1546:28:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17789,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17741,
                        "src": "1594:5:66",
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
                            "hexValue": "30",
                            "id": 17791,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1609:1:66",
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
                          "id": 17790,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1601:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 17792,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1601:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17793,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17743,
                        "src": "1613:7:66",
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
                      "id": 17788,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8589,
                      "src": "1585:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 17794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1585:36:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17795,
                  "nodeType": "EmitStatement",
                  "src": "1580:41:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1634:4:66",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17747,
                  "id": 17797,
                  "nodeType": "Return",
                  "src": "1627:11:66"
                }
              ]
            },
            "documentation": null,
            "id": 17799,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17741,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 17799,
                  "src": "1157:13:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17740,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:66",
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
                  "id": 17743,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17799,
                  "src": "1172:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17742,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1172:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1156:29:66"
            },
            "payable": false,
            "returnParameters": {
              "id": 17747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17746,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 17799,
                  "src": "1206:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17745,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1206:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1205:14:66"
            },
            "scope": 17800,
            "src": "1139:504:66",
            "stateMutability": "nonpayable",
            "superFunction": 8156,
            "visibility": "public"
          }
        ],
        "scope": 17801,
        "src": "252:1393:66"
      }
    ],
    "src": "0:1646:66"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
    "exportedSymbols": {
      "BurnableToken": [
        17800
      ]
    },
    "id": 17801,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17684,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:66"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/StandardToken.sol",
        "file": "./StandardToken.sol",
        "id": 17685,
        "nodeType": "ImportDirective",
        "scope": 17801,
        "sourceUnit": 19586,
        "src": "26:29:66",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnERC20.sol",
        "file": "../../interfaces/BurnERC20.sol",
        "id": 17686,
        "nodeType": "ImportDirective",
        "scope": 17801,
        "sourceUnit": 8171,
        "src": "56:40:66",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 17687,
        "nodeType": "ImportDirective",
        "scope": 17801,
        "sourceUnit": 8864,
        "src": "97:33:66",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 17688,
              "name": "StandardToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 19585,
              "src": "278:13:66",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardToken_$19585",
                "typeString": "contract StandardToken"
              }
            },
            "id": 17689,
            "nodeType": "InheritanceSpecifier",
            "src": "278:13:66"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 17690,
              "name": "BurnERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8170,
              "src": "293:9:66",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnERC20_$8170",
                "typeString": "contract BurnERC20"
              }
            },
            "id": 17691,
            "nodeType": "InheritanceSpecifier",
            "src": "293:9:66"
          }
        ],
        "contractDependencies": [
          8170,
          8598,
          19585
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17800,
        "linearizedBaseContracts": [
          17800,
          8170,
          19585,
          8598
        ],
        "name": "BurnableToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 17694,
            "libraryName": {
              "contractScope": null,
              "id": 17692,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "313:8:66",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "307:27:66",
            "typeName": {
              "id": 17693,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "326:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 17738,
              "nodeType": "Block",
              "src": "653:209:66",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17701,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19264,
                        "src": "659:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17704,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17702,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "668:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "668:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "659:20:66",
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
                          "id": 17710,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17696,
                          "src": "707:7:66",
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
                            "id": 17705,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19264,
                            "src": "682:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17708,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17706,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "691:3:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17707,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "691:10:66",
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
                          "src": "682:20:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "682:24:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "682:33:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "659:56:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17713,
                  "nodeType": "ExpressionStatement",
                  "src": "659:56:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17714,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19272,
                      "src": "721:6:66",
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
                          "id": 17717,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17696,
                          "src": "741:7:66",
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
                          "id": 17715,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19272,
                          "src": "730:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17716,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "730:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17718,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "730:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "721:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17720,
                  "nodeType": "ExpressionStatement",
                  "src": "721:28:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17722,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "768:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "768:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17724,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17696,
                        "src": "780:7:66",
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
                      "id": 17721,
                      "name": "LogBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8169,
                      "src": "760:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "760:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17726,
                  "nodeType": "EmitStatement",
                  "src": "755:33:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17728,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "808:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17729,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "808:10:66",
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
                            "hexValue": "30",
                            "id": 17731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "828:1:66",
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
                          "id": 17730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "820:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 17732,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "820:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17733,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17696,
                        "src": "832:7:66",
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
                      "id": 17727,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8589,
                      "src": "799:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 17734,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:41:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17735,
                  "nodeType": "EmitStatement",
                  "src": "794:46:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "853:4:66",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17700,
                  "id": 17737,
                  "nodeType": "Return",
                  "src": "846:11:66"
                }
              ]
            },
            "documentation": null,
            "id": 17739,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17696,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17739,
                  "src": "605:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17695,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "605:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "604:14:66"
            },
            "payable": false,
            "returnParameters": {
              "id": 17700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17699,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 17739,
                  "src": "639:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17698,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "639:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "638:14:66"
            },
            "scope": 17800,
            "src": "591:271:66",
            "stateMutability": "nonpayable",
            "superFunction": 8163,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17798,
              "nodeType": "Block",
              "src": "1220:423:66",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17748,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 19264,
                        "src": "1226:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17750,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 17749,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17741,
                        "src": "1235:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1226:15:66",
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
                          "id": 17755,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17743,
                          "src": "1264:7:66",
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
                            "id": 17751,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 19264,
                            "src": "1244:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17753,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 17752,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17741,
                            "src": "1253:5:66",
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
                          "src": "1244:15:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17754,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "1244:19:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17756,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1244:28:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1226:46:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17758,
                  "nodeType": "ExpressionStatement",
                  "src": "1226:46:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17774,
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
                          "id": 17759,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19270,
                          "src": "1340:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 17763,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 17760,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17741,
                          "src": "1348:5:66",
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
                        "src": "1340:14:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17764,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17761,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1355:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1355:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1340:26:66",
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
                          "id": 17772,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17743,
                          "src": "1400:7:66",
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
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 17765,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 19270,
                              "src": "1369:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 17767,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 17766,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17741,
                              "src": "1377:5:66",
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
                            "src": "1369:14:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17770,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17768,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1384:3:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17769,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1384:10:66",
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
                          "src": "1369:26:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "1369:30:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17773,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1369:39:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1340:68:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17775,
                  "nodeType": "ExpressionStatement",
                  "src": "1340:68:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17776,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19272,
                      "src": "1466:6:66",
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
                          "id": 17779,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17743,
                          "src": "1486:7:66",
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
                          "id": 17777,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 19272,
                          "src": "1475:6:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17778,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8820,
                        "src": "1475:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17780,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1475:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1466:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17782,
                  "nodeType": "ExpressionStatement",
                  "src": "1466:28:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17784,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17741,
                        "src": "1559:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17785,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17743,
                        "src": "1566:7:66",
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
                      "id": 17783,
                      "name": "LogBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8169,
                      "src": "1551:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17786,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1551:23:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17787,
                  "nodeType": "EmitStatement",
                  "src": "1546:28:66"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17789,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17741,
                        "src": "1594:5:66",
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
                            "hexValue": "30",
                            "id": 17791,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1609:1:66",
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
                          "id": 17790,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1601:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 17792,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1601:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17793,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17743,
                        "src": "1613:7:66",
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
                      "id": 17788,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8589,
                      "src": "1585:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 17794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1585:36:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17795,
                  "nodeType": "EmitStatement",
                  "src": "1580:41:66"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 17796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1634:4:66",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 17747,
                  "id": 17797,
                  "nodeType": "Return",
                  "src": "1627:11:66"
                }
              ]
            },
            "documentation": null,
            "id": 17799,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17741,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 17799,
                  "src": "1157:13:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17740,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:66",
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
                  "id": 17743,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17799,
                  "src": "1172:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17742,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1172:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1156:29:66"
            },
            "payable": false,
            "returnParameters": {
              "id": 17747,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17746,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 17799,
                  "src": "1206:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 17745,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1206:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1205:14:66"
            },
            "scope": 17800,
            "src": "1139:504:66",
            "stateMutability": "nonpayable",
            "superFunction": 8156,
            "visibility": "public"
          }
        ],
        "scope": 17801,
        "src": "252:1393:66"
      }
    ],
    "src": "0:1646:66"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.822Z"
}