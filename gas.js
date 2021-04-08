var gasSearch = document.getElementsByClassName("startpoint").value;
var gasSearchDest = document.getElementsByClassName("destination");
var searchBtn = document.getElementById("btn");
// query selector for search location input
var searchValue = document.querySelector("input", startpoint);
var nameInput = document.getElementById('destination');
// var = JSON.parse(localStorage.getItem("cities")) || [];

var cityQuery = "https://api.collectapi.com/gasPrice/fromCity?city="
// console.log(test)
var queryUrl = "https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL";

//console logs city that was searched
searchBtn.addEventListener("click", function(getValue) {
    var city = document.getElementById("startpoint").value;
    var dropDown = document.getElementById("form-input").value;
    var fuelCity = document.getElementById("gas-input").value; 
    var object = {
        City: city, 
        GasType: dropDown,
        GasCity: fuelCity

    };   
    console.log(object)
    console.log(city)
        // gasSearch=city
        console.log(gasSearch)
        console.log(dropDown); 
        // localStorage.setItem("fuelType", JSON.stringify(dropDown));
        function storeSearch() {
        localStorage.setItem("city", JSON.stringify(object));
    }
    storeSearch();
    test();
})


function test() {
    // fetch (cityQuery)   
       var retrieveObject = JSON.parse(localStorage.getItem("city", "GasCity"));
       retrieveObject.GasCity;
       console.log(retrieveObject)

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
