function SimpleSymbols(str) { 
  return ('='+str+'=').match(/([^\+][a-z])|([a-z][^\+])/i) === null;
}
