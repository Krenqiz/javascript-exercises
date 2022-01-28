const removeFromArray = function(...args) {
    
    let array = args[0];
    return array.filter(rip => !args.includes(rip));
}







// Do not edit below this line
module.exports = removeFromArray;


