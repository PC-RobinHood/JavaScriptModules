var n = 7;
var ar = [1, 2, 1, 2, 1, 2, 3];

function findPairs(n,ar){
    var res = 0;

    ar.sort();
    for (let i = 0; i < n; i++) {
      if (ar[i] == ar[i + 1]) {
        i++;
        res++;
      }
    }
    return res;
  }