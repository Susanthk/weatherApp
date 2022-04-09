
let apiKey = 'eb8e95d89ad007507f07d9449e2255c6';
let button = document.querySelector("button")
button.addEventListener("click", e => getWeather())
function getWeather(){
    let city = document.querySelector("input").value

    //let geocodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city name},${state code},${country code}&limit=${limit}&appid=${API key}`
    let lat = 32.7357
    let lon = 97.1081
    //let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    //let results = JSON.parse(api)
    //console.log(results)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(async function(response) {
    let res = await response.json()
    console.log(res)
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = res;

    console.log(cityName)
    console.log(temperature)
    console.log(feelsLike, humidity)
    console.log(windSpeed)
    //console.log(JSON.parse(response.response))
  })
  .catch(function(err) {
    console.log(err)
  });
}