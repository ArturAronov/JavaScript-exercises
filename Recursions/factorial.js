//Test-case: 10
//Result: 3628800

//Recursion:
function factorial(n) {
    if (n===0) {
        return 1;
    } else {
        return n*factorial(n-1);
    };
};


//For-loop:
function factorial(n) {
    let arr=[];
    let reducer = (a,b) => a*b;
    for (let i=1; i<=n; i++) {
        arr.push(i);
    };
    let result = arr.reduce(reducer);
    return result;
};
