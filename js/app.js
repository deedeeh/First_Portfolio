
var header = document.querySelector("header");
var container = document.querySelector(".container");



window.addEventListener('scroll', function() {
  var distance = container.offsetHeight - header.offsetHeight;
  if(window.pageYOffset >= distance) {
    header.classList.add("has-color");
  } else {
    header.classList.remove("has-color");
  }
});
