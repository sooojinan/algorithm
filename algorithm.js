/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0)
      return false;

    const stringX = String(x);
    const halfValue = Math.floor(stringX.length/2);
    let result = true;

    for (let i=0; i<halfValue; i++) {
      if (stringX[i] === stringX[stringX.length-i-1 ]) {
        continue;
      } else {
        result = false;
        break;
      }
    }

    return result;

};
isPalindrome(12321);