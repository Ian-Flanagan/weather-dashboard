var searchBtn = document.querySelector("#searchBtn")
var cityForecast =[];

function getInfo(){
    var city = document.getElementById("searchQuery").value;
    console.log(city);


fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=0342c82f8121b1d6d87afc0941678375')
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
    cityForecast = data;
})
}

searchBtn.addEventListener("click", getInfo)