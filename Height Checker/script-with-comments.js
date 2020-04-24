//Test case: 1,1,4,2,1,3
//Result: 3

var heightChecker = function(heights) {
    //Create target array that copies heights and sorts it into increasing order. In order to execute that, we need to use concat() method so that the original array wouldn't get mutated. Once the array is concatenated, we have to use sort((a,b)=>a-b) method. The purporse of (a,b)=>a-b is to ensure that array is in ascending order. Without it array [1,2,7,8,10,11] will return [1,10,11,2,7,8];
    let sortHeights=heights.concat().sort((a,b)=>a-b);
    //Create variable counter that gets incremented each time we have variance in both arrays;
    let counter=0;
    //Declare for-loop with starting position 0, stopping possition length of the heights and get incremented by 1;
    for (let i=0; i<heights.length; i++) {
        //Create if statement that compares two arrays. Should there be a difference at given possition of i, the counter will be incremented by 1;
        if(sortHeights[i]!==heights[i]) {
            counter++;
        }
    }
    //return results from counter
    return counter;
}
