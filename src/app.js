function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
let apiUrl = `https//api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
