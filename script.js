var modal = document.getElementsByClassName("modal");
var span = document.getElementsByClassName("close")[0];


// this function sees if they click on the screen , we need to add a conditional that when they click off of the modal it will close the modal. //

window.onclick = function() {
    console.log("this is another registered click")
}

function initMap() {
  var locationOne = {lat: 28.404, lng: -81.579};
  
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var locations = [
      {title: 'Disney World', location: {lat: 28.404, lng: -81.579}},
      {title: 'Amway Arena', location: {lat: 28.539, lng: -81.383}},
      {title: 'Tosohatche', location: {lat: 28.499, lng: -80.917}},
      {title: 'Rivers Lake Conservative area', location: {lat: 28.236, lng: -80.82}},
      {title: 'St.Sebastian River State Park', location: {lat: 27.828, lng: -80.56}},
      {title: 'West Palm Beach', location: {lat: 26.715, lng: -80.05}}
      
      

      
  ];
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 28.5383, lng: -81.3792 },
    });

    for (var i = 0; i < locations.length; i++) {
      var position = locations[i].location;
      var title = locations[i].title;
      var marker = new google.maps.Marker({
          map: map,
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          id: i
          

      });

  }
  
    directionsRenderer.setMap(map);
    document.getElementById("submit").addEventListener("click", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
      console.log("click");
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
