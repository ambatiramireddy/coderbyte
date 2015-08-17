function LetterChanges(str) { 
  var strNew = str.replace(/[a-z]/gi, function(match) {
    var replacement = "";
    if(/[zZ]/g.test(match)) {
      replacement = 'a'; // replace z or Z with a
    } else {
      replacement = String.fromCharCode(match.charCodeAt(0)+1);
    }
    
    if(/[aeiou]/gi.test(replacement)) {
        replacement = replacement.toUpperCase(); // replace vowels with uppercase
    }
    
    return replacement;
  });
  return strNew;
}
