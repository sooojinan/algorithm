/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let set = new Set(nums);
  nums.length = 0;
  nums.push(...set.values());

  return nums.size
};
removeDuplicates([1,1,2]);