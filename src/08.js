// La locura de las criptomonedas
export function maxProfit(prices) {
  // Calculate min and max to check that there are differences in prices
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  let profit = -1
  prices.reduce((prev, price, index) => {
    if (max > min) {
      // Calculate the new max starting from current index
      const nextMax = Math.max(...prices.slice(index, -1))
      // Buy at minimum but not at the last price
      if (price === min && index !== prices.length -1 && profit === -1) profit = price
      // Buy when the price is below the previous one and below the nextMax
      if (price < prev && price < nextMax && profit === -1) profit = price
      // Sell at maximum price if we have already bought (price != -1)
      if (price === max && profit !== -1) profit = price - profit
      // Sell when the price is above the next one (price < prev) and is 
      // the current max and also we have already bought
      if (price < prev && price === nextMax && profit !== -1) profit = prev - profit
    }
    return price
  }, prices[0])
  return profit
}