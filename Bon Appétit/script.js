//Test case: [3,10,2,9], 1, 7
//Result: Bon Apetit

function bonAppetit(bill, k, b) {
    const calculator = (a,b) => a+b
    bill.splice(k,1);
    const sum = bill.reduce(calculator)/2;
    const difference = b - sum
    if(difference === 0) {console.log("Bon Appetit")} 
    else {console.log(difference)}
}
