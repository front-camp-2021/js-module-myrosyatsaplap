export const cutStrings = (arr = []) => {
  const shortestLength = arr.map(el => el.length).sort((a, b) => a - b)[0];
  return arr.map(el => el.slice(0, shortestLength));
};
