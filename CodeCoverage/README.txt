# Setting up solidity-coverage

## Dependencies
 `$ mkdir truffleFolder && cd truffleFolder && truffle init`
 `$ npm i truffle ethereumjs-testrpc ganache-cli solidity-coverage coveralls`


## File Modifications
.travis.yml
> $ echo 'sudo: required
dist: trusty
language: node_js
node_js: -'7'
install:- npm install -g truffle - npm install -g ganache-cli - npm install
script: - npm test
before_script: - testrpc > /dev/null & - sleep 5
after_script: - npm run coverage && cat coverage/lcov.info | coveralls' > .travis.yml`



package.json
> $ echo '{
  "name": "coverage",
  "version": "1.0.0",
  "description": "",
  "main": "truffle-config.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "truffle test",
    "coverage": "./node_modules/.bin/solidity-coverage"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "coveralls": "^3.0.0",
    "solidity-coverage": "^0.4.14"
  }
}' > package.json


## Typical Errors
Typically as solidity-coverage starts testrpc as a childprocess, it does not kill the process once the coverage has been completed.
Resulting in Error: listen `EADDRINUSE :::8555` when attempting to run solidity-coverage again.
To fix this:
 > ps -fC node = PID
 sudo kill PID
