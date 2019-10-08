// Good morning! Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

}



// // v1.0
// function reverseNumber (num) {
//   let str = num.toString();
//   let len = str.length;
//   let reversed = '';
//   for (let i = len; i > 0; i--) {
//     reversed += str[i - 1];
//   }
//   let result = Number(reversed);
//   return result;
// }

// // v2.0
// function reverseNumber (num) {
//   // console.log(num);
//   let string = num.toString();
//   // console.log(string);
//   // console.log(typeof(string));
//   let arr = string.split('');
//   // console.log(arr);
//   let reverse = arr.reverse();
//   // console.log(reverse);
//   let join = reverse.join('');
//   // console.log(join);
//   let result = Number(join);
//   return result;
// }

// // v3.0 Number()
// function reverseNumber (num) {
//   return Number(num
//     .toString()
//     .split('')
//     .reverse()
//     .join(''));
// }

// // v4.0 parseInt()
// function reverseNumber(num) {
//   return parseInt(num
//     .toString()
//     .split('')
//     .reverse()
//     .join(''));
// }

// // v5.0 Arithmetic Operators *=, +=, -=, /= and % (modulo operator)
// function reverseNumber(num) {
//   let number = num;
//   let reversed = 0;
//   while (number !== 0) {
//     reversed *= 10;
//     reversed += number % 10;
//     number -= number % 10;
//     number /= 10;
//     // console.log(`reversed: ${reversed}, number: ${number}`);
//   }
//   return reversed;
// }

// // v5.1
// function reverseNumber(num) {
//   const arr = [];
//   // This takes numbers from right to left on the num variable
//   while (num > 0) {
//     arr.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   return Number(arr.join(''));
// }
