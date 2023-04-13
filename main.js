const api = {
    key:"3aec238a7b5b26a73458057a73a56a66",
    baseurl:"https://api.openweathermap.org/data/2.5/"
}
const searchbox=document.querySelector('.search-box');

searchbox.addEventListener("keypress",setQuery);

function setQuery(event){
if(event.keyCode==13){
    console.log(searchbox.value);
    getResults(searchbox.value);
}
}
//need to learn much here getting data and fetching.. its imp.
function getResults(query){
fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
.then(weather =>{
    return weather.json();
}).then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;
let months=["January","Febraury","March","April","May","June","July","August","September",
"October","November","December"]
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let now = new Date()
    let cal = document.querySelector('.date');
    let day = days[now.getDay()];
    let date=now.getDate();
    let month=months[now.getMonth()]
    let year = now.getFullYear();
    cal.innerText=`${day} ${date} ${month} ${year}`;

    let temp=document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
    let weathers = document.querySelector('.current .weather');
    weathers.innerText=`${weather.weather[0].main}`;
    let hilow=document.querySelector('.current .hi-low');
    hilow.innerHTML=`Min. ${Math.round(weather.main.temp_min)}°C / Max. ${Math.round(weather.main.temp_max)}°C`
}