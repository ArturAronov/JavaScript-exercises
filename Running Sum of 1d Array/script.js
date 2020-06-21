//Test-case: [ 6, 4, 7, 4, 9 ]  
//Result: [ 6, 10, 17, 21, 30 ]  
var runningSum = function(nums) {
    let result = [];
    for (let i=0; i<nums.length; i++) {
        result.push(nums.slice(0,i+1).reduce((a,b)=>a+b));
    }
    return result;
};
