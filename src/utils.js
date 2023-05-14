export const URL = "https://type.fit/api/quotes";

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
