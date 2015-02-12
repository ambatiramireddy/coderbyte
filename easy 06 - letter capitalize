function LetterCapitalize(str) { 
  var strArray = str.split(" "); // array of words
  strArray.forEach(function(element, index, array) {
    strArray[index] = element.charAt(0).toUpperCase() + element.slice(1,element.length);
    return strArray[index];
  });
  var newStr = strArray.join(" ");
  return newStr;
}
