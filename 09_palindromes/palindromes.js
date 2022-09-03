const palindromes = function (str) {
    re = /[\W_]/g;
    let lowJoinStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowJoinStr.split('').reverse().join('');
    return reverseStr === lowJoinStr;
};

// Do not edit below this line
module.exports = palindromes;
