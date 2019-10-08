// Good morning! Write a function that takes an array of strings and return the longest string in the array.

function longestString(arr) {
  let length = 0;
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
  console.log(longest);
}


// v1.0 for loop
// function longestString(arr) {
// 	let result = '';
// 	for(let index = 0; index < arr.length; index++) {
// 	  let currentItem = arr[index];
// 		if(currentItem.length > result.length) {
// 			result = arr[index];
// 		}
// 	}
// 	return result;
// }


// // v1.1 for loop, declaring variables first
// function longestString(arr) {
// 	let currentItem, index, result = '';
// 	for(index = 0; index < arr.length; index++) {
// 	  currentItem = arr[index];
// 		if(currentItem.length > result.length) {
// 			result = arr[index];
// 		}
// 	}
// 	return result;
// }
