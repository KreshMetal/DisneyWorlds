var images = document.querySelectorAll(".sliderLine img");
var sliderLine = document.querySelector(".sliderLine")
var btns = document.querySelectorAll(".sliderBtn");
var currentChar = document.querySelector(".currentChar");
var charList = document.querySelectorAll(".charDescription");
var imageSize = 250;
var imInScreen;
var count = 0;
var width;
var space;

function init()
{
    width = document.querySelector(".slider").offsetWidth;
    if (width < 510 && imageSize == 250)
    {
        imageSize = 130;
        resize(40);
    }
    if (width >= 510 && imageSize == 130)
    {
        imageSize = 250;
        resize(95);
    }
    imInScreen = Math.floor(width / imageSize);
    if (imInScreen > 5) imInScreen = 5;
    space = Math.floor((width - imInScreen * imageSize) / (imInScreen - 1)) + imageSize;
    sliderLine.style.gap = (space - imageSize) + "px";
    if(count > images.length - imInScreen)
    {
        sliderLine.style.left = -(images.length - imInScreen)*space + "px";
        currentChar.style.left = (count - (images.length - imInScreen))*space - 7 + "px";
    }
    else
    {
        sliderLine.style.left = -count*space + "px";
        currentChar.style.left = -7 + "px";
    }
}

function sliderNext()
{
    if(count == 0)
        btns[1].style.display = "block";
    charList[count].style.display = "none";
    count++;
    if (count == images.length - 1)
        btns[0].style.display = "none";
    if(count > images.length - imInScreen)
    {
        currentChar.style.left = (count - (images.length - imInScreen))*space - 7 + "px";
    }
    else
    {
        sliderLine.style.left = -count*space + "px";
    }
    charList[count].style.display = "grid";
}

function sliderPrev()
{
    if(count == images.length - 1)
        btns[0].style.display = "block";
    charList[count].style.display = "none";
    count--;
    if (count == 0)
        btns[1].style.display = "none";
    if(count >= images.length - imInScreen)
    {
        currentChar.style.left = (count - (images.length - imInScreen))*space - 7 + "px";
    }
    else
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
btns[1].style.display = "none";