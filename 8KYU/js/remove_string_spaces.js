// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    return x.split(' ').join('');
}
console.log(noSpace('8 8 8 8 '));