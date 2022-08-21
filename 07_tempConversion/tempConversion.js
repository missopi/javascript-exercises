const ftoc = function(faranheit) {
  let fTemp = faranheit;
  let fToCel = (fTemp - 32) * 5/9; 
  let fRounded = Math.round(fToCel * 10) / 10;
  return fRounded;
};

const ctof = function(celcius) {
  let cTemp = celcius;
  let cToFar = cTemp * 5/9 + 32;
  let cRounded = Math.round(cToFar * 10) / 10;
  return cRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
