///Date format
let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

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

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

h2.innerHTML = `${hours}:${minutes}, ${day} ${date} ${month}, ${year}`;

//Display city name

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  searchCity(searchInput.value);
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", search);

//Weather by city

function searchCity(city) {
  let apiKey = "cb7a1f94a677ff0a9cee6a9fd5570d15";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let message = `${temperature}°C`;
  let h4 = document.querySelector("#temp-current");
  h4.innerHTML = message;
}

//location api
