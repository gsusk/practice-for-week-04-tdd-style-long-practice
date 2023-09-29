const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe(`returnsThree()`, function () {
  it('returns the number 3', function () {
    let number = returnsThree();
    expect(number).to.deep.equal(3);
  })
})

describe('reciprocal()', function () {
  context('if the argument is valid', function () {
    it('should intake a number and then return the reciprocal of that number', () => {
      const recipOne = reciprocal(4);
      expect(recipOne).to.be.equal(1 / 4);

      const recipTwo = reciprocal(7 / 3);
      expect(recipTwo).to.be.equal(3 / 7);

      const recipThree = reciprocal(122);
      expect(recipThree).to.be.equal(1 / 122)
    });
  })

  context('if arguments are invalid', function () {
    it('should only take numbers between 1 and 1,000,000', function () {
      const invalidNum = () => {
        reciprocal(0)
      }
      expect(invalidNum).to.throw(RangeError);

      const invalidNumTwo = () => {
        reciprocal(1000001)
      }

      expect(invalidNumTwo).to.throw(RangeError);
    })

    it('should throw TypeError if input not a number', function () {
      expect(() => reciprocal('test')).to.throw(TypeError);
    });
  })
});