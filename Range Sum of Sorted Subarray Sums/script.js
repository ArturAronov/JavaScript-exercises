var rangeSum = function(nums, n, left, right) {
  let arr=[];
  let sum=[];
  
  rec(n);
  function rec(par){
    if (n===0) return arr;
    else {
      arr.push(nums[0]);
      for (let i=1; i<nums.length; i++) {
        arr.push(arr[arr.length-1]+nums[i]);
      };
      nums.shift();
      rec(n--);
    };
  };

  arr.sort((a,b)=>a-b);

  for (let i=left-1; i<right; i++) {
    sum.push(arr[i]);
  };
  return sum.reduce((a,b)=>a+b);
};
