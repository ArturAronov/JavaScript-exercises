//Test case: 20, 23, 6
//Result: 2

function beautifulDays(i, j, k) {
    function reverse(num) {
        return num.toString().split("").reverse().join("")
    }
    let result = [];
    while(i<=j) {
        let value=(Math.abs(i-reverse(i)))/k;
        if(Number.isInteger(value) == true) {
            result.push(value)
        }
        i++;
    }
    return result.length;
}
