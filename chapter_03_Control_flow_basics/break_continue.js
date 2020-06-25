const scores = [50, 25,0, 30, 100, 20, 10];

for (let index = 0; index < scores.length; index++) {

  if(scores[index]===0){
    console.log('0 is not printed');
    continue;
  }
  console.log('your score is: ', scores[index]);
  if(scores[index] ==100){
  console.log('hi score is achieved; looping break')
  break
 }

}