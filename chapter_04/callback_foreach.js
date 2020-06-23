//console.log('callbacks and foreach')

const myFunc = (callbackFunc) => {
  //do smth
  let value = 50;
  callbackFunc(value);
};

myFunc(value => console.log(value));



// forEach function
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPreson = (element, index)=>{
  console.log(`${index} - Hello, ${element}`)
}

people.forEach(logPreson);
