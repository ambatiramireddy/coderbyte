function NoughtsDeterminer(strArr) { 
  
  var lines = [[0,1,2],
               [4,5,6],
               [8,9,10],
               [0,4,8],
               [1,5,9],
               [2,6,10],
               [0,5,10],
               [2,5,8]];
   
  function checkWin(arr) { // check if the game contains a win   
    if(arr.length !== 11)
      return null; // invalid arr
    
    var arrCopy = arr.slice();
    arrCopy.splice(3,1); // remove <>
    arrCopy.splice(6,1); // remove <>
    
    if(arrCopy.slice().join("").match(/[^XO\-]/gi) !== null) // check only contains X, O, -
      return null;
    
    var x = [], o = [];
    arr.forEach(function(a, index, array) {
      if(a == 'X')
        x.push(index);
      else if(a == 'O')
        o.push(index);
      
      return;
    });
    
    for(var i = 0; i < lines.length; i ++) {
      if(x.indexOf(lines[i][0]) !== -1 &&
         x.indexOf(lines[i][1]) !== -1 &&
         x.indexOf(lines[i][2]) !== -1)
        return true;
      
      if(o.indexOf(lines[i][0]) !== -1 &&
         o.indexOf(lines[i][1]) !== -1 &&
         o.indexOf(lines[i][2]) !== -1)
        return true;
    }
    return false;
  }
  
  for(var i = 0; i < strArr.length; i ++) { // check each empty space, and see if adding X or O results in win
    if(strArr[i] === '-') {
      var arrTest = strArr.slice();
      arrTest[i] = 'X';
      if(checkWin(arrTest))
        return i;
      
      arrTest[i] = 'O';
      if(checkWin(arrTest))
        return i;      
    }
  }
  return 'tied';
}
