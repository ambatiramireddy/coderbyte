function BlackjackHighest(strArr) { 

  var cards = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 10,
    queen: 10,
    king: 10,
    ace: 11,
    aceOne: 1
  };
  
  var tenCardsPriority = {
    ten: 0,
    jack: 1,
    queen: 2,
    king: 3
  };
  
  var cardSort = function(a, b) { // sort cards descending (face card priority)
    if(cards[b] === cards[a]) {
       return tenCardsPriority[b] - tenCardsPriority[a];
    } else
      return cards[b] - cards[a];
  };
  
  var cardSum = function(a, b) { // add value of cards
    return a + cards[b]; 
  };
    
  if(strArr.reduce(cardSum, 0) > 21 && strArr.indexOf('ace') !== -1) { // if over 21 and has ace
    strArr[strArr.indexOf('ace')] = 'aceOne'; // convert ace to 1
  }
  strArr.sort(cardSort);
  sum = strArr.reduce(cardSum, 0);
  
  var result = '';
  if(sum > 21)
    result += 'above';
  else if(sum < 21)
    result += 'below';
  else
    result += 'blackjack';
  
  return result + ' ' + strArr[0];
}
