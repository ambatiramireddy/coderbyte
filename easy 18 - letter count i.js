function LetterCountI(str) { 

  var arr = str.toLowerCase().split(" ");
  
  arr.forEach(function(word, wordIndex, wordArray) {
    // reduce each word into the highest # of repeats of a letter
    wordArray[wordIndex] = word.split("").sort().reduce(function(prev, current, letterIndex, letterArray) {
      var max = 0;
      for(var i = 0; i < letterArray.length; i ++) {
        var regexp = new RegExp(letterArray[i], "gi");
        if(word.match(regexp).length > max)
          max = word.match(regexp).length;
      }
      return max;
    }, 0);
  });
  
  // highest # of repeats out of all the words
  var maxCount = arr.slice().sort(function(a,b) {return b - a;})[0]; 
  
  if(maxCount <= 1)
    return -1;
  else
    return str.split(" ")[arr.indexOf(maxCount)];       
}
