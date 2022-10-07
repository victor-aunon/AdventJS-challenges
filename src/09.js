// Agrupando cosas automáticamente
export function groupBy(collection, it) {
  const group = {};
  let result;
  for (const el of collection) {
    // If it is a property, eval the property
    if (typeof it === "string") {
      if (typeof el === "object") {
        result = el[it]
      } else result = eval(`'${el}'.${it}`);
    // If it is a function, use call
    } else if (typeof it === "function") result = it.call([], el);
    // Build the object
    if (result in group) group[result].push(el);
    else group[result] = [el];
  }
  return group;
}
