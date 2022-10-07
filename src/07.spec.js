import { contains } from "./07";

describe("Challenge 7: Buscando en el almacén", () => {
  test("should return true if the product exists", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta", // <- ¡Está aquí!
        },
      },
    };
    expect(contains(almacen, "camiseta")).toEqual(true);
  });
  test("should return false if the product does not exist", () => {
    const almacen = {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    };
    expect(contains(almacen, "gameboy")).toEqual(false);
  });
});
