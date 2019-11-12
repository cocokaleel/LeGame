var context, controller, bean, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 600;
context.canvas.width = 400;


var image = new Image();
image.src = 'images/bean.png';

bean = {
  height:110,
  jumping:true,
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

function loop() {

  if (controller.up && bean.jumping == false) {

    bean.y_velocity -= 20;
    bean.jumping = true;

  }

  if (controller.left) {

    bean.x_velocity -= 0.5;

  }

  if (controller.right) {

    bean.x_velocity += 0.5;

  }

  bean.y_velocity += 1.5;// gravity
  bean.x += bean.x_velocity;
  bean.y += bean.y_velocity;
  bean.x_velocity *= 0.9;// friction
  bean.y_velocity *= 0.9;// friction

  // if bean is falling below floor line
  if (bean.y > 520 - 16 - 32) {

    bean.jumping = false;
    bean.y = 520 - 16 - 32;
    bean.y_velocity = 0;

  }

  // if bean is going off the left of the screen
  if (bean.x < -40) {

    bean.x = 400;

  } else if (bean.x > 400) {// if bean goes past right boundary

    bean.x = -40;

  }


  // context.fillStyle = "blue";
  context.fillRect(0, 0, 400, 600);// x, y, width, height
  context.fillStyle = "green";// hex for red
  context.beginPath();

  //draws bean
  context.drawImage(image, bean.x, bean.y, bean.width, bean.height);

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
