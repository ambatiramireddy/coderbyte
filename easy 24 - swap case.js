function SwapCase(str) { 
  return str.split("").reduce(function(a, b) {
    if(b.match(/[A-Z]/g) !== null)
      a.push(b.toLowerCase());
    else
      a.push(b.toUpperCase());
    
    return a;
  }, []).join("");
}
