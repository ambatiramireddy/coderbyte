function KnightJumps(str) { 
  
  var pos = str.replace(/[\(\)]/gi, "").split(' ').map(Number);
  
  function withinBoard(arr) {
    if(arr.constructor !== Array) return false;
    if(arr.length !== 2) return false;
    return arr[0] >= 1 && arr[0] <= 8 && arr[1] >= 1 && arr[1] <= 8;
  };
  
  var spaces = [];
  var moves = [[-1,-2],
               [-1,+2],
               [+1,-2],
               [+1,+2],
               [-2,-1],
               [-2,+1],
               [+2,-1],
               [+2,+1]];
  
  for(var i = 0; i < moves.length; i ++) {
    var newPos = [pos[0] + moves[i][0], pos[1] + moves[i][1]];
    if(withinBoard(newPos)) spaces.push(newPos.slice());
  }
  
  return spaces.length;
}
