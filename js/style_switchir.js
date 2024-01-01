// ======================== Style Switcher ======================== //
const iconSwitch = document.querySelector(".style-switcher-toggler");
let styleSwitcher = document.querySelector(".style-switcher");

iconSwitch.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
}),
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
      styleSwitcher.classList.remove("open");
    }
  });




// ======================== Theme Color Switcher ======================== //

const alternateStyles = document.querySelectorAll(".alternate-style"),
  setActiveStyle = (e) => {

    alternateStyles.forEach((t) => {

      e === t.getAttribute("title")
        ? t.removeAttribute("disabled")
        : t.setAttribute("disabled", "true");
    });
  };
// ======================== Light/Night Mode Switcher ======================== //

dayNight = document.querySelector(".day-night");


dayNight.addEventListener("click", () => {
  let imgHome = document.querySelector(".home img");
  if (dayNight.querySelector("i").classList.contains("fa-sun")) {
    imgHome.src = "img/Ayman Night.png";
    metaDarkMode();
  } else {
    imgHome.src = "img/Ayman Light.png";
    metaLightMode();
  }

  dayNight.querySelector("i").classList.toggle("fa-sun")
  dayNight.querySelector("i").classList.toggle("fa-moon")

  document.body.classList.toggle("dark");

// ================ Set Local storage ================ //
  let theme;
  document.body.classList.contains("dark") ? theme = "dark" : theme = "light";
  localStorage.setItem("PageTheme", JSON.stringify(theme));
});
// ================ Get Local storage ================ //
let GetTheme = JSON.parse(localStorage.getItem('PageTheme'));
if (GetTheme === "dark") {
  document.body.classList = "dark";
}



window.addEventListener("load", () => {
  document.body.classList.contains("dark")
    ? dayNight.querySelector("i").classList.add("fa-sun")
    : dayNight.querySelector("i").classList.add("fa-moon");
});

// ======================== theme-color ======================== //

const themeColor = document.querySelector(".theme-color");

let metaDarkMode = () => {
  themeColor.removeAttribute("content");
  themeColor.setAttribute("content", "#151515");
};

let metaLightMode = () => {
  themeColor.setAttribute("content", "#f2f2fc");
};
