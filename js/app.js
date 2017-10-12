
var header = document.querySelector("header");
var container = document.querySelector(".container");

var distance = container.offsetHeight - header.offsetHeight;

if(window.pageYOffset >= distance) {
  header.classList.add("has-background");
}

console.log(distance);
