function RunLength(str) { 

  var count = 0;
  var arr = str.split("").reverse().reduce(function(a, b) {
    if(a.length == 0) {
      a.push(b);
      count ++;
    } else if(b !== a.slice(-1)[0]) { // a.slice(-1)[0] returns array of last element of a
      a.push(count);
      a.push(b);
      count = 1;
    } else {
      count ++;
    }
    
    return a;
  }, []).reverse();
  
  arr.unshift(count); // returns length of new array
  return arr.join("");
}
