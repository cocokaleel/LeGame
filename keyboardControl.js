var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 600;
context.canvas.width = 400;


var image = new Image();
  image.src = 'images/bean.png';

rectangle = {
  height:110,
  jumping:true,
  width:110,
  x:180-32, // center of the canvas
  x_velocity:0,
  y:0,
  y_velocity:0
};

/*var image = new Image();
  image.src = 'images/bean.png';
  image.onload = function(){
  context.drawImage(image, rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}*/

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

loop = function() {

  if (controller.up && rectangle.jumping == false) {

    rectangle.y_velocity -= 20;
    rectangle.jumping = true;

  }

  if (controller.left) {

    rectangle.x_velocity -= 0.5;

  }

  if (controller.right) {

    rectangle.x_velocity += 0.5;

  }

  rectangle.y_velocity += 1.5;// gravity
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 520 - 16 - 32) {

    rectangle.jumping = false;
    rectangle.y = 520 - 16 - 32;
    rectangle.y_velocity = 0;

  }

  // if rectangle is going off the left of the screen
  if (rectangle.x < -40) {

    rectangle.x = 400;

  } else if (rectangle.x > 400) {// if rectangle goes past right boundary

    rectangle.x = -40;

  }


  context.fillStyle = "blue";
  context.fillRect(0, 0, 400, 600);// x, y, width, height
  context.fillStyle = "green";// hex for red
  context.beginPath();

  context.drawImage(image, rectangle.x, rectangle.y, rectangle.width, rectangle.height);

  //context.strokeStyle = "blue";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 164);
  context.lineTo(400, 600);
  //context.stroke(); how do i make it bigger
  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
