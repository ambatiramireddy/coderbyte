function LookSaySequence(num) { 

  var count = 1;
  var current = 0;
  var arr = num.toFixed().split("").reverse().reduce(function(a, b) {
    if(a.length == 0) {
      a.push(b);
      current = b;
      return a;
    }
    
    if(b == current) {
      count ++;
    } else {
      a.push(count);
      count = 1;
      current = b;
      a.push(b);
    }
    
    return a;
  }, []);

  arr.push(count);
  
  return Number(arr.reverse().join(""));
}
