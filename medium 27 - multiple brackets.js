function MultipleBrackets(str) { 

  var countP = 0; // parentheses
  var countS = 0; // square brackets
  var pairs = 0;
  arr = str.replace(/[^\(\)\[\]]/gi, "").split(""); 
  
  for(var i = 0; i < arr.length; i ++) {
    if(countP < 0 || countS < 0)
      break;
    
    if(arr[i] == "(") {
      countP ++;
    } else if(arr[i] == "[") {
      countS ++;
    } else if(arr[i] == ")") {
        countP --;
        pairs ++;
    } else {
        countS --;
        pairs ++;
    }
  }
  
  if(arr.length == 0)
    return "1";
  else if(countP > 0 || countS > 0)
    return "0";
  else
    return "1 " + pairs;
         
}
