# Ownership

Ownership contains all the contracts pertaining to governance and authority.

## Contracts

## GovernanceControls
Handles the initialization or adjustment of governance variables for a given token community. Tokens registered here will be able to use the platform contracts for voting. A community can control relevent variables such as:

* which contract is currently defining the governance process
* how long votes should last `vote duration
* what percentage of yes votes are required for vote to be a success `quorum`
* what percentage of token holders need to participate for the vote to be approvalID `threshold`


Tokens can have tokens initiated after a crowdsale with the `startGovernance()` function

```javascript
function startGovernance(address _tokenAddress, address _governanceContract, uint256 _voteDuration, uint8 _quorum, uint8 _threshold)
public
returns (bool) {}
```

## Commitment
Commitment locks ERC20 tokens while issues are being voted on within that token holder community. The amount of time each proposal has to be voted on is determined by the variable `voteDuration`. . Committed tokens have a withdraw delay equal to the proposal duration. This allows all proposals to finish before tokens are withdrawn.

```javascript
function commit(uint256 _value, address _token)
external
returns (bool) {}
```

Token holders can cancel their commitment starting the waiting period until they are able to withdraw
```javascript
function cancelCommitment(address _token)
external
returns (bool) {}
```

## Proposal
Proposal is a basic contract implementing a proposal based voting system between token holders. Each proposal ID is made up of the function + parameters wished to be called by the token community.

```javascript
bytes32 proposalID = keccak256(abi.encodePacked(tokenAddress, contractAddress, methodID, parameterHash));
```

For example this function checks consensus by looking up the given parameters and checking if consensus was reached:
```javascript
function becomeAssetManager(address assetToken, address newAssetManager, uint256 amount, bool withhold)
external
returns (bool) {
  require(hasConsensus(assetToken, msg.sig, sha3(assetToken, currentAssetManager, newAssetManager, amount, withhold))));
}
```

This `hasConsensus()` verifies that the community reached `quorum` and `threshold` and whatever else is required to reach consensus. The function checks that the community wanted to call this exact function with these specific parameters.

```javascript
function hasConsensus(address assetToken, bytes4 methodID, bytes32 parameterHash)
public
view
returns (bool) {}
```

### CollectiveOwned

A multi-sig contract that gives access to core functions with a majority approval of owners.

### Pausible

Lets the owner pause any contract in the ecosystem.

### SingleOwned

Lets the owner transfer ownership to another address.
