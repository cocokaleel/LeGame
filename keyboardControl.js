var controller, bean, loop;
var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");
var image = new Image();
image.src = 'images/bean.png';

bean = {
  height:40,
  jumping:true,
  inBubble:false,
  width:110,
  x:180-32, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0
};

controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// left key
        controller.left = key_state;
      break;
      case 38:// up key
        controller.up = key_state;
      break;
      case 39:// right key
        controller.right = key_state;
      break;

    }

  }

};



function drawBean() {
  if (controller.up && (bean.jumping == false||bean.inBubble)) { //(controller.up && bean.jumping == false)

    bean.y_velocity -= 20;
    bean.jumping = true;

  }


  if (controller.left) {

    bean.x_velocity -= 0.5;

  }

  if (controller.right) {

    bean.x_velocity += 0.5;

  }
  if (bean.inBubble==false) {

    bean.y_velocity += 0.5;// gravity
    bean.x_velocity *= 0.9;// friction
    bean.y_velocity *= 0.9;// friction
  }

  if (bean.inBubble==true) {
    bean.y_velocity= -1*bubbleVelocity;
    // bean.x_velocity=0;
    if (controller.up) {
      bean.y_velocity -=5;
    }
  }

  bean.x += bean.x_velocity;
  bean.y += bean.y_velocity;

  // if bean is falling below floor line
  if (bean.y > canvas.height-bean.height) {

    bean.jumping = false;
    bean.y = canvas.height-bean.height;
    bean.y_velocity = 0;

  }

  // if bean is going off the left of the screen
  if (bean.x<goal.width+10&&(bean.y>goal.y-goal.height||bean.y+bean.height<goalB.bottom)) {

    bean.x_velocity=5;
    // bean.x=goal.width+bean.width+10;

  } else if (bean.x+bean.height > canvas.width) {// if bean goes past right boundary

    bean.x_velocity = -5;

  }
  if (bean.x<goal.width&&bean.y+bean.height>goal.y-goal.height+2&&bean.y+bean.height>goalB.bottom) {
    scoreBoom();
    bean.x=canvas.width/2;
    bean.y=canvas.height-bean.height;
  }

  //drawing bean
  context.drawImage(image, bean.x, bean.y, bean.height, bean.height);
}

function scoreBoom() {
  score++;
  goal.height+=50;
  bubbleFrequency-=100;
  bubbleVelocity+=1;
}


window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
