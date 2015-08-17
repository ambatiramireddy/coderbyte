function DivisionStringified(num1,num2) { 
  return (num1 / num2).toFixed(0)
      .split("")
      .reverse()
      .reduce(function(a, b) {
        if((a.length - 3) % 4 == 0)
          a.push(',');
        a.push(b);
        return a;
      }, [])
      .reverse()
      .join("");
}
