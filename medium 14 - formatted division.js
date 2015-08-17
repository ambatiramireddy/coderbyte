function FormattedDivision(num1,num2) { 

  return (num1 / num2).toFixed(4).split("").reverse().reduce(function(a, b) {
    if(a.length > 0 && a.indexOf(".") !== -1) {
      if(((a.length - a.indexOf(".") - 1) - 3) % 4 == 0)
        a.push(",");
    }
    
    a.push(b);
    return a;
  }, []).reverse().join(""); 
}
