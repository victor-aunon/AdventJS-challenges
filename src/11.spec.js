import { shouldBuyFidelity } from "./11";

describe("Challenge 11: ¿Vale la pena la tarjeta de fidelidad del cine?", () => {
  test("Should return false with 1 ticket", () => {
    expect(shouldBuyFidelity(1)).toEqual(false)
  })
  test("Should return true with 100 tickets", () => {
    expect(shouldBuyFidelity(100)).toEqual(true)
  })
});
