function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (isNaN(n)) {
    throw new TypeError('Must be a number')
  }

  if (n < 1 || n > 1000000) {
    throw new RangeError('Cant be less than 1 or greater than 1,000,000');
  }

  let reciprocalNumber = 1 / n;
  return reciprocalNumber;
}

module.exports = {
  returnsThree,
  reciprocal
};