//Test case: [8,1,2,2,3]
//Result: [ 4, 0, 1, 1, 3 ]

let smallerNumbersThanCurrent = function(nums) {
    let result=[];
    //Create for-loop that iterates over nums[i];
    for (let i=0; i<nums.length; i++) {
        //Create variable counter that stores number 0. This will get incremented by one every time that nums[j]<nums[i];
        let counter=0;
        //Create another for-loop that iterates over nums[j];
        for (let j=0; j<nums.length; j++) {
            //Compare if nums[j] is smaller than nums[i]
            if (nums[j]<nums[i]) {
                //Should the if result in true, increment counter by 1;
                counter++;
            }
        }
        //Push number stored in counter into result;
        result.push(counter);
        //Reset counter back to 0;
        counter=0;
    }
    return result;
};
