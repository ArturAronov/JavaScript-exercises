function fibo(n) {
    let num1 = 0;
    let num2 = 1;
    let num3;
    let result = [];
    for (let i=0; i<n; i++) {
        num3 = num1 + num2;
        if (num3%2 === 0) {result.push(num3)}
        num1 = num2;
        num2 = num3;
    }
    return result;
}
