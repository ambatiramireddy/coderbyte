function DistinctList(arr) { 

  var uniq = arr.slice() // slice makes copy of array before sorting it
   .sort(function(a,b){
     return a - b;
   })
   .reduce(function(a,b){
     if (a.slice(-1)[0] !== b) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
     return a;
   },[]);
  return arr.length - uniq.length; 
         
}
