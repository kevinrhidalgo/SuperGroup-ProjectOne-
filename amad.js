function getToken() {
    fetch("https://cors-anywhere.herokuapp.com/https://test.api.amadeus.com/v1/security/oauth2/token", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body:"grant_type=client_credentials&client_id=4xiuO0WJafaP7PjWlgp8xEwROAnAQ8b6&client_secret=aLeGYwQxZMSAGwqx"
    }).then((response)=> {
            console.log(response.status)
            return response.json();
    }).then((data)=>{
            console.log(data);
            getHotels(data.access_token);
    });
}
function getHotels(token) {
    token.toString()
    fetch("https://cors-anywhere.herokuapp.com/https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=ORL&chain='BW'", {
        method: 'GET',
        headers: {
            "Authorization": "Bearer "+ token
        }
    }).then((response)=> {
            console.log(response.status)
            return response.json();
    }).then((data)=>{
            console.log(data);
    });
}
getToken();