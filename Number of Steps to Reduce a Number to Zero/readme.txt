1342. Number of Steps to Reduce a Number to Zero
Source: leetCode (https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)
Difficulty: Easy
Brief:
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.

This excercise could be executed in two different way: loop or recursion. Since loop version is very straight forward, I decided to execute it with while loop, that's less memory intensive compared to the recursion. 
First I've declared an emapty array where I store the results generated in loop;
For the next step, I've created a while loop with stopping condition of smaller than num - meaning, the loop will run until value of num becomes 0;
Within the while loop I have if statement that checks if num is equal (with modulo (%) operator), if the result is true, the num value gets divided by two and pushed into arr. Should the num be an odd value, the else statement changes num value by substracting 1 and pushes the result to arr. 
For the final step I return arr.length that will return number of steps it took for algorithm to reduce number to 0.
