function CountingMinutes(str) { 

  var match = /(\d{1,2}):(\d{1,2})(am|pm)-(\d{1,2}):(\d{1,2})(am|pm)/.exec(str);
  
  var minute = function(h, m, ampm) {
    var time = (Number(h) % 12) * 60 + Number(m);
    if(ampm == "pm") time += 12 * 60;
    return time;
  };
  
  var time1 = minute(match[1], match[2], match[3]);
  var time2 = minute(match[4], match[5], match[6]);
  
  if(time2 < time1) time2 += 24 * 60;
  
  return time2 - time1;
}
