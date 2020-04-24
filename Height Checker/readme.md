## Height Checker

**Source**: [leetCode](https://leetcode.com/problems/height-checker/)  
**Difficulty**: Easy   
**Brief**:  
Students are asked to stand in non-decreasing order of heights for an annual photo.  

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.  

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.  


### Example 1:
```
Input: heights = [1,1,4,2,1,3]  
Output: 3  
Explanation:   
Current array : [1,1,4,2,1,3]  
Target array  : [1,1,1,2,3,4]  
On index 2 (0-based) we have 4 vs 1 so we have to move this student.  
On index 4 (0-based) we have 1 vs 3 so we have to move this student.  
On index 5 (0-based) we have 3 vs 4 so we have to move this student.  
```

### My Solution:
Step1: Create target array that copies ```heights``` and sorts it into decreasing order. In order to execute that, we need to use ```concat()``` method so that the original array wouldn't get mutated. Once the array is concatenated, we have to use ```sort((a,b)=>a-b)``` method. The purporse of ```(a,b)=>a-b``` is to ensure that array is in ascending order. Without it array ```[1,2,7,8,10,11]``` will return ```[1,10,11,2,7,8]```;  
Step2: Create variable ```counter``` that gets incremented each time we have variance in both arrays;  
Step3: Declare for-loop with starting position 0 (```i=0```), stopping possition length of the heights (```i<heights.length```) and get incremented by 1 (```i++```);  
Step4: Create ``if`` statement that compares two arrays. Should there be a difference at given possition of ```i```, the ```counter``` will be incremented by 1 (```counter++```);
Step5: return results from ```counter```.
