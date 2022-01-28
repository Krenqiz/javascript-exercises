const palindromes = function (_input) {
    _input === 'string';
    let cleanInput = _input.replace(/[,.*+?!^${}()[ ]|[\]\\]/g, '');
    let reversedInput = cleanInput.split("").reverse().join("");
    if(cleanInput.toLowerCase() == reversedInput.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

