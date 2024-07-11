const API = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`;
const searchInput = document.getElementById('searchInput').value.trim();
const searchButton = document.getElementById('searchButton');


function getData() {

    fetch(apiUrl)
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`
        .then(function (response))
    return response.json();

};

then(function (data) {
    renderCurrentWeather(city, data);
})

    .catch(function (error) {
        console.error(error));
    }

function renderCurrentWeather(city, weather) {
    const temp = weather.list[0].main.temp;
    const wind = weather.list[0].wind.speed;
    const humidity = weather.list[0].main.humidity
    const icon = weather.list[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    const container = document.getElementById('container')
    const tempH1 = document.createElement('h1')
    const windH1 = document.createElement('h1')
    const humidH1 = document.createElement('h2')
    const iconImg = document.createElement('img')
    tempH1.textContent = temp;
    windH1.textContent = wind;
    iconImg.setAttribute('src', iconUrl)
    humidH1.textContent = humidity

}


searchButton.addEventListener('click'.getData);




