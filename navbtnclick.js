var isOpen = false;
var btn = document.getElementById("navbtn");
var circle = document.getElementById("circle");
var nav = document.querySelector("header");
var links = document.querySelectorAll(".nav");
var main = document.getElementById("wrapper")

function navMenuBtnClc()
{
    if(!isOpen)
    {
        btn.style.display = "none";
        circle.style.display = "inline";
        nav.style.position = "fixed";
        nav.style.backgroundImage = "linear-gradient(0deg,#43a4c5 0%, #4cd8b0 100%)";
        nav.style.height = "100%";
        main.style.transform = "translateY(100px)";
        links[0].style.display = "flex";
        links[1].style.display = "flex";
        document.body.classList.add("hiden");
        isOpen = true;
    }
    else
    {
        btn.style.display = "block";
        circle.style.display = "none";
        links[0].style.display = "none";
        links[1].style.display = "none";
        nav.style.height = "100px";
        isOpen = false;
        document.body.classList.remove("hiden");
        setTimeout(() => {nav.style.background = "transparent"}, 550)
        setTimeout(() => {nav.style.position = "relative"; main.style.transform = "translateY(0px)";}, 700)
    }
}
