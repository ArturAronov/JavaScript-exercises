function collatz(num){
  let numList = [];
  i = 0;

  while (num !== 1) {
    if (num % 2 === 0) { num /= 2}
   else {num = num * 3 + 1}
    numList[i] = num;
    i++
}

console.log(numList)
}

collatz(99)
//Output: [298, 149, 448, 224, 112, 56, 28, 14,7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10,5, 16, 8, 4, 2, 1]
