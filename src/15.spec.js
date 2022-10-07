import { checkSledJump } from "./15";

describe("Challenge 15: El salto perfecto", () => {
  test("Should return true to a valid jump", () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toEqual(true);
  });
  test("Should return true to a valid jump", () => {
    expect(checkSledJump([0, 1, 0])).toEqual(true);
  });
  test("Should return true to a valid jump", () => {
    expect(checkSledJump([0, 3, 2, 1])).toEqual(true);
  });
  test("Should return true to a valid jump", () => {
    expect(checkSledJump([0, 1000, 1])).toEqual(true);
  });
  test("Should return false to an invalid jump", () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).toEqual(false);
  });
  test("Should return false to an invalid jump", () => {
    expect(checkSledJump([1, 2, 3])).toEqual(false);
  });
  test("Should return false to an invalid jump", () => {
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toEqual(false);
  });
});
