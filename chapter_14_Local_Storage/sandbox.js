
// //1. store data in local storage
// localStorage.setItem('name', 'mario');
// localStorage.setItem('age', '50');


// //2. Get data from local storage

// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

// //3.Updating data

// localStorage.setItem('name', 'shaun');
// localStorage.age= '40';
// name = localStorage.getItem('name');
// age = localStorage.getItem('age');
// console.log(name, age);

// //4.Deleting data from localStorage

// //remove 1 item
// //localStorage.removeItem('name');

// //remove all items;

// localStorage.clear();

//5 stringifying & parsing data

const todos = [
  {text:'play mariokart', author: 'shaun'},
  {text:'buy some milk', author: 'mario'},
  {text:'buy some bread', author: 'luigi'},
];

//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));