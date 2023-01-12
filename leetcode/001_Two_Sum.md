## 1. Two Sum

> 문제 링크

https://leetcode.com/problems/two-sum/description/

> 문제 설명

```

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
```

> 테스트케이스

```
Ex1.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Ex2.
Input: nums = [3,2,4], target = 6
Output: [1,2]

Ex3.
Input: nums = [3,3], target = 6
Output: [0,1]
```


> 문제 해결

```
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
```

> 회고

```
간단한 문제였다. 런타임과 메모리를 최소로 할 수 있게 두 번 세 번 생각해보자~
알고리즘 한 개 한 개 풀수록 너무 재밌다. 아침마다 잠도 깰 겸 보면 좋을 듯👍
```