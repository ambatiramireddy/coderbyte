function ABCheck(str) { 
  return /a[^.]{3}b/gi.test(str);
}
