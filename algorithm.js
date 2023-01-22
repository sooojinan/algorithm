/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const sorts = nums.sort((a,b) => a - b);

    return sorts[Math.floor(nums.length/2)];
    
};
majorityElement([2,2,1,2,1]) 