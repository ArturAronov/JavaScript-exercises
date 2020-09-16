var lengthOfLastWord = function(s) {
  const arr=s.split(' ').filter(current=>{
    if(current.length>0) return current
  });
  if(arr.length<1) return 0
  else {
    return arr[arr.length-1].length
  };
};
