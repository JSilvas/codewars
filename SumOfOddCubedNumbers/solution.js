function cubeOdd(arr) {
  
  let cubes = [];
  
  arr.forEach(num => {
    if (num % 2 === 0) {
  // cube odds in Array
      let cube = Math.pow(num, 3);
      arr.push(cube);
    }
  });  
  
  return cubes.reduce((acc, cur) => acc + cur, 0);
}


console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([1, 2, false, 3, 4]));