
// FIND THE SMALLEST INTEGER IN ARRAY
// Given an array of integers your solution should find the smallest integer. For example: [34, 15, 88, 2] should return 2
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
console.log(new SmallestIntegerFinder().findSmallestInt([34, 15, 88, 2]));
