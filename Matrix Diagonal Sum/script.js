var diagonalSum = function(mat) {
  const left=mat.length+1;
  const right=mat.length-1;
  const merged=[].concat.apply([], mat);
  return merged.filter((current, index)=>{
    if (index%left===0 || index%right===0) return current
  }).reduce((a,b)=>a+b);
};
