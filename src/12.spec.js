import { getMinJump } from "./12";

describe("Challenge 12: La ruta perfecta para dejar los regalos", () => {
  test("Should return a min jump of 4", () => {
    expect(getMinJump([5, 3, 6, 7, 9])).toEqual(4);
  });
  test("Should return a min jump of 7", () => {
    expect(getMinJump([2, 4, 6, 8, 10])).toEqual(7);
  });
  test("Should return a min jump of 4", () => {
    expect(getMinJump([1, 2, 3, 5])).toEqual(4);
  });
  test("Should return a min jump of 2", () => {
    expect(getMinJump([3, 7, 5])).toEqual(2);
  });
  test("Should return a min jump of 2", () => {
    expect(getMinJump([9, 5, 1])).toEqual(2);
  });
});
