function checkExam(array1, array2) {
  var score = 0;
  for (var i = 0; i < array1.length; i++) {
    if (array2[i] === '') {
      continue;
    } else if (array1[i] === array2[i]) { 
      score += 4;
    } else if (array1[i] !== array2[i]) {
      score -= 1;
    }
  }
  return(Math.max(0, score));
}