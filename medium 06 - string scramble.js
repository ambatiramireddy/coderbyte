function StringScramble(str1,str2) { 

  var arr1 = str1.split("");
  var arr2 = str2.split("");
  
  for(var i = 0; i < arr2.length; i ++) {
    var foundAt = arr1.indexOf(arr2[i]);
    if(foundAt !== -1) {
      arr1.splice(foundAt, 1);
    } else {
      return false;
    }
  }
  
  return true;
}
