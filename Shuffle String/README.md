## Shuffle String

**Source**: [leetCode](https://leetcode.com/problems/shuffle-string/)  
**Difficulty**: Easy   
**Brief**:  
Given a string ```s``` and an integer array ```indices``` of the **same length**.  
The string ```s``` will be shuffled such that the character at the ```ith``` position moves to ```indices[i]``` in the shuffled string.  
Return the _shuffled string_.  


### Example 1:
![](https://assets.leetcode.com/uploads/2020/07/09/q1.jpg)
```
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]  
Output: "leetcode"  
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.  
```

### Example 2:
```
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
```

### Example 3:
```
Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
Output: "arigatou"
```

### My Solution:
```
var restoreString = function(s, indices) {
  let result=[];
  for (let i in indices) result[indices[i]]=s[i];
  return result.join('');
};
```
**Step1**: Create an empty array that stores the values interated in the loop below.  
**Step2**: Create a for in loop that iterates over ```s``` and ```indices```.  
**Step3**: Move letter in ```s[i]``` from ```indices[i]``` into ```result``` in the right order.  
