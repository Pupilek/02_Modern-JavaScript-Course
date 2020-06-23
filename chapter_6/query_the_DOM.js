console.log("Another methods for querying the DOM");

// 1. Grab an element by ID
const title = document.getElementById('page-title');

console.log(title);

//2. Get the elements by their class name 

const title2 = document.getElementsByClassName('error');

console.log(title2);

//title2.forEach(er =>console.log(er));

//3. Get the elements by their tag name

const tagNames = document.getElementsByTagName('p');
let arr = Array.prototype.slice.call(tagNames);
arr.forEach(ar =>console.log(ar));