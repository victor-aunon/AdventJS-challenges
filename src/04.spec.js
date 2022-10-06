import { createXmasTree } from "./04";

describe("Challenge 4: ¡Es hora de poner la navidad en casa!", () => {
  test("Should create a 5 floor Xmas tree", () => {
    const tree =
      "____*____\n" +
      "___***___\n" +
      "__*****__\n" +
      "_*******_\n" +
      "*********\n" +
      "____#____\n" +
      "____#____";
    expect(createXmasTree(5)).toEqual(tree);
  });
  test("Should create a 3 floor Xmas tree", () => {
    const tree =
      "__*__\n" +
      "_***_\n" +
      "*****\n" +
      "__#__\n" +
      "__#__";
    expect(createXmasTree(3)).toEqual(tree);
  });
});
