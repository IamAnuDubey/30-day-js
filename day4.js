// Loops
// Activity1: For Loop
// Task1: A program to print numbers from 1 to 10 using a for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}
/*for (let i = 0; i < 5; i++) {
    console.log("Hello World!");
}
*/

// Task2: A program to print the multiplication table of 5 using a for loop 
for( let i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
/*let num = 5;
for( let i= 1; i<= 10; i++){
    console.log(`${num} x ${i} = ${i*num}`);
}*/

// Activity2: While Loop
// Task3: A program to calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0;
let i = 1;
while (i <= 10){
    sum += i;
    i++;
}
console.log('The sum of numbers from 1 to 10 is', sum);

// Task4: A program to print numbers from 10 to 1 using a while loop
let a = 10;
while(a > 0){
console.log(a);
a--;
}

// Activity3: Do.. While Loop
// Task5: A program to print numbers from 1 to 5 using a do..while loop
let b = 1;
do {
    console.log('The number is', b);
    b++;
} while(b <= 5);

// Task6: A program to calculate the factorial of a number using a do...while loop
let number = 6;
let factorial = 1;
let j = 1;
do{
    factorial *= j;
    j++;
} while( j <= number);
console.log(`The factorial of a ${number} is: ${factorial}`)

// Activity4: Nested Loops
// Task7: A program to to print a pattern using nested for loops
let rows = 5;
for(let i = 1; i <= rows; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "* ";
    }
    console.log(pattern);
}
/* to reverse the above pattern
let rows = 5;
for(let i = rows; i >= 1; i--){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "* ";
    }
    console.log(pattern);
}*/
// Activity5: Loop Control Statements
// Task8: A program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
console.log(i);
}

// Task9: A program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i = 1; i <= 10; i++){
    if (i === 7){
        break;
    }
console.log(i);
}