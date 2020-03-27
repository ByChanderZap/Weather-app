const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');


const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

//Interface
const ui = new UI();

require('./index.css');

async function fetchWeather(){
    const data = await weather.getWeather();
    ui.render(data);
}


document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const cCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, cCode);
    store.setLocationData(city, cCode);
    
    fetchWeather();

});

document.addEventListener('DOMContentLoaded', fetchWeather);