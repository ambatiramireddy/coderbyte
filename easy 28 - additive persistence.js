function AdditivePersistence(num) { 

  var addPers = 0;
  var count = function(n) {
    if(n < 10)
      return addPers;
    
    n = n.toFixed().split("").reduce(function(a, b) {
      return Number(a) + Number(b);
    }, 0);
    addPers ++;
    return count(n);
  };
  
  return count(num); 
}
