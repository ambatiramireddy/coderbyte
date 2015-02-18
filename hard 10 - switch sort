function SwitchSort(arr) { 
  // brute force check all permutations
  // no good for arr length > 5
    
  var checkSorted = function(arr) { // checks if array is sorted
    for(var i = 0; i < arr.length; i ++) {
      if(i + 1 !== arr[i])
        return false;
    }
    return true;
  }
  
  function swap(arr, index, left) { // performs swap of element at index, left = T/F
    if(index < 0 || index >= arr.length || typeof left !== 'boolean')
      return arr;
    
    var dir = 1;
    if(left)
      dir = -1;
    
    var swap = (arr.length + index + dir * arr[index]) % arr.length;
    
    var temp = arr[index];
    arr[index] = arr[swap];
    arr[swap] = temp;
    
    return arr;
  }
  
  var minSteps = -1;
  var minMoves = [];
  
  function solve(arr, steps, moves) {
    moves.push(arr.slice().join('-'));
    if(checkSorted(arr) === true) { // check if arr is sorted; if so, record # steps and moves history (strategy)
      if(minSteps === -1 || steps < minSteps) {
        minSteps = steps;
        minMoves = moves; 
      }
      return 1; // done!
    }
    
    steps++;
    if(minSteps !== -1 && steps > minSteps) // if steps exceed min # steps achieved by another strat, return & try another move
      return 0;
    
    for(var i = 0; i < arr.length; i ++) {
      var arrLeft = swap(arr.slice(), i, true); // try swap left
      if(moves.indexOf(arrLeft.slice().join('-')) === -1) // if swap results in arrangement previously seen, ignore & try another move
      	solve(arrLeft.slice(), steps, moves.slice());
      
      var arrRight = swap(arr.slice(), i, false); // try swap right
      if(moves.indexOf(arrRight.slice().join('-')) === -1) // if swap results in arrangement previously seen, ignore & try another move
      	solve(arrRight.slice(), steps, moves.slice());
    }
  }
   
  solve(arr, 0, []);
  return minSteps;
}
