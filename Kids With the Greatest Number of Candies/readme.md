## Kids With the Greatest Number of Candies

**Source**: [leetCode](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)  
**Difficulty**: Easy  
**Brief**:  
Given the array ```candies``` and the integer ```extraCandies```, where ```candies[i]``` represents the number of candies that the **ith** kid has.  
  
For each kid check if there is a way to distribute ```extraCandies``` among the kids such that he or she can have the **greatest** number of candies among them. Notice that multiple kids can have the **greatest** number of candies.
  
  
  
### Example 1:
```
Input: candies = [2,3,5,1,3], extraCandies = 3  
Output: [true,true,true,false,true]  
Explanation:  
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.  
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.  
Kid 3 has 5 candies and this is already the greatest number of candies among the kids.  
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.  
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.  
```
  
  
  
### My Solution:
Step1: Determine the largest amount of candiest a kid holds and hold the value in variable ```max```;
Step2: Create an empty array where the result will be stored in variable ```result```;
Step3: Create a for-loop with starting position 0 (```i=0```), run-time the length of the array (```i<candies.length```), gets incremented by one (```i++```);
Step4: Push boolean into ```result``` that checks if kids' candies + extra candies are larger / equal to maximum amount of what one kid holds.
Step5: Return result;  
  
  
  
```
let kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let result = [];
    for (let i=0; i<candies.length; i++) {
        result.push(candies[i]+extraCandies>=max);
    };
    return result;
};
```
