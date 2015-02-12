function SecondGreatLow(arr) { 

  var uniq = arr.slice()
      .sort(function(a, b) {
              return b - a; // decreasing
            })
      .reduce(function(a, b) {
        if(a.slice(-1)[0] !== b) a.push(b); // slice(-1) creates array of last element without removing it
        return a;
      }, []); // initial a as []
  
  if(uniq.length == 1) return uniq[0] + " " + uniq[0];
  return uniq[uniq.length-2] + " " + uniq[1];
}
