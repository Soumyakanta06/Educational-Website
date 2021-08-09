$(document).ready(function() {
  // Toggle menu on click
  $("#menu-toggler").click(function() {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }

 });

 learners = document.getElementById("learners");
 courses = document.getElementById("courses");
 instructors = document.getElementById("instructors");

var a = 1;
setInterval(() => {
  if(a<=4000){
    learners.innerHTML = a +"+";
    a++;

  }
},10)

var b = 1;
setInterval(() => {
  if(b<=30){
    courses.innerHTML = b + "+";
    b++;

  }
},50)

var c = 1;
setInterval(() => {
  if(c<=80){
    instructors.innerHTML = c + "+";
    c++;

  }
},50)