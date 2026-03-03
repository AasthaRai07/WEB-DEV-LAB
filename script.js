let currentLight = "red";
let timer = 5;
let interval;

function updateLights() {
  ["red", "yellow", "green"].forEach(light => {
    document.getElementById(light).classList.remove("on");
    document.getElementById(light + "Timer").textContent = "";
  });

  document.getElementById(currentLight).classList.add("on");
  document.getElementById(currentLight + "Timer").textContent = timer;
}

function nextLight() {
  if (currentLight === "red") {
    currentLight = "green";
  } else if (currentLight === "green") {
    currentLight = "yellow";
  } else {
    currentLight = "red";
  }
  timer = 5;
  updateLights();
}

function startCountdown() {
  clearInterval(interval);
  interval = setInterval(() => {
    timer--;
    updateLights();
    if (timer === 0) {
      nextLight();
    }
  }, 1000);
}

document.getElementById("changeBtn").addEventListener("click", () => {
  nextLight();
  startCountdown();
});

document.getElementById("pedBtn").addEventListener("click", () => {
  currentLight = "red";
  timer = 5;
  updateLights();
  startCountdown();
});

// Initialize
updateLights();
startCountdown();
