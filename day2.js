// Operators
// Activity1: Arithmetic operators
// Task1: A program to add two numbers
let a = 10;
let b = 20;
let sum =  a + b;
console.log(sum);

// Task2: A program to subtract two numbers
let sub = a - b;
console.log(sub);

// Task3: A program to multiply two numbers
let mul = a * b;
console.log(mul);

// Task4: A program to divide two numbers
let div = a / b;
console.log(div);

// Task5: A program to find remainder when one number is divided by another
let mod = a % b;
console.log(mod);

//Activity2: Assignment Operators
// Task6: Use += operator to add a number to variable
let num = 20;
num += 10;
console.log(num);

// Task7: Use -= operator to subtract a number from a variable
let num1 = 40;
num1 -= 7;
console.log(num1);
/* let savings = 1000;
let expenses = 600;
//saving -= expenses
console.log(saving);
let total = (saving -= expenses);
console.log(total); */

//Activity3: Comparison Operator
// Task8: A program to compare to numbers using > and <
let mathsMarks = 85;
let scienceMarks = 90;
if (mathsMarks > scienceMarks){
    console.log("Marks secured in maths is greater");
} else {
    console.log("Marks secured in science is greater");
}
// less < than operator
if(mathsMarks < scienceMarks){
    console.log("Marks secured in maths is greater");
} else {
    console.log("Marks secured in science is greater");
}

// Task9: A program to compare to numbers using >= and <=
let std1 = 70;
let std2 = 90;
if (std1 >= std2){
 console.log("student1 secured more marks than student2");
} else {
    console.log("student2 secured more marks than student1");
}
// <= less than equal to operator
if (std1 <= std2){
    console.log("student1 secured more marks than student2");
   } else {
       console.log("student2 secured more marks than student1");
   }

// Task10: A program to compare two numbers using == and ===
let x = '5';
let y = 5;
if (x == y){
    console.log("Both values are equal");
} else{
    console.log("Both values are not equal");
}
// using ===
if(x === y){
    console.log("Both values are equal");
} else {
    console.log("Both values are not equal");
}

// Activity4: Logical Operators
// Task11: A program that uses && operator to combine two conditions
let age = 24;
let hasDrivingLicense = false;
if(age >= 18 && hasDrivingLicense){
    console.log("you are allowed to drive");
} else {
    console.log("you are not allowed to drive");
}
/* */ 
// Task12: A program that uses || operator to combine two conditions
let isStudent = true;
let hasStudentId = false;
if (isStudent || hasStudentId){
console.log("You can get a student pass");
} else {
    console.log("you cannot get a student pass");
}
// Task13: A program that uses ! operator to negate a conditions
let isRaining = true;
if(!isRaining){
    console.log("It's not raining");
} else{
    console.log("It's raining");
}
//Activity5: Ternary Operator
// Task14: A program that uses the ternary operator to check if a number is positive or negative
let number = -10;
let result = number > 0 ? "Positive Number" : "Negative Number";
console.log(result);
/* 
let number = 10;
console.log(number > 0 ? "positive" : "negative");
*/
/* let number = 10;
number >= 12? console.log("positive") : console.log("negative");
*/