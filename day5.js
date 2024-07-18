// Functions
// Activity1: Function declaration
// Task1: A function to check if a number is even or odd 
function isEvenOrOdd(x){
    if(x % 2 === 0){
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}
isEvenOrOdd(66);

// Task2: A function to calculate the square of a number and return the result
function isSquare(y){
    console.log(y * y);
}
isSquare(4);
/* function square(y){
return y*y;
}
const y = 10;
const result = square(y);
console.log(`The square of ${y} is ${result}`);
*/

// Activity2: Function Expression
// Task3: A Function Expression to find the maximum of two numbers
const findMax = function(a, b){
 return (a > b)? a: b;
}
const a = 7;
const b = 5;
const result = findMax(a, b);
console.log(`The maximum of ${a} and ${b} is ${result}`);
/*
function max(a, b){
if(a > b){
console.log("maximum among two numbers is", a);
} else {
 console.log("maximum among two numbers is", b);
}
}
max(10, 40);
*/

// Task4: A Function Expression to Concatenate two strings and return the result
const concat = function(str1, str2){
    return str1 + str2;
}
const str1 = "Anu";
const str2 = "Dubey"
const str = concat(str1, str2);
console.log(`The concatenate string is ${str}`);
/* function concat(a, b){
c = a + b;
console.log("The Concatenated string is", c);
}
concat("Anu", "Dubey");
*/

// Activity3: Arrow Functions
// Task5: An arrow Function to calculate the sum of two numbers and return the result
const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 3));
/*
const sum = (a, b) => a + b;
console.log(sum(2, 2));
*/

// Task6: An arrow Function to check if a string contains a specific character and return a boolean value
const string = (str, char) => {
    return str.includes(char);
}
console.log(string("hello", "o"));

// Activity4: Function Parameters and Default Values
// Task7: A function that takes two parameters and returns their product. Provide a default value for a second parameter
function myFunc(x, y = 10){
    return x * y;
}
console.log(myFunc(5));
// another example area of a triangle
const triangleArea = (base, height) => 1/2 * base * height;
console.log(triangleArea(4, 5));

// Task8: A function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const person = (name, age = 25) => `Hello ${name}, you're ${age} and rocking it!`;
console.log(person("Anu"));

// Activity5: Higher-Order Functions
// Task9: A higher-order function that takes a function and a number, and calls the function that many times.
const repeatFunction = (func, times) => {
    for( let i =0; i< times; i++){
        func();
    }
};
const sayHello = () => console.log("Hello!..");
repeatFunction(sayHello, 5);
// Task10: A higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
const func = (func1, func2, value) => func2(func1(value));
const add1 = (x) => x + 2;
const add2 = (x) => x * 2;
const answer = func(add1, add2, 3); 
console.log(answer); // (3+2) * 2 = 10





