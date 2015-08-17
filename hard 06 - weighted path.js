function WeightedPath(strArr) { 

  var num = Number(strArr.slice(0,1)[0]); // ex. 4
  var nodes = strArr.slice(1, num + 1); // ex. [a, b, c, d]
  var connections = strArr.slice(num + 1).reduce(function(a, b, index, array) { // array of connections, connection = [start, finish, weight]
    a.push(b.split('|'));
    return a;
  }, []);
    
  var paths = [];
  
  var findPaths = function(pathSoFar, weightSoFar) {
    // pathSoFar = [a, b, ... n] where a is starting point and n is current node
    // weightSoFar = cumulative sum of weights of each connection used in pathSoFar
    var currentNode = pathSoFar[pathSoFar.length - 1];
    
    if(currentNode === nodes[nodes.length - 1]) { // check if reached last node
      paths.push([pathSoFar.slice(), weightSoFar]);
      return;
    }
    
    for(var i = 0; i < connections.length; i++) {
      var connection = connections[i].slice();
      if(connection[0] === currentNode || connection[1] === currentNode) {
        if(connection[1] === currentNode) { // rearrange connection
          var temp = connection[0];
          connection[0] = connection[1];
          connection[1] = temp;
        }
               
        if(pathSoFar.indexOf(connection[1]) === -1) {
          // only use connection if reaches node not previously traversed
          pathSoFar.push(connection[1]);
          weightSoFar += Number(connection[2]);
          
          findPaths(pathSoFar.slice(), weightSoFar);
          
          pathSoFar.pop();
          weightSoFar -= Number(connection[2]);
        }
      }
    }
    
    // no connections
  };
  
  findPaths([nodes[0]], 0); 
  
  if(paths.length === 0)
    return -1;
  
  paths.sort(function(a, b) { return a[1] - b[1]; }); // sort by weight
  var minPath = paths[0][0];
  
  return minPath.reduce(function(a, b) {
    if(a.length === 0)
      a += b;
    else
      a += '-' + b;
    
    return a;
  }, "");
         
}
