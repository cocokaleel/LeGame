var intensity;
function drawBackground() {
    context.clearRect(0,0,canvas.width,canvas.height);
    
    intensity=score-level*10;
    context.globalAlpha=intensity/10;
    context.fillStyle = "red";
    context.fillRect(0, 0, canvas.width, canvas.height);// x, y, width, height
    context.fillStyle="white";
    context.fillRect(0, 0, canvas.width, canvas.height);// x, y, width, height
    context.globalAlpha=1.0;

    context.fillStyle="black";
    context.font = "30px Arial";
    context.fillText("Score: " + score, 10, 50);
    context.beginPath();
}
