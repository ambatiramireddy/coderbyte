function NumberEncoding(str) { 
  
  return str.toLowerCase().split("").reduce(function(a, b) {
    if(b.match(/[a-z]/gi) !== null) {
      a.push(b.charCodeAt(0) - 97 + 1);
    } else {
      a.push(b); 
    }
    
    return a;
  }, []).join(""); 
         
}
