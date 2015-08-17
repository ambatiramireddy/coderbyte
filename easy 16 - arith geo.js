function ArithGeo(arr) {   
  if(arr.length === 1) return -1;
  
  var a = {};
  var g = {};
  for( var i = 1; i < arr.length; i++ ) {
	a[arr[i] - arr[i - 1]] = arr[i] - arr[i - 1];
    g[arr[i]/arr[i - 1]] = arr[i]/arr[i - 1];
  }
  
  return Object.keys(a).length === 1 ? 'Arithmetic' : Object.keys(g).length === 1 ? 'Geometric' : -1;         
}
