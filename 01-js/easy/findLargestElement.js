/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let a = numbers[0]
    for(i =0; i<numbers.length; i++) {
        if(a<numbers[i]){
            a=numbers[i]
        }
    }
    return a 
}

// let input= [3, 7, 2, 9, 1]

// ans = findLargestElement(input);
// console.log(ans)

module.exports = findLargestElement;