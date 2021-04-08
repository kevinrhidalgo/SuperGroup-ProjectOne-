var gasSearch = document.getElementsByClassName("startpoint").value;
var gasSearchDest = document.getElementsByClassName("destination");
var searchBtn = document.getElementById("btn");
// query selector for search location input
var searchValue = document.querySelector("input", startpoint);
var nameInput = document.getElementById('destination');
// var = JSON.parse(localStorage.getItem("cities")) || [];

// console.log(test)
var queryUrl = "https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL";

//console logs city that was searched
searchBtn.addEventListener("click", function(getValue) {
    var city = document.getElementById("startpoint").value.trim();
    var dropDown = document.getElementById("form-input").value.trim();
    var fuelCity = document.getElementById("gas-input").value.trim(); 
    console.log(object)
    console.log(city)
    console.log(dropDown); 
    var object = {
        City: city, 
        GasType: dropDown,
        GasCity: fuelCity

    };   
        // gasSearch=city
        // localStorage.setItem("fuelType", JSON.stringify(dropDown));
        function storeSearch() {
        localStorage.setItem("city", JSON.stringify(object));
    }
    storeSearch();
    getObject();
})


function getObject() {
    var retrieveObject = JSON.parse(localStorage.getItem("city", "GasCity"));
    var citySearched = retrieveObject.GasCity;
    retrieveObject.GasCity;
    console.log("This is the retrieved object---------")
    console.log(retrieveObject.GasCity)
    cityFetch(citySearched);

} 
// if searched city = data.city put that data on the page
function cityFetch(citySearched) {
    var cityQuery = "https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL"
    // fetch(cityQuery) + GasCity + 
    console.log("This is city query")
    console.log(cityQuery)
    fetch(cityQuery,{

        headers:{
            "authorization":"apikey "+gasApi
        }
        })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    })



}








    // var gasSearch = getValue;
    
    //hook city searched into api
    




// var gasSearch= document.getElementById("text");
// localStorage.setItem("text", gasSearch.value);

// Gas Prices API test for dataset in console log


// fetch('https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL', {
//     method: 'POST',
//     headers: {
//         'authorization': 'apikey 4q4IHx619b47CaX35Ji9xZ:0jz3gHaXHLos0Lj2yXBANg',
//         'content-type': 'application/json'
//     }
//   }).then((response)=> {
//       console.log(response.status)
//       return response.json();
//     }).then((data)=>{
//         console.log(data);
//     });
    
    





    fetch('https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL', {
    method: 'POST',
    headers: {
        'authorization': 'apikey 1S317er7IoftkfJigyKJFq:0wMR0jn6ON9iQOcOz53gaw',
        'content-type': 'application/json'
    }
  }).then((response)=> {
      console.log(response.status)
      return response.json();
    }).then((data)=>{
        console.log(data);
        var string = JSON.stringify(data.result.cities[9]);
        // console.log(cities);
        console.log(string);
        // for loop for the cities searched
        // for (var i = 0; i < cities.length; i++) {
    // console.log(cities);
    })    
       




// })
    
   




// City and Number in array
// Ft. Lauderdale:3, Melbourne:9, Miami;10, Orlando:13, Port-St. Lucie:16, Boca Raton:23  
