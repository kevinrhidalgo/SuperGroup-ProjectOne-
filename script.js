var modal = document.getElementsByClassName("modal");
var searchBtn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

// this should open up the modal form
searchBtn.onclick = function() {
    console.log("this is a registered click")
}

// this function sees if they click on the screen , we need to add a conditional that when they click off of the modal it will close the modal. //

window.onclick = function() {
    console.log("this is another registered click")
}
