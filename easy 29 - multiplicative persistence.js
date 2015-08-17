function MultiplicativePersistence(num) { 

  var multPers = 0;
  var count = function(n) {
    if(n < 10)
      return multPers;
    
    n = n.toFixed().split("").reduce(function(a, b) {
      return Number(a) * Number(b);
    });
    multPers ++;
    return count(n);
  };
  
  return count(num);
}
