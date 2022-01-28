const fibonacci = function(F) {
    let n1 = 1, n2 = 0, sum;

    while(F >= 1) {
    sum = n1;
    n1 = n1 + n2;
    n2 = sum;
    F--;
    }
    if (F < 0) {
        return 'OOPS';
    } else {
        return n2;
    }

}




console.log(fibonacci(7));

// Do not edit below this line
module.exports = fibonacci;
