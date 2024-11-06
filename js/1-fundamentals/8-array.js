
const numbers = [7,3,45,23,46,75,32,24,87,94];

let val;

// Get the array length
val = numbers.length;

// Check if it is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];

// Change the array index value
// val = numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(7); // if array match is return the index else it return -1

// Mutating array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off the end
// numbers.pop();
// numbers.pop();
// numbers.pop();

// Take off from the front
// numbers.shift();
// numbers.shift();
// numbers.shift();

const fruits = ["Apple", "Orange", "Kiwi", "Lemon"];

// Splice helps to remove and add

// Splice to remove
// val = fruits.splice(1,2);
// val = fruits.splice(1, 0);

// Splice to add
// val = fruits.splice(2,0,"grapes");

console.log(numbers);

// Reverse the array
val = numbers.reverse();



console.log(val);
