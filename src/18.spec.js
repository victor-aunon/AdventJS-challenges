import { fixFiles } from "./18";

describe("El sistema operativo de Santa Claus", () => {
  test("Should count up to 3 photos", () => {
    const files = ["photo", "postcard", "photo", "photo", "video"];
    expect(fixFiles(files)).toEqual([
      "photo",
      "postcard",
      "photo(1)",
      "photo(2)",
      "video",
    ]);
  });
  test("Should count up to 3 files and 2 games", () => {
    const files = ["file", "file", "file", "game", "game"];
    expect(fixFiles(files)).toEqual([
      "file",
      "file(1)",
      "file(2)",
      "game",
      "game(1)",
    ]);
  });
  test("Should count up to 2 icon(1)", () => {
    const files = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
    expect(fixFiles(files)).toEqual([
      "file",
      "file(1)",
      "icon",
      "icon(1)",
      "icon(1)(1)",
    ]);
  });
});
