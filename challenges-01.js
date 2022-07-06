"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78

function findMax(arr) {
  let i;
 
  let max = arr[0];

  for (i = 1; i < arr.length; i++) {
      if (arr[i] > max)
          max = arr[i];
  }
   
return max;
}

let arr = [12, 32, 22, 45, 78, 12, 50];
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
function sumNums(arr){
let Sum_Nums = 0;
let x = 0;
for (var i = 0; i < arr.length; i++) {
x = arr[i]
if ( x + x == 2 * x) {
  Sum_Nums = Sum_Nums + x;
  } 
}
return Sum_Nums;
}

// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };
