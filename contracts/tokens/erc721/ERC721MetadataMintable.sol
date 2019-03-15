pragma solidity ^0.4.24;

import "./ERC721Metadata.sol";


/**
 * @title ERC721MetadataMintable
 * @dev ERC721 minting logic with metadata
 */
contract ERC721MetadataMintable is ERC721, ERC721Metadata {

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
     * @param tokenId The token id to mint.
     * @param tokenURI The token URI of the minted token.
     * @return A boolean that indicates if the operation was successful.
     */
    function mintWithTokenURI(address to, uint256 tokenId, string tokenURI)
    public
    returns (bool) {
        require(canMint(msg.sender));
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
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
