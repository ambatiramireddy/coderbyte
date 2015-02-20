function VertexCovering(strArr) { 

  var vertices = strArr[0].replace(/[\(\)]/gi, "").split(',');
  var edges = strArr[1].replace(/[\(\)]/gi, "").split(',').map(function(a) {
    return a.split('-');
  });
  var check = strArr[2].replace(/[\(\)]/gi, "").split(',');
    
  for(var i = 0; i < check.length; i ++) {
    for(var j = 0; j < edges.length; j ++) {
      if(edges[j].indexOf(check[i]) !== -1 ) {
        edges.splice(j, 1);
        i = -1;
        break;
      }
    }
  }
  
  if(edges.length === 0)
    return 'yes';
  
  return '(' + edges.map(function(a) { return a.join('-'); }).join(',') + ')';     
}
