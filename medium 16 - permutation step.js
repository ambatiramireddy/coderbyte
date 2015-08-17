function PermutationStep(num) { 

  var arr = num.toFixed().split("");
  for(i = 2; i <= arr.length; i ++) { // i is the # of digits being permutated to get to next biggest num
    var temp = arr.slice().splice(arr.length - i, i).sort(function(a, b) { return b - a;}); // sort last i elements in decreasing order
    if(arr[arr.length - i] == temp[0]) // if last i elements were already in decreasing order, increment i
      continue;
    
    var leading = arr[arr.length - i];
    
    var a = arr.slice().splice(0, arr.length - i);
    temp = temp.reverse(); // sort increasing order
    for(var j = 0; j < temp.length; j ++) {
      if(temp[j] > leading) {
        var remove = temp.splice(j, 1)[0];
        temp.unshift(remove);
        break;
      }
    }
    var b = temp.shift();
    var c = temp.sort(); // sort increasing
    a.push(b);
    
    Array.prototype.push.apply(a, c);  // push all elements of c to a
    var check = Number(a.join(""));
    
    if(check > num)
      return check;
  }
  return -1         
}
