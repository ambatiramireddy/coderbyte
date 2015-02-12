function OptimalAssignments(strArr) { 
  
  function format(strArr) { // takes input 1D array and returns n x n matrix array
    return strArr.reduce(function(a, b) {
      a.push(b.replace(/[\(\)]/gi, "").split(',').slice());
      return a;
    }, []);
  }
  
  function permutator (arr) { // returns all permutations of input array
    var permutations = [];
    if (arr.length === 1) {
      return [ arr ];
    }
  
    for (var i = 0; i <  arr.length; i++) { 
      var subPerms = permutator(arr.slice(0, i).concat(arr.slice(i + 1)));
      for (var j = 0; j < subPerms.length; j++) {
        subPerms[j].unshift(arr[i]);
        permutations.push(subPerms[j]);
      }
    }
    return permutations;
  }
  
  var performance = format(strArr);
  var num = [];
  
  for(var i = 0; i < performance.length; i ++) {
    num.push(i); 
  }
  // num holds default machine-task assignment, machine n does task n
  // num = [0, 2, 1] means an arrangement where machine 1 does task 1, machine 2 task 3, machine 3, task 2
  
  var permutations = permutator(num); // all possible machine-task assignments
  var minCost = null, minAssignment = null;
  
  permutations.forEach(function(element, index, array) { // check cost of each permutation
    var cost = 0;
    var assignment = "";
    for(var i = 0; i < element.length; i ++) {
      cost += Number(performance[i][element[i]]);
      assignment += '(' + Number(i + 1) + '-' + Number(element[i] + 1) + ')';
    }
    
    if(minCost == null || cost < minCost) {
      minCost = cost;
      minAssignment = assignment;
    }
  });
  
  return minAssignment;
}
