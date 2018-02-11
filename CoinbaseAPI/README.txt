**Purpose;**
 Basic KYC using coinbase to link a users metamask address to their coinbase account.  

**Why?**
 First layer of KYC that can be used for Alpha & rediects KYC liabilities.

**Why coinbase?**
 They are the most trusted and government friendly exchange. 


**How does it work?**
 1) User clicks button.
 2) User is redirected to coinbase.
 3) User authenticated MyBit APP certain permissions(wallet:user:read,wallet:user:email,wallet:payment-methods:read,wallet:transactions:read,wallet:withdrawals:read,wallet:transactions:send,wallet:accounts:read).
 4) User redirected back to mybit page with temporary authentication code.
 5) GET to cAPI to convert tempAC into an AC, allowing the APP to the set permissions for 2 hours, then it will expire or until revoked.
 6) GET to cAPI to validate that user has a bank account attached that can withdraw.(hacky version for finding whether they have ID verified).
 7) GET to cAPI to obtain users accountID.
 8) GET to cAPI to get ether wallet ID.
 9) POST to cAPI submitting a transaction from users ether wallet to metamask address for 0.001 ether(min required amount).
 10) Server listens, once submitted, grabs transaction hash.
 11) GET to cAPI to get all of users details
 12) Revoke access token as we have done all that's required.

Whilst all of these operations are running we are storing;{accountID, accessToken, ethWalletId, metamaskAddr, verificationTxID, verificationTxHash, name, profileLocation, email, timeZone, nativeCurrency, countryCode, countryName}. 

**Why collect this data?**
 If we hear some knocks, we can give all of this data.

**Where is this data stored?**
 Currently, just a variable on the server as it's not being used for production handling many users.  Once all of the other API integrations, and translation to react is done, it will be stored on MongoDB.


**Permissions explained more;**
 https://developers.coinbase.com/docs/wallet/permissions


**Usage;**
 go root directory
 1) npm init
 2) npm install
 3) node index.js
 Runs on 127.0.0.1:3000


If you want to test yourself, you need to create your own APP, create a developer access token so you can do minimum eth amount send.

**TODO;**
Need to apply to get permissions upgraded for the app, only allows 1$ transfer(below minimum of eth amount).