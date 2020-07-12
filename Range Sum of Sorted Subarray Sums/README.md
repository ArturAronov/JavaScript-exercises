## Range Sum of Sorted Subarray Sums

**Source**: [leetCode](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/)  
**Difficulty**: Medium   
**Brief**:  
Given the array ```nums``` consisting of ```n``` positive integers. You computed the sum of all non-empty continous subarrays from the array and then sort them in non-decreasing order, creating a new array of ```n * (n + 1) / 2``` numbers.  
  
Return the sum of the numbers from index ```left``` to ```index``` right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 10^9 + 7.  


### Example 1:
```
**Input**: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13 
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. 
```


### My Solution:  
```
var rangeSum = function(nums, n, left, right) {
  let arr=[];
  let sum=[];
  
  rec(n);
  function rec(par){
    if (n===0) return arr;
    else {
      arr.push(nums[0]);
      for (let i=1; i<nums.length; i++) {
        arr.push(arr[arr.length-1]+nums[i]);
      };
      nums.shift();
      rec(n--);
    };
  };

  arr.sort((a,b)=>a-b);

  for (let i=left-1; i<right; i++) {
    sum.push(arr[i]);
  };
  return sum.reduce((a,b)=>a+b);
};
```
**Step1**:
**Step2**:
