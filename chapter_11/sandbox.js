const before = new Date('February 2 2019 7:30:59');
const now = new Date()
const timest = 1000000000000;

// console.log(now);
// console.log(typeof now);

// //years, months, days, times: type-numbers

// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

//timestamps - miliseconds from 01.01.1970

console.log('timestamp now:', now.getTime());
console.log('timestamp before:', before.getTime());
const diff = now.getTime() - before.getTime();
console.log('diff:', diff);
const months = Math.round(diff /1000/ 3600/24/30);
console.log('diff in months is:', months);
console.log(new Date(timest));
// //datestrings types: strings

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());