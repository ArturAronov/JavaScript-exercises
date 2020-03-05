/* 
Source: Project Euler (https://projecteuler.net/problem=1)
Language: JavaScript

Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function test(n){
    //emtpy array to store result from the for loop.
    let arr = []
    //this for loop will iterate trhough the n and find whether the number multiplies by 3 or 5 using the modulus operator (%). If i can be devided between 3 or 5 (=== 0), then it will get pushed to arr.
    for (let i=1; i<n; i++) {
        if (i%3 === 0) {arr.push(i)}
        else if (i%5 === 0) {arr.push(i)}
    }
    //second part of the brief is to add up all of the numbers that mutliple between 3 or 5. Easiest and most straight forward way to do it, is by using the reduce method. 
    let sum = arr.reduce(function (a,b) {
        return a+b;
    })
    console.log(sum)
}
test(100)
