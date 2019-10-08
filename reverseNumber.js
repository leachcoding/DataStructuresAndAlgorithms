// Good morning! Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

}
