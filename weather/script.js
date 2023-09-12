const weather_data = document.querySelector('.weather-data')
const search_btn = document.querySelector('.btn')
// weather_data.innerHTML = `<h1>Loading</h1>`

const fetchweatherdata = (city) => {
  const apikey = '97256f397a74b165f81bbc545a49380b'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}`
  const data = fetch(url).then((response) => {
    // console.log(response.json())
    return response.json()
  })

  data.then((data) => {
    if (data.name) {
      // weather_data.style.backgroundImage = `url("./cloud-blue-sky.jpg")`
      weather_data.outerHTML = `<p class="city">City:${data.name}</p>
        <p class="temp">Temperature:${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Description:${data.weather[0].description}</p>
      `
    } else {
      weather_data.innerHTML = `Please Provide a valid City`
    }
  })

  data.catch((error) => {
    weather_data.innerHTML = `Ooops Something went wrong<img class="errorimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NY8cWoTtFWCMDXb9rUmJ0rUVqIYXnPIwt3oEV1V310RJYfnWvFQYF2UIVEwUV5Ot0Sk&usqp=CAU"
        alt="Recipe not found"/> `
  })
}

search_btn.addEventListener('click', (e) => {
  e.preventDefault()
  const city_input = document.querySelector('.city')
  // console.log(city_input.value)
  const city = city_input.value.trim()
  if (!city) {
    weather_data.innerHTML = `Please Provide your Location`
    return
  }
  weather_data.innerHTML = `Wait while fetching the data`
  fetchweatherdata(city)
})
