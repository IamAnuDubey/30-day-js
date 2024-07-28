//DOM Manipulation
//Activity1: Selecting and Manipulating Elements
//Task1: Select an HTML element by its ID and change its text content.
/* function updateText(){
document.getElementById('myParagraph').textContent = "This is the updated text!..";
} */
//another way
function updateText(){
    //select the element by its ID
    let paragraph = document.getElementById('myParagraph');
    // change the text content
    paragraph.textContent = "This is the updated text!..";
}

//Task2: Select an HTML element by its class and change its background color.
function changeColor() {
    let elements = document.getElementsByClassName('myDiv');
    // Loop through all elements with the class 'myDiv' and change their background color
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'blue';
    }
}

//Activity2: Creating and Appending Elements
//Task3: Create a new div element with some text content and append it to the body
function addNewDiv() {
const div = document.createElement("div");
div.textContent = "This is my new div element.";
div.className = 'div';
document.body.appendChild(div);
}

//Task4: Create a new li element and add it to an existing ul list.
function addNewLi() {
    var li = document.createElement("li");
    li.textContent = "pineapple";
    const ul = document.getElementById('list');
    ul.appendChild(li);
}

//Activity3:Removing Elements
// The remove() method removes an element (or node) from the document.
//Task5: Select an HTML element and remove it from the DOM.
function myFunction(){
    const element = document.getElementById("demo");
    element.remove();
}

//Task6: Remove the last child of a specific HTML element.
function myFun(){
    const list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
}

//Activity4: Modifying Attributes and Classes
//Task7: Select an HTML element and change one of its attributes(e.g., src of an img tag).
function myFunc(){
    const img = document.getElementById("myImg");
    img.setAttribute("src", "images/images-1.jpg");
}

//Task8: Add and remove a CSS class to/from an HTML element.
function addHighlightClass() {
    var element = document.getElementById("myParagraphs");
    element.classList.add("highlight");
}
function removeHighlight(){
    var element = document.getElementById("myParagraphs");
    element.classList.remove("highlight");
}

//Activity5: Event Handling
//Task9: Add a click event listener to a button that changes the text content of a paragraph.
const paragraph = document.getElementById('paragraphs');
const button = document.getElementById('myButton');
// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the paragraph
    paragraph.textContent = 'The text has been changed!';
});

//Task10: Add a mouseover event listener to an element that changes its border color.
const element = document.getElementById('myElement');
// Add a mouseover event listener to the element
element.addEventListener('mouseover', () => {
    // Change the border color of the element
    element.style.borderColor = 'red';
});
// Add a mouseout event listener to reset the border color
element.addEventListener('mouseout', () => {
    // Reset the border color of the element
    element.style.borderColor = 'pink';
});
