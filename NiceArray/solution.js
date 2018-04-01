function isNice(arr) {
  return arr.length > 0 && arr.every(x => arr.includes(x - 1) || arr.includes(x + 1));
}