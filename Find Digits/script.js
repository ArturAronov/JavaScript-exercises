//Test case: 1012
//Result: 3

function findDigits(n) {
    let count=0;
    let d=n.toString().split('');
    for (let i=0; i<d.length; i++) {
        if(n%d[i]===0) {
            count++;
        }
    }
    return count;
}
