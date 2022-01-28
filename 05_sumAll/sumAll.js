const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'ERROR';
    }
    if (a < 0 || b < 0) {
        return 'ERROR';
    }
    sum = 0;

    if (a < b) {
        for(; a <= b; a++) {
            sum += a;
        }
    return sum;
    }
    if (a > b) {
        for(; a >= b; a--) {
            sum += a;
        }
    return sum;
    }
}


  
  

// Do not edit below this line
module.exports = sumAll;
