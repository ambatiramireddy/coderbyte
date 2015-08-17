function MatrixDeterminant(strArr) { 

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
 
  
  if(arr.length !== arr[0].length) return -1; // not square!
  
  function determinant(arr) {
    var det = 0;
    
    if(arr.length === 1) { // degenerate case
      det = arr[0];
      return det; 
    }
    
    for(var i = 0; i < arr[0].length; i ++) {
      var sign = 1;
      if(i % 2 === 1) sign = -1; // negative
      
      var subarr = []; // square matrix by excluding col & row of element arr[0][i]
      for(var j = 1; j < arr.length; j ++) {
        for(var k = 0; k < arr[j].length; k ++) {
          if(k !== i) {
            if(subarr[j-1] === undefined) subarr[j-1] = [];
            subarr[j-1].push(arr[j][k]);  
          }
        }
      }
      
      det += sign * arr[0][i] * determinant(subarr.slice());
    }
    return det;
  }
  
  return determinant(arr);        
}
