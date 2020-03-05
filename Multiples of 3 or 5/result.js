function multiplesOfThreeAndFive(n){
    let arr = []
    for (let i=1; i<n; i++) {
        if (i%3 === 0) {arr.push(i)}
        else if (i%5 === 0) {arr.push(i)}
    }
    let sum = arr.reduce(function (a,b) {
        return a+b;
    })
    return sum;
}
multiplesOfThreeAndFive(100)
