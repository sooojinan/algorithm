/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
     const map = new Map();

     let result = -1;

     for (let letter of s) {
         !map.has(letter) ? map.set(letter,1) : map.set(letter,-1)
     }

     for (let item of map) {
         if (item[1] === 1) 
            return result = s.indexOf(item[0])
            
     }

     return result
};


console.log(firstUniqChar("aabb"))