// console.log('getting_setting_attributes');

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://ukr.net');
// link.innerText = 'The new content of text';
// console.log(link.getAttribute('href'));

// const msg = document.querySelector('p.error');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color:green');


// const title = document.querySelector('h1');
// console.log(title.getAttribute('style'));

// //title.setAttribute('style', 'margin: 50px');

// console.log(title.style.color);
// title.style.margin = '50px';
// console.log(title.style.margin);
// title.style.color = 'crimson';
// title.style.fontSize = '16px';
// title.style.fontSize = '';

const paras = document.querySelectorAll('p');

paras.forEach((i) => {
  if(i.textContent.includes('error')){
    i.classList.add('error');
  }else{if(i.textContent.includes('success')){
    i.classList.add('success');}}
});


// console.log(content);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const title = document.querySelector(".title");
title.classList.toggle('test');
title.classList.toggle('test');