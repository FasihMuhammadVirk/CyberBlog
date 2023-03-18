function setdarkmode() {
  var darkmodebtn = document.querySelector("#darkmodebtn");
  var root = document.documentElement;
  if (darkmodebtn.classList.contains("light_mode")) {
    darkmodebtn.classList.remove("light_mode");
    darkmodebtn.classList.add("dark_mode");
    darkmodebtn.textContent = "Light Mode";
    root.style.setProperty("--white", "white");
    root.style.setProperty("--blue", "rgb(50,44,44)");
    root.style.setProperty("--darkblue", "white");
    root.style.setProperty("--lightblue", "rgb(87, 75,75)");
    root.style.setProperty("--buttoncolor", "black");
  } else {


    darkmodebtn.classList.remove("dark_mode");
    darkmodebtn.classList.add("light_mode");
    darkmodebtn.textContent = "Dark Mode";
    root.style.setProperty("--white", "#5b5757f4");
    root.style.setProperty("--blue", "#8d8d8d");
    root.style.setProperty("--darkblue", "rgb(0,0,0");
    root.style.setProperty("--lightblue", "#cecdcd");
    root.style.setProperty("--buttoncolor", "rgb(255,244,244");
  }
}

function setTextMode() {
  const imageModeBtn = document.querySelector("#imagemodebtn");
  const img = document.querySelectorAll(".hideimage");
  const width = document.querySelectorAll(".widthfull");

  if (imageModeBtn.classList.contains("image_mode")) {
    imageModeBtn.classList.remove("image_mode");
    imageModeBtn.classList.add("text_mode");
    imageModeBtn.textContent = "Image mode";
    img.forEach((i) => (i.style.display = "none"));
    width.forEach((i) => (i.style.width = "100%"));
  } else {
    imageModeBtn.classList.add("image_mode");
    imageModeBtn.classList.remove("text_mode");
    imageModeBtn.textContent = "Text mode";
    img.forEach((i) => (i.style.display = ""));
    width.forEach((i) => (i.style.width = ""));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  navigator.getBattery().then(function (battery) {
    var percentage = battery.level * 100;

    if (percentage < 20) {
      // Call a function to optimize the website for low battery usage
      optimizeForLowBattery();
    } else {
      // Call a function to optimize the website for normal battery usage
      optimizeForNormalBattery();
    }
  });
});

function optimizeForLowBattery() {
  var darkmodebtn = document.querySelector("#darkmodebtn");
  var root = document.documentElement;
  darkmodebtn.classList.remove("light_mode");
  darkmodebtn.classList.add("dark_mode");
  darkmodebtn.textContent = "Light Mode";
  root.style.setProperty("--white", "white");
  root.style.setProperty("--blue", "rgb(50,44,44)");
  root.style.setProperty("--darkblue", "white");
  root.style.setProperty("--lightblue", "rgb(87, 75,75)");
  root.style.setProperty("--buttoncolor", "black");

  const imageModeBtn = document.querySelector("#imagemodebtn");
  const img = document.querySelectorAll(".hideimage");
  const width = document.querySelectorAll(".widthfull");

  imageModeBtn.classList.remove("image_mode");
  imageModeBtn.classList.add("text_mode");
  imageModeBtn.textContent = "Image mode";
  img.forEach((i) => (i.style.display = "none"));
  width.forEach((i) => (i.style.width = "100%"));
}

function optimizeForNormalBattery() {
  console.log("Battery is High");
}
