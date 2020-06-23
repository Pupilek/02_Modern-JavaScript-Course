const  par1 = document.querySelector('p');

console.log(par1);

const  par3 = document.querySelector('.error');
console.log(par3);

const  diverr = document.querySelector('div.error');
console.log(diverr);

const  para = document.querySelector('p:nth-child(2)');
console.log(para);

const  para2 = document.querySelector('body > div:nth-child(2) > p:nth-child(1)');
console.log(para2);

const  para3 = document.querySelector('h1');
console.log(para3);

//to grab multiple elements
const paras = document.querySelectorAll('p');

//paras.forEach(para =>console.log(para));
//console.log(paras[1]);

const err = document.querySelectorAll('.error')

err.forEach(er =>console.log(er));