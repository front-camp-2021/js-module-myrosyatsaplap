export const weirdString = (str = "") =>
  str
    .toUpperCase()
    .split(" ")
    .map(
      word =>
        word.slice(0, word.length - 1) +
        word.charAt(word.length - 1).toLowerCase()
    )
    .join(" ");
