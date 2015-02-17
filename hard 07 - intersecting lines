function IntersectingLines(strArr) { 

  var points = strArr.map(function(a, index, array) {
    return a.replace(/[\(\)]/gi,"").split(',').map(Number);
  });
  
  function Line(point1, point2) {
    if(point2[0] < point1[0]) {
      var temp = point2;
      point2 = point1;
      point1 = temp;
    }
    
    this.x0 = point1[0];
    this.x1 = point2[0];
    this.y0 = point1[1];
    this.y1 = point2[1];
    
    this.slopeNum = this.y1 - this.y0;
    this.slopeDen = this.x1 - this.x0;
    
    this.interNum = this.y0 * this.slopeDen - this.x0 * this.slopeNum;
    this.interDen = this.slopeDen;
  }
  
  function simplify(num, den) {
    var sign = (num/den)/Math.abs(num/den);
    num = Math.abs(num);
    den = Math.abs(den);
    var n = Math.min(num, den);
    var gcd = 1;
    for(var i = 1; i <= n; i ++) {
      if(num % i === 0 && den % i === 0)
        gcd = i;
    }
    return [sign * num/gcd, den/gcd];
  }
    
  var line1 = new Line(points[0], points[1]);
  var line2 = new Line(points[2], points[3]);
   
  var xNum, xDen;
  if(line1.slopeDen === 0 || line2.slopeDen === 0) { // check for vertical lines (slope = NaN)
    if(line1.slopeDen === 0 && line2.slopeDen === 0 && line2.x0 !== line1.x0)
      return "no intersection";
    
    if(line1.slopeDen === 0) { // move vertical line to line2
      var temp = line2;
      line2 = line1;
      line1 = temp;
    }
    xNum = line2.x0;
    xDen = 1;
    
  } else { 
    if(line1.slopeNum/line1.slopeDen == line2.slopeNum/line2.slopeDen) // check parallel
      return "no intersection";

    xNum = -(line1.slopeDen * line2.slopeDen * (line1.interNum * line2.interDen - line2.interNum * line1.interDen));
    xDen = line1.interDen * line2.interDen * (line1.slopeNum * line2.slopeDen - line2.slopeNum * line1.slopeDen);
    var xSimplify = simplify(xNum, xDen);
    xNum = xSimplify[0];
    xDen = xSimplify[1];
    var x = xNum/xDen;
  }
        
  var result = '';

  result += '(' + xNum;
  if(xDen > 1)
    result += '/' + xDen;
  result += ',';
      
  var yNum = xNum * line1.slopeNum * line1.interDen + line1.interNum * xDen * line1.slopeDen;
  var yDen = xDen * line1.slopeDen * line1.interDen;
  var ySimplify = simplify(yNum, yDen);
  yNum = ySimplify[0];
  yDen = ySimplify[1];
  var y = yNum/yDen;
  
  result += yNum;
	if(yDen > 1)
      result += '/' + yDen;
    result += ')';
  
  return result;
}
