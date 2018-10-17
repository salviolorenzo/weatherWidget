// get temperature, pressure, humidity,
// const userCity = prompt(`Enter City Name`);
const userCity= 'denver';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&APPID=88b430eb57686cffb62a9a7565a182f5`;

// get and display temperature
fetch(url)
.then(r => r.json())
.then(drawName)
.then(drawTemp)
.then(drawHum)
.then(drawPress)
.then(weather);

const body = document.querySelector('body');
const display = document.querySelector('[data-display]');
const cityName = document.querySelector('[data-name]');
const weatherCond = document.querySelector('[data-weather]');
const widget = document.querySelector('[data-widget]');
// function 

function drawName(obj){
    cityName.textContent = obj.name; 
    return obj;
}

function drawTemp(obj){
    let temperature = document.createElement('li');
    let temp = obj.main.temp;
    temp = ((temp - 273.15) * 9/5 + 32).toFixed(1);
    temperature.textContent = `Temperature: ${temp} °F`;
    display.appendChild(temperature);
    return obj;
}

function drawPress(obj){
    let pressure  = document.createElement('li');
    pressure.textContent = `Pressure: ${obj.main.pressure} hPa.`;
    display.appendChild(pressure);
    return obj;
}

function drawHum(obj){
    let humidity  = document.createElement('li');
    humidity.textContent = `Humidity: ${obj.main.humidity}%`;
    display.appendChild(humidity);
    return obj;
}

function weather(obj){
    let weatherObj = obj.weather[0];
    let img = document.createElement('img');
    let iconID = weatherObj.icon;
    img.setAttribute('src', `http://openweathermap.org/img/w/${iconID}.png`)
    let weatherHeader = document.createElement('h5');
    weatherHeader.textContent = `${weatherObj.description}`;
    weatherCond.appendChild(img);
    weatherCond.appendChild(weatherHeader);
}