console.log("constants.js active");

const WIDTH = 640;
const HEIGHT = 640;

const orbitingObstaclesArr = [];

const orbitingObstaclesArrController = () => {
  for (let i = 0; i < orbitingObstaclesArr.length; i++) {
    orbitingObstaclesArr[i].show();
    orbitingObstaclesArr[i].update();
    if (orbitingObstaclesArr[i].offscreen()) {
      orbitingObstaclesArr.splice(i, 1);
    }
  }
};

const orbitingObstaclesFloatController = () => {
  if (frameCount % 15 == 0) {
    orbitingObstaclesArr.push(new OrbitingObstacles());
  }
};
