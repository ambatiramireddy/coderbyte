function PrimeMover(num) { 

  var isPrime = function(n) { // returns true if n is prime, false otherwise
    if(n == 1) return false;
  
    for(var i = 2; i < n; i ++) {
      if(n % i == 0)
        return false;
    }
    return true;
  }
  
  var primes = [];
  var x = 2;
  while(primes.length < num) { // add prime numbers to primes array until desired length is reached
    if(isPrime(x)) {
      primes.push(x);
    }
    x++;
  }
  
  return primes[num - 1]; 
}
