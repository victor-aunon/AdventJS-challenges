// Contando los días para los regalos

export function daysToXmas(date) {
  const xmas = new Date("Dec 25, 2021");
  if (date > xmas) 
    return - Math.floor((date.getTime() - xmas.getTime()) / 1000 / 3600 / 24);
  return xmas.getDate() - date.getDate();
}
