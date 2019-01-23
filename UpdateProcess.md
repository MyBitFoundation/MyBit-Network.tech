# Process for updating git repositories and npm packages

When contracts are added/changed we have to make the following changes to these repositories:
- MyBit-Network.tech
- MyBit-Chain.tech
- network.js
- hello-network

## 1) Update migrations/export chain:
- Make sure any contracts that need to be deployed on the
  local chain are included in *migrations/2_deploy_protocol.js*.
  This includes importing the contract, setting a contract variable,
  deploying it inside the chain of promises, and exporting the address
  into addresses.json

- In terminal, run:

```bash
./export_chain ../MyBit-Chain.tech
```
*substitute ../MyBit-Chain.tech with whataver directory the chain is in*

- This will also push the changes to the respository if a .git file is present

## 2) Update lib/index.js and lib/js/:
- If there are any new contracts we need to update the files that export the ABI's
  for use by network.js

- In terminal, run:

```bash
scripts/prepare_lib.sh
```

- This will generate the js files and index.js that will be used in the npm package.

## 3) Update git:
```bash
git add -u
git add contracts/.
git add lib/.
git commit -m "New update description"
git push origin master
```

## 4) Publish to NPM:
 - If the package is ready to be published, run the following:

```bash
npm version patch
npm publish --access=public
```

## 5) Move to MyBit-Chain.tech directory, and publish to NPM:
```bash
npm version patch
npm publish --access=public
```
*the chain should already have been pushed to the repository*

## 6) Move to network.js, update API:
- If you want the new contracts to be exposed by the API you'll need to update
  index.js.

- First you must set up your contract artifacts. Under the section commented
  as *//Setup contracts*, create your contract object, e.g.:

```javascript
var exampleContract = contract(ContractArtifacts.Example);
```

- Where 'exampleContract' is the name you'll be referencing when instatiating
  contracts in your functions and 'ContractArtifacts.Example' is the variable
  exported by @mybit/contracts. 'ContractArtifacts' is what we call @mybit/contracts
  when it is imported, and 'Example' is just the file name of the contract
  without the file type ('.sol').

- Next you'll want to build functions that expose the contract in the API. One
  option is to simply instatiate the contract and the return the object. This
  will expose all the contract's functions to the end user. For example:

```javascript
example: async () => {
  return await exampleContract.at(Chain.Example());
}
```

- In this example we are just instatiating the contract that exists at Chain.Example(),
  which is the address that is generated in *migrations/2_deploy_protocol.js*, which
  we ran at the very beginning of this guide. Since we are returning the whole
  contract we can call any function inside Example.sol. So if we import network.js
  into a script as 'Network' we can call our function like so:

```javascript
example = await Network.example();
result = await example.function(parameter);
```

- Alternatively, one can expose functions directly in our API. If we go back to
  *network.js/index.js* we can make the following function:

```javascript
someFunction: async (parameter) => {
  instance = await exampleContract.at(Chain.Example());
  result = await instance.function(parameter);
  return result;
}
```

- Now we can access the function directly in our scripts:

```javascript
result = await Network.someFunction(parameter);
```

## 7) Update package.json and publish to NPM:
- Since we are using new npm packages, we need to update the version numbers in
  package.json. You can update @mybit/contracts and @mybit/chain to the most recent
  versions.

- Update network.js to git:
```bash
git add -u
git commit -m "Added example function"
git push origin master
```

- Now publish on npm:
```bash
npm version patch
npm publish --access=public
```

## 8) Update examples in hello-network:
- If you want to show examples and use cases for the new functions you wrote
  in the API, you can add them here.

- After creating examples, update package.json to reference the newest version
  of network.js.

- Then update git:
```bash
git add .
git commit -m "New stuff"
git push origin master
```

- Then publish to npm:
```bash
npm version patch
npm publish --access=public
```
