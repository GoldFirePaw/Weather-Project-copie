const apiKey = "0f687b8ce7b2a635f662f6784501a1b1";

let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
let mins = ("0" + now.getMinutes()).slice(-2);

// HTML elements
const cityElement = document.querySelector("#city")
const temperatureElement = document.querySelector("#temperature");
const geolocationElement = document.querySelector("#geolocation")
const convertFarButton = document.querySelector("#convertFar")
const convertCelButton = document.querySelector("#convertCel")
const form = document.querySelector("#search-form");
const cityInput = document.querySelector("#citySearch")
const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#hour");

function getCity() {
    return cityInput.value;
}

function displayTemperature(response, unit) {
    let currentTemp = Math.round(response.data.main.temp);
    if (unit === "metric") {
        temperatureElement.innerHTML = `${currentTemp} °C`;
    } else {
        temperatureElement.innerHTML = `${currentTemp} °F`;
    }
}

function getTemperatureByUnit(unit) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity()}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(function(response) {
        displayTemperature(response, unit)
    });
}

function convertToFarhenheit(event) {
    event.preventDefault();
    getTemperatureByUnit("imperial")
}

function convertToCelcius(event) {
    event.preventDefault();
    getTemperatureByUnit("metric")
}

function displayTemperatureLocation(response) {
    let currentTemp = Math.round(response.data.main.temp);
    temperatureElement.innerHTML = `${currentTemp} °C`;
}

function getCityNameFromLocation(lat, long) {
    const apiUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}8&lon=${long}&appid=${apiKey}`
    return axios.get(apiUrl).then(function(response) {
        return response.data[0].name;
    })
}

function showLocationTemp(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    let unit = "metric"
    axios.get(apiUrl).then(function(response) {
        displayTemperature(response, unit)
    });
}

function handlePosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    getCityNameFromLocation(lat, long).then(function(city) {
        cityElement.innerHTML = city;
        showLocationTemp(city);
    });
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(handlePosition)
}

dateElement.innerHTML = day;
timeElement.innerHTML = `${hour}:${mins}`;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    cityElement.innerHTML = getCity();
    getTemperatureByUnit("metric");
});
convertFarButton.addEventListener("click", convertToFarhenheit)
convertCelButton.addEventListener("click", convertToCelcius)
geolocationElement.addEventListener("click", getLocation);