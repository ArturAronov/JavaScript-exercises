//Test case: [0,1,2,3,4], [0,1,2,2,1]
//Result: [ 0, 4, 1, 3, 2 ]

let createTargetArray = function(nums, index) {
    //Create empty array result where we will store the values gathered from the loop iteration;
    let result=[];
    //Declare for-loop that starts with 0 and stops at the length of the nums array;
    for (let i=0; i<nums.length; i++) {
        //Push the index[i] and nums[i] into result using splice() method. 0 means that no element get deleted;
        result.splice(index[i], 0, nums[i]);
    }
    //Return result;
    return result;
};
