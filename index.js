// Your code here

// Grab the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Prevent moving past the left edge
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Prevent moving past the right edge (considering the dodger's width)
  if (left < 360) {  // 400px width of the game - 40px width of the dodger
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener to handle keydown events
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft(); // Move left when the left arrow key is pressed
  } else if (e.key === "ArrowRight") {
    moveDodgerRight(); // Move right when the right arrow key is pressed
  }
});
