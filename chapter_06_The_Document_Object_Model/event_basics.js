console.log('event basics');

const ul = document.querySelector('ul');

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
  //ul.innerHTML += '<li> new task to do</li>';
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.append(li);
  ul.prepend(li);
});


// const items = document.querySelectorAll('li');
// items.forEach((item, index) => {
//   item.addEventListener('click', e=>{
//     //console.log(`item ${index} clicked`);
//     //console.log(e);
//     //console.log(e.target);
//     //console.log(item);
//     //e.target.style.textDecoration= 'line-through';
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });



ul.addEventListener('click', e =>{
//console.log('event in UL')
//console.log(e.target);
if(e.target.tagName ==='LI'){
  e.target.remove();
}
});