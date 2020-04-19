## How Many Numbers Are Smaller Than the Current Number

**Source**: [leetCode](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)  
**Difficulty**: Easy  
**Brief**:  
Given the array nums, for each ```nums[i]``` find out how many numbers in the array are smaller than it. That is, for each ```nums[i]``` you have to count the number of valid ```j```'s such that ```j != i``` and ```nums[j] < nums[i]```.
Return the answer in an array.


#### Example 1:
```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
```


#### My Solution:

Step1: Create empty emtpy array (```result```);

Step2: Create for-loop that iterates over ```nums[i]```;

Step2.1: Create variable ```counter``` that stores number 0. This will get incremented by one every time that ```nums[j]<nums[i]```;

Step3: Create another for-loop that iterates over ```nums[j]```;

Step3.1: Within it, compare if ```nums[j]``` is smaller than ```nums[i]```;

Step3.2: Shoud the ```if``` result in ```true```, increment ```counter``` by 1;

Step3: Push number stored in ```counter``` into ```result```;

Step4: Reset ```counter``` back to 0;

Step5: Return array ```result```.
