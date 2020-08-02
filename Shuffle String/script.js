var restoreString = function(s, indices) {
  let result=[];
  for (let i in indices) result[indices[i]]=s[i];
  return result.join('');
};
