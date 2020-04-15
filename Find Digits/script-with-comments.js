//Test case: 1012
//Result: 3

function findDigits(n) {
    //Create variable count with value 0, this will get incremented in loop every time d%n=0
    let count=0;
    //Create variable d where the value of n gets converted from number into string (1012 to "1012") and split up the sting into individual numbers ('1', '0', '1', '2');
    let d=n.toString().split('');
    //Create for-loop with starting condition 0 (i=0) and stopping condition length of d (in this case 4);
    for (let i=0; i<d.length; i++) {
        //Within the loop, iterate over each element in d and to determine if division reminder is zero (n%d[i]: 1012%1, 1021%0, 1012%1, 1012%2);
        if(n%d[i]===0) {
            //If n%d[i] === 0, count gets incremented by 1;
            count++
        }
    }
    return count;
}
