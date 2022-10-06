// Rematando los exámenes finales
export function sumPairs(numbers, result) {
  let pairs = null;
  for (const number of numbers) {
    // Only one loop, it looks for the result - number in the numbers array
    const x = result - number;
    // Avoid x and number being the same index (3+3 = 6 => there should be 
    // 2 threes)
    if (x === number && numbers.filter(n => n === x).length === 1) continue;
    if (numbers.includes(x)) {
      pairs = [number, x];
      // Return only the first pair found
      break;
    }
  }
  return pairs;
}
