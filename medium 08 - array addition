function ArrayAddition(arr) { 

 
  // code goes here  
  arr = arr.sort(function(a,b) {
    return b - a; // sort in decreasing order
  });

  var largest = arr.shift(); // first is largest
  
  function solve(goal, subArr) { 
    if(goal == 0)
      return true;

    // if after goal - [all removed numbers] == 0, then a solution subset is found
    
    for(var i = 0; i < subArr.length; i ++) {
      var subArrCopy = subArr.slice(); // make copy of array

      var removed = subArrCopy.splice(i,1); // remove element at index
      
      // assume REMOVED is part of the solution subset that adds up to LARGEST
      // subtract REMOVED from goal, and set it as new goal, then solve with remaining elements

      if(solve(goal - removed[0], subArrCopy)) // iterate
        return true;
      
      // if solve returns false, then current set of REMOVED is not part of the solution subset
      // undo removal (subArrCopy = SubArr.slice()) and
      // increment for loop and remove next item in array and try again
    }
    
    return false;
  }

  return solve(largest, arr); 
         
}
