var dispDiv = document.getElementById("display");
var greenBean = document.getElementById("gBean");
var dropzone = document.getElementById("dropzone");
var levelselection = document.getElementById("levelSelection");



var lbutton = document.getElementById("lbutton");
var mbutton = document.getElementById("mbutton");
var dbutton = document.getElementById("dbutton");

var title = document.getElementById("title");
var content = document.getElementById("content");
var picture = document.getElementById("picture");

var machine = document.getElementById("machine");
var smoke = document.getElementById("smoke");

var continueButton = document.getElementById("continue");
var roastButton = document.getElementById("roastButton");
var coolingButton = document.getElementById("coolingButton");
var getButton = document.getElementById("getButton");
var quizButton = document.getElementById("quizButton");
var resetButton = document.getElementById("resetButton");
var nextButton = document.getElementById("nextButton");

var actionButton = document.getElementById("action");
var nextArrow = document.getElementById("nextArrow");
var nextArrow2 = document.getElementById("nextArrow2");

//Check whether bean has been loaded
var beanLoad = 0;

//Check whether levels of roasting has been selected
var selection = 0;

var smoking = 0;

//check whether bean is on the screen
var beanScreen = 0;

var cooled =0;

var stage = 0;

var clicked = false;

cooling = function(){
   var sound = document.getElementById("steamSound");
  title.innerHTML = "Cooling";
  content.innerHTML ="Once the beans have been roasted to your desired roast you need to cool the coffee beans quickly to stop the roast from continuing. There are a number of methods to do this. For example: air cooling and water cooling.<br><br>The storage conditions of roasted coffee must ensure hygiene and prevent contamination of the product by volatile substances, such as oxygen (which can cause oxidisation) and moisture (which can increase the growth of mould).<br><br>Highly-professional companies of renowned traditions such as Saquella do not package coffee immediately after roasting, preferring to let the roasted beans settle and mature in silos.<br>";
  picture.src="Photos/coffeefinishrolling.jpg";;
    sound.play();
  smoke1();
  cooled = 1;
  
                   
    actionButton.removeEventListener("click", cooling);
    nextArrow.style.diplay="inline";
    actionButton.innerHTML="Get the bean!";
  actionButton.setAttribute("href", "quiz.html");
    actionButton.addEventListener("click", getBean);
  
  
}



roasting = function(){
  
  var sound = document.getElementById("roastBean");
  sound.play();
  machine.style.animation = "shake 2s";
  lbutton.style.animation = "shake 2s";
  mbutton.style.animation = "shake 2s";
  dbutton.style.animation = "shake 2s";
  document.getElementById("llabel").style.animation= "shake 2s";;
  document.getElementById("mlabel").style.animation= "shake 2s";;
  document.getElementById("dlabel").style.animation= "shake 2s";;
    
  actionButton.innerHTML = "";
  nextArrow.style.display = "none";
  
}

getBean = function() {
  
   if(beanScreen < 1){
    
    var popsound = document.getElementById("popSound");
  popsound.play();

  var  myBean = document.createElement("img");
  myBean.setAttribute("id", "myBean");
  
  if(selection == 1){
    
      myBean.src="SVG/coffeeSVG/Lightbean.svg";
      title.innerHTML = "Light Roasted";
  content.innerHTML ="Light Roasts Retain Most of the Original Coffee Characteristics.<br><br>Light roasts have a light brown, tan, color and lack of oil on the roasted beans. They have the highest acidity and are the brightest of the three roast levels.<br><br>The characteristics of different origins are most pronounced in light roasts, as are the qualities of the individual coffee. Much of the taste comes from the original coffee, which is why light roasts are often used for cuppings.<br><br>Light roasts are sometimes called Half City, Light City, New England, or Cinnamon roasts.";
  picture.src="Photos/LightRoastedBean.jpg";
  
      
  } else if (selection==2){
    
    
      myBean.src="SVG/coffeeSVG/mediumBean.svg";
      title.innerHTML = "Medium Roasted";
      content.innerHTML ="Medium Roasts Balance Acidity and Body.<br><br>A medium roast will have a darker brown color than a light roast and will look richer. Some of the coffee’s oils may be visible on the beans, as well.<br><br>At this roast level, the coffee’s qualities begin to give way to the roast’s flavors and aromas, creating a balance between acidity and body. You’ll still be able to taste the original coffee, but the beans’ brightness will be complemented with the fuller body that is introduced by the roasting process.<br><br>Medium roasts go by City, Breakfast, Regular, and American roasts.";
      picture.src="Photos/MediumRoastBean.jpg";
  } else if (selection==3){
    
    
      myBean.src="SVG/coffeeSVG/darkBean.svg";
      title.innerHTML = "Dark Roasted";
      content.innerHTML ="Dark roasts are dark brown, sometimes almost black, in color. They resemble chocolate, if it was shaped like a coffee bean. Oils can be seen on the beans at this point.<br><br>When drinking a dark roast, you’re almost exclusively tasting notes from the roast. The brightness of light roasts is replaced with body in dark roasts. Because the original coffee’s qualities are mostly lost at this roast level, it’s difficult to pick out the characteristics of a specific coffee’s origin or lot.<br><br>Historically, dark roasts have been popular in Europe, giving rise to terms such as Continental, Italian, French, and Spanish roasts.";
      picture.src="Photos/DarkRoastedBean.jpg";
  }


  myBean.style.top = "420px";
  myBean.style.left = "620px";
  myBean.style.width="10%";
  myBean.style.position="absolute";
    myBean.style.zIndex="2";
  dispDiv.appendChild(myBean);
     
     nextArrow.style.display = "inline";
     nextArrow2.style.display = "inline";
     resetButton.style.display = "inline";
     actionButton.style.display = "none";
     quizButton.style.display = "inline";
    //actionButton.innerHTML="Take the quiz";
      beanScreen=1;
    
  }
}


