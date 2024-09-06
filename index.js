var timer = 50;
var incScore = 0;
var hitNo = 0;

// eventBubbling 
// jispe click karoge us element par event raise hoga, agar waha event raise nhi hoa to uske parent pe jaiga aur wha bhi jise event listen karna tha nhi mila to wo usek parent ke parent par event listen karega


function increaseScore(){
    incScore += 10;
    document.querySelector("#incScore").textContent = incScore;
}

function makeHit() {
    hitNo = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitNo;

}


function makeBubble() {
    var clutter = "";
    for (var i = 1; i < 115; i++) {
        var randomNo = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNo}</div>`;

    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function timerVal() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click",
     function(det) {
        var clickedNo =  Number(det.target.textContent);
        if(clickedNo == hitNo){
            increaseScore();
        }
        makeBubble();
        makeHit();
        
});

makeHit(); //function call karna bhul jata ho
timerVal();
makeBubble();
// increaseScore();

