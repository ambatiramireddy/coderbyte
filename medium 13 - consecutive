function Consecutive(arr) { 

  var count = 0;
  arr.sort(function(a, b) {
    return a - b; // increasing
  });
  
  for(var i = arr[0] + 1; i < arr[arr.length- 1]; i ++) {
    if(arr.indexOf(i) == -1)
      count++;
  }
           
  return count; 
}
