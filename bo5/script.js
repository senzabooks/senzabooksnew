let showActive = true;

let movingDiv = document.getElementById("floating-div");
let mainImg = document.getElementById("main-img");

let xPos =  0; // Start at left
let yPos =  0; // Start at top
let xSpeed = 0.6;
let ySpeed = 0.6;



function updatePosition() {
  if (showActive) {
    xPos += xSpeed;
    yPos += ySpeed;
  
    if (xPos + movingDiv.offsetWidth >= window.innerWidth || xPos <= 0)
      xSpeed = -xSpeed;
    if (yPos + movingDiv.offsetHeight >= window.innerHeight || yPos <= 0)
      ySpeed = -ySpeed;
  
    movingDiv.style.left = xPos + "px";
    movingDiv.style.top = yPos + "px";

  }
}

var intervalId = setInterval(updatePosition, 10);


document.addEventListener("DOMContentLoaded", () => {
  const toggleLink = document.getElementById("toggle-link");
  const currentText = document.querySelector(".current-text");
  const aboutText = document.querySelector(".about-text");
  const floatingDiv = document.getElementById("floating-div");

  // Variables for floating div animation
  let xPos = 0;
  let yPos = 0;
  let xSpeed = 0.7;
  let ySpeed = 0.7;
  let intervalId;

  // Adjust position on window resize
  window.addEventListener("resize", function () {
    xPos = Math.min(xPos, window.innerWidth - floatingDiv.offsetWidth);
    yPos = Math.min(yPos, window.innerHeight - floatingDiv.offsetHeight);
    floatingDiv.style.left = xPos + "px";
    floatingDiv.style.top = yPos + "px";
  });

});