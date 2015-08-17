function ExOh(str) { 
  if(str.match(/x/gi) == null && str.match(/o/gi) == null) return true; // if 0 x’s and 0 o’s
  if(str.match(/x/gi) == null || str.match(/o/gi) == null) return false; // if 0 x’s or 0 o’s
  return str.match(/x/gi).length == str.match(/o/gi).length; 
}
