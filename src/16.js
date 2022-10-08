// Descifrando los números...
export function decodeNumber(symbols) {
  const guide = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  // Reversing the symbols will ease the algorithm
  // (reduceRight is also possible)
  const symbolsRev = Array.from(symbols).reverse()
  // If any symbol is not in guide -> just return NaN
  if (!symbolsRev.every(s => Object.keys(guide).includes(s))) return NaN
  // Use reduce to accumulate the value of the symbols.
  // Seed value is the first symbol value  
  return symbolsRev.reduce((acc, val, i) => {
    if (guide[val] >= guide[symbolsRev[i - 1]])
      return (acc += guide[val]);
    else if (guide[val] < guide[symbolsRev[i - 1]])
      return (acc -= guide[val]);
    return acc;
  }, guide[symbolsRev[0]]);
}
