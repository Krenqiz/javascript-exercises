const ftoc = function(fahrenheit) {
  let convertToC_rounded = Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
  return convertToC_rounded;
};

const ctof = function(celsius) {
  let convertToF_rounded = Math.round((celsius * (9/5) + 32) * 10) / 10;
  return convertToF_rounded;
};





// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
