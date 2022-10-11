import { checkIsSameTree } from "./24";

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};
const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

describe("Challenge 24: Comparando los árboles de Navidad", () => {
  test("Chech tree and tree are the same", () => {
    expect(checkIsSameTree(tree, tree)).toEqual(true);
  });
  test("Chech tree2 and tree2 are the same", () => {
    expect(checkIsSameTree(tree2, tree2)).toEqual(true);
  });
  test("Chech tree and tree2 are the different", () => {
    expect(checkIsSameTree(tree, tree2)).toEqual(false);
  });
});
