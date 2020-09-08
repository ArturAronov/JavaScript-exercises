## Matrix Diagonal Sum

**Source**: [leetCode](https://leetcode.com/problems/matrix-diagonal-sum/)   
**Difficulty**: Easy   
**Brief**:  
Given a square matrix ```mat```, return the sum of the matrix diagonals.  
Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.  

### Example 1:
![Example1](https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png?raw=true)
```
Input: mat = [[1,2,3],  
              [4,5,6],  
              [7,8,9]]  
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
```


### My Solution:
```
var diagonalSum = function(mat) {
  const left=mat.length+1;
  const right=mat.length-1;
  const merged=[].concat.apply([], mat);
  return merged.filter((current, index)=>{
    if (index%left===0 || index%right===0) return current
  }).reduce((a,b)=>a+b);
};
```
### Bench-marks: 
Run-time: 76ms  
Memory: 38.8MB  
  
 
### Explanation
Test-case: mat=[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]  
mat.length=4  
[**1**, 1, 1, **1**]  
[1, **1**, **1**, 1]  
[1, **1**, **1**, 1]  
[**1**, 1, 1, **1**]  

**Step1**:  
If you merge all of the array together, you need to find numbers from following indexes:  
[**0**, 1, 2, **3**,  
 4, **5**, **6**, 7,  
 8, **9**, **10**,11  
 **12**,13,14,**15**]  
  
**Step2**:  
Leftmost diagonal idexes are all modulo of 5 (5, 10, 15), which is const left=mat.length+1 &  
rightmost diagonal idexes are modulo of 3 (3, 6, 9, 12), which is const right=mat.length-1  
  
**Step3**:  
As for next stop, the array needs to be merged together with const merged=[].concat.apply([], mat);   
  
**Step4**:  
For the final two steps, return filter on merged with parameters of current and index. Inside filter, set conditional statement that validates if index is modulo of left or right. If true, the current gets retured. Once the filter is done iterating, reduce array to get sum of values retrieved in the merged.filter().
