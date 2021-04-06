var modal = document.getElementsByClassName("modal");
var searchBtn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

// this should open up the modal form
searchBtn.onclick = function() {
    modal.style.display = "block"
    console.log("this is a registered click")
}


window.onclick = function(closeModal) {
    console.log("this is another registered click")
}
