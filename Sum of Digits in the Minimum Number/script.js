var sumOfDigits = function(A) {
    let min = Math.min(...A)
    let result = min.toString().split('').map(Number);
    let pls = 0;
    for (let i=0; i<result.length; i++) {pls += result[i]};
    if(pls % 2 == 0) {return 1}
    else {return 0}
};
