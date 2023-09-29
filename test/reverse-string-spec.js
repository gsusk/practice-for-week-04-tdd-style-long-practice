const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString()', function () {
  it('should return given input as a reversed output', function () {
    const word = 'fun';
    const reversed = reverseString(word);
    expect(reversed).to.be.deep.equal('nuf');
  })

  it('should throw a TypeError when invoked with a non-string argument', function () {
    const callWithNonString = () => {
      reverseString(123);
    };
    expect(callWithNonString).to.throw(TypeError);
  });

})