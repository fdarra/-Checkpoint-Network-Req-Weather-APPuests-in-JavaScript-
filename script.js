async function fetchWeather () {
const weatherLocation = document.getElementById("location").value ;
const apikey ="9991bec2f130b7d1b3bd218541869c43";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${weatherLocation}&appid=${apikey}`;
try {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)  
    getinformation(data)
} catch (error) { 
    console.log(error)
}
}

function getinformation(data){
const city = data.name
const temperature = data.main.temp
const descripton = data.weather[0].description
const icon =data.weather[0].icon

document.getElementById("city").innerHTML = `Temperature in ${city}`

document.getElementById("iconw").src=`https://openweathermap.org/img/wn/${icon}@2x.png`
document.getElementById("temperature").innerHTML = `Temperature:  ${temperature}`
document.getElementById("information").innerHTML = `description: ${descripton}`
document.getElementById("weather").style.display = "block"


}