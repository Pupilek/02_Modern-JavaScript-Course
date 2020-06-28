//1. Spread & rest

// 1.1 rest parameter

const double = (...nums) => {
  //console.log(nums);
  return nums.map(num => num/2);
}

const result = double (1,2,5,6,7,8,8);
console.log(result);

// 1.2 spread syntax (array)

const people = ['shaun', 'ryu', 'luigi'];
const members = ['mario', 'chun-li', ...people]
console.log(...members);

// 1.3 spread syntax (object)

const person = {name:'shaun', age:30, job:'net-ninja'};
const personClone = {...person, location:'manchester'};
console.log(personClone);
console.log(person);

console.clear();

// 2. Sets

const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

const nameSet = new Set(namesArray);
console.log(nameSet);

//const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(45);
ages.add(30).add(20).add(45);
ages.delete(45);

console.log(ages, ages.size);
console.log(ages.has(31));

ages.clear();
console.log(ages);

const ninjas = new Set([
  {name: 'shaun', age:30},
  {name: 'crystal', age:29},
  {name: 'chun-li', age:32},
  {name: 'chun-li', age:30},
]);

ninjas.forEach(ninja =>{
  console.log(ninja.name, ninja.age)
})

console.clear();

//3. Symbols
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo);
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne]= 'ryu'
ninja[symbolTwo]= 'ryu'

console.log(ninja);
