//Test case: 1,1,4,2,1,3
//Result: 3

var heightChecker = function(heights) {
    let sortHeights=heights.concat().sort((a,b)=>a-b);
    let counter=0;
    for (let i=0; i<heights.length; i++) {
        if(sortHeights[i]!==heights[i]) {
            counter++;
        }
    }
    return counter;
}
