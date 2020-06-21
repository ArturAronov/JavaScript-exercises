## Running Sum of 1d Array

**Source**: [leetCode](https://leetcode.com/problems/running-sum-of-1d-array/)  
**Difficulty**: Easy  
**Brief**:  
Given an array ```nums```. We define a running sum of an array as ```runningSum[i] = sum(nums[0]…nums[i])```.  
Return the running sum of nums.


### Example 1:
```
**Input**: nums = [1,2,3,4]  
**Output**: [1,3,6,10]  
**Explanation**: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].  
```  

### Example 2:
```
**Input**: nums = [1,1,1,1,1]
**Output**: [1,2,3,4,5]
**Explanation**: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```
  
### My Solution:
```
//Test-case: [ 6, 4, 7, 4, 9 ]  
//Result: [ 6, 10, 17, 21, 30 ]  
var runningSum = function(nums) {
    let result = [];
    for (let i=0; i<nums.length; i++) {
        result.push(nums.slice(0,i+1).reduce((a,b)=>a+b));
    }
    return result;
};
```
  
**Step1**: Create an empty array ```result``` where the result is stored.  
**Step2**: Start the for-loop with starting position of 0 (```i=0```), stopping position of length of the array (```i<arr.length```), that gets incremented by 1 (```i++```).  
**Step3**: Within the loop, push into ```result``` array sum of the digits starting from arr[0] until arr[i+1]. For that, use non-mutating method Array.slice(startIndex, endIndex), as array is zero-indexed, set startIndex to 0 and since end index extact up to but not including, increment i with 1 ```i+1``` as the end value (```arr.slice(0,i+1)```). Use reduce method after slice to sum all of the values.  
**Step4**: return result.  
  
#### Code in focus:
//Test-case: [ 6, 4, 7, 4, 9 ]
```
let result = [6];
for (let i=0; i<5; i++) {
  result.push(nums.slice(0, i+1).reduce((a,b)=>a+b));
  //nums.slice(0, 0+1).reduce((a,b)=>a+b))
}
```
```
let result = [6,10];
for (let i=1; i<5; i++) {
  result.push(nums.slice(0, i+1).reduce((a,b)=>a+b));
  //nums.slice(0, 1+1).reduce((a,b)=>a+b))
}
```
```
let result = [6,10, 17];
for (let i=2; i<5; i++) {
  result.push(nums.slice(0, i+1).reduce((a,b)=>a+b));
  //nums.slice(0, 2+1).reduce((a,b)=>a+b))
}
```
```
let result = [6,10,17,21];
for (let i=3; i<5; i++) {
  result.push(nums.slice(0, i+1).reduce((a,b)=>a+b));
  //nums.slice(0, 3+1).reduce((a,b)=>a+b))
}
```
```
let result = [6,10,17,21, 30];
for (let i=4; i<5; i++) {
  result.push(nums.slice(0, i+1).reduce((a,b)=>a+b));
  //nums.slice(0, 4+1).reduce((a,b)=>a+b))
}
```
Since ```i``` is smaller than than 5 and next iteration would make ```i``` equal to 5, the loop stops. 
