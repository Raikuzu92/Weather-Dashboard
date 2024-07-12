const API = 'bf0f77ba6a49f00561b1182d3c5afe3e';
const searchInput = document.getElementById('searchInput').value.trim();
const searchButton = document.getElementById('searchButton');
const storedCities = JSON.parse(localStorage.getItem('cities')) || [];
const btnContainer = document.getElementById('buttons');

// function to get data for city
function getData(city) {
    let storedCities = searchInput.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`;
    console.log(apiUrl);

// grabbing the api
    fetch(apiUrl)
    .then(function (response) {
        return response.json();

    })

}
//rendering content to page
then(function(renderCurrentWeather) {
    renderCurrentWeather(city, data);
    storeHistory(cities)
})

.catch(function (error) {
    console.error(error);
});

function getInputCity() {
let city = searchInput.value.trim()
storeSearchhistory(city)
}
// all the data we need and creating dynamic elements
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
    iconImg.setAttribute('src', iconUrl);
    humidH1.textContent = humidity;
    container.append(iconImg, tempH1, windH1, humidH1);
createhistoryButton()
}


function storeHistory(city) {
    storedCities.push(city);
    localStorage.setItem('cities' .JSON.stringify(storedCities));


}

// creating a history button that pulls values 
function createhistoryButton() {


const thisstoredCity= JSON.parse(localStorage.getItem('cities')) || [];


for (let i = 0; i < thisstoredCity.length; index++) {
    
    
}
const historyButton = document.createElement('button')
historyButton.classList.add('historyBtn')
historyButton.textContent = city[i]
container.append(historyButton);
btnContainer.append(historyButton)
};

function handlesearchHistory(e) {
    if(!e.target.matches('historybtn')) {
        return;
    }

    const target = e.target;
    const cityname = target.textContent
    renderCurrentWeather(cityname)




}



createhistoryButton()
//event listners for buttons
btnContainer.addEventListener('click', handlesearchHistory)

searchButton.addEventListener('click'.getData);




