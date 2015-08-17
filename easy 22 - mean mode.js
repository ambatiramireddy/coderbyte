function MeanMode(arr) { 

  var mode = 0; // if no mode, mode stays at 0
  
  arr.reduce(function(highestCount, element) {
    var count = (arr.join("=") + "=").match(new RegExp(element + "=", "gi")).length; // add “=“ to distinguish matching “1” with “10”
    if(count > highestCount && count > 1) {
      mode = element;
      return count;
    }
    
    return highestCount;
  }, 0);
  
  var mean = arr.reduce(function(a, b) {
    return a + b;
  }, 0) / arr.length;
  
  return Number(mode == mean); 
         
}
