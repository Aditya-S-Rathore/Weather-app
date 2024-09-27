const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7b58bc7ad3msh41d5f4427bbe66fp1fcf3cjsn319d7491cc9e',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};

const getWeather = (city)=>{

cityname.innerHTML = city
fetch('https://open-weather13.p.rapidapi.com/city/'+city+'/EN', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        cloud_pct.innerHTML = response.clouds.all
        temp.innerHTML = response.main.temp
        feels_like.innerHTML = response.main.feels_like
        humidity.innerHTML = response.main.humidity
        min_temp.innerHTML = response.main.temp_min
        max_temp.innerHTML = response.main.temp_max
        wind_speed.innerHTML = response.wind.speed
        wind_degrees.innerHTML = response.wind.deg
        sunrise.innerHTML = response.sys.sunrise
        sunset.innerHTML = response.sys.sunset
    })
    .catch(err => console.error(err));
}




submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
}) 


getWeather("Delhi")

