function NumberSearch(str) { 
  
  var num = 0;
  var matched = str.match(/\d/g);
  
  if(matched !== null)
    num = matched.reduce(function(a, b) { return Number(a)  + Number(b); });
  var den = str.match(/[a-z]/gi).length;  
  return Math.round(num/den); 
         
}
