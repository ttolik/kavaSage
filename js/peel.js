var topPart = document.getElementById("topPart");
var bottomPart = document.getElementById("bottomPart");
var msgbox = document.getElementById("msgbox");
var header = document.getElementById("header");
var ntext = document.getElementById("main-text");
var nimg = document.getElementById("picture");
var changeText = document.getElementById("rightText");
var upbutton = document.getElementById("UpButt");
var downbutton = document.getElementById("DownButt");
var greenTop = document.getElementById("imgTopGreen");
var greenBottom = document.getElementById("imgBottomGreen");
var nbtn = document.getElementById("btn");
var BtnArrowUp = document.getElementsByClassName("arrowup");
var BtnArrowDown = document.getElementsByClassName("arrow");
var smlText = document.getElementById("smallText");

var num1 = 0;
var num2 = 0;

var stage = 1;
var stage2 = 1,
    arrowNum = 0;
/*topPart.addEventListener("click", function () {
    topPart.style.bottom = "250px";
    topPart.style.display = "none";
    msgbox.style.display = "block";
    console.log("Clicked Top");
});
bottomPart.addEventListener("click", function () {
    bottomPart.style.top = "250px";
    bottomPart.style.display = "none";
    ntext.style.display = "block";
    nimg.style.display = "block";
    header.style.display = "block";
    console.log("Clicked bottom");
});
*/
//fruit.addEventListener("click", function () {
//  changeText.innerHTML = "Open Me";
//ntext.innerHTML = "At the very center of the fruit are two blue-green seeds wrapped in a thin skin or parchment and underneath that, an exceptionallythin film known as silver-skin. The seeds are the fresh form of thebeans that are used to produce one of the world’s most beloved beverages, coffee."
//header.innerHTML = "Green Coffee Bean";
// nimg.src = "img/bean.png";
//});

upbutton.addEventListener("click", function () {

    if (stage == 1) {

        console.log("clicked");
        topPart.style.display = "none";
        smlText.style.display = "none";
        msgbox.style.top = "-1403px";

        num1 = 1;
        console.log(num1, num2);

        if (num1 > 0 && num2 > 0) {

            displayMsg();

        }
        stage++;


    } else {

        greenTop.style.display = "none";
        greenBottom.style.top = "495px";
        changeText.style.top = "93px";
        msgbox.style.top = "-605px"
    }


arrowNum++;
    console.log(arrowNum);
    if(arrowNum == 4){
        nbtn.style.display = "block";
        nbtn.style.top = "700px";
        nbtn.style.right = "200px";
        changeText.style.display = "none";
    }
});

downbutton.addEventListener("click", function () {

    if (stage2 == 1) {

        console.log("clicked2");
        bottomPart.style.display = "none";
        smlText.style.display = "none";
        changeText.style.top = "-220px";
        msgbox.style.top = "-920px";
        num2 = 1;
        if (num1 > 0 && num2 > 0) {
            console.log(num1, num2);
            displayMsg();

        }

        stage2++;

    } else {

        greenBottom.style.display = "none";
        changeText.style.top = "133px";
       msgbox.style.top = "-132px";

    }

    arrowNum++;
    console.log(arrowNum);
    if(arrowNum == 4){
        nbtn.style.display = "block";
        nbtn.style.bottom = "-300px";
        nbtn.style.left = "200px";
        changeText.style.display = "none";
    }
});


nbtn.addEventListener("click", function() {

    window.location.href = "machine.html";
    console.log("show the button")
});


function displayMsg() {
    changeText.innerHTML = "Open me";
    ntext.innerHTML = "At the very center of the fruit are two blue-green seeds wrapped ina thin skin or parchment and underneath that, an exceptionally thin film known as silver-skin. The seeds are the fresh form of the beans that are used to produce one of the world’s most beloved beverages, coffee.";
    header.innerHTML = "Green Coffee Bean";
    nimg.src = "peal/bean.png";
}
