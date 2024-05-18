const api_key = "263dab88b12c4676999101718241805";
const userLocation = document.querySelector("#location");
const findBtn = document.querySelector("#find-btn");
const city = document.querySelector(".city");
const locationBox = document.querySelector(".location");
const temperature = document.querySelector(".temp_c");
const weather = document.querySelector(".weather");

async function getWeatherData(queryData) {
  const reponse = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${queryData}&aqi=no`,
    { mode: "cors" }
  );
  const data = await reponse.json();
  //console.log(data);
  return data;
}
async function updateInfo(userInput) {
  const data = await getWeatherData(userInput);
  console.log(data);
  city.textContent = await data.location.region;
  locationBox.textContent = await data.location.name;
  temperature.textContent = `${await data.current.temp_c}°C`;
  weather.textContent = await data.current.condition.text;
}
findBtn.addEventListener("click", () => {
  updateInfo(userLocation.value);
});
