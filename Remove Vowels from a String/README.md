## Remove Vowels from a String

**Source**: [leetCode](https://leetcode.com/problems/remove-vowels-from-a-string/)   
**Difficulty**: Easy    
**Brief**:  
Given a string ```S```, remove the vowels ```'a'```, ```'e'```, ```'i'```, ```'o'```, and ```'u'``` from it, and return the new string.


### Example 1:
```
Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
```  
  
### Example 2:
```
Input: "aeiou"
Output: ""
```


### My Solution 1:
#### Runtime: 84ms, Memory: 36.5MB
```
var removeVowels = function(S) {
  let result='';
  for (let i in S) {
    if(S[i]!=='a'&&S[i]!=='e'&&S[i]!=='i'&&S[i]!=='o'&&S[i]!=='u') result+=S[i]
  };
  return result;
};
```
**Step1**: Create empty string ```result```  
**Step2**: Create for-loop with if condition that checks if ```S[i]``` is not a vowel. If not, it gets added to result string with ```result+=S[i]```   
**Step3**: Return ```result```

### My Solution 2:
#### Runtime: 68ms, Memory: 36.5MB
```
var removeVowels = function(S) {
  return S.split('').filter(current=>{
    if(current!=='a'&&current!=='e'&&current!=='i'&&current!=='o'&&current!=='u') return current
  }).join('');
};
```
**Step1**: Split ```S``` string into array  
**Step2**: Call ```filter``` function on S array with ```current``` parameter  
**Step3**: Create conditional statement inside ```filter``` function that checks if ```current``` is not a vowel, if true, it returns ```current```  
**Step4**: Join the array back together into string
