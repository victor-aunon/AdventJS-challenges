// La ruta con los regalos
export function canCarry(capacity, trip) {
  const stops = new Map();
  let packageCount = 0;
  // The map stores the gifts change on each stop (could be + or -)
  for (const stop of trip) {
    const [gifts, from, to] = stop;
    if (stops.has(from)) stops.set(from, stops.get(from) + gifts)
    else stops.set(from, gifts)
    if (stops.has(to)) stops.set(to, stops.get(to) - gifts)
    else stops.set(to, -gifts)
  }
  // Sort the map by key to have the stops in ascending order
  const stopsSorted = new Map([...stops.entries()].sort((a, b) => a[0] - b[0]))
  // Finally, calculate the packageCount on each stop and return false if
  // the count is greater than capacity
  for (const value of stopsSorted.values()) {
    packageCount += value
    console.log(packageCount)
    if (packageCount > capacity) return false
  }
  return true;
}
