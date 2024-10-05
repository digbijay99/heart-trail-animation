const bodyEl = document.querySelector("body");

function createSpan(xPos, yPos) {
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}

// For mouse movement
bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  createSpan(xPos, yPos);
});

// For touch movement
bodyEl.addEventListener("touchmove", (event) => {
  const touch = event.touches[0]; // Get the first touch point
  const xPos = touch.pageX;
  const yPos = touch.pageY;
  createSpan(xPos, yPos);
});
