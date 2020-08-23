## Thousand Separator

**Source**: [leetCode](https://leetcode.com/problems/thousand-separator/)  
**Difficulty**: Easy   
**Brief**:  
Given an integer ```n```, add a dot (".") as the thousands separator and return it in string format.  


### Example 1:
```
Input: n = 123456789
Output: "123.456.789"
```


### My Solution:
```
var thousandSeparator = function(n) {
  const arr=n.toString().split('').reverse();
  return arr.map((x,index)=>{
    if(index%3===0&&index!==0) x+='.'
    return x
  }).reverse().join('')
};
```
**Step1**: Since decimal point in thousands is grouping 3 numbers from the end of the integer, I've created a new array that converts number to a string, splits into individual number and reverses it.    
**Step2**:  Return map that takes two arguments x and index. Within the map, I have boolean that checks if array index % 3 is 0 and if array index is not 0. If true, the x gets added decimal point.  
**Step3** Reverse back and join the arr.map so that the result comes back in string format.  
