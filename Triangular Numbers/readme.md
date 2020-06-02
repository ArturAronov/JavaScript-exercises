## Triangular Numbers

**Source**: [Edabit](https://edabit.com/challenge/RMZiERz2cbjmbXruY)  
**Difficulty**: Medium   
**Brief**:  
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
  
```1, 3, 6, 10, 15```
  
This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.
  
Write a function that gives the number of dots n with its corresponding triangle number of the sequence.

###Definition of Triangular Numbers:  
A triangular number or triangle number counts objects arranged in an equilateral triangle (thus triangular numbers are a type of figurate numbers, other examples being square numbers and cube numbers). The nth triangular number is the number of dots in the triangular arrangement with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. The sequence of triangular numbers, starting at the 0th triangular number, is:  
0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, etc.  
**Source**: [Wikipedia](https://en.wikipedia.org/wiki/Triangular_number) 

### Example 1:
```
triangle(1) ➞ 1  

triangle(6) ➞ 21  

triangle(215) ➞ 23220  
```


### My Solution:
Step1: Create an empty array ```rows``` that will store loop iterations.  
Step2: Declare ```reucers``` function that will help us to sum the iterations stored in ```rows``` array.  
Step3: Create for-loop that starts from position 1 ```i=1```, stops at value of n ```i<=n```, and increments by 1 ```i++```.  
Step4: Push every result of iteration into array ```rows```.  
Step5: Return reduced rows ```reuturn rows.reduce(reducer)```.  
  
  
```
//Test-case: 13;
//Result: 91;
function triangle(n) {
    let rows = [];
    let reducer = (a,b) => a+b;

    for (let i=1; i<=n; i++) {
        rows.push(i);
    }
    
    return rows.reduce(reducer);
}
```
