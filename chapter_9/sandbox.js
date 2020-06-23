//const scores = [10,30,15,25,50,40,5,80];
// const num = 30;

// 1. Filtering
// const filteredScores = scores.filter((score) => {
//   return score >= num;
// });

// const users = [
// {name:'shaun', premium: true}, 
// {name:'yoshi', premium: false}, 
// {name:'mario', premium: false}, 
// {name:'chun-li', premium: true}
// ];

// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);

//2. Mapping 
// const prices = [10,30,15,25,50,40,5,80];
// // const salePrices = prices.map((price) => price/2);

// // console.log(salePrices);

// const products = [
//   {name:'gold star', price:20},
//   {name:'mushroom', price:40},
//   {name:'green shells', price:30},
//   {name:'banana skin', price:10},
//   {name:'red shells', price:50},
// ];

// saleProducts = products.map(product => { 
//   if(product.price > 30) {
//     return {name: product.name, price: product.price / 2}
//   } else {
//      return product;
//   }
// });

// console.log(saleProducts);
//3.Reducing

// const prices = [10,20,60,40,70,90,30];
// let initial = 0;
// const result = prices.reduce((accumulator, current) =>{
//   if (current > 50){
//     accumulator++;
//   }
//     return accumulator;
// }, initial);

// console.log(result);

// const scores = [
//   {player:'mario', score: 50}, 
//   {player:'yoshi', score: 30}, 
//   {player:'mario', score: 70}, 
//   {player:'crystal', score: 60}, 
// ];

// const marioTotal = scores.reduce((acc, curr) =>{
// if(curr.player === 'mario'){
//   acc+=curr.score;
// }
// return acc;
// }, 0);

// console.log(marioTotal);

// //4 Find method
// const scores = [10,30,15,25,60,40,5,80];

// const firstHighScore = scores.find(score=> score >50)

// console.log(firstHighScore);

//5. Sort

//5.1 sorting strings

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();

// console.log(names);

// //5.2 sortings numbers

const scores = [10, 50, 2, 22, 100, 76, 90];
scores.sort((a,b)=>b-a);
//console.log(scores);

// console.log(scores);

//5.3 Sorting objects

const players = [
  {name: 'mario', score:20}, 
  {name: 'luigi', score:10}, 
  {name: 'chun-li', score:50}, 
  {name: 'yoshi', score:30}, 
  {name: 'shaun', score:70}, 
]

// players.sort((a,b)=>{
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });

// players.sort((a,b)=> b.score - a.score);

// console.log(players);

// 6. Chaining 

const products = [
  {name: 'gold star', price: 30}, 
  {name: 'green shell', price: 10}, 
  {name: 'red shell', price: 40}, 
  {name: 'banana skin', price: 5}, 
  {name: 'mushroom', price: 50}, 
]

// const filtered = products.filter(product => product.price >20);
// const promos = filtered.map(product =>{
//   return `the ${product.name} is ${product.price/2} pounds`;
// })

const promos = products
  .filter(product => product.price >20)
  .map(product => `the ${product.name} is ${product.price/2} pounds`);

console.log(promos);