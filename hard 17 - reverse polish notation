function ReversePolishNotation(str) { 

  var expression = str.split(' '); 
  var operators = ['+', '-', '*', '/'];
    
  return expression.reduce(function(a, b, index, array) {
    if(a.length === 0 || operators.indexOf(b) === -1)
      a.push(b);
    
    if(operators.indexOf(b) !== -1) { // is operator
      // a = [..., x, y]
      // b = '+'
      // then want new a = [..., (x + y)]
      a[a.length - 2] = eval(a[a.length - 2] + b + a[a.length - 1]); // eval and replace second to last element
      a.pop(); // pop!
    }
    
    return a;
  }, [])[0];
}
