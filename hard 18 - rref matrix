function RREFMatrix(strArr) { 
  
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
  
  function rref(arr) {
    for(var i = 0; i < arr.length; i ++) {
      for(var j = 0; j < arr[i].length; j ++) {
        if(arr[i][j] !== 0 && arr[i][j] !== 1) { // if leading number is not 0 or 1
          var divisor = arr[i][j];
          for(var k = 0; k < arr[i].length; k ++) { // divide the entire row by leading number
            arr[i][k] = arr[i][k] / divisor;
          }
          for(var l = 0; l < arr.length; l ++) { // then make all rows have 0 in pos of leading number
            if(arr[l][j] !== 0 && l !== i) {
              var multiplier = - arr[l][j];
			  for(var m = 0; m < arr[l].length; m ++) {
            	arr[l][m] += arr[i][m] * multiplier; // by adding row * multiplier to all other rows
          	  }	
            }
          }
          break;
        }
      }
    }
  };
  
  rref(arr);
  arr.sort(function(a, b) { // sort to maximize lower left corner 0s
    if(a.indexOf(1) === -1) return 1; // take care of cases where a or b has no 1s
    if(b.indexOf(1) === -1) return -1;
    
    return a.indexOf(1) - b.indexOf(1);
  });
  
  return arr.join('').replace(/[,]/gi, "");
}
