function CaesarCipher(str,num) { 

  var arr = str.slice().split("");
  
  arr.forEach(function(element, index, array) {
    if(element.match(/[a-zA-Z]/) !== null) {
      var code = element.charCodeAt(0);
      if(code >= "a".charCodeAt())
        code = (((code + num) % "a".charCodeAt()) % 26) + "a".charCodeAt();
      else
        code = (((code + num) % "A".charCodeAt()) % 26) + "A".charCodeAt();
      
      array[index] = String.fromCharCode(code);
    }
  });
  
  return arr.join(""); 
}
