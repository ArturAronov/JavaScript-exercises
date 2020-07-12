## Range Sum of Sorted Subarray Sums

**Source**: [leetCode](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/)  
**Difficulty**: Medium   
**Brief**:  
Given the array ```nums``` consisting of ```n``` positive integers. You computed the sum of all non-empty continous subarrays from the array and then sort them in non-decreasing order, creating a new array of ```n * (n + 1) / 2``` numbers.  
  
Return the sum of the numbers from index ```left``` to ```index``` right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 10^9 + 7.  


### Example 1:
```
Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13 
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. 
```


### My Solution:
**Note:** This is the first Medium level leetCode solution that I have ever solved, mainly by millions of trial and errors. In the hindsight, comparing to solutions solved by other contestants, one could easily describe my solution almost as ugly as Michael Jackson's nose job - it invovles multiple loops **and** a recursion, of which latter seems to be unnecessary. However I had a great fun solving the challenge and learned one or two new things along the line.  
  
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
**Step1**: Create empty array ```arr``` for the recursive function to store all subarray sums.  
**Step2**: Declare and call recursive function ```rec(par)``` that takes value ```n``` from ```rangeSum``` as a parameter.  
**Step3**: The funtion stops iterating once the stopping condition is met of ```n===0``` after what, the function returns ```arr```. If n is bigger than one, the ```else``` part of function gets executed.  
**Step4**: Push the first number from ```nums``` array into ```arr```: ```arr.push(nums[0])```.  
**Step5**: Declare for-loop that starts with 1 (```let i=1```), since the first value of ```nums``` is already stored in the ```arr```.  
**Step6**: Push the sum value of last value in ```arr``` plus ```nums[i]```: ```arr.push(arr[arr.length-1]+nums[i]```.  
**Step7**: Remove first element from ```nums``` since we don't need it anymore: ```nums.shift()```.  
**Step8**: Call function rec within itself with parameter of n-1: ```rec(n--)```.  
**Step9**: Sort ```arr``` in non-decreasing order: ```arr.sort((a,b)=>a-b)```.
**Step10**: Create empty array ```sum``` where the sum values will be separated from ```arr``` according to ```left``` and ```right``` indexes given in parameters. Note that as indexes start from one and starting value in loops is 0, the resulting code becomes: ```i=left-1; i<right```.  
**Step11**: Return the sum value of array ```sum``` by using reduce() method: (```return sum.reduce((a,b)=>a+b)```).
