var des = document.getElementById("des"),
    options = document.getElementById("options"),
    score = 0,
    question1 = `<div id="quiz1">
            <p>1. What is the purpose of roasting the green coffee bean?</p>
            
            <div id = "options">
                <input type="radio" id="wrong1" name="option"/>
                <label for="wrong1">To make the bean colour brown</label>
                <br/>
                <input type="radio" id="correct" name="option"/>
                <label for="correct">To change the taste of the bean</label>
                <br/>
                <input type="radio" id="wrong2" name="option"/>
                <label for="wrong2">To make the bean smell good</label>
                <br/>
                <input type="radio" id="wrong3" name="option"/>
                <label for="wrong3">No purpose</label>
            </div>
            <div id="nextBut">
                <div id="next">Next</div>
                <img src="SVG/ArrowSVG/RightArrow.svg" id="arrow"/>
            </div>
        </div>`,
    question2 = `<div id="quiz2">
            <p>2. Which coffee bean have sheen of oil on the surface?</p>
            
            <div id = "options">
                <input type="radio" id="wrong1" name="option"/>
                <label for="wrong1">Not Roasted</label>
                <br/>
                <input type="radio" id="wrong2" name="option"/>
                <label for="wrong2">Light Roasted</label>
                <br/>
                <input type="radio" id="wrong3" name="option"/>
                <label for="wrong3">Medium Roasted</label>
                <br/>
                <input type="radio" id="correct" name="option"/>
                <label for="correct">Dark Roasted</label>
            </div>
            <div id = "nextBut2">
                <div id="next">Next</div>
                <img src="SVG/ArrowSVG/RightArrow.svg" id="arrow"/>
            </div>
        </div>`,
    question3 = `<div id="quiz3">
            <p>3. What is the colour of non-roasted coffee bean?</p>
            
            <div id = "options">
                <input type="radio" id="correct" name="option"/>
                <label for="correct">Green</label>
                <br/>
                <input type="radio" id="wrong1" name="option"/>
                <label for="wrong1">Brown</label>
                <br/>
                <input type="radio" id="wrong2" name="option"/>
                <label for="wrong2">Red</label>
                <br/>
                <input type="radio" id="wrong3" name="option"/>
                <label for="wrong3">Yellow</label>
            </div>
            <div id = "nextBut3">
                <div id="next">Next</div>
                <img src="SVG/ArrowSVG/RightArrow.svg" id="arrow"/>
            </div>
        </div>`,
    question4 = `<div id="quiz4">
            <p>4. How many steps are in the roasting proccess?</p>
            
            <div id = "options">
                <input type="radio" id="wrong1" name="option"/>
                <label for="wrong1">1 step</label>
                <br/>
                <input type="radio" id="correct" name="option"/>
                <label for="correct">2 steps</label>
                <br/>
                <input type="radio" id="wrong2" name="option"/>
                <label for="wrong2">3 steps</label>
                <br/>
                <input type="radio" id="wrong3" name="option"/>
                <label for="wrong3">4 steps</label>
            </div>
            <div id = "nextBut4">
                <div id="next">Next</div>
                <img src="SVG/ArrowSVG/RightArrow.svg" id="arrow"/>
            </div>
        </div>`,
    question5 = `<div id="quiz5">
            <p>5. What is our company name?</p>
            
            <div id = "options">
                <input type="radio" id="correct" name="option"/>
                <label for="correct">Kava Sage</label>
                <br/>
                <input type="radio" id="wrong1" name="option"/>
                <label for="wrong1">Kava Stage</label>
                <br/>
                <input type="radio" id="wrong2" name="option"/>
                <label for="wrong2">Cava Sage</label>
                <br/>
                <input type="radio" id="wrong3" name="option"/>
                <label for="wrong3">Cava Stage</label>
            </div>
            <div id = "nextBut5">
                <div id="next">Finish</div>
                <img src="SVG/ArrowSVG/RightArrow.svg" id="arrow"/>
            </div>
        </div>`,
    fivePoints = `<p>Congratulations! You got a perfect score. You recieve a free 500g of our medium roasted coffee bean and a 10% off coupon for your next purchase.</p>
                <div id = "nextBut6">
                <div id="next">Go To Shop</div>
                </div>`,
    notFivePoints = `<p>Congratulations! You recieve a 10% off coupon for your next purchase.</p>
                    <div id = "nextBut6">
                    <div id="next">Go To Shop</div>
                    </div>`; 


function points() {
    if(document.getElementById("correct").checked){
        ++score;
    } else {
        score = score;
    }
    console.log(score);
}

document.getElementById("button").addEventListener("click", function(){
    des.innerHTML = "";
    des.innerHTML = question1;
    //Question 1
    document.getElementById("nextBut").addEventListener("click", function(){
        if(correct.checked){
        ++score;
        } else {
        score = score;
    }
        console.log(score);
        des.innerHTML = "";
        des.innerHTML = question2;
    //Question 2
        document.getElementById("nextBut2").addEventListener("click", function(){
            if(correct.checked){
            ++score;
            } else {
            score = score;
        }
            console.log(score);
            des.innerHTML = "";
            des.innerHTML = question3;
    //Question3
            document.getElementById("nextBut3").addEventListener("click", function(){
                if(correct.checked){
                ++score;
                } else {
                score = score;
            }
                console.log(score);
                des.innerHTML = "";
                des.innerHTML = question4;
    //Question4
                document.getElementById("nextBut4").addEventListener("click", function(){
                    if(correct.checked){
                    ++score;
                    } else {
                    score = score;
                }
                    console.log(score);
                    des.innerHTML = "";
                    des.innerHTML = question5;
    //Question5
                    document.getElementById("nextBut5").addEventListener("click", function(){
                        if(correct.checked){
                        ++score;
                        } else {
                        score = score;
                    }
                        console.log(score);
                        des.innerHTML = "";
                        if(score == 5){
                            des.innerHTML = fivePoints;
                        } else {
                            des.innerHTML = notFivePoints;  
                        }
                        
                        alert("Your score: " + score + "/5");
                    });
                });
            });
        });
    }); 
});