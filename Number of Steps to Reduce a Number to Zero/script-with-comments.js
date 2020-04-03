//Testcase: 123
//Result: 12

var numberOfSteps  = function(num) {
    //declare an empty array that will store the results from the while loop.
    let arr = [];
    let i=0;
    //create while loop that will stop once num becomes smaller than i (in this case i = 0).
    while (i<num) {
        //if statement that checks if value of num is odd or even. If even, num value becomes num / 2 (divided by 2), and new value of num gets pushed to arr. Should the value of num be odd, then the value of num becomes num - 1, and new value of num gets pushed into arr.
        if (num % 2 === 0) {
            num /=  2;
            arr.push(num)
        } else {
            num -= 1;
            arr.push(num);
        }
    }
    //at this stage arr holds following value: [ 122, 61, 60, 30, 15, 14, 7, 6, 3, 2, 1, 0 ]. Meaning it took 12 steps for algorith to reduce number to zero. We get it by returning length of arr as per below.
    return arr.length;
};
