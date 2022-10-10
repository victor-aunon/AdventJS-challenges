// ¿Una carta de pangramas? ¡QUÉ!
export function pangram(letter) {
  // Define the spanish alphabet
  const spanish = "abcdefghijklmnñopqrstuvwxyz";
  // Transform the letter to lower case, remove marks and spaces and change
  // vowels with accent to the simple form of the vowel
  const cleanLetter = letter
    .toLowerCase()
    .replace(/[:¿\?!¡\s]/g, "")
    .replace(/á/, "a")
    .replace(/é/, "e")
    .replace(/[íï]/, "i")
    .replace(/ó/, "o")
    .replace(/[úü]/, "u");
  // Check if each character of the alphabet is in the cleaned letter
  const results = Array.from(spanish).map(char => cleanLetter.includes(char));

  return results.every(r => r === true);
}

pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!");
pangram(
  "Esto es una frase larga pero no tiene todas las letras del abecedario"
);
