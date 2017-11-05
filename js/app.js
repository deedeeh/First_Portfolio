
var body = document.querySelector("body");
var container = document.querySelector(".container");
var header = document.querySelector("header");

window.addEventListener('scroll', function() {
  var distance = container.offsetHeight - header.offsetHeight;
  if(window.pageYOffset >= distance) {
    body.classList.add("has-color");
  } else {
    body.classList.remove("has-color");
  }
});
