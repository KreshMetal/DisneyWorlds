var images = document.querySelectorAll(".sliderLine img");
var sliderLine = document.querySelector(".sliderLine")
var btns = document.querySelectorAll(".sliderBtn");
var currentChar = document.querySelector(".currentChar");
var charList = document.querySelectorAll(".charDescription");
var imageSize = 250;
var count = 0;
var width;
var space;

function init()
{
    width = document.querySelector(".slider").offsetWidth;
    if (width < 510 && imageSize == 250)
    {
        imageSize = 130;
        resize(60);
    }
    if (width >= 510 && imageSize == 130)
    {
        imageSize = 250;
        resize(95);
    }
    let imInScreen = Math.floor(width / imageSize);
    if (imInScreen > 5) imInScreen = 5;
    space = Math.floor((width - imInScreen * imageSize) / (imInScreen - 1)) + imageSize;
    sliderLine.style.gap = (space - imageSize) + "px";
}

function sliderNext()
{
    charList[count].style.display = "none";
    count++;
    if(count >= images.length)
        count = 0;
    console.log(space);
    sliderLine.style.left = -count*space + "px";
    charList[count].style.display = "grid";
}

function sliderPrev()
{
    charList[count].style.display = "none";
    count--;
    if(count <= -1)
        count = images.length-1;
        console.log(space);
    sliderLine.style.left = -count*space + "px";
    charList[count].style.display = "grid";
}

function resize(pos)
{
    sliderLine.style.height = imageSize + "px";
    currentChar.style.height = imageSize + 15 + "px";
    currentChar.style.width = imageSize + 15 + "px";
    for(let i = 0; i < btns.length; i++)
    {
        btns[i].style.bottom = pos + "px";
    }
}

window.addEventListener("resize", init);
init();
charList[count].style.display = "grid";