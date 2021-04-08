var gasSearch = document.getElementsByClassName("startpoint").value;
var gasSearchDest = document.getElementsByClassName("destination");
var searchBtn = document.getElementById("btn");
// query selector for search location input
var searchValue = document.querySelector("input", startpoint);
var nameInput = document.getElementById("destination");
// var = JSON.parse(localStorage.getItem("cities")) || [];

// console.log(test)
var queryUrl = "https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL";

//console logs city that was searched
searchBtn.addEventListener("click", function (getValue) {
  var city = document.getElementById("startpoint").value.trim();
  var dropDown = document.getElementById("form-input").value.trim();
  var fuelCity = document.getElementById("gas-input").value.trim();
  console.log(object);
  console.log(city);
  console.log(dropDown);
  var object = {
    City: city,
    GasType: dropDown,
    GasCity: fuelCity,
  };
  // gasSearch=city
  // localStorage.setItem("fuelType", JSON.stringify(dropDown));
  function storeSearch() {
    localStorage.setItem("city", JSON.stringify(object));
  }
  storeSearch();
  getObject();
  getApiData();
});


function getObject() {
  var retrieveObject = JSON.parse(localStorage.getItem("city", "GasCity"));
  var citySearched = retrieveObject.GasCity;
  retrieveObject.GasCity;
  console.log("This is the retrieved object---------");
  console.log(retrieveObject.GasCity);
//   cityFetch(citySearched);
}
// if searched city = data.city put that data on the page

// function cityFetch(citySearched) {
//   var cityQuery = "https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL";
//   // fetch(cityQuery) + GasCity +
//   console.log("This is city query");
//   console.log(cityQuery);
//   fetch(cityQuery, {
//     headers: {
//       authorization: "apikey " + gasApi,
//     },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

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

// these variables pull the UL from the html

var orlGas = document.getElementsByClassName("Orlando");
var melbourneGas = document.getElementsByClassName("Melbourne");
var lGas = document.getElementsByClassName("Pt-St-Lucie");
var bGas = document.getElementsByClassName("Boca-Roton");
var fortGas = document.getElementsByClassName("Fort-Lauderdale");
var mGas = document.getElementsByClassName("Miami");

console.log(melbourneGas)

function getApiData() {

    fetch("https://api.collectapi.com/gasPrice/stateUsaPrice?state=FL", {
  method: "POST",
  headers: {
    authorization: "apikey 52sLDeYURVVXKW8bageYZQ:0LSQbKiaix3LHU12xLIuLI",
    "content-type": "application/json",
  },
})
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then(function (data) {
    addGasLi(data)

  });
}
// })

// City and Number in array
// Ft. Lauderdale:3, Melbourne:9, Miami;10, Orlando:13, Port-St. Lucie:16, Boca Raton:23
function addGasLi(data) {
    console.log(data);
    
    var Melbourne = data.result.cities[9];
    var Ft_Lauderdale = data.result.cities[3];
    var Miami = data.result.cities[10];
    var Orlando = data.result.cities[13];
    var Lucie = data.result.cities[16];
    var Boca = data.result.cities[23];
    
    var melGas = [Melbourne.diesel, Melbourne.gasoline, Melbourne.name];
    var fortGas = [Ft_Lauderdale.diesel, Ft_Lauderdale.gasoline, Ft_Lauderdale.name]
    var orlandoGas = [Orlando.diesel, Orlando.gasoline, Orlando.name]
    var miamiGas = [Miami.diesel, Miami.gasoline, Miami.name]
    var lucieGas = [Lucie.diesel, Lucie.gasoline, Lucie.name]
    var bocaGas = [Boca.diesel, Boca.gasoline, Boca.name]

    var localStorageObj = JSON.parse(localStorage.getItem("city"));
    console.log(localStorageObj)

    

    if (melGas[2].includes(localStorageObj.GasCity)) {
        for (i = 0; i < melGas.length; i++) {
            var createListing = document.createElement("li");
            createListing.textContent = melGas[i]
            console.log(createListing);
            melbourneGas[0].appendChild(createListing)
        }
    } else if (fortGas[2].includes(localStorageObj.GasCity)) {
            for (i = 0; i < fortGas.length; i++)
                createListing;
                createListing.textContent = fortGas[i]
                fortGas[0].appendChild(createListing)
        } else if (orlandoGas[2].includes(localStorageObj.GasCity)) {
            for (i = 0; i < orlandoGas.length; i++) {
                createListing;
                createListing.textContent = orlandoGas[i]
                orlGas.textContent = orlandoGas[i]
            }
    }
}