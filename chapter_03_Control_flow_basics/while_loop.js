
let i = 5;
let n =10;
console.log('starting while loop');
while (i > n) {
  console.log(`while looping, i = ${i}`);
  i--;
}
console.log('ending while loop');
console.log('-------------------');
console.log('starting do-while loop');
do {
  console.log(`do-while looping, i = ${i}`);
  i++;
} while (i<n);
console.log('ending do-while loop');