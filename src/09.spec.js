import { groupBy } from "./09";

describe("Challenge 9: Agrupando cosas automáticamente", () => {
  test("Should group collection using Math.floor", () => {
    const collection = [6.1, 4.2, 6.3];
    const it = Math.floor;
    expect(groupBy(collection, it)).toEqual({ 6: [6.1, 6.3], 4: [4.2] });
  });
  test("Should group collection using length", () => {
    const collection = ["one", "two", "three"];
    const it = "length";
    expect(groupBy(collection, it)).toEqual({
      3: ["one", "two"],
      5: ["three"],
    });
  });
  test("Should group collection using age property", () => {
    const collection = [{ age: 23 }, { age: 24 }];
    const it = "age";
    expect(groupBy(collection, it)).toEqual({
      23: [{ age: 23 }],
      24: [{ age: 24 }],
    });
  });
  test("Should group collection using the it callback", () => {
    const collection = [1397639141184, 1363223700000];
    const it = timestamp => new Date(timestamp).getFullYear();
    expect(groupBy(collection, it)).toEqual({
      2013: [1363223700000],
      2014: [1397639141184],
    });
  });
  test("Should group collection using rating property", () => {
    const collection = [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ];
    const it = "rating";
    expect(groupBy(collection, it)).toEqual({
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }],
    });
  });
});
