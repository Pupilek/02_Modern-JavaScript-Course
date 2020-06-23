// defining arrow function nr 1
const pi = 3.14;
const calcArea = (radius) =>{
  return pi*radius**2;
};
//invoking arrow function
//console.log(calcArea(5));

//defining arrow function nr 2
const greet = () => 'Hello, world';
//console.log(greet());

//defining arrow function nr 3
let total = 0;
const bill = (products, tax) => {
  for (let index = 0; index < products.length; index++) {
  total += products[index] + products[index]*tax;
  }
  return total;
};

console.log(bill([10,15,30], 0.2))