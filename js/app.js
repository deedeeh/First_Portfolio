
var body = document.querySelector("body");
var container = document.querySelector(".container");
var header = document.querySelector("header");
var aboutLink = document.getElementById("aboutLink");
var workLink = document.getElementById("workLink");


window.addEventListener('scroll', function() {
  var distance = container.offsetHeight - header.offsetHeight;
  if(window.pageYOffset >= distance) {
    body.classList.add("has-color");
  } else {
    body.classList.remove("has-color");
  }
});


// window.addEventListener("load", function() {
//   var top = document.getElementById("about").getBoundingClientRect().top - 90;
//   container.style.height = window.innerHeight + "px";
//   aboutLink.addEventListener("click", function(e) {
//     e.preventDefault();
//     window.scrollTo(0, top);
//     console.log(top);
//   });
// });
