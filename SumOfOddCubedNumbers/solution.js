function cubeOdd(arr) {
  let cubes = [];
  if (arr.some(isNaN)) {
    return;
  } else {
    arr.forEach(n => {
      n % 2 !== 0 ? cubes.push(Math.pow(n, 3)): false;
    });
  }
  return cubes.reduce((acc, cur) => acc + cur, 0);
}


console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([1, 2, false, 3, 4])); // 28
console.log(cubeOdd(['h','g', 1, 2, 3, 4])); // undefined
console.log(cubeOdd([[ 9, -7, -3, 23, 'a', -5, 29, 5 ]])); // undefined