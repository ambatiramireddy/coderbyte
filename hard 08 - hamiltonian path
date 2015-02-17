function HamiltonianPath(strArr) { 
  
  var nodes = strArr[0].replace(/[\(\)]/gi, "").split(',');
  var connections = strArr[1].replace(/[\(\)]/gi, "").split(',').map(function(a) {
    return a.split('-');
  });
  var path = strArr[2].replace(/[\(\)]/gi, "").split(',');
        
  for(var i = 1; i <= path.length; i ++) {
    var current = path[i - 1];
    var next = current;
    
    for(var j = 0; j < connections.length; j ++) {
      
      if(connections[j][0] === current || connections[j][1] === current) {
        var connection = connections[j].slice();
        connection.splice(connection.indexOf(current),1);
        
        if(connection[0] === path[i]) {
          next = connection[0];
          if(next === path[path.length-1]) // reached end of path
            return 'yes';
          break;
        }
      }
    }
    if(current === next)
      return current; // no connections
  }  
}
