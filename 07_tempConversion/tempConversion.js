const ftoc = function(faranheit) {
  let fTemp = faranheit;
  let fToCel = (fTemp - 32) * 5/9; 
  return fToCel;
};

const ctof = function(celcius) {
  let cTemp = celcius;
  let cToFar = cTemp * 5/9 + 32;
  return cToFar;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
