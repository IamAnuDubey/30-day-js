// Control Structures
// Activity1: If-Else Statements
// Task1: A program to check if a number is positive, negative or zero
let num = 10;
if(num > 0){
console.log("Number is Positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is Zero");
}

// Task2: A program to check if a person is eligible to vote(age>=18)
let age = 20;
if(age >= 18){
    console.log("Person is eligible to vote");
} else {
    console.log("Person is not eligible to vote");
}

// Activity2: Nested If-Else Statements
// Task3: A program to find the largest of three numbers using nested if else statement
let num1 = 10;
let num2 = 30;
let num3 = 15;
if (num1 >= num2){
    if (num1 >= num3){
        console.log(num1 + "is largest");
    } else {
        console.log(num3 + "is largest");
    }
} else {
    if(num2 >= num3){
        console.log(num2 + "is largest");
    } else {
        console.log(num3 + "is largest");
    }
}
/* using if-else
if(num1 >= num2 && num1 >= num3){
console.log(num1 + "is largest");
} else if(num2 >= num3 && num2 >= num1){
 console.log(num2 + "is largest");
} else {
console.log(num3 + "is largest");
}
*/

// Activity3: Switch Case
// Task4: A program that uses a switch case to determine a day of the week based on a number 1-7
let day = 3;
switch(day){
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log("Please enter a valid day of a week");
}

// Task5: A program that uses a switch case to assign a grade based on the score
let score = 70;
switch(true){
    case score >= 90:
        console.log("A Grade");
        break;
    case score >= 80:
        console.log("B Grade");
        break;
    case score >= 70:
        console.log("C Grade");
        break;
    case score >= 60:
        console.log("D Grade");
        break;
    case score >= 50:
        console.log("E Grade");
        break;
    default:
        console.log("Fail");
        break;
}

// Activity4: Conditional (Ternary) Operator
// Task6: A program that uses the ternary operator to check if a number is even or odd
let number = 40;
let result = (number % 2 == 0)? "Even" : "Odd";
console.log("The number is " + result);
//let result = (number / 2 == 0)? console.log("Even") : console.log("Odd");

// Activity5: Combining Conditions
// Task7: A program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400)
let year = 2022;
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(year + " is a leap year");
} else (
    console.log(year + " is not a leap year")
)