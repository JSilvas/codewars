function insertDash(num) {
  let nums = num.toString().split('');
  let dashNums = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    let prevNum = nums[i - 1];
    let curNum = nums[i];
    
    if ((prevNum % 2) && (curNum % 2)) {
      dashNums += ('-' + curNum);
      
    } else {  
      dashNums += curNum;
    }
  }
  return dashNums;
}