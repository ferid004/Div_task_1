function isFibonacci(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;
    
    let a = 0;
    let b = 1;
    
    while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    
    return b === num;
  }
function isPalindrom(str){
    let a =str
    let b = str.split('').reverse().join('')
    console.log(b);
    console.log(a);
    if (str===Number) {
        return false
    }else if (a===b) {
        return  true
    }
    else{
        return false
    }

}
  
module.exports = {
    isFibonacci,
    isPalindrom
  };