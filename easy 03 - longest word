function LongestWord(sen) { 
  var words = sen.split(" ").sort(function(a,b) {
      return b.replace(/[^a-zA-Z]/g,"").length - a.replace(/[^a-zA-Z]/g,"").length;
  });
  return words[0];
}
