function QueenCheck(strArr) { 

  var arr = strArr.map(function(a) { return a.replace(/[\(\)]/gi, "").split(',').map(Number); });

  var queen = arr[0];
  var king = arr[1];
    
  function inCheck(q, k) { // check if king pos k is in check given queen pos q
    if(q[0] === k[0] && q[1] === k[1]) return false; // queen captured, not in check
    
    if(q[0] === k[0] || q[1] === k[1] || (Math.abs(q[0] - k[0]) === Math.abs(q[1] - k[1])))
      return true;
    
    return false;
  }
  
  function onBoard(a) { // check if position a is on the board
    if(a[0] >= 1 && a[0] <= 8 && a[1] >= 1 && a[1] <= 8)
      return true;
    return false;
  }
  
  var moves = [];
  if(inCheck(arr[0], arr[1])) {
    for(var i = -1; i <= 1; i ++) {
      for(var j = -1; j <= 1; j ++) {
        if(i === 0 && j === 0)
          continue;
        
        var move = [king[0] + i, king[1] + j];
        if(onBoard(move) && !inCheck(queen, move)) {
          moves.push(move.slice());
        }
      }
    }
  } else {
    return -1; 
  }
  
  return moves.length;
}
