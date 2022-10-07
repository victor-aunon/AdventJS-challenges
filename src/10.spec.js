import { getCoins } from "./10";

describe("Challenge 10: La máquina de cambio", () => {
  test("Should return 1cent and 50cent", () => {
    expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1]);
  });
  test("Should return 1cent and 2cent", () => {
    expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0]);
  });
  test("Should return 5cent", () => {
    expect(getCoins(5)).toEqual([0, 0, 1, 0, 0, 0]);
  });
  test("Should return 1cent, 5cent and 10cent", () => {
    expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0]);
  });
  test("Should return 2x50cent", () => {
    expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2]);
  });
  test("Should return 2x50cent, 20cent and 2cent", () => {
    expect(getCoins(122)).toEqual([0, 1, 0, 0, 1, 2]);
  });
});
