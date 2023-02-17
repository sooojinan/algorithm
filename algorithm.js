/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
     const words = {
         '3': 'Fizz',
         '5': 'Buzz',
         '15': 'FizzBuzz'
     }

     let arr = []

     for(let i=1;i<=n;i++){
         if (i%3===0 && i%5===0) {
             arr.push(words['15'])
         } else if (i%3 === 0) {
            arr.push(words['3'])
         } else if (i%5 === 0) {
            arr.push(words['5'])
         } else {
            arr.push(String(i))
         }
     }

     return arr;
};


console.log(fizzBuzz(15))