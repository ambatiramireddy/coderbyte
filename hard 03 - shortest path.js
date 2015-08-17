function ShortestPath(strArr) { 

  var num = Number(strArr.slice(0,1)[0]);
  var nodes = strArr.slice(1, num + 1);
  var connections = strArr.slice(num + 1).reduce(function(a, b, index, array) {
    a.push(b.split('-'));
    return a;
  }, []);
   
  var paths = []; // to store all possible paths from first to last node
  
  var findPaths = function(pathSoFar) {
    // pathSoFar = [a, b, ... n] where a is starting point and n is current node
    var currentNode = pathSoFar[pathSoFar.length - 1];
    
    if(currentNode === nodes[nodes.length - 1]) { // if current = last node, then done
      paths.push(pathSoFar.slice());
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
               
        if(pathSoFar.indexOf(connection[1]) === -1) { // only use connection if reaches node not previously traversed
          pathSoFar.push(connection[1]);
          findPaths(pathSoFar.slice());
          pathSoFar.pop();
        }
      }
    }
    
    // no connections
  };
  
  findPaths([nodes[0]]); 
  
  if(paths.length === 0)
    return -1;
  
  var pathLengths = paths.map(function(x) { return x.length; });
  var minLength = pathLengths.slice().sort(function(a, b) { return a - b; })[0];
  var minPath = paths[pathLengths.indexOf(minLength)];
  
  return minPath.reduce(function(a, b) {
    if(a.length === 0)
      a += b;
    else
      a += '-' + b;
    
    return a;
  }, "");
}
