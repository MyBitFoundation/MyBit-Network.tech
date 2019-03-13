pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/ERC20DividendInterface.sol";

interface Events {  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)  external; }
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function deleteUint(bytes32 _key) external;
  function setBool(bytes32 _key, bool _value) external;
  function boolStorage(bytes32 _key) external view returns (bool);
}
interface CrowdsaleERC20_KyberProxy{
  function getExpectedRate(address src, address dest, uint srcQty) external view returns (uint expectedRate, uint slippageRate);
  function trade(ERC20 src, uint srcAmount, ERC20 dest, address destAddress, uint maxDestAmount,uint minConversionRate, address walletId) external payable returns(uint);
}

interface CrowdsaleERC20_ERC20Burner {
  function burn(address _tokenHolder, uint _amount, address _burnToken) payable external returns (bool);
}

// @title An asset crowdsale contract which accepts funding from ERC20 tokens.
// @notice Begins a crowdfunding period for a digital asset, minting asset dividend tokens to investors when particular ERC20 token is received
// @author Kyle Dewhurst, MyBit Foundation
// @notice creates a dividend token to represent the newly created asset.
contract CrowdsaleERC20{
  using SafeMath for uint256;

  DB private database;
  Events private events;
  CrowdsaleERC20_KyberProxy private kyber;
  CrowdsaleERC20_ERC20Burner private burner;

  // @notice Constructor: initializes database instance
  // @param: The address for the platform database
  constructor(address _database, address _events, address _kyber)
  public{
      database = DB(_database);
      events = Events(_events);
      kyber = CrowdsaleERC20_KyberProxy(_kyber);
      burner = CrowdsaleERC20_ERC20Burner(database.addressStorage(keccak256(abi.encodePacked("contract", "ERC20Burner"))));
  }


  // @notice Investors can send ERC20 tokens here to fund an asset, receiving an equivalent number of asset-tokens.
  // @dev investor must approve this contract to transfer tokens
  // @param (address) _assetAddress = The address of the asset tokens, investor wishes to purchase
  // @param (uint) _amount = The amount to spend purchasing this asset
  function buyAssetOrderERC20(address _assetAddress, address _investor, uint _amount, address _paymentToken)
  external
  validAsset(_assetAddress)
  betweenDeadlines(_assetAddress)
  notFinalized(_assetAddress)
  // burnRequired
  returns (bool) {
    require(msg.sender == _investor || database.boolStorage(keccak256(abi.encodePacked("approval", _investor, msg.sender, address(this), msg.sig))), "User not approved");
    ERC20DividendInterface assetToken = ERC20DividendInterface(_assetAddress);
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("crowdsale.fundingToken", _assetAddress))));
    uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked("crowdsale.goal", _assetAddress)));
    uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());
    uint amount; //This will be the value left over after any conversions
    //Check if the payment token is the same as the funding token. If not, convert, else just send some to the MYB burner
    if(_paymentToken == address(fundingToken)){
      amount = collectPayment(_investor, _amount, tokensRemaining, fundingToken);
    } else {
      amount = convertTokens(_investor, _amount, fundingToken, ERC20(_paymentToken), tokensRemaining);
    }
    require(amount > 0);
    if(amount < tokensRemaining){
      require(assetToken.mint(_investor, amount), "Investor minting failed");
      events.transaction('Asset purchased', _investor, _assetAddress, amount, '');
    } else {
      require(assetToken.mint(_investor, tokensRemaining), "Investor minting failed");   // Send remaining asset tokens to investor
      require(finalizeCrowdsale(assetToken, amountToRaise), "Crowdsale did not finalize");
      if(amount > tokensRemaining){
        fundingToken.transfer(_investor, amount.sub(tokensRemaining));    // return extra funds
      }
      events.transaction('Asset purchased', _investor, _assetAddress, tokensRemaining, '');
    }
    return true;
  }


  // @notice Contributors can retrieve their funds here if crowdsale has paased deadline
  // @param (address) _assetAddress =  The address of the asset which didn't reach it's crowdfunding goals
  function refund(address _assetAddress)
  external
  whenNotPaused
  validAsset(_assetAddress)
  afterDeadline(_assetAddress)
  notFinalized(_assetAddress)
  returns (bool) {
    require(database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))) != 0);
    database.deleteUint(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress)));
    ERC20DividendInterface assetToken = ERC20DividendInterface(_assetAddress);
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("crowdsale.fundingToken", _assetAddress))));
    uint refundValue = assetToken.totalSupply(); //token=wei
    fundingToken.approve(_assetAddress, refundValue);
    assetToken.issueDividends(refundValue);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Internal Functions
  //------------------------------------------------------------------------------------------------------------------

  // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator/assetManager can withdraw
  // @dev The contract manager needs to know  the address PlatformDistribution contract
  function payoutERC20(address _assetAddress, uint _amount)
  private
  whenNotPaused
  returns (bool) {
    ERC20 fundingToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("crowdsale.fundingToken", _assetAddress))));
    address operator = database.addressStorage(keccak256(abi.encodePacked("asset.operator", _assetAddress)));
    address platformWallet = database.addressStorage(keccak256(abi.encodePacked("platform.wallet")));
    require(operator != address(0) && platformWallet != address(0));
    uint operatorPortion = _amount.mul(99).div(100);
    uint platformPortion = _amount.sub(operatorPortion);
    fundingToken.transfer(platformWallet, platformPortion);
    fundingToken.transfer(operator, operatorPortion);
    events.transaction('Asset payout', _assetAddress, operator, _amount, '');
    //emit LogAssetPayout(_assetAddress, operator, _amount);
    return true;
  }

  function collectPayment(address user, uint amount, uint max, ERC20 token)
  private
  returns (uint){
    if(amount > max){
      token.transferFrom(user, address(this), max);
      return max;
    } else {
      token.transferFrom(user, address(this), amount);
      return amount;
    }
  }

  /*
  function fundBurn(address _investor, uint _amount, bytes4 _sig, ERC20 _burnToken)
  private
  returns (uint) {
    require(_burnToken.transferFrom(_investor, address(this), _amount), "Transfer failed"); // transfer investors tokens into contract
    uint balanceBefore = _burnToken.balanceOf(this);
    require(burner.burn(address(this), database.uintStorage(keccak256(abi.encodePacked(_sig, address(this)))), address(_burnToken)));
    uint change = _burnToken.balanceOf(this) - balanceBefore;
    return change;
  }
  */

  function convertTokens(address _investor, uint _amount, /*bytes4 _sig,*/ ERC20 _fundingToken, ERC20 _paymentToken, uint _maxTokens)
  private
  returns (uint) {
    //Collect funds
    collectPayment(_investor, _amount, _amount, _paymentToken);
    ( , uint minRate) = kyber.getExpectedRate(address(_paymentToken), address(_fundingToken), 0);
    // Mitigate ERC20 Approve front-running attack, by initially setting
    // allowance to 0
    require(_paymentToken.approve(address(kyber), 0));
    // Approve tokens so network can take them during the swap
    _paymentToken.approve(address(kyber), _amount);
    uint paymentBalanceBefore = _paymentToken.balanceOf(this);
    uint fundingBalanceBefore = _fundingToken.balanceOf(this);
    //Convert remaining funds into the funding token
    kyber.trade(_paymentToken, _amount, _fundingToken, address(this), _maxTokens, minRate, 0);
    // Return any remaining source tokens to user
    uint change = _amount.sub(paymentBalanceBefore.sub(_paymentToken.balanceOf(this)));
    uint investment = _fundingToken.balanceOf(this).sub(fundingBalanceBefore);
    _paymentToken.transfer(_investor, change);
    emit Convert(address(_paymentToken), change, investment);
    return 1;
  }

  // @notice platform owners can recover tokens here
  function recoverTokens(address _erc20Token)
  onlyOwner
  external {
    ERC20 thisToken = ERC20(_erc20Token);
    uint contractBalance = thisToken.balanceOf(address(this));
    thisToken.transfer(msg.sender, contractBalance);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('CrowdsaleERC20 destroyed', address(this), msg.sender, address(this).balance, '');
    //emit LogDestruction(address(this).balance, msg.sender);
    selfdestruct(msg.sender);
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Internal functions
  //------------------------------------------------------------------------------------------------------------------

  // @notice internal function for freeing up storage after crowdsale finishes
  // @param the ID of this asset.
  function finalizeCrowdsale(ERC20DividendInterface _asset, uint _amountToRaise)
  internal
  whenNotPaused
  returns (bool) {
    require(_asset.mint(database.addressStorage(keccak256(abi.encodePacked("contract", "AssetManagerFunds"))), database.uintStorage(keccak256(abi.encodePacked("asset.managerFee", address(_asset))))), "Manager minting failed");
    database.setBool(keccak256(abi.encodePacked("crowdsale.finalized", address(_asset))), true);
    //database.deleteUint(keccak256(abi.encodePacked("asset.managerFee", address(asset))));
    database.deleteUint(keccak256(abi.encodePacked("crowdsale.start", address(_asset))));
    require(_asset.finishMinting(), "Minting not finished");
    require(payoutERC20(address(_asset), _amountToRaise), "Payout failed");          // 1 token = 1 wei
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

  // @notice function won't run if owners have paused this contract
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this)))));
    _;
  }

  // // @notice reverts if investor hasn't approved burner to burn platform token
  // modifier burnRequired {
  //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))));
  //   _;
  // }

  // @notice reverts if the asset does not have a token address set in the database
  modifier validAsset(address _assetAddress) {
    require(database.addressStorage(keccak256(abi.encodePacked("asset.manager", _assetAddress))) != address(0), "Invalid asset");
    _;
  }

  // @notice reverts if the funding deadline has already past
  modifier betweenDeadlines(address _assetAddress) {
    require(now <= database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))), "Past deadline");
    require(now >= database.uintStorage(keccak256(abi.encodePacked("crowdsale.start", _assetAddress))), "Before start time");
    _;
  }

  // @notice reverts if the funding deadline has already past
  modifier afterDeadline(address _assetAddress) {
    require(now > database.uintStorage(keccak256(abi.encodePacked("crowdsale.deadline", _assetAddress))), "Before deadline");
    _;
  }

  // @notice returns true if crowdsale is not finshed
  modifier notFinalized(address _assetAddress) {
    require( !database.boolStorage(keccak256(abi.encodePacked("crowdsale.finalized", _assetAddress))), "Crowdsale finalized");
    _;
  }

  event Convert(address token, uint change, uint investment);
}
