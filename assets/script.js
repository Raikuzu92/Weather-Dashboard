const API = 'bf0f77ba6a49f00561b1182d3c5afe3e';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const storedCities = JSON.parse(localStorage.getItem('city')) || [];
const btnContainer = document.getElementById('buttons');
const container = document.getElementById('container')
const historyButton = document.getElementById('historyBtn');

// function to get data for city
function getData(city) {
    city = searchInput.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`;
    console.log(apiUrl);
    searchInput.append('')

// grabbing the api
    fetch(apiUrl)
    .then(function(response) {
        console.log(response);
        return response.json()
    })
    .then(function(data) {
        //console.log(data.list[0].main.humidity)
        renderCurrentWeather(city, data)
        storeHistory(city);
    })
    .catch(function (error) {
        console.error(error);
    })
    
    
    //rendering content to page
    
    // .then(function(renderCurrentWeather) {
    //     //renderCurrentWeather = data.list[0].main.humidity
        
    //     renderCurrentWeather(city, data);
    //     //storeHistory(cities)
    //  })
    
    // // .catch(function (error) {
    // //     console.error(error);
    // // });
    return;
}
// // function getInputCity() {
// let city = searchInput.value.trim()
// storeSearchhistory(city)
// }
// all the data we need and creating dynamic elements
function renderCurrentWeather(city, weather) {
    city = searchInput.value.trim();
    const temp = weather.list[0].main.temp;
    const wind = weather.list[0].wind.speed;
    const humidity = weather.list[0].main.humidity
    const icon = weather.list[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    const tempH1 = document.createElement('h2',)
    const windH1 = document.createElement('h2')
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
    localStorage.setItem('city', JSON.stringify(storedCities));


}

// creating a history button that pulls values 
function createhistoryButton() {
    
    
    const storedCities= JSON.parse(localStorage.getItem('cities')) || [];
    
    
    for (let i = 0; i < storedCities.length; i++) {
        const historyButton = document.createElement('button')
        historyButton.classList.add('historyButton')
        historyButton.textContent = storedCities[i]
        container.append(historyButton);
        
        historyButton.addEventListener('click', function() {
            // Implement logic to fetch and display weather information for the selected city
            console.log('City clicked:', storedCities[i]);
        })
    }
    return;
};

function handlesearchHistory(e) {
    if(!e.target.matches('historyBtn')) {
        return;
    }

    const target = e.target;
    const cityname = target.textContent
    renderCurrentWeather()




}


searchButton.addEventListener('click', getData);

//event listners for buttons
//btnContainer.addEventListener('click', handlesearchHistory)





