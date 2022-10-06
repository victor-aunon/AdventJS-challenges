import { sumPairs } from "./06";

describe("Challenge 6: Rematando los exámenes finales", () => {
  test("should return [3, 7]", () => {
    const numbers = [3, 5, 7, 2];
    const result = 10;
    expect(sumPairs(numbers, result)).toEqual([3, 7]);
  });
  test("should return null", () => {
    const numbers = [-3, -2, 7, -5];
    const result = 10;
    expect(sumPairs(numbers, result)).toEqual(null);
  });
  test("should return [2, 2]", () => {
    const numbers = [2, 2, 3, 1];
    const result = 4;
    expect(sumPairs(numbers, result)).toEqual([2, 2]);
  });
  test("should return [6, 2]", () => {
    const numbers = [6, 7, 1, 2];
    const result = 8;
    expect(sumPairs(numbers, result)).toEqual([6, 2]);
  });
  test("should return [1, 5]", () => {
    const numbers = [0, 2, 2, 3, -1, 1, 5];
    const result = 6;
    expect(sumPairs(numbers, result)).toEqual([1, 5]);
  });
});
