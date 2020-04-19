## How Many Numbers Are Smaller Than the Current Number

**Source**: [leetCode](https://leetcode.com/problems/create-target-array-in-the-given-order/)  
**Difficulty**: Easy  
**Brief**:  
Given two arrays of integers nums and index. Your task is to create target array under the following rules:  
* Initially target array is empty.  
* From left to right read *nums[i]* and *index[i]*, insert at index ```index[i]``` the value ```nums[i]``` in target array.  
* Repeat the previous step until there are no elements to read in nums and index.  
Return the target array.  
It is guaranteed that the insertion operations will be valid.


### Example 1:
```
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
```


### My Solution:
Step1: Create empty array ```result``` where we will store the values gathered from the loop iteration;
Step2: Declare for-loop that starts with 0 and stops at the length of the ```nums``` array;
Step3: Push the ```index[i]``` and ```nums[i]``` into result using ```splice()``` method. ```0``` means that no element get deleted.
Step4: Return ```result```
