//Test case: 7, 11, 5, 15, [-2,2,1], [5,-6]
//Result: 1 1

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //Set up counters applesCounter & orangesCounter - each time apple or orange falls within the s-t range, the counters will get incremented by 1
    let applesCounter = 0;
    let orangesCounter = 0;
    //Create for-loop to itereate apples array
    for (let i=0; i<apples.length; i++) {
        //sums apples[i] with a;
        apples[i]+=a;
        //runs through if statement that checks if apples[i] is ≥ to s and ≤ t. If true, applesCounter gets incremented by 1.
        if (apples[i]>=s && apples[i]<=t) {applesCounter++}
    }
    //Create for-loop to itereate oranges array
    for (let i=0; i<oranges.length; i++) {
        //sums oranges[i] with b
        oranges[i]+=b;
        //runs through if statement that checks if oranges[i] is ≤ to s and ≥ t. If true, orangesCounter gets incremented by 1.
        if (oranges[i]<=t && oranges[i]>=s) {orangesCounter++}
    }
    //Log the results
    console.log(applesCounter)
    console.log(orangesCounter)
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])

