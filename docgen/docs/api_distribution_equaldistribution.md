---
id: distribution_EqualDistribution
title: EqualDistribution
---

# api\_distribution\_EqualDistribution

## contract EqualDistribution

Source: [distribution/EqualDistribution.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/distribution/EqualDistribution.sol)

## Index

* [LogPayment](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html#LogPayment)
* [LogWithdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html#LogWithdraw)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html)
* [getFunds](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html#getFunds)
* [isBeneficiary](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html#isBeneficiary)
* [withdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/distribution_EqualDistribution.html#withdraw)

## Reference

### Events

* **LogPayment**

  `event` **`LogPayment`**`(address _sender, uint _amount)`

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.Parameters:`_sender` - address`_amount` - uint

* **LogWithdraw**

  `event` **`LogWithdraw`**`(address _beneficiary, uint _amount)`

  Parameters:`_beneficiary` - address`_amount` - uint

### Functions

* **fallback**

  `function (address[] _beneficiaries) public`

  Parameters:`_beneficiaries` - address\[\]

* **fallback**

  `function () public payable`

* **getFunds**

  `function` **`getFunds`**`(address _contractAddress) external returns (bool)`

  Parameters:`_contractAddress` - addressReturns:bool

* **isBeneficiary**

  `function` **`isBeneficiary`**`(address _user) public view returns (bool)`

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.Parameters:`_user` - addressReturns:bool

* **withdraw**

  `function` **`withdraw`**`() external returns (bool)`

  Returns:bool

