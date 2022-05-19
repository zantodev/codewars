// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     let vowelsCount = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             vowelsCount++;
//         }
//     }
//     return vowelsCount;
// }
// console.log(getCount("abracadabra"));

// other solution
function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(getCount("abracadabra"));