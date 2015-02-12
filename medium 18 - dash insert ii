function DashInsertII(num) { 
  
  var str = num;
  if(typeof num == "number")
    str = num.toFixed();
    
  
  return str.split("").reduce(function(a, b) {
    if(a.length > 0) {
      if(Number(a.slice(-1)[0]) !== 0 && Number(b) !== 0) {
        if(a.slice(-1)[0] % 2 == 0 && b % 2 == 0) {
          a.push('*');
        } else if(a.slice(-1)[0] % 2 !== 0 && b % 2 !== 0) {
          a.push('-'); 
        }
      }
    }
    
    a.push(b);
    return a;
        
  }, []).join(""); 
}
