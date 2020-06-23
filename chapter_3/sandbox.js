// 1. 'for' loop
const n = 5;
console.log('Starting the 1st loop;');
for (let i = n; i >= 0; i-=2) {
  console.log(`looping, i =  ${i};`);
}
console.log('loop finished.')

const names= ['shaun', 'mario', 'luigi'];
console.log('---------------------');
console.log('2nd loop: looping through array;');
for (let index = 0; index < names.length; index++) {
  console.log(` loop in: i = ${index}; names[${index}]= ${names[index]};`);
}
console.log('---------------------');
console.log('3nd loop: looping through array tagged by html;');
for (let index = 0; index < names.length; index++) {
  //let html = `<div>${names[index]}</div>`
  //console.log(html);
  let html = `<div>${names[index].bold()}</div>`
  console.log(html);
}