

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 var twoSum = function(nums, target) {
   let result = [];

   for(let i = 0; i<nums.length; i++) {
    let targetNum = target - nums[i];

    if (nums.indexOf(targetNum, i+1) > 0) {
      result.push(i);
      result.push(nums.indexOf(targetNum, i+1))
      break;
    }
   }

   return result;
};

console.log(twoSum([3,2,4],6));