// Arrays
// Activity1: Array Creation and Access
// Task1: Create an Array of numbers from 1 to 5 
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task2: Access the first and last elements of the array
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity2: Array Methods(Basic)
// Task3: Use the push method to add a new number to the end of the array 
arr.push(8); //adds a new number at the end
console.log(arr);

// Task4: Use the pop method to remove the last element from the array 
arr.pop() // removes the last element 
console.log(arr);

// Task5: Use the shift method to remove the first element from the array
arr.shift() // removes the 1st element
console.log(arr);

// Task6: Use the unshift method to add a new number to the beginning of the array
arr.unshift(7); //adds a new number at starting
console.log(arr);

// Activity3: Array Methods(Intermediate)
// Task7: Use the map method to create a new array where each number is doubled and log the new array
const number = [2, 4, 6, 8, 10];
const doubledNumber = number.map(num => num*2);
console.log(doubledNumber);
// another example
const celsiusTemperatures = [0, 10, 20, 30];
const fahrenheitTemperatures = celsiusTemperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheitTemperatures);
//another example
const string = ["hello", "world", "javascript"];
const uppercaseStrings = string.map(str => str.toUpperCase());
console.log(uppercaseStrings);

// Task8: Use the filter method to create a new array with only even numbers and log the new array
const array = [1, 2, 3, 4, 5];
const newArr = array.filter(number => number % 2 == 0);
console.log(newArr);
//another example  Filtering Strings Longer Than 3 Characters
let strings = ["cat", "dog", "elephant", "rat", "bat"];
const longStrings = strings.filter(str => str.length > 3);
console.log(longStrings);
//another example Filtering Words Containing a Specific Letter
const words = ["apple", "banana", "cherry", "date"];
const wordsWithA = words.filter(word => word.includes('a'));
console.log(wordsWithA);

// Task9: Use the reduce method to calculate the sum of all numbers in the array and log the result
const numbers = [2, 7, 9, 6, 17, 1];
const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sum);
// another example Finding the Product of All Numbers in an Array
const nums = [1, 2, 3, 4, 5];
const product = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product);

// Activity4: Array Iteration
// Task10: Use a for loop to iterate over the array and log each element to the console.
const numb = [4, 8, 12, 16, 20, 24];
for(let i = 0; i < numb.length; i++){
    console.log(numb[i]);
}
// Task11: Use the forEach method to iterate over the array and log each element to the console
numb.forEach(number => {
    console.log(number);
});
//another example Logging Each String in an Array
const fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach(fruit => {
    console.log(fruit);
});
//another example Logging Each Object's Property in an Array of Objects 
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old`);
});
// Activity5: Multi-dimensional Arrays
// Task12: Create a two-dimensional array(matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);
// Task13: Access and log specific element from the two-dimensional array.
console.log(matrix[1][2]);
// another way to access 
//  Accessing and Logging All Elements in a Specific Row
const rowIndex = 1;
const row = matrix[rowIndex];
console.log(row);
//Accessing and Logging All Elements in a Specific Column
const colIndex = 2; 
matrix.forEach(row => {
    console.log(row[colIndex]);
});
// another way to access col is 
// const colIndex = 2; 
console.log(matrix[0][2]); // we can also write console.log(matrix[0][colIndex]);
console.log(matrix[1][2]); 
console.log(matrix[2][2]); 