function AlphabetRunEncryption(str) { 
  var decrypted = ''; // store decrypted string
  
  var groups = []; // break encrypted string into groups
  
  var strArr = str.split("").reverse();
  
  var start = 0; // track start of current group of characters to slice
  for(var i = 0; i < strArr.length; i ++) {
    if(i !== start) {
      if(strArr[i] === 'N' ||
         strArr[i] === 'R' ||
         strArr[i] === 'L' ||
         strArr[i] === 'S')
      {
        groups.push(strArr.slice(start, i));
        start = i;
      }
    }
    
    if(strArr[i] === 'N' || strArr[i] === 'R' || strArr[i] === 'L') { // repeated letter (N) or 1 letter run (R, L)
      groups.push(strArr.slice(start, i + 2));
      i += 1;
      start = i + 1;
      continue;
    }
    
    if(strArr[i] === 'S') { // 0 letter run (S)
      groups.push(strArr.slice(start, i + 3));
      i += 2;
      start = i + 1;
      continue;
    }
    
    if(i !== start &&
       Math.abs(strArr[i].charCodeAt(0) - strArr[i - 1].charCodeAt(0)) !== 1) // check for different runs
    {
      groups.push(strArr.slice(start, i));
      start = i;
      continue;
    }
  }
  if(start < strArr.length)
    groups.push(strArr.slice(start)); // any leftover of encrypted string -> group
  
  
  groups = groups.map(function(a) { return a.reverse().join(""); }).reverse();
  
  groups.forEach(function(a) { // decrypt!
    if(a[a.length - 1] === 'N') { // repeat (N)
      decrypted += a[0];
      return;
    }
    
    if(a[a.length - 1] === 'R') { // right (R)
      if(decrypted.length === 0) {
        decrypted += String.fromCharCode(a.charCodeAt(0) - 1); // add letter before
      }
      decrypted += String.fromCharCode(a.charCodeAt(0) + 1); // add letter after
      return;
    }
    
    if(a[a.length - 1] === 'L') { // left (L)
      if(decrypted.length === 0) {
        decrypted += String.fromCharCode(a.charCodeAt(0) + 1); // add letter after
      }
      decrypted += String.fromCharCode(a.charCodeAt(0) - 1); // add letter before
      return;
    }
    
    if(a[a.length - 1] === 'S') { // 0 letter run (S)
      if(decrypted.length == 0) {
        decrypted += a[0]; 
      }
      decrypted += a[1];
      return;
    }
    
    var direction = a.charCodeAt(1) - a.charCodeAt(0); // +1 if going RIGHT, -1 LEFT
    if(decrypted.length == 0) {
    	decrypted += String.fromCharCode(a.charCodeAt(0) - direction);
    }
    decrypted += String.fromCharCode(a.charCodeAt(a.length - 1) + direction);
  });
  
  return decrypted;
}
