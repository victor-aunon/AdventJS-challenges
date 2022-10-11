import { canMouseEat } from "./25";

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];
const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

describe("Challenge 25: El último juego y hasta el año que viene 👋", () => {
  test("Should be false if there is no food in up direction game = room", () => {
    expect(canMouseEat("up", room)).toEqual(false);
  });
  test("Should be true if there is food in down direction game = room", () => {
    expect(canMouseEat("down", room)).toEqual(true);
  });
  test("Should be false if there is no food in right direction game = room", () => {
    expect(canMouseEat("right", room)).toEqual(false);
  });
  test("Should be false if there is no food in left direction game = room", () => {
    expect(canMouseEat("left", room)).toEqual(false);
  });
  test("Should be false if there is no food in up direction game = room", () => {
    expect(canMouseEat("up", room2)).toEqual(false);
  });
  test("Should be false if there is no food in down direction game = room2", () => {
    expect(canMouseEat("down", room2)).toEqual(false);
  });
  test("Should be true if there is food in right direction game = room2", () => {
    expect(canMouseEat("right", room2)).toEqual(true);
  });
  test("Should be false if there is no food in left direction game = room2", () => {
    expect(canMouseEat("left", room2)).toEqual(false);
  });
});