resetButton.addEventListener("click", function(){
  
  window.location.href= "machine.html";
  
})

quizButton.addEventListener("click", function(){
  
  window.location.href= "quiz.html";
  
})


function dropSound() {
  
    var sound = document.getElementById("beanSpill");
    sound.play();
}

function smoke1(){
  
  if(smoking<1){
      //put smoking animation here
  smoke.style.display = "inline";
  smoke.style.animation = "smokeRising 3s infinite";
    smoking=1;
  }
}

function allowDrop(ev) {
    ev.preventDefault();
}




function drag(ev) {
      //roasting();
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    //console.log("dropped!");
  
    greenBean.style.display = "none";
    beanLoad = 1;
  dropzone.style.display="none";
  levelselection.style.display="inline";
  
    //console.log("beanload value is" +beanLoad)
    dropSound();
  
    stage++;

    selectStage();
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function selectStage() {
    //activation button selection
  
  
      
      lbutton.addEventListener("click", function(){
    
  lbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
    var sound = document.getElementById("buttonClick");
    sound.play();
  selection = 1;
  mbutton.src = "SVG/CoffeeSVG/button.svg";
  dbutton.src = "SVG/CoffeeSVG/button.svg";
        
        if(clicked==false){
            roastingStage();
        }
  clicked = true;
})

    mbutton.addEventListener("click", function(){
    
  mbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
    var sound = document.getElementById("buttonClick");
    sound.play();
  selection=2;
  lbutton.src = "SVG/CoffeeSVG/button.svg";
  dbutton.src = "SVG/CoffeeSVG/button.svg";
      
          if(clicked == false){
        
        roastingStage();

      }

    clicked=true;

})

    dbutton.addEventListener("click", function(){
    
  dbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
        var sound = document.getElementById("buttonClick");
    sound.play();
    selection =3;
    lbutton.src = "SVG/CoffeeSVG/button.svg";
    mbutton.src = "SVG/CoffeeSVG/button.svg";
      
      if(clicked == false){
        
        roastingStage();

      }

    clicked=true;

})
    
}


function roastingStage() {
  
    console.log("selection value is" +selection)

    if(selection > 0 && beanLoad > 0){
      levelselection.style.display="none";
      rightArrow.style.display= "none";
      nextArrow.style.display = "inline";
      actionButton.innerHTML = "Roast it";
      
      actionButton.addEventListener("click",roasting);
    
  setTimeout(function(){    
        nextArrow.style.display = "inline";
    title.innerHTML = "ROASTING";
  content.innerHTML ='Roasting coffee transforms the chemical and physical properties of green coffee beans into roasted coffee products.<br><br>The vast majority of coffee is roasted commercially on a large scale, but small-scale commercial roasting has grown significantly with the trend toward "single-origin" coffees served at specialty shops.<br><br>The first recorded implements for roasting coffee beans were thin pans made from metal or porcelain, used in the 15th century in the Ottoman Empire and Greater Persia. In the 19th century, various patents were awarded in the U.S. and Europe for commercial roasters, to allow for large batches of coffee.';
  picture.src="Photos/coffeefinishrolling.jpg";;

    actionButton.removeEventListener("click", roasting);
        actionButton.innerHTML = "Cool it off";
        actionButton.addEventListener("click", cooling);
        
    // smoke();
 }, 4000);
      
      
      
      setTimeout(function(){

  
}, 3000);
                 
                 
  
}

    }
  
  

  //etTimeout(function(){ cooling(); }, 10);

  



