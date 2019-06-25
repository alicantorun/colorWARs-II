console.log("main.js is active");

const character = new Character();
// const roundObject2 = new RoundObject(150, 150, 50, 50);

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  clear();
  background(0);
  // var color1 = color(0, 50, 200);
  // var color2 = color(255, 51, 100);
  character.update();
  character.show();
  character.move();
  // setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

  orbitingObstaclesArrController();
  orbitingObstaclesFloatController();
}
// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();
//   if (axis == "Y") {
//     // Top to bottom gradient
//     for (let i = y; i <= y + h; i++) {
//       var inter = map(i, y, y + h, 0, 1);
//       var c = lerpColor(c1, c2, inter);
//       stroke(c);
//       line(x, i, x + w, i);
//     }
//   } else if (axis == "X") {
//     // Left to right gradient
//     for (let j = x; j <= x + w; j++) {
//       var inter2 = map(j, x, x + w, 1, 3);
//       var d = lerpColor(c1, c2, inter2);
//       stroke(d);
//       line(j, y, j, y + h);
//     }
//   }
// }
