// Variables and Data Types

// Activity1: Variable Declaration
// Task1: Declare a variable using var
var age = 25;
console.log(age);

// Task2: Declare a variable using let
let name = "Anuj";
console.log(`Age of Anuj is :${name}`);

// Activity2: Constant Declaration
// Task3: Declare a variable using const
const isLogged = true;
console.log(isLogged);

// Activity3: Data Types
// Task4: Create a variables of different data types
let num = 25; // Number datatype
let stdname = "Anu" // String datatype
let result = true; // Boolean datatype

let book = {
   title: "Rage of Angels",
   published: 1960,
   author: "Sidney Sheldon",
   genre: "Fiction",
}; //Object datatype

let fruits = ["apple", "banana", "orange", "mango"]; //array 

console.log(typeof num);
console.log(typeof stdname);
console.log(typeof result);
console.log(typeof book);
console.log(typeof fruits);

// Activity4: Reassigning variables
// Task5: Declare a variable using let 
let  favFood = "pasta";
console.log(favFood);
favFood = "noodles";
console.log(favFood);

// Activity5: Understanding Const 
// Task6: Try reassigning a variable declared with const and observe the error
const Date = 14;
console.log(Date);
Date = 15; 
console.log(Date); //TypeError: Assignment to constant variable.