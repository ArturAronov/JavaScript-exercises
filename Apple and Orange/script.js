//Test case: 7, 11, 5, 15, [-2,2,1], [5,-6]
//Result: 1 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCounter = 0;
    let orangesCounter = 0;
    for (let i=0; i<apples.length; i++) {
        apples[i]+=a;
        if (apples[i]>=s && apples[i]<=t) {applesCounter++}
    }
    for (let i=0; i<oranges.length; i++) {
        oranges[i]+=b;
        if (oranges[i]<=t && oranges[i]>=s) {orangesCounter++}
    }
    
    console.log(applesCounter)
    console.log(orangesCounter)
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])
