// Es hora de poner la Navidad en casa
export function createXmasTree(height) {
  const space = "_";
  const leaf = "*";
  const trunk = "#";
  let tree = "";
  for (let floor = 0; floor < height; floor++) {
    // Left half
    tree += `${space.repeat(height - floor - 1)}${leaf.repeat(floor)}`;
    // Tree center
    tree += `${leaf}`;
    // Right half
    tree += `${leaf.repeat(floor)}${space.repeat(height - floor - 1)}\n`;
  }
  // Trunk lines
  tree += `${space.repeat(height - 1)}${trunk}${space.repeat(height - 1)}\n`;
  tree += `${space.repeat(height - 1)}${trunk}${space.repeat(height - 1)}`;
  return tree;
}
