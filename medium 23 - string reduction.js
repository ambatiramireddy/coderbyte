function StringReduction(str) { 

  var letters = ['a', 'b', 'c'];
  var arr = str.split("");
  
  for(var i = 1; i < arr.length; i ++) {
    if(arr[i] !== arr[i-1]) {
      var x = letters.slice();
      x.splice(x.indexOf(arr[i]),1);
      x.splice(x.indexOf(arr[i-1]),1);
      arr.splice(i,1);
      arr[i-1] = x[0];

      i = 0;
    }
  }
  
  return arr.length;
}
