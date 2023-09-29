module.exports = function reverseString(string) {
  let reversed = string.split('').reverse().join('');
  return reversed;
};