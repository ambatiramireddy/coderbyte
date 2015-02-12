function TripleDouble(num1,num2) { 

  var triples = [];
  var doubles = [];
  for(var i = 0; i < 10; i ++) {
    if(num1.toFixed().match(new RegExp(i + "{3,}", "g")) !== null)
      triples.push(i);
    if(num2.toFixed().match(new RegExp(i + "{2,}", "g")) !== null)
      doubles.push(i);
  }
  
  var found = 0;
  triples.forEach(function(element, index, array) {
    if(doubles.indexOf(element) !== -1)
      found = 1;
  });
  
  return found;     
}
