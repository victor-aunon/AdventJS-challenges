import { countPackages } from "./17";

describe("Challenge 17: La locura de enviar paquetes en esta época", () => {
  test("Should return 9 packages", () => {
    const carriers = [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ];
    expect(countPackages(carriers, "dapelu")).toEqual(9);
  });
  test("Should return 15 packages", () => {
    const carriers = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []]
    ];
    expect(countPackages(carriers, "camila")).toEqual(15);
  });
});
