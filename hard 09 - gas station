function GasStation(strArr) { 
  
  var num = Number(strArr[0]);
  var stations = strArr.slice(1).map(function(a) {
    return a.split(':').map(Number);
  });
     
  function solve(gas, station, start) {
    gas = gas + stations[station][0] - stations[station][1];
    if(gas < 0)
      return 0; // failed
    
    station = (station + 1) % num;
    if(station === start)
      return 1; // done
       
    return solve(gas, station, start); //next station
  }
    
  for(var i = 0; i < num; i ++) {
    if(solve(0, i, i) === 1)
      return i + 1;
  }
  return 'impossible';
}
