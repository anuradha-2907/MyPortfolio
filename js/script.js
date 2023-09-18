

var typed = new Typed(".typing",{
    strings: ["Full Stack Developer","ML Developer","Data Analyst"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

const navtoggler = document.querySelector(".nav-toggler span i"),
nav = document.querySelector(".side");
navtoggler.addEventListener("click",()=>{
    nav.classList.toggle("open");
    if(styler.classList.contains("open")){
        styler.classList.remove("open");
    }
})