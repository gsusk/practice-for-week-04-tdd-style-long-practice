const chai = require('chai');
const spies = require('chai-spies');
const myMap = require('../problems/my-map');

const expect = chai.expect;
chai.use(spies);


let arr;
let callback;

beforeEach(() => {
  cb = (el) => el * 2;
  arr = new Array(2, 3, 5, 6, 1);
})

describe('myMap() func', () => {
  it('should return a newArray based on the cb', () => {
    expect(myMap(arr, cb)).to.eql([4, 6, 10, 12, 2])
  })

  it('should not mutate the original array', () => {
    let newArray = myMap(arr, cb);
    expect(newArray).to.eql([4, 6, 10, 12, 2]);
    expect(arr).to.eql([2, 3, 5, 6, 1])
  })

  it('doesnt not call the built in Array.map()', () => {
    const spy = chai.spy.on(arr, 'map');
    const newArr = myMap(arr, cb);
    expect(spy).to.have.not.been.called();
  })

  it('should call the passed-in callback function', () => {
    const spy = chai.spy(cb);
    const newArr = myMap(arr, spy);
    expect(spy).to.have.been.called.exactly(arr.length);
  })

  context('if the arr its empty', () => {
    it('should return an empty array', () => {
      expect(myMap([], cb)).to.eql([]);
    })
  })

  context('if the arg its not an array or cb not a function', () => {
    it('returns typeError', () => {
      expect(() => myMap(null, cb)).to.throw(TypeError);
      expect(() => myMap(arr, null)).to.throw(TypeError);
    })
  })
})
