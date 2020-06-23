const copy = document.querySelector(".copy-me");

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyright');
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
//console.log(`x = ${e.offsetX}, y = ${e.offsetY}`);
box.textContent = `x = ${e.offsetX}, y = ${e.offsetY}`;
});

document.addEventListener('wheel', e =>{
  console.log(`X = ${e.pageX}, Y = ${e.pageY}`);
})