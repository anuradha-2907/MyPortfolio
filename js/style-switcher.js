const style_switcher = document.querySelector(".style-toggler"),
styler =document.querySelector(".style-switcher");
style_switcher.addEventListener("click",() => {
    styler.classList.toggle("open");
})

window.addEventListener("scroll",() => {
    if(styler.classList.contains("open")){
        styler.classList.remove("open");
    }
})

const otherstyle = document.querySelectorAll(".other-style");
function setStyle(color){
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor(){
    otherstyle.forEach((style) => {
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute('disabled','true');
        }
    })
}


const daynight = document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun")
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon")
    }
})