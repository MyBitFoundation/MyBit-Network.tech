var bn = require('bignumber.js');

const SafeMath = artifacts.require("./math/SafeMathWrapper.sol");

contract('SafeMath', async() => {
    let sf;

    it('Deploy SafeMath', async() => {
      sf = await SafeMath.new();
    });

    it('Test multiply', async() => {
      let total = await sf.multiply(10, 10);
      assert.equal(total, 100);
    });

    it('Test multiply by 0', async() => {
      let total = await sf.multiply(0, 10);
      assert.equal(total, 0);
    });

    it('Test multiply overflow', async() => {
      let err;
      try{
        await sf.multiply(Math.pow(2, 128), Math.pow(2, 128));
      } catch(e){
        err = e;
      }
      assert.notEqual(err, undefined);
    });

    it('Test divide', async() => {
      let total = await sf.divide(100, 10);
      assert.equal(total, 10);
    });

    it('Test subtract', async() => {
      let total = await sf.subtract(100, 50);
      assert.equal(total, 50);
    });

    it('Test subtract negative', async() => {
      let err;
      try{
        await sf.subtract(50, 100);
      } catch(e){
        err = e;
      }
      assert.notEqual(err, undefined);
    })

    it('Test add', async() => {
      let total = await sf.addto(50, 50);
      assert.equal(total, 100);
    });

    it('Test add overflow', async() => {
      let err;
      try{
        await sf.addto(Math.pow(2, 260), Math.pow(2, 260));
      } catch(e){
        err = e;
      }
      assert.notEqual(err, undefined);
    });
});
