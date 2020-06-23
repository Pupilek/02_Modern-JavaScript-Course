let age = 30;

if(age){
  let age = 40;
  console.log('first block code: age = ', age);
  if(age){
  age = 50;
    console.log('second block code: age = ', age);
  }
}

console.log('outside code: age = ', age);