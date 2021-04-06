var modal = document.getElementsByClassName("modal");
var searchBtn = document.getElementById("btn");

// this should open up the modal form
searchBtn.onclick = function(modalOpen) {
    console.log("this is a registered click")
}

window.onclick = function(closeModal) {
    console.log("this is another registered click")
}
