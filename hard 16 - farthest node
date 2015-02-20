function FarthestNodes(strArr) { 

  var paths = strArr.map(function(a) { return a.split('-'); });
  var nodes = [];
  paths.forEach(function(a) {
    for(var i = 0; i < a.length; i ++) {
      if(nodes.indexOf(a[i]) === -1)
        nodes.push(a[i]);
    }
  });
  nodes.sort();
   
  var journeys = []; // ex. a-b-d is a journey through paths a-b and b-d
  function travel(pathSoFar) {
    var currentNode = pathSoFar[pathSoFar.length - 1];
    
    for(var i = 0; i < paths.length; i ++) {
      if(paths[i][0] ===  currentNode || paths[i][1] === currentNode) {
        if(paths[i][0] !== currentNode) {
          var temp = paths[i][1];
          paths[i][1] = paths[i][0];
          paths[i][0] = temp;
        }
        
        if(pathSoFar.indexOf(paths[i][1]) === -1) {
          pathSoFar.push(paths[i][1]);
          travel(pathSoFar.slice());
          pathSoFar.pop();
        }
      }
    }
    journeys.push(pathSoFar.slice());
  }
  
  for(var i = 0; i < nodes.length; i ++) {
    travel([nodes[i]]); 
  }
  journeys.sort(function(a, b) { return b.length - a.length; }); // sort by descending length
  
  return journeys[0].length - 1; // length of longest journey
}
