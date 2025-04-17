/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  strarray = str.toLowerCase().split('');
  reversearray= [];
  for(i=strarray.length-1;i>=0; i--) {
    reversearray[strarray.length-i-1] = strarray[i];
  }
  reverse=reversearray.join('');
  if(str.toLowerCase().replace(/[^\w]|_/g,'')==reverse.toLowerCase().replace(/[^\w]|_/g,'')) {
    return true;
  } else {
    return false;
  }
  
}

// let str = "namaN"
// ans = isPalindrome(str);
// console.log(ans)
module.exports = isPalindrome;
