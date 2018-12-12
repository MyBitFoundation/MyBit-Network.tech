pragma solidity ^0.4.24;

import "./ERC721.sol";

/**
 * @title ERC721Mintable
 * @dev ERC721 minting logic
 */
contract ERC721Mintable is ERC721 {

  address public minter;
  bool public mintingFinished;

  // @notice constructor: initialized
  constructor(address _minter)
  public {
    minter = _minter;
  }
  /**
   * @dev Function to mint tokens
   * @param to The address that will receive the minted tokens.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(address to, uint256 tokenId)
  public
  returns (bool) {
      require(canMint(msg.sender));
      _mint(to, tokenId);
      return true;
  }

  function finishMinting()
  public
  returns (bool) {
    require(canMint(msg.sender));
    mintingFinished = true;
    return true;
  }

  function canMint(address sender)
  public
  view
  returns (bool) {
    return (!mintingFinished && sender == minter);
  }
}
