# Setting up solidity-coverage

[Solidity-coverage](https://github.com/sc-forks/solidity-coverage "Solidity-coverage") is a tool used to analyse tests built for the assocated Solidity code.  When it has completed the analysis, it outputs the results in not only the console, but also a usable webpack similar to [metacoin](https://sc-forks.github.io/metacoin/ "metacoin").  

## Dependencies
[ethereumjs-testrpc](https://www.npmjs.com/package/ethereumjs-testrpc "ethereumjs-testrpc") 
[ganache-cli](https://www.npmjs.com/package/ganache-cli "ganache-cli") 
[solidity-coverage](https://www.npmjs.com/package/solidity-coverage "solidity-coverage") 
[coveralls](https://www.npmjs.com/package/coveralls "coveralls")
[solc](https://www.npmjs.com/package/solc "solc")


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
Resulting in Error: listen `EADDRINUSE :::8555` when attempting to run solidity-coverage again.  This error happens everytime you try to rerun solidity-coverage, even after it has been completed.
To fix this, grab the services PID:
 > ps -fC node 

Then kill this PID: 
 > sudo kill PID


## How To Run
 >  mkdir truffleFolder && cd truffleFolder      
      npm i truffle ethereumjs-testrpc ganache-cli solidity-coverage coveralls
      truffle init 
      Create files in file modification section and edit them with the contents or use the echo command given
	  sudo solidity-coverage
     
## Results
Results are stored in coverage folder and stores all necessary html/css files for displaying on a webpage.  Specifically the root index.html located in coverage, displays code coverage report for all files. 
