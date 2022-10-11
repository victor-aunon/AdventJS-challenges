// El último juego y hasta el año que viene 👋
export function canMouseEat(direction, game) {
  const movements = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  let mousePos = [];
  // Find mouse position
  for (let y = 0; y < game.length; y++) {
    for (let x = 0; x < game[y].length; x++) {
      if (game[y][x] === "m") mousePos = [y, x];
    }
  }
  // If there is no mouse return false
  if (mousePos.length === 0) return false;
  const y = mousePos[0] + movements[direction][0]
  const x = mousePos[1] + movements[direction][1]
  // Check that the row exists (it is not undefined)
  if (!game[y]) return false
  // Check if the direction is wrong or not
  return (
    game[y][x] === "*" ?? false
  );
}
