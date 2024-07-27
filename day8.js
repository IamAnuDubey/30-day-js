// ES6+ Features

// Activity1: Template Literals
// Template literals provide a more concise and flexible way to create strings in JavaScript. This makes it easier to concatenate variables and strings without the need for string concatenation operators (+). 
// JavaScript that allow for easier string interpolation and multi-line strings.
// Task1: Use Template Literals to create a string that includes variables for a person's name and age, and log the string to the console.
const person = "Anu";
const age = 25;
const message = `My name is ${person} and my age is ${age}`;
console.log(message);

// Task2: Create a multi-line string using template literals and log it to the console.
const string = `Template literals in JavaScript are enclosed by backticks and allow for embedded expressions using $expression syntax.
They make it easy to create strings that include variables and expressions.`
console.log(string);

// Activity2: Destructuring
// Array Destructuring: It allows you to extract values from arrays and assign them to variables in a concise and readable way
// Task3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array = [10,20,30,40];
const [x,y] = array;
console.log(x);
console.log(y);
// another example
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

//Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.
// Task4: Use object destructuring to extract the title and author from the book object and log them to the console
const book = {
title: "Bloodline",
author: "sidney sheldon",
};
const {title, author} = book;
console.log(title);
console.log(author);

// Activity3: Spread and Rest Operators
// The spread operator (...) in JavaScript is a powerful tool that allows you to spread elements of an array or properties of an object into another array or object. It can be used in a variety of contexts, such as copying arrays or objects, combining arrays or objects, and passing arguments to functions.
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. The spread operator is often used in combination with destructuring.
// Task5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];
const newArray = [...originalArray, ...additionalElements];
console.log(newArray);
// another example related to spread operator to combine objects 
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);
//Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

// Task6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
//The rest operator in JavaScript, represented by three dots (...), allows you to gather the remaining elements of an array or object into a single variable. When used in function parameters, it enables a function to accept an indefinite number of arguments as an array. This operator is very useful for functions where the number of arguments is not predetermined.
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3));  
console.log(sum(1, 2, 3, 4, 5));
console.log(sum());
// In the above example, ...numbers is the rest parameter that collects all additional arguments passed to the sum function into an array called numbers.

// Activity4: Default Parameters
// Task7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. 
//Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
// Syntax
//function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
//}
function product(a,b=1)
{
    return a * b;
}
console.log(product(4));
console.log(product(4,5));

// Activity5: Enhanced Object Literals
//Enhanced object literals are a feature introduced in ECMAScript 6 (ES6) that simplify the syntax for creating and managing objects in JavaScript. They provide shorthand syntax for defining properties, methods, and computed property names in object literals.
// Task8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = "anu";
const personAge = 25;
const about = {
 name,
 personAge,
 greet(){
    console.log(`Hello, my name is ${this.name} and my age is ${this.personAge}`);
 }
}
console.log(about);
about.greet();

// Task9: Create an object with computed property names based on variables and log the object to the console.
const names = "make";
const car = {
    [names]: "suv"
}
console.log(car[names]);