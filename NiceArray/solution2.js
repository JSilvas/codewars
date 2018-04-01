function isNice(arr){
  
  // 1,6,2,5 is nice
  if (arr.length < 1) {
    return false;
  }

  for(let i = 0; i < arr.length; i++) {
    
    let num = arr[i];
    
    let hasLesser = false;
    
    if (arr.indexOf(num - 1) !== -1) {
      hasLesser = true;
    }
    
    let hasGreater = false;
    
    let greaterNum = num + 1;
    
    if (arr.includes(greaterNum)) {
      hasGreater = true;
    } 
    
    if (hasLesser || hasGreater) {
    
      // all good
    
    } else {
    
    return false;
    
    }
  }  
  return true;
}