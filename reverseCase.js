// Good morning! Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

function reverseCase(str) {
  var output = '';
  var code = '';

  for(var i=0,len=str.length-1; i<=len; i++){
       code = str.charCodeAt(i);
      if(code >= 65 && code <= 90){
          output+=str.charAt(i).toLowerCase();
       }else if(code >=97 && code <= 122){
          output+=str.charAt(i).toUpperCase();
      }else{
          output+=str.charAt(i);
      }
  }
  return output;
}


// v1.0
// function reverseCase(str) {
//   let result = '';
//   const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//   const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   for (let i = 0; i < str.length; i++) {
//     if (lowerCase.includes(str[i])) {
//       for (let j = 0; j < lowerCase.length; j++) {
//         if (str[i] === lowerCase[j]) {
//           result += upperCase[j];
//         }
//       }
//     } else if (upperCase.includes(str[i])) {
//       for (let k = 0; k < upperCase.length; k++) {
//         if (str[i] === upperCase[k]) {
//           result += lowerCase[k];
//         }
//       }
//     } else result += str[i];
//   }
//   return result;
// }

// // v2.0 .toUpperCase() & .toLowerCase()
// // .split(), .forEach(), .join()
// function reverseCase(str) {
//   const charArr = str.split('');
//   charArr.forEach(function(char, i) {
//     if (char.toUpperCase() === char) {
//       charArr[i] = char.toLowerCase();
//     } else {
//       charArr[i] = char.toUpperCase();
//     }
//   });
//   const joined = charArr.join('');
//   return joined;
// }

// // v2.1 ES6 version
// const reverseCase = (str) => {
//   const charArr = str.split('');
//   charArr.forEach(function(char, i) {
//     if (char.toUpperCase() === char) {
//       charArr[i] = char.toLowerCase();
//     } else {
//       charArr[i] = char.toUpperCase();
//     }
//   });
//   return charArr.join('');
// };

// // v3.0 "dot chaining" .split(), .map(), .join()
// // just return it!
// function reverseCase(str) {
//   return str
//     .split('')
//     .map(function(char) {
//       if (char.toUpperCase() === char) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join('');
// }

// // v3.1 ES6 dot chaining
// const reverseCase = (str) => {
//   return str
//     .split('')
//     .map((char) => {
//       if (char.toUpperCase() === char) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join('');
// };

// // v4.0 ES5 Conditional Ternary Operator
// function reverseCase(str) {
//   return str
//     .split('')
//     .map(function(char) {
//       return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
//     })
//     .join('');
// }

// // v4.1 ES6
// const reverseCase = str => {
//   return str.split('')
//     .map(char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase())
//     .join('');
// };

// // v5.0 Regular Expressions ES5
// function reverseCase(str) {
//     let result = '', i;
//     for (i = 0; i < str.length; i++){
//        if (/[A-Z]/.test(str[i])) {
//          result += str[i].toLowerCase();
//        } else {
//          result += str[i].toUpperCase();
//        }
//     }
//     return result;
// }

// // v5.1 Regular Expressions ES6
// const reverseCase = (str) => {
//     let result = '', i;
//     for (i = 0; i < str.length; i++){
//        if (/[A-Z]/.test(str[i])) {
//          result += str[i].toLowerCase();
//        } else {
//          result += str[i].toUpperCase();
//        }
//     }
//     return result;
// };

// // v5.2 ES6 Regex and dot chaining
// function reverseCase(str) {
//     return str
//         .split('')
//         .map( el => {
//         return /[A-Z]/.test(el) ?
//           el.toLowerCase():el.toUpperCase();
//             })
//         .join('');
// }

// // v5.3
// function reverseCase(str) {
//   return str.split('').map((char) => {
//     return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
//   }).join('');
// }

const string = 'HELLO world!';
console.log(reverseCase(string)); // <--- hello WORLD!
