Beautiful Days at the Movies
Source: HackerRank (https://www.hackerrank.com/challenges/beautiful-days-at-the-movies)
Difficulty: Easy
Brief:
Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

Function Description:
Complete the beautifulDays function in the editor below. It must return the number of beautiful days in the range.
beautifulDays has the following parameter(s):
- i: the starting day number
- j: the ending day number
- k: the divisor

Input Format:
A single line of three space-separated integers describing the respective values of i, j, and k.

Sample Input:
- i: 20
- j: 23
- k: 6

Sample Output:
2

Explanation:
Lily may go to the movies on days 20, 21, 22, and 23. We perform the following calculations to determine which days are beautiful:
- Day 20 is beautiful because the following evaluates to a whole number: (20-02)/6 = 18/6 = 3
- Day 21 is not beautiful because the following doesn't evaluate to a whole number: (21-12)/6 = 9/6 = 1.5
- Day 22 is beautiful because the following evaluates to a whole number: (22-22)/6 = 0/6 = 0
- Day 23 is not beautiful because the following doesn't evaluate to a whole number: (23-32)/6 = 9/6 = 1.5
Only two days, 20 and 22, in this interval are beautiful. Thus, we print 2 as our answer.

My Solution:
Step1: Create a function that:
Step1.1: Converts number to string (from ie 21 to "21");
Step1.2: Splits the string (from "21" to "2" and "1");
Step1.3: Reverses two strings (from "2","1" to "1","2");
Step1.4: Joins the two strings together (from "1","2" to "12")
2. Create empty array where results iterated in the loop will be stored;
3. Crete a while loop with starting position of i and stopping position of j;
4. Create variable (let value), that will:
4.1 Substracts i - reverse(i);
4.2 Divides subtraction result with k;
4.3 Ensures the number is an absolute value (not a negative integer) with Math.abs();
5. Check if the value iterated in previous line is integer, if true, store the number in variable resul;
6. Return the length of result array.