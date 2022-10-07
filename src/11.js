// ¿Vale la pena la tarjeta de fidelidad del cine?
export function shouldBuyFidelity(times) {
  const priceNormal = 12 * times
  let priceFidelity = 250
  for (let i = 0; i < times; i++) {
    priceFidelity += (12 * 0.75 ** (i + 1))
  }
  return priceFidelity < priceNormal
}
