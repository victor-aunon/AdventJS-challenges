import { canCarry } from "./21";

describe("Challenge 21: La ruta con los regalos", () => {
  test("Should return false when gifts exceed capacity", () => {
    const trip = [
      [2, 5, 8],
      [3, 6, 10],
    ];
    expect(canCarry(4, trip)).toEqual(false);
  });
  test("Should return true when gifts do not exceed capacity", () => {
    const trip = [
      [1, 1, 5],
      [2, 2, 10],
    ];
    expect(canCarry(3, trip)).toEqual(true);
  });
  test("Should return true when gifts do not exceed capacity", () => {
    const trip = [
      [2, 1, 5],
      [3, 5, 7],
    ];
    expect(canCarry(3, trip)).toEqual(true);
  });
  test("Should return true when gifts do not exceed capacity", () => {
    const trip = [
      [2, 3, 8],
      [2, 5, 7],
    ];
    expect(canCarry(4, trip)).toEqual(true);
  });
  test("Should return false when gifts exceed capacity", () => {
    const trip = [[2, 3, 8]];
    expect(canCarry(1, trip)).toEqual(false);
  });
  test("Should return false when gifts exceed capacity", () => {
    const trip = [
      [1, 2, 4],
      [2, 3, 8],
    ];
    expect(canCarry(2, trip)).toEqual(false);
  });
});
