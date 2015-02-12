function BracketMatcher(str) { 

  return Number(str.split("").reduce(function(a, b) {
    if(b == '(')
      a ++;
    else if(b == ')')
      a --;
    
    return a;
  }, 0) == 0); 
         
}
