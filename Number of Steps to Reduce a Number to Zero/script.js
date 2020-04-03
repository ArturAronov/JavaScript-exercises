//Testcase: 123
//Result: 12

var numberOfSteps  = function(num) {
    let arr = [];
    let i=0;
    while (i<num) {
        if (num % 2 === 0) {
            num /=  2;
            arr.push(num)
        } else {
            num -= 1;
            arr.push(num);
        }
    }
    return arr.length;
};
