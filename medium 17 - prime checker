function PrimeChecker(num) { 
  
  function PermutationStep(num); // returns the next largest number using permutations of digits of num, or -1 if no larger permutations // see above
  function PrimeTime(num); // returns true if number is prime, false otherwise // see above
  
  var x = Number(num.toFixed().split("").sort().join("")); // set x to smallest permutation of digits of num
  while(PrimeTime(x) == false) {
    x = PermutationStep(x);
    if(x == -1)
      return 0;
  }
  return 1;
}
