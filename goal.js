var goal = {
    x:0,
    y:canvas.height,
    width: 100,
    height: 50
};

var goalB = {
    x: 0,
    y: 0,
    offset: 100,
    width: 100,
    bottom: goal.y-100
};

function drawGoal (){
    context.fillStyle = "grey";// hex for red
    context.fillRect(goal.x, goal.y-goal.height, goal.width, goal.height);// x, y, width, height
    context.fillRect(goalB.x, goalB.y, goalB.width, goalB.bottom);// x, y, width, height

    context.beginPath();
    context.fillStyle="white";
    context.font = "8px Arial";
    context.fillText("Goal: Escape the crock pot!", 0, canvas.height-goal.height+16);

    goalB.bottom=goal.y-goal.height-goalB.offset;
}