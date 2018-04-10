function formatWords(words){
  let valid = [];
  let output = [];
  
  if (!words || words.length === 0 || words.length === 1 && words[0] === '') {
    return '';
  }
  
  for (let i = 0; i < words.length; i++) {
    if (words[i]) { //only push if there's something
      valid.push(words[i]);
    }
  }
  
  for (let i = 0; i < valid.length; i++) {
    if (valid.length === 1) {
      return valid[i];
      
    } else if (valid.length === 2) {
      output.push(valid[i] + ' and ' + valid[i+1]);
      return output.join('');

    } else if (i+2 !== valid.length) {
      output.push(valid[i] + ', ');

    } else {
      output.push(valid[i] + ' and ' + valid[i+1]);
      return output.join('');
    }
  }
}