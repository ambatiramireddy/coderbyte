function DashInsert(str) { 

  return str.split("").slice().reduce(function(a, b) {
    if(Number(a.slice(-1)[0]) % 2 == 1 && Number(b) % 2 == 1) // if last element of a and b are odd, add dash
      a.push('-');

    a.push(b);
    return a;
  }, []).join(""); 
}
