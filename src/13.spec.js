import { wrapGifts } from "./13";

describe("Challenge 13: Envuelve regalos con asteriscos", () => {
  test("Should wrap the gift", () => {
    expect(wrapGifts(["📷", "⚽️"])).toEqual([
      "****", "*📷*", "*⚽️*", "****"
    ]);
  });
  test("Should wrap the gift", () => {
    expect(wrapGifts(["🏈🎸", "🎮🧸"])).toEqual([
      "******",
      "*🏈🎸*",
      "*🎮🧸*",
      "******",
    ]);
  });
});
