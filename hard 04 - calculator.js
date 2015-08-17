function Calculator(str) {  // assuming use of eval() is allowed...

  // formatting string to deal with implied multiplication
  var parenParen = /(\))(\()/gi; // ...)(... -> ...)*(...
  var parenNum = /(\))([0-9]+)/gi; // ...)x -> ...)*x
  var numParen = /([0-9]+)(\()/gi; // x(... -> x*(...

  return eval(str.replace(parenParen, "$1*$2")
              .replace(parenNum, "$1*$2")
              .replace(numParen, "$1*$2"));
}
