let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let mins = ('0' + now.getMinutes()).slice(-2);
let date = document.querySelector("#date");
let time = document.querySelector("#hour");

date.innerHTML = day;
time.innerHTML = `${hour}:${mins}`

function displayCity(event) {
    event.preventDefault()
    let searchedCity = document.querySelector("#citySearch");
    let city = document.querySelector("#city");
    city.innerHTML = searchedCity.value
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


let randomTemperatureArray = document.querySelectorAll(".randomTemperature")

for (let randomTemperature of randomTemperatureArray) {
    randomTemperature.innerHTML = getRandomArbitrary(10, 20);
}

const numbers = [1, 8, 7, 10, 87, 5, 46, 98, 2, 77]
const oddNumbers = []
const evenNumbers = []


function isEven(number) {
    return number % 2 === 0
}

for (let number of numbers) {
    if (isEven(number)) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number)
    }
}


console.log(oddNumbers.sort((a, b) => a - b))
console.log(evenNumbers.sort((a, b) => a - b))


/*let submit = document.querySelector("#search-form");
submit.addEventListener("submit", displayCity);

let temperatureA = document.querySelector("#temperatureA");
let temperatureB = document.querySelector("#temperatureB");
temperatureA.innerHTML = `17°C`;
temperatureB.innerHTML = `30°C`;


let farhenheitA = (17 * 9 / 5) + 32;
let farhenheitB = (30 * 9 / 5) + 32;
let celciusA = 17;
let celciusB = 30;

function convertToFarhenheit() {
    temperatureA.innerHTML = `${farhenheitA}°F`;
    temperatureB.innerHTML = `${farhenheitB}°F`;
}

function convertToCelcius() {
    temperatureA.innerHTML = `${celciusA}°C `;
    temperatureB.innerHTML = `${celciusB}°C `;
}

let convertCel = document.querySelector("#convertCel");
let convertFar = document.querySelector("#convertFar");

convertCel.addEventListener("click", convertToCelcius);
convertFar.addEventListener("click", convertToFarhenheit);*/