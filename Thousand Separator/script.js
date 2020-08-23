var thousandSeparator = function(n) {
  const arr=n.toString().split('').reverse();
  return arr.map((x,index)=>{
    if(index%3===0&&index!==0) x+='.'
    return x;
  }).reverse().join('');
};
