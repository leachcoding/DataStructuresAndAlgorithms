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
