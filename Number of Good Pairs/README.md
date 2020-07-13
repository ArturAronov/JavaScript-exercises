## Number of Good Pairs

**Source**: [leetCode](https://leetcode.com/problems/number-of-good-pairs/)  
**Difficulty**: Easy   
**Brief**:  
Given an array of integers ```nums```.  
A pair ```(i,j)``` is called good if ```nums[i] == nums[j]``` and ```i < j```.  
Return the number of good pairs.  


### Example 1:
```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```

### Example 2:
```
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```


### My Solution:  
```
var numIdenticalPairs = function(nums) {
  let pairs=0;
  for (let i=0; i<nums.length; i++) {
    for (let j=0; j<nums.length; j++) {
      if (nums[i]===nums[j] && i<j) pairs++
    };
  };
  return pairs;
};
```  

**Step1**: Declare variable ```pairs``` and set it to 0. This variable will be incremented by 1 every time the conditions are met.  
**Step2**: Create 2 for-loops (i and j).  
**Step3:** Within j for-loop check if ```nums[i]===nums[j]``` and ```i<j``` as stated in instructions. If true, increment pairs by one: ```pairs++```.  
**Step4:** Return ```pairs```.
