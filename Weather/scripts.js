const api = "fdbf161d4507144b4761c12ec5c28bd5"; //API key

const iconImg = document.getElementById("weather-icon");
const loc = document.querySelector("#location");
const tempC = document.querySelector(".c");
const tempF = document.querySelector(".f");
const feel = document.querySelector(".feel");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const humid = document.querySelector(".humid");
const desc = document.querySelector(".desc");
const sunriseDOM = document.querySelector(".sunrise");
const sunsetDOM = document.querySelector(".sunset");

window.addEventListener("load", () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp, feels_like, temp_max, temp_min, humidity } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { country, sunrise, sunset } = data.sys;

          const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place},${country}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          max.textContent = `${temp_max.toFixed(2)} °C`;
          min.textContent = `${temp_min.toFixed(2)} °C`;
          humid.textContent = `${humidity} %`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          feel.textContent = `${feels_like.toFixed(2)} °C`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});
