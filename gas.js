var hotelSearch = document.getElementsByClassName("startpoint");
var hotelChain = document.getElementsByClassName("destination");
var searchBtn = document.getElementById("btn");

var nameInput = document.getElementById('destination');

searchBtn.onclick = test; 


function test() {
    var x = document.getElementById("form-input");
    // alert(document.getElementsByTagName("option")[x].value);
    console.log(x.value)
}




// Gas Prices API
fetch('https://api.collectapi.com/gasPrice/stateUsaPrice?state=CA', {
    method: 'POST',
    headers: {
        'authorization': 'apikey 4q4IHx619b47CaX35Ji9xZ:0jz3gHaXHLos0Lj2yXBANg',
        'content-type': 'application/json'
    }
  }).then((response)=> {
      console.log(response.status)
      return response.json();
    }).then((data)=>{
        console.log(data);
});





// function getToken() {
//     fetch("https://cors-anywhere.herokuapp.com/https://test.api.amadeus.com/v1/security/oauth2/token", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body:"grant_type=client_credentials&client_id=toeGvVA5tKmAh3tIai7US2k0LTZLPbRj&client_secret=7bmc4DNvSHA77YVN"
//     }).then((response)=> {
//             console.log(response.status)
//             return response.json();
//     }).then((data)=>{
//             console.log(data);
//             getHotels(data.access_token);
//     });
// }
// function getHotels(token) {
//     token.toString()
//     fetch("https://cors-anywhere.herokuapp.com/https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=ORL&chain='BW'", {
//         method: 'GET',
//         headers: {
//             "Authorization": "Bearer "+ token
//         }
//     }).then((response)=> {
//             console.log(response.status)
//             return response.json();
//     }).then((data)=>{
//             console.log(data);
//     });
// }
// getToken();