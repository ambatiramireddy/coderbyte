function FibonacciChecker(num) { 
  var f = [0, 1];
  var max = f.slice(-1)[0];
   
  while(max < num) {
    f.push(f.slice(-2).reduce(function(a, b) { return a + b; }));
    max = f.slice(-1)[0];
  }
  
  if(f.indexOf(num) !== -1)
    return "yes";
  
  return "no"; 
}
