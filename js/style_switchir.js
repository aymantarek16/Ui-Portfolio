// ======================== Style Switcher ======================== //
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
}),
  window.addEventListener("scroll", () => {
    document.querySelector(".style-switcher").classList.contains("open") &&
      document.querySelector(".style-switcher").classList.remove("open");
  });
// ======================== Theme Color Switcher ======================== //

const alternateStyels = document.querySelectorAll(".alternate-style"),
  setActiveStyle = (e) => {
    alternateStyels.forEach((t) => {
      e === t.getAttribute("title")
        ? t.removeAttribute("disabled")
        : t.setAttribute("disabled", "true");
    });
  };
// ======================== Light/Night Mode Switcher ======================== //

dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun"),
    dayNight.querySelector("i").classList.toggle("fa-moon"),
    document.body.classList.toggle("dark");

  let imgHome = document.querySelector(".home img");
  if (dayNight.querySelector("i").classList.contains("fa-sun")) {
    imgHome.src = "img/Ayman Night.png";
  } else {
    imgHome.src = "img/Ayman Light.png";
  }
});

window.addEventListener("load", () => {
  document.body.classList.contains("dark")
    ? dayNight.querySelector("i").classList.add("fa-sun") 
    : dayNight.querySelector("i").classList.add("fa-moon");
});
