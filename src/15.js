// El salto perfecto
export function checkSledJump(heights) {
  const max = Math.max(...heights);
  let lastValue = -1;
  // If max height is at start or end, just return false is not a valid jump
  if (
    heights.indexOf(max) === 0 ||
    heights.indexOf(max) === heights.length - 1
  )
    return false;
  // Check it is a valid jump
  const valid = heights.map((val, index) => {
    if (
      (index <= heights.indexOf(max) && val > lastValue) ||
      (index > heights.indexOf(max) && val < lastValue)
    ) {
      lastValue = val;
      return true;
    }
    lastValue = val;
    return false;
  });
  return valid.every(v => v === true);
}
