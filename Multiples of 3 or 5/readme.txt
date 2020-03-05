Source: Project Euler (https://projecteuler.net/problem=1)
Language: JavaScript

Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


First thing I did was I created a function with the parameter n. 
Within the function I've declared an empty array called arr. 
As a next step I've set up for-loop to iterate through all numbers to find if they can be devided between 3 or 5 using the modulus operator (%). If the i can be divided between 3 or 5 ( === 0), it got pushed to the arr.
Second part of the brief is to add up all of the numbers that mutliple between 3 or 5. Easiest and most straight forward way to do it, is by using the reduce method or variable arr. Reduce method takes in a function as a parameter with parameters a, b and returns a+b.
