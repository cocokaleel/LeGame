/*function handleBeanAnimation() {
  if (CONTROLS.ship.left) {

    BEAN.x -= BEAN.speed;

  }
  if (CONTROLS.ship.right) {

    BEAN.x += BEAN.speed;
  }
  if (CONTROLS.ship.jump) {
    BEAN.y -= 15;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    BEAN.rotation += 4;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (BEAN.x > GAME.canvas.width) {
    BEAN.x = 0;
  } else if (BEAN.x < 0) {
    BEAN.x = 600;
  } else if (BEAN.y > GAME.canvas.height) {
    BEAN.y = 0;
  } else if (BEAN.y < 0) {
    BEAN.y = 300;
  }
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleBeanAnimation();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderBean(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame); */
