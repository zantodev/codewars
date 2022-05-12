

// CASE 
// -----> Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. <----

// function boolToWord( bool ){
//     if( bool === true ){
//       return 'Yes'
//       } else {
//         return 'No'
//       } 
//     }


// REVERSED STRINGS

// ----> Complete the solution so that it reverses the string passed into it. <----

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function reverseString(str) {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }


// SUM OF POSITVE

// ----> You get an array of numbers, return the sum of all of the positives ones. <----

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     return arr.reduce((acc, c) => c > 0 ? acc + c : acc, 0);
// }
// console.log(positiveSum([1, -4, 7, 12]));


// RETURN NEGATIVE

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//     return num < 0 ? num : -num;
// }
// console.log(makeNegative(1));


// STRING REPEAT

// Write a function called repeatStr which repeats the given string string exactly n times.

// function repeatStr(n, s) {
//     return s.repeat(n);
// }
// console.log(repeatStr(6, 'I'));


// REMOVE FIRST AND LAST CHARACTER

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//     return str.slice(1, -1);
// }
// console.log(removeChar('world'));


// FIND THE SMALLEST INTEGER IN ARRAY
// Given an array of integers your solution should find the smallest integer. For example: [34, 15, 88, 2] should return 2
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
console.log(new SmallestIntegerFinder().findSmallestInt([34, 15, 88, 2]));
