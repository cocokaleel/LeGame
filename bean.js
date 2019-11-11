// Populate a global variable for the spaceship
function InitializeBean() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  BEAN = {
    x : 300,
    y : 220,
    rotation : 0,
    health : 3,
    positions : [
      {
        x : 0,
       	y : 0,
      },
      {
        x : 1,
       	y : 0
      },
      {
        x : 0,
       	y : 1
      },
      {
        x : -2,
       	y : -3
      },
    ],
    latest : {
        x : BEAN.x,
        y : BEAN.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,
    bullets : []
  };
}

function RenderBean(context) {
  context.fillStyle="green";
  context.fillRect(BEAN.x, BEAN.y, 15,15);
}
