
// const userCity= 'Atlanta';
let foreCastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${userCity}&APPID=88b430eb57686cffb62a9a7565a182f5`;

//tomorrow
for (let i=0; i<5; i++){
    fetch(foreCastUrl)
    .then(r => r.json())
    .then(j => j.list[i])
    .then(drawBox);
}

let today = new Date();
const date = today.getDate();
const month  = today.getMonth()+1;
const year = today.getFullYear();
const dateHeader = document.querySelector('[data-today]');
dateHeader.textContent = `Today, ${month} / ${date} / ${year}`;

const forecast = document.querySelector('[data-forecast]');

function drawTemper(current){
    let temperature = document.createElement('p');
    let foreTemp = current.main.temp;
    foreTemp = ((foreTemp - 273.15) * 9/5 + 32).toFixed(1);
    temperature.textContent = `${foreTemp} °F`;
    return temperature;
}

function drawIcon(current){
    let newIcon = document.createElement('img');
    let newId = current.weather[0].icon;
    newIcon.setAttribute('src', `http://openweathermap.org/img/w/${newId}.png`)
    return newIcon;
}

function drawBox(current){
    let box = document.createElement('li');
    box.appendChild(drawIcon(current));
    box.appendChild(drawTemper(current));
    forecast.appendChild(box);
}