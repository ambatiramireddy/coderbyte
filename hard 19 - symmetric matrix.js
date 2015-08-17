function SymmetricMatrix(strArr) { 
  
  var index = 0;
  var arr = strArr.reduce(function(a, b) {
    if(a.length < index + 1)
      a.push([]);
    
    if(b !== '<>')
      a[index].push(Number(b));
    else
      index ++;
    
    return a;
  }, []);
  
  if(arr.length !== arr[0].length) // not square!
    return 'not possible';
  
  for(var i = 0; i < arr.length; i ++) {
    for(var j = 0; j < arr[i].length; j ++) {
      if(arr[i][j] !== arr[j][i])
        return 'not symmetric';
    }
  }
  
  return 'symmetric';
}
