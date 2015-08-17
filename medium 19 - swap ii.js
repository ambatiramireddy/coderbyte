function SwapII(str) { 

  var arr = str.split("");
  arr.forEach(function(element, index, array) {
    if(element.match(/[A-Z]/) !== null)
      array[index] = element.toLowerCase();
    else if(element.match(/[a-z]/) !== null)
      array[index] = element.toUpperCase();
  });
  str = arr.join("");
  
  var newstr = str.replace(/(\d)([a-zA-Z]+)(\d)/, '$3$2$1');
  return newstr;
}
