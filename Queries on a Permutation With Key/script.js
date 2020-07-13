var processQueries = function(queries, m) {
  let p=[];
  let indexes=[];
  for (let i=1; i<=m; i++) p.push(i);

  for (let i in p) {
    for (let j in p) {
      let num;
      if (queries[i]===p[j]) {
        indexes.push(j);
        num=queries[i];
        p.splice(j,1);
        p.splice(0,0,num);
        break;
      };
    };
  };
  return indexes;
};
