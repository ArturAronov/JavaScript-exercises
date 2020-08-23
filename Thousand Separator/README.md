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
**Step1**:  
**Step2**:  
