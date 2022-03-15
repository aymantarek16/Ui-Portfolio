/* ========================== Toggle Style Switcher ========================== */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click" , ()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
})
