var bubbleFrequency=1000;
var bubbleVelocity=0.5;
var bubbles = [{
    x:canvas.width/2,
    y:canvas.height
}];
var bubbleImage=new Image();
bubbleImage.src="./images/bubble.png";

var bubbleHeight = 50;

function drawBubbles() {
    context.fillStyle = "green";// hex for red
    for (i=0;i<bubbles.length;i++) {
        context.drawImage(bubbleImage, bubbles[i].x, bubbles[i].y, bubbleHeight, bubbleHeight);
        bubbles[i].y-=bubbleVelocity;
        var X=bubbles[i].x;
        var Y=bubbles[i].y;
    }
    bean.inBubble=checkInBubble();

    context.beginPath();
}

function checkInBubble() {
    for (i=0;i<bubbles.length;i++) {
        var X=bubbles[i].x;
        var Y=bubbles[i].y;
        if (bean.x+bean.height/2>bubbles[i].x&&bean.x+bean.height/2<bubbles[i].x+bubbleHeight) {
            if (bean.y>Y&&bean.y<Y+bubbleHeight) {
                return true;
            }
        }
    }
    return false;
}

function generateBubble(){
    var newX=(Math.random()*(0.2*canvas.width))+0.4*canvas.width;
    // var newX=canvas.width/2;
    bubbles.push({x:newX,y:canvas.height-80});
    return bubbles.length;
}

function removeBubble(i) {
    bubbles.splice(i,1);
}