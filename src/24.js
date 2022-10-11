// Comparando árboles de Navidad
export function checkIsSameTree(treeA, treeB) {
  // Both trees always have value, right and left properties
  if (treeA == null && treeB == null) return true
  if (treeA.value !== treeB.value) return false
  // Call the function again comparing each branch
  if (checkIsSameTree(treeA.right, treeB.right) && checkIsSameTree(treeA.left, treeB.left)) return true
  // Otherwise return false
  return false
}
