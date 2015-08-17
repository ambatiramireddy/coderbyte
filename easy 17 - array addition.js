function ArrayAdditionI(arr) { 

  arr = arr.sort(function(a,b) {
    return b - a; // sort in decreasing order
  });
  var largest = arr.shift(); // first is largest
  
  function solve(goal, subArr) { 
    if(goal == 0)
      return true; // if goal - [all removed numbers] == 0, then a solution subset is found

    for(var i = 0; i < subArr.length; i ++) {
      var subArrCopy = subArr.slice();
      var removed = subArrCopy.splice(i,1);
      
      // assume REMOVED is part of the solution subset that adds up to LARGEST
      // subtract REMOVED from goal, and set it as new goal, then solve with remaining elements

      if(solve(goal - removed[0], subArrCopy)) // iterate
        return true;
    }
    
    return false;
  }

  return solve(largest, arr);
}
