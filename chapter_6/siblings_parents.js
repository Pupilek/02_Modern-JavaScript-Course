const content = document.querySelector('article');
// console.log(content.children);
// console.log(Array.from(content.children));


// Array.from(content.children).forEach(element => {
//  element.classList.add('article-element');
// });

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.parentElement.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.nextSibling);
