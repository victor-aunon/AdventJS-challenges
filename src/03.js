// El Grinch quiere fastidiar la Navidad
export function isValid(letter) {
  const regalos = letter.split(" ");
  let isValid = true;
  regalos.forEach(regalo => {
    // Return false if there is ( but there is no )
    if (regalo.includes("(") && !regalo.includes(")")) isValid = false;
    // Return false if there are { or [
      if (regalo.includes("{") || regalo.includes("[")) isValid = false;
    // If there are () check that there are the same number of ( and )
    if (regalo.includes("(") && regalo.includes(")"))
      if (regalo.match(/\(/g).length !== regalo.match(/\)/g).length)
        isValid = false;
    // Return false if regalo is not a word
    if (!regalo.match(/[a-z]/)) isValid = false;
    // Return false if there is ( but this is not the first character
    if (regalo.includes("(") && regalo[0] !== "(") isValid = false;
  });
  return isValid;
}
