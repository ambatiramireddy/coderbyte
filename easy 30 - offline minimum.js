function OffLineMinimum(strArr) { 
  
  var currentArr = [];
  return strArr.reduce(function(a, b) {
    if(Number(b) == b) // is number
      currentArr.push(Number(b));
    else // is "E"
      a.push(currentArr.sort(function(a, b) { return a - b;}).shift());
    return a;
  }, []).join(",");
}
