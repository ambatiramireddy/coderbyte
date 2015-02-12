function OverlappingRectangles(strArr) { 

  var coordinates = strArr[0].replace(/[\(\)]/gi, "").split(',');
  
  function box(arr) {
    // takes [x1, y1, x2, y2, x3, y3, x4, y4]
    // returns object with x, y, width, height, where x, y is upper left coord
    var xCoord = [arr[0], arr[2], arr[4], arr[6]].sort();
    var yCoord = [arr[1], arr[3], arr[5], arr[7]].sort();
    var x = xCoord.reduce(function(a, b) { return Math.min(a, b); });
    var y = yCoord.reduce(function(a, b) { return Math.max(a, b); });
    var w = xCoord[xCoord.length - 1] - xCoord[0];
    var h = yCoord[yCoord.length - 1] - yCoord[0];
    
    return {x: x,
            y: y,
            width: w,
            height: h};
  }
  
  var rect1 = box(coordinates.splice(0, 8));
  var rect2 = box(coordinates);
    
  if(rect1.x + rect1.width <= rect2.x ||
     rect2.x + rect2.width <= rect1.x ||
     rect1.y - rect1.height >= rect2.y ||
     rect2.y - rect2.height >= rect1.y) //  no overlap
    return 0;
  
  var xOverlap = 0;
  var yOverlap = 0;
  
  if(rect1.x + rect1.width > rect2.x && rect1.x + rect1.width <= rect2.x + rect2.width) {
    xOverlap = rect1.x + rect1.width - rect2.x;
  } else {
    xOverlap = rect2.x + rect2.width - rect1.x;
  }
  
  if(rect1.y - rect1.height <= rect2.y && rect1.y - rect1.height > rect2.y - rect2.height)
    yOverlap = rect2.y - (rect1.y - rect1.height);
  else
    yOverlap = rect1.y - (rect2.y - rect2.height);
  
  return Math.floor(rect1.width / xOverlap) * Math.floor(rect1.height / yOverlap);     
}
