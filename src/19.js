// ¿Qué deberíamos aprender en Platzi?
export function learn(time, courses) {
  let pair = null;
  let sumTime = 0;
  // Iterate taking the first course and its next
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const currentSumTime = courses[i] + courses[j];
      if (currentSumTime > sumTime && currentSumTime <= time) {
        pair = [i, j]
        sumTime = currentSumTime
      }
      // If the sum of 2 courses gives the exact time, return and stop for loop
      if (currentSumTime === time) return pair;
    }
  }
  return pair;
}
