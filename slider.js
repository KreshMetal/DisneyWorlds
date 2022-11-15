var images = document.querySelectorAll(".sliderLine img");
var sliderLine = document.querySelector(".sliderLine")
var count = 0;
var width;
var space;

function init()
{
    width = document.querySelector(".slider").offsetWidth;
    console.log(width);
    let imInScreen = Math.floor(width / 250);
    if (imInScreen > 5) imInScreen = 5;
    space = Math.floor((width - imInScreen * 250) / (imInScreen - 1)) + 250;
    sliderLine.style.gap = (space - 250) + "px";
}

function sliderNext()
{
    count++;
    if(count >= images.length)
        count = 0;
    sliderLine.style.left = -count*space + "px";
}

function sliderPrev()
{
    count--;
    if(count <= -1)
        count = images.length-1;
    sliderLine.style.left = -count*space + "px";
}

window.addEventListener("resize", init);
init();

