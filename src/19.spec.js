import { learn } from "./19";

describe("Challenge 19: ¿Qué deberíamos aprender en Platzi?", () => {
  test("Should return courses [0, 2] with 10 hours", () => {
    const courses = [2, 3, 8, 1, 4];
    expect(learn(10, courses)).toEqual([0, 2]);
  });
  test("Should return courses [1, 2] with 15 hours", () => {
    const courses = [2, 10, 4, 1];
    expect(learn(15, courses)).toEqual([1, 2]);
  });
  test("Should return courses [0, 1] with 25 hours", () => {
    const courses = [10, 15, 20, 5];
    expect(learn(25, courses)).toEqual([0, 1]);
  });
  test("Should return courses [1, 2] with 8 hours", () => {
    const courses = [8, 2, 1];
    expect(learn(8, courses)).toEqual([1, 2]);
  });
  test("Should return courses [3,4] with 8 hours", () => {
    const courses = [8, 2, 1, 4, 3];
    expect(learn(8, courses)).toEqual([3, 4]);
  });
  test("Should return courses null with 4 hours", () => {
    const courses = [10, 14, 20];
    expect(learn(4, courses)).toEqual(null);
  });
  test("Should return courses null with 5 hours", () => {
    const courses = [5, 5, 5];
    expect(learn(5, courses)).toEqual(null);
  });
});
