**Purpose;**
Link users/manufacturer Uphold account to query KYC verification, and send Eth to their desired currency which they can then do a bank withdrawal.

**Why?**
Allow users/manufacturers the choice of being paid in fiat.

**How does it work?**
1) User creates uphold account
2) Gives MyBit app permission; scope=transactions:read%20transactions:deposit%20user:read%20accounts:read%20cards:read - https://uphold.com/en/developer/api/documentation/#permissions
3) Query account info/verified ID
4) Get desired currency Eth address through Uphold query
5) Allow users/manufacturers to withdraw their funds directly to currency Eth wallet which will be converted to the currency.  E.g. Send 100 Eth Uphold EUR Eth address, Eth>EUR, User can bank withdraw EUR

**Why not just let users manually put in their own Uphold currency Eth address**
Users could put other users addresses, and they may not be verified on our platform due to particular reasons.
By going through Uphold to get the address, legally it is more compliant and reduces the risks of malicious actors.


**Usage;**
 go root directory
 1) npm init
 2) npm install
 3) node index.js
 Runs on 127.0.0.1:3000
