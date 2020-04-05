Grading Students
Source: HackerRank (https://www.hackerrank.com/challenges/grading/problem)
Difficulty: Easy
Brief:
HackerLand University has the following grading policy: 
- Every student recieves a grade in the incusive range from 0 to 100.
- Any grade less than 40 is failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

For example, grade=84 will be rounded to 85 but grade=29 will not be rounded because the rounding would result in a number that is less than 40.

Example:
73 -> 75
67 -> 67
38 -> 40
33 -> 33


We have a initial function declaration which takes an argument called grades. Within the function I've created a empty array called result, where I will store adjusted grades that are the result of the loop.
Within the loop I have a variable called rounding (let rounding = Math.ceil(grades[i]/5)*5) that rounds the integer, using Math.ceil(), by dividing grades[i] with 5, and then multiplying the rounded grade by 5 to get the multiple of 5.
For the next step, I created chain of if statements that checks three conditions:
- if grade is below 38, which means the student has failed, hence the grade won't be chaged and it will get pushed to result array;
- if the difference between the grade and the multiple is less than 3, in which case the grade will get rounded up to next multiple of 5 and pushed to result array.
- if student has passed the exam, however his grade wasn't high enough to get rounded, the original grade will get pushed to result array.
