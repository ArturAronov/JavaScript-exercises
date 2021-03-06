Find Digits
Source: HackerRank (https://www.hackerrank.com/challenges/find-digits)
Difficulty: Easy
Brief:
An integer d is a divisor of an integer n if the remainder of n%d=0.
Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for n=111, 1 is a divisor of 111 each time it occurs so the answer is 3).

Function Description:
Complete the findDigits function in the editor below. It should return an integer representing the number of digits of d that are divisors of d.
findDigits has the following parameter(s):
- n: an integer to analyze

Output Format:
For every test case, count the number of digits in n that are divisors of n. Print each answer on a new line.

Sample Input:
12
1012

Sample Output:
2
3

Explanation:
The number 12 is broken into two digits, 1 and 2. When 12 is divided by either of those two digits, the remainder is 0 so they are both divisors.
The number 1012 is broken into four digits, 1, 0, 1, and 2.  is evenly divisible by its digits 1, 1, and 2, but it is not divisible by 0 as division by zero is undefined.

My Solution:
n=1012
Step1: Create variable count with value 0, this will get incremented in loop every time d%n=0;
Step2: Create variable d where the value of n gets converted from number into string (1012 to "1012") and split up the sting into individual numbers ('1', '0', '1', '2');
Step3: Create for-loop with starting condition 0 (i=0) and stopping condition length of d (in this case 4);
Step3.1: Within the loop, iterate over each element in d and to determine if division reminder is zero (n%d[i]: 1012%1, 1012%0, 1012%1, 1012%2);
Step3.2: If n%d[i] === 0, count gets incremented by 1;
Step4: Return count.
