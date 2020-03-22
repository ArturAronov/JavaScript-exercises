function collatz(num){
  //numList is an empty variable to store all the values that get iterated over in the while loop below.
  let numList = [];
  i = 0;
  
  //we know that Collatz Sequence ends with the value 1, hence we are going to use that as our stopping condition for the while loop.
  while (num !== 1) {
  
  //here we see if value of num is an even number with modulo operator, if it's even we divide num with 2.
    if (num % 2 === 0) { num /= 2}
   
  // if number is odd, we will multiply the num by 3 and add 1.
   else {num = num * 3 + 1}
   numList[i] = num;
   i++
}

console.log(numList)
}

collatz(99)
//Output: [298, 149, 448, 224, 112, 56, 28, 14,7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10,5, 16, 8, 4, 2, 1]

