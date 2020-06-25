// app.js for the DOM manipulation;

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


const updateUI = (data) => {

//   const cityDets = data.cityDets;
//   const weather = data.weather;

  //destructure properties doing exactly the same as 2 lines above
  const {cityDets, weather} = data;

  // update details template
  details.innerHTML =`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  //update the night/day & icon images

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);



  //ternary operator template
  //const result  = condition ? 'value1' : 'value2';

  //let timeScr = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  let timeScr = null;
  if(weather.IsDayTime){
    timeScr = 'img/day.svg';
  } else {
    timeScr = 'img/night.svg';
  }

  time.setAttribute('src', timeScr);

  // remove d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

};

// const updateCity = async (city) => {
//   const cityDets = await getCity(city);
//   const weather = await getWeather(cityDets.Key);
//   return {cityDets, weather};
// };

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with the new city
  forecast.updateCity(city)
    .then(data => updateUI(data))
  //.then(data => console.log(data))
    .catch(err => console.log(err));

  //set local storage 
  localStorage.setItem('city', city) 
});


if(localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
  //.then(data => console.log(data))
    .catch(err => console.log(err));
}

console.log(localStorage.getItem('city'));
