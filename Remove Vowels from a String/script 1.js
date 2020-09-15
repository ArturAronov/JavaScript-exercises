var removeVowels = function(S) {
  let result='';
  for (let i in S) {
    if(S[i]!=='a'&&S[i]!=='e'&&S[i]!=='i'&&S[i]!=='o'&&S[i]!=='u') result+=S[i]
  };
  return result;
};
