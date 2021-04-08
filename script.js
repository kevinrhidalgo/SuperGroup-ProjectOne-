var modal = document.getElementsByClassName("modal");
var span = document.getElementsByClassName("close")[0];


// this function sees if they click on the screen , we need to add a conditional that when they click off of the modal it will close the modal. //
function addMarkerWithInfowindow(map, marker_position, infowindow_content){
  var coord, marker, infowindow,contentString;
  marker = new google.maps.Marker({
      position: marker_position,
      map: map
  });
  contentString = infowindow_content;
  infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  marker.addListener('click', function() {
     infowindow.open(map, marker);
  });
}

window.onclick = function() {
    console.log("this is another registered click")
}

function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 41.85, lng: -87.65 },
    });
    // init map
var mapDiv = document.getElementById("map");
myLatlng = new google.maps.LatLng(28.5383,-81.3792);
var map = new google.maps.Map(mapDiv, {
  
  center: myLatlng,
  zoom: 3
});


addMarkerWithInfowindow(map, new google.maps.LatLng(28.3852,-81.5639), '<div>Disney World</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(28.5392,-81.3839), '<div>Amway Arena</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(28.4985,-80.9976), '<div>Tosohatche Wildlife Area</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(28.2359,-80.8212), '<div>Rivers Lake Conservation Area</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(27.8225,-80.5602), '<div>St.Sebastian River Preserve Park</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(26.7153,-80.0534), '<div>West Palm Beach</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(25.7776,-80.2377), '<div>Little Havana</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(25.7814,-80.1870), '<div>American Airlines Arena</div>');
addMarkerWithInfowindow(map, new google.maps.LatLng(25.7459,-80.5550), '<div>Everglades Natioanl Park</div>');
    directionsRenderer.setMap(map);
    document.getElementById("submit").addEventListener("click", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
  }
  

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var waypts = [];
    var checkboxArray = document.getElementById("waypoints");

    for (var i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true,
        });
      }
    }
    directionsService.route(
      {
        origin: document.getElementById("start").value,
        destination: document.getElementById("end").value,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK" && response) {
          directionsRenderer.setDirections(response);
          var route = response.routes[0];
          var summaryPanel = document.getElementById("directions-panel");
          summaryPanel.innerHTML = "";

          // For each route, display summary information.
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
 





  //local storage lines here
  var inputStart= document.getElementById("startpoint");
  localStorage.setItem("startpoint", location);
  console.log("start input")

  var inputDest= document.getElementById("destination");
  localStorage.setItem("destination", location);
  console.log("dest input")
