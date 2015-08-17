function PalindromeTwo(str) { 
  str = str.replace(/\W/gi,"").toLowerCase();
  return str.split("").reverse().join("") == str; 
}
