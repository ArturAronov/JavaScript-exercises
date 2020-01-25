var findNumbers = function(nums) {
    let result = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {result.push(nums[i])}
    }
    return result.length;
};
