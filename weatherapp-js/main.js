const api = {
    key: "097e4138882695432e9ae9bb5e62e44a",
    base:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch (`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
 
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let low_ = document.querySelector('.low');
    low_.innerText =`${Math.round(weather.main.temp_min)}°c`;

    let high_ = document.querySelector('.high');
    high_.innerText =`${Math.round(weather.main.temp_max)}°c`;

}
