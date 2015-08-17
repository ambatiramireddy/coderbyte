function CoinDeterminer(num) { 

  var coins = [1, 5, 7, 9, 11];
  var count = 0;
  
  var numCopy = num;

  for(var i = 0; i < coins.length; i ++) { // run this check 5 times
    var countTest = 0;
    numCopy = num;

    for(var j = 0; j < coins.length; j ++) {
      var subcount = Math.floor(numCopy / coins[coins.length - j - 1]);
      countTest += subcount;
      numCopy -= subcount * coins[coins.length - j - 1];
    }
    
    if(countTest < count || count == 0)
      count = countTest;
    
    coins.pop();
  }
  
  return count;  
}
