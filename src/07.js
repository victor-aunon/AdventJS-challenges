// Buscando en el almacén...
export function contains(store, product) {
  let found = false;
  // Recursive function that searches any object within the store
  function checkSubstore(store, product) {
    if (typeof store === "object") {
      for (const obj of Object.values(store)) {
        checkSubstore(obj, product);
      }
    }
    // The object is found when store is a string and it is the product
    if (typeof store === "string" && store === product) {
      found = true;
    }
  }
  checkSubstore(store, product);
  return found;
}
