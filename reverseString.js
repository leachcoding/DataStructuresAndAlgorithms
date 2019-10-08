// Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.

function reverseString(str) {
  splitString = str.split("");
  reverseArray = splitString.reverse();
  joinString = splitString.join("");
  return joinString;
}


// v1.0
// function reverseString(str) {
//   return str.split('').reverse().join()
//   // let len = str.length;
//   // let reversed = '';
//   // for (let i = len; i > 0; i--) {
//   //   reversed += str[i - 1];
//   // }
//   // return reversed;
// }

// // v1.1
// function reverseString(str) {
//   let len = str.length;
//   let reversed = '';
//   for (let i = len - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// // v2.0 using an array
// function reverseString(str) {
//   let len = str.length;
//   let arr = [];
//   for (let i = len; i > 0; i--) {
//     arr.push(str[i - 1]);
//   }
//   let reversed = '';
//   for (let j = 0; j < arr.length; j++) {
//     reversed += arr[j];
//   }
//   return reversed;
// }

// // v2.2 using JavaScript methods
// function reverseString(str) {
//   let split =  str.split('');
//   let reversed = split.reverse();
//   let joined = reversed.join('');
//   return joined;
// }

// // v2.3 dot chaining methods & returning their evaluation
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// // v2.4 ES6 style
// const reverseString = (str) => {
//   return str.split('').reverse().join('');
// };
