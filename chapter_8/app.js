const correctAnswers = ['B', 'B', 'B', 'B'];
//console.log(correctAnswers);
const form = document.querySelector('.quiz-form');
//console.log(form);
const result = document.querySelector('.result');

 form.addEventListener('submit', e =>{
  e.preventDefault();

  let score = 0;
  const n = 4; // number of questions

  const userAnswers= [form.q1.value, form.q2.value,form.q3.value,form.q4.value];
  
  //check answers
  userAnswers.forEach((answer, index)=>{
    if(answer === correctAnswers[index]){
      score +=(1/n)*100;
    }
  });

//  show result on page
scrollTo(0,0);
result.classList.remove('d-none');
let output =0;
const timer = setInterval(() => {
  result.querySelector('span').textContent= `${output}%`;
  if (output === score){
    clearInterval(timer);
  } else {
    output++;
  }
}, 10);
});








