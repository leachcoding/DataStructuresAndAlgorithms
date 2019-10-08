// Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.

function reverseString(str) {
  splitString = str.split("");
  reverseArray = splitString.reverse();
  joinString = splitString.join("");
  return joinString;
}
