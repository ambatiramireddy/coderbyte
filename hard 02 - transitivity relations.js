function TransitivityRelations(strArr) { 

  // ignore reflexive - if there is 0 -> 1 and 1 -> 2 and 2 -> 0, does not require 0 -> 0 to be transitive

  var connections = [];
  
  strArr.forEach(function(element, index, array) {
  	var arr = element.slice(1,element.length-1).split(',');
    for(var i = 0; i < arr.length; i ++) {
      if(arr[i] == 1)
      	connections.push([index, i]); 
    }
  });
  
  // connections is array of all connections, where each connection is array. Ex: [0, 1] means 0 -> 1
  // findTransitives - Ex. if startNode is [0, 1] and [1, 2] and [2, 3] exists in connections, will return [0, 2] and [0, 3]
    
  function findTransitives(startNode, allConnections) {
    // returns array of connections starting with connection n
    // from array of connections c
    var transitives = [];
    for(var i = 0; i < allConnections.length; i++) {
      if(allConnections[i][0] == startNode[1] && allConnections[i][0] !== allConnections[i][1]) {
        transitives.push([startNode[0], allConnections[i][1]]);
        
        var connectionsXSelf = allConnections.slice();
        connectionsXSelf.splice(i,1); // splice returns REMOVED elements - need to do this to avoid infinite loops
        var chainTransitives = findTransitives(transitives.slice(-1)[0], connectionsXSelf);
        for(var j = 0; j < chainTransitives.length; j ++) {
          transitives.push([startNode[0], chainTransitives[j][1]]);
        }
      }
    }
    return transitives;
  }
  
  var missing = [];
  for(var i = 0; i < connections.length; i ++) {
    var transitives = findTransitives(connections[i], connections);
    transitives.forEach(function(element, index, array) {
      if(element[0] == element[1]) // ignore reflexive
          return;
      
      for(var j = 0; j < connections.length; j ++) { // check if in connections already
        if(element[0] == connections[j][0] && element[1] == connections[j][1])
          return;        
      }
      
      for(var j = 0; j < missing.length; j ++) { // check if in missing already
        if(element[0] == missing[j][0] && element[1] == missing[j][1])
          return;        
      }
      
      missing.push(array[index].slice());
    });
  }
  
  missing.sort(function(a, b) { // sort missing lexicographical order
    if(a[0] !== b[0])
      return a[0] - b[0];
    else
      return a[1] - b[1];
  });
  
  if(missing.length == 0)
    return "transitive";
  else
  	return '(' + missing.join(')-(') + ')';        
}
