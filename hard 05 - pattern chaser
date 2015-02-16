function PatternChaser(str) { 
  
  var patterns = [];

  for(var i = 0; i < str.length; i++) {
    for(var j = i + 2; j <= str.length; j ++) {
      var pattern = str.slice(i, j);
      var regex = new RegExp(pattern, "gi");
      var matches = str.match(regex);
      if(matches.length >= 2 && patterns.indexOf(pattern) === -1) {
        patterns.push(pattern.slice());
      }
    }
  }

  patterns.sort(function(a, b) { return b.length - a.length; }); 
  
  if(patterns.length == 0)
    return "no null";
  else
    return "yes " + patterns[0];
}
