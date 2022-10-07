// La máquina de cambio
export function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  // Initialize result
  const result = [0, 0, 0, 0, 0, 0];
  // Reverse coins to start with 50 cents
  coins.reverse().reduce((remainder, coin, index) => {
    // Substract coins to the remainder until we have to change to a 
    // lower coin
    while (remainder >= coin) {
      result[index]++;
      remainder -= coin;
    }
    return remainder;
  }, change);
  return result.reverse();
}
