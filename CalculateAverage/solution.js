function find_average(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length; 
}