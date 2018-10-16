// get temperature, pressure, humidity,
const userCity = prompt(`Enter City Name`);
let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&APPID=88b430eb57686cffb62a9a7565a182f5`;

// get and display temperature
fetch(url)
.then(r => r.json())
.then(j => j.main.temp)
.then(drawTemp);

// city name
fetch(url)
.then(r => r.json())
.then(j => j.name)
.then(drawName);

// pressure
fetch(url)
.then(r => r.json())
.then(j => j.main.pressure)
.then(drawPress);

// humidity
fetch(url)
.then(r => r.json())
.then(j => j.main.humidity)
.then(drawHum);

fetch(url)
.then(r => r.json())
.then(j => j.weather[0])
.then(weather);


// Convert temperature to F (temp − 273.15) × 9/5 + 32 = °F
// Draw to div

const body = document.querySelector('body');
const display = document.querySelector('[data-display]');
const cityName = document.querySelector('[data-name]');
const weatherCond = document.querySelector('[data-weather]');
const widget = document.querySelector('[data-widget]');
// function 

function drawName(name){
    cityName.textContent = name; 
}

function drawTemp(temp){
    let temperature = document.createElement('li');
    temp = ((temp - 273.15) * 9/5 + 32).toFixed(1);
    temperature.textContent = `Temperature: ${temp} °F`;
    display.appendChild(temperature);
}

function drawPress(press){
    let pressure  = document.createElement('li');
    pressure.textContent = `Pressure: ${press} hPa.`;
    display.appendChild(pressure);
}

function drawHum(hum){
    let humidity  = document.createElement('li');
    humidity.textContent = `Humidity: ${hum}%`;
    display.appendChild(humidity);
}

function weather(weatherObj){
    let img = document.createElement('img');
    let iconID = weatherObj.icon;
    img.setAttribute('src', `http://openweathermap.org/img/w/${iconID}.png`)
    let weatherHeader = document.createElement('h5');
    weatherHeader.textContent = `Weather: ${weatherObj.description}`;
    weatherCond.appendChild(img);
    weatherCond.appendChild(weatherHeader);
}