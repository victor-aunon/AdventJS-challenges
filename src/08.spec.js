import { maxProfit } from "./08";

describe("Challenge 8: La locura de las criptomonedas", () => {
  test("Should return a profit of 16", () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
    expect(maxProfit(pricesBtc)).toEqual(16)
  })
  test("Should return a profit of 60", () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
    expect(maxProfit(pricesEth)).toEqual(60)
  })
  test("Should return a profit of -1 if there are no trades", () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7]
    expect(maxProfit(pricesDoge)).toEqual(-1)
  })
  test("Should return a profit of -1 if there are no trades", () => {
    const pricesAda = [3, 3, 3, 3, 3]
    expect(maxProfit(pricesAda)).toEqual(-1)
  })
})