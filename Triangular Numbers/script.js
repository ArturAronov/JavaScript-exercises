//Test-case: 13;
//Result: 91;

function triangle(n) {
    let rows = [];
    let reducer = (a,b) => a+b;

    for (let i=1; i<=n; i++) {
        rows.push(i);
    }
    
    return rows.reduce(reducer);
}
