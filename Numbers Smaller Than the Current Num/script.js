//Test case: [8,1,2,2,3]
//Result: [ 4, 0, 1, 1, 3 ]

let smallerNumbersThanCurrent = function(nums) {
    let result=[];
    for (let i=0; i<nums.length; i++) {
        let counter=0;
        for (let j=0; j<nums.length; j++) {
            if (nums[j]<nums[i]) {
                counter++;
            }
        }
        result.push(counter);
        counter=0;
    }
    return result;
};
