/* ========================== Toggle Style Switcher ========================== */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ========================== Theme Color ========================== */

const alternateStyels = document.querySelectorAll(".alternate-style");

const setActiveStyle = (color) => {
  alternateStyels.forEach((eo) => {
    if (color === eo.getAttribute("title")) {
      eo.removeAttribute("disabled");
    } else {
      eo.setAttribute("disabled", "true");
    }
  });
};

/* ========================== Theme Light And Dark Mode ========================== */

const dayNight = document.querySelector(".day-night")

dayNight.addEventListener("click" , () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")

})

window.addEventListener("load" , () =>{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})
