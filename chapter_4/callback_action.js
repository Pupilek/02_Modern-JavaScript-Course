//const ul = document.querySelector('#people');
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;


people.forEach(person =>{
  //create an html template 
 html += `<li style = "color: firebrick">${person}</li>`
})

console.log(html);
ul.innerHTML = html;