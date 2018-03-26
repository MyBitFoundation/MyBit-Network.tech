const HelloCoverage = artifacts.require("./HelloCoverage.sol");

contract('Test coverage example', async (accounts) => {
  let hInstance;

  it("create instance", async () => {
    hInstance = await HelloCoverage.new({from:web3.eth.coinbase});
  });

  it('Check original value', async () => {
    assert.equal(await hInstance.uintValue(),10,'UintValue == 10');
  });

  it('update original value', async () => {
    await hInstance.updateUintValue(15);
    assert.equal(await hInstance.uintValue(),15,'UintValue == 15');
  });
});
