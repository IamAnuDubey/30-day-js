// Objects
// Activity1: Object Creation and Access
// Task1: Create an object representing a book with properties like title, author, and year
const book = {
    title: "Rage of Angels",
    author: "Sidney Sheldon",
    year: 1960,
 };
 console.log(book);

// Task2: Access and log the title and author properties of the book object.
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);

// Activity2: Object Methods
// Task3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book1 = {
    title: "Rage of Angels",
    author: "Sidney Sheldon",
    year: 1960,
    getTitleAndAuthor(){
        return `${this.title} by ${this.author}`;
    }
 };
 console.log(book1.getTitleAndAuthor());

// Task4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const book2 = {
    title: "Rage of Angels",
    author: "Sidney Sheldon",
    year: 1960,
    updateYear(newYear){
      this.year = newYear;
    },
 };
 book2.updateYear(2015);
console.log(book2);

// Activity3: Nested Objects
// Task5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.
const library = {
    name: "Library",
    books : [ 
        {
        title: "Rage of Angels",
        author: "Sidney Sheldon",
        year: 1960,
     },
     {
        title: "Bloodline",
        author: "Sidney Sheldon",
        year: 1980,
     },
     {
        title: "Great Expectations",
        author: "Charles Dickens",
        year: 1967,
     },
     {
        title: "Peter Pan",
        author: "J.M. Barrie",
        year: 1961, 
     }
    ]
};
console.log(library);

// Task6: Access and log the name of the library and the titles of all the books in the library
console.log(library.name);
library.books.forEach(book => console.log(book.title));

// Activity4: The this Keyword
//Task7: Add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method
let book3  = {
   title: "Rage of Angels",
   author: "Sidney Sheldon",
   year: 1960,
   getTitleAndYear: function() {
       return `${this.title} ${this.year}`;
   }
};
console.log(book3.getTitleAndYear());

// Activity5: Object Iteration 
//Task8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
const book4 = {
   title: "Rage of Angels",
   author: "Sidney Sheldon",
   year: 1960,
};
/* Syntax
for (variable in object)
  statement
*/ 
for(const property in book4){
   console.log(`${property}: ${book4[property]}`);
}
//Task9: Use Object.keys and Object.values methods to log all the keys and values of the book object
//syntax: Object.keys(obj)
console.log("Keys:", Object.keys(book4));
//syntax: Object.values(obj)
console.log("Values:", Object.values(book4));