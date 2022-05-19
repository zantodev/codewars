//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num) {
    return (num * (num + 1)) / 2;
}
console.log(summation(8));

//other solution
//const summation = num => (num * (num + 1)) / 2;