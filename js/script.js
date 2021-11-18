// Get the modal
var modal = document.getElementById("myModal");
var modul = document.getElementById("myModul");
var modul1 = document.getElementById("myModul1");
var modul2 = document.getElementById("myModul2");
var modul3 = document.getElementById("myModul3");
var modul4 = document.getElementById("myModul4");
var modul5 = document.getElementById("myModul5");
var modul6 = document.getElementById("myModul6");

// Get the button that opens the modal
var btn = document.getElementById("btn");
var tombol = document.getElementById("myTombol");
var tombol1 = document.getElementById("myTombol1");
var tombol2 = document.getElementById("myTombol2");
var tombol3 = document.getElementById("myTombol3");
var tombol4 = document.getElementById("myTombol4");
var tombol5 = document.getElementById("myTombol5");
var tombol6 = document.getElementById("myTombol6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spin = document.getElementsByClassName("closed")[0];
var spin1 = document.getElementsByClassName("closed1")[0];
var spin2 = document.getElementsByClassName("closed2")[0];
var spin3 = document.getElementsByClassName("closed3")[0];
var spin4 = document.getElementsByClassName("closed4")[0];
var spin5 = document.getElementsByClassName("closed5")[0];
var spin6 = document.getElementsByClassName("closed6")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

tombol.onclick = function() {
    modul.style.display = "block";
}

tombol1.onclick = function() {
    modul1.style.display = "block";
}

tombol2.onclick = function() {
    modul2.style.display = "block";
}

tombol3.onclick = function() {
    modul3.style.display = "block";
}

tombol4.onclick = function() {
    modul4.style.display = "block";
}

tombol5.onclick = function() {
    modul5.style.display = "block";
}

tombol6.onclick = function() {
    modul6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

spin.onclick = function() {
    modul.style.display = "none";
}

spin1.onclick = function() {
    modul1.style.display = "none";
}

spin2.onclick = function() {
    modul2.style.display = "none";
}

spin3.onclick = function() {
    modul3.style.display = "none";
}

spin4.onclick = function() {
    modul4.style.display = "none";
}

spin5.onclick = function() {
    modul5.style.display = "none";
}

spin6.onclick = function() {
    modul6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul) {
        modul.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul1) {
        modul1.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul2) {
        modul2.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul3) {
        modul3.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul4) {
        modul4.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul5) {
        modul5.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modul6) {
        modul6.style.display = "none";
    }
}