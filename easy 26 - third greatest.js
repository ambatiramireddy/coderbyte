function ThirdGreatest(strArr) { 
  var thirdLargestWordCount = strArr
      .reduce(function(a, b) {
        a.push(b.length);
        return a;
      }, [])
      .sort(function(a, b) {
        return b - a;
      })
      [2];

  for(var i = strArr.length - 1; i >= 0; i--) {
    if(strArr[i].length == thirdLargestWordCount)
      return strArr[i];
  }
  
  return null;
}
