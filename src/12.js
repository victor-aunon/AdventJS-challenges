// La ruta perfecta para dejar los regalos
export function getMinJump(obstacles) {
  // Sort the obstacles in ascending order
  const obsSorted = obstacles.sort((a, b) => a - b);
  let minJump = 1;
  // Define collision so when it is false, the while loop stops
  let collision = true;
  while (collision) {
    // If there is no collision (obstacle % minJump != 0) then exit
    if (obsSorted.every(obs => obs % minJump !== 0)) collision = false;
    // Else increments minJump
    else minJump++;
  }
  return minJump;
}
