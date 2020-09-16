## Length of Last Word

**Source**: [leetCode](https://leetcode.com/problems/length-of-last-word/)  
**Difficulty**: Easy   
**Brief**:  
Given a string s consists of upper/lower-case alphabets and empty space characters ```' '```, return the length of last word (last word means the last appearing word if we loop from left to right) in the string.  
If the last word does not exist, return 0.  
**Note**: A word is defined as a **maximal substring** consisting of non-space characters only.  


### Example 1:
```
Input: "Hello World"
Output: 5
```


### My Solution:
#### Runtime: 76ms, Memory: 36.2MB
```
var lengthOfLastWord = function(s) {
  const arr=s.split(' ').filter(current=>{
    if(current.length>0) return current
  });
  if(arr.length<1) return 0
  else {
    return arr[arr.length-1].length
  };
};
```
**Test-case**: "Hello Beautiful  World" *(notice the extra space betwen Beautiful and World)*  
**Step1**: Declare variable ```cost arr``` that splits ```s``` string into individual words with ```s.split(' ')```. Notice the space between apostrophes. Instead of splitting string into individual letters (such as   ['H', 'e', 'l', 'l', 'o',' ', 'B', 'e', 'a', 'u','t', 'i', 'f', 'u', 'l',' ',' ', 'W', 'o', 'r', 'l','d'] with no space between aphostrophes - split('')) we need an array with full words, which is achieved with ```s.split(' ')```, which results ['Hello', 'Beautiful', '', 'World'].  
**Step2**: For next step filter through the ```arr``` that takes parameter ```current``` and checks (with the conditional statement) if the length of the string is bigger than 0, if true, return it. THis is important to eliminate any additional empty spaces. The new value of ```arrr``` becomes ['Hello', 'Beautiful', 'World'].    
**Step3**: Create conditional statement that checks if ```arr``` is holding less than one items, if true, the return value is 0. If ```arr``` is holding more than one values, the ```else``` condition return the length of last item with ```return arr[arr.length-1].length```.
