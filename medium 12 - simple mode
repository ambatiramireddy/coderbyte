function SimpleMode(arr) { 

  var mode = -1; // if no mode, mode stays at -1
  
  arr.reduce(function(highestCount, element) {
    var count = (arr.join("=") + "=").match(new RegExp(element + "=", "gi")).length; // add “=“ to distinguish matching “1” with “10”
    if(count > highestCount && count > 1) {
      mode = element;
      return count;
    }
    
    return highestCount;
  }, 0);
  
  return mode; 
         
}
