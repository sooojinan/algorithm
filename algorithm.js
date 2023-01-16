/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var searchInsert = function(nums, target) {
//   let result = 0;

//   for (let i=0; i<nums.length; i++) {
//       if (nums[i] < target) {
//           result++;
//       } else {
//           break;
//       }
//   }

//   return result;
// };

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;

  while(left < right) {
    const middle = Math.floor((left+right)/2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
};

searchInsert([1,3,5,6],7)