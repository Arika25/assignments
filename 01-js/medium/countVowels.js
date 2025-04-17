/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    strarray = str.toLowerCase().split('');
    count =0;
    vowels = ['a', 'e', 'i', 'o','u']
    for (i=0; i<strarray.length; i++) {
      for ( j=0; j<vowels.length; j++){
        if(strarray[i]==vowels[j]){
          j=vowels.length;
          isVowel=true
        } else {
          isVowel = false;
        }
      }
      if(isVowel){
        count++;
      }
    }
    return count;
}

// let input= 'sargam'
// ans = countVowels(input)
// console.log(ans)

module.exports = countVowels;