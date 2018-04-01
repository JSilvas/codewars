function disemvowel(str) {
  const strArray = str.split('');

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === 'a' || strArray[i] === 'A' || 
        strArray[i] === 'e' || strArray[i] === 'E' ||
        strArray[i] === 'i' || strArray[i] === 'I' ||
        strArray[i] === 'o' || strArray[i] === 'O' || 
        strArray[i] === 'u' || strArray[i] === 'U') {
      
      strArray[i] = '';
    }
  }
  let joinedStr = strArray.join('');
  return joinedStr;
}