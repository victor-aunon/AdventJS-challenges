// Envuelve regalos con asteriscos
export function wrapGifts(gifts) {
  let result = ["*".repeat(gifts[0].length + 2)];
  gifts.forEach(gift => {
    result.push(`*${gift}*`);
  });
  result.push("*".repeat(gifts[0].length + 2));
  return result;
}
