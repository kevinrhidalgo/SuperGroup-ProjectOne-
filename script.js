var modal = document.getElementsByClassName("modal");
var span = document.getElementsByClassName("close")[0];


// the recycled function for the marker, infowindow and its content
function addMarkerWithInfowindow(map, marker_position, infowindow_content){
  //the variable so that the marker, infowindow and contentstring can all appear on the map and function 
  var coordinates, marker, infowindow,contentString;
  marker = new google.maps.Marker({
      position: marker_position,
      map: map
  });
  //the content string is makes the infowindow available to add content for the markers
  contentString = infowindow_content;
  infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  //the addlistner for the clicked markers so the content on the infowindow can appear
  marker.addListener('click', function() {
     infowindow.open(map, marker);
  });
}
//should be a working function to console.log the pressed google maps location
window.onclick = function() {
    console.log("this is another registered click")
}
//the given function by the google api so that the maps becomes visible and fully functioning 
function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
// the variable for the specific location  where the map is zoomed on when reloading the page. In this case orlando, cause this is where we are at
    var map = new google.maps.Map(document.getElementById("map"), {
      //the level of zoom we want in our map
      zoom: 6,
      center: { lat: 28.5383, lng: -81.3792 },
    });

    // init map
var mapDiv = document.getElementById("map");
myLatlng = new google.maps.LatLng(28.5383,-81.3792);
var map = new google.maps.Map(mapDiv, {
  
  center: myLatlng,
  zoom: 3
});

// the markers with its lat/lng coordinates to appear on the map // the infowindow where the location name appears on the map
addMarkerWithInfowindow(map, new google.maps.LatLng(28.3852,-81.5639), 'Disney World');
addMarkerWithInfowindow(map, new google.maps.LatLng(28.5392,-81.3839), 'Amway Arena');
addMarkerWithInfowindow(map, new google.maps.LatLng(28.4985,-80.9976), 'Tosohatche Wildlife Area');
addMarkerWithInfowindow(map, new google.maps.LatLng(28.2359,-80.8212), 'Rivers Lake Conservation Area');
addMarkerWithInfowindow(map, new google.maps.LatLng(27.8225,-80.5602), 'St.Sebastian River Preserve Park');
addMarkerWithInfowindow(map, new google.maps.LatLng(26.7153,-80.0534), 'West Palm Beach');
addMarkerWithInfowindow(map, new google.maps.LatLng(25.7776,-80.2377), 'Little Havana');
addMarkerWithInfowindow(map, new google.maps.LatLng(25.7814,-80.1870), 'American Airlines Arena');
addMarkerWithInfowindow(map, new google.maps.LatLng(25.7459,-80.5550), 'Everglades National Park');

//getting the element id submit on the html so when clicked on, the distanced betweene the starting and end points appear
    directionsRenderer.setMap(map);
    document.getElementById("submit").addEventListener("click", () => {
      //from the google api the  calculated miles apart calculated and display between the points 
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
  }
  
//the function for the displayed routes for the waypoints between the start and end
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var waypts = [];
    //the variable for the array of waypoints locations aviable between the starting and end locations  
    var checkboxArray = document.getElementById("waypoints");
//the number of checkboxes that are highlighted that i have selected
    for (var i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true,
        });
      }
    }
    //demonstrates the use of the DirectionsService object to fetch directions between different cities selected
    directionsService.route(
      { 
        //all these under the the object are the values so it can be called upon when using the map
        //the starting point value fetched within the object for the object to function & give proper directions
        origin: document.getElementById("start").value,
        //the end point value fetched within the object for the object to function & give proper directions
        destination: document.getElementById("end").value,
        waypoints: waypts,
        optimizeWaypoints: true,
        //value within the directionservice obeject that is saying we will travel by car so that calculated distance is given for driving and lets say rather than walking which would be longer
        travelMode: google.maps.TravelMode.DRIVING,
      },
      //the conditional statement for the function to work properly for the routes to calculate efficiently 
      (response, status) => {
        if (status === "OK" && response) {
          directionsRenderer.setDirections(response);
          var route = response.routes[0];
          var summaryPanel = document.getElementById("directions-panel");
          summaryPanel.innerHTML = "";

          // For each route, display summary information form the google api
          for (var i = 0; i < route.legs.length; i++) {
            var routeSegment = i + 1;
            summaryPanel.innerHTML +=
              "<b>Route Segment: " + routeSegment + "</b><br>";
            summaryPanel.innerHTML += route.legs[i].start_address + " to ";
            summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
            summaryPanel.innerHTML +=
              route.legs[i].distance.text + "<br><br>";
          }
        } 
      }
    );
  }
 





  //potential local storage lines here for the destinations starting, ending and possible waypoints
  var inputStart= document.getElementById("startpoint");
  localStorage.setItem("startpoint", location);
  console.log("start Point input")

  var inputStart= document.getElementById("startpoint");
  localStorage.setItem("startpoint", location);
  console.log("End Point input")

  var inputDest= document.getElementById("destination");
  localStorage.setItem("destination", location);
  console.log("dest input")