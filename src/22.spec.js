import { countDecorations } from "./22";

describe("Challenge 22: ¿Cuántos adornos necesita el árbol?", () => {
  test("Should count 6 decorations", () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        righth: null,
      },
    };
    expect(countDecorations(tree)).toEqual(6);
  });
  test("Should count 28 decorations", () => {
    const tree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };
    expect(countDecorations(tree)).toEqual(28);
  });
});
