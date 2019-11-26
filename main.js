var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");
var interval;
var score;
var level;

function start() {
    level=0;
    score=0;
}
function newLevel() {
    goal.height=50;
    var bubbleFrequency=1000;
    var bubbleVelocity=0.5;
}

function loop() {

    drawBackground();
    drawBubbles();
    //draws bean
    drawBean();
    drawGoal();
    if (goal.height>=canvas.height) {
        newLevel();
    }
    // call update when the browser is ready to draw again
    requestAnimationFrame(loop, canvas);
    
}

interval=setInterval(generateBubble, bubbleFrequency);
requestAnimationFrame(loop, canvas);
