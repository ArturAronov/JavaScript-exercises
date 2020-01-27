var subtractProductAndSum = function(n) {
    let numbers = n.toString().split('').map(Number);
    let multiply = 1;
    let pls = 0;
    for (let i=0; i<numbers.length; i++) {
        multiply *= numbers[i];
        pls += numbers[i];
    }
    return multiply - pls;
};
