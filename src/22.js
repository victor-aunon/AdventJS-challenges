// ¿Cuántos adornos necesita el árbol?
export function countDecorations(bigTree) {
  let decorations = 0;
  function countDecorationsBranch(branch) {
    for (const element of Object.values(branch)) {
      if (typeof element === "number") decorations += element;
      if (typeof element === "object" && element !== null)
        countDecorationsBranch(element);
    }
  }
  countDecorationsBranch(bigTree);
  return decorations;
}
