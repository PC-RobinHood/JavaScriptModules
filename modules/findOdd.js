  var l = 0
  var r = 10
  
  function findOdd(l, r) {
    var odds = [];
  
    for (x = l; x <= r; x++) {
      if (x % 2 != 0) {
        odds.push(x);
      }
    }
    return odds;
  }