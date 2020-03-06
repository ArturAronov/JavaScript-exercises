
/*Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
ie: 
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5 etc.

I've created a function with parameter n (ie, if n = 5, the function will iterate the algorigthn for 5 times), that is esentially a stopping condition for loop that will iterate inside the function.
Since we know that fibonacci sequence starts with 0 and 1, I've declared two variables (num1 & num2) to store value of 0 and 1.
num3 variable is empty, however it will will be used down the line to store sum of num1 and num2.*/

function fibo(n) {
    let num1 = 0;
    let num2 = 1;
    let num3;
    let result = [];
    for (let i=0; i<n; i++) {
        num3 = num1 + num2;
	//I used modulo operator to determine if the next digit in the Fibonacci sequence is even or odd, if it's even, it will get pushed to empty array called result.
        if (num3%2 === 0) {result.push(num3)}
	//This code is moving second digit (num2) to the first (num1) position, and the sum of num1 + num2 is moving to second digit (num2). Now when the loop returns to starting point and starts to re-iterate again, we have updated digits to find new Fibonacci sequence.
        num1 = num2;
        num2 = num3;
    }
    return result;
}

fibo(66)
/* 
Returns:
              2,              8,
             34,            144,
            610,           2584,
          10946,          46368,
         196418,         832040,
        3524578,       14930352,
       63245986,      267914296,
     1134903170,     4807526976,
    20365011074,    86267571272,
   365435296162,  1548008755920,
  6557470319842, 27777890035288 
*/
