function MostFreeTime(strArr) { 

  var freeTimes = [];
  
  var minute = function(h, m, ampm) { // takes hours, minutes, AM/PM and returns minutes
    var time = (Number(h) % 12) * 60 + Number(m);
    if(ampm == "PM") time += 12 * 60;
    return time;
  };
  
  var format = function(time) { // takes minutes and returns string formatted HH:MM
    var h = Math.floor(time / 60).toFixed();
    var m = (time % 60).toFixed();

    if(h < 10) h = '0' + h;
    if(m < 10) m = '0' + m;
    
    return h + ':' + m;
  }

  strArr.sort(function(a, b) { // sort events in order
    var matchA = /(\d{1,2}):(\d{1,2})(AM|PM)-(\d{1,2}):(\d{1,2})(AM|PM)/.exec(a);
    var matchB = /(\d{1,2}):(\d{1,2})(AM|PM)-(\d{1,2}):(\d{1,2})(AM|PM)/.exec(b);
    var timeA = minute(matchA[1], matchA[2], matchA[3]);
    var timeB = minute(matchB[1], matchB[2], matchB[3]);
    return timeA - timeB;
  }); 
  
  for(var i = 1; i < strArr.length; i ++) {
    var matchFirst = /(\d{1,2}):(\d{1,2})(AM|PM)-(\d{1,2}):(\d{1,2})(AM|PM)/.exec(strArr[i - 1]); // first event
    var matchSecond = /(\d{1,2}):(\d{1,2})(AM|PM)-(\d{1,2}):(\d{1,2})(AM|PM)/.exec(strArr[i]); // second event
    
    var timeFirstEnd = minute(matchFirst[4], matchFirst[5], matchFirst[6]); // ending time of first event
    var timeSecondBeg = minute(matchSecond[1], matchSecond[2], matchSecond[3]); // beginning time of second event
    
    freeTimes.push(timeSecondBeg - timeFirstEnd);
  }
   
  
  return format(freeTimes.sort(function(a, b) { return b - a; })[0]); // sort descending, convert greatest free time into proper format
}
