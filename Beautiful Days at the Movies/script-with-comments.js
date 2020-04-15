//Test case: 20, 23, 6
//Result: 2

function beautifulDays(i, j, k) {
    //Creates a function that converts number to string, splits it, reverses it and joins it.
    function reverse(num) {
        return num.toString().split("").reverse().join("")
    }
    //Creates empty array where results iterated in the loop will be stored
    let result = [];
    //Cretes a while loop with starting position of i and stopping position of j
    while(i<=j) {
        //Creates variable, that substracts i - reverse(i), divides subtraction result with k, ensures the number is an absolute value
        let value=(Math.abs(i-reverse(i)))/k;
        //Checks if the value iterated in previous line is integer, if true, store the number in variable result
        if(Number.isInteger(value) == true) {
            result.push(value)
        }
        i++;
    }
    //Returns the length of result array
    return result.length;
}
