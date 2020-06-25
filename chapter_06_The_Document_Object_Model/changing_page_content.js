console.log("Changing page content");

//changing 1 element text
const para = document.querySelector('p');
para.innerText = "Changing text"
console.log(para);

//grab all p elements

paras = document.querySelectorAll('p');
paras.forEach((element) => {
  console.log(element.innerText);
 // element.innerText += ' new text';
});

//changing 1 element text
let divContent = document.querySelector('.content'); 
//divContent.innerHTML += '<h2>This is new H2</h2>';
//console.log(divContent);

const people = ['mario', 'luigi', 'yoshi'];
people.forEach((element) =>{
divContent.innerHTML += `<p>${element}</p>`;
});

console.log(divContent);