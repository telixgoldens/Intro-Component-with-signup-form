"use strict";
let effect1 = document.getElementById("first-name");
let effect2 = document.getElementById("last-name");
let effect3 = document.getElementById("email-space");
let effect4 = document.getElementById("password");
let efec1 = document.getElementById("error1");
let efec2 = document.getElementById("error2");
let efec3 = document.getElementById("error3");
let efec4 = document.getElementById("error4");
let changeColor = document.getElementsByClassName("error")
let btn = document.querySelector(".btn");

 


btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (effect1.value == "") {
    efec1.style.display = "block";
    effect1.style.border = "2px solid red";
    effect1.placeholder = ""
  }
  if (effect2.value == "") {
    efec2.style.display = "block";
    effect2.style.border = "2px solid red";
    effect2.placeholder = ""
    
  }
  if (effect3.value == "") {
    efec3.style.display = "block";
    effect3.style.border = "2px solid red";
    effect3.placeholder = "email@example/com"

  }
  if (effect4.value == "") {
    efec4.style.display = "block";
    effect4.style.border = "2px solid red";
    effect4.placeholder = ""
  } else {
    efec1.style.display = "none";
    efec2.style.display = "none";
    efec3.style.display = "none";
    efec4.style.display = "none";
  }
});
