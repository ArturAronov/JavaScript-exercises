//Test case: [3,10,2,9], 1, 7
//Result: Bon Apetit

//Test case: [3,10,2,9], 1, 10
//Result: 3

function bonAppetit(bill, k, b) {
   //express function that will be used below to calculate the sum of the bill
   const calculator = (a,b) => a+b;
   //remove item from the bill that only Anna ate by mutating array using splice. k is the argument that indicates idex of the item that only Anna ate, 1 means that only one item gets removed from the array.
   bill.splice(k,1);
   //now that we have array that can be equally split between two diners, we can find out how much each person needs to pay. For this I'm using reduce() method with calcualtor function expression, and divide result into 2.
   const sum = bill.reduce(calculator)/2;
   //here I'm determing if the check was settled equally. b = the ammount that Anna paid. 
   const difference = b - sum;
   //if the difference = 0, it will print "Bon Apetit".
   if(difference === 0) {console.log("Bon Appetit")} 
   //if the result was anything lese but 0, it will print the amount Anna under/over paid.
   else {console.log(difference)}
}
